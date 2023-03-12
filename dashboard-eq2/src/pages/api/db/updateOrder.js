import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  const { gama, piezas, fechaPedido, fechaEntrega, id } =
    req.body
  try {
    const { rows } = await ordersDB.query(
      `UPDATE orders SET "GAMA" = $1, "PIEZAS" = $2, "FECHA_DE_PEDIDO" = $3, "FECHA_DE_ENTREGA" = $4 WHERE id = '${id}' RETURNING *`[
        (gama, piezas, fechaPedido, fechaEntrega, id)
      ]
    )
    res.status(200).json({ orders: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
