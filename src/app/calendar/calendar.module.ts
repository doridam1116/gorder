import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';


const routes : Routes = [
  { path: 'todo', component : TodoListComponent }
]

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatIconModule,
    DragDropModule
  ]
})
export class CalendarModule { }
