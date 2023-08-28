import { AfterViewChecked, Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-sub-add',
  templateUrl: './sub-add.component.html',
  styleUrls: ['./sub-add.component.scss']
})
export class SubAddComponent {
  tableNumber: string = ''; // input의 데이터를 바인딩할 변수를 선언합니다.
  responseMessage: string = '';


  constructor(private http: HttpClient, private loginService:LoginService) { }

  // 서브 추가 버튼 클릭 시 호출
  public addSub() {

    // POST 요청을 보낼 URL을 정의합니다.
    const url = 'http://localhost:8081/account/sub/add';

    // POST 요청에 전송할 데이터를 정의합니다.
    const data = {
      "accountSerial": this.loginService.accountSerial,
      "tableNo": this.tableNumber
    };

    // HTTP 헤더를 생성합니다.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // POST 요청을 보냅니다.
    this.http.post(url, JSON.stringify(data), httpOptions).subscribe(
      (response) => {
        this.responseMessage = "생성된 SubSerial : " + this.loginService.accountSerial + "T" + this.tableNumber;
      },
      (error: HttpErrorResponse) => {
        switch (error.status) {
          case 409:
            this.responseMessage = "테이블 번호가 중복됩니다.";
            break;
          case 400:
            this.responseMessage = "값이 올바르지 않습니다.";
            break;
          case 500:
            this.responseMessage = "서버에러, 다시 시도해주세요.";
            break;
        }
      }
    );
  }


}
