import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  SignInButton: any;

  constructor () {
    this.SignInButton = TabsPage;
  }
}
