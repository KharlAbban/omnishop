import { APP_TITLE } from "@/utils/constants";
import Image from "next/image";

export default function Loading () {
    return (
        <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center text-theme-orange">
            <Image src="/omnishop-logo.jpeg" alt={APP_TITLE} width={150} height={150} className="animate-pulse" />
            <p className="text-xl font-playwright">Loading Products ...</p>
        </div>
    );
}