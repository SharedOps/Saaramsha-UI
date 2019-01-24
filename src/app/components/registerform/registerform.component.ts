import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../Services/user.service';
import swal from 'sweetalert';
import { Constants } from '../../utilities/constants';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private constants: Constants) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.userservice.AddUser(this.registerForm.value).subscribe(data => {
      console.log(data);
      swal(this.constants.swal_User_Success_Msg, "", this.constants.swal_success);
      this.ResetForm();
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    });
  }

  ResetForm(): void {
    this.registerForm = this.formBuilder.group({
      FirstName: '',
      LastName: '',
      Email: ''
    });
  }
}
