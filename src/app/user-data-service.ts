import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class UserDataService {
    public user: User


    constructor(private http: HttpClient) { }

    createAuthorizationHeader(headers: Headers, token: string) {
        headers.append('Authorization', 'Bearer ' + token)
    }

    public adminLogin(credential) {
        return this.http.post("http://localhost:9090/admin/login", credential, { responseType: 'text' as 'json' })
    }

    public doLogin(credential) {
        return this.http.post("http://localhost:9090/authenticate", credential)
    }

    public getAdminTickets() {
        return this.http.get("http://localhost:9090/admin/tickets")
    }

    public getTicket(credential) {
        // console.log("---------------",credential.token)
        let tokenStr = 'Bearer ' + credential.token;
        // console.log(tokenStr)
        const header = new HttpHeaders().set("Authorization", tokenStr)
        console.log("---------", header)
        let id = credential.id
        console.log("this is id", id)

        return this.http.get("http://localhost:9090/employee/" + id + "/tickets", { headers: header })
    }

    public addTicket(credential, ticket) {
        console.log("this is ricket", ticket)
        //  console.log("---------------inside add a ticket",credential.token)
        let tokenStr = 'Bearer ' + credential.token;
        // console.log(tokenStr)
        const header = new HttpHeaders().set("Authorization", tokenStr)
        //  console.log("---------",header)

        let id = credential.id
        // console.log("this is id", id)

        return this.http.post("http://localhost:9090/employee/" + id + "/tickets", ticket, { headers: header })

    }


    public updateTicket(credential, ticket, ticketId) {
        console.log("this is ricket", ticket)
        console.log("---------------inside add a ticket", credential.token)
        console.log(ticketId)
        let tokenStr = 'Bearer ' + credential.token;
        // console.log(tokenStr)
        const header = new HttpHeaders().set("Authorization", tokenStr)
        //  console.log("---------",header)

        let id = credential.id
        // console.log("this is id", id)

        return this.http.put("http://localhost:9090/tickets/" + id + "/tickets/" + ticketId, ticket, { headers: header })

    }

    public forgotPassword(userName) {
        return this.http.post("http://localhost:9090/employee/forgot",
            userName);
    }




    public doRegistration(user) {
        return this.http.post("http://localhost:9090/employee",
            user, { responseType: 'text' as 'json' });
    }


    public updateStatus(status, ticketId) {
        console.log(ticketId);

        return this.http.patch("http://localhost:9090/admin/ticket/" +  1 , {status})
    }

}