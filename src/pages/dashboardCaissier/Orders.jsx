import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import OrderCard from "@/widgets/cards/OrderCard";
import { OrderDetailsModal } from "@/widgets/modals";


const orders = [
  { order_id: 101, statut: "pending", client_name: "Alice", total: "4500 FCFA", product_number: "3 articles", createdAt: "2025-09-26T03:55:00" },
  { order_id: 102, statut: "valid", client_name: "Bob", total: "2500 FCFA", product_number: "1 article", createdAt: "2025-09-25T14:20:00" },
  { order_id: 103, statut: "rejet", client_name: "Charlie", total: "3200 FCFA", product_number: "2 articles", createdAt: "2025-09-20T10:00:00" },
  { order_id: 104, statut: "pending", client_name: "David", total: "6000 FCFA", product_number: "5 articles", createdAt: "2025-09-01T08:15:00" },
];

export function Orders() {
  const [activeTab, setActiveTab] = useState("pending");
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="mt-12">
      {/* Onglets */}
      <div className="w-96 mb-6">
        <Tabs value={activeTab}>
          <TabsHeader>
            <Tab value="pending" onClick={() => setActiveTab("pending")}>
              <ClockIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
              En attente
            </Tab>
            <Tab value="valid" onClick={() => setActiveTab("valid")}>
              <CheckCircleIcon className="-mt-1 mr-2 inline-block h-5 w-5 text-green-600" />
              Validées
            </Tab>
            <Tab value="rejet" onClick={() => setActiveTab("rejet")}>
              <XCircleIcon className="-mt-1 mr-2 inline-block h-5 w-5 text-red-600" />
              Rejetées
            </Tab>
          </TabsHeader>
        </Tabs>
      </div>

      {/* Liste des commandes */}
      <div className="grid gap-4">
        {orders
          .filter((order) => order.statut === activeTab)
          .map((order) => (
            <OrderCard
              key={order.order_id}
              {...order}
              onViewDetails={() => handleViewDetails(order)}
            />
          ))}
      </div>

      {/* Modal détails */}
      <OrderDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
    </div>
  );
}

export default Orders;
