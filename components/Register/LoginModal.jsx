import styles from "../../styles/Register.module.css";
import { useState } from "react";
import ForgotModal from "./ForgotModal";
import { useRouter } from "next/navigation";
import RegisterModal from "./RegisterModal";
import {AiOutlineEye, AiFillEye} from 'react-icons/ai'

export default function LoginModal({
  setLoginModalOpen,
  registerModalOpen,
  setRegisterModalOpen,
}) {
  const router = useRouter();
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClose = () => {
    router.push("/");
    setLoginModalOpen(false);
  };

  const handleRegisterModal = (id) => {
    if (!registerModalOpen) {
      router.push({ pathname: "/", query: { modal: "register" } });
      setRegisterModalOpen(true);
      setLoginModalOpen(false);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  const handleForgotModal = (id) => {
    if (!forgotModalOpen) {
      router.push({ pathname: "/", query: { modal: "reset" } });
      setForgotModalOpen(true);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col md:flex-row md:items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center py-16 md:py-0`}
        >
          <h2 className="text-4xl font-bold">Hello There!</h2>
          <p className="text-lg mt-2">
            Enter your personal details and <br /> join with us
          </p>
        </div>
        <div
          style={{ backgroundColor: "#0F969C" }}
          className="flex flex-col items-center flex-grow h-full text-white px-8"
        >
          <h1 className="text-4xl font-bold py-12">Log In</h1>
          <input
            type="text"
            placeholder="Enter Your Email or Username....."
            className={`${styles.tealBg} input w-full mb-4`}
          />
          <div className={`${styles.passwordInput} w-full`}>
            <div className={`${styles.passwordContainer}`}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Your Password....."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${styles.tealBg} input w-full`}
              />
              <span
                className={`${styles.togglePassword} ${styles.tealBg} text-white p-2 rounded`}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <AiFillEye /> : <AiOutlineEye />}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="form-control">
              <label className="label cursor-pointer px-0">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className="checkbox"
                />
                <span className="label-text ml-2 text-white">Remember me</span>
              </label>
            </div>
            <button
              className="text-sm"
              onClick={() => handleForgotModal("my_modal_3")}
            >
              Forgot Password
            </button>
            {forgotModalOpen && (
              <ForgotModal
                setLoginModalOpen={setLoginModalOpen}
                setForgotModalOpen={setForgotModalOpen}
              />
            )}
          </div>
          <button
            className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 w-80 mt-8 mb-4`}
          >
            Log In
          </button>
          <div className="pb-12 md:pb-0">
            Don’t have an account? Please{" "}
            <button
              className="text-black font-semibold"
              onClick={() => handleRegisterModal("my_modal_2")}
            >
              Sign Up
            </button>
            {registerModalOpen && (
              <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />
            )}
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => handleClose()}>close</button>
      </form>
    </dialog>
  );
}
