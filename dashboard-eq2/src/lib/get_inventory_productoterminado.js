const get_inventory_productoterminado = async () => {
  const res = await fetch("/api/db/getInventoryProductoTerminado")
  const inventory = await res.json()
  return inventory
}

export default get_inventory_productoterminado
