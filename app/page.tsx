import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex gap-6 max-w-[1400px] mx-auto w-full mt-8 px-8">
      {/* Main Content - Credits */}
      <div className="flex-[2] bg-white dark:bg-[#f4f4f5] rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 dark:from-white/40 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-indigo-600 tracking-tight">MIS CREDITOS</h1>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-indigo-500 text-white text-sm font-medium">Todos</button>
              <button className="px-4 py-1.5 rounded-full border border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50">En proceso</button>
              <button className="px-4 py-1.5 rounded-full border border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50">Pendientes</button>
              <button className="px-4 py-1.5 rounded-full border border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50">Concluidos</button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Expanded Credit Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 dark:border-gray-100 overflow-hidden">
              <div className="bg-gray-100 dark:bg-[#111111] text-gray-900 dark:text-white px-6 py-4 flex items-center justify-between cursor-pointer transition-colors duration-300">
                <span className="font-semibold">Crédito Clásico</span>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300">
                  <span>ESTE CRÉDITO CONCLUYÓ EL DÍA MARZO 15, 2022</span>
                  <ChevronUp className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Fecha de inicio:</span>
                    <span className="text-gray-600">Marzo 14, 2022</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Capital inicial:</span>
                    <span className="text-gray-600">$120,000.00 MXN</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Fecha de cierre:</span>
                    <span className="text-gray-600">Marzo 14, 2023</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Tasa promedio anual:</span>
                    <span className="text-indigo-600">10.00%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Plazo:</span>
                    <span className="text-indigo-600">12 meses</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">Entrega de intereses:</span>
                    <span className="text-indigo-600">Estándar</span>
                  </div>
                </div>

                <div className="mb-6 rounded-lg overflow-hidden border border-indigo-100">
                  <div className="bg-indigo-50 dark:bg-indigo-200/50 px-4 py-2 text-sm font-semibold text-indigo-900">
                    Detalle de corte
                  </div>
                  <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 font-medium">
                      <tr>
                        <th className="px-4 py-2 font-normal">Fecha de corte</th>
                        <th className="px-4 py-2 font-normal">Intereses</th>
                        <th className="px-4 py-2 font-normal">ISR</th>
                        <th className="px-4 py-2 font-normal">Intereses después de impuestos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-indigo-50/50 dark:bg-indigo-100/30 text-gray-800">
                        <td className="px-4 py-3">2022-03-31</td>
                        <td className="px-4 py-3">566.67</td>
                        <td className="px-4 py-3">113.33</td>
                        <td className="px-4 py-3">453.33</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 bg-emerald-400 text-white rounded-full text-sm font-medium">
                      Concluido
                    </span>
                    <button className="px-6 py-1.5 bg-indigo-500 text-white rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
                      Ver Contrato
                    </button>
                    <button className="px-6 py-1.5 border border-indigo-500 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-50 transition-colors">
                      Ver detalles
                    </button>
                  </div>
                  <div className="text-xl">
                    <span className="font-semibold text-indigo-600">Total: </span>
                    <span className="font-bold text-gray-900">$453.33</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsed Credit Cards */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-[#111111] text-gray-900 dark:text-white px-6 py-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-[#1a1a1a] transition-colors duration-300">
                <span className="font-semibold">Crédito Clásico</span>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>ESTE CRÉDITO CONCLUYÓ EL DÍA MARZO 15, 2022</span>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar - Notifications */}
      <div className="flex-1 bg-white dark:bg-[#111111] rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-indigo-500 mb-8 tracking-tight">NOTIFICACIONES</h2>
        
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    Tu solicitud para revisión<br/>de datos ha sido enviada.
                  </p>
                  <p className="text-indigo-500 dark:text-indigo-400 text-xs">
                    Marzo 22, 2022, 1:14 p.m.
                  </p>
                </div>
                <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-full text-xs font-medium hover:bg-indigo-600 transition-colors whitespace-nowrap">
                  Marcar como leída
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
