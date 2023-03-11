import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  try {
    const { gama, piezas, fechaPedido, fechaEntrega } = req.body
    const { rows } = await ordersDB.query(
      'INSERT INTO orders ("GAMA", "PIEZAS", "FECHA_DE_PEDIDO" , "FECHA_DE_ENTREGA") VALUES ($1, $2, $3, $4) RETURNING *',
      [gama, piezas, fechaPedido, fechaEntrega]
    )
    console.log(rows)
    res.status(200).json({ orders: rows })
  } catch (err) {
    console.log(err)
  }
}
