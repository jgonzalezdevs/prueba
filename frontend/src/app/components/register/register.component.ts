import { Component } from "@angular/core";
import { UsersService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email: string;
  password: string;
  confirm: string;
  passwordError: boolean;

  constructor(public userService: UsersService) {}

  register() {
    const user = { username: this.email, password: this.password, confirm: this.confirm };
    this.userService.register(user).subscribe(data => {
      console.log(data);
      alert('Usuario registrado correctamente')
    });
  }
}