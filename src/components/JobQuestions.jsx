import React, { useState } from "react";
import jobsData from "../data/jobsData";

export default function JobQuestions({ job, mainData, onBack, onSubmit }) {
  const [answers, setAnswers] = useState({});

  const jobData = jobsData[job];

  // الأسئلة الثابتة
  const fixedQuestions = [
    {
      id: "az",
      label: "ما دافعك لاختيار هذا المنصب؟ وكيف ترى نفسك فيه؟ وما مؤهلاتك للعمل عليه؟",
      type: "textarea",
      required: true,
      isFixed: true,
      position: "start"
    },
    {
      id: "cv_url",
      label: "الرجاء إرفاق السيرة الذاتية الخاصة بك",
      type: "file",
<<<<<<< HEAD
    
=======
       
>>>>>>> 5938e724ef87995f8fde92ce88ac71056846a9f5
      isFixed: true,
      position: "end"
    }
  ];

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      setAnswers((prev) => ({ ...prev, [id]: file }));
    }
  };

  const handleSubmit = () => {
    // دمج الأسئلة الثابتة مع أسئلة الوظيفة
    const allQuestions = [
      fixedQuestions[0],
      ...(jobData?.questions || []),
      fixedQuestions[1]
    ];

    const unansweredRequired = allQuestions.filter(
      q => q.required && !answers[q.id]
    );

    if (unansweredRequired && unansweredRequired.length > 0) {
      alert("الرجاء الإجابة على جميع الأسئلة المطلوبة");
      return;
    }

    const finalData = {
      ...mainData,
      jobAnswers: answers,
      submittedAt: new Date().toISOString()
    };

    onSubmit(finalData);
  };

  if (!jobData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-3 sm:p-6 " dir="rtl">
        <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 sm:p-10 text-center border border-slate-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">خطأ في البيانات</h2>
          <p className="text-slate-600 mb-6">لم يتم العثور على أسئلة لهذه الوظيفة: {job}</p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 active:scale-95 transition-all"
          >
            رجوع للصفحة السابقة
          </button>
        </div>
      </div>
    );
  }

  // دمج الأسئلة: السؤال الثابت الأول + أسئلة الوظيفة + السؤال الثابت الأخير
  const allQuestions = [
    fixedQuestions[0],
    ...(jobData.questions || []),
    fixedQuestions[1]
  ];

  const renderQuestion = (q, index) => {
    return (
      <div key={q.id} className="pb-6 border-b border-slate-200 last:border-b-0">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-shrink-0 w-8 h-8 bg-slate-800 text-white rounded-lg flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
          <label className="block text-slate-900 font-semibold text-base flex-1">
            {q.label}
            {q.required && <span className="text-red-500 mr-2">*</span>}
          </label>
        </div>

        {q.type === "radio" && (
          <div className="space-y-2 mr-11">
            {q.Options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg border border-transparent hover:border-slate-200 transition-all"
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  required={q.required}
                  className="w-5 h-5 text-slate-800 focus:ring-2 focus:ring-slate-800"
                />
                <span className="text-slate-700">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {q.type === "text" && (
          <div className="mr-11">
            <input
              type="text"
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              required={q.required}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
              placeholder="اكتب إجابتك هنا..."
            />
          </div>
        )}

        {q.type === "textarea" && (
          <div className="mr-11">
            <textarea
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              required={q.required}
              rows="4"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none resize-none transition-all"
              placeholder="اكتب إجابتك هنا..."
            />
          </div>
        )}

         {q.type === "checkbox" && (
          <div className="space-y-2 mr-11">
            {q.Options.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg border border-transparent hover:border-slate-200 transition-all"
              >
                <input
                  type="checkbox"
                  value={opt}
                  checked={answers[q.id]?.includes(opt) || false}
                  onChange={(e) => {
                    const currentValues = answers[q.id] || [];
                    const newValues = e.target.checked
                      ? [...currentValues, opt]
                      : currentValues.filter(v => v !== opt);
                    handleChange(q.id, newValues);
                  }}
                  className="w-5 h-5 text-slate-800 focus:ring-2 focus:ring-slate-800 rounded"
                />
                <span className="text-slate-700">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {q.type === "file" && (
          <div className="mr-11">
            <div className="relative">
              <input
                type="file"
                onChange={(e) => handleFileChange(q.id, e)}
                required={q.required}
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-2 focus:ring-slate-200 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700 cursor-pointer"
              />
              {answers[q.id] && (
                <p className="mt-2 text-sm text-slate-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  تم اختيار الملف: {answers[q.id].name}
                </p>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-500">الصيغ المدعومة: PDF, DOC, DOCX</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* الرأسية */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            أسئلة الوظيفة
          </h1>
          <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg mt-2">
            <p className="text-slate-700 font-semibold text-sm sm:text-base">{job}</p>
          </div>
        </div>

        {/* النموذج */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 border border-slate-200">
          <div className="space-y-6">
            {allQuestions.map((q, index) => renderQuestion(q, index))}

            {/* أزرار التحكم */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto px-8 py-3 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 active:scale-95 transition-all order-2 sm:order-1"
              >
                رجوع
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 order-1 sm:order-2"
              >
                <span>إرسال الطلب</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* تذييل */}
        <div className="text-center mt-6 text-slate-500 text-xs sm:text-sm px-4">
          <p>يرجى التأكد من صحة جميع الإجابات قبل الإرسال</p>
        </div>
      </div>
    </div>
  );
}
