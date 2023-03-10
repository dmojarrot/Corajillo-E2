import React from "react"
import SelectMenu from "./SelectMenu"

function MissingProductionTable({ missingProduction }) {
  return (
    <div>
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-lg font-bold pl-6">Calculos producción</h1>
        <button className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded">
          + Extra
        </button>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200  overflow-visible">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Unidades
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de entrega
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    # linea
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tiempo (horas)
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {missingProduction?.data?.missingProduction.map(
                  (pedido, pedidoIdx) => (
                    <tr
                      key={pedidoIdx}
                      className={`hover:bg-gray-100 
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                    >
                      <td className="px-6 py-2 text-sm font-medium text-gray-900">
                        {pedido.NOMBRE}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-500">
                        {pedido.UNIDADES}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-500">
                        {pedido["FECHA_DE_ENTREGA"]}
                      </td>
                      <td>
                        <SelectMenu state={pedido["ESTADO"]} />
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-500">
                        <input
                          className="w-7 h-4 bg-transparent"
                          value={pedido["NUMERO_DE_LINEA"]}
                        />
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">
                        {pedido["TIEMPO_HORAS"]}
                      </td>

                      <td className=" whitespace-nowrap text-right text-sm font-medium py-2 px-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissingProductionTable
