import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/selectModel';
import { SistemaFinanceiro } from 'src/app/models/sistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.services';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public sistemaService: SistemaService,
    public authService: AuthService
  ) {}

  listSistemas = new Array<SelectModel>();
  sistemaSelect =  new SelectModel();


selectedOption: any;
  options = [
    { name: 'Opção 1', id: 1 },
    { name: 'Opção 2', id: 2 },
    { name: 'Opção 3', id: 3 }
  ];

  categoriaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      sistemaSelect:['',Validators.required]
    });

    this.ListSistemasUsuario();
  }

  dadosForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    debugger;

    var dados = this.dadosForm();
  }

  ListSistemasUsuario() {
    this.sistemaService
      .ListSistemasUsuario(this.authService.getEmailUser())
      .subscribe((response: Array<SistemaFinanceiro>) => {
        
        var listSistemaFinanceiro = [];

        response.forEach(x => {
          var item = new SelectModel();
         
          item.id = x.id.toString();
          item.name = x.nome;

          listSistemaFinanceiro.push(item);

        });


       this.listSistemas = listSistemaFinanceiro;

       
      }
    )
  }
}
