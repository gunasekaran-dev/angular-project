import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../Model/model';

declare var window: any
@Component({
  selector: 'app-customer-comp',
  templateUrl: './customer-comp.component.html',
  styleUrls: ['./customer-comp.component.css']
})
export class CustomerCompComponent implements OnInit {

  constructor(private customerService: CustomerServiceService) { }
  formModal: any;
  customers_list: Customer[] = [];
  public customer: Customer = new Customer;

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );


    this.customerService.getAllCustomers().subscribe(_customer => {
      this.customers_list = _customer;
    });
  }

  openCustomerModal() {
    this.formModal.show();
  }

  onSubmit() {
    this.createCustomer();
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer)
      .subscribe(addedCustomer => {
        console.log('Customer added:', addedCustomer);
        //Reset the Form
        this.customer = new Customer();
      });
      this.formModal.hide();
      this.ngOnInit();
  }

  deleteById(id:any){
    this.customerService.deleteCustomer(id);
    this.ngOnInit();
  }

}
