import missingProductionDB from "@/db/missingProductionDB"

export default async function handler(req, res) {
  try {
    const { rows } = await missingProductionDB.query(
      "SELECT * FROM missingProduction ORDER BY id"
    )
    res.status(200).json({ missingProduction: rows })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
