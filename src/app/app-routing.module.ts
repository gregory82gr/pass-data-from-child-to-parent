import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentOutComponent } from './parent-component-out/parent-component-out.component';
import { ParentComponentRefComponent } from './parent-component-ref/parent-component-ref.component';
import { ParentComponentVcComponent } from './parent-component-vc/parent-component-vc.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'output', component: ParentComponentOutComponent },
  { path: 'template', component: ParentComponentRefComponent },
  { path: 'viewchild', component: ParentComponentVcComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
