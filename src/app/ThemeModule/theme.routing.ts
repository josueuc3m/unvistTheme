import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../AuthModule/AuthGuard/auth.guard";
import { ThemeComponent } from "./theme/theme.component";

const routes: Routes = [
  {
    path: 'theme',
    component: ThemeComponent,
    canActivate: [
      AuthGuard
    ]
  },
  { path: '', redirectTo: 'theme', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThemeRoutingModule { }