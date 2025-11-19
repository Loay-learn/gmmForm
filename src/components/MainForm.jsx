import React, { useState } from "react";
import lo from "../../public/lo.jpg";
export default function MainForm({ onNext }) {
  const [formData, setFormData] = useState({
    Name: "",
    Gmail: "",
    Age: "",
    Gender: "",
    academic_level: "",
    major: "",
    whatsapp_num: "",
    Telegram_num: "",
    Telegram_username: "",
    LinkedIn_page: "",
    Country: "",
    City: "",
    Internet_stability: "",
    electricity_stability: "",
    your_freetime: "",
    department: "",
    job: "",
    culture_responsibility_importance: "",
    culture_responsibility_experience: "",
    culture_initiative_experience: "",
    culture_full_responsibility_concept: "",
    culture_team_high_performance: "",
    culture_self_development: "",
    experience_volunteering: "",
    experience_position_details: "",
    skill_project_management: "",
    skill_problem_solving: "",
    skill_time_management: "",
    skill_team_leadership: "",
    skill_analytical_thinking: "",
    skill_creative_thinking: "",
    skill_content_writing: "",
    skill_report_writing: "",
    skill_planning: "",
    skill_communication_persuasion: "",
    skill_communication_persuasion: "",
    skill_flexibility: "",
    skill_fast_learning: "",
    skill_excel: "",
    skill_ms_office: "",
    skill_google_workspace: "",

  });

  const departments = {
    "ادارة عائلة قمم": [
      "نائب مسؤول إدارة عائلة قمم",
      "مسؤول/ نائب مسؤول قسم القيم والثقافة",
      "عضو قسم القيم والثقافة",
      "عضو قسم شؤون سواعد قمم",
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
     "نائب مسؤول قسم النوادي",
     "مسؤول الصفحات الإعلامية",
     "النادي الإنجليزي - منسق فعاليات",
     "النادي الفكر والثقافة - مسؤول العضوية والمتابعة",
     "مسؤول قسم القراءة",
     "مسؤول القسم الأدبي",
     "النادي الديني - نائب مسؤول القسم الشرعي",
     "مشرف القسم الشرعي",
     "نائب قسم المحتوى التوجيهي",
     "مسؤول ضبط الجودة",
     "مشرف تحديات المسار العلمي/الأدبي",
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
    "ادارة العلاقات العامة": ["مسؤول العلاقات العامة","نائب مسؤول العلاقات العامة"]
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
          <div className="inline-flex items-center justify-center   sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 shadow-lg">
             <img className="rounded-xl" src={lo} alt="" />
          </div>
         <h1 className="text-center font-bold text-xl sm:text-2xl mb-4">
  حملة التعيين الثالثة – منصة قمم التعليمية
</h1>

<p className="text-slate-600 text-sm sm:text-base px-4 leading-7">
  انضم إلى رحلة التميز التعليمي مع منصة قمم - حيث لا نعلم الطلاب فحسب،
  بل نصنع مستقبل السودان✨
  <br /><br />
  هل ترى في التعليم رسالةً لا مجرد مهنة؟ هل تشعر أن لديك ما يُميزك لتكون
  جزءاً من ثورة تعليمية حقيقية؟
  <br /><br />
  منصة قمم التعليمية تواصل مسيرتها الهادفة لتمكين طلاب الشهادة السودانية عبر
  محتوى تعليمي متميز مجاني، ونبحث الآن عن قلوبٍ عاملة وعقولٍ مبدعة تنضم
  لرحلتنا في الحملة الثانية للتعيين.
  <br /><br />
  📢 نطلق اليوم حملة التعيين الثالثة، ونفتح أبوابنا لأرواحٍ طموحة، وعقولٍ
  متحمسة، وقلوبٍ تؤمن بأن التعليم هو أقوى أدوات التغيير.
  <br /><br />
  إذا كنت ترغب في ترك أثر حقيقي، وتؤمن بقوة العمل الجماعي، وتحلم ببيئة
  تحفز الإبداع والتميز - فقد وجدت مكانك!
  <br /><br />
  📌 للاطلاع على التفاصيل الكاملة للمهام والوصف الوظيفي:
  <br />
  🔗{" "}
  <a
    href="https://drive.google.com/drive/folders/1FaeSyuY3ke5tAs3NHZUeMtiZsxac26H1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 font-semibold hover:underline"
  >
    من هنا
  </a>
  <br /><br />
  ✍️ نرحب بطلبك ونسعد بقراءة كل كلمة ستكتبها، فربما تكون رسالتك هذه بداية
  رحلة جميلة معاً.
  <br /><br />
  نحن ننتظر انضمامك بفارغ الصبر، ولعل طلبك هذا يكون البداية لصداقة مهنية
  رائعة وفريق واحد يكتب مستقبلاً أفضل للتعليم في وطننا🪄
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
                    value={formData.Name}
                    onChange={(e) => handleChange("Name", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="Gmail"
                    placeholder="example@email.com"
                    value={formData.Gmail}
                    onChange={(e) => handleChange("Gmail", e.target.value)}
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
                    value={formData.Age}
                    onChange={(e) => handleChange("Age", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    الجنس <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.Gender}
                    onChange={(e) => handleChange("Gender", e.target.value)}
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
                    value={formData.academic_level}
                    onChange={(e) => handleChange("academic_level", e.target.value)}
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
                        value={formData.whatsapp_num}
                        onChange={(e) => handleChange("whatsapp_num", e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      {/* <input
                        type="text"
                        placeholder="249+"
                        value={formData.whatsappCode}
                        onChange={(e) => handleChange("whatsappCode", e.target.value)}
                        className="w-20 px-3 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-center"
                      /> */}
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
                        value={formData.Telegram_num}
                        onChange={(e) => handleChange("Telegram_num", e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      {/* <input
                        type="text"
                        placeholder="249+"
                        value={formData.telegramCode}
                        onChange={(e) => handleChange("telegramCode", e.target.value)}
                        className="w-20 px-3 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-center"
                      /> */}
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
                      onChange={(e) => handleChange("Telegram_username", e.target.value)}
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
                      value={formData.LinkedIn_page}
                      onChange={(e) => handleChange("LinkedIn_page", e.target.value)}
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
                    value={formData.Country}
                    onChange={(e) => handleChange("Country", e.target.value)}
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
                    value={formData.City}
                    onChange={(e) => handleChange("City", e.target.value)}
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
                    value={formData.Internet_stability}
                    onChange={(e) => handleChange("Internet_stability", e.target.value)}
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
                    value={formData.electricity_stability}
                    onChange={(e) => handleChange("electricity_stability", e.target.value)}
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
                  value={formData.your_freetime}
                  onChange={(e) => handleChange("your_freetime", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                />
              </div>
            </div>


            {/* القسم الجديد: اسئلة التوافق الثقافي */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">اسئلة التوافق</h2>
              </div>


              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
تعد المسؤولية إحدى القيم الأساسية في قمم لما نراه من أهمية العمل في مجال التعليم. ما رأيك في ذلك؟                  </label>
                  <input
                    type="text"
                    // placeholder="الدولة التي تقيم بها"
                    value={formData.culture_responsibility_importance}
                    onChange={(e) => handleChange("culture_responsibility_importance", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
اذكر من تجاربك في الحياة العامة ما يتمثل فيه مفهوم المسؤولية في عملك.                  </label>
                  <input
                    type="text"
                    value={formData.culture_responsibility_experience}
                    onChange={(e) => handleChange("culture_responsibility_experience", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
تحدث عن تجربة مبادرة قمت باقتراحها وقيادتها (سواء نجحت أو فشلت).                      </label>
                  <input
                    type="text"
                    value={formData.culture_initiative_experience}
                    onChange={(e) => handleChange("culture_initiative_experience", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>

                 <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
كل عضو في قمم مسؤول بالكامل عن قمم. كيف يمكن لتجاربك السابقة أن تساعد الفريق في تحقيق أعلى إنتاجية وأفضل أداء؟                  </label>
                  <input
                    type="text"
                    value={formData.culture_full_responsibility_concept}
                    onChange={(e) => handleChange("culture_full_responsibility_concept", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    كيف تعمل على تطوير مهاراتك واكتساب مهارات جديدة بصورة مستمرة؟
                  </label>
                  <input
                    type="text"
                    value={formData.culture_team_high_performance}
                    onChange={(e) => handleChange("culture_team_high_performance", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                   ما أهم الاستراتيجيات التي يمكن للفريق اتباعها لزيادة الإبداع والابتكار في البرامج المختلفة؟
                  </label>
                  <input
                    type="text"
                    value={formData.culture_self_development}
                    onChange={(e) => handleChange("culture_self_development", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>



              </div>
            </div>
          

            {/* القسم الجديد: اسئلة الخبرات والمهارات  */}
            <div>
               <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">اسئلة الخبرات والمهارات</h2>
              </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    هل عملت من قبل في العمل التطوعي؟
                  </label>

                  <select
                    value={formData.experience_volunteering}
                    onChange={(e) => handleChange("experience_volunteering", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">اختر الاجابة</option>
                    <option value="نعم">نعم</option>
                    <option value="لا">لا</option>
                  </select>
                </div>

                 


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                     هل عملت من قبل في منصب مشابه في العمل التطوعي أو الراجحي؟ إذا كانت الإجابة نعم، فهل تود أن تحدث عن المنصب الذي كنت تعمل به من ناحية المهام أو المشاريع التي قمت بها والمهرات التي اكتسبتها من خلال العمل في هذا المنصب
                  </label>
                  <input
                    type="text"
                    
                    value={formData.experience_position_details}
                    onChange={(e) => handleChange("experience_position_details", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  />
                </div>
            </div>


            {/* tablr      */}

            <div>
               <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900"> حدد مستواك في المهارات التالية</h2>
              </div>


              <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
               إدارة المشاريع
                  </label>

                  <select
                    value={formData.skill_project_management}
                    onChange={(e) => handleChange("skill_project_management", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    إدارة الوقت
                   </label>

                  <select
                    value={formData.skill_time_management}
                    onChange={(e) => handleChange("skill_time_management", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                  حل المشكلات وإدارة الأزمات
                   </label>

                  <select
                    value={formData.skill_problem_solving}
                    onChange={(e) => handleChange("skill_problem_solving", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                  قيادة الفرق
                   </label>

                  <select
                    value={formData.skill_team_leadership}
                    onChange={(e) => handleChange("skill_team_leadership", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
               التفكير التحليلي
                  </label>

                  <select
                    value={formData.skill_analytical_thinking}
                    onChange={(e) => handleChange("skill_analytical_thinking", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
               التفكير الإبداعي
                  </label>

                  <select
                    value={formData.skill_creative_thinking}
                    onChange={(e) => handleChange("skill_creative_thinking", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                كتابة المحتوى
                  </label>

                  <select
                    value={formData.skill_content_writing}
                    onChange={(e) => handleChange("skill_content_writing", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>




                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
              كتابة التقارير
                  </label>

                  <select
                    value={formData.skill_report_writing}
                    onChange={(e) => handleChange("skill_report_writing", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>





                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
             
التخطيط   
                  </label>

                  <select
                    value={formData.skill_planning}
                    onChange={(e) => handleChange("skill_planning", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>





                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
               مهارة الإقناع
                  </label>

                  <select
                    value={formData.skill_communication_persuasion}
                    onChange={(e) => handleChange("skill_communication_persuasion", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>
              


                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
               العمل الجماعي والتعاون
                  </label>

                  <select
                    value={formData.skill_teamwork}
                    onChange={(e) => handleChange("skill_teamwork", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


              
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
              المرونة
                  </label>

                  <select
                    value={formData.skill_flexibility}
                    onChange={(e) => handleChange("skill_flexibility", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
              سرعة التعلم
                  </label>

                  <select
                    value={formData.skill_fast_learning}
                    onChange={(e) => handleChange("skill_fast_learning", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>



               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
              Excel الجداول الرقمية
                  </label>

                  <select
                    value={formData.skill_excel}
                    onChange={(e) => handleChange("skill_excel", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>



               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
              Microsoft Office
                  </label>

                  <select
                    value={formData.skill_ms_office}
                    onChange={(e) => handleChange("skill_ms_office", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
               </div>


               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
             Google Workspace
                  </label>

                  <select
                    value={formData.skill_google_workspace}
                    onChange={(e) => handleChange("skill_google_workspace", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                  >
                    <option value="">حدد مستواك</option>
                    <option value="ضعيف">ضعيف</option>
                    <option value="مقبول">مقبول</option>
                     <option value="جيد">جيد</option>
                      <option value="جيد جداً">جيد جداً</option>
                       <option value="ممتاز">ممتاز</option>
                  </select>
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