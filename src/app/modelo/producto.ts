export class Producto {


    codigoProducto: string;
    nombreProducto:string;
    descripcionProducto:string;
    precio: string;
    stock!: number;

    constructor( codigoProducto:string,nombreProducto:string,descripcionProducto:string,precio: string,stock: number){

        this.codigoProducto= codigoProducto;
        this.nombreProducto= nombreProducto;
        this.descripcionProducto= descripcionProducto;
        this.precio= precio;
        this.stock= stock;
    }

}
