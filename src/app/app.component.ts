import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'theme';

  @ViewChild('passwordInput') passwordInput: ElementRef;

  visiblePassword: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleVisiblePassword() {

    this.visiblePassword = !this.visiblePassword;

    if (this.visiblePassword) {
      this.passwordInput.nativeElement.type = 'text';
    } else {
      this.passwordInput.nativeElement.type = 'password';
    }
  }

}
