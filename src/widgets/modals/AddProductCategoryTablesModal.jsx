import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea } from "@material-tailwind/react";

export function AddModal ({ open, handleClose, type }) {
  return (
    <Dialog open={open} handler={handleClose} size="md">
      <DialogHeader>Ajouter {type === "products" ? "un produit" : type === "categories" ? "une catégorie" : "une table"}</DialogHeader>
      <DialogBody divider className="space-y-4">
        {type === "products" && (
          <>
            <Input label="Nom du produit" />
            <Textarea label="Description" />
            <Input label="Prix" type="number" />
            <Input label="URL image" />
          </>
        )}

        {type === "categories" && (
          <>
            <Input label="Nom de la catégorie" />
            <Input label="URL image" />
          </>
        )}

        {type === "tables" && (
          <>
            <Input label="Nom de la table" />
            <Textarea label="Description" />
          </>
        )}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleClose}>Annuler</Button>
        <Button variant="gradient" color="green" onClick={handleClose}>Enregistrer</Button>
      </DialogFooter>
    </Dialog>
  );
};



export default AddModal;