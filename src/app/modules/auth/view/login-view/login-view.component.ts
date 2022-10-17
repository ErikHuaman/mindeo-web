import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent implements OnInit {
  hide = true;

  user: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.user = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log();
    this.auth.login(this.user.value).subscribe((res) => {
      console.log('aquí->', res);
    });
  }
}
