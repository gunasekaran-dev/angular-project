import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../Model/model';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  customer: any = {};

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerServiceService
  ) {}

  ngOnInit() {
    const customerId = this.route.snapshot.params['id'];
    console.log(customerId);
    this.customerService.getCustomerById(customerId).subscribe((data) => {
      this.customer = data;
    });
    console.log("final"+this.customer);
  }

  onSubmit(){
    console.log(this.customer)
    this.customerService.updateCustomer(this.customer);
  }
}
