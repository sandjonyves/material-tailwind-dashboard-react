import React from "react";
import { 
  Card, 
  CardBody, 
  Typography, 
  Avatar, 
  Chip, 
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { 
  EyeIcon, 
  TrashIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  PencilIcon
} from "@heroicons/react/24/outline";

export  function DataTable({ 
  type, 
  data, 
  onEdit, 
  onDelete, 
  onViewDetails, 
  onToggleAvailability 
}) {
  return (
    <Card>
      <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {type === "products" && 
                ["Image", "Nom", "Prix", "Disponibilité", "Actions"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))
              }
              {type === "categories" && 
                ["Image", "Nom", "Actions"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))
              }
              {type === "tables" && 
                ["Nom", "Description", "Actions"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {type === "products" && data.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-5">
                  <Avatar src={item.image_url} size="sm" variant="rounded" />
                </td>
                <td className="py-3 px-5">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    {item.name}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    {item.price} €
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Chip
                    variant="gradient"
                    color={item.is_available ? "green" : "red"}
                    value={item.is_available ? "Disponible" : "Indisponible"}
                    className="w-fit"
                  />
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2">
                    <Tooltip content="Voir détails">
                      <IconButton
                        variant="text"
                        size="sm"
                        onClick={() => onViewDetails(item)}
                      >
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip content="Modifier">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="blue"
                        onClick={() => onEdit(item)}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip content={item.is_available ? "Rendre indisponible" : "Rendre disponible"}>
                      <IconButton
                        variant="text"
                        size="sm"
                        color={item.is_available ? "orange" : "green"}
                        onClick={() => onToggleAvailability(item)}
                      >
                        {item.is_available ? (
                          <XCircleIcon className="h-4 w-4" />
                        ) : (
                          <CheckCircleIcon className="h-4 w-4" />
                        )}
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip content="Supprimer">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="red"
                        onClick={() => onDelete(item)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
            
            {type === "categories" && data.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-5">
                  <Avatar src={item.image_url} size="sm" variant="rounded" />
                </td>
                <td className="py-3 px-5">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    {item.name}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2">
                    <Tooltip content="Voir détails">
                      <IconButton
                        variant="text"
                        size="sm"
                        onClick={() => onViewDetails(item)}
                      >
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip content="Modifier">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="blue"
                        onClick={() => onEdit(item)}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip content="Supprimer">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="red"
                        onClick={() => onDelete(item)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
            
            {type === "tables" && data.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-5">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    {item.table_name}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography variant="small" color="blue-gray">
                    {item.description}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2">
                    <Tooltip content="Voir détails">
                      <IconButton
                        variant="text"
                        size="sm"
                        onClick={() => onViewDetails(item)}
                      >
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip content="Modifier">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="blue"
                        onClick={() => onEdit(item)}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip content="Supprimer">
                      <IconButton
                        variant="text"
                        size="sm"
                        color="red"
                        onClick={() => onDelete(item)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}


export default DataTable;