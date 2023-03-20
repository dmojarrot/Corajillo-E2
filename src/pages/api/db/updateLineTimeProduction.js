import missingProductionDB from "@/db/missingProductionDB"

export default async function handler(req, res) {
  try {
    const { numeroLinea, tiempo, id } = req.body
    const { rows } = await missingProductionDB.query(
      `UPDATE missingProduction SET "NUMERO_DE_LINEA" = '${numeroLinea}', "TIEMPO_HORAS" = '${tiempo}' WHERE id = ${id} RETURNING *`
    )
    console.log(rows)
    res.status(200).json({ missingProduction: rows })
  } catch (err) {
    console.log(err)
  }
}
