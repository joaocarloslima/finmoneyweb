import CategoryItem from "@/components/category-item";
import Navbar from "@/components/navbar";

async function getCategories(){
    const response = await fetch("http://localhost:8080/categories")
    return await response.json()
}

export default async function Categoriespage(){
    const data: Array<Category> = await getCategories()

    return(
    <>
    <Navbar active="categorias"/>

    <main className="flex items-center justify-center">
        <div className=" bg-slate-900 rounded min-w-2/3 p-5 m-6">
            <h2 className="text-lg font-bold">Categorias</h2>

            { data.map( category => <CategoryItem key={category.id} category={category} /> ) }
            
        </div>
    </main>
    </>
    )
}