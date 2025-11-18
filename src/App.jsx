import React, { useState } from "react";
import MainForm from "./components/MainForm";
import JobQuestions from "./components/JobQuestions";
import SuccessPage from "./components/end";

// 👇 استيراد supabase
import { createClient } from "@supabase/supabase-js";

// 👇 إنشاء عميل Supabase
const supabase = createClient(
  "https://pdyzylmlacucxfjmzjsa.supabase.co",
  "sb_publishable_4ZZYh7TrJjUQXkMfGJoAcw_o4s8gyqc"
);

export default function App() {
  const [step, setStep] = useState(1);
  const [mainData, setMainData] = useState(null);

  // إرسال بيانات الخطوة الأولى فقط لجدول الأسئلة العامة
  const sendMainToGeneralTable = async (data) => {
    const tableName = "الأسئلة العامة - المقدمة لكل ادارة";

    const { error } = await supabase.from(tableName).insert([data]);

    if (error) {
      console.error("❌ خطأ أثناء إرسال البيانات العامة:", error);
      alert("⚠️ فشل إرسال البيانات العامة!");
      return false;
    }

    return true;
  };

  const uploadFile = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("cv_folder") // 👈 اسم الفولدر في Storage
      .upload(fileName, file);

    if (error) {
      console.error("❌ فشل رفع الملف:", error);
      return null;
    }

    // الحصول على رابط التحميل
    const { data: publicUrlData } = supabase.storage
      .from("cv_folder")
      .getPublicUrl(fileName);

    console.log(publicUrlData);

    return publicUrlData.publicUrl; // 👈 أرجع الرابط
  };

  const handleNext = async (data) => {
    console.log("📋 بيانات Main:", data);

    // حفظ البيانات في state
    setMainData(data);

    // إرسال البيانات لجدول الأسئلة العامة
    const success = await sendMainToGeneralTable(data);
    if (!success) return;

    setStep(2);
  };

  // الرجوع للخطوة الأولى
  const handleBack = () => {
    setStep(1);
  };

  // ⬅️ دالة إرسال البيانات حسب الـ department
  const sendToSupabase = async (department, data) => {
    console.log("📤 إرسال البيانات لجدول:", department);
    const { error } = await supabase.from(department).insert([data]);

    if (error) {
      console.error("❌ خطأ أثناء الإرسال:", error);
      alert("⚠️ حدث خطأ أثناء إرسال الطلب!");
      return false;
    }

    return true;
  };

  // إرسال الطلب النهائي
  const handleSubmit = async (finalData) => {
    console.log("🚀 البيانات النهائية للإرسال:", finalData);

    const department = mainData.department; //  جدول الإرسال المختار من المستخدم

    if (!department) {
      alert("⚠️ لا يوجد قسم محدد!");
      return;
    }

    let cvUrl = null;

    if (finalData.jobAnswer?.cv_url instanceof File) {
      cvUrl = await uploadFile(finalData.jobAnswer.cv_url);
      finalData.jobAnswer.cv_url = cvUrl; // عدّل القيمة من ملف إلى رابط
    }

    // دمج بيانات الخطوتين
    const fullData = {
      ...mainData,
      ...finalData,
      created_at: new Date(),
    };

    const success = await sendToSupabase(department, finalData.jobAnswers);

    if (!success) return;

    alert("✅ تم تقديم الطلب بنجاح!");

    setMainData(fullData);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 1 && <MainForm onNext={handleNext} />}

      {step === 2 && mainData && (
        <JobQuestions
          job={mainData.job}
          mainData={mainData}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}

      {step === 3 && (
        <SuccessPage
          applicationData={mainData}
          onBackToHome={() => {
            setStep(1);
            setMainData(null);
          }}
        />
      )}
    </div>
  );
}
