import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { TCMsharedModule } from '../TCMsharedModule/tcmshared.module';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    TCMsharedModule
  ]
})
export class ThemeModule { }
