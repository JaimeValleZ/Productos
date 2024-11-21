import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../servicios/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto: Producto | undefined;

  constructor(
    private productoService : ProductoService,
    private toast : ToastrService,
    private router: Router,
    private activatedRoute : ActivatedRoute



  ) { }

  ngOnInit(): void {
    this.getProducto();
  
  }

  getProducto() : void{
   
    const codigo = this.activatedRoute.snapshot.params.codigo;
    
    this.productoService.detalle(codigo).subscribe(
      data =>{
       
        this.producto = data;
       console.log(this.producto);
      
      
      },
     err => {


     }

    )


  }

}
