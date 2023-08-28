import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component } from '@angular/core';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-sub-remove',
  templateUrl: './sub-remove.component.html',
  styleUrls: ['./sub-remove.component.scss']
})
export class SubRemoveComponent {
  subSerialList: any;
  selectValue: string = '조회 후 서브를 선택해주세요.';

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
        alert(error.error.message);
      }
    );
  }

  public selectSub(subSerial: string) {
    this.selectValue = subSerial;
  }

  public subDelete(selectValue: string) {
    if (selectValue == "조회 후 서브를 선택해주세요.") {
      alert("서브를 선택해주세요.");
      return;
    }
    const url = 'http://localhost:8081/account/delete/' + selectValue;

    this.http.delete(url).subscribe(
      (reponse) => {
        console.log('Response:', reponse);
        this.subListLoding();
        this.selectValue = '조회 후 서브를 선택해주세요.';
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
}
