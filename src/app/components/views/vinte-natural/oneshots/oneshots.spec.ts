import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneshots } from './oneshots';

describe('Oneshots', () => {
  let component: Oneshots;
  let fixture: ComponentFixture<Oneshots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oneshots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oneshots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
