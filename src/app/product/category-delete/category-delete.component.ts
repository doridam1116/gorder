import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent {
  selectValue: string = '';
  categoryList: any;
  categoryNo: number = 0;

  constructor(private http: HttpClient, private loginService: LoginService) { }




  categoryListLoding() {
    const url = 'http://localhost:8081/products/category?accountSerial=' + this.loginService.accountSerial;
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
        this.categoryList = response;
      },
      (error) => {
        alert(error.error.message);

      }
    );
  }

  selectCategory(categoryName: string, categoryNo: number) {
    this.selectValue = categoryName;
    this.categoryNo = categoryNo;
  }

  categoryDelete(categoryNo: number) {
    if(categoryNo == 0){
      alert("조회 > 선택 후 삭제해주세요.");
      return ;
    }
    const url = 'http://localhost:8081/products/delete/category/' + categoryNo;

    this.http.delete(url).subscribe(
      (response) => {
        alert("카테고리 삭제가 완료되었습니다.");
        this.categoryListLoding();
        this.selectValue = '';
      },
      (error:HttpErrorResponse) => {
        alert(error.error.message);
      }
    )
  }

}
