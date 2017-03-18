import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service'
import { AppComponent } from './app.component';
import { AddlinkComponent } from './addlink/addlink.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '@angular/material';
import { FooterHoverComponent } from './footer-hover/footer-hover.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UpdateService} from './services/update.service';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    AddlinkComponent,
    FooterComponent,
    FooterHoverComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, MaterialModule,  ReactiveFormsModule
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [HttpService,UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
