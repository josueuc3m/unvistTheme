import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  @ViewChild('passwordInput') passwordInput: ElementRef;

  visiblePassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleVisiblePassword() {

    this.visiblePassword = !this.visiblePassword;

    if (this.visiblePassword) {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
