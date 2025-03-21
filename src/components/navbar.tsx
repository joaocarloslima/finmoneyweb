import { link } from "fs";
import Link from "next/link";

interface NavbarProps{
    active:"dashboard"| "movimentacoes"| "categorias"
}

export default function Navbar (props:NavbarProps){
    const{active}=props
    const activeClass="border-b-2 border-green-600 pb-4"

const link=[
    {link:"/dashboard", label: "dashboard"},
    {link:"/transactions", label: "movimentacoes"},
    {link:"/categories", label: "categorias"}
]

    return(
        <nav className="flex px-6 pt-6  justify-between bg-slate-900">
        <h1 className="text-4xl font-bold">FinMoney</h1>

        <ul className="flex gap-6 text-xl ">
            {link.map(link=>
                    <li key={link.label} className={link.label=== active? activeClass: ""}><Link href={link.link}>{link.label}</Link></li>
        
            )}
        </ul>
        <img className="size-12 rounded-full" src="http://github.com/Cruz-011.png" alt="" />
    </nav>
    )
}

