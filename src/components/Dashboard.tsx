import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Package 
} from "lucide-react";

const stats = [
  {
    title: "Active Orders",
    value: "24",
    icon: Package,
    trend: "+12%",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "On-Time Delivery",
    value: "96%",
    icon: Clock,
    trend: "+3%",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Revenue",
    value: "$12.4k",
    icon: TrendingUp,
    trend: "+8%",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Active Vehicles",
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
          Welcome back
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your transport operations today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <span className="text-sm font-medium text-gray-500">
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

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-display font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <p className="text-gray-600">
          Activity feed will be implemented in the next iteration.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;