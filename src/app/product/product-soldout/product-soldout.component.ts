import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-product-soldout',
  templateUrl: './product-soldout.component.html',
  styleUrls: ['./product-soldout.component.scss']
})
export class ProductSoldoutComponent{
  productList: any;

  constructor(private http: HttpClient,private loginService:LoginService) { }

  productListLoding() {

    const url = 'http://localhost:8081/products?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.productList = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }


  selectProduct(productNo: number, productActive:number) {
    const url: string = 'http://localhost:8081/products/sold-out';

    const data = {
      "productNo": productNo,
      "productActive": productActive
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.patch(url, data, httpOptions).subscribe(
      (response) => {
        console.log(response);
        this.productListLoding();
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }
}
