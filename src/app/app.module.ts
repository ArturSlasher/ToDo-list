import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedrectangleComponent } from './components/redrectangle/redrectangle.component';
import { BluecircleComponent } from './components/bluecircle/bluecircle.component';

@NgModule({
  declarations: [
    AppComponent,
    RedrectangleComponent,
    BluecircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
