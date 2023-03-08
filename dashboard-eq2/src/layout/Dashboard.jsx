import Tables from "../components/Tables"
import NavBar from "../components/NavBar"

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <NavBar />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl pt-6 px-2 md:px-0">
            <Tables />
          </div>
        </main>
      </div>
    </>
  )
}
