import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { SelectModel } from 'src/app/models/selectModel';
import { SistemaFinanceiro } from 'src/app/models/sistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.services';
import { CategoriaService } from 'src/app/services/categoria.service';
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
    public authService: AuthService,
    public categoriaService: CategoriaService
  ) {}

  listSistemas = new Array<SelectModel>();
  sistemaSelect =  new SelectModel();


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
    var dados = this.dadosForm();

    let item = new Categoria();
    item.nome = dados["name"].value;
    item.id = 0;
    item.idSistema = parseInt(this.sistemaSelect.id);



    this.categoriaService.AdicionarCategoria(item).subscribe((response: Categoria) =>{
      
      this.categoriaForm.reset();

    }), (error) => console.error(error), () => {}



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
