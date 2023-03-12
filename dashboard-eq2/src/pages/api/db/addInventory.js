import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    const { gama, articuloDescripcion, costo, piezas, total } = req.body
    const { rows } = await inventoryDB.query(
      'INSERT INTO proceso ("GAMA", "ARTICULO-DESCRIPCION", "COSTO" , "PIEZAS", "TOTAL") VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [gama, articuloDescripcion, costo, piezas, total]
    )
    console.log(rows)
    res.status(200).json({ orders: rows })
  } catch (err) {
    console.log(err)
  }
}
