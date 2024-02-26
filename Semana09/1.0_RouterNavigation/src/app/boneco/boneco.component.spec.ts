import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonecoComponent } from './boneco.component';

describe('BonecoComponent', () => {
  let component: BonecoComponent;
  let fixture: ComponentFixture<BonecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonecoComponent]
    });
    fixture = TestBed.createComponent(BonecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
