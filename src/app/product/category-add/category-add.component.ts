import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  categoryName: string = '';



  constructor(private http: HttpClient, private loginService: LoginService) { }

  addCategory() {

    const url = 'http://localhost:8081/products/add/category';

    const data = {
      "categoryName": this.categoryName,
      "accountSerial": this.loginService.accountSerial
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(url, data, httpOptions).subscribe(
      (response) => {
        console.log(response);
        alert("카테고리 추가 완료");
        this.categoryName = '';
      },
      (error:HttpErrorResponse) => {
        alert(error.error[0].msg);
      }
    )
  }

}
