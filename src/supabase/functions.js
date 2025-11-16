import supabase from "./supabase";
const sendMainData = async (data) => {
  const { error } = await supabase
    .from("الأسئلة العامة - المقدمة لكل ادارة")
    .insert([data]);
  if (error) {
    console.error("Error sending main data:", error);
    alert(" حدث خطأ أثناء إرسال البيانات الأساسية. الرجاء المحاولة مرة أخرى.");
  } else {
    console.log("Main data sent successfully!");
  }
};

const sendJobData = async (data, table) => {
  const { error } = await supabase.from(table).insert([data]);
  if (error) {
    console.error("Error sending job data:", error);
    alert(" حدث خطأ أثناء إرسال بيانات الوظيفة. الرجاء المحاولة مرة أخرى.");
  } else {
    console.log("Job data sent successfully!");
  }
};

export { sendMainData, sendJobData };
