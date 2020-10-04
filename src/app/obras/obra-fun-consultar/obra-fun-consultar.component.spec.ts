import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraFunConsultarComponent } from './obra-fun-consultar.component';

describe('ObraFunConsultarComponent', () => {
  let component: ObraFunConsultarComponent;
  let fixture: ComponentFixture<ObraFunConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraFunConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraFunConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
