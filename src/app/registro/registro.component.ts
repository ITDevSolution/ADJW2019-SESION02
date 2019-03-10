import { Component, OnInit } from '@angular/core';
import { Cliente, Producto, Servicio } from '../util/Servicio';
import { ServicioService } from './servicio.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ServicioService]
})
export class RegistroComponent implements OnInit {

  private servicios: Servicio[] = [];
  private servicio: Servicio;
  private serviciotmp: Servicio;
  private cliente: Cliente;
  private errorMessage: string;

  constructor(private service: ServicioService) { }
  public getServicios() {
    this.service.getServicios().subscribe(
      servicios => {
        console.log(servicios);
        this.servicios = servicios;
        this.serviciotmp = servicios[0];
      },
      error => { this.errorMessage = <any>error; }
    );
  }


  ngOnInit() {

    this.servicio = new Servicio();
    this.serviciotmp = new Servicio();
    this.servicio.indSave = null;
    this.getServicios();
  }

}
