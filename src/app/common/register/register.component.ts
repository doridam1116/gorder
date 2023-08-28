import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gorder-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  accountName: any;
  accountTel: any;

  constructor(private http: HttpClient, private router:Router) { }

  registerBtn() {
    const data = {
      "accountName": this.accountName,
      "accountTel": this.accountTel,
      "accountType": 'MASTER'
    }

    const url = 'http://localhost:8081/account/register';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


    this.http.post(url, data, httpOptions).subscribe(
      (response) => {
        alert('G' + this.accountTel + '로 생성되었습니다.');
        this.router.navigate(['/login']);
      },
      (error:HttpErrorResponse) => {
        switch(error.status){
          case 400 :
            alert(error.error[0].msg);
            break;
          case 409 :
            alert(error.error.message);
            break;
          case 502 :
            alert(error.error.message);
            break;
        }
        console.log(error);
      }
    )
  }
}
