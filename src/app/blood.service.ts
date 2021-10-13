import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface registerUser {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  blood_group: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class BloodService {
  apiURL = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  getUsers(): Observable<registerUser> {
    return this.httpClient
      .get<registerUser>(this.apiURL + '/users')
      .pipe(retry(1), catchError(this.httpError));
  }
  getUser(id: number): Observable<registerUser> {
    return this.httpClient
      .get<registerUser>(this.apiURL + '/user/' + id)
      .pipe(retry(1), catchError(this.httpError));
  }
  // HttpClient API post() method => Create employee
  create(employee: registerUser): Observable<registerUser> {
    return this.httpClient
      .post<registerUser>(this.apiURL + '/users', employee, this.httpHeader)
      .pipe(catchError(this.httpError));
  }

  loginAdmin(userObj: {
    username: string;
    password: string;
  }): Observable<{ username: string; password: string }> {
    return this.httpClient
      .post<{ username: string; password: string }>(
        this.apiURL + '/admin',
        userObj,
        this.httpHeader
      )
      .pipe(catchError(this.httpError));
  }
  signOut() {
    return this.httpClient
      .get<boolean>(this.apiURL + '/admin')
      .pipe(catchError(this.httpError));
  }

  delete(id: number) {
    return this.httpClient
      .delete<registerUser>(this.apiURL + '/user/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }

  update(id: number, data: any): Observable<registerUser> {
    return this.httpClient
      .put<registerUser>(this.apiURL + '/user/' + id, data, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }
  httpError(error: any) {
    return throwError(error);
  }
}
