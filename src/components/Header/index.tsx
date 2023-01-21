import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { useState } from "react";
import { AiFillGithub, AiFillCaretDown } from "react-icons/ai";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const loading = status === "loading";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/">
          <button className=" text-black font-medium py-2 px-4">Home</button>
        </a>
        {session?.user && (
          <a href="/tarefas">
            <button className=" text-black font-medium py-2 px-4">
              Tarefas
            </button>
          </a>
        )}
      </div>
      <div className="flex-none gap-2">
        {!session && (
          <a href="/login">
            <button className="bg-blue-500 flex mr- hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md ">
              Login
            </button>
          </a>
        )}
        {session?.user && (
          <div className="dropdown dropdown-end">
            <div className="flex">
              <div className="pr-5 pt-3">{session.user.name}</div>

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {session.user.image && <img src={session.user.image} />}
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
