"use client";
import { usePathname } from "next/navigation";

export default function notFound() {
    const pathname = usePathname() ;
    const productId = pathname.split("/")[2];
    return (
        <div>
            <h2>Product Not Found for the {productId}</h2>
            <p>Could not find requested resource</p>
        </div>
    );
}