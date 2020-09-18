import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoAdmComponent } from './cabecalho-adm.component';

describe('CabecalhoAdmComponent', () => {
  let component: CabecalhoAdmComponent;
  let fixture: ComponentFixture<CabecalhoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
