import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../servicios/pedido.service';

@Component({
  selector: 'app-muestra-pedido',
  templateUrl: './muestra-pedido.component.html',
  styleUrls: ['./muestra-pedido.component.css']
})
export class MuestraPedidoComponent implements OnInit {


    displayedColumns: string[] = ['nombre', 'direccion', 'pedido','fecha', 'editar', 'eliminar'];
    dataSource: any[] = [];
  idPedido: any;
  
    constructor(private router:Router,private conectaService: PedidoService,private route: ActivatedRoute) { }
  
    parametro:any;
  
    ngOnInit(): void {
  
    this.getPedidos();
    }
  
  
    
  
    getPedidos(){
      this.conectaService.getPedidos().subscribe((data: any) => {
        //debugger;
        this.dataSource = data;
      });
    }
    
  
    goToEditar(idPedido) {		
          this.router.navigate(["/pedido/crearPedido/" + idPedido]);
        }

    goToEliminar(pedido:any) {		

    this.idPedido = pedido._id;
    this.conectaService.borrarPedido(this.idPedido).subscribe( result  => {
      console.log("Pedido borrado: ", pedido)
    });
    this.getPedidos();

  }
          
    
    
  
  

}
