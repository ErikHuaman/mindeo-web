import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password-view',
  templateUrl: './forgot-password-view.component.html',
})
export class ForgotPasswordViewComponent implements OnInit {
  submit = false;
  form: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submit = true;
  }
}
