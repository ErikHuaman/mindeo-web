import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
})
export class RegisterViewComponent implements OnInit {
  secureValue = 0;

  secureLabel = '';

  hide = true;

  user: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.user = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      subscription: [false],
    });
  }
  ngOnInit(): void {}

  onSubmit() {}

  secure(event: any) {
    this.secureValue = 0;
    this.secureLabel = '';
    if (String(this.user.value.password).length >= 10) {
      this.secureValue = 4;
      this.secureLabel = 'Contraseña muy segura';
    } else if (String(this.user.value.password).length >= 8) {
      this.secureValue = 3;
      this.secureLabel = 'Contraseña segura';
    } else if (String(this.user.value.password).length >= 6) {
      this.secureValue = 2;
      this.secureLabel = 'Podría ser más segura';
    } else if (String(this.user.value.password).length >= 4) {
      this.secureValue = 1;
      this.secureLabel = 'Poco segura';
    }
  }
}
