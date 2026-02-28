import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo placeholder - waiting for asset implementation */}
                    <div className="text-xl tracking-tighter font-bold flex gap-2 items-center">
                        {/* <Image
                            src="/logochico.png"
                            alt="AMP Valet Parking Services Logo"
                            width={100}
                            height={100}
                            className="object-contain drop-shadow-2xl"
                        /> */}
                        <span className="text-brand-red text-2xl">AMP</span>
                        <span className="text-sm font-medium tracking-wide text-brand-dark dark:text-brand-gray hidden sm:inline-block border-l-2 border-brand-red pl-2">
                            VALET PARKING SERVICE
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
                    <Link href="/" className="hover:text-brand-red transition-colors">Inicio</Link>
                    <Link href="/nosotros" className="hover:text-brand-red transition-colors">Nosotros</Link>
                    <Link href="/servicios" className="hover:text-brand-red transition-colors">Servicios</Link>
                    <Link href="/contacto" className="hover:text-brand-red transition-colors">Contacto</Link>
                    <Link href="/presupuesto" className="px-4 py-2 bg-brand-red text-white ro rounded-md hover:bg-red-700 transition-colors">
                        Presupuesto
                    </Link>
                </nav>
                <div className="flex flex-row items-center gap-4">
                    <ThemeToggle />
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </header>
    );
}
