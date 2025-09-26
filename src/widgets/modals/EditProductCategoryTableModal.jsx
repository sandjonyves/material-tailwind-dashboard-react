import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Textarea,
  Avatar,
} from "@material-tailwind/react";

export function EditProductCategoryTableModal({
  open,
  handleClose,
  type,
  item,
}) {
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (item?.image_url) {
      setImagePreview(item.image_url);
    }
  }, [item]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!item) return null; // sécurité si aucun élément sélectionné

  return (
    <Dialog open={open} handler={handleClose} size="md">
      <DialogHeader>
        Modifier{" "}
        {type === "products"
          ? "le produit"
          : type === "categories"
          ? "la catégorie"
          : "la table"}
      </DialogHeader>

      <DialogBody divider className="space-y-4">
        {/* Image visible uniquement pour produits et catégories */}
        {(type === "products" || type === "categories") && (
          <div className="flex flex-col items-center gap-3">
            <Avatar
              src={imagePreview || ""}
              alt={item.name}
              size="xl"
              variant="rounded"
              className="shadow-md"
            />
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}

        {/* Formulaire selon la tab */}
        {type === "products" && (
          <>
            <Input label="Nom du produit" defaultValue={item.name} />
            <Textarea label="Description" defaultValue={item.description} />
            <Input label="Prix" type="number" defaultValue={item.price} />
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={item.is_available} />
                Disponible
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={item.is_out_of_stock} />
                En rupture
              </label>
            </div>
          </>
        )}

        {type === "categories" && (
          <>
            <Input label="Nom de la catégorie" defaultValue={item.name} />
          </>
        )}

        {type === "tables" && (
          <>
            <Input label="Nom de la table" defaultValue={item.table_name} />
            <Textarea label="Description" defaultValue={item.description} />
          </>
        )}
      </DialogBody>

      <DialogFooter>
        <Button variant="text" color="red" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="gradient" color="blue" onClick={handleClose}>
          Enregistrer
        </Button>
      </DialogFooter>
    </Dialog>
  );
}


export default EditProductCategoryTableModal;