import React from "react";

const SidebarRight = () => {
  return (
    <aside className="fixed top-0 right-0 h-full w-48 bg-white shadow-lg z-50 flex flex-col items-end p-4">
      <a href="#inicio" className="w-full py-3 text-right border-b border-gray-200 hover:bg-gray-50">
        Inicio
      </a>
      <a href="#quienes-somos" className="w-full py-3 text-right border-b border-gray-200 hover:bg-gray-50">
        ¿Quiénes somos?
      </a>
      <a href="#somos-estadounidenses" className="w-full py-3 text-right border-b border-gray-200 hover:bg-gray-50">
        Somos Estadounidenses
      </a>
      <a href="#unete" className="w-full py-3 text-right bg-orange-500 text-white font-bold hover:bg-orange-600">
        Únete a Genuine
      </a>
    </aside>
  );
};

export default SidebarRight;
