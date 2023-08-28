import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{

  productName: string = '';
  categoryNo: number = 0;
  productDetail: string = '';
  productPrice: any;

  responseData: any;


  constructor(private http: HttpClient, private loginService:LoginService) { }


  ngOnInit(): void {
    const url = "http://localhost:8081/products/category?accountSerial=" + this.loginService.accountSerial;
    this.http.get(url).subscribe(
      (response) => {
        this.responseData = response;
      },
      (error) => {
        alert(error)
      }
    )
  }

  onSubmit() {
    const url = "http://localhost:8081/products/add"

    const data = {
      "productName": this.productName,
      "productDetail": this.productDetail,
      "productPrice": this.productPrice,
      "categoryNo": this.categoryNo
    }

    // HTTP 헤더를 생성합니다.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(data);
    this.http.post(url, JSON.stringify(data), httpOptions).subscribe(
      (response: any) => {
        if (response.code = 200) {
          alert("추가가 완료되었습니다.");
          this.productName = '';
          this.productDetail = '';
          this.productPrice = '';
        }
      },
      (error:HttpErrorResponse) => {
        alert('필수값을 입력해주세요.');
      }
    )
  }
}
