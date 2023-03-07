import { Injectable } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  employees: Employee[] = [
    {
      id: 101,
      firstName: 'Freddie',
      lastName: 'Baker',
      email: 'fbaker@gmail.com',
    },
    {
      id: 102,
      firstName: 'Donna',
      lastName: 'Johnny',
      email: 'dautumn@yahoo.com',
    },
    {
      id: 103,
      firstName: 'Johnny',
      lastName: 'Bravo',
      email: 'jbravo@gmail.com',
    },
    {
      id: 104,
      firstName: 'Andrew',
      lastName: 'Macapagal',
      email: 'amacpagal@gmail.com',
    },
  ];
  products: Product[] = [];
  constructor() {}
}
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Product {
  prod_id: number;
  prod_name: string;
  prod_desc: string;
  prod_price: number;
}
