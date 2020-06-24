import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ClockComponent } from "./clock/clock.component";
import { HeaderComponent } from "./header/header.component";
import { ExpansionComponent } from "./expansion/expansion.component";
import { ExpansionTemplateComponent } from './expansion-template/expansion-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionComponent,
    ClockComponent,
    HeaderComponent,
    ExpansionTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
