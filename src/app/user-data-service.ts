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

    public getTicket(credential) {
        console.log("---------------",credential.token)
        let tokenStr = 'Bearer ' + credential.token;
        console.log(tokenStr)
        const header = new HttpHeaders().set("Authorization",tokenStr)
        console.log("---------",header)
        let id = credential.id
        console.log("this is id", id)
       
        return this.http.get("http://localhost:9090/employee/"+id+"/tickets",{headers : header})
    }


    public doRegistration(user) {
        return this.http.post("http://localhost:9090/employee",
            user, { responseType: 'text' as 'json' });
    }

}