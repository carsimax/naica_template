import { Globe, MapPin } from 'lucide-react';

export default function BanksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600 mb-4 tracking-tight">BANCOS</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
        Para efectuar un retiro de tu crédito, es necesario que ingreses la información de la cuenta bancaria donde se depositará el monto que determines.
      </p>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Nacional Card */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xl font-medium text-indigo-500 tracking-wide">NACIONAL</h2>
          </div>
          
          <div className="bg-gray-50 dark:bg-white rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-100 transition-colors duration-300">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Banco</p>
                <p className="font-bold text-gray-900">BBVA Bancomer</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">CLABE</p>
                <p className="font-bold text-gray-900">2344322343221</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-1.5 bg-indigo-500 text-white rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
                Ver información
              </button>
            </div>
          </div>
        </div>

        {/* Internacional Card */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xl font-medium text-indigo-500 tracking-wide">INTERNACIONAL</h2>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-200/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-100 transition-colors duration-300">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Banco</p>
                <p className="font-bold text-gray-900">**********</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">CLABE</p>
                <p className="font-bold text-gray-900">**********</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-1.5 bg-indigo-500 text-white rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors">
                Ver información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
