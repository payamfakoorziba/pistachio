import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-8 lg:px-4 w-full", className)}
      id={id}
    >
      {children}
    </div>
  );
};

export default Container;
