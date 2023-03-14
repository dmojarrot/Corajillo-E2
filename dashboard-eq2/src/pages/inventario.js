import InventoryTable from "@/components/InventoryTable"
import NavBar from "@/components/NavBar"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import getMateriaPrima from "@/lib/get_inventory_materiaprima"
import getProceso from "@/lib/get_inventory_proceso"
import getProductoTerminado from "@/lib/get_inventory_productoterminado"
import InventorySaboresColoresTable from "@/components/InventorySaboresColoresTable"
import getSaboresColores from "@/lib/get_inventory_saborescolores"

export default function Inventario() {
  const materiaprima = useQuery({
    queryKey: ["materiaPrima"],
    queryFn: getMateriaPrima,
  })

  const proceso = useQuery({
    queryKey: ["proceso"],
    queryFn: getProceso,
  })

  const saborescolores = useQuery({
    queryKey: ["saborescolores"],
    queryFn: getSaboresColores,
  })

  const productoterminado = useQuery({
    queryKey: ["productoTerminado"],
    queryFn: getProductoTerminado,
  })

  return (
    <>
      <div className="min-h-full">
        <NavBar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Inventario general
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl pt-6 sm:px-6 lg:px-8 space-y-5">
            <InventoryTable
              title="Materia prima"
              inventory={materiaprima}
              formActionAdd="/api/db/addInventoryMateriaPrima"
              formActionUpdate="/api/db/updateInventoryMateriaPrima"
              formActionDelete="/api/db/deleteInventoryMateriaPrima"
              queryKey={"materiaPrima"}
            />
            <InventoryTable
              title="Proceso"
              inventory={proceso}
              formActionAdd={"/api/db/addInventoryProceso"}
              formActionUpdate="/api/db/updateInventoryProceso"
              formActionDelete="/api/db/deleteInventoryProceso"
              queryKey={"proceso"}
            />
            <InventorySaboresColoresTable
              inventory={saborescolores}
              formAction="/api/db/addInventorySaboresColores"
            />

            <InventoryTable
              title="Producto terminado"
              inventory={productoterminado}
              formActionAdd="/api/db/addInventoryProductoTerminado"
              formActionUpdate="/api/db/updateInventoryProductoTerminado"
              formActionDelete="/api/db/deleteInventoryProductoTerminado"
              queryKey={"productoTerminado"}
            />
          </div>
        </main>
      </div>
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {
  // this query stuff is a highly efficient data fetching library
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["materiaPrima"], getMateriaPrima)
  await queryClient.prefetchQuery(["proceso"], getProceso)
  await queryClient.prefetchQuery(["saborescolores"], getSaboresColores)
  await queryClient.prefetchQuery(["productoTerminado"], getProductoTerminado)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
