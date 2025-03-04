import { LocateIcon } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useCurrentLocation from "@/hooks/useCurrentLocation";

const CurrentLocationOption = () => {
  const { getCurrentLocation } = useCurrentLocation();

  return (
    <DropdownMenuItem onSelect={getCurrentLocation} className="gap-2">
      <LocateIcon size={16} />
      <span>Your Location</span>
    </DropdownMenuItem>
  );
};

export default CurrentLocationOption;
