import { Metadata } from "next";
import Image from "next/image";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
    title: "Presupuesto",
    description: "Solicite un presupuesto personalizado para servicios de valet parking en Cancún.",
};

export default function PresupuestoPage() {
    return (
        <div className="flex flex-col min-h-screen py-12 md:py-24 bg-brand-gray dark:bg-brand-dark">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block p-4 bg-red-50 dark:bg-red-900/20 rounded-full mb-6">
                        <Calculator className="w-10 h-10 text-brand-red" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-brand-dark dark:text-brand-gray mb-4">
                        Solicitar <span className="text-brand-red">Presupuesto</span>
                    </h1>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                        Complete el siguiente formulario para recibir una cotización detallada y adaptada a las necesidades de su evento o establecimiento.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#111] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-center mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
                        <div className="relative w-[200px] h-[70px]">
                            <Image
                                src="/logo.png"
                                alt="AMP Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold border-b border-brand-red pb-2 inline-block">Datos de Contacto</h2>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Nombre Completo</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" required placeholder="Ej. Carlos Mendoza" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Teléfono</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" required placeholder="Ej. 998 123 4567" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Correo Electrónico</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" required placeholder="carlos@ejemplo.com" />
                                </div>
                            </div>

                            {/* Event Info */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold border-b border-brand-red pb-2 inline-block">Detalles del Servicio</h2>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Tipo de Servicio</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" required>
                                        <option value="" disabled selected>Seleccione una opción</option>
                                        <option value="boda">Boda / Evento Social</option>
                                        <option value="corporativo">Evento Corporativo</option>
                                        <option value="restaurante">Restaurante / Bar (Fijo)</option>
                                        <option value="hotel">Hotel (Fijo)</option>
                                        <option value="privado">Fiesta Privada a Domicilio</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Fecha Estimada</label>
                                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" required />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Invitados (aprox.)</label>
                                        <input type="number" min="1" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" placeholder="Ej. 150" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Horas de serv.</label>
                                        <input type="number" min="1" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors" placeholder="Ej. 6" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4">
                            <label className="text-sm font-medium text-brand-dark dark:text-gray-300">Información Adicional (Opcional)</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#151515] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white dark:focus:bg-black transition-colors resize-none" placeholder="Mencione particularidades del lugar, requerimientos especiales, etc."></textarea>
                        </div>

                        <div className="pt-6">
                            <button type="submit" className="w-full md:w-auto md:px-12 py-4 bg-brand-red hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-red-900/20">
                                Solicitar Cotización
                            </button>
                            <p className="text-xs text-gray-400 mt-4 text-center md:text-left">
                                * AMP Valet Parking se compromete a proteger su privacidad. Sus datos serán usados únicamente para propósitos de cotización.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
