import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [],
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    NavbarModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,

    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
  ],
})
export class CategoriaModule {}
