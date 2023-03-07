import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorHeaderComponent } from './simulator-header.component';

describe('SimulatorHeaderComponent', () => {
  let component: SimulatorHeaderComponent;
  let fixture: ComponentFixture<SimulatorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
