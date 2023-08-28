import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authenticated:any = false;

  accountSerial:any;

  constructor(private http: HttpClient) { }

  login(accountSerial: string): Observable<boolean> {

    const url = 'http://localhost:8081/account/login';

    const data = {
      "accountSerial": accountSerial,
      "accountType": 'MASTER'
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, data, httpOptions).pipe(
      map((response: any) => {
        this.authenticated = true;
        return true;
      }),
      catchError((error) => {
        this.authenticated = false;
        console.log(error);
        return of(false);
      })
    );
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  logout(): void {
    this.authenticated = false;
  }

  setAccountSerial(account:any){
    this.accountSerial = account;
  }

  getAccountSerial(){
    return this.accountSerial;
  }

}
