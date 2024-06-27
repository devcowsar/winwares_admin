import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
import { FC } from "react";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange, onRemove, value }) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div className="relative w-[200px] h-[200px]" key={url}>
            <div className="absolute top-0 right-0 z-10">
              <Button
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-1 text-white"
              >
                <Trash calcMode="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="collections"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="wrkibkmy" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" /> Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
