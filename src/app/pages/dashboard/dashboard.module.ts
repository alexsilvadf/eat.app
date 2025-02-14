import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";


@NgModule({
providers: [],
    declarations: [DashboardComponent],
    imports:[
        CommonModule,
        DashboardRoutingModule
    ]
})

export class DashboardModule{}