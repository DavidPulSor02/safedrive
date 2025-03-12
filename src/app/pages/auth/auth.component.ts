import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm = new FormGroup({
    password: new FormControl('')
  });

  login() {
    console.log(this.authForm.value);
  }
}
