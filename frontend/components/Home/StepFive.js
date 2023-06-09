import classes from "./StepOne.module.css";

function StepFive() {
  return (
    <div className={classes["step-one"]}>
      <div className={classes["parent"]}>
        <div className={classes["child"]}>
          <h1>الخطوة الخامسة </h1>
          <p>الخطوة الأخيرة هي الاتصال بولي أمر العروس</p>
          <p>
            إذا توفقتما بعد مرحلة الأسئلة ستكون مرحلة الرؤية الشرعية وعندها
            سيحصل العريس على رقم ولي أمر العروس ليتمكن من التواصل معه.
            <br />
          </p>
          <p>نسأل الله لكم التوفيق والسداد.</p>
        </div>
        <div className={classes["image"]}>
          <img src={`/images/step-five.png`} alt="الخطوة الثانية" />
        </div>
      </div>
    </div>
  );
}
export default StepFive;
