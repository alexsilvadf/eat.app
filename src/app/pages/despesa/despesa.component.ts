import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { Despesa } from 'src/app/models/despesa';
import { SelectModel } from 'src/app/models/selectModel';
import { SistemaFinanceiro } from 'src/app/models/sistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.services';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DespesaService } from 'src/app/services/despesa.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss'],
})
export class DespesaComponent {

  tipoTela: number = 1;//listagem, 2 Cadastro, 3 edição
  tableListDespesas: Array<Despesa>
  id: string;
  
  page: number = 1;
  config: any;
  paginacao: boolean = true;
  itemsPorPagina: number = 10;
  
  configpag() {
    this.id = this.gerarIdParaConfigDePaginacao();
  
    this.config = {
      id: this.id,
      currentPage: this.page,
      itemsPerPage: this.itemsPorPagina
  
    };
  }
  
  gerarIdParaConfigDePaginacao() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  
  cadastro(){
    this.tipoTela = 2;
  
    this.despesaForm.reset();
  }
  
  mudarItemsPorPage() {
    this.page = 1
    this.config.currentPage = this.page;
    this.config.itemsPerPage = this.itemsPorPagina;
  }
  
  mudarPage(event: any) {
    this.page = event;
    this.config.currentPage = this.page;
  }
  
  listarDespesaUsuario(){
    this.tipoTela = 1;
  
    this.despesaService.ListarDespesaUsuario(this.authService.getEmailUser).subscribe((response: Array<Despesa>) =>{
        
    this.tableListDespesas = response;
   
    }), (error) => console.error(error), () => {}
  
  }
  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public categoriaService: CategoriaService,
    public sistemaService: SistemaService,
    public authService: AuthService,
    public despesaService: DespesaService
  ) {}

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();

  listCategorias = new Array<SelectModel>();
  categoriaSelect = new SelectModel();

  color = 'accent';
  checked = false;
  disabled = false;

  despesaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 4;

    this.configpag();
    this.listarDespesaUsuario();

 

    this.despesaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      data: ['', [Validators.required]],
      sistemaSelect: ['', [Validators.required]],
      categoriaSelect: ['', [Validators.required]],
    });

    this.ListarCategoriaUsuario();
  }

  dadosForm() {
    return this.despesaForm.controls;
  }

  enviar() {
    var dados = this.dadosForm();

    let item = new Despesa();
    item.nome = dados['name'].value;
    item.valor = dados['valor'].value;
    item.pago = this.checked;
    item.dataVencimento = dados['data'].value;
    item.idCategoria = parseInt(this.categoriaSelect.id);

    this.despesaService
      .AdicionarDespesa(item)
      .subscribe((response: Despesa) => {
        this.despesaForm.reset();
        this.listarDespesaUsuario();
      }),
      (error) => console.error(error),
      () => {};
  }

  ListarCategoriaUsuario() {
    this.categoriaService
      .ListarCategoriasUsuario(this.authService.getEmailUser)
      .subscribe((response: Array<Categoria>) => {
        var listaCategorias = [];

        response.forEach((x) => {
          var item = new SelectModel();

          item.id = x.id.toString();
          item.name = x.nome;

          listaCategorias.push(item);
        });
        this.listCategorias = listaCategorias;
      });
  }

  handleChangePago(item: any) {
    this.checked = item.checked as boolean;
  }
}
