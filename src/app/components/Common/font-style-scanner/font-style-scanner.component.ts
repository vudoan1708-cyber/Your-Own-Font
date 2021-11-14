import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-style-scanner',
  templateUrl: './font-style-scanner.component.html',
  styleUrls: ['./font-style-scanner.component.scss']
})
export class FontStyleScannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Scanner View Initialised!!!')
  }
}
