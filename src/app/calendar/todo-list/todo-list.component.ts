import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'gorder-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  showCardAddBtn: any = true;
  showListAddBtn: any = false;
  newCalendarCard: any = [];
  calendarCategoryNo: any;
  newCalendarList: any = '';
  calendarList: any;
  openStates: { [key: number]: boolean } = {};


  toggleAddCard(listId: number): void {
    this.openStates[listId] = !this.openStates[listId];
  }

  isAddCardOpen(listId: number): boolean {
    return this.openStates[listId];
  }
  closeAddCard(listId: number): void {
    this.openStates[listId] = false;
  }


  constructor(private http: HttpClient, private loginService: LoginService) {
    this.loadCalendarList();
  }

  loadCalendarList() {
    const url = 'http://localhost:8081/calendar?accountSerial=' + this.loginService.accountSerial;
    this.http.get(url).subscribe(
      (response) => {
        this.calendarList = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  addCardSubmit(calendarListNo: number) {
    const url = 'http://localhost:8081/calendar/card';

    const data = {
      'calendarCard': this.newCalendarCard,
      'calendarListNo': calendarListNo
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(url, data, httpOptions).subscribe(
      (response) => {
        this.loadCalendarList();
        this.newCalendarCard = '';
        this.closeAddCard(calendarListNo);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  addList() {
    this.showListAddBtn = true;
  }
  closeCalendarList() {
    this.showListAddBtn = false;
  }

  addCalendarList() {
    const url = 'http://localhost:8081/calendar/list';

    const data = {
      'calendarListName': this.newCalendarList,
      'accountSerial': this.loginService.accountSerial
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(data);

    this.http.post(url, data, httpOptions).subscribe(
      (response) => {
        this.loadCalendarList();
        this.newCalendarList = '';
        this.closeCalendarList();
      },
      (error) => {
        console.log(error);
      }
    )

  }

  listDelete(calendarListNo: number) {
    const url = 'http://localhost:8081/calendar/list/' + calendarListNo;

    this.http.delete(url).subscribe(
      (response) => {
        this.loadCalendarList();
      },
      (error) => {
        console.log(error);
      }
    )

  }

  drop(event: CdkDragDrop<string[]>, calendar:any) {
    if (event.previousContainer === event.container) {
      console.log(calendar);
      moveItemInArray(calendar, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        calendar,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  // (cdkDropListDropped)="drop($event)"

  calendarDelete(calendarNo:number){
    const url = 'http://localhost:8081/calendar/'+calendarNo;
    this.http.delete(url).subscribe(
      (response) => {
        this.loadCalendarList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
