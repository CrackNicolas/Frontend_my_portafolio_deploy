export default interface Pasatiempo{
    id_pasatiempo:number;
    categoria:Categoria
    descripcion:string;
    nombre_logo:string;
}
export enum Categoria{
    "Deportes","Instrumento","Otros"
}