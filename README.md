# ascii-art-say

**ascii-art-say** is a CLI library that displays custom ASCII art along with startup messages. When your project starts, the library automatically loads a configuration file from your project’s root and displays the ASCII art and messages as specified. If you don’t provide your own configuration, default settings will be used.

## Features

- **Custom ASCII Art:** Display your own ASCII art by providing an external file.
- **Custom Messages:** Provide an array of messages to be shown alongside the art.
- **Formatting Options:** Configure padding and maximum message width for proper alignment.
- **Automatic Initialization:** The library loads its configuration and displays the startup message automatically when imported.

## Installation

Install the library via npm:

```bash
npm install ascii-art-say
```

## Configuration

To customize the display, create the following files in your project’s root:

1. **Configuration File:** `ascii-art-say.config.json`
2. **ASCII Art File:** `ascii-art.txt`

### Example: ascii-art-say.config.json

This file should specify the path to your ASCII art file, an array of messages, and the formatting options:

```json
{
  "asciiArt": "",
  "asciiArtPath": "./ascii-art.txt",
  "messages": [
    "Hello my friend! Welcome on board!",
    "This is your ASCII image!",
    "enjoy!"
  ],
  "options": {
    "padding": 2,
    "maxMessageWidth": 35
  }
}
```

- **asciiArtPath:** Relative path (from your project root) to the ASCII art file.
- **messages:** Array of messages to be displayed alongside the ASCII art.
- **options.padding:** Number of spaces between the art and the messages.
- **options.maxMessageWidth:** Maximum width allowed for each message (messages longer than this will be truncated).

### Example: ascii-art.txt

Create a file named `ascii-art.txt` containing your full ASCII art. For example:

```
⠄⠄⠄⠄⣠⣴⣿⣿⣿⣷⣦⡠⣴⣶⣶⣶⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⣴⣿⣿⣫⣭⣭⣭⣭⣥⢹⣟⣛⣛⣛⣃⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⣠⢸⣿⣿⣿⣿⢯⡓⢻⠿⠿⠷⡜⣯⠭⢽⠿⠯⠽⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣼⣿⣾⣿⣿⣿⣥⣝⠂⠐⠈⢸⠿⢆⠱⠯⠄⠈⠸⣛⡒⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣿⣿⣿⣿⣿⣿⣿⣶⣶⣭⡭⢟⣲⣶⡿⠿⠿⠿⠿⠋⠄⠄⣴⠶⠶⠶⠶⠶⢶⡀
⣿⣿⣿⣿⣿⢟⣛⠿⢿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⢰⠇⠄⠄⠄⠄⠄⠈⣧
⣿⣿⣿⣿⣷⡹⣭⣛⠳⠶⠬⠭⢭⣝⣛⣛⣛⣫⣭⡥⠄⠸⡄⣶⣶⣾⣿⣿⢇⡟
⠿⣿⣿⣿⣿⣿⣦⣭⣛⣛⡛⠳⠶⠶⠶⣶⣶⣶⠶⠄⠄⠄⠙⠮⣽⣛⣫⡵⠊⠁
⣍⡲⠮⣍⣙⣛⣛⡻⠿⠿⠿⠿⠿⠿⠿⠖⠂⠄⠄⠄⠄⠄⠄⠄⠄⣸⠄⠄⠄⠄
⣿⣿⣿⣶⣦⣬⣭⣭⣭⣝⣭⣭⣭⣴⣷⣦⡀⠄⠄⠄⠄⠄⠄⠠⠤⠿⠦⠤⠄⠄
```

You can use any ASCII art you prefer—just ensure the path in your configuration file points to the correct file.

## Usage

Simply import the library into your code, and the display will happen automatically:

```typescript
import "ascii-art-say"; // The ASCII art and messages will be displayed automatically
```

There is no need to call any additional functions, as the library handles all configuration upon import.

## How It Works

When you run your project, **ascii-art-say** will:

1. Look for a configuration file named `ascii-art-say.config.json` in your project's root (the directory where you run the command).
2. Load the configuration, which includes the path to your ASCII art file, an array of messages, and formatting options.
3. Read the ASCII art from the specified file. If the file is not found in your project, it falls back to the default art bundled with the library.
4. Format the art and messages based on your options (e.g., padding, maximum message width, centering).
5. Display the resulting output on the console as a startup message.

## Contribution

Contributions are welcome! If you have ideas for new features, templates, or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

---
