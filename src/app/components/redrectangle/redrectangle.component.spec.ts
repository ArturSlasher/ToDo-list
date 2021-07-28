import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedrectangleComponent } from './redrectangle.component';

describe('RedrectangleComponent', () => {
  let component: RedrectangleComponent;
  let fixture: ComponentFixture<RedrectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedrectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedrectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
