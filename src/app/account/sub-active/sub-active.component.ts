import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-sub-active',
  templateUrl: './sub-active.component.html',
  styleUrls: ['./sub-active.component.scss']
})
export class SubActiveComponent {
  subSerialList: any;
  selectValue: string = '조회 후 서브를 선택해주세요.';
  subActiveNumber: number = 0;

  constructor(private http: HttpClient, private loginService: LoginService) { }


  public subListLoding() {

    // POST 요청을 보낼 URL을 정의합니다.
    const url = 'http://localhost:8081/account/sub';

    this.http.get(url + '?accountSerial=' + this.loginService.accountSerial).subscribe(
      (response) => {
        // 서버로부터 받은 응답 데이터를 처리합니다.
        // this.responseMessage = "생성된 SubSerial : " + data.accountSerial + "T" + this.tableNumber;
        this.subSerialList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // 서브 선택 및 값 저장
  public selectSub(subSerial: string, subActive: number) {
    this.selectValue = subSerial;
    this.subActiveNumber = subActive;
  }

  // 활성화 / 비활성화 버튼
  public subActive(selectValue: string) {
    if (selectValue == "조회 후 서브를 선택해주세요.") {
      alert("서브를 선택해주세요.");
      return;
    }
    const url = 'http://localhost:8081/account/active';

    const data = {
      "subSerial": this.selectValue,
      "subActive": this.subActiveNumber
    }

    // HTTP 헤더를 생성합니다.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // put 요청
    this.http.put(url, JSON.stringify(data), httpOptions).subscribe(
      (reponse) => {
        alert('수정이 완료되었습니다.')
        this.subListLoding();
        this.selectValue = '조회 후 서브를 선택해주세요.';
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
}
