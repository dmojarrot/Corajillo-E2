import React from "react"

function InventoryTable({ inventory }) {
  return (
    <div>
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-lg font-bold pl-6">Inventario actual</h1>
        <button
          // onClick={() => {
          //   add new product to the inventory database
          //   addProduct()
          //   repopulate table with new data from database
          //   queryClient.invalidateQueries({ queryKey: ["inventory"]
          // }}
          className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded"
        >
          + Agregar
        </button>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Unidades
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    # Lote
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de expedición
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de vencimiento
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Proveedor
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
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.nombre}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.unidades}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido["# lote"]}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de expedición"]}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de vencimiento"]}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {pedido.proveedor}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
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

export default InventoryTable
