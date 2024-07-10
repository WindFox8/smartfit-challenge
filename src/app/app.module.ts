import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { LegendComponent } from './components/legend/legend.component';
import { LocationsService } from './services/locations.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
