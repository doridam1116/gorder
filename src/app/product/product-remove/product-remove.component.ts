import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.scss']
})
export class ProductRemoveComponent {
  productList: any;
  selectValue: any;
  productNo: number = 0;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  public productListLoding() {

    // POST 요청을 보낼 URL을 정의합니다.
    const url = 'http://localhost:8081/products?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        console.log('Response:', response)
        // 서버로부터 받은 응답 데이터를 처리합니다.
        // this.responseMessage = "생성된 SubSerial : " + data.accountSerial + "T" + this.tableNumber;
        this.productList = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }

  public selectProduct(productName: string, productNo: number) {
    this.selectValue = productName;
    this.productNo = productNo;
  }

  public subDelete(selectValue: string) {
    if (selectValue == "조회 후 서브를 선택해주세요.") {
      alert("서브를 선택해주세요.");
      return;
    }
    const url = 'http://localhost:8081/products/delete/' + this.productNo;

    this.http.delete(url).subscribe(
      (reponse) => {
        console.log('Response:', reponse);
        this.productListLoding();
        this.selectValue = '조회 후 서브를 선택해주세요.';
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
}
