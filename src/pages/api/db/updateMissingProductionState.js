import missingProductionDB from "@/db/missingProductionDB"

export default async function handler(req, res) {
  try {
    const { estado, id } = req.body
    const { rows } = await missingProductionDB.query(
      `UPDATE missingProduction SET "ESTADO" = '${estado}' WHERE id = ${id} RETURNING *`
    )
    console.log(rows)
    res.status(200).json({ missingProduction: rows })
  } catch (err) {
    console.log(err)
  }
}
