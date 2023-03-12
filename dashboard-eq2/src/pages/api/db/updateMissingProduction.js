import missingProductionDB from "@/db/missingProductionDB"

export default async function handler(req, res) {
  try {
    const { nombre, piezas, fechaEntrega, numeroLinea, tiempo, id } = req.body
    const { rows } = await missingProductionDB.query(
      `UPDATE missingProduction SET "NOMBRE" = '${nombre}, "PIEZAS" = '${piezas}, "FECHA_DE_ENTREGA" = '${fechaEntrega}', "NUMERO_DE_LINEA" = '${numeroLinea}, "TIEMPO_HORAS" = '${tiempo}' WHERE id = ${id}`
    )
    console.log(rows)
    res.status(200).json({ production: rows })
  } catch (err) {
    console.log(err)
  }
}
