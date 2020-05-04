import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class UserDataService {
    public user: User
    

    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers : Headers, token : string) {
        headers.append('Authorization', 'Bearer '+ token)
    }

    public doLogin(credential) {
        return this.http.post("http://localhost:9090/authenticate",credential)
    }

    public getTicket(token) {
        console.log("---------------",token.token)
        let tokenStr = 'Bearer ' + token.token;
        console.log(tokenStr)
        const header = new HttpHeaders().set("Authorization",tokenStr)
        console.log("---------",header)
       
        return this.http.post("http://localhost:9090/employee/8/tickets",{header})
    }


    public doRegistration(user) {
        return this.http.post("http://localhost:9090/employee",
            user, { responseType: 'text' as 'json' });
    }

}