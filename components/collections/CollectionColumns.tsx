"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <Link
          href={`collections/${row.original._id}`}
          className="hover:text-red-1"
        >
          {row.original.title}
        </Link>
      );
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
