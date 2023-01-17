import { Component, Input, OnInit } from '@angular/core';
import { Trabajador } from '../modulos/trabajador';
import { ServicioService } from '../servicios/servicio.service';
import { Output, EventEmitter } from '@angular/core';
// importar Input, Output y Event Emitter from '@angular/core'
// importar Trabajador
 
@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {
  @Input() trabajadores: Trabajador[]  = [];
  @Input() titulo: string = "";
  
  
  // decorador input para el trabajador que se le pasa desde el padre
  @Output() botonLike = new EventEmitter<number>();
  @Output() botonUnlike = new EventEmitter<number>();
  @Output() botonBorrar = new EventEmitter<number>();
  // decxorador output para el evento likeTrabajador  
  // decxorador output para el evento unlikeTrabajador  
  // decxrador output para el evento borraTrabajador  
    
  constructor(private servicio: ServicioService) { 
  }

  ngOnInit(): void {
    this.trabajadores = this.servicio.getTrabajadores();
    this.titulo = this.servicio.getTitulo();
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(trabajadorId:number){
    this.botonLike.emit(trabajadorId);
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(trabajadorId:number){
    this.botonUnlike.emit(trabajadorId);
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(trabajadorId:number){
    this.botonBorrar.emit(trabajadorId);
  }
}
