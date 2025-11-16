import React, { useState } from "react";
import lo from "../../public/lo.jpg";
export default function MainForm({ onNext }) {
  const [formData, setFormData] = useState({
    Name: "",
    Gmail: "",
    Age: "",
    Gender: "",
    Academic_level: "",
    major: "",
    whatsappCode: "",
    whatsapp_num: "",
    telegramCode: "",
    Telegram_num: "",
    Telegram_username: "",
    LinkedIn_page: "",
    Country: "",
    City: "",
    Internet_stability: "",
    electricity_stability: "",
    your_freetime: "",
    Section_selected: "",
    position_selected: "",
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
    const { whatsappCode, telegramCode, ...theData } = formData;
    onNext(theData);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 "
    >
      <div className="max-w-3xl mx-auto">
        {/* الرأسية */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center   sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 shadow-lg">
            <img className="rounded-xl" src={lo} alt="" />
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
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  المعلومات الشخصية
                </h2>
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
                    type="email"
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
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  المعلومات الأكاديمية
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    المستوى الدراسي <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.Academic_level}
                    onChange={(e) =>
                      handleChange("Academic_level", e.target.value)
                    }
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
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  وسائل التواصل
                </h2>
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
                        onChange={(e) =>
                          handleChange("whatsapp_num", e.target.value)
                        }
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="249+"
                        value={formData.whatsappCode}
                        onChange={(e) =>
                          handleChange("whatsappCode", e.target.value)
                        }
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
                        value={formData.Telegram_num}
                        onChange={(e) =>
                          handleChange("Telegram_num", e.target.value)
                        }
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="249+"
                        value={formData.telegramCode}
                        onChange={(e) =>
                          handleChange("telegramCode", e.target.value)
                        }
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
                      value={formData.Telegram_username}
                      onChange={(e) =>
                        handleChange("Telegram_username", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleChange("LinkedIn_page", e.target.value)
                      }
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
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  معلومات الإقامة والبنية التحتية
                </h2>
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
                    onChange={(e) =>
                      handleChange("Internet_stability", e.target.value)
                    }
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
                    onChange={(e) =>
                      handleChange("electricity_stability", e.target.value)
                    }
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
                  onChange={(e) =>
                    handleChange("your_freetime", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* القسم الخامس: الوظيفة المطلوبة */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-slate-800">
                <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  الوظيفة المطلوبة
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    القسم <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.Section_selected}
                    onChange={(e) => {
                      handleChange("Section_selected", e.target.value);
                      handleChange("position_selected", "");
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

                {formData.Section_selected && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      الوظيفة <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.position_selected}
                      onChange={(e) =>
                        handleChange("position_selected", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                    >
                      <option value="">اختر الوظيفة</option>
                      {departments[formData.Section_selected].map((job) => (
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
