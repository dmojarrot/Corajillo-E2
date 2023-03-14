import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  const { articuloDescripcion, costo, piezas, total, id } = req.body

  try {
    const { rows } = await inventoryDB.query(
      `UPDATE saboresycolores SET "ARTICULO-DESCRIPCION" = '${articuloDescripcion}', "COSTO" = '${costo}', "PIEZAS" = '${piezas}', "TOTAL" = '${total}' WHERE id = '${id}' RETURNING *`
    )
    res.status(200).json({ inventory: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
