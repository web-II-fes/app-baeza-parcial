import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PedidoService } from '../servicios/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
   
  idPedido: String;
  
  pedidoForm: FormGroup;
 
  
  constructor(private fb: FormBuilder, private pedidoService: PedidoService,private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idPedido = param.get('id');

      if (this.idPedido !== 'new'){
        this.getPedidoById(this.idPedido);
      }
    });
  }

  getPedidoById(idPedido: String){
    this.pedidoService.getPedidoById(idPedido).subscribe((data) =>{
      let pedidoId = data;

      this.pedidoForm.patchValue(pedidoId);
    });
  }

  initForm(){
    this.pedidoForm = this.fb.group({
      nombre: [ '' ],
      direccion: [ '' ],
      pedido: [],
      fecha: [ '' ]
    });
  }

  cargarPedido() {
    if (this.idPedido ){
      this.pedidoService.editarPedido(this.idPedido, this.pedidoForm.value).subscribe((pedido) => {
      });
    } else {
      this.pedidoService.guardarPedido(this.pedidoForm.value).subscribe((pedido) => {
        
        console.log("se crea pedido");
      });
    }
    this.router.navigate(['/pedido/mostrarPedido']);
  }
}
