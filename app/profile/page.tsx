import { ChevronDown, Calendar as CalendarIcon } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 tracking-tight">INFORMACIÓN DE PERFIL</h1>
      
      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Nombre(s)</label>
            <input 
              type="text" 
              defaultValue="Brayan Gabriel"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Apellido paterno</label>
            <input 
              type="text" 
              defaultValue="Valle"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Apellido materno</label>
            <input 
              type="text" 
              defaultValue="Juárez"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Nacionalidad</label>
            <input 
              type="text" 
              defaultValue="Mexicana"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Sexo</label>
            <div className="relative">
              <select className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 appearance-none focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <img 
              src="https://picsum.photos/seed/brayan/120/120" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
            />
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Foto de perfil</h3>
              <button className="px-6 py-1.5 bg-indigo-500 text-white rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
                Cambiar foto
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Fecha de nacimiento</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="07 / Febrero / 1996"
                className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500 pointer-events-none" />
            </div>
            
            {/* Mock Calendar Popover */}
            <div className="absolute mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-72 z-50 hidden group-hover:block">
              <div className="flex items-center justify-between mb-4">
                <button className="text-indigo-500 hover:text-indigo-600">&lt;</button>
                <span className="font-semibold text-sm text-gray-900">Febrero 1996</span>
                <button className="text-indigo-500 hover:text-indigo-600">&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                <div className="text-gray-400">D</div>
                <div className="text-gray-400">L</div>
                <div className="text-gray-400">M</div>
                <div className="text-gray-400">M</div>
                <div className="text-gray-400">J</div>
                <div className="text-gray-400">V</div>
                <div className="text-gray-400">S</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                <div className="text-gray-300 py-1">27</div>
                <div className="text-gray-300 py-1">28</div>
                <div className="text-gray-300 py-1">29</div>
                <div className="text-gray-300 py-1">30</div>
                <div className="text-gray-300 py-1">31</div>
                <div className="py-1 text-gray-900">1</div>
                <div className="py-1 text-gray-900">2</div>
                <div className="py-1 text-gray-900">3</div>
                <div className="py-1 text-gray-900">4</div>
                <div className="py-1 text-gray-900">5</div>
                <div className="py-1 text-gray-900">6</div>
                <div className="bg-indigo-500 text-white rounded-full py-1">7</div>
                <div className="py-1 text-gray-900">8</div>
                <div className="py-1 text-gray-900">9</div>
                <div className="py-1 text-gray-900">10</div>
                <div className="py-1 text-gray-900">11</div>
                <div className="py-1 text-gray-900">12</div>
                <div className="py-1 text-gray-900">13</div>
                <div className="py-1 text-gray-900">14</div>
                <div className="py-1 text-gray-900">15</div>
                <div className="py-1 text-gray-900">16</div>
                <div className="py-1 text-gray-900">17</div>
                <div className="py-1 text-gray-900">18</div>
                <div className="py-1 text-gray-900">19</div>
                <div className="py-1 text-gray-900">20</div>
                <div className="py-1 text-gray-900">21</div>
                <div className="py-1 text-gray-900">22</div>
                <div className="py-1 text-gray-900">23</div>
                <div className="py-1 text-gray-900">24</div>
                <div className="py-1 text-gray-900">25</div>
                <div className="py-1 text-gray-900">26</div>
                <div className="py-1 text-gray-900">27</div>
                <div className="py-1 text-gray-900">28</div>
                <div className="py-1 text-gray-900">29</div>
                <div className="py-1 text-gray-900">30</div>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-sm text-gray-600 hover:text-gray-900">Cancelar</button>
                <button className="text-sm bg-indigo-500 text-white px-4 py-1.5 rounded-full hover:bg-indigo-600">Aceptar</button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Nacionalidad</label>
            <input 
              type="text" 
              defaultValue="Mexicana"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Sexo</label>
            <div className="relative">
              <select className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 appearance-none focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
