/* This example requires Tailwind CSS v2.0+ */
const inventory = [
  {
    name: "Café",
    "# litros": "50",
    unidades: "100",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Licor de hierbas",
    "# litros": "80",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Bayleys",
    "# litros": "N/A",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Shakers",
    "# litros": "N/A",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },

  {
    name: "Botellitas de plastico",
    "# litros": "N/A",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Etiqueta de corajillo",
    "# litros": "N/A",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
  {
    name: "Etiqueta de bayleys",
    "# litros": "N/A",
    unidades: "200",
    "# lote": "AC003434",
    "fecha de vencimiento": "2021-01-01",
    "fecha de expedición": "2021-01-01",
  },
]

const pedidos = [
  {
    name: "Corajillos",
    unidades: "50",
    "fecha de pedido": "2021-01-01",
    "fecha de entrega": "2021-01-01",
  },
]

export default function Tables() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <h1 className="text-lg font-bold px-6 py-3">Pedidos</h1>

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
                    key={pedido.email}
                    className={pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido.unidades}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de pedido"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de entrega"]}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
      <h1 className="text-lg font-bold px-6 py-3 mt-5">Inventario actual</h1>

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
                    # Litros
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
                    key={pedido.email}
                    className={pedidoIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["# litros"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido.unidades}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["# lote"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de expedición"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pedido["fecha de vencimiento"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
