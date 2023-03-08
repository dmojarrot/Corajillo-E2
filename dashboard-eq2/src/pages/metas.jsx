import NavBar from "@/components/NavBar"
import Metas from "@/layout/Metas"

export default function metas() {
  return (
    <>
      <div className="min-h-full">
        <NavBar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              (lo que vera el/los empleados)
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl pt-6 sm:px-6 lg:px-8">
            <Metas />
          </div>
        </main>
      </div>
    </>
  )
}
