import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      PersonsComponent,
      BooksComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
