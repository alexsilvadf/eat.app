import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [ NavbarComponent],
    imports: [ CommonModule,
        FormsModule
    ],
    exports: [NavbarComponent]
})

export class NavbarModule{}