import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hque } from './hque';

describe('Hque', () => {
  let component: Hque;
  let fixture: ComponentFixture<Hque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
