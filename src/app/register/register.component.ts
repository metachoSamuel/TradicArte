import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

/**
 * @author Samuel Forero
 * Register firebase Auth Component
 */

export class RegisterComponent {

  formReg: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.formReg = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  // Register method
  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      })
  }

}
