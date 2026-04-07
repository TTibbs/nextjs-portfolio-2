import { Button } from "./button";
import { cn } from "@/lib/utils";

export const HoverButton = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  asChild = false,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  asChild?: boolean;
} & Omit<React.ComponentProps<typeof Button>, "className" | "children">) => {
  return (
    <Button
      asChild={asChild}
      type={type}
      disabled={disabled}
      className={cn(
        "bg-[#00ff88] p-4 text-black transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#00ff88] hover:shadow-[4px_4px_0_#016d4e] active:scale-[0.98] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
