import React from "react";
import { CheckCircle, Home, FileText } from "lucide-react";

export default function SuccessPage({ onBackToHome, applicationData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* بطاقة النجاح الرئيسية */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* أيقونة النجاح */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <CheckCircle
                className="w-24 h-24 text-green-500 relative animate-bounce"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* عنوان النجاح */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            تم تقديم الطلب بنجاح!
          </h1>

          {/* رسالة التأكيد */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            شكراً لك على تقديم طلبك للانضمام إلى فريقنا.
            <br />
            سنقوم بمراجعة طلبك والتواصل معك قريباً.
          </p>

          {/* معلومات الطلب */}
          {applicationData && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-right">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-end gap-2">
                <span>ملخص الطلب</span>
                <FileText className="w-5 h-5" />
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">
                    {applicationData.Name}
                  </span>
                  <span className="text-gray-500">الاسم:</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">
                    {applicationData.Gmail}
                  </span>
                  <span className="text-gray-500">البريد الإلكتروني:</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">
                    {applicationData.Age}
                  </span>
                  <span className="text-gray-500">العمر :</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {applicationData.position_selected}
                  </span>
                  <span className="text-gray-500">الوظيفة المتقدم لها:</span>
                </div>
              </div>
            </div>
          )}

          {/* الخطوات التالية */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-right">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              ماذا بعد؟
            </h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start gap-2 justify-end">
                <span>سنراجع طلبك خلال أيام </span>
                <span className="text-blue-500 font-bold">١.</span>
              </li>
              <li className="flex items-start gap-2 justify-end">
                <span>سيتم التواصل معك عبر البريد الإلكتروني أو الهاتف</span>
                <span className="text-blue-500 font-bold">٢.</span>
              </li>
              <li className="flex items-start gap-2 justify-end">
                <span>تأكد من مراجعة بريدك الإلكتروني بشكل دوري</span>
                <span className="text-blue-500 font-bold">٣.</span>
              </li>
            </ul>
          </div>

          {/* أزرار الإجراءات */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBackToHome}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              <span>العودة للصفحة الرئيسية</span>
            </button>
          </div> */}

          {/* رسالة إضافية */}
          <p className="text-sm text-gray-500 mt-8">
            في حال وجود أي استفسار، لا تتردد في التواصل معنا
          </p>
        </div>

        {/* رسالة تحفيزية */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-sm">نتطلع للعمل معك قريباً! 🚀</p>
        </div>
      </div>
    </div>
  );
}
