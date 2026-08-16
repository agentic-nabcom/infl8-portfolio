import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 font-semibold text-center transition-all hover:opacity-75 font-kodchasan";
  const variantStyles =
    variant === "primary"
      ? "bg-[#D96E95] text-white"
      : "bg-[#FBFBFB] text-black border border-gray-300";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Link>
  );
}
