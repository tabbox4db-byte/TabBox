import { ImageWithFallback } from "./ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";
import {
  BsBatteryCharging,
  BsUsb,
  BsUsbC,
  BsLightningChargeFill,
  BsSearch
} from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

const productData = [
  {
    name: "รุ่น 32C",
    chargeCount: 32,
    portType: "USB",
    fastCharge: true,
    image: "/images/32C.jpg"
  },
  {
    name: "รุ่น 8TC",
    chargeCount: 8,
    portType: "TYPE-C",
    fastCharge: true,
    image: "/images/8tc.jpg",
  },
  {
    name: "รุ่น 12TC",
    chargeCount: 12,
    portType: "TYPE-C",
    fastCharge: true,
    image: "/images/12tc.jpg",
  },
  {
    name: "รุ่น 24FC",
    chargeCount: 24,
    portType: "USB",
    fastCharge: true,
    image: "/images/24fc.jpg"
  },
];

const getPortIcon = (type: string, muted?: boolean) => {
  const baseClass = "text-xl";
  if (type === "USB")
    return (
      <BsUsb
        className={`${baseClass} ${muted ? "text-gray-700" : "text-blue-500"}`}
        aria-label="USB port"
      />
    );
  if (["TYPE-C", "TYPE C", "TYPEC"].includes(type))
    return (
      <BsUsbC
        className={`${baseClass} ${muted ? "text-gray-700" : "text-purple-500"}`}
        aria-label="Type-C port"
      />
    );
  return null;
};



export default function ProductCardList() {
  const [selected, setSelected] = useState<typeof productData[0] | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (item: typeof productData[0]) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl w-full mx-auto">
        {productData.map((item, idx) => (
          <Card
            key={idx}
            className="cursor-pointer shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-200 relative"
            onClick={() => handleSelect(item)}
          >
            
            <CardContent className="p-6 space-y-2">
              <div className="absolute top-4 right-4 text-gray-700">
              <BsSearch className="text-lg" />
            </div>
              <h2 className="text-xl font-semibold text-slate-800 mb-1">{item.name}</h2>
              <div className="text-sm text-blue-500 mt-3 flex items-center gap-1">
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BsBatteryCharging className="text-green-600 text-lg" aria-label="Battery" />
                <span>{item.chargeCount} เครื่อง</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                {getPortIcon(item.portType)}
                <span>{item.portType}</span>
              </div>
              {item.fastCharge && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BsLightningChargeFill className="text-yellow-400 text-lg" aria-label="Fast Charge" />
                  <span>Fast Charge</span>
                </div>
              )}

            </CardContent>

          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg w-full bg-white rounded-2xl shadow-2xl p-6 overflow-auto max-h-[90vh]">
          <div className="flex justify-between items-start mb-4">
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {selected?.name}
            </DialogTitle>
            <DialogClose className="p-1 rounded-full hover:bg-gray-100">
            </DialogClose>
          </div>

          {selected ? (
            <div className="space-y-4">
              <ImageWithFallback src={selected.image} alt={selected.name} />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <BsBatteryCharging aria-label="Battery" />
                  <span className="font-medium">จำนวน:</span>{" "}
                  <span>{selected.chargeCount} เครื่อง</span>
                </div>
                <div className="flex items-center gap-2">
                  {getPortIcon(selected?.portType || "", true)}
                  <span className="font-medium">พอร์ต:</span>{" "}
                  <span>{selected?.portType}</span>
                </div>
                {selected.fastCharge && (
                  <div className="flex items-center gap-2">
                    <BsLightningChargeFill aria-label="Fast Charge" />
                    <span className="font-medium">คุณสมบัติ:</span>{" "}
                    <span>รองรับ Fast Charge</span>
                  </div>
                )}
              </div>
              <DialogDescription className="text-sm text-gray-500">
                รายละเอียดสินค้า
              </DialogDescription>
            </div>
          ) : (
            <p className="text-center text-gray-500">ไม่พบสินค้า</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
