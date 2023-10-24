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

  updateCustomer(customer: Customer): Observable<any> {
    console.log("welcomeee:"+customer.id);
    console.log("welcomeee:"+customer.firstName);
    console.log("welcomeee:"+customer.lastName);
    console.log("welcomeee:"+customer.email);
    console.log("welcomeee:"+customer.phoneNumber);
    const url = `${this.MOCK_BASE_URL}${this.CUSTOMERS}`;
    return this.http.put(`${this.MOCK_BASE_URL}${this.CUSTOMERS}/${customer.id}`, customer);
  }


  deleteCustomer(id : number){
    this.http.delete(`${this.MOCK_BASE_URL}${this.CUSTOMERS}/${id}`).subscribe(
      () => {
        console.log('Item deleted successfully');
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }
}
