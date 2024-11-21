import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {


  producto: Producto = new Producto('', '', '', '', 0); 

  constructor(
    private productoService: ProductoService, 
    private activatedRoute: ActivatedRoute,  
    private toast: ToastrService, 
    private router: Router  
  ) { }

  ngOnInit(): void {
    const codigo = this.activatedRoute.snapshot.params['codigo']; 
    console.log('Código recibido:', codigo);  
    this.getProducto(codigo); 
  }

  
  getProducto(codigo: string): void {
    this.productoService.detalle(codigo).subscribe(
      data => {
        console.log('Producto recibido:', data);
        this.producto = data;  
      },
      err => {
        this.toast.error('Error al cargar el producto', 'Error', { timeOut: 3000 });
      }
    );
  }

  
  onUpdate(): void {
     
    
    this.productoService.update(this.producto).subscribe(
      data => {
       
        this.toast.success('Producto actualizado correctamente', 'Éxito', { timeOut: 3000 });
        this.router.navigate(['/']);  
      },
      err => {
        
        this.toast.error('Error al actualizar el producto', 'Error', { timeOut: 3000 });
      }
    );
  }
}
