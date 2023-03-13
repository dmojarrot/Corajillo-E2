import { useState } from "react"
import { AddOrderModal } from "./AddOrderModal"

function OrdersTable({ orders }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <AddOrderModal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        formAction="api/db/addOrder"
      />
      <div className="flex justify-between my-7 lg:my-0 items-center mb-2">
        <h1 className="text-lg font-bold pl-6">Pedidos</h1>
        <button
          onClick={() => {
            setIsModalOpen(true)
          }}
          className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded"
        >
          + Agregar
        </button>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    GAMA
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PIEZAS
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de pedido
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de entrega
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders?.data?.orders?.map((pedido, pedidoIdx) => (
                  <tr
                    key={pedidoIdx}
                    className={`hover:bg-gray-100 
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                  >
                    <td className="pl-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.GAMA}
                    </td>
                    <td className="pl-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.PIEZAS}
                    </td>
                    <td className="pl-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {new Date(pedido["FECHA_DE_PEDIDO"]).toLocaleDateString()}
                    </td>
                    <td className="pl-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {}
                      {new Date(
                        pedido["FECHA_DE_ENTREGA"]
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
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

export default OrdersTable
