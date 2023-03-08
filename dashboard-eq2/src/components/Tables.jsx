const inventory = [
  {
    name: "Corajillo terminado",
    unidades: "100",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Bayleys terminado",
    unidades: "0",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Corajillo ensamblado y etiquetado",
    unidades: "0",
    "# lote": "",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Bayleys ensamblado y etiquetado",
    unidades: "0",
    "# lote": "",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Café",
    unidades: "100",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Licor de hierbas",
    unidades: "200",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Bayleys",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Shakers",
    unidades: "3,000",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },

  {
    name: "Botellitas de plastico",
    unidades: "2,000",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Etiqueta de corajillo",
    unidades: "1,000",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Etiqueta de bayleys",
    unidades: "1,000",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
]

const pedidos = [
  {
    name: "Corajillos",
    unidades: "600",
    "fecha de pedido": "2021-01-01",
    "fecha de entrega": "2021-01-01",
  },
  {
    name: "Bayleys Corajillos",
    unidades: "100",
    "fecha de pedido": "2021-01-01",
    "fecha de entrega": "2021-01-01",
  },
]

const faltantes = [
  {
    name: "Café",
    unidades: "400",
    "fecha de entrega": "2021-01-01",
    estado: "en trabajo",
    "# linea": "1",
  },
  {
    name: "Licor de hierbas",
    unidades: "300",
    "fecha de entrega": "2021-01-01",
    estado: "en trabajo",
    "# linea": "2",
  },
  {
    name: "Ensamblar/etiquetar corajillo",
    unidades: "100",
    "fecha de entrega": "2021-01-01",
    estado: "disponible",
    "# linea": "",
  },
  {
    name: "Ensamblar/etiquetar corajillo",
    unidades: "400",
    "fecha de entrega": "2021-01-01",
    estado: "en espera",
    "# linea": "",
  },
  {
    name: "Ensamblar/etiquetar bayleys",
    unidades: "100",
    "fecha de entrega": "2021-01-01",
    estado: "a espera",
    "# linea": "",
  },
  {
    name: "Empacar corajillo",
    unidades: "500",
    "fecha de entrega": "2021-01-01",
    estado: "en espera",
    "# linea": "",
  },
  {
    name: "Empacar bayleys",
    unidades: "100",
    "fecha de entrega": "2021-01-01",
    estado: "en espera",
    "# linea": "",
  },
  {
    name: "Empacar corajillo",
    unidades: "100",
    "fecha de entrega": "2021-01-01",
    estado: "completo",
    "# linea": "",
  },
]

export default function Tables() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-y-10">
      <div className="flex lg:flex-row flex-col gap-x-5">
        {/* Faltantes */}
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
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
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
                        Fecha de entrega
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        # linea
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {faltantes.map((pedido, pedidoIdx) => (
                      <tr
                        key={pedidoIdx}
                        className={`hover:bg-gray-200
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                      >
                        <td className="px-6 py-2 text-sm font-medium text-gray-900">
                          {pedido.name}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-500">
                          {pedido.unidades}
                        </td>

                        <td className="px-6 py-2 text-sm text-gray-500">
                          {pedido["fecha de entrega"]}
                        </td>

                        <td
                          className={`mx-6 my-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-center
                            ${
                              pedido["estado"] === "disponible"
                                ? " bg-green-100 text-green-800"
                                : pedido["estado"] === "en trabajo"
                                ? " bg-yellow-100 text-yellow-800"
                                : pedido["estado"] === "completo"
                                ? " bg-red-100 text-red-800"
                                : " bg-gray-100 text-gray-800"
                            }
                          `}
                        >
                          {pedido["estado"]}
                        </td>
                        <td className="px-6 py-2 text-sm text-gray-500">
                          {pedido["# linea"]}
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Pedidos */}
        <div>
          <div className="flex justify-between mb-2 items-center">
            <h1 className="text-lg font-bold pl-6">Pedidos</h1>
            <button className=" text-white bg-indigo-600 font-bold px-3 py-1 rounded">
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
                        Name
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
                        Fecha de pedido
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Fecha de entrega
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map((pedido, pedidoIdx) => (
                      <tr
                        key={pedidoIdx}
                        className={`hover:bg-gray-200
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                      >
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {pedido.name}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          {pedido.unidades}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          {pedido["fecha de pedido"]}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                          {pedido["fecha de entrega"]}
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
      </div>
      {/* Inventario */}
      <div>
        <div className="flex justify-between mb-2 items-center">
          <h1 className="text-lg font-bold pl-6 mt-5">Inventario actual</h1>
          <button className=" text-white bg-indigo-600 font-bold px-3 py-1 mt-5 rounded">
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
                      Name
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
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((pedido, pedidoIdx) => (
                    <tr
                      key={pedidoIdx}
                      className={`hover:bg-gray-200
                          ${pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        `}
                    >
                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {pedido.name}
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
    </div>
  )
}
