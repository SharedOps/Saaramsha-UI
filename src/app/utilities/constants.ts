import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

 public AddUser_Api_Url      : string    = "http://saaramshaapi.com/api/saaramshaapp/adduser " ;
 public GetUsersUser_Api_Url : string    = "http://saaramshaapi.com/api/saaramshaapp/getusers" ;



 //Swal Messages

public swal_success: string="success";
public swal_errror: string="error";

public swal_User_Success_Msg: string="User added successfully";

}