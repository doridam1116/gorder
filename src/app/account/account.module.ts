import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubAddComponent } from './sub-add/sub-add.component';
import { SubActiveComponent } from './sub-active/sub-active.component';
import { SubRemoveComponent } from './sub-remove/sub-remove.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FormsModule } from '@angular/forms';
import { SubModifyComponent } from './sub-modify/sub-modify.component';

const routes: Routes = [
  { path: 'subAdd', component: SubAddComponent },
  { path: 'subActive', component: SubActiveComponent },
  { path: 'subRemove', component: SubRemoveComponent },
  { path: 'subModify', component: SubModifyComponent }
]

@NgModule({
  declarations: [
    SubAddComponent,
    SubActiveComponent,
    SubRemoveComponent,
    AccountComponent,
    SubModifyComponent,


  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ]
})
export class AccountModule { }
