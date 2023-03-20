const get_orders = async () => {
  const res = await fetch("/api/db/getOrders")
  const orders = await res.json()
  return orders
}

export default get_orders
