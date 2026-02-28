import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-slate-900 text-white dark:bg-[#151515]">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <div className="text-xl tracking-tighter font-bold flex gap-2 items-center">
                                <span className="text-brand-red text-2xl">AMP</span>
                                <span className="text-sm font-medium tracking-wide border-l-2 border-brand-red pl-2">
                                    VALET PARKING SERVICE
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                            Servicios profesionales de valet parking en Cancún, Quintana Roo. Garantizamos seguridad, eficiencia y la mejor experiencia para sus invitados.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/" className="hover:text-brand-red transition-colors">Inicio</Link></li>
                            <li><Link href="/nosotros" className="hover:text-brand-red transition-colors">Nosotros</Link></li>
                            <li><Link href="/servicios" className="hover:text-brand-red transition-colors">Servicios</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><Link href="/contacto" className="hover:text-brand-red transition-colors">Contáctanos</Link></li>
                            <li><Link href="/presupuesto" className="hover:text-brand-red transition-colors">Solicitar Presupuesto</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} AMP Valet Parking Services. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
