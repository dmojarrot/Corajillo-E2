import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  try {
    const { rows } = await ordersDB.query("SELECT * FROM orders")
    res.status(200).json({ orders: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
