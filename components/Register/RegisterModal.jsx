import Link from "next/link";
import styles from "../../styles/Register.module.css";

export default function RegisterModal({ setRegisterModalOpen }) {
  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box flex items-center text-black p-0 h-full w-11/12 max-w-4xl">
        <div
          className={`${styles.registerBg} h-full px-10 text-white text-center flex flex-col justify-center`}
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
            type="text"
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
              type="text"
              placeholder="Phone Number...."
              className={`${styles.tealBg} input w-full`}
            />
          </div>
          <div className="flex w-full mb-4">
            <input
              type="text"
              placeholder="Password...."
              className={`${styles.tealBg} input w-full mr-4`}
            />
            <input
              type="text"
              placeholder="Confirm Password...."
              className={`${styles.tealBg} input w-full`}
            />
          </div>
          <button
            className={`${styles.tealBg} btn text-white border-0 hover:bg-gray-800/80 w-80 mt-8 mb-4`}
          >
            Sign Up
          </button>
          <p>
            Have an account? Please <Link href='/' className="text-black font-semibold">Sign In</Link>
          </p>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setRegisterModalOpen(false)}>close</button>
      </form>
    </dialog>
  );
}
