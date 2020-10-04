import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCadastrarComponent } from './obra-cadastrar.component';

describe('ObraCadastrarComponent', () => {
  let component: ObraCadastrarComponent;
  let fixture: ComponentFixture<ObraCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
