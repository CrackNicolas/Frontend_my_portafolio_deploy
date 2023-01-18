export default interface Habilidad{
    id_habilidad:number;
    nombre:string;
    porcentaje:number;
    nombre_icono:string;
    tipo:Tipo;
    estado:Estado;
}
export enum Tipo{
    "blanda","tecnica","gestion_de_proyecto","controlador_de_versiones"
}
export enum Estado{
    "uso_actual","uso_antiguo"
}