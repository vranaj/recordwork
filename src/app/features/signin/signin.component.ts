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
  formgroup: FormGroup;

  constructor(
    private formB: FormBuilder,
    private userSev: UserService,
    private router: Router
  ) {
    this.formgroup = this.formB.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      requiter: new FormControl(false),
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.formgroup);
    if (this.formgroup.valid) {
      const req = {
        username: this.formgroup.value['username'],
        password: this.formgroup.value['password'],
      };

      this.userSev.signin(req).subscribe((response: any) => {
        console.log(response);
        if (response.access) {
          localStorage.setItem('authtoken', response);
          this.router.navigate(['/', 'posts']);
        }
      });
    }
  }

  forgotPassword(): void {}
}
