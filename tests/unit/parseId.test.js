// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");
describe("parseId", () => {
// Para testar ERRO, o expect recebe uma função: () => ...
it("lança ValidationError quando o id não é número", () => {
expect(() => parseId("abc")).toThrow(ValidationError);
});
// DESAFIO: escrevam aqui um teste para a pergunta abaixo
// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
  it("deve retornar o ID se for válido", () => {
    expect(parseId("1")).toBeDefined();
  });

  it("deve lançar ValidationError se for inválido", () => {
    expect(() => parseId(null)).toThrow(ValidationError);
  });
});

});