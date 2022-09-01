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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    requiter: new FormControl(false),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      const req = {
        username: this.formGroup.value['username'],
        password: this.formGroup.value['password'],
      };

      this.userService.signin(req).subscribe((response: any) => {
        console.log(response);
        if (response.access) {
          localStorage.setItem('authtoken', response);
          this.router.navigate(['/', 'posts']);
        }
      });
    }
  }
}
