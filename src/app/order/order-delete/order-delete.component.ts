import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyFormatPipe } from 'src/app/common/currency-format.pipe';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.scss'],
  providers: [DatePipe, CurrencyFormatPipe]
})
export class OrderDeleteComponent {
  orderList: any;
  selectOrderDetail: boolean = false;
  order: any;
  selectValue: string = '';
  orderDetailList: any;
  totalPrice: number = 0;


  constructor(private http: HttpClient, private loginService: LoginService) { }


  selectOrder(order: any) {
    this.order = order;
    this.selectOrderDetail = true;
    this.selectValue = order.orderNo;
    this.orderDetailLoading(order.orderNo);
  }



  orderDetailLoading(orderNo: number) {
    const url = 'http://localhost:8081/orders/getorder?orderNo=' + orderNo;

    this.http.get(url).subscribe(
      (response) => {
        this.orderDetailList = response;
        this.totalPrice = 0;
        for (let orderDetail of this.orderDetailList) {
          this.totalPrice += orderDetail.price;
        }
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }

  orderListLoding() {
    const url = 'http://localhost:8081/orders/all?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.orderList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }

  orderDelete() {
    const url = 'http://localhost:8081/orders/delete/' + this.selectValue;

    if(this.selectValue == undefined || this.selectValue == ''){
      alert('조회 후 주문을 선택해주세요.');
      return;
    }

    this.http.delete(url).subscribe(
      (response) => {
        alert("삭제가 완료되었습니다.");
        this.orderListLoding();
        this.selectValue = '';
        this.selectOrderDetail = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }
}
