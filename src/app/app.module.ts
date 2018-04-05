import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  NgxPermissionsConfigurationStore,
  NgxPermissionsModule,
  NgxPermissionsStore,
  NgxRolesStore
} from "ngx-permissions";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DataService } from "./data.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPermissionsModule.forChild({
      permissionsIsolate: true,
      configurationIsolate: true,
      rolesIsolate: true
    })
  ],
  providers: [NgxPermissionsStore, NgxPermissionsConfigurationStore, NgxRolesStore, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
