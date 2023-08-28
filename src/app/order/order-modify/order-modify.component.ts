import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-order-modify',
  templateUrl: './order-modify.component.html',
  styleUrls: ['./order-modify.component.scss']
})
export class OrderModifyComponent {
  @ViewChild('myForm') form!: NgForm;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  selectOrderDetail: boolean = false;
  orderList: any;
  selectValue = '';
  order: any;
  orderDetailList: any;
  totalPrice = 0;


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
        this.totalPrice = 0;
        this.orderDetailList = response;
        for (let orderDetail of this.orderDetailList) {
          this.totalPrice += orderDetail.price;
        }
      },
      (error: HttpErrorResponse) => {
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

  modifyBtn(orderDetail: any) {
    const url = 'http://localhost:8081/orders/modify'

    const data = {
      "orderDetailCount": orderDetail.orderDetailCount,
      "orderNo": orderDetail.orderNo,
      "productNo": orderDetail.productNo,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.patch(url, data, httpOptions).subscribe(
      (response) => {
        console.log(response);
        alert('수정이 완료되었습니다.');
        this.orderListLoding();
        this.orderDetailLoading(orderDetail.orderNo);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }
}
