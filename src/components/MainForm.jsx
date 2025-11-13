import React, { useState } from "react";

export default function MainForm({ onNext }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    level: "",
    major: "",
    whatsappCode: "",
    whatsapp: "",
    telegramCode: "",
    telegram: "",
    telegramUser: "",
    linkedin: "",
    country: "",
    city: "",
    internet: "",
    electricity: "",
    availability: "",
    department: "",
    job: "",
  });

  const departments = {
    "ادارة عائلة قمم": [
      "نائب مسؤول إدارة عائلة قمم",
      "مسؤول/ نائب مسؤول قسم القيم والثقافة",
      "عضو قسم القيم والثقافة",
      "عضو في قسم شؤون شواغر قمم",
      "منسق عام في قسم التدريب والتطوير",
    ],
    "إدارة البرامج العامة": [
      "عضو الإشراف",
      "مسؤول قسم المحتوى الأكاديمي",
      "مسؤول قواعد البيانات",
      "محلل البيانات",
      "مسؤول / نائب مسؤول قسم المشاريع",
      "عضو قسم المشاريع",
      "عضو البرامج الميدانية",
      "مسؤول / نائب مسؤول قسم المجتمع",
      "عضو قسم المجتمع",
    ],
    "إدارة الإعلام": ["عضو النشر", "كاتب محتوى", "ممنتج"],
    "إدارة المالية": [
      "نائب مسؤول قسم المصروفات",
      "مسؤول قسم الإيرادات",
      "نائب مسؤول قسم الإيرادات",
      "نائب مسؤول التسجيل",
      "عضو الاستفسارات",
      "نائب مسؤول قسم المشاريع",
    ],
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto">
        {/* الرأسية */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            استمارة التقديم على الوظائف
          </h1>
          <p className="text-slate-600 text-sm sm:text-base px-4">
            يرجى ملء جميع الحقول المطلوبة بدقة
          </p>
        </div>

        {/* النموذج */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* القسم الأول: المعلومات الشخصية */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">المعلومات الشخصية</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 mt-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    العمر <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="أدخل عمرك"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    الجنس <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">اختر الجنس</option>
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                </div>
              </div>
            </div>

            {/* القسم الثاني: المعلومات الأكاديمية */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">المعلومات الأكاديمية</h2>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    المستوى الدراسي <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => handleChange("level", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">اختر المستوى الدراسي</option>
                    <option value="ثانوي">ثانوي</option>
                    <option value="طالب جامعي">طالب جامعي</option>
                    <option value="خريج">خريج</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    التخصص الجامعي
                  </label>
                  <input
                    type="text"
                    placeholder="التخصص (إن وجد)"
                    value={formData.major}
                    onChange={(e) => handleChange("major", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* القسم الثالث: وسائل التواصل */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">وسائل التواصل</h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      واتساب
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="رقم الواتساب"
                        value={formData.whatsapp}
                        onChange={(e) => handleChange("whatsapp", e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="249+"
                        value={formData.whatsappCode}
                        onChange={(e) => handleChange("whatsappCode", e.target.value)}
                        className="w-20 px-3 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-center"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      تيليجرام
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="رقم التيليجرام"
                        value={formData.telegram}
                        onChange={(e) => handleChange("telegram", e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="249+"
                        value={formData.telegramCode}
                        onChange={(e) => handleChange("telegramCode", e.target.value)}
                        className="w-20 px-3 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-center"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      اسم المستخدم على تيليجرام
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      value={formData.telegramUser}
                      onChange={(e) => handleChange("telegramUser", e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      صفحة لينكدإن (ان وجدت)
                    </label>
                    <input
                      type="text"
                      placeholder="رابط الملف الشخصي"
                      value={formData.linkedin}
                      onChange={(e) => handleChange("linkedin", e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* القسم الرابع: معلومات الإقامة */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">معلومات الإقامة والبنية التحتية</h2>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    الدولة
                  </label>
                  <input
                    type="text"
                    placeholder="الدولة التي تقيم بها"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    المدينة
                  </label>
                  <input
                    type="text"
                    placeholder="المدينة التي تقيم بها"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 mt-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    استقرار الإنترنت
                  </label>
                  <input
                    type="text"
                    placeholder="مدى استقرار وتوفر الإنترنت لديك"
                    value={formData.internet}
                    onChange={(e) => handleChange("internet", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    استقرار الكهرباء
                  </label>
                  <input
                    type="text"
                    placeholder="مدى استقرار وتوفر الكهرباء لديك"
                    value={formData.electricity}
                    onChange={(e) => handleChange("electricity", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  مدى التفرغ
                </label>
                <input
                  type="text"
                  placeholder="ما مدى تفرغك في الفترة القادمة (4 أشهر)"
                  value={formData.availability}
                  onChange={(e) => handleChange("availability", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* القسم الخامس: الوظيفة المطلوبة */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">الوظيفة المطلوبة</h2>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    القسم <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => {
                      handleChange("department", e.target.value);
                      handleChange("job", "");
                    }}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">اختر القسم</option>
                    {Object.keys(departments).map((dep) => (
                      <option key={dep} value={dep}>
                        {dep}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.department && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      الوظيفة <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.job}
                      onChange={(e) => handleChange("job", e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                    >
                      <option value="">اختر الوظيفة</option>
                      {departments[formData.department].map((job) => (
                        <option key={job} value={job}>
                          {job}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>متابعة إلى الأسئلة</span>
               <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 7l-5 5m0 0l5 5m-5-5h12"
                  />
                </svg>

              </button>
            </div>
          </form>
        </div>

        {/* تذييل */}
        <div className="text-center mt-6 text-slate-500 text-xs sm:text-sm px-4">
          <p>جميع المعلومات المقدمة سرية ولن تستخدم إلا لأغراض التوظيف</p>
        </div>
      </div>
    </div>
  );
}