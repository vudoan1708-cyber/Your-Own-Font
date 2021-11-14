import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleScanComponent } from './font-style-scan.component';

describe('FontStyleScanComponent', () => {
  let component: FontStyleScanComponent;
  let fixture: ComponentFixture<FontStyleScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStyleScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
