import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@material-tailwind/react";

export  function ProductCategoryTableDetailsModal({ 
  open, 
  handleClose, 
  item, 
  type 
}) {
  if (!item) return null;

  const renderProductDetails = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar src={item.image_url} size="lg" variant="rounded" />
        <div>
          <Typography variant="h5" color="blue-gray">
            {item.name}
          </Typography>
          <Typography variant="paragraph" color="gray">
            Prix: {item.price} €
          </Typography>
        </div>
      </div>
      
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Disponibilité
        </Typography>
        <Chip
          variant="gradient"
          color={item.is_available ? "green" : "red"}
          value={item.is_available ? "Disponible" : "Indisponible"}
          className="w-fit"
        />
      </div>
      
      {item.description && (
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Description
          </Typography>
          <Typography variant="paragraph" color="gray">
            {item.description}
          </Typography>
        </div>
      )}
      
      {item.category && (
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Catégorie
          </Typography>
          <Typography variant="paragraph" color="gray">
            {item.category}
          </Typography>
        </div>
      )}
    </div>
  );

  const renderCategoryDetails = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar src={item.image_url} size="lg" variant="rounded" />
        <div>
          <Typography variant="h5" color="blue-gray">
            {item.name}
          </Typography>
        </div>
      </div>
      
      {item.description && (
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Description
          </Typography>
          <Typography variant="paragraph" color="gray">
            {item.description}
          </Typography>
        </div>
      )}
      
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Date de création
        </Typography>
        <Typography variant="paragraph" color="gray">
          {item.created_at ? new Date(item.created_at).toLocaleDateString() : "Non spécifiée"}
        </Typography>
      </div>
    </div>
  );

  const renderTableDetails = () => (
    <div className="space-y-4">
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.table_name}
        </Typography>
      </div>
      
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Description
        </Typography>
        <Typography variant="paragraph" color="gray">
          {item.description}
        </Typography>
      </div>
      
      {item.capacity && (
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Capacité
          </Typography>
          <Typography variant="paragraph" color="gray">
            {item.capacity} personnes
          </Typography>
        </div>
      )}
      
      {item.location && (
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Emplacement
          </Typography>
          <Typography variant="paragraph" color="gray">
            {item.location}
          </Typography>
        </div>
      )}
    </div>
  );

  const getTitle = () => {
    switch (type) {
      case "products":
        return "Détails du produit";
      case "categories":
        return "Détails de la catégorie";
      case "tables":
        return "Détails de la table";
      default:
        return "Détails";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "products":
        return renderProductDetails();
      case "categories":
        return renderCategoryDetails();
      case "tables":
        return renderTableDetails();
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} handler={handleClose} size="md">
      <DialogHeader>
        <Typography variant="h4" color="blue-gray">
          {getTitle()}
        </Typography>
      </DialogHeader>
      
      <DialogBody className="max-h-96 overflow-y-auto">
        {renderContent()}
      </DialogBody>
      
      <DialogFooter>
        <Button
          variant="text"
          color="blue-gray"
          onClick={handleClose}
        >
          Fermer
        </Button>
      </DialogFooter>
    </Dialog>
  );
}


export default ProductCategoryTableDetailsModal;