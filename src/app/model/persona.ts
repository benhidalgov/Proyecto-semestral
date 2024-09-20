import { NivelEducacional } from "./nivel-educacional";

export class Persona {

    public nombre: string;
    public apellido: string;
    public nivelEducacional: NivelEducacional;
    public fechaNacimiento: Date | undefined;

    public constructor(){
        this.nombre = '';
        this.apellido = '';
        this.nivelEducacional = NivelEducacional.findNivelEducacionalById(1)!;
        this.fechaNacimiento = new Date();
    }

    



}
