import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { MapPin, Clock } from 'lucide-react';
import Map from '../components/Map';

const destinations = [
  { id: 1, name: 'Warehouse A', address: '123 Main St', eta: '2h 30m', status: 'En Route' },
  { id: 2, name: 'Store B', address: '456 Oak Ave', eta: '45m', status: 'Pending' },
];

const DestinationsPage = () => {
  console.log('Rendering Destinations page');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Destination Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Destinations List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>ETA</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {destinations.map((destination) => (
                  <TableRow key={destination.id}>
                    <TableCell>{destination.name}</TableCell>
                    <TableCell>{destination.address}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {destination.eta}
                    </TableCell>
                    <TableCell>{destination.status}</TableCell>
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
              Destination Locations
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

export default DestinationsPage;