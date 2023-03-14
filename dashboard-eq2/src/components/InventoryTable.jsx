import { useState } from "react"
import { AddInventoryModal } from "./AddInventoryModal"
import { UpdateInventoryModal } from "./UpdateInventoryModal"

function InventoryTable({
  inventory,
  title,
  formActionUpdate,
  formActionDelete,
  formActionAdd,
  queryKey,
}) {
  formActionAdd
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false)
  const [data, setData] = useState({
    gama: "",
    descripcion: "",
    costo: "",
    piezas: "",
    total: "",
    tarimas: "",
    id: "",
  })

  const isTitleProductoTerminado = title === "Producto terminado" ? true : false
  return (
    <div>
      <AddInventoryModal
        title={title}
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        formActionAdd={formActionAdd}
        queryKey={queryKey}
      />
      <UpdateInventoryModal
        formActionDelete={formActionDelete}
        formActionUpdate={formActionUpdate}
        openModal={isModalOpenUpdate}
        setOpenModal={setIsModalOpenUpdate}
        queryKey={queryKey}
        row={data}
      />
      <div className="flex justify-between mb-7 lg:my-0 items-center">
        <h1 className="text-lg font-bold pl-6">{title}</h1>
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
                    GAMA
                  </th>
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
                    {isTitleProductoTerminado ? "Tarimas" : "Piezas"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total ($)
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Editar</span>
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
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.GAMA}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido["ARTICULO-DESCRIPCION"]}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.COSTO}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.PIEZAS || pedido.TARIMAS}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.TOTAL}
                    </td>

                    <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setData({
                            gama: pedido.GAMA,
                            descripcion: pedido["ARTICULO-DESCRIPCION"],
                            costo: pedido.COSTO,
                            piezas: pedido.PIEZAS,
                            total: pedido.TOTAL,
                            tarimas: pedido?.TARIMAS,
                            id: pedido.id,
                          })
                          setIsModalOpenUpdate(true)
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Editar
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

export default InventoryTable
