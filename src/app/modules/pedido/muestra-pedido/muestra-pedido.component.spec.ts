import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraPedidoComponent } from './muestra-pedido.component';

describe('MuestraPedidoComponent', () => {
  let component: MuestraPedidoComponent;
  let fixture: ComponentFixture<MuestraPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
