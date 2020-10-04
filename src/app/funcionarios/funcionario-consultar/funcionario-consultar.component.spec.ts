import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioConsultarComponent } from './funcionario-consultar.component';

describe('FuncionarioConsultarComponent', () => {
  let component: FuncionarioConsultarComponent;
  let fixture: ComponentFixture<FuncionarioConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
