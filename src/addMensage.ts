import { AsciiArtSayConfig, Options } from "./interfaces/config";
import { centerText } from "./utils/centerText";

/**
 * Appends an array of messages to the right side of the given ASCII art.
 *
 * Each message is aligned with the corresponding line of the art. If a message exceeds the maximum width,
 * it will be truncated. If a message is shorter than the maximum width, it will be centered within that field.
 * Should there be more messages than lines in the art, the additional messages will be appended below,
 * maintaining the same spacing.
 *
 * @param {AsciiArtSayConfig} config - Configuration object containing:
 *   - {string} asciiArtPath - Path to the ASCII art file.
 *   - {string} [asciiArt] - The ASCII art as a string (with line breaks).
 *   - {string[]} messages - Array of messages to display beside the art (one per line).
 *   - {Options} [options] - Optional settings:
 *       - {number} padding - Number of spaces between the art and the message (default: 2).
 *       - {number} maxMessageWidth - Maximum width of each message (default: 50).
 *
 * @returns {string} The modified ASCII art with the messages added to the right.
 */
export function addMessagesToArt(config: AsciiArtSayConfig): string {
  const { asciiArt, messages, options } = config;
  const { padding, maxMessageWidth } = options as Options;

  const artLines = asciiArt!.split("\n");

  const artMaxWidth = Math.max(...artLines.map((line) => line.length));

  const truncatedMessages = messages.map((msg) =>
    msg.length > maxMessageWidth
      ? msg.substring(0, maxMessageWidth - 3) + "..."
      : msg
  );

  const centeredMessages = truncatedMessages.map((msg) =>
    centerText(msg, maxMessageWidth)
  );

  const numLines = Math.max(artLines.length, centeredMessages.length);
  const resultLines: string[] = [];

  for (let i = 0; i < numLines; i++) {
    let artLine = i < artLines.length ? artLines[i] : " ".repeat(artMaxWidth);
    artLine = artLine.padEnd(artMaxWidth, " ");
    const msg = i < centeredMessages.length ? centeredMessages[i] : "";
    if (msg) {
      artLine = artLine + " ".repeat(padding) + msg;
    }
    resultLines.push(artLine);
  }

  return resultLines.join("\n");
}
