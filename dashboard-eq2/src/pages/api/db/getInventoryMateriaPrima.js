import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    const { rows } = await inventoryDB.query(
      'SELECT * FROM materiaprima ORDER BY "GAMA"'
    )

    res.status(200).json({ inventory: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
