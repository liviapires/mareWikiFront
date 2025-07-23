import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDePersonagens } from './tabela-de-personagens';

describe('TabelaDePersonagens', () => {
  let component: TabelaDePersonagens;
  let fixture: ComponentFixture<TabelaDePersonagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaDePersonagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDePersonagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
