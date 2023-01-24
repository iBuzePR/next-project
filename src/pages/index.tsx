import Head from "next/head";
import {
  FaBreadSlice,
  FaUtensils,
  FaHamburger,
  FaShoppingBasket,
  FaFish,
  } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <div className="flex mt-44 ">
    <div className="w-1/2 mt-28">
        <h1 className="text-4xl font-bold text-center ">
            EMBALAGENS PARA TODOS OS TIPOS DE ALIMENTOS
        </h1>
        <div className="flex justify-center m-4">
            <div className="text-lg font-medium mr-4 bg-red-500 text-white py-2 px-3 rounded-md">
                <FaBreadSlice className="mr-2" /> Panificação
            </div>
            <div className="text-lg font-medium mr-4 bg-orange-500 text-white py-2 px-3 rounded-md">
                <FaHamburger className="mr-2" /> Fast-Food
            </div>
            <div className="text-lg font-medium mr-4 bg-yellow-500 text-white py-2 px-3 rounded-md">
                <FaUtensils className="mr-2" /> Table Dinner
            </div>
            <div className="text-lg font-medium mr-4 bg-green-500 text-white py-2 px-3 rounded-md">
                <FaShoppingBasket className="mr-2" /> Supermercado
            </div>
            <div className="text-lg font-medium mr-4 bg-blue-500 text-white py-2 px-3 rounded-md">
                <FaFish className="mr-2" /> Asian Food
            </div>
        </div>
    </div>
    <div className="w-1/2 text-center">
        <img src="img/foto.png" alt="Embalagens para alimentos" className="transition duration-300 transform hover:scale-105 cursor-pointer" />
    </div>
</div>

    </>
  );
}
