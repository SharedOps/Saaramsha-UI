import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../Services/user.service';
import swal from 'sweetalert';
import { Constants } from '../../utilities/constants';
import { element } from '@angular/core/src/render3/instructions';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  private userObj: User;

  public columns = ["FirstName", "LastName", "Email"];



  constructor(private _formbuilder: FormBuilder,
    private _userservice: UserService,
    private _constants: Constants,
  ) {
    this.registrationForm = _formbuilder.group({
      FirstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      LastName: new FormControl('', [Validators.required,,Validators.minLength(3)]),
      Email: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {

    this.getUsers();

  }

  private onFormLoad() {
    //Loading Form group as a object and onload set default values to empty

  }

  onSubmit() {
    this._userservice.AddUser(this.registrationForm.value).subscribe(data => {     
      console.log(data);
      swal(this._constants.swal_User_Success_Msg, "", this._constants.swal_success);
      this.ResetForm();
    });
  }

  getUsers() {
    this._userservice.GetUsers().subscribe(data => {
      this.userObj = data;
      console.log(this.userObj);
    });
  }

  ResetForm(): void {
    this.registrationForm = this._formbuilder.group({
      FirstName: '',
      LastName: '',
      Email: ''
    });
  }

}
