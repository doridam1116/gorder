import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { SubAddComponent } from './account/sub-add/sub-add.component';
import { SubRemoveComponent } from './account/sub-remove/sub-remove.component';
import { SubActiveComponent } from './account/sub-active/sub-active.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductModifyComponent } from './product/product-modify/product-modify.component';
import { ProductRemoveComponent } from './product/product-remove/product-remove.component';
import { ProductSoldoutComponent } from './product/product-soldout/product-soldout.component';
import { CategoryAddComponent } from './product/category-add/category-add.component';
import { CategoryModifyComponent } from './product/category-modify/category-modify.component';
import { OrderDeleteComponent } from './order/order-delete/order-delete.component';
import { OrderModifyComponent } from './order/order-modify/order-modify.component';
import { OrderSalesComponent } from './order/order-sales/order-sales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryDeleteComponent } from './product/category-delete/category-delete.component';
import { CurrencyFormatPipe } from './common/currency-format.pipe';
import { LoginComponent } from './common/login/login.component';
import { AuthGuard } from './common/route-guard';
import { SubModifyComponent } from './account/sub-modify/sub-modify.component';
import { RegisterComponent } from './common/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './calendar/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar/calendar.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegisterComponent },
  {
    path: 'account', component: AccountComponent,canActivate: [AuthGuard],
    children: [
      { path: 'subAdd', component: SubAddComponent },
      { path: 'subRemove', component: SubRemoveComponent },
      { path: 'subActive', component: SubActiveComponent },
      { path: 'subModify', component: SubModifyComponent }
    ]
  },
  {
    path: 'product', component: ProductComponent,canActivate: [AuthGuard],
    children: [
      { path: 'productAdd', component: ProductAddComponent },
      { path: 'productModify', component: ProductModifyComponent },
      { path: 'productRemove', component: ProductRemoveComponent },
      { path: 'productSoldOut', component: ProductSoldoutComponent },
      { path: 'categoryAdd', component: CategoryAddComponent },
      { path: 'categoryModify', component: CategoryModifyComponent },
      { path: 'categoryDelete', component: CategoryDeleteComponent }
    ]
  },
  { path: 'order', component: OrderComponent,canActivate: [AuthGuard],
    children: [
      { path: 'orderDelete', component: OrderDeleteComponent },
      { path: 'orderModify', component: OrderModifyComponent },
      { path: 'orderSales', component: OrderSalesComponent}
    ]
  },
  {
    path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard],
    children:[
      { path: 'todo', component: TodoListComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe,
    LoginComponent,
    RegisterComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AccountModule,
    ProductModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    CalendarModule,
    CommonModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
