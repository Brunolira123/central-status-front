import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaCardComponent } from './loja-card.component';

describe('LojaCardComponent', () => {
  let component: LojaCardComponent;
  let fixture: ComponentFixture<LojaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
