import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TCMcomboBoxOption } from 'src/app/TCMsharedModule/TCMsharedModel/tcmshared.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  @ViewChild('passwordInput') passwordInput: ElementRef;

  options: TCMcomboBoxOption[] = [
    {
      option: 'Volvo',
      description: 'Espacioso y cómodo para los viajes largos',
      image: 'assets/UIKit/check.svg'
    },
    {
      option: 'Audi',
      description: 'Clase y elegancia para los momentos más exclusivos',
      image: 'assets/UIKit/error.svg'
    },
    {
      option: 'Volkswagen',
      description: 'Tu compañero del día a día',
      image: 'assets/UIKit/linkedIn.svg'
    }
  ];
  selectedOption: TCMcomboBoxOption;

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
