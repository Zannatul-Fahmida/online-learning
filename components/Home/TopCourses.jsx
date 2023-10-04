import Link from "next/link";
import styles from "../../styles/Home.module.css";
import CoursesCard from "./CoursesCard";

const courses = [
  {
    title: "React Development With Projects",
    teacher: "Md. Momin Khan",
    price: 50,
    ratings: 120,
  },
  {
    title: "Unique T-Shirt Design Master Class",
    teacher: "Sumaya Bintay Eshak",
    price: 50,
    ratings: 100,
  },
  {
    title: "Become a Wordpress Pro with Projects",
    teacher: "Fahim Wahid Rafi",
    price: 50,
    ratings: 60,
  },
  {
    title: "Graphics Design And Freelancing",
    teacher: "Md. Momin Khan",
    price: 50,
    ratings: 150,
  },
];

export default function TopCourses() {
  return (
    <div className={`${styles.courseBg} text-center text-white px-10 py-20`}>
      <h2 className="text-3xl m-4">Top Level Courses</h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {courses?.map((course) => (
            <CoursesCard key={course.title} course={course} />
          ))}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link
              href="#slide4"
              className="btn btn-circle bg-zinc-800 text-white border-0"
            >
              ❮
            </Link>
            <Link
              href="#slide2"
              className="btn btn-circle bg-zinc-800 text-white border-0"
            >
              ❯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
