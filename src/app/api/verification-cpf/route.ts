import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const res = await fetch(
      `${process.env.DJANGO_SERVER}/auth/verification-cpf/`,
      {
        method: "POST",
        body: JSON.stringify(data.values),
        headers: { "Content-Type": "application/json" }
      }
    );

    const cpfVerificate = await res.json();

    if (cpfVerificate.active === true) {
      return NextResponse.json({ status: 201 });
    } else {
      return NextResponse.json({ status: 400 });
    }
  } catch (error) {
    console.error(error);
  }
}
