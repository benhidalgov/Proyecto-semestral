export class NivelEducacional {

    public id: number;
    public nombre: string;

    public constructor(id: number = 1, nombre: string = 'Básica incompleta') {
        this.id = id;
        this.nombre = nombre;
    }

    public setNivelEducacional(id: number, nombre: string): void {
        this.id = id;
        this.nombre = nombre;
    }

    public static getNivelesEducacionales(): NivelEducacional[] {
        return [
            new NivelEducacional(1, 'Básica incompleta'),
            new NivelEducacional(2, 'Básica completa'),
            new NivelEducacional(3, 'Media incompleta'),
            new NivelEducacional(4, 'Media completa'),
            new NivelEducacional(5, 'Superior incompleta'),
            new NivelEducacional(6, 'Superior completa'),
        ];
    }

    public getTextoNivelEducacional(): string {
        return `${this.id} - ${this.nombre}`;
    }

    public static findNivelEducacionalById(id: number): NivelEducacional | undefined {
        return NivelEducacional.getNivelesEducacionales().find(n => n.id === id);
    }
}
