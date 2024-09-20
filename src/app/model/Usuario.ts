import { NivelEducacional } from "./nivel-educacional";
import { Persona } from "./persona";

export class Usuario extends Persona {

    public cuenta: string;
    public correo: string;
    public password: string;
    public preguntaSecreta: string;
    public respuestaSecreta: string;

    public constructor(
        cuenta: string,
        correo: string,
        password: string,
        preguntaSecreta: string,
        respuestaSecreta: string,
        nombre: string,
        apellido: string,
        nivelEduacional: NivelEducacional,
        fechaNacimiento: Date | undefined) {


        super();
        this.cuenta = cuenta;
        this.correo = correo;
        this.password = password;
        this.preguntaSecreta = preguntaSecreta;
        this.respuestaSecreta = respuestaSecreta;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nivelEducacional = nivelEduacional;
        this.fechaNacimiento = fechaNacimiento;
    }



    public buscarUsuarioValido(cuenta: string, password: string): Usuario | undefined {
        return Usuario.getListarUsuarios().find(
            usu => usu.cuenta === cuenta && usu.password === password);
    }


    public validarCuenta(): string {
        if (this.buscarUsuarioValido(this.cuenta, this.password)) {
            return '';
        }
        return 'Para ingresar al sistema debe introducir una cuenta con contraseña válidos'
    }


    public validarPassword(): string {
        if (this.password.trim() === '') {
            return 'Ingrese una contraseña.';
        }
        for (let i = 0; i < this.password.length; i++) {
            if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
                return 'La contraseña debe ser numérica';
            }
        }
        if (this.password.length !== 4) {
            return 'La contraseña debe ser numérica de 4 dígitos.';
        }
        return '';

    }

    public validarUsuario(): string {
        return this.validarCuenta() || this.validarPassword();

    }

    public getTextoNivelEducacional(): string {
        if (this.nivelEducacional) {
            return this.nivelEducacional.getTextoNivelEducacional();
        }
        return 'No asignado';
    }

    public validarNombreCuenta(): string {
        if (this.cuenta.trim() === '') {
            return 'Para ingresar al sistema debe introducir un usuario.';
        }
        if (this.cuenta.length < 1 || this.cuenta.length > 4) {
            return 'El nombre de de la cuenta debe tener entre 1 y 4 caracteres.';
        }
        return '';
    }


    public override toString(): string {
        return `       ${this.cuenta}
            ${this.correo}
            ${this.password}
            ${this.preguntaSecreta}
            ${this.respuestaSecreta}
            ${this.nombre}
            ${this.apellido}
            ${this.nivelEducacional.getTextoNivelEducacional()}
            ${this.formatDateDDMMYYYY(this.fechaNacimiento)}`;
    }


    public formatDateDDMMYYYY(date: Date | undefined): string {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `$/${month}/${year}`;
    }


    public static getListarUsuarios(): Usuario[] {
        return [
            new Usuario(
                'jvalenzuela',
                'jvalenzuela@duocuc.cl',
                '1234',
                '¿Cuál es tu videojuego favorito?',
                'Biomutant',
                'Juan',
                'Valenzuela',
                NivelEducacional.findNivelEducacionalById(6)!,
                new Date(2001, 0, 1)
            ),
            new Usuario(
                'bvaldebenito',
                'bvaldebenito@duocuc.cl',
                '4321',
                '¿Cuál es tu marca de auto preferida?',
                'Nissan',
                'Betsabé',
                'Valdebenito',
                NivelEducacional.findNivelEducacionalById(5)!,
                new Date(2002, 1, 1)
            ),
            new Usuario(
                'rnazario',
                'rnazario@duocuc.cl',
                '1245',
                'Cuál es tu país de origen?',
                'Argentina',
                'Ronaldo',
                'Nazario',
                NivelEducacional.findNivelEducacionalById(6)!,
                new Date(2000, 0, 1)
            ),
        ]
    }
}
