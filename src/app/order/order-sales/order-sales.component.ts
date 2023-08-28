import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-order-sales',
  templateUrl: './order-sales.component.html',
  styleUrls: ['./order-sales.component.scss']
})
export class OrderSalesComponent  {
  orderList: any;
  salesPrice: any;
  orderDetailList:any;
  totalPrice:any;
  order:any;

  constructor(private http: HttpClient, private loginService:LoginService) { }


  orderListLoading() {
    const url = 'http://localhost:8081/orders/sales?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.orderList = response;
        this.salesPrice = 0;
        for (let order of this.orderList) {
          this.salesPrice += order.totalPrice;
        }
        this.salesPrice = this.salesPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
      },
      (error: HttpErrorResponse) => {
        switch(error.status){
          case 404 :
          alert("정보가 없습니다.");
          break;
        }
      }
    );
  }

  orderDetailLoading(order:any) {
    this.order = order;
    const url = 'http://localhost:8081/orders/getorder?orderNo=' + order.orderNo;

    this.http.get(url).subscribe(
      (response) => {
        this.orderDetailList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }

}
