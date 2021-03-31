import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './AuthModule/auth.routing';
import { ThemeRoutingModule } from './ThemeModule/theme.routing';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    AuthRoutingModule,
    ThemeRoutingModule
  ]
})
export class AppRoutingModule { }
