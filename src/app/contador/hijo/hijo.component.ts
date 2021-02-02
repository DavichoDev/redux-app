import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  constructor( private  store: Store<AppState> ) {
    this.store.select('contador').subscribe( (contador) => {
      this.contador = contador;
    });
  }

  ngOnInit(): void {
  }

  multipicar(){
    this.store.dispatch(actions.multiplicar({numero: 3}));
    // this.contador*=2;
    // this.cambioContador.emit( this.contador );
  }

  dividir(){
    this.store.dispatch(actions.dividir({numero: 2}));
    // this.contador/=2;
    // this.cambioContador.emit( this.contador );
  }

  // resetNieto( contador ){
  //   // this.contador = contador;
  //   // this.cambioContador.emit( this.contador );
  // }

}
