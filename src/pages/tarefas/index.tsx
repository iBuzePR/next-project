import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'
import Head from "next/head";

export default function Tarefas() {
  const { data: session, status } = useSession();

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [todo, setTodo] = useState("Add another component to Tailwind Components");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);




  const handleEditClick = () => {
    setIsModalOpenEdit(true);
  };

  const handleDelete = () => {
    setIsSuccessModalOpen(true);
    setIsDeleteModalOpen(false);
    //perform the delete action here
  };

  const handleCloseClick = () => {
    setIsModalOpenEdit(false);
    setIsDeleteModalOpen(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    if (isSuccessModalOpen) {
      const timeout = setTimeout(() => {
        setIsSuccessModalOpen(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccessModalOpen]);

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/");
    }
  }, [status, session]);

  return (
    <div>
      <Head>
        <title> Tarefas - Profood </title>
      </Head>
      {session?.user &&
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Tarefas</h1>
              <div className="flex mt-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                  Add
                </button>
              </div>
            </div>
            <div>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">
                  {todo}
                </p>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={handleDeleteClick}>
                  <FaTrash />
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" onClick={handleEditClick}>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
          {isDeleteModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50">
              <div className="relative mx-auto my-5 max-w-sm w-full">
                <div className="bg-white rounded-lg p-6">
                  <p>Tem certeza que deseja deletar este item ?</p>
                  <div className="flex justify-end">
                    <button className="bg-teal-light text-teal-darkest p-2 rounded-lg" onClick={handleDelete}>
                      Sim
                    </button>
                    <button className="bg-red-light text-red-darkest p-2 rounded-lg ml-4" onClick={handleCloseClick}>
                      Não
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isSuccessModalOpen && (
            <div className="fixed bottom-0 right-0 top-100 z-50 m-4">
              <div className="relative max-w-sm h-64 w-64">
                <div className="alert alert-success shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Deletado com sucesso !</span>
                  </div>
                </div>
              </div>
            </div>


          )}
          {isModalOpenEdit && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50">
              <div className="relative mx-auto my-5 max-w-xl w-full">
                <div className="bg-white rounded-lg p-4 bg-opacity-0">
                  <form>
                    <div className="flex">
                      <input type="text" placeholder="Type here" className="input input-bordered w-full " value={todo} onChange={(e) => setTodo(e.target.value)} />
                      <div className="ml-2 flex justify-center">
                        <button className="bg-teal-light text-teal-darkest p-2 rounded-lg" type="submit">
                          <FaCheck className="text-white"/>
                        </button>
                        <button className="bg-red-light text-red-darkest p-2 rounded-lg ml-4" onClick={handleCloseClick}>
                          <FaTimes className="text-white"/>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  )
}