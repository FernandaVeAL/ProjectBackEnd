import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraSolicitarComponent } from './obra-solicitar.component';

describe('ObraSolicitarComponent', () => {
  let component: ObraSolicitarComponent;
  let fixture: ComponentFixture<ObraSolicitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraSolicitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraSolicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
