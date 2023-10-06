import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const cpf = {
      cpf: data.values.cpf.replace(/[^\d]+/g, "")
    };

    const res = await fetch(
      `${process.env.DJANGO_SERVER}/auth/verification-cpf/`,
      {
        method: "POST",
        body: JSON.stringify(cpf),
        headers: { "Content-Type": "application/json" }
      }
    );

    const cpfVerificate = await res.json();

    if (
      cpfVerificate.active === true &&
      cpfVerificate.message === "Usuário encontrado."
    ) {
      return NextResponse.json({ status: 201 });
    } else if (cpfVerificate.message === "Este usuário não existe.") {
      return NextResponse.json({ status: 404 });
    } else {
      return NextResponse.json({ status: 400 });
    }
  } catch (error) {
    console.error(error);
  }
}
