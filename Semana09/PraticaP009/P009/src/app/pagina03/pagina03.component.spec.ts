import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina03Component } from './pagina03.component';

describe('Pagina03Component', () => {
  let component: Pagina03Component;
  let fixture: ComponentFixture<Pagina03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pagina03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
