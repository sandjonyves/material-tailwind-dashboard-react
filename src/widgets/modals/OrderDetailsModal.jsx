// OrderDetailsModal.jsx
import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";


export function OrderDetailsModal ({ open, onClose, order }) {

  if (!order) return null; // rien à afficher si pas de commande sélectionnée

  return (
    <Dialog open={open} handler={onClose} size="lg">
      <DialogHeader>
        <Typography variant="h5">Détails de la commande</Typography>
      </DialogHeader>
      <DialogBody divider>
        <div className="space-y-3">
          <Typography variant="h6" color="blue-gray">
            Commande #{order.order_id}
          </Typography>
          <Typography>
            <span className="font-medium">Client :</span> {order.client_name}
          </Typography>
          <Typography>
            <span className="font-medium">Statut :</span> {order.statut}
          </Typography>
          <Typography>
            <span className="font-medium">Total :</span> {order.total}
          </Typography>
          <Typography>
            <span className="font-medium">Articles :</span> {order.product_number}
          </Typography>
          <Typography>
            <span className="font-medium">Date :</span>{" "}
            {new Date(order.createdAt).toLocaleString()}
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose}>
          Fermer
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default OrderDetailsModal;
