import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = [{ 'email': 'abc@com.au', 'pwd': '123' }, 
  { 'email': 'abd@com.au', 'pwd': '123' }, 
  { 'email': 'abe@com.au', 'pwd': '123' }];
  

  email:string;
  password:string;
  showmessage = false;
  hidemessage = true;

  constructor(private router: Router, private form: FormsModule) { }

  ngOnInit() {
  }

  itemClicked() {
    console.log('aaa');
    var match = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.email == this.users[i].email && this.password == this.users[i].pwd) {
        // this.router.navigateByUrl('/account/'+ this.email);
        this.router.navigateByUrl('/account');
        match = true;
      }
    }
  
    if (!match) {
      this.showmessage = true;
      this.hidemessage = false;
    }
  }
}
