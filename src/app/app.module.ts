import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { StoredDataComponent } from './stored-data/stored-data.component';
import { AgePipePipe } from './age-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    StoredDataComponent,
    AgePipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
