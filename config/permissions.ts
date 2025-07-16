// permissions.ts

export type Permission = {
    create: string;
    read: string;
    update: string;
    delete: string;
};

export type ModulePermissions = {
    display: string;
    name: string;
    permissions: Permission;
};

export const permissions: ModulePermissions[] = [
  {
    display: "Dashboard",
    name: "dashboard",
    permissions: {
      create: "dashboard.create",
      read: "dashboard.read",
      update: "dashboard.update",
      delete: "dashboard.delete",
    },
  },
  
  // === INVENTORY MODULES ===
  {
    display: "Items",
    name: "items",
    permissions: {
      create: "items.create",
      read: "items.read",
      update: "items.update",
      delete: "items.delete",
    },
  },
  {
    display: "Categories",
    name: "categories",
    permissions: {
      create: "categories.create",
      read: "categories.read",
      update: "categories.update",
      delete: "categories.delete",
    },
  },
  {
    display: "Brands",
    name: "brands",
    permissions: {
      create: "brands.create",
      read: "brands.read",
      update: "brands.update",
      delete: "brands.delete",
    },
  },
  {
    display: "Units",
    name: "units",
    permissions: {
      create: "units.create",
      read: "units.read",
      update: "units.update",
      delete: "units.delete",
    },
  },
  {
    display: "Current Stock",
    name: "current_stock",
    permissions: {
      create: "current_stock.create",
      read: "current_stock.read",
      update: "current_stock.update",
      delete: "current_stock.delete",
    },
  },
  {
    display: "Low Stock Items",
    name: "low_stock",
    permissions: {
      create: "low_stock.create",
      read: "low_stock.read",
      update: "low_stock.update",
      delete: "low_stock.delete",
    },
  },
  {
    display: "Serial Numbers",
    name: "serial_numbers",
    permissions: {
      create: "serial_numbers.create",
      read: "serial_numbers.read",
      update: "serial_numbers.update",
      delete: "serial_numbers.delete",
    },
  },
  {
    display: "Stock Transfer",
    name: "stock_transfer",
    permissions: {
      create: "stock_transfer.create",
      read: "stock_transfer.read",
      update: "stock_transfer.update",
      delete: "stock_transfer.delete",
    },
  },
  {
    display: "Stock Adjustments",
    name: "stock_adjustments",
    permissions: {
      create: "stock_adjustments.create",
      read: "stock_adjustments.read",
      update: "stock_adjustments.update",
      delete: "stock_adjustments.delete",
    },
  },

  // === SALES MODULES ===
  {
    display: "POS Sales",
    name: "pos_sales",
    permissions: {
      create: "pos_sales.create",
      read: "pos_sales.read",
      update: "pos_sales.update",
      delete: "pos_sales.delete",
    },
  },
  {
    display: "Sales Orders",
    name: "sales_orders",
    permissions: {
      create: "sales_orders.create",
      read: "sales_orders.read",
      update: "sales_orders.update",
      delete: "sales_orders.delete",
    },
  },
  {
    display: "Sales Returns",
    name: "sales_returns",
    permissions: {
      create: "sales_returns.create",
      read: "sales_returns.read",
      update: "sales_returns.update",
      delete: "sales_returns.delete",
    },
  },
  {
    display: "Customers",
    name: "customers",
    permissions: {
      create: "customers.create",
      read: "customers.read",
      update: "customers.update",
      delete: "customers.delete",
    },
  },

  // === REPORTS MODULES ===
  {
    display: "Reports",
    name: "reports",
    permissions: {
      create: "reports.create",
      read: "reports.read",
      update: "reports.update",
      delete: "reports.delete",
    },
  },

  // === INTEGRATIONS MODULES ===
  {
    display: "POS Integration",
    name: "pos_integration",
    permissions: {
      create: "pos_integration.create",
      read: "pos_integration.read",
      update: "pos_integration.update",
      delete: "pos_integration.delete",
    },
  },
  {
    display: "Accounting Integration",
    name: "accounting_integration",
    permissions: {
      create: "accounting_integration.create",
      read: "accounting_integration.read",
      update: "accounting_integration.update",
      delete: "accounting_integration.delete",
    },
  },
  {
    display: "API Settings",
    name: "api_settings",
    permissions: {
      create: "api_settings.create",
      read: "api_settings.read",
      update: "api_settings.update",
      delete: "api_settings.delete",
    },
  },

  // === SETTINGS MODULES ===
  {
    display: "Locations",
    name: "locations",
    permissions: {
      create: "locations.create",
      read: "locations.read",
      update: "locations.update",
      delete: "locations.delete",
    },
  },
  {
    display: "Users & Invites",
    name: "users_invites",
    permissions: {
      create: "users_invites.create",
      read: "users_invites.read",
      update: "users_invites.update",
      delete: "users_invites.delete",
    },
  },
  {
    display: "Roles & Permissions",
    name: "roles_permissions",
    permissions: {
      create: "roles_permissions.create",
      read: "roles_permissions.read",
      update: "roles_permissions.update",
      delete: "roles_permissions.delete",
    },
  },
  {
    display: "Company Settings",
    name: "company_settings",
    permissions: {
      create: "company_settings.create",
      read: "company_settings.read",
      update: "company_settings.update",
      delete: "company_settings.delete",
    },
  },
  {
    display: "Profile",
    name: "profile",
    permissions: {
      create: "profile.create",
      read: "profile.read",
      update: "profile.update",
      delete: "profile.delete",
    },
  },
];

// === ADMIN PERMISSIONS (Full Access) ===
export const adminPermissions = [
  // Dashboard
  "dashboard.create",
  "dashboard.read",
  "dashboard.update",
  "dashboard.delete",
  
  // Inventory
  "inventory.read",
  "items.create",
  "items.read",
  "items.update",
  "items.delete",
  "categories.create",
  "categories.read",
  "categories.update",
  "categories.delete",
  "brands.create",
  "brands.read",
  "brands.update",
  "brands.delete",
  "units.create",
  "units.read",
  "units.update",
  "units.delete",
  "current_stock.create",
  "current_stock.read",
  "current_stock.update",
  "current_stock.delete",
  "low_stock.create",
  "low_stock.read",
  "low_stock.update",
  "low_stock.delete",
  "serial_numbers.create",
  "serial_numbers.read",
  "serial_numbers.update",
  "serial_numbers.delete",
  "stock_transfer.create",
  "stock_transfer.read",
  "stock_transfer.update",
  "stock_transfer.delete",
  "stock_adjustments.create",
  "stock_adjustments.read",
  "stock_adjustments.update",
  "stock_adjustments.delete",
  
  // Sales
  "sales.read",
  "pos_sales.create",
  "pos_sales.read",
  "pos_sales.update",
  "pos_sales.delete",
  "sales_orders.create",
  "sales_orders.read",
  "sales_orders.update",
  "sales_orders.delete",
  "sales_returns.create",
  "sales_returns.read",
  "sales_returns.update",
  "sales_returns.delete",
  "customers.create",
  "customers.read",
  "customers.update",
  "customers.delete",
  
  // Reports
  "reports.create",
  "reports.read",
  "reports.update",
  "reports.delete",
  
  // Integrations
  "integrations.read",
  "pos_integration.create",
  "pos_integration.read",
  "pos_integration.update",
  "pos_integration.delete",
  "accounting_integration.create",
  "accounting_integration.read",
  "accounting_integration.update",
  "accounting_integration.delete",
  "api_settings.create",
  "api_settings.read",
  "api_settings.update",
  "api_settings.delete",
  
  // Settings
  "settings.read",
  "locations.create",
  "locations.read",
  "locations.update",
  "locations.delete",
  "users_invites.create",
  "users_invites.read",
  "users_invites.update",
  "users_invites.delete",
  "roles_permissions.create",
  "roles_permissions.read",
  "roles_permissions.update",
  "roles_permissions.delete",
  "company_settings.create",
  "company_settings.read",
  "company_settings.update",
  "company_settings.delete",
  "profile.create",
  "profile.read",
  "profile.update",
  "profile.delete",
];

// === MANAGER PERMISSIONS (Limited Management) ===
export const managerPermissions = [
  // Dashboard
  "dashboard.read",
  
  // Inventory - Full access except delete
  "items.create",
  "items.read",
  "items.update",
  "categories.create",
  "categories.read",
  "categories.update",
  "brands.create",
  "brands.read",
  "brands.update",
  "units.create",
  "units.read",
  "units.update",
  "current_stock.read",
  "current_stock.update",
  "low_stock.read",
  "serial_numbers.create",
  "serial_numbers.read",
  "serial_numbers.update",
  "stock_transfer.create",
  "stock_transfer.read",
  "stock_transfer.update",
  "stock_adjustments.create",
  "stock_adjustments.read",
  "stock_adjustments.update",
  
  // Sales - Full access except delete
  "pos_sales.create",
  "pos_sales.read",
  "pos_sales.update",
  "sales_orders.create",
  "sales_orders.read",
  "sales_orders.update",
  "sales_returns.create",
  "sales_returns.read",
  "sales_returns.update",
  "customers.create",
  "customers.read",
  "customers.update",
  
  // Reports - Read only
  "reports.read",
  
  // Profile
  "profile.read",
  "profile.update",
];

// === SALES STAFF PERMISSIONS (Sales focused) ===
export const salesStaffPermissions = [
  // Dashboard
  "dashboard.read",
  
  // Inventory - Read only
  "items.read",
  "categories.read",
  "brands.read",
  "units.read",
  "current_stock.read",
  "low_stock.read",
  "serial_numbers.read",
  
  // Sales - Full access
  "pos_sales.create",
  "pos_sales.read",
  "pos_sales.update",
  "sales_orders.create",
  "sales_orders.read",
  "sales_orders.update",
  "sales_returns.create",
  "sales_returns.read",
  "customers.create",
  "customers.read",
  "customers.update",
  
  // Reports - Limited access
  "reports.read",
  
  // Profile
  "profile.read",
  "profile.update",
];

// === WAREHOUSE STAFF PERMISSIONS (Inventory focused) ===
export const warehouseStaffPermissions = [
  // Dashboard
  "dashboard.read",
  
  // Inventory - Full access except categories/brands/units
  "items.read",
  "items.update",
  "categories.read",
  "brands.read",
  "units.read",
  "current_stock.read",
  "current_stock.update",
  "low_stock.read",
  "serial_numbers.create",
  "serial_numbers.read",
  "serial_numbers.update",
  "stock_transfer.create",
  "stock_transfer.read",
  "stock_transfer.update",
  "stock_adjustments.create",
  "stock_adjustments.read",
  "stock_adjustments.update",
  
  // Sales - Limited access
  "sales_orders.read",
  "customers.read",
  
  // Reports - Limited access
  "reports.read",
  
  // Profile
  "profile.read",
  "profile.update",
];

// === VIEWER PERMISSIONS (Read only) ===
export const viewerPermissions = [
  // Dashboard
  "dashboard.read",
  
  // Inventory - Read only
  "items.read",
  "categories.read",
  "brands.read",
  "units.read",
  "current_stock.read",
  "low_stock.read",
  "serial_numbers.read",
  
  // Sales - Read only
  "pos_sales.read",
  "sales_orders.read",
  "customers.read",
  
  // Reports - Read only
  "reports.read",
  
  // Profile
  "profile.read",
  "profile.update",
];

// Helper function to get all permission strings
export function getAllPermissions(): string[] {
  return permissions.flatMap((module) => Object.values(module.permissions));
}

// Helper function to check if a permission exists
export function isValidPermission(permission: string): boolean {
  return getAllPermissions().includes(permission);
}

// Helper to get module permissions by name
export function getModulePermissions(
  moduleName: string
): Permission | undefined {
  const module = permissions.find((m) => m.name === moduleName);
  return module?.permissions;
}

// Type for the permissions object
export type PermissionsType = {
  [K in (typeof permissions)[number]["name"]]: Permission;
};
