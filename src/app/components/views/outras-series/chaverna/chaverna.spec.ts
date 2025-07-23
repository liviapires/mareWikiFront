import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaverna } from './chaverna';

describe('Chaverna', () => {
  let component: Chaverna;
  let fixture: ComponentFixture<Chaverna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chaverna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chaverna);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
