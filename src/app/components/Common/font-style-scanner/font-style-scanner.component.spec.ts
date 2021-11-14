import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleScannerComponent } from './font-style-scanner.component';

describe('FontStyleScannerComponent', () => {
  let component: FontStyleScannerComponent;
  let fixture: ComponentFixture<FontStyleScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStyleScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
