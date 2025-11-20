# Lexical HTML Sandbox

A feature-rich Markdown editor sandbox built with [Lexical](https://lexical.dev/), [React](https://react.dev/), and [Vite](https://vitejs.dev/). Deployed automatically to GitHub Pages.

## Features

- **Rich Text Editing**: Supports headings, lists, quotes, code blocks, and links.
- **Markdown Support**: Full Markdown shortcut support (e.g., `#` for headings, `*` for lists).
- **Toolbar**: Intuitive toolbar with icons for Bold, Italic, Underline, Code, and Download.
- **Local Save**:
  - **Auto Save**: Content is automatically saved to your browser's local storage.
  - **Download**: Export your content as a Markdown (`.md`) file.
- **Debugging Tools**: Integrated **Tree View** to visualize the underlying Lexical node structure.
- **Responsive Design**: Clean and modern UI styled with CSS.

## Demo

[Live Demo](https://watanabe3tipapa.github.io/lexical-html/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/watanabe3tipapa/lexical-html.git
   cd lexical-html
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/lexical-html/`.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
