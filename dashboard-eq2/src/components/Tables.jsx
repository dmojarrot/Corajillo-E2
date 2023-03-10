import InventoryTable from "./InventoryTable"
import OrdersTable from "./OrdersTable"
import MissingProductionTable from "./MissingProductionTable"

export default function Tables({ inventory, orders, missingProduction }) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-y-10">
      <div className="flex lg:flex-row flex-col gap-x-5">
        {/* missingProduction */}
        <MissingProductionTable missingProduction={missingProduction} />
        {/* orders */}
        <OrdersTable orders={orders} />
      </div>
      {/* Inventario */}
      <InventoryTable inventory={inventory} />
    </div>
  )
}
