import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const cpf = req.url.split("register-password/")[1].replace(/[^\d]+/g, "");

    const res = await fetch(
      `${process.env.DJANGO_SERVER}/auth/register-password/${cpf}/`,
      {
        method: "PUT",
        body: JSON.stringify(data.values),
        headers: { "Content-Type": "application/json" }
      }
    );

    const messageSuccess = await res.json();

    if (messageSuccess === "Senha atualizada com sucesso.") {
      return NextResponse.json({ status: 201 });
    } else {
      return NextResponse.json({ status: 400 });
    }
  } catch (error) {
    console.error(error);
  }
}
