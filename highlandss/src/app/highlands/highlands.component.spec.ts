import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlandsComponent } from './highlands.component';

describe('HighlandsComponent', () => {
  let component: HighlandsComponent;
  let fixture: ComponentFixture<HighlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
