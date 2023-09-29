import { getServerSession } from "next-auth";

export async function getUserSession() {
  const session = await getServerSession();

  return session;
}
