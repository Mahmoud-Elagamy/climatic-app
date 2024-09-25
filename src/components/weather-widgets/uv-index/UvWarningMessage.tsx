import ToolTip from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { MessageCircleWarning } from "lucide-react";

const UvWarningMessage = ({ uvAlongDay }: { uvAlongDay: number }) => {
  return (
    <ToolTip
      tooltipTrigger={
        <InfoCircledIcon className="size-[17px] dark:text-blue-700" />
      }
      tooltipContent={
        <>
          <MessageCircleWarning
            size={16}
            className="mr-1 inline-block text-orange-400 dark:text-orange-700"
          />
          The UV level is expected to reach {uvAlongDay.toFixed(1)} today, so
          don&apos;t forget to stay in shade.
        </>
      }
    />
  );
};
export default UvWarningMessage;