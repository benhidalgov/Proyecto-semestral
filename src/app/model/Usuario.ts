export class Usuario {
  public correo = '';
  public password = '';
  public nombre = '';
  public preguntaSecreta = '';
  public respuestaSecreta = '';

  constructor(
    correo: string,
    password: string,
    nombre: string,
    preguntaSecreta: string,
    respuestaSecreta: string
  ) {
    this.correo = correo;
    this.password = password;
    this.nombre = nombre;
    this.preguntaSecreta = preguntaSecreta;
    this.respuestaSecreta = respuestaSecreta;
  }

  // Lista de usuarios válidos, incluyendo el nuevo usuario permitido
  public listaUsuariosValidos(): Usuario[] {
    const lista: Usuario[] = [];

    lista.push(
      new Usuario('atorres@duocuc.cl', '1234', 'Ana Torres Leiva', '¿Cuál es tu animal favorito?', 'gato')
    );
    lista.push(
      new Usuario('jperez@duocuc.cl', '5678', 'Juan Pérez González', '¿Cuál es tu postre favorito?', 'panqueques')
    );
    lista.push(
      new Usuario('cmujica@duocuc.cl', '0987', 'Carla Mujica Sáez', '¿Cuál es tu vehículo favorito?', 'moto')
    );


    return lista;
  }

  // Método para buscar un usuario válido por correo y contraseña
  public buscarUsuarioValido(correo: string, password: string): Usuario | undefined {
    return this.listaUsuariosValidos().find(
      usuario => usuario.correo === correo && usuario.password === password
    );
  }

  public buscarUsuarioPorCorreo(correo: string): Usuario | undefined {
    return this.listaUsuariosValidos().find(
      usuario => usuario.correo === correo
    );
  }
}
