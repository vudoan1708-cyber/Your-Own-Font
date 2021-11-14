import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // DOM Ref
  @ViewChild('button') buttonRef: any = null;
  // Dispatch Event
  clickEvent = new Event('onclick', { bubbles: true });

  constructor() { }

  ngOnInit(): void {
  }

  // Event Handler
  buttonClick(e: Event): void {
    this.buttonRef.nativeElement.dispatchEvent(this.clickEvent);
  }
}
