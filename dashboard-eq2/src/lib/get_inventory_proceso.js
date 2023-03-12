const get_inventory_proceso = async () => {
  const res = await fetch("/api/db/getInventoryProceso")
  const inventory = await res.json()
  return inventory
}

export default get_inventory_proceso
