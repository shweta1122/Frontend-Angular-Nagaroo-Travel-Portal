import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class UserDataService {
    public user: User


    constructor(private http: HttpClient) { }


    public doRegistration(user) {
        return this.http.post("http://localhost:9090/employee",
            user, { responseType: 'text' as 'json' });
    }
}