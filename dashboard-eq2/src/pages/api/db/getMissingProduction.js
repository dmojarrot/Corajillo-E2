import missingProductionDB from "@/db/missingProductionDB"


export default async function handler(req, res) {
  const { rows } = await missingProductionDB.query(
    "SELECT * FROM missingProduction"
  )
  res.status(200).json({ missingProduction: rows })
}

