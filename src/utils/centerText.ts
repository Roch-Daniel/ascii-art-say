/**
 * Centraliza um texto em um campo com largura fixa.
 * Se o texto for menor que a largura, adiciona espaços à esquerda e direita.
 *
 * @param text - O texto a ser centralizado.
 * @param width - A largura do campo.
 * @returns O texto centralizado em um campo de largura 'width'.
 */
export function centerText(text: string, width: number): string {
  const left = Math.floor((width - text.length) / 2);
  const right = width - text.length - left;
  return " ".repeat(left) + text + " ".repeat(right);
}
