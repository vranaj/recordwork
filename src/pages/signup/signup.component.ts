import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formgroup: FormGroup;

  constructor(private formB: FormBuilder, private userSev: UserService, private router: Router) {
    this.formgroup = this.formB.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password:  new FormControl(null, [Validators.required]),
      password2:  new FormControl(null, [Validators.required]),
      recruiter:  new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.formgroup);
    if (this.formgroup.valid) {
      const req = {
        username: this.formgroup.value['username'],
        first_name: this.formgroup.value['first_name'],
        last_name: this.formgroup.value['last_name'],
        email: this.formgroup.value['email'],
        password: this.formgroup.value['password'],
        password2: this.formgroup.value['password2'],
        recruiter: this.formgroup.value['recruiter']
      };

      this.userSev.signup(req).subscribe((response: any) => {
        console.log(response);
        alert('Registration is success.');
        this.router.navigate(['/','posts']);
      }, error => {
        alert('Data not complete');
      });
    }
  }

}
