
import { PedidoRoutingModule } from'./pedido.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [  ],
    imports: [ ReactiveFormsModule, HttpClientModule, CommonModule, PedidoRoutingModule,
    MatFormFieldModule, MatInputModule ],
    providers: [],
  })
  export class PedidoModule { }