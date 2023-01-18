import { Component, Input } from '@angular/core';
import { CardTrabajadorComponent } from '../card-trabajador/card-trabajador.component';
import { Trabajador } from '../Modelos/trabajador';
import { ServicioService } from '../Servicios/servicio.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent {
  trabajadores: Trabajador[]  = [];
  titulo: string = "";
   
  
  constructor(private servicio: ServicioService) { 
  }

  ngOnInit(): void {
    this.trabajadores = this.servicio.getTrabajadores();
    this.titulo = this.servicio.getTitulo();
  }

  like(id:number) {
    
  }
   
}
