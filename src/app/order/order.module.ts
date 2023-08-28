import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDeleteComponent } from './order-delete/order-delete.component';
import { OrderModifyComponent } from './order-modify/order-modify.component';
import { OrderSalesComponent } from './order-sales/order-sales.component';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [
//   // { path: 'orderDelete', component: OrderDeleteComponent },
//   // { path: 'orderModify', component: OrderModifyComponent },
//   // { path: 'orderSales', component: OrderSalesComponent }
// ]

@NgModule({
  declarations: [
    OrderComponent,
    OrderDeleteComponent,
    OrderModifyComponent,
    OrderSalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ]
})
export class OrderModule { }
