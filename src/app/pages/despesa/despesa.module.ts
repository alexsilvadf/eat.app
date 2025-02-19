import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavbarModule } from "src/app/components/navbar/navbar.module";
import { SidebarModule } from "src/app/components/sidebar/sidebar.module";
import { DespesaComponent } from "./despesa.component";
import { DespesaRoutingModule } from "./despesa-routing.module";



@NgModule({
providers: [],
    declarations: [DespesaComponent],
    imports:[
        CommonModule,
        DespesaRoutingModule,
        NavbarModule,
        SidebarModule
    ]
})

export class DespesaModule{}