import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Helpers} from '../../../../helpers/Helpers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  getMessage = Helpers.getMessageError;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit(): void {
    const seeder = { username: 'test@mail.com', password: '123456' };
    const {username, password} = this.formLogin.value;
    if (username == seeder.username && password == seeder.password)
      alert("[Login Success]");
    else
      alert("[Login Incorrect]");
  }

}

