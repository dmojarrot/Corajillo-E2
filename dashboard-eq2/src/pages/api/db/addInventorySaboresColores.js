import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    const { articuloDescripcion, costo, piezas, total } = req.body
    const { rows } = await inventoryDB.query(
      `INSERT INTO saboresycolores ("ARTICULO-DESCRIPCION", "COSTO" , "PIEZAS", "TOTAL") VALUES ('${articuloDescripcion}', '${costo}', '${piezas}', '${total}') RETURNING *`
    )
    console.log(rows)
    res.status(200).json({ inventory: rows })
  } catch (err) {
    console.log(err)
  }
}
