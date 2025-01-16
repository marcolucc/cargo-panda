import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Package, MapPin, Clock, Truck } from 'lucide-react';
import Map from '../components/Map';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const cargo = [
  { 
    id: 1, 
    description: 'Elettronica', 
    status: 'In Transito', 
    driver: 'Marco Rossi', 
    destination: 'Magazzino A',
    eta: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    type: 'Fragile'
  },
  { 
    id: 2, 
    description: 'Mobili', 
    status: 'In Attesa', 
    driver: 'Non Assegnato', 
    destination: 'Negozio B',
    eta: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
    type: 'Pesante'
  },
];

const CargoPage = () => {
  console.log('Rendering Cargo page');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Gestione Carico</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-none shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Package className="h-5 w-5" />
              Lista Carichi
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead>Descrizione</TableHead>
                    <TableHead>Stato</TableHead>
                    <TableHead>Autista</TableHead>
                    <TableHead>Destinazione</TableHead>
                    <TableHead>ETA</TableHead>
                    <TableHead>Tipo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cargo.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-medium">{item.description}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'In Transito' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.driver}</TableCell>
                      <TableCell>{item.destination}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          {format(item.eta, "HH:mm", { locale: it })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'Fragile' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.type}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              Posizioni Carico
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] w-full">
              <Map />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CargoPage;