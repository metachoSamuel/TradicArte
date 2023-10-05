import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * @author Samuel Forero
 * Login firebase Auth Component
 */

export class LoginComponent {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  // Go register
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Go home
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Login method
  onSubmit() {
    this.userService.loginUser(this.formLogin.value)
      .then(response => {
        this.navigateToHome();
      })
      .catch(error => {
        console.log(error);
      })
  }


}
