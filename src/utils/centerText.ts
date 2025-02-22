/**
 * Centers a text within a fixed-width field.
 * If the text is shorter than the width, it adds spaces to the left and right.
 *
 * @param text - The text to be centered.
 * @param width - The width of the field.
 * @returns The text centered in a field of width 'width'.
 */
export function centerText(text: string, width: number): string {
  const left = Math.floor((width - text.length) / 2);
  const right = width - text.length - left;
  return " ".repeat(left) + text + " ".repeat(right);
}
