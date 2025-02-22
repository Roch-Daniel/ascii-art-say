export interface Options {
  padding: number;
  maxMessageWidth: number;
}

export interface AsciiArtSayConfig {
  asciiArtPath: string;
  asciiArt?: string;
  messages: string[];
  options?: Options;
}
