import { AddMissingProductionModal } from "./AddMissingProductionModal"
import SelectMenu from "./SelectMenu"
import { useState } from "react"

function MissingProductionTable({ missingProduction }) {
  const [disabledRow, setDisabledRow] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [value, setValue] = useState({ linea: null, tiempo: null, id: null })
  const handleSubmit = async () => {
    // get the data from the state
    const data = {
      numeroLinea: value.linea,
      tiempo: value.tiempo,
      id: value.id,
    }

    // Send the form data to our API and get a response.
    const response = await fetch("api/db/updateLineTimeProduction", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    if (result) {
      return
    }
  }
  return (
    <div>
      <AddMissingProductionModal
        formAction="api/db/addMissingProduction"
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
      />
      <div className="flex justify-between my-7 lg:my-0 items-center mb-2">
        <h1 className="text-lg font-bold pl-6">Calculos producción</h1>
        <button
          onClick={() => {
            setIsModalOpen(true)
          }}
          className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded"
        >
          + Extra
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 overflow-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200  overflow-visible">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Piezas
                  </th>
                  <th
                    scope="col"
                    className="pl-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha de entrega
                  </th>
                  <th
                    scope="col"
                    className="pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    # linea
                  </th>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tiempo (horas)
                  </th>
                  <th scope="col" className="relative py-3">
                    <span className="sr-only">Editar</span>
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
                      <td className="pl-4 py-2 text-sm font-medium text-gray-900">
                        {pedido.NOMBRE}
                      </td>
                      <td className="pl-6 py-2 text-sm text-gray-500">
                        {pedido.PIEZAS}
                      </td>
                      <td className="pl-8 py-2 text-sm text-gray-500">
                        {new Date(
                          pedido["FECHA_DE_ENTREGA"]
                        ).toLocaleDateString()}
                      </td>
                      <td className="px-4">
                        <SelectMenu state={pedido["ESTADO"]} id={pedido.id} />
                      </td>
                      <td className="pl-4 py-2 text-sm text-gray-500">
                        <input
                          className="w-14 h-4 bg-transparent border border-gray-300 rounded-md py-3 px-1 disabled:border-transparent"
                          type="number"
                          defaultValue={pedido["NUMERO_DE_LINEA"]}
                          onChange={(e) => {
                            setValue({
                              ...value,
                              linea: e.target.valueAsNumber,
                            })
                          }}
                          disabled={pedido.id === disabledRow ? false : true}
                        />
                      </td>
                      <td className="pl-6 py-2 text-sm text-gray-500 whitespace-nowrap">
                        <input
                          className="w-14 h-4 bg-transparent border border-gray-300 rounded-md py-3 px-1 disabled:border-transparent"
                          type="number"
                          defaultValue={pedido["TIEMPO_HORAS"]}
                          onChange={(e) => {
                            setValue({
                              ...value,
                              tiempo: e.target.valueAsNumber,
                            })
                          }}
                          disabled={pedido.id === disabledRow ? false : true}
                        />
                      </td>

                      <td className=" whitespace-nowrap text-right text-sm font-medium py-2 pr-4">
                        <button
                          onClick={() => {
                            if (
                              pedido.id === disabledRow &&
                              (value.linea !== pedido["NUMERO_DE_LINEA"] ||
                                value.tiempo !== pedido["TIEMPO_HORAS"])
                            ) {
                              setDisabledRow()
                              handleSubmit()
                            } else if (pedido.id !== disabledRow) {
                              setValue({
                                linea: pedido["NUMERO_DE_LINEA"],
                                tiempo: pedido["TIEMPO_HORAS"],
                                id: pedido.id,
                              })
                              setDisabledRow(pedido.id)
                            } else {
                              setDisabledRow()
                            }
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {!(pedido.id === disabledRow)
                            ? "Editar"
                            : value.linea === pedido["NUMERO_DE_LINEA"] &&
                              value.tiempo === pedido["TIEMPO_HORAS"]
                            ? "Cancelar"
                            : "Guardar"}
                        </button>
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
