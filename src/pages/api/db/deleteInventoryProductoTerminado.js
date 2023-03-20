import inventoryDB from "@/db/inventoryDB"

export default async function handler(req, res) {
  try {
    const { id } = req.body
    const inventory = await inventoryDB.query(
      `DELETE FROM productoterminado WHERE id = ${id} RETURNING *`
    )
    res.status(200).json(inventory)
  } catch (err) {
    console.log(err)
  }
}
