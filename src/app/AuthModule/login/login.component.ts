import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: boolean = false;

  @ViewChild('passwordInput') passwordInput: ElementRef;
  visiblePassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    localStorage.clear()

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  toggleVisiblePassword() {

    this.visiblePassword = !this.visiblePassword;

    if (this.visiblePassword) {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }

  }

  submit() {

    const credentials: { email: string, password: string } = this.loginForm.value;

    if (!this.loginForm.valid) {
      this.errors = true;
      return;
    } else {
      this.errors = false;
    }
    
    if (credentials.email === 'josue@parapentex.com' && credentials.password === 'example') {
      
      this.errors = false;
      localStorage.setItem('user', JSON.stringify(credentials));
      this.router.navigateByUrl('');
      
    } else {
      this.errors = true;
      return;
    }

  }

}
