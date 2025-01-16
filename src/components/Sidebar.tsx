import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Truck, 
  Users, 
  Package, 
  MapPin, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Truck, label: "Veicoli", path: "/vehicles" },
  { icon: Users, label: "Autisti", path: "/drivers" },
  { icon: Package, label: "Carico", path: "/cargo" },
  { icon: MapPin, label: "Destinazioni", path: "/destinations" },
  { icon: Settings, label: "Impostazioni", path: "/settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      } shadow-lg z-50`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          {!isCollapsed && (
            <h1 className="text-xl font-display font-semibold text-primary animate-fade-in">
              TransportHub
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isCollapsed ? "Espandi menu" : "Comprimi menu"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 mb-1 mx-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                {!isCollapsed && (
                  <span className="ml-3 font-medium animate-fade-in">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;