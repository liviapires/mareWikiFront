import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesConversa } from './lives-conversa';

describe('LivesConversa', () => {
  let component: LivesConversa;
  let fixture: ComponentFixture<LivesConversa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivesConversa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivesConversa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
