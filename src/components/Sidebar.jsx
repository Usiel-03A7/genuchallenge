import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {(!isOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 right-4 p-2 bg-white rounded-md shadow-md z-50"
        >
          <Menu size={20} />
        </button>
      ))}

      <div className={`fixed top-0 right-0  bg-white shadow-lg transition-all duration-300 z-40 
        ${isOpen ? 'w-64' : 'w-0'} 
        md:w-64 md:opacity-100`}>

        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="font-bold text-xl flex items-center">
            <span className="text-blue-900">G</span>
            <div className="ml-1 flex flex-col">
              <span className="h-1 w-5 bg-blue-400 mb-1"></span>
              <span className="h-1 w-3 bg-red-500"></span>
            </div>
          </div>

          <button
            onClick={toggleSidebar}
            className={`text-gray-500 hover:text-gray-700 ${!isOpen && 'md:hidden'}`}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            <li>
              <a href="#inicio" className="block text-blue-900 font-medium py-2 hover:bg-gray-50 rounded">Inicio</a>
            </li>
            <li>
              <a href="#quienes-somos" className="block text-blue-900 font-medium py-2 hover:bg-gray-50 rounded">¿Quiénes somos?</a>
            </li>
            <li>
              <a href="#somos-estadounidenses" className="block text-blue-900 font-medium py-2 hover:bg-gray-50 rounded">Somos Estadounidenses</a>
            </li>
            <li>
              <a href="#unete" className="block text-blue-900  font-bold py-2 hover:bg-orange-50 rounded">Únete a Genuine</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
