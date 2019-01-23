import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../Services/user.service';
import swal from 'sweetalert';
import{Constants} from '../../utilities/constants';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 registrationForm: FormGroup;

 private userObj: User;



  constructor(private _fbi          : FormBuilder,
              private _userservice  : UserService,
              private _constants    : Constants ,          
    ) { }

  ngOnInit() {
    this.onFormLoad();

  }

  private onFormLoad() {
    //Loading Form group as a object and onload set default values to empty
    this.registrationForm = this._fbi.group({
      FirstName  : new FormControl('',[Validators.required]),
      LastName   : '',
      Email      : ''
    });
  }

  onSubmit(){   
    this._userservice.AddUser(this.registrationForm.value).subscribe(data =>{
        console.log(data);
        swal(this._constants.swal_User_Success_Msg,"",this._constants.swal_success);
        this.ResetForm();
    });
  }

  ResetForm(): void {
    this.registrationForm = this._fbi.group({
      FirstName: '',
      LastName: '',
      Email: ''
    });
  }

}
