import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // auth(email: string, password: string) {
  //   throw new Error("Method not implemented.");
  // }
  uri: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  auth(email, password) {
    const obj = {
      email: email,
      password: password
    };
    return this.http.post(`${this.uri}/auth`, obj);
  }
}
