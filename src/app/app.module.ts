import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Rocket } from './rocket/rocket.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Rocket,
    TodoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
