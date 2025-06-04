import { Component, Input, OnInit } from '@angular/core';
import { Loja } from '../../model/loja.model';

@Component({
  selector: 'app-loja-card',
  templateUrl: './loja-card.component.html',
  styleUrls: ['./loja-card.component.css']
})
export class LojaCardComponent {

    @Input() loja!: Loja;


}
