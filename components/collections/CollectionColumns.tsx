"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <p className="text-red">{row.original.title}</p>;
    },
  },
  {
    accessorKey: "products",
    header: "Prouducts",
    cell: ({ row }) => {
      return <p>{row.original.products.length}</p>;
      console.log(row);
    },
  },
  {
    accessorKey: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
