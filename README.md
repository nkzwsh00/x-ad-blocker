# X Ad Blocker

A Chrome extension to hide promoted/ad posts on X (formerly Twitter).

## Features

- Automatically hides promoted posts and advertisements on X
- Works with both x.com and twitter.com
- Supports Japanese and English ad labels
- Monitors for new content (infinite scroll)

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the `x-ad-blocker` directory

## How It Works

The extension uses a content script that:
- Scans all tweets on the page
- Identifies promoted content by looking for:
  - "Promoted" text
  - "プロモーション" (Japanese)
  - "広告" (Japanese for advertisement)
  - Placement tracking elements
- Hides identified ads by setting `display: none`
- Continuously monitors the page for new content

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that detects and hides ads

## Privacy

This extension:
- Runs only on x.com and twitter.com
- Does not collect or transmit any data
- Does not require any special permissions
- All processing happens locally in your browser

## License

MIT
