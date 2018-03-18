import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserDataService } from './services/user-data.service';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: UsersComponent },
  { path: 'userform', component: AddUserFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  entryComponents: [AddUserFormComponent],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
