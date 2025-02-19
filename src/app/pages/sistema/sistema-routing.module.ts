import { RouterModule, Routes } from "@angular/router";
import { SistemaComponent } from "./sistema.component";
import { NgModule } from "@angular/core";


const routes: Routes = [{
    path: '',
    component: SistemaComponent
}];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class SistemaRoutingModule{}
