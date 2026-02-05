# AI 101 for Content Creators

An interactive web-based presentation explaining how Large Language Models work in beginner-friendly terms.

**Live Demo**: [View Presentation](https://YOUR_USERNAME.github.io/ai-presentation/)

## About

This presentation was created for an AI 101 Live Workshop aimed at content creators who are curious about AI but may feel overwhelmed by technical jargon.

**Core philosophy**: "You don't need to be an engineer to be a good driver, but understanding the basics helps."

## Slides

1. **Welcome & The Driver Analogy** - Setting the tone with a relatable analogy
2. **The AI Landscape** - Overview of AI types (Language, Image, Audio, Video)
3. **The Simple Truth** - What is an LLM? Sophisticated autocomplete explained
4. **How AI Reads Your Message** - Tokens, pricing, and limits
5. **The Generation Game** - Word-by-word generation and hallucinations
6. **The Memory Problem** - Context windows and why AI "forgets"
7. **The Art of Prompting** - Practical prompting techniques
8. **Real Use Cases for Creators** - What AI excels at vs. keep human
9. **Key Takeaways** - Summary and mindset shift

## Tech Stack

- **React** + TypeScript
- **Vite** for development and building
- **Spectacle** for presentation framework
- **Framer Motion** for animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Opens at [http://localhost:5000](http://localhost:5000)

## Navigation

| Key | Action |
|-----|--------|
| `→` / `↓` | Next slide |
| `←` / `↑` | Previous slide |
| `F` | Toggle fullscreen |

## Deployment

This project is configured for GitHub Pages with automatic deployment via GitHub Actions.

Every push to `main` triggers a build and deploy to GitHub Pages.

### Manual Deployment

```bash
npm run build
# Deploy the `dist/` folder to your hosting provider
```

## Project Structure

```
src/
├── App.tsx                 # Main app with Deck setup
├── components/
│   └── NavigationBar.tsx   # Progress bar and controls
├── slides/                 # Individual slide components
│   ├── TitleSlide.tsx
│   ├── AILandscapeSlide.tsx
│   └── ...
└── styles/
    ├── theme.ts            # Color palette and fonts
    └── global.css
```

## Documentation

See [docs/SLIDES_OUTLINE.md](docs/SLIDES_OUTLINE.md) for detailed content outline, speaker notes, and design guidelines.

## License

MIT
