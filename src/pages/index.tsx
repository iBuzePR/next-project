import Head from 'next/head'

export default function Home() {
  return (
    <>
    
    <Head>
    <title> Home </title>
    </Head>
    <div className="flex mt-20 flex-col items-center justify-center">
      <img src="img/foto.png" alt="Embalagens para alimentos" className="w-1/2 transition-transform duration-300 transform hover:scale-105" />
      <h1 className="text-3xl font-medium">EMBALAGENS PARA TODOS OS TIPOS DE ALIMENTOS</h1>
      <div className="flex justify-center mt-4">
        <div className="text-lg font-medium mr-4">Panificação</div>
        <div className="text-lg font-medium mr-4">Fast-Food</div>
        <div className="text-lg font-medium mr-4">Table Dinner</div>
        <div className="text-lg font-medium mr-4">Supermercado</div>
        <div className="text-lg font-medium mr-4">Japonês</div>
        <div className="text-lg font-medium mr-4">Asian</div>
      </div>
    </div>
    </>
  )
}
