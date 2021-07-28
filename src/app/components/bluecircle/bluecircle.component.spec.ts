import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluecircleComponent } from './bluecircle.component';

describe('BluecircleComponent', () => {
  let component: BluecircleComponent;
  let fixture: ComponentFixture<BluecircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluecircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluecircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
