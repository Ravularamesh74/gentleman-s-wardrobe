
// src/components/cart/DeliveryEstimator.tsx

import { useMemo, useState } from "react";
import {
  MapPin,
  Truck,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface DeliveryEstimatorProps {
  subtotal?: number;
}

const SERVICEABLE_PINCODES: Record<
  string,
  { city: string; state: string; days: number }
> = {
  "500001": { city: "Hyderabad", state: "Telangana", days: 2 },
  "500007": { city: "Secunderabad", state: "Telangana", days: 2 },
  "500039": { city: "Uppal", state: "Telangana", days: 2 },
  "500062": { city: "ECIL", state: "Telangana", days: 2 },
  "500076": { city: "Nacharam", state: "Telangana", days: 1 },
  "500081": { city: "Hitech City", state: "Telangana", days: 2 },
};

export function DeliveryEstimator({
  subtotal = 0,
}: DeliveryEstimatorProps) {
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState(false);

  const location = useMemo(
    () => SERVICEABLE_PINCODES[pincode],
    [pincode]
  );

  const estimatedDate = useMemo(() => {
    if (!location) return "";

    const date = new Date();
    date.setDate(date.getDate() + location.days);

    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }, [location]);

  const freeShipping = subtotal >= 999;

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-full bg-yellow-100 p-2">
          <Truck className="h-5 w-5 text-yellow-700" />
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Delivery Estimator
          </h3>

          <p className="text-sm text-zinc-500">
            Check delivery availability by pincode.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          maxLength={6}
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, ""));
            setChecked(false);
          }}
          placeholder="Enter 6-digit pincode"
          className="flex-1 rounded-2xl border px-4 py-3 outline-none focus:border-yellow-500"
        />

        <button
          onClick={() => setChecked(true)}
          className="rounded-2xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
        >
          Check
        </button>
      </div>

      {/* Result */}
      {checked && (
        <div className="mt-5">
          {location ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">
                  Delivery Available
                </span>
              </div>

              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {location.city}, {location.state}
                </p>

                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  Estimated Delivery:{" "}
                  <strong>{estimatedDate}</strong>
                </p>

                <p className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  {freeShipping
                    ? "Eligible for FREE Shipping"
                    : "Shipping charges may apply"}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">
                  Sorry, delivery is currently unavailable for this pincode.
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Info */}
      <div className="mt-5 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-600">
        <p>🚚 Free Shipping on orders above ₹999</p>
        <p className="mt-1">
          📦 Express delivery available in selected cities.
        </p>
      </div>
    </div>
  );
}
