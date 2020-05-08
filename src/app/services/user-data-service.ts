import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../model/Ticket';


@Injectable({
    providedIn: "root"
})
export class UserDataService {
    public user: User
    public ticket: Ticket


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

        let tokenStr = 'Bearer ' + credential.token;
        const header = new HttpHeaders().set("Authorization", tokenStr)
        let id = credential.id
        return this.http.get("http://localhost:9090/employee/" + id + "/tickets", { headers: header })
    }

    public addTicket(credential, ticket) {
       let tokenStr = 'Bearer ' + credential.token;
       const header = new HttpHeaders().set("Authorization", tokenStr)
       let id = credential.id
        return this.http.post("http://localhost:9090/employee/" + id + "/tickets", ticket, { headers: header })

    }


    public updateTicket(credential, ticket, ticketId) {
        let tokenStr = 'Bearer ' + credential.token;
        const header = new HttpHeaders().set("Authorization", tokenStr)
        let id = credential.id
        return this.http.put("http://localhost:9090/tickets/" + id + "/tickets/" + ticketId, ticket, { headers: header })

    }

    public forgotPassword(userName) {
        console.log(userName);
        
        return this.http.patch("http://localhost:9090/forgot",
            userName);
    }




    public doRegistration(user) {
       return this.http.post("http://localhost:9090/employee",
            user, { responseType: 'text' as 'json' });
    }


    public updateStatus(status, ticketId) {
         return this.http.patch("http://localhost:9090/admin/ticket/" + ticketId, { status })
    }

    public updateDoc(data) {
        console.log(data)
        return this.http.post("http://localhost:9090/admin/uploadDoc",
            data, { responseType: 'text' as 'json' })
    }

    public downloadDoc(TicketId) {
        return this.http.get("http://localhost:9090/employee/" + TicketId + "/ticketDoc")
    }

   
} 