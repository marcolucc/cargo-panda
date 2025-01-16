import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Package 
} from "lucide-react";

const stats = [
  {
    title: "Ordini Attivi",
    value: "24",
    icon: Package,
    trend: "+12%",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Consegne Puntuali",
    value: "96%",
    icon: Clock,
    trend: "+3%",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Fatturato",
    value: "€12.4k",
    icon: TrendingUp,
    trend: "+8%",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Veicoli Attivi",
    value: "18",
    icon: BarChart3,
    trend: "-2",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-semibold text-gray-900 mb-2">
          Benvenuto
        </h1>
        <p className="text-gray-600">
          Ecco cosa sta succedendo oggi con le tue operazioni di trasporto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">
            Attività Recenti
          </h2>
          <p className="text-gray-600">
            Il feed delle attività sarà implementato nella prossima iterazione.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">
            Statistiche Settimanali
          </h2>
          <p className="text-gray-600">
            Le statistiche saranno implementate nella prossima iterazione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;