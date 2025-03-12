import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [],
  declarations: [DespesaComponent],
  imports: [
    CommonModule,
    DespesaRoutingModule,
    NavbarModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatSlideToggleModule,
          NgxPaginationModule,
            FormsModule,
            NgSelectModule,
            MatIconModule
  ],
})
export class DespesaModule {}
