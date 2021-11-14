import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleInputComponent } from './font-style-input.component';

describe('FontStyleInputComponent', () => {
  let component: FontStyleInputComponent;
  let fixture: ComponentFixture<FontStyleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontStyleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
