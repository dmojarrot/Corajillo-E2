import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  try {
    const { id } = req.body
    const order = await ordersDB.query(
      `DELETE FROM orders WHERE id = ${id} RETURNING *`
    )
    res.status(200).json(order)
  } catch (err) {
    console.log(err)
  }
}
