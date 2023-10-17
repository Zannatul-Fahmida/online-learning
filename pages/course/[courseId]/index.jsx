import CourseBanner from "../../../components/Course/CourseBanner";
import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import styles from '../../../styles/Course.module.css';

export default function CourseDetails() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.courseBg} px-12 md:px-24 py-20`}>
        <CourseBanner />
      </div>
      <Footer />
    </div>
  );
}
