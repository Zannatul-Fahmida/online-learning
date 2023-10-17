import styles from "../../styles/Course.module.css";

export default function CourseBanner() {
  return (
    <div className="flex text-white">
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Web Development with PHP & Laravel
        </h1>
        <p className="text-base mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex justify-between mb-8">
          <div>
            <p style={{ color: "#0F969C" }} className="font-semibold">
              Starting Date
            </p>
            <p className="text-sm">Monday 1 Jan </p>
          </div>
          <div>
            <p style={{ color: "#0F969C" }} className="font-semibold">
              Class Schedule
            </p>
            <p className="text-sm">Monday, Thursday ( 9:00 PM - 10:30 Pm )</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#6DA5C0" }} className="rounded-xl p-5">
          <div class="relative flex items-center">
            <span class="flex-shrink text-xl text-white font-bold mr-3">
              This Course Offers
            </span>
            <div class="flex-grow border-t border-white"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 my-5">
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Evaluation Test
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Evaluation Test
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Evaluation Test
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Evaluation Test
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
