"use client";
import { FC, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface MultiSelectProps {
  placeholder: string;
  collections: CollectionType[];
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const MultiSelect: FC<MultiSelectProps> = ({
  placeholder,
  collections,
  value,
  onChange,
  onRemove,
}) => {
  const [inputVale, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Command className="overflow-visible bg-white">
        <CommandInput
          placeholder={placeholder}
          value={inputVale}
          onValueChange={setInputValue}
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
        />
        <div className="relative mt-2">
          {open && (
            <CommandList>
              <CommandGroup className="absolute w-full z-10 top-0 overflow-auto border rounded-md shadow-md">
                {collections.map((collection) => {
                  console.log(collection);
                  return (
                    <CommandItem
                      key={collection._id}
                      onMouseDown={(e) => e.preventDefault()}
                      onSelect={() => {
                        onChange(collection._id);
                        setInputValue("");
                      }}
                      className="hover:bg-grey-2 cursor-pointer"
                    >
                      {collection.title}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          )}
        </div>
      </Command>
    </>
  );
};

export default MultiSelect;
