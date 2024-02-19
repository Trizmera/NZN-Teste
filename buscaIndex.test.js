const { buscaLinearAlvo } = require('./index');

describe('Busca Linear', () => {
    it('deve encontrar o alvo na lista', () => {
        var arr = [-1, 0, 3, 5, 9, 12];
        var target = 9;
        var expectedIndex = 4;
        expect(buscaLinearAlvo(arr, target)).toBe(expectedIndex);
    });
    it('deve retornar -1 quando o valor não aparece na lista', () => {
        var arr = [-1, 0, 3, 5, 9, 12];
        var target = 2;
        expect((0, buscaLinearAlvo)(arr, target)).toBe(-1);
    });
    it('deve retornar -1 se a lista estiver vazia', () => {
        var arr = [];
        var target = 1;
        expect((0, buscaLinearAlvo)(arr, target)).toBe(-1);
    });
})