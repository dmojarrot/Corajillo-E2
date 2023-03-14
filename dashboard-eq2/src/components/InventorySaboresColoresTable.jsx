import { useState } from "react"
import { AddInventoryModalSaboresColores } from "./AddInventoryModalSaboresColoresModal"
import { UpdateInventorySaboresColoresModal } from "./UpdateInventorySaboresColoresModal"

function InventorySaboresColoresTable({ inventory, formAction }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [data, setData] = useState({
    descripcion: "",
    costo: "",
    piezas: "",
    total: "",
    id: "",
  })

  return (
    <div>
      <AddInventoryModalSaboresColores
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        formAction={formAction}
      />
      <UpdateInventorySaboresColoresModal
        openModal={isUpdateModalOpen}
        setOpenModal={setIsUpdateModalOpen}
        row={data}
      />

      <div className="flex justify-between mb-7 lg:my-0 items-center">
        <h1 className="text-lg font-bold pl-6">Sabores y colores</h1>
        <button
          className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          + Agregar
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DESCRIPCIÓN
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Costo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Piezas
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total ($)
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventory?.data?.inventory?.map((pedido, pedidoIdx) => (
                  <tr
                    key={pedidoIdx}
                    className={`hover:bg-gray-100 
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                  >
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido["ARTICULO-DESCRIPCION"]}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.COSTO}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.PIEZAS}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.TOTAL}
                    </td>

                    <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setData({
                            descripcion: pedido["ARTICULO-DESCRIPCION"],
                            costo: pedido.COSTO,
                            piezas: pedido.PIEZAS,
                            total: pedido.TOTAL,
                            id: pedido.id,
                          })
                          setIsUpdateModalOpen(true)
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventorySaboresColoresTable
