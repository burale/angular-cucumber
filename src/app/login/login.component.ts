import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Your email is ' + this.email);
    console.log('Your password is ' + this.password);
    this.router.navigate(['/home']);
  }

}
