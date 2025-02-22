import * as fs from "fs";
import * as path from "path";
import { addMessagesToArt } from "./addMensage";
import { AsciiArtSayConfig } from "./interfaces/config";

const defaultConfig: AsciiArtSayConfig = {
  asciiArtPath: "../default-ascii-art.txt",
  asciiArt: "",
  messages: ["Default message, try again!"],
  options: { padding: 2, maxMessageWidth: 30 },
};

function loadUserConfig(): AsciiArtSayConfig {
  const configPath = path.join(process.cwd(), "ascii-art-say.config.json");
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(
        fs.readFileSync(configPath, "utf8")
      ) as AsciiArtSayConfig;

      config.asciiArt = loadAsciiArt(config);
      return config;
    } catch (error) {
      throw new Error(`Error reading config file, ${error}`);
    }
  }
  const asciiArtDefault = path.join(__dirname, defaultConfig.asciiArtPath);
  defaultConfig.asciiArt = fs
    .readFileSync(asciiArtDefault, "utf8")
    .replace(/\r\n/g, "\n");
  return defaultConfig;
}

function loadAsciiArt(config: AsciiArtSayConfig): string {
  try {
    if (config?.asciiArtPath) {
      const userArtPath = path.resolve(process.cwd(), config.asciiArtPath);
      if (fs.existsSync(userArtPath)) {
        const asciiArt = fs.readFileSync(userArtPath, "utf8");
        return asciiArt.replace(/\r\n/g, "\n");
      } else {
        console.error(`File art ASCII not found in: ${userArtPath}`);
      }
    }
    const defaultAsciiArt = path.join(__dirname, defaultConfig.asciiArtPath);
    if (fs.existsSync(defaultAsciiArt)) {
      return fs.readFileSync(defaultAsciiArt, "utf8").replace(/\r\n/g, "\n");
    }
    return "[Default ASCII art not found]";
  } catch (error) {
    console.error("Error read file:", error);
    throw new Error(`Error reading ASCII art file, ${error}`);
  }
}

function init() {
  const config = loadUserConfig();
  const result = addMessagesToArt(config);
  console.log(result);
}

init();

export { init };
