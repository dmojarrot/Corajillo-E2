export default async function handler(req, res) {
  const missingProduction = [
    {
      nombre: "Café",
      unidades: "400",
      "fecha de entrega": "2021-01-01",
      estado: "en trabajo",
      "# linea": "1",
      tiempo: "1",
    },
    {
      nombre: "Licor de hierbas",
      unidades: "300",
      "fecha de entrega": "2021-01-01",
      estado: "en trabajo",
      "# linea": "2",
      tiempo: "1",
    },
    {
      nombre: "Ensamblar/etiquetar corajillo",
      unidades: "100",
      "fecha de entrega": "2021-01-01",
      estado: "disponible",
      "# linea": "",
      tiempo: "1",
    },
    {
      nombre: "Ensamblar/etiquetar corajillo",
      unidades: "400",
      "fecha de entrega": "2021-01-01",
      estado: "en espera",
      "# linea": "",
      tiempo: "1",
    },
    {
      nombre: "Ensamblar/etiquetar bayleys",
      unidades: "100",
      "fecha de entrega": "2021-01-01",
      estado: "en espera",
      "# linea": "",
      tiempo: "1",
    },
    {
      nombre: "Empacar corajillo",
      unidades: "500",
      "fecha de entrega": "2021-01-01",
      estado: "en espera",
      "# linea": "",
      tiempo: "1",
    },
    {
      nombre: "Empacar bayleys",
      unidades: "100",
      "fecha de entrega": "2021-01-01",
      estado: "en espera",
      "# linea": "",
      tiempo: "1",
    },
    {
      nombre: "Empacar corajillo",
      unidades: "100",
      "fecha de entrega": "2021-01-01",
      estado: "finalizado",
      "# linea": "8",
      tiempo: "1",
    },
  ]
  res.status(200).json({ missingProduction })
}
