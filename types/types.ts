import { Role, User } from "@prisma/client";

export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type SavingProps = {
  amount: number;
  month: string;
  name: string;
  userId: string;
  paymentDate: any;
};
export type UserProps = {
  name: string;
  orgName: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  password: string;
};

export type InvitedUserProps = {
  name: string;
  orgId: string;
  orgName: string
  roleId: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  password: string;
};
export type LoginProps = {
  email: string;
  password: string;
};
export type ForgotPasswordProps = {
  email: string;
};

// types/types.ts

export interface RoleFormData {
  displayName: string;
  description?: string;
  permissions: string[];
  orgId: string
}

export interface UserWithRoles extends User {
  roles: Role[];
}

export interface RoleOption {
  label: string;
  value: string;
}

export interface UpdateUserRoleResponse {
  error: string | null;
  status: number;
  data: UserWithRoles | null;
}

export interface RoleResponse {
  id: string;
  displayName: string;
  description?: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UnitDTO {
  id: string;
  name: string;
  symbol: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface BrandDTO {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface CategoryDTO {
    id: string;
    title: string;
    description: string | null;
    imageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface TaxDTO {
    id: string;
    name: string;
    rate: number;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface ItemDTO {
    id: string;
    name: string;
    sku: string;
    costPrice: number;
    sellingPrice: number;
    thumbnail?: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}