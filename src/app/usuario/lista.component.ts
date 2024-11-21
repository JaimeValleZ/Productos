import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


productos : Producto[]= [];

  constructor(
    private productoService : ProductoService,
    private toast : ToastrService 
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos():void{
this.productoService.list().subscribe(
data =>{
 this.productos = data;
console.log(this.productos);
  
},
err =>{

}
 


);



  }
  eliminarProducto(codigo: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productoService.eliminar(codigo).subscribe(
        () => {
          this.toast.success('Producto eliminado correctamente', 'Éxito', { timeOut: 3000 });
          this.getProductos();
        },
        err => {
          this.toast.error('Error al eliminar el producto', 'Error', { timeOut: 3000 });
        }
      );
    }
  }
}
