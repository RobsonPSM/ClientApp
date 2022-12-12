import { RecursosService } from './../services/recursos.service';
import { Recursos } from './../models/Recursos';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
// Generated by https://quicktype.io



  @Component({
    selector: 'app-recursos',
    templateUrl: './recursos.component.html',
    styleUrls: ['./recursos.component.css']
  })
  export class RecursosComponent implements OnInit {

    constructor(private Recursos : RecursosService) { }

    $Recurso: Observable<Recursos[]>
    recursos:Recursos[] = [];

    ngOnInit(): void {
      this.Recursos.ObterTodos().subscribe(record=>{
        this.recursos = record
        console.log(record)
    })
    }
  }
