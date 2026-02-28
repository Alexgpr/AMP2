import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Servicios",
    description: "Descubra nuestra oferta de valet parking para restaurantes, hoteles y eventos privados en Cancún.",
};



export default function ServiciosPage() {
    return (
        <>

            {/* Hero */}
            <section className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center" data-alt="Luxury cars lined up at a gala event entrance">
                    <Image
                        src="/servicio.png"
                        alt="Valet de AMP recibiendo un vehículo"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">Servicios</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">Soluciones de Valet Parking <br />a su Medida</h2>
                        <p className="max-w-2xl text-slate-200 text-lg">Excelencia, seguridad y elegancia en el manejo de vehículos. Elevamos la experiencia de sus invitados desde el primer contacto con el sello AMP.</p>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-20 px-6 lg:px-20 bg-white dark:bg-brand-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Especialidades</h3>
                            <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">Nuestros Servicios Profesionales</h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md">Ofrecemos un despliegue operativo impecable adaptado a las necesidades específicas de cada sector y evento.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service Card 1 */}
                        <div className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/eventosprivados.png"
                                    alt="Modern corporate office building glass facade"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">

                                <h4 className="text-xl font-bold mb-2 dark:text-white">Eventos Privados</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Bodas, galas y celebraciones exclusivas. Atención personalizada para que sus invitados disfruten sin preocupaciones.
                                </p>
                            </div>
                        </div>
                        {/* Service Card 2 */}
                        <div className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/corporativos.png"
                                    alt="Modern corporate office building glass facade"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">

                                <h4 className="text-xl font-bold mb-2 dark:text-white">Corporativo</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Optimización de estacionamiento para oficinas y centros de negocios. Eficiencia y rapidez para ejecutivos y clientes.
                                </p>
                            </div>
                        </div>
                        {/* Service Card 3 */}
                        <div className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/restaurantes.png"
                                    alt="Modern corporate office building glass facade"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">

                                <h4 className="text-xl font-bold mb-2 dark:text-white">Restaurantes y Hoteles</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Operaciones diarias de alto flujo. Nos convertimos en la extensión de su servicio de hospitalidad.
                                </p>
                            </div>
                        </div>
                        {/* Service Card 4 */}
                        <div className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src="/Logistica.png"
                                    alt="Modern corporate office building glass facade"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">

                                <h4 className="text-xl font-bold mb-2 dark:text-white">Logística</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Planificación integral y gestión eficiente de espacios de parking. Maximizamos la capacidad de su recinto.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Valor Agregado */}
            <section className="py-20 px-6 lg:px-20 bg-slate-100 dark:bg-brand-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">Valor Agregado AMP</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">verified_user</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Seguro Total</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Cobertura amplia de responsabilidad civil para su total tranquilidad y la de sus invitados.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">location_on</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Rastreo en Tiempo Real</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Sistema digital de control para el seguimiento preciso del estatus de cada vehículo en custodia.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">front_hand</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Protocolo de Bienvenida</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Personal uniformado y capacitado bajo estándares internacionales de hospitalidad y cortesía.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">smartphone</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Ticket Digital</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Eliminamos el papel. Los invitados reciben un link vía SMS para solicitar su vehículo con anticipación.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">cleaning_services</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Servicio de Lavado</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Opciones de car-wash premium mientras el vehículo se encuentra estacionado (opcional).</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-brand-red text-3xl">support_agent</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-lg font-bold mb-2">Atención 24/7</h5>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Soporte operativo y atención al cliente disponible en todo momento para cualquier requerimiento.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 lg:px-20 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">¿Listo para optimizar su estacionamiento?</h2>
                            <p className="text-slate-300 text-lg">Contáctenos hoy mismo para una evaluación gratuita y descubra cómo AMP puede transformar la experiencia de sus clientes.</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="px-8 py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-brand-red/90 transition-colors">Solicitar Cotización</a>
                            {/* <a href="#" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">Hablar con un Asesor</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
