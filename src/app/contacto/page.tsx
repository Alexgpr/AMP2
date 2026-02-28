import { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Contáctenos para cotizar el servicio de valet parking ideal para su evento en Cancún.",
};

export default function ContactoPage() {
    return (
        <div className="flex flex-col min-h-screen py-12 md:py-24 bg-brand-gray dark:bg-brand-dark">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand-dark dark:text-brand-gray">
                        Póngase en <span className="text-brand-red">Contacto</span>
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Estamos listos para atenderle. Llene el formulario o utilice nuestros datos de contacto directos.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info Card */}
                    <div className="bg-brand-dark dark:bg-[#111] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                        {/* Background Logo subtle overlay */}
                        <div className="absolute -bottom-10 -right-10 opacity-10 w-[300px] h-[300px] pointer-events-none">
                            <Image
                                src="/logo.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h2 className="text-2xl font-bold mb-8">Información de Contacto</h2>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-brand-red shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-white">Dirección</h3>
                                    <p className="text-gray-400 mt-1">Cancún, Quintana Roo<br />México, C.P. 77500</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-brand-red shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-white">Teléfonos</h3>
                                    <p className="text-gray-400 mt-1">
                                        C: +52 (998) 123 4567<br />
                                        O: +52 (998) 765 4321
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-brand-red shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-white">Email</h3>
                                    <p className="text-gray-400 mt-1">info@ampvalet.com<br />ventas@ampvalet.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-[#151515] p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="mb-8 flex justify-center md:justify-start">
                            <div className="w-[180px] h-[60px] relative">
                                <Image
                                    src="/logo.png"
                                    alt="AMP Valet"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-brand-dark dark:text-gray-300">Nombre</label>
                                    <input id="first-name" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red" placeholder="Juan" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-brand-dark dark:text-gray-300">Apellidos</label>
                                    <input id="last-name" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red" placeholder="Pérez" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-brand-dark dark:text-gray-300">Correo Electrónico</label>
                                <input id="email" type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red" placeholder="juan@ejemplo.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-brand-dark dark:text-gray-300">Mensaje</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red resize-none" placeholder="¿Cómo podemos ayudarle?..." required></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-md font-bold transition-colors">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
