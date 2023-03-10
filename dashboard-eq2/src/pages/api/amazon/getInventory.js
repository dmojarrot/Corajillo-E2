export default async function handler(req, res) {
  const inventory = [
    {
      nombre: "Corajillo terminado",
      unidades: "100",
      "# lote": "AC003434",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Bayleys terminado",
      unidades: "0",
      "# lote": "AC003434",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Corajillo ensamblado y etiquetado",
      unidades: "0",
      "# lote": "",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Bayleys ensamblado y etiquetado",
      unidades: "0",
      "# lote": "",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Café",
      unidades: "100",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "D",
    },
    {
      nombre: "Licor de hierbas",
      unidades: "200",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Bayleys",
      unidades: "200",
      "# lote": "AC003434",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "B",
    },
    {
      nombre: "Shakers",
      unidades: "3,000",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "A",
    },

    {
      nombre: "Botellitas de plastico",
      unidades: "2,000",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "X",
    },
    {
      nombre: "Etiqueta de corajillo",
      unidades: "1,000",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
    {
      nombre: "Etiqueta de bayleys",
      unidades: "1,000",
      "fecha de vencimiento": "2021-01-01",
      "fecha de expedición": "2021-01-01",
      proveedor: "",
    },
  ]
  res.status(200).json({ inventory })
}
