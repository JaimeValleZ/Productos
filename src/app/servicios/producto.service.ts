import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.apiRestURL + '/producto';


  constructor(private httpClient: HttpClient) { }



  public list(): Observable<Producto[]> {

    return this.httpClient.get<Producto[]>(this.productoURL);

  }
  public detalle(codigo: string): Observable<Producto> {

    return this.httpClient.get<Producto>(`${this.productoURL}/${codigo}`);

  }
  public crear(producto: Producto): Observable<any> {

    return this.httpClient.post<any>(this.productoURL, producto)

  }

  public update(producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(`${this.productoURL}/${producto.codigoProducto}`, producto);
  }
  
  public eliminar(codigo: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.productoURL}/${codigo}`);
  }

}
