import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  links: Array<string> = ['login', 'register'];
  activeLink: string = 'login';
  background: ThemePalette = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
