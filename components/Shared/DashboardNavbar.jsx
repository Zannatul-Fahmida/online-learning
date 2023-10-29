import Link from "next/link";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsBell,
} from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdLeaderboard, MdAssignmentAdd } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscOutput } from "react-icons/vsc";
import { SlCamrecorder } from "react-icons/sl";
import { PiCertificate } from "react-icons/pi";
import { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Image from "next/image";
import profilePic from "../../public/Mask group.png";

export default function DashboardNavbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <aside
      style={{ backgroundColor: "#0F969C" }}
      className={`text-white w-64 h-screen fixed top-0 left-0 flex flex-col justify-between transition-all ${
        isSidebarOpen ? "ml-0" : "-ml-52"
      }`}
    >
      <div>
        <ul className={`py-4`}>
          <li className="mb-4 flex justify-between items-center px-4">
            <Link href="/">Online Learning Platform</Link>
            <button className={`hover:text-teal-900`} onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <BsFillArrowLeftCircleFill />
              ) : (
                <BsFillArrowRightCircleFill />
              )}
            </button>
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4`}>
            <Link className="flex justify-between items-center" href="/about">
              <div className="flex items-center gap-1">
                <Image width={50} src={profilePic} alt="Profile Picture" />
                <div>
                  <p className="text-sm">Welcome</p>
                  <p className="text-base">Md. Momin Khan</p>
                </div>
              </div>
              <BsBell />
            </Link>
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Student Analytics</Link>
            <IoAnalyticsOutline />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Leader Board</Link>
            <MdLeaderboard />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Class Joining</Link>
            <SiGoogleclassroom />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">My Courses</Link>
            <VscOutput />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Class Recording</Link>
            <SlCamrecorder />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Assignment</Link>
            <MdAssignmentAdd />
          </li>
          <li className={`${styles.tealBgHover} mb-2 p-4 flex justify-between items-center`}>
            <Link href="/about">Certificate</Link>
            <PiCertificate />
          </li>
        </ul>
      </div>
    </aside>
  );
}
