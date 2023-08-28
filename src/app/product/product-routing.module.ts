import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';

const routes:Routes = [
  { path: 'productAdd', component:ProductAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductRoutingModule { }
