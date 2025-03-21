import Navbar from "@/components/navbar";

export default function Transactionpage(){
    return(
    <>
    <Navbar active="movimentacoes"/>

    <main className="flex items-center justify-center">
        <div className=" bg-slate-900 rounded min-w-max-2/3 p-5 m-6">
            <h2 className="text-lg font-bold">Transactions</h2>
        </div>
    </main>
    </>
    )
}