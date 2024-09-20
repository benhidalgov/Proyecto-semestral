import { Usuario } from './Usuario';
import { NivelEducacional } from './nivel-educacional';

describe('Usuario', () => {
  it('debería crear una instancia', () => {
    const nivelEducacional = NivelEducacional.findNivelEducacionalById(1)!; // Find a valid NivelEducacional instance
    const usuario = new Usuario(
      'jvalenzuela',
      'jvalenzuela@duocuc.cl',
      '1234',
      '¿Cuál es tu videojuego favorito?',
      'Biomutant',
      'Juan',
      'Valenzuela',
      nivelEducacional,
      new Date(2001, 0, 1)
    );
    expect(usuario).toBeTruthy(); // Expect it to be truthy
  });
});