import styles from "../../styles/Register.module.css";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";

export default function RegisterModal({
  setRegisterModalOpen,
  loginModalOpen,
  setLoginModalOpen,
}) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
    setRegisterModalOpen(false);
  };

  const handleLoginModal = (id) => {
    if (!loginModalOpen) {
      router.push({ pathname: "/", query: { modal: "login" } });
      setLoginModalOpen(true);
      setRegisterModalOpen(false);
      setTimeout(() => {
        const modal = document.getElementById(id);
        if (modal) {
          modal.showModal();
        }
      }, 0);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box flex flex-col md:flex-row md:items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center py-16 md:py-0`}
        >
          <h2 className="text-4xl font-bold">Welcome!</h2>
          <p className="text-lg mt-2">
            To keep connected with us <br /> please sign up here
          </p>
        </div>
        <div
          style={{ backgroundColor: "#0F969C" }}
          className="flex flex-col items-center flex-grow h-full text-white px-8"
        >
          <h1 className="text-4xl font-bold py-12">Create an account!</h1>
          <input
            type="text"
            placeholder="Full Name...."
            className={`${styles.tealBg} input w-full mb-4`}
          />
          <input
            type="email"
            placeholder="Email Address...."
            className={`${styles.tealBg} input w-full mb-4`}
          />
          <div className="flex w-full mb-4">
            <input
              type="text"
              placeholder="User Name....."
              className={`${styles.tealBg} input w-full mr-4`}
            />
            <input
              type="number"
              placeholder="Phone Number...."
              className={`${styles.tealBg} input w-full`}
            />
          </div>
          <div className="flex w-full mb-4">
            <input
              type="password"
              placeholder="Password...."
              className={`${styles.tealBg} input w-full mr-4`}
            />
            <input
              type="password"
              placeholder="Confirm Password...."
              className={`${styles.tealBg} input w-full`}
            />
          </div>
          <button
            className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 w-80 mt-8 mb-4`}
          >
            Sign Up
          </button>
          <div className="pb-12 md:pb-0">
            Have an account? Please{" "}
            <button
              className="text-black font-semibold"
              onClick={() => handleLoginModal("my_modal_1")}
            >
              Sign In
            </button>
            {loginModalOpen && (
              <LoginModal setLoginModalOpen={setLoginModalOpen} />
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
