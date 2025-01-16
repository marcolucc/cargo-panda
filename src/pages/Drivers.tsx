import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { User } from 'lucide-react';

const drivers = [
  { id: 1, name: 'John Doe', status: 'Available', vehicle: 'Truck 001', license: 'Class A' },
  { id: 2, name: 'Jane Smith', status: 'On Delivery', vehicle: 'Van 002', license: 'Class B' },
];

const DriversPage = () => {
  console.log('Rendering Drivers page');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Driver Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Driver List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Vehicle</TableHead>
                <TableHead>License Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.status}</TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>{driver.license}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriversPage;