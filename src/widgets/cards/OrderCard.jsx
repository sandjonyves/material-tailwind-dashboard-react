// OrderCard.jsx
import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import { EyeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { timeAgo } from '@/utils';

export function OrderCard({ order_id, statut, client_name, total, product_number, createdAt , onViewDetails }) {
  const statusConfig = {
    pending: { color: "amber", label: "En attente", icon: <ClockIcon className="h-4 w-4" /> },
    valid: { color: "green", label: "Validée", icon: <ClockIcon className="h-4 w-4" /> },
    rejet: { color: "red", label: "Rejetée", icon: <ClockIcon className="h-4 w-4" /> },
  };

  const { color, label, icon } = statusConfig[statut] || {};

  return (
    <Card className="w-full max-w-full">
      <CardBody>
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Typography variant="h6" color="blue-gray" className="font-semibold">
              Commande #{order_id}
            </Typography>
            <Chip icon={icon} value={label} variant="ghost" color={color} className="rounded-full" />
          </div>

          {/* Boutons */}
          <div className="flex gap-2">
            <Button
              variant="text"
              size="sm"
              className="flex items-center gap-1 normal-case"
              color="blue-gray"
              onClick={onViewDetails} // 👉 nouvelle prop
            >
              <EyeIcon className="h-4 w-4" />
              Détails
            </Button>
            {statut === "pending" && (
              <Button size="sm" className="normal-case" color="green">
                Confirmer
              </Button>
            )}
            {statut === "valid" && (
              <Button size="sm" className="normal-case" color="amber">
                Éditer
              </Button>
            )}
          </div>
        </div>

        {/* Client */}
        <div className="mb-3">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Client: <span className="font-medium text-blue-gray-800">{client_name}</span>
          </Typography>
        </div>

        {/* Total */}
        <div className="mb-3">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Total: <span className="font-medium text-blue-gray-800">{total} • {product_number}</span>
          </Typography>
        </div>

        {/* Temps écoulé */}
        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
          {timeAgo(createdAt)}
        </Typography>
      </CardBody>
    </Card>
  );
};




export default OrderCard;