// config/sidebar.ts
import {
  BarChart2,
  BarChart4,
  Building2,
  Calculator,
  CircleDollarSign,
  Cog,
  CreditCard,
  FileText,
  Home,
  LucideIcon,
  Package,
  PackageCheck,
  PackageX,
  Receipt,
  RefreshCw,
  Settings,
  ShoppingCart,
  Tag,
  Tags,
  TrendingUp,
  Users,
  Warehouse,
  Wrench,
  MapPin,
  UserPlus,
  Shield,
  Building,
  User,
  Key,
  AlertTriangle,
  Hash,
  ArrowLeftRight,
  Edit,
  Plus,
  RotateCcw,
  UserCheck,
  FileBarChart,
  DollarSign,
  Clock,
  ShoppingBag,
  Star,
  Zap,
  Link,
  Database,
} from "lucide-react";

export interface ISidebarLink {
  title: string;
  href?: string;
  icon: LucideIcon;
  dropdown: boolean;
  permission: string; // Required permission to view this item
  dropdownMenu?: MenuItem[];
}

type MenuItem = {
  title: string;
  href: string;
  permission: string; // Required permission to view this menu item
};

export const sidebarLinks: ISidebarLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    dropdown: false,
    permission: "dashboard.read",
  },
  
  // === INVENTORY ===
  {
    title: "Inventory",
    icon: Package,
    dropdown: true,
    href: "/dashboard/inventory/items",
    permission: "inventory.read",
    dropdownMenu: [
      {
        title: "Items",
        href: "/dashboard/inventory/items",
        permission: "items.read",
      },
      {
        title: "Categories",
        href: "/dashboard/inventory/categories",
        permission: "categories.read",
      },
      {
        title: "Brands",
        href: "/dashboard/inventory/brands",
        permission: "brands.read",
      },
      {
        title: "Units",
        href: "/dashboard/inventory/units",
        permission: "units.read",
      },
      {
        title: "Current Stock",
        href: "/dashboard/inventory/current-stock",
        permission: "current_stock.read",
      },
      {
        title: "Low Stock Items",
        href: "/dashboard/inventory/low-stock",
        permission: "low_stock.read",
      },
      {
        title: "Serial Numbers",
        href: "/dashboard/inventory/serial-numbers",
        permission: "serial_numbers.read",
      },
      {
        title: "Stock Transfer",
        href: "/dashboard/inventory/stock-transfer",
        permission: "stock_transfer.read",
      },
      {
        title: "Stock Adjustments",
        href: "/dashboard/inventory/stock-adjustments",
        permission: "stock_adjustments.read",
      },
    ],
  },

  // === SALES ===
  {
    title: "Sales",
    icon: CircleDollarSign,
    dropdown: true,
    href: "/dashboard/sales/pos",
    permission: "sales.read",
    dropdownMenu: [
      {
        title: "POS Sales",
        href: "/dashboard/sales/pos",
        permission: "pos_sales.read",
      },
      {
        title: "Sales Order",
        href: "/dashboard/sales/orders",
        permission: "sales_orders.read",
      },
      {
        title: "Create Sales Order",
        href: "/dashboard/sales/create-order",
        permission: "sales_orders.create",
      },
      {
        title: "Returns",
        href: "/dashboard/sales/returns",
        permission: "sales_returns.read",
      },
      {
        title: "Create Return",
        href: "/dashboard/sales/create-return",
        permission: "sales_returns.create",
      },
      {
        title: "Customers",
        href: "/dashboard/sales/customers",
        permission: "customers.read",
      },
    ],
  },

  // === REPORTS ===
  {
    title: "Reports",
    icon: BarChart4,
    dropdown: true,
    href: "/dashboard/reports/stock-movement",
    permission: "reports.read",
    dropdownMenu: [
      {
        title: "Stock Movement",
        href: "/dashboard/reports/stock-movement",
        permission: "reports.read",
      },
      {
        title: "Inventory Valuation",
        href: "/dashboard/reports/inventory-valuation",
        permission: "reports.read",
      },
      {
        title: "Aging Analysis",
        href: "/dashboard/reports/aging-analysis",
        permission: "reports.read",
      },
      {
        title: "Purchase Summary",
        href: "/dashboard/reports/purchase-summary",
        permission: "reports.read",
      },
      {
        title: "Supplier Performance",
        href: "/dashboard/reports/supplier-performance",
        permission: "reports.read",
      },
      {
        title: "Sales Summary",
        href: "/dashboard/reports/sales-summary",
        permission: "reports.read",
      },
      {
        title: "Product Performance",
        href: "/dashboard/reports/product-performance",
        permission: "reports.read",
      },
    ],
  },

  // === INTEGRATIONS ===
  {
    title: "Integrations",
    icon: Link,
    dropdown: true,
    href: "/dashboard/integrations/pos",
    permission: "integrations.read",
    dropdownMenu: [
        {
            title: "POS Integration",
            href: "/dashboard/integrations/pos",
            permission: "pos_integration.read",
        },
        {
            title: "Accounting Integration",
            href: "/dashboard/integrations/accounting",
            permission: "accounting_integration.read",
        },
        {
            title: "API Management",
            href: "/dashboard/integrations/api",
            permission: "api_settings.read",
        },
    ],
  },

  // === SETTINGS ===
  {
    title: "Settings",
    icon: Settings,
    dropdown: true,
    href: "/dashboard/settings/locations",
    permission: "settings.read",
    dropdownMenu: [
      {
        title: "Locations",
        href: "/dashboard/settings/locations",
        permission: "locations.read",
      },
      {
        title: "Add Locations",
        href: "/dashboard/settings/add-location",
        permission: "locations.create",
      },
      {
        title: "Users & Invites",
        href: "/dashboard/settings/users",
        permission: "users_invites.read",
      },
      {
        title: "Roles & Permissions",
        href: "/dashboard/settings/roles",
        permission: "roles_permissions.read",
      },
      {
        title: "Tax Rates",
        href: "/dashboard/settings/tax-rates",
        permission: "tax.read",
      },
      {
        title: "Add Tax Rates",
        href: "/dashboard/settings/add-tax-rates",
        permission: "tax.create",
      },
      {
        title: "Company Settings",
        href: "/dashboard/settings/company",
        permission: "company_settings.read",
      },
      {
        title: "Profile",
        href: "/dashboard/settings/profile",
        permission: "profile.read",
      },
      {
        title: "Change Password",
        href: "/dashboard/settings/change-password",
        permission: "profile.read",
      },
    ],
  },
];