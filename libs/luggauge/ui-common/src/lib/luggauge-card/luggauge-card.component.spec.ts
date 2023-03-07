import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggaugeCardComponent } from './luggauge-card.component';

describe('LuggaugeCardComponent', () => {
  let component: LuggaugeCardComponent;
  let fixture: ComponentFixture<LuggaugeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggaugeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LuggaugeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
