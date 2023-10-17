import Image from "next/image";
import styles from "../../styles/Course.module.css";
import courseImg from "../../public/card.png";

export default function CourseBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 text-white">
      <div>
        <h1 className="text-4xl font-bold mb-8">
          Web Development with PHP & Laravel
        </h1>
        <p className="text-base mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-3 md:mb-0">
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
          <div className="grid md:grid-cols-2 gap-4 my-10">
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
                Support Class
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Tracing Daily Performance
              </div>
            </div>
            <div className="relative flex items-center">
              <div
                style={{ backgroundColor: "#0F969C" }}
                className="badge badge-lg relative -mr-3 border-0"
              ></div>
              <div className={`${styles.tealBg} p-4 rounded-md w-full`}>
                Real Life Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card shadow-md">
          <figure>
            <Image width={500} src={courseImg} alt="course title" />
          </figure>
          <div
            style={{ border: "2px #0F969C solid" }}
            className={`${styles.darkTealBg} card-body rounded-b-xl p-0 mt-2`}
          >
            <div
              style={{ borderBottom: "2px #0F969C solid" }}
              className="flex items-center justify-center gap-4 py-4"
            >
              <button
                style={{ backgroundColor: "#0f959c91" }}
                className="btn border-0 text-white"
              >
                100 Days Left
              </button>
              <button
                style={{ backgroundColor: "#0f959c91" }}
                className="btn border-0 text-white"
              >
                100 Seats Left
              </button>
            </div>
            <h2 className="card-title text-start text-2xl mt-4">
              Web Development With PHP & Laravel
            </h2>
            <div className="card-actions justify-between items-center">
              <h3 className="text-2xl">10,000</h3>
              <button
                style={{ backgroundColor: "#0F969C" }}
                className="btn border-0 text-white"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
