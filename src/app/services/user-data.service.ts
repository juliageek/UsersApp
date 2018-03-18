import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserDataService {
  private _apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http
      .get(`${this._apiUrl}?page=1&per_page=50`)
      .map((response: Response) => {
        //in case User schema is consistent accross the API: return <User[]>response;
        return <any>response;
      })
      .catch(this.handleError);
  }

  addUser(user: User): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this._apiUrl}`, JSON.stringify(user), {headers: headers})
      .map((response: Response) => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
