import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRequestService } from './user-http/user.service';

import { GitSearchComponent } from './git-search/git-search.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
