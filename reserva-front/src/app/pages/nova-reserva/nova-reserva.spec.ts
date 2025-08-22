import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaReserva } from './nova-reserva';

describe('NovaReserva', () => {
  let component: NovaReserva;
  let fixture: ComponentFixture<NovaReserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaReserva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaReserva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
