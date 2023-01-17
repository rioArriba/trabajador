import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { CardTrabajadorComponent } from './card-trabajador/card-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    CardTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
