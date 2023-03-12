const get_inventory_materiaprima = async () => {
  const res = await fetch("/api/db/getInventoryMateriaPrima")
  const inventory = await res.json()
  return inventory
}

export default get_inventory_materiaprima
