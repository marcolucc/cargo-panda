import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import VehiclesPage from './pages/Vehicles';
import DriversPage from './pages/Drivers';
import CargoPage from './pages/Cargo';
import DestinationsPage from './pages/Destinations';

function App() {
  console.log('Rendering App component');
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<VehiclesPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/cargo" element={<CargoPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;