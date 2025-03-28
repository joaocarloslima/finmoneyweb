import CategoryItem from "@/components/category-item";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getCategories } from "../actions/category-actions";

export default async function Categoriespage(){
    const data: Array<Category> = await getCategories()

    return(
    <>
    <Navbar active="categorias"/>

    <main className="flex items-center justify-center">
        <div className=" bg-slate-900 rounded min-w-2/3 p-5 m-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-bold">Categorias</h2>
            <Button asChild>
              <Link href="/categories/form"><Plus /> Nova Categoria</Link>
            </Button>
          </div>

            { data.map( category => <CategoryItem key={category.id} category={category} /> ) }
            
        </div>
    </main>
    </>
    )
}