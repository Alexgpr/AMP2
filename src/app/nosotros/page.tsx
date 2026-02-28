import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Nosotros",
    description: "Conozca la historia, misión y visión de AMP Valet Parking Services en Cancún.",
};

export default function NosotrosPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center" data-alt="Luxury cars lined up at a gala event entrance">
                    <Image
                        src="/nosotros.png"
                        alt="Valet de AMP recibiendo un vehículo"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">Sobre Nosotros</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">Elevando el Estándar del Servicio</h2>
                        <p className="max-w-2xl text-slate-200 text-lg">Más que un servicio de estacionamiento, somos la primera y última impresión de excelencia para sus invitados.</p>
                    </div>
                </div>
            </section>

            {/* Historia */}
            <section className="px-6 md:px-20 py-12 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-12 bg-brand-red"></div>
                                <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Nuestra Historia</span>
                            </div>
                            <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">Compromiso con la excelencia desde nuestra fundación</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Fundada con la visión de transformar la experiencia de estacionamiento, <strong>AMP Valet Parking</strong> ha crecido basándose en pilares de confianza, seguridad y un servicio al cliente inigualable.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                En <strong>AMP Valet Parking</strong>, cada vehículo que manejamos es tratado con el máximo respeto y profesionalismo. A lo largo de los años, hemos perfeccionado nuestros protocolos para asegurar que cada interacción sea rápida, segura y distinguida.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div>
                                    <p className="text-brand-red text-3xl font-bold">15+</p>
                                    <p className="text-slate-500 text-sm font-medium">Años de Experiencia</p>
                                </div>
                                <div>
                                    <p className="text-brand-red text-3xl font-bold">500k+</p>
                                    <p className="text-slate-500 text-sm font-medium">Vehículos Estacionados</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                            <div className="relative h-96 w-full rounded-2xl bg-slate-200 overflow-hidden shadow-xl">
                                <Image
                                    src="/grupo.png"
                                    alt="Valet de AMP recibiendo un vehículo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="px-6 md:px-20 py-20 bg-background-light dark:bg-background-dark">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight py-5">Misión y Visión</h2>
                    <p className="text-slate-600 dark:text-slate-400">Nuestros fundamentos estratégicos que guían cada acción de nuestro equipo para ofrecer el mejor servicio del mercado.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-brand-red text-3xl">target</span>
                        </div>
                        <h3 className="text-navy dark:text-slate-100 text-3xl font-bold mb-4">Nuestra Misión</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Brindar soluciones de estacionamiento seguras y eficientes que superen las expectativas de nuestros clientes y sus invitados, integrando tecnología de punta y personal altamente capacitado.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-brand-red text-3xl">visibility</span>
                        </div>
                        <h3 className="text-navy dark:text-slate-100 text-3xl font-bold mb-4">Nuestra Visión</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ser la empresa de valet parking referente a nivel nacional, reconocida por nuestra innovación tecnológica, calidad humana y el estricto cumplimiento de los más altos estándares de seguridad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Empleados */}
            <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-900/50">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight py-5">Nuestro Equipo</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Contamos con personal rigurosamente seleccionado y capacitado bajo estándares internacionales de servicio y manejo defensivo.
                        </p>
                    </div>
                    {/* <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:gap-3 transition-all">
                        <span>Ver requisitos de capacitación</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </div> */}
                </div>
                <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="group flex flex-col gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                            <Image
                                src="/empleado1.png"
                                alt="Ricardo Velázquez"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div>
                            <h4 className="text-navy dark:text-slate-100 text-xl font-bold">Ricardo Velázquez</h4>
                            <p className="text-brand-red font-medium text-sm">Director de Operaciones</p>
                        </div>
                    </div>
                    <div className="group flex flex-col gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                            <Image
                                src="/empleado2.png"
                                alt="Elena Martínez"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div>
                            <h4 className="text-navy dark:text-slate-100 text-xl font-bold">Elena Martínez</h4>
                            <p className="text-brand-red font-medium text-sm">Gerente de Calidad</p>
                        </div>
                    </div>
                    <div className="group flex flex-col gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                            <Image
                                src="/empleado3.png"
                                alt="Carlos Ruiz"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div>
                            <h4 className="text-navy dark:text-slate-100 text-xl font-bold">Carlos Ruiz</h4>
                            <p className="text-brand-red font-medium text-sm">Supervisor de Valet</p>
                        </div>
                    </div>
                    <div className="group flex flex-col gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                            <Image
                                src="/empleado4.png"
                                alt="Daniel Soto"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div>
                            <h4 className="text-navy dark:text-slate-100 text-xl font-bold">Daniel Soto</h4>
                            <p className="text-brand-red font-medium text-sm">Capitán de Servicio</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 max-w-7xl mx-auto bg-slate-900 dark:bg-slate-800  text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">¿Te gustaría ser parte de nuestro equipo?</h3>
                        <p className="text-slate-400 text-lg">Buscamos personas apasionadas por el servicio, con integridad y compromiso. Ofrecemos capacitación continua y uniformes de gala.</p>
                    </div>
                    <button className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors whitespace-nowrap">Enviar Curriculum</button>
                </div>
            </section >

        </>
    );
}
