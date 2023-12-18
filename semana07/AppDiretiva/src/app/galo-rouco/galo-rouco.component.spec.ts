import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaloRoucoComponent } from './galo-rouco.component';

describe('GaloRoucoComponent', () => {
  let component: GaloRoucoComponent;
  let fixture: ComponentFixture<GaloRoucoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaloRoucoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaloRoucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
