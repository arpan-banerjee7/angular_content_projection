import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpansionComponent } from "./expansion/expansion.component";
import { ExpansionTemplateComponent } from "./expansion-template/expansion-template.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
