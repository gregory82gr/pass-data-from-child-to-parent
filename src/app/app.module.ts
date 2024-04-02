import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildComponentRefComponent } from './child-component-ref/child-component-ref.component';
import { ParentComponentRefComponent } from './parent-component-ref/parent-component-ref.component';
import { ParentComponentVcComponent } from './parent-component-vc/parent-component-vc.component';
import { ChildComponentVcComponent } from './child-component-vc/child-component-vc.component';
import { ParentComponentOutComponent } from './parent-component-out/parent-component-out.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ChildComponentRefComponent,
    ParentComponentRefComponent,
    ParentComponentVcComponent,
    ChildComponentVcComponent,
    ParentComponentOutComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
