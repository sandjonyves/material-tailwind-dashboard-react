import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export  function DeleteConfirmDialog({ 
  open, 
  handleClose, 
  onConfirm, 
  itemName, 
  type 
}) {
  const getTypeLabel = () => {
    switch (type) {
      case "products":
        return "produit";
      case "categories":
        return "catégorie";
      case "tables":
        return "table";
      default:
        return "élément";
    }
  };

  return (
    <Dialog open={open} handler={handleClose} size="sm">
      <DialogHeader className="flex items-center gap-3">
        <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
        <Typography variant="h5" color="red">
          Confirmer la suppression
        </Typography>
      </DialogHeader>
      
      <DialogBody>
        <Typography variant="paragraph" color="blue-gray">
          Êtes-vous sûr de vouloir supprimer {getTypeLabel()} 
          <span className="font-semibold text-red-500"> "{itemName}"</span> ?
        </Typography>
        <Typography variant="small" color="gray" className="mt-2">
          Cette action est irréversible et toutes les données associées seront perdues.
        </Typography>
      </DialogBody>
      
      <DialogFooter className="space-x-2">
        <Button
          variant="text"
          color="gray"
          onClick={handleClose}
        >
          Annuler
        </Button>
        <Button
          variant="filled"
          color="red"
          onClick={onConfirm}
        >
          Supprimer
        </Button>
      </DialogFooter>
    </Dialog>
  );
}


export default DeleteConfirmDialog;