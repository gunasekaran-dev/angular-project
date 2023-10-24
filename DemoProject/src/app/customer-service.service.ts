import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Model/model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private MOCK_BASE_URL = 'http://localhost:3000';
  private CUSTOMERS = '/customers';

  //Initilize Http object
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.MOCK_BASE_URL}${this.CUSTOMERS}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.MOCK_BASE_URL}${this.CUSTOMERS}`, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.MOCK_BASE_URL}${this.CUSTOMERS}/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.MOCK_BASE_URL}${this.CUSTOMERS}`;
    return this.http.put<Customer>(`${this.MOCK_BASE_URL}${this.CUSTOMERS}/${customer.id}`, customer);
  }
}
