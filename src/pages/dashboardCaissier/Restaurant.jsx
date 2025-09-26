import React, { useState } from "react";
import { Tabs, TabsHeader, Tab, Input, Button } from "@material-tailwind/react";
import { CubeIcon, Squares2X2Icon, TableCellsIcon, PlusIcon } from "@heroicons/react/24/outline";
import DataTable from "@/widgets/tables/DataTable";
import AddModal from "@/widgets/modals/AddProductCategoryTablesModal";

import {EditProductCategoryTableModal, ProductCategoryTableDetailsModal} from "@/widgets/modals";
import { DeleteConfirmDialog } from "@/widgets/ConfirmDelete";

export function Restaurant() {
  const [activeTab, setActiveTab] = useState("products");
  const [search, setSearch] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditProductCategoryTableModal, setOpenEditProductCategoryTableModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpenEditProductCategoryTableModal(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setOpenDeleteDialog(true);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setOpenDetailsModal(true);
  };

  const handleConfirmDelete = () => {
    // Logique de suppression ici
    console.log("Suppression de l'élément:", selectedItem);
    setOpenDeleteDialog(false);
    setSelectedItem(null);
  };

  const handleToggleAvailability = (item) => {
    // Logique pour changer la disponibilité
    console.log("Changement de disponibilité pour:", item);
  };

  const filteredData = activeTab === "products" 
    ? mockProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : activeTab === "categories" 
    ? mockCategories.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    : mockTables.filter((t) => t.table_name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
      <Tabs value={activeTab}>
        <TabsHeader>
          <Tab value="products" onClick={() => setActiveTab("products")}>
            <CubeIcon className="h-5 w-5 mr-2" />
            Produits
          </Tab>
          <Tab value="categories" onClick={() => setActiveTab("categories")}>
            <Squares2X2Icon className="h-5 w-5 mr-2" />
            Catégories
          </Tab>
          <Tab value="tables" onClick={() => setActiveTab("tables")}>
            <TableCellsIcon className="h-5 w-5 mr-2" />
            Tables
          </Tab>
        </TabsHeader>
      </Tabs>

      {/* Recherche + bouton */}
      <div className="flex items-center gap-4">
        <Input
          label="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button
          color="green"
          className="flex items-center gap-2"
          onClick={() => setOpenAddModal(true)}
        >
          <PlusIcon className="h-5 w-5" />
          Ajouter
        </Button>
      </div>

      {/* Table */}
      <DataTable
        type={activeTab}
        data={filteredData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
        onToggleAvailability={handleToggleAvailability}
      />

      {/* Modals */}
      <AddModal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
        type={activeTab}
      />
      
      <EditProductCategoryTableModal
        open={openEditProductCategoryTableModal}
        handleClose={() => setOpenEditProductCategoryTableModal(false)}
        type={activeTab}
        item={selectedItem}
      />

      <DeleteConfirmDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedItem?.name || selectedItem?.table_name}
        type={activeTab}
      />

      <ProductCategoryTableDetailsModal
        open={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        item={selectedItem}
        type={activeTab}
      />
    </div>
  );
}


export default Restaurant;