import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core'

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = 'sin nombre';
  @Output() cambioNombreHijo: EventEmitter<string> = new EventEmitter<string>();

  // constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(): void {
    this.nombreHijo = "Andres Soto";
    this.cambioNombreHijo.emit(this.nombreHijo);
    // this.dataService.nombreUsuario = this.nombreHijo;
  }

}
