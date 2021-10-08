import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child1ComponentComponent } from './child1-component/child1-component.component';
import { Parent1ComponentComponent } from './parent1-component/parent1-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NewEmptyComponentComponent } from './new-empty-component/new-empty-component.component';

 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    Child1ComponentComponent,
    Parent1ComponentComponent,
    UserComponentComponent,
    RegisterComponentComponent,
    FormComponentComponent,
    NewEmptyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
