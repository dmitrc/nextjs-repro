import ClientComponent from "@/ClientComponent";

export const metadata = {
  title: 'Another page'
}

export default function AnotherPage() {
  return (
    <ClientComponent>
      <p>Hello from another page</p>
    </ClientComponent>
  )
}
