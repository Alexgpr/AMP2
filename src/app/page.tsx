import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full @container">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Valet Parking Lot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>
        <div className="flex min-h-[600px] lg:min-h-[720px] flex-col bg-cover bg-center bg-no-repeat relative items-start justify-center px-6 md:px-20 py-20" >
          <div className="max-w-[750px] flex flex-col gap-2 z-10">
            <div className="relative w-[300px] h-[120px] md:w-[400px] md:h-[250px] animate-in zoom-in duration-700 delay-300">
              <Image
                src="/logo.png"
                alt="AMP Valet Parking Services Logo"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="text-white text-4xl md:text-7xl font-black leading-[1] tracking-tight">
              Elevando el Estándar en <span className="text-brand-red">Valet Parking</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
              Excelencia, seguridad y distinción para sus eventos exclusivos. La primera impresión de sus invitados es nuestra prioridad número uno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/presupuesto"
                className="inline-flex h-12 items-center justify-center rounded-md bg-brand-red px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="/servicios"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inicio */}
      <section className="w-full py-6 md:py-8 lg:py-12 bg-white dark:bg-brand-dark flex flex-col items-center">
        <div className=" px-4 md:px-6 mx-auto">
          {/* <div className="flex items-center justify-center space-x-4 mb-16 text-center">
            <div className="space-y-2 flex flex-col items-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por qué elegir a <span className="text-brand-red">AMP</span></h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nos destacamos por nuestra atención al detalle, personal altamente capacitado y un compromiso inquebrantable con la seguridad.
              </p>
            </div>
          </div> */}


          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Excelencia Operativa</span>
              <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">
                Confianza y Profesionalismo <br />en Cada Entrega
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[480px]">
              Nos especializamos en brindar una experiencia fluida y elegante, asegurando que cada vehículo sea tratado con el máximo cuidado.
            </p>
          </div>


          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:bg-[#111]">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-brand-red rounded-full">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Máxima Seguridad</h3>
              <p className="text-gray-500 dark:text-gray-400">Su vehículo está en las mejores manos; contamos con pólizas de seguro de cobertura amplia para cualquier inconveniente.</p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:bg-[#111]">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-brand-red rounded-full">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Eficiencia y Rapidez</h3>
              <p className="text-gray-500 dark:text-gray-400">Gestión de flujo vehicular optimizada para evitar largas filas y esperas innecesarias para sus invitados.</p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow dark:bg-[#111]">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-brand-red rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Atención Premium</h3>
              <p className="text-gray-500 dark:text-gray-400">Desarrollamos una experiencia de bienvenida que será el abreboca perfecto para su evento inolvidable.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Capital humano */}
      <section className="w-full py-6 md:py-8 lg:py-12 bg-white dark:bg-brand-dark flex flex-col items-center">
        <div className="px-4 md:px-6 mx-auto">
          <div className="mx-auto grid max-w-7xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Capital Humano</span>
              <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">Capacitación y Certificaciones</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Invertimos en el desarrollo constante de nuestro personal para asegurar que sean una extensión de la calidad de su marca.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-brand-red">check_circle</span>
                  <span>Certificación en Manejo Defensivo y Vehículos de Lujo.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-brand-red">check_circle</span>
                  <span>Protocolos de Etiqueta y Hospitalidad Internacional.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-brand-red">check_circle</span>
                  <span>Primeros Auxilios y Gestión de Crisis.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-brand-red">check_circle</span>
                  <span>Antecedentes validados y pruebas de confianza periódicas.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100  dark:bg-slate-900 rounded-3xl p-8 grid grid-cols-2 gap-4">
              <div className="bg-white  dark:bg-[#111] p-6 rounded-2xl shadow-sm text-center">
                <span className="material-symbols-outlined text-brand-red text-4xl mb-4">school</span>
                <h4 className="font-bold text-2xl">40+</h4>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Horas de Entrenamiento/Año</p>
              </div>
              <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm text-center">
                <span className="material-symbols-outlined text-brand-red text-4xl mb-4">verified</span>
                <h4 className="font-bold text-2xl">100%</h4>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Personal Certificado</p>
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl h-64">
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="/capacitador.png"
                    alt="Modern corporate office building glass facade"
                    fill
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  //sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Protocolos */}
      <section className="w-full py-6 md:py-8 lg:py-12 bg-white dark:bg-brand-dark flex flex-col items-center ">
        <div className="flex flex-col max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] lg:py-12  p-4 md:p-16 text-white md:flex-row gap-6">

          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">Seguridad y Protocolos</h2>
            <p className="text-slate-400">Nuestra prioridad es la protección total de su patrimonio y la tranquilidad de sus clientes.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-brand-red text-3xl">policy</span>
                <div>
                  <p className="font-bold">Póliza Global</p>
                  <p className="text-xs text-slate-400">Cobertura total contra daños y robo.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-brand-red text-3xl">gavel</span>
                <div>
                  <p className="font-bold">Cumplimiento Legal</p>
                  <p className="text-xs text-slate-400">Total apego a normativas municipales.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-brand-red mb-4">key_visualizer</span>
              <h3 className="font-bold text-lg mb-2">Custodia de Llaves</h3>
              <p className="text-sm text-slate-400">Gabinetes inteligentes con acceso biométrico y trazabilidad completa de cada movimiento de llaves.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-brand-red mb-4">qr_code_2</span>
              <h3 className="font-bold text-lg mb-2">Trazabilidad Digital</h3>
              <p className="text-sm text-slate-400">Cada coche es escaneado en 4 puntos de control: entrada, zona de parking, solicitud y entrega.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-brand-red mb-4">health_and_safety</span>
              <h3 className="font-bold text-lg mb-2">Higiene y Sanitización</h3>
              <p className="text-sm text-slate-400">Protocolos post-pandemia aplicados a puntos de contacto: volantes, palancas y manijas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-brand-red mb-4">emergency</span>
              <h3 className="font-bold text-lg mb-2">Respuesta Inmediata</h3>
              <p className="text-sm text-slate-400">Equipo de supervisores móviles con capacidad de respuesta técnica y legal en sitio en &lt;15 min.</p>
            </div>
          </div>

        </div>
      </section>


      {/* Casos de éxito */}
      <section className="w-full py-6 md:py-8 lg:py-12 bg-white dark:bg-slate-900/50 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm ">Resultados</span>
            <h2 className="text-navy dark:text-slate-100 text-5xl font-black tracking-tight">
              Casos de Éxito
            </h2>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
            <div className=" relative h-48 bg-slate-200">
              <Image
                src="/exito1.png"
                alt="Hotel Luxury"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              //sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-red text-sm">hotel</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Hotelería de Gran Lujo</span>
              </div>
              <h3 className="text-xl font-bold italic">"Redujimos los tiempos de entrega en un 35% durante las horas pico de check-out."</h3>
              <p className="text-sm text-slate-500">— Director de Operaciones, Resort 5 Diamantes.</p>
            </div>
          </div>
          <div className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
            <div className="relative h-48 bg-slate-200">
              <Image
                src="/exito1.png"
                alt="Hotel Luxury"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              //sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-red text-sm">event_seat</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Centro de Convenciones</span>
              </div>
              <h3 className="text-xl font-bold italic">"Gestión impecable de más de 800 vehículos en una sola noche de gala corporativa."</h3>
              <p className="text-sm text-slate-500">— Event Manager, Recinto Citibanamex.</p>
            </div>
          </div>
          <div className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
            <div className="relative h-48 bg-slate-200">
              <Image
                src="/exito1.png"
                alt="Hotel Luxury"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              //sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-red text-sm">medical_services</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Sector Salud Premium</span>
              </div>
              <h3 className="text-xl font-bold italic">"La empatía y profesionalismo del personal ha mejorado nuestras métricas de NPS."</h3>
              <p className="text-sm text-slate-500">— Coordinador de Experiencia, Hospital ABC.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Listo */}
      <section className="py-24 px-6 @container">
        <div className="max-w-[1100px] mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-20 flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-white text-3xl md:text-6xl font-black leading-tight max-w-[800px] relative z-10">
            ¿Listo para el próximo nivel de excelencia?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-[650px] relative z-10">
            Solicite una propuesta personalizada y descubra por qué las marcas más prestigiosas confían en AMP Valet Parking.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center relative z-10">
            <button className="min-w-[260px] rounded-xl h-16 bg-brand-red text-white text-lg font-bold hover:bg-brand-red/90 hover:scale-105 transition-all shadow-xl shadow-brand-red/20">
              Solicitar Presupuesto
            </button>
            <button className="min-w-[260px] rounded-xl h-16 bg-transparent border-2 border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-all">
              Ver Galería
            </button>
          </div>
        </div>
      </section>

    </div >
  );
}
