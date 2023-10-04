import Image from "next/image";
import img1 from "../../public/man-laptop 1.png";
import img2 from "../../public/girl-ipad 1.png";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <div className={`${styles.courseBg} text-center text-white px-10 py-20`}>
      <h2 className="text-3xl m-4">Know why we are best</h2>
      <p className="text-xl">Creating a Better Future for you</p>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around my-5">
        <div className="text-start">
          <h3 className="text-3xl">
            The Prodigious eLearning Courses <br /> for you
          </h3>
          <div
            style={{ border: "2px #6DA5C0 solid" }}
            className="w-40 mt-3"
          ></div>
          <p>
            Revolutionize your learning experience and unlock your potential
            with our innovative <br />
            online teaching and learning platform. Discover a world of knowledge
            at your fingertips <br />
            and join the future of education with our dynamic and accessible
            platform.
          </p>
          <button
            style={{ backgroundColor: "#0F969C" }}
            className="btn rounded-ss-2xl rounded-sm border-0 text-white px-10"
          >
            Buy Courses
          </button>
        </div>
        <div>
          <Image
            className="mt-4 md:mt-0"
            width={180}
            src={img1}
            alt="man with laptop"
          />
        </div>
        <div>
          <Image
            className="mt-4 md:mt-16"
            width={180}
            src={img2}
            alt="girl with ipad"
          />
        </div>
      </div>
    </div>
  );
}
