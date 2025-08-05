import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { PlusCircle, Save, ImageIcon, FileText } from "lucide-react";

export default function ProductModal({ onAdd }: { onAdd: (form: FormData) => void }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name || !description || !imageFile) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", imageFile);

    onAdd(formData);
    setOpen(false);
    setName("");
    setDescription("");
    setImageFile(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
        <PlusCircle className="w-5 h-5" />
        เพิ่มสินค้า
      </DialogTrigger>

      <DialogContent className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="text-gray-500" />
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="ชื่อสินค้า"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <FileText className="text-gray-500" />
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="รายละเอียด"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <ImageIcon className="text-gray-500" />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        {imageFile && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              className="h-40 rounded border object-contain"
            />
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!name || !description || !imageFile}
          className={`flex items-center justify-center gap-2 w-full py-2 rounded text-white transition ${
            !name || !description || !imageFile
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          <Save className="w-5 h-5" />
          บันทึกสินค้า
        </button>
      </DialogContent>
    </Dialog>
  );
}
