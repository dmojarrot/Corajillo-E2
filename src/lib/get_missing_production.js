const get_missing_production = async () => {
  const res = await fetch("/api/db/getMissingProduction")
  const missingProduction = await res.json()
  return missingProduction
}

export default get_missing_production
