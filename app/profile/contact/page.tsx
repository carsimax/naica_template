export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 tracking-tight">DATOS DE CONTACTO</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-[1fr_100px_1fr] gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              defaultValue="wilson@naica.com"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Lada</label>
            <input 
              type="text" 
              defaultValue="+52"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Teléfono / Celular</label>
            <input 
              type="text" 
              defaultValue="777 123 45 69"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="w-1/2 pr-3">
          <label className="block text-sm text-gray-600 mb-2">Correo electrónico de recuperación</label>
          <input 
            type="email" 
            defaultValue="papasfritas@gmail.com"
            className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
          />
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-200/50 my-8 transition-colors" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">País</label>
            <input 
              type="text" 
              defaultValue="Mexicana"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Estado</label>
            <input 
              type="text" 
              defaultValue="Masculino"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Municipio / Alcaldía</label>
            <input 
              type="text" 
              defaultValue="Masculino"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Código Postal</label>
            <input 
              type="text" 
              defaultValue="Masculino"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Dirección (Calle, Número y Colonia)</label>
            <input 
              type="text" 
              defaultValue="Los chocolates, 25 , Real Campestre"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Número Interior</label>
            <input 
              type="text" 
              defaultValue="25"
              className="w-full bg-gray-100 dark:bg-gray-200/50 border-none rounded-md px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
