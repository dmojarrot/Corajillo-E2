import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    const { gama, articuloDescripcion, costo, piezas, total } = req.body
    const { rows } = await inventoryDB.query(
      `INSERT INTO proceso ("GAMA", "ARTICULO-DESCRIPCION", "COSTO" , "PIEZAS", "TOTAL") VALUES ('${gama}', '${articuloDescripcion}', '${costo}', '${piezas}', '${total}') RETURNING *`
    )
    console.log(rows)
    res.status(200).json({ inventory: rows })
  } catch (err) {
    console.log(err)
  }
}
