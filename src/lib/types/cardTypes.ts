import { Link } from "./linkType";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface CardProps {
  created_at: string;
  id: string;
  large: boolean;
  properties: Json;
  published_at: string;
  type: string;
  updated_at: string;
}

export type ProjectProperties = {
  name: string;
  imageUrl: string;
  link?: Link;
};
