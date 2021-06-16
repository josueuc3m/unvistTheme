import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { TCMsharedModule } from '../TCMsharedModule/tcmshared.module';
import { TCMtooltipDirective } from './TCMtooltipDirective/tcmtooltip.directive';

@NgModule({
  declarations: [
    ThemeComponent,
    TCMtooltipDirective
  ],
  imports: [
    CommonModule,
    TCMsharedModule
  ]
})
export class ThemeModule { }
