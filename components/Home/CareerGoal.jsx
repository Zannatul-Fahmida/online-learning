import styles from "../../styles/Home.module.css";
import CareerCard from "./CareerCard";
import businessImg from "../../public/Vector.png";
import codeImg from "../../public/🦆 icon _code brackets square_.png";
import marketImg from "../../public/🦆 icon _graph up_.png";
import designImg from "../../public/🦆 icon _color filter_.png";

const goals = [
  {
    title: "Business and Marketing",
    available: 3,
    image: businessImg,
  },
  {
    title: "Web and App Development",
    available: 5,
    image: codeImg,
  },
  {
    title: "Digital Marketing",
    available: 10,
    image: marketImg,
  },
  {
    title: "Programming for everyone",
    available: 8,
    image: codeImg,
  },
  {
    title: "Design And Creative",
    available: 7,
    image: designImg,
  },
];

export default function CareerGoal() {
  return (
    <div className={`${styles.bannerBg} text-center md:p-24 p-12 text-white`}>
      <h2 className="text-3xl m-4">Set Career Goal</h2>
      <p className="text-xl">
        Identify your skills, values, and interests to determine your career
        strengths and areas for improvement
      </p>
      <div className="grid md:grid-cols-5 gap-4 my-5">
        {goals?.map((goal) => (
          <CareerCard
            key={goal.title}
            title={goal.title}
            available={goal.available}
            image={goal.image}
          />
        ))}
      </div>
    </div>
  );
}
