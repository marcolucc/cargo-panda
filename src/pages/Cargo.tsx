import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Package, MapPin } from 'lucide-react';
import Map from '../components/Map';

const cargo = [
  { id: 1, description: 'Electronics', status: 'In Transit', driver: 'John Doe', destination: 'Warehouse A' },
  { id: 2, description: 'Furniture', status: 'Pending', driver: 'Unassigned', destination: 'Store B' },
];

const CargoPage = () => {
  console.log('Rendering Cargo page');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Cargo Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Cargo List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned Driver</TableHead>
                  <TableHead>Destination</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cargo.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.driver}</TableCell>
                    <TableCell>{item.destination}</TableCell>
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
              Cargo Locations
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

export default CargoPage;