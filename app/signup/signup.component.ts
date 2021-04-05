import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  editObject: any;
  signUpDetails: any;
  gender: string = '';
  genders: any = [
    'Male',
    'Female'
  ]

  constructor(private service: UserService) { 
    this.editObject = {firstName: '', lastName: '', emailId: '', contactNumber: '' ,gender: '', password: '', confirmPassword: ''};
  }

  firstName: string;
  lastName: string;
  emailId : string;
  contactNumber: number;
  password: string;
  confirmPassword: string;
  registeredUser = false;


  ngOnInit(): void {
  }

  showEditPopup(signUpForm: any) {
    this.editObject = signUpForm;
    jQuery('#signUpModel').modal('show');
  }

  proceedUser() {
    this.registeredUser = true;
  }

  radioChangeHandler(event: any) {
    this.gender = event.target.value;
  }

  validateUser(signup: any) {
    console.log(signup);
  }

  registerUser(regForm: any): any {
    this.service.register(regForm).subscribe((result: any) => console.log(result));
    console.log(regForm);
  }

}
