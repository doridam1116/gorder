import { NgModule } from '@angular/core';
import { SubAddComponent } from './sub-add/sub-add.component';
import { RouterModule, Routes } from '@angular/router';
import { SubRemoveComponent } from './sub-remove/sub-remove.component';
import { SubActiveComponent } from './sub-active/sub-active.component';

const routes: Routes = [
  { path: 'subAdd', component: SubAddComponent},
  { path: 'subRemove', component: SubRemoveComponent},
  { path: 'subActive', component: SubActiveComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
