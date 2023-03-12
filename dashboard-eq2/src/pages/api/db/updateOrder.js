import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  const { gamaNueva, piezas, fechaPedido, fechaEntrega, gamaAnterior } =
    req.body
  try {
    const { rows } = await ordersDB.query(
      'UPDATE inventory SET "GAMA" = $1, "PIEZAS" = $2, "FECHA_DE_PEDIDO" = $3, "FECHA_DE_ENTREGA" = $4 WHERE "GAMA" = $5 RETURNING *'[
        (gamaNueva, piezas, fechaPedido, fechaEntrega, gamaAnterior)
      ]
    )
    res.status(200).json({ orders: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
