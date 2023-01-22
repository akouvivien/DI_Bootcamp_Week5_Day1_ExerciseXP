import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  name! : string;
  email! : string;

  constructor() { }

  ngOnInit() { }

  submitForm() {
    console.log(`Name: ${this.name} Email: ${this.email}`);
  }
}
