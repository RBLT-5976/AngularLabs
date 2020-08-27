import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = ""; //"Email Address";
  password: string = "";

  constructor(
    private router: Router,
    private form: FormsModule,
    private authservice: AuthService
  ) {}

  ngOnInit() {}

  itemClicked() {
    console.log(this.username);
    this.authservice.auth(this.username, this.password).subscribe(data => {
      sessionStorage.setItem("user", JSON.stringify(data));
      console.log(data);

      this.router.navigateByUrl('/account/' + encodeURIComponent(JSON.stringify(data)));
      //if (data.valid) {
        //this.router.navigateByUrl("/account/" + this.username);
      //}

      // console.log(data);
    });
  }
}
