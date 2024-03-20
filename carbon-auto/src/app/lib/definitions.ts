// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    isUser: boolean;
  };
  
  export type Admin = {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
  };
  
  export type Vehicle = {
    id: string;
    make: string;
    model: string;
    trim: string
    year: number;
    mileage: bigint;
    image_url: string;
    fuel_type: string;
    miles_to_tree: number;
    tree_planted: number;
  };
  