"use client"
import { createCategory } from "@/app/actions/category-actions";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState } from "react";


const initialState = {
  values: {
    name: "",
    icon: "",
  },
  errors: {
    name: "",
    icon: ""
  }
};

export default function CategoriesForm() {
  const [state, formAction, pending] = useActionState(
    createCategory,
    initialState
  );
  return (
    <>
      <Navbar active="categorias" />
      <main className="flex items-center justify-center">
        <div className="bg-slate-900 rounded p-5 m-6 max-w-[500px]">
          <h2 className="font-bold">Cadastrar categoria</h2>
          <form action={formAction} className="space-y-4 mt-6">

            <div>
                <Input name="name" placeholder="nome da categoria" aria-invalid={!!state?.errors.name} defaultValue={state?.values.name} />
                <span className="text-sm text-destructive">{state?.errors.name}</span>
            </div>

            <div>
                <Input name="icon" placeholder="nome do ícone" aria-invalid={!!state?.errors.icon} defaultValue={state?.values.icon} />
                <span className="text-sm text-destructive">{state?.errors.icon}</span>
            </div>
            
            
            <div className="flex justify-around">
              <Button asChild variant="outline">
                <Link href="/categories">Cancelar</Link>
              </Button>
              <Button>Salvar</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}