import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './AuthModule/auth.module';
import { ThemeModule } from './ThemeModule/theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    AuthModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
