import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductRemoveComponent } from './product-remove/product-remove.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { FormsModule } from '@angular/forms';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

const routes: Routes = [
  { path: 'productAdd', component: ProductAddComponent },
  { path: 'productModify', component: ProductModifyComponent },
  { path: 'productRemove', component: ProductRemoveComponent },
  { path: 'productSoldOut', component: ProductSoldoutComponent },
  { path: 'categoryAdd', component: CategoryAddComponent },
  { path: 'categoryModify', component: CategoryModifyComponent }
]

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductModifyComponent,
    ProductRemoveComponent,
    ProductSoldoutComponent,
    CategoryAddComponent,
    CategoryModifyComponent,
    CategoryDeleteComponent
  ]
})
export class ProductModule { }
