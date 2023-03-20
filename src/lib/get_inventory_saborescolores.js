const get_inventory_saborescolores = async () => {
  const res = await fetch("/api/db/getInventorySaboresColores")
  const inventory = await res.json()
  return inventory
}

export default get_inventory_saborescolores
