export default async function handler(req, res) {
  const orders = [
    {
      nombre: "Corajillos",
      unidades: "600",
      "fecha de pedido": "2021-01-01",
      "fecha de entrega": "2021-01-01",
    },
    {
      nombre: "Bayleys Corajillos",
      unidades: "100",
      "fecha de pedido": "2021-01-01",
      "fecha de entrega": "2021-01-01",
    },
  ]
  res.status(200).json({ orders })
}
