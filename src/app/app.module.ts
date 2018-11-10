import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SlideoutComponent } from './components/slideout/slideout.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ImageComponent } from './image/image.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    SlideoutComponent,
    UserinfoComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
