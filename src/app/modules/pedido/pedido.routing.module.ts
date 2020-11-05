import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraPedidoComponent } from './muestra-pedido/muestra-pedido.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
    {
        path: '',        
        children: [
        {
            path: 'mostrarPedido',
            component: MuestraPedidoComponent
        },
        {
            path: 'crearPedido',
            component: PedidoComponent
        },
        {
            path: 'crearPedido/:id',
            component: PedidoComponent
        },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PedidoRoutingModule { }