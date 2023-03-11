const get_inventory = async () => {
  const res = await fetch("/api/db/getInventory")
  const inventory = await res.json()
  return inventory
}

export default get_inventory
