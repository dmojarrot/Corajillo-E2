import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  try {
    const { gama, piezas, fechaPedido, fechaEntrega } = req.body
    const { rows } = await ordersDB.query(
      `INSERT INTO orders ("GAMA", "PIEZAS", "FECHA_DE_PEDIDO" , "FECHA_DE_ENTREGA") VALUES ('${gama}', '${piezas}', '${fechaPedido}', '${fechaEntrega}') RETURNING *`

    )
    console.log(rows)
    res.status(200).json({ orders: rows })
  } catch (err) {
    console.log(err)
  }
}
