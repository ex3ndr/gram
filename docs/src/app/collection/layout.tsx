'use client';
import { buttonVariants } from "@/components/ui/button";
import { collections } from "@/lib/libraries"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {collections.map((collection) => (
          <Link href={'/collection/' + collection.slug}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === '/collection/' + collection.slug
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start"
            )}>
            {collection.title}
          </Link>
        ))}
      </div>
      <div className="flex-col">
        {children}
      </div>
    </div>
  )
};