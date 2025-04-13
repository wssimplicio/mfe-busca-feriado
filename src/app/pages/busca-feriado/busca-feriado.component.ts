import { Component, OnInit } from '@angular/core';
import { CarregaFeriadoService } from './service/carrega-feriado.service';
import { HttpClientModule } from '@angular/common/http';
import { IFeriado } from './interface/IFeriado';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-feriado',
  templateUrl: './busca-feriado.component.html',
  styleUrls: ['./busca-feriado.component.css'],
  standalone:true,
  providers: [CarregaFeriadoService],
  imports: [HttpClientModule, CommonModule]
})
export class BuscaFeriadoComponent implements OnInit {

  constructor(
    private readonly service: CarregaFeriadoService,
    private readonly router: Router
  ) { }

  data: IFeriado[] = [];

  ngOnInit() {
    this.service.carregaFeriado().subscribe((listFeriados) => {
      this.data = listFeriados;
    });
  }

  voltar() {
    this.router.navigate(['/home'])
  }
}
