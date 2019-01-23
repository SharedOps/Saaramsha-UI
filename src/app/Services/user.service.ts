import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import{Constants} from '../utilities/constants'

@Injectable()
export class UserService {

  constructor(private _http: HttpClient, private _constants: Constants) { }

  public AddUser(User: User){  
    return this._http.post(this._constants.AddUser_Api_Url,User);
  }

  public GetUsers(){
    return this._http.get<User>(this._constants.GetUsersUser_Api_Url);
  }
}
