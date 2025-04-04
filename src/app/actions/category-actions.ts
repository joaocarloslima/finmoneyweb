import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/categories";

export async function getCategories() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function createCategory(initialState: any, formData: FormData) {
  const dados = {
    name: formData.get("name"),
    icon: formData.get("icon"),
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  };
  const response = await fetch(API_URL, options);
  
  // return early
  if(!response.ok){
    const errors = await response.json();
    return {
      values:
      {
        name: typeof dados.name === "string" ? dados.name : "",
        icon: typeof dados.icon === "string" ? dados.icon : ""
      },
      errors: {
        name: errors.find((error: any) => error.field === "name")?.message,
        icon: errors.find((error: any) => error.field === "icon")?.message
      }
    }
  }
  
  redirect("/categories")
}