import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    // query to select materiaprima table (we only care of this one)
    const { rows } = await inventoryDB.query(
      'SELECT * FROM proceso ORDER BY "GAMA"'
    )

    // query to select the join between materiaprima, proceso, and productoterminado tables
    // const { rows } = await inventoryDB.query(
    //   "SELECT * FROM materiaprima UNION ALL SELECT * FROM proceso UNION ALL SELECT * FROM productoterminado"
    // )

    res.status(200).json({ inventory: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
