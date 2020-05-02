import { User } from './user';
import { Injectable } from '@angular/core';


@Injectable ({
    providedIn : "root"
})
export class UserDataService {
    public user: User
}