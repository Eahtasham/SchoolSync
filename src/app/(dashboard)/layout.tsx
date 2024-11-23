import Navbar from "@/components/navbar/MainNavbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* MAIN PANEL - dashboard panels*/}

      <main className="h-full w-full flex flex-col p-3 mt-20 md:mt-0">

        {children}
      </main>
    </>
  )
}
