import ClientComponent from "@/ClientComponent";
import { cookies } from "next/headers";

export const metadata = {
  title: 'Another page'
}

export default function AnotherPage() {
  const cookieValue = cookies().get('some-cookie')?.value ?? 'unknown';
  return (
    <ClientComponent>
      <p>{cookieValue}</p>
    </ClientComponent>
  )
}
