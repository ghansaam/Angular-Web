import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './footer/footer.component'
import { NavigatorService } from './navigator.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { DataSharingService } from './data-sharing.service';
@NgModule({
  declarations: [
  
    AppComponent,
  routingComponents,
  EditPageComponent,
  CommonComponent,
  FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NavigatorService,DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
