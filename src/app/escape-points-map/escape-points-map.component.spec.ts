import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapePointsMapComponent } from './escape-points-map.component';

describe('EscapePointsMapComponent', () => {
  let component: EscapePointsMapComponent;
  let fixture: ComponentFixture<EscapePointsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapePointsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscapePointsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
