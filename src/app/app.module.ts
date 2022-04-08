import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoloNumerosDirective } from './directivas/solo-numeros.directive';
import { SoloLetrasDirective } from './directivas/solo-letras.directive';

@NgModule({
  declarations: [
    AppComponent,
    SoloNumerosDirective,
    SoloLetrasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
