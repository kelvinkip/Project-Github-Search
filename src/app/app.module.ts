import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser'
// import { MyAppDirective } from './directives/my-app.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
