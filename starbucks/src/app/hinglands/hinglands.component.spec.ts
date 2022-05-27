import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinglandsComponent } from './hinglands.component';

describe('HinglandsComponent', () => {
  let component: HinglandsComponent;
  let fixture: ComponentFixture<HinglandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinglandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinglandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
