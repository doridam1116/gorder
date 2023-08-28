import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss']
})
export class ProductModifyComponent implements OnInit{

  productList:any;
  product:any;
  responseData:any;
  showForm:boolean = false;

  constructor(private http:HttpClient, private loginService:LoginService){}

  ngOnInit(): void {
    const url = "http://localhost:8081/products/category?accountSerial=" + this.loginService.accountSerial;
    this.http.get(url).subscribe(
      (response) => {
        this.responseData = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }

  selectProduct(product:any){
    this.product = product;
    this.showForm = true;
  }

  public productListLoding(){
    const url = 'http://localhost:8081/products?accountSerial='+this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.productList = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }


  onSubmit() {
    const url = "http://localhost:8081/products/modify"

    const data = {
      "productNo":this.product.productNo,
      "productName": this.product.productName,
      "productDetail": this.product.productDetail,
      "productPrice": this.product.productPrice,
      "categoryNo": this.product.categoryNo
    }

    // HTTP 헤더를 생성합니다.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(data);
    this.http.patch(url, JSON.stringify(data), httpOptions).subscribe(
      (response: any) => {
        alert("수정이 완료되었습니다.");
        this.productListLoding();
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);

      }
    )
  }
}
