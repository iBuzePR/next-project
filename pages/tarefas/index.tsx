import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

export default function Tarefas() {
  const { data: session, status } = useSession();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/");
    }
  }, [status, session]);

  return (
    <div>
      <Head>
        <title> Tarefas </title>
      </Head>
      {session?.user &&
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
              <div className="mb-4">
                  <h1 className="text-grey-darkest">Tarefas</h1>
                  <div className="flex mt-4">
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                      <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                  </div>
              </div>
              <div>
                  <div className="flex mb-4 items-center">
                      <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                  </div>
              </div>
          </div>
      </div>
      }
    </div>
  );
}
