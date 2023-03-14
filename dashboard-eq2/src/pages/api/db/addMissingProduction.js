import missingProductionDB from "@/db/missingProductionDB"

export default async function handler(req, res) {
  try {
    const { nombre, piezas, fechaEntrega, estado, numeroLinea, tiempo } =
      req.body
    const { rows } = await missingProductionDB.query(
      `INSERT INTO missingproduction ("NOMBRE", "PIEZAS", "FECHA_DE_ENTREGA", "ESTADO", "NUMERO_DE_LINEA", "TIEMPO_HORAS") VALUES ('${nombre}', '${piezas}', '${fechaEntrega}', '${estado}', '${numeroLinea}', '${tiempo}') RETURNING *`
    )
    console.log(rows)
    res.status(200).json({ inventory: rows })
  } catch (err) {
    console.log(err)
  }
}
