import ordersDB from "@/db/ordersDB"

export default async function handler(req, res) {
  const { rows } = await ordersDB.query("SELECT * FROM orders")
  res.status(200).json({ orders: rows })
}
