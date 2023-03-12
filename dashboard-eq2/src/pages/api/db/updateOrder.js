import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  const { gama, piezas, fechaPedido, fechaEntrega, id } =
    req.body
  try {
    const { rows } = await ordersDB.query(
      `UPDATE orders SET "GAMA" = '${gama}', "PIEZAS" = '${piezas}', "FECHA_DE_PEDIDO" = '${fechaPedido}', "FECHA_DE_ENTREGA" = '${fechaEntrega}' WHERE id = '${id}' RETURNING *`
    
    )
    res.status(200).json({ orders: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
