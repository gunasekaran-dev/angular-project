import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerCompComponent } from './customer-comp/customer-comp.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CustomerCompComponent }, 
  { path: 'customer/:id', component: UpdateCustomerComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
