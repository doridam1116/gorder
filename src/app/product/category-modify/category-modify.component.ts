import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.scss']
})
export class CategoryModifyComponent {
  categoryList: any;
  selectValue: string = '';
  showForm: boolean = false;
  category: any;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  selectCategory(category: any) {
    this.category = category;
    this.showForm = true;
  }

  categoryListLoding() {
    const url = 'http://localhost:8081/products/category?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.categoryList = response;
      },
      (error) => {
        alert(error.error.message);
      }
    )
  }

  onSubmit(categoryName:string) {
    const url = 'http://localhost:8081/products/modify/category';

    const data = {
      "categoryNo": this.category.categoryNo,
      "categoryName": categoryName
    };

    // HTTP 헤더를 생성합니다.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.patch(url, JSON.stringify(data), httpOptions).subscribe(
      (response) => {
        alert("카테고리 수정이 완료되었습니다.");
      },
      (error:HttpErrorResponse) => {
        alert(error.error[0].msg);
      }
    );

  }
}
