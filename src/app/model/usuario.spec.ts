
import { Usuario } from './Usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    const usuario = new Usuario(
      'atorres@duocuc.cl',
      '1234',
      'Ana Torres Leiva',
      '¿Cuál es tu animal favorito?',
      'gato'
    );
    expect(usuario).toBeTruthy();
  });
});
