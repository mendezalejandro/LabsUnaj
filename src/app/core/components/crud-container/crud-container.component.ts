import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crud-container',
  templateUrl: './crud-container.component.html',
  styleUrls: ['./crud-container.component.scss']
})
export class CrudContainerComponent {
  @ViewChild('container') container!: ElementRef;
  /** calculated height */
  calculatedHeight: number = 100;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.calculatedHeight = this.container.nativeElement.offsetHeight - 95;
    }, 0); 
  }
}