import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '@app/api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  formGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password2: new FormControl(null, [Validators.required]),
    recruiter: new FormControl(null),
  });

  constructor(private userService: UserService, private router: Router) {}

  signup(): void {
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      const userData = this.formGroup.value;

      this.userService.signup(userData).subscribe(
        (response: any) => {
          console.log(response);
          alert('Registration is success.');
          this.router.navigate(['/', 'posts']);
        },
        (error) => {
          alert('Data not complete');
        }
      );
    }
  }
}
