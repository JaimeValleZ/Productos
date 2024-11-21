import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Producto } from '../modelo/producto';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  codigo!: string;
  nombreProducto!: string;
  descripcionProducto!: string;
  precio!: string;
  stock!: number;

  constructor(
    private productoService: ProductoService,
    private toast: ToastrService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
   const producto = new Producto(this.codigo,this.nombreProducto,this.descripcionProducto,this.precio,this.stock); 
   console.log(producto);
   this.productoService.crear(producto).subscribe(
    data =>{
    this.toast.success(data.message,"OK",{timeOut: 3000,positionClass:'toast-top-center'});
    this.router.navigate(['']);
    },
    error=>{
      this.toast.error(error.error.message,"Error",{timeOut: 3000,positionClass:'toast-top-center'});

    }

   );
    



  }

}
