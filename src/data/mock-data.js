export const mockProducts = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Base tomate, mozzarella, basilic",
    price: 8.5,
    image_url: "https://via.placeholder.com/80",
    is_available: true,
    is_out_of_stock: false,
    category_id: 1,
  },
  {
    id: 2,
    name: "Burger Classic",
    description: "Steak, cheddar, salade, tomate",
    price: 6.9,
    image_url: "https://via.placeholder.com/80",
    is_available: true,
    is_out_of_stock: false,
    category_id: 2,
  },
];

export const mockCategories = [
  { id: 1, name: "Pizzas", image_url: "https://via.placeholder.com/80" },
  { id: 2, name: "Burgers", image_url: "https://via.placeholder.com/80" },
];

export const mockTables = [
  { id: 1, restaurant_id: 1, table_name: "Table 1", description: "Près de la fenêtre" },
  { id: 2, restaurant_id: 1, table_name: "Table 2", description: "Côté terrasse" },
];
