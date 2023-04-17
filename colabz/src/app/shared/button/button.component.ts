import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit  {
  
  @Input('buttonsize')
    size='S';
  
  @Input('shades')
    shades='NA';
  @Input('animation')  
  animation='F';
  @Input('name')
  name='F';

  constructor(){

  }
ngOnInit():void{}
}
