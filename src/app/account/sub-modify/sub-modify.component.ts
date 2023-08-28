import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/common/login/login.service';

@Component({
  selector: 'gorder-sub-modify',
  templateUrl: './sub-modify.component.html',
  styleUrls: ['./sub-modify.component.scss']
})
export class SubModifyComponent {
  @ViewChild('myForm') form!: NgForm;

  showForm: boolean = false;
  subSerialList: any;
  sub: any;
  newSubSrial:any;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  selectSub(sub: any) {
    this.showForm = true;
    this.sub = sub;
    this.newSubSrial = sub.subSerial;
  }

  subListLoding() {
    const url = 'http://localhost:8081/account/sub?accountSerial=' + this.loginService.accountSerial;

    this.http.get(url).subscribe(
      (response) => {
        this.subSerialList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }

  onSubmit() {
    const url = 'http://localhost:8081/account/sub/modify';

    const data = {
      "accountSerial": this.loginService.accountSerial,
      "subSerial": this.sub.subSerial,
      "newSubSerial" : this.newSubSrial
    }

    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.put(url, data, httpOptions).subscribe(
      (response) => {
        alert("수정이 완료되었습니다.");
        this.sub.subSerial = this.newSubSrial;
      },
      (error:HttpErrorResponse) => {
        alert(error.error[0].msg);
      }
    )
  }

}
