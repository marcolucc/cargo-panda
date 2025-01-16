import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { MapPin, Truck } from 'lucide-react';
import Map from '../components/Map';

const vehicles = [
  { id: 1, name: 'Truck 001', type: 'Heavy Duty', status: 'Active', location: 'Route 66' },
  { id: 2, name: 'Van 002', type: 'Delivery Van', status: 'In Transit', location: 'Downtown' },
];

const VehiclesPage = () => {
  console.log('Rendering Vehicles page');
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Vehicle Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Vehicle List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>{vehicle.name}</TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.status}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {vehicle.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Vehicle Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <Map />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VehiclesPage;