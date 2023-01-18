import { Injectable } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  private titulo:string = 'Listado de trabajadores';
  private trabajadores:Array<Trabajador> = [
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
 ];
 public getTitulo(): string {
  return this.titulo;
 }

 public getTrabajadores(): Array<Trabajador> {
   return this.trabajadores;
 }

 public getById(id:number) {
  return this.trabajadores.find(a => a.id === id);
 }

 public setVotos(id:number, value:number) {
  let trabajador = this.getById(id);
  trabajador && trabajador.votos == 0 && value < 0 ? trabajador.votos += value : alert('pobre chaval');
  trabajador && value > 0 ? trabajador.votos += value : alert('pobre chaval');
 }

 public borrar(id:number): void {
  let trabajador = this.trabajadores.findIndex(a => a.id == id);
  this.trabajadores.splice(trabajador, 1);
}
} 
