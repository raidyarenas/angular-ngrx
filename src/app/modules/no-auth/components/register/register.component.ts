import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Helpers, PATTERNS} from "../../../../helpers/Helpers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  getMessage = Helpers.getMessageError;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initFormRegister();
  }

  initFormRegister(): void {
    this.formRegister = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(PATTERNS.only_characters)]],
      last_name: ['', [Validators.required, Validators.pattern(PATTERNS.only_characters)]],
      birthday: ['', [Validators.required, Validators.pattern(PATTERNS.date)]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit(): void {
    alert("[Register User]")
  }

}


