import { Component,  Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [type]="type" [class]="class" [ngStyle]="style" [disabled]="disabled">
     
     <ng-content></ng-content><div [class]="'icon '+iconSide" *ngIf="icon"><span [class]="'fa fa-'+icon"></span></div>
  </button>
  `,
  styleUrls: ['./buttons.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent {

  constructor() { }
  @Input() info: any ;
  @Input() style: object = {};
  @Input() type = 'button';
  @Input() class: string;
  @Input() disabled = false;
  @Input() icon: string;
  @Input() iconSide = '';
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

}

