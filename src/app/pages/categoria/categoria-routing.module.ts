import { RouterModule, Routes } from "@angular/router";
import { CategoriaComponent } from "./categoria.component";
import { NgModule } from "@angular/core";


const routes: Routes = [{
    path: '',
    component: CategoriaComponent
}];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class CategoriaRoutingModule{}
