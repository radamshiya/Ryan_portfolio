# Inline Images Guide

## How to Add Floating Images to Project Pages

You can now add images that float alongside text on desktop and stack on mobile.

## Usage

### Float Right (Image on right, text wraps on left)

```markdown
<figure class="float-right">
  <img src="/images/your-image.png" alt="Descriptive alt text" />
  <figcaption>Optional caption text</figcaption>
</figure>

Your paragraph text here will wrap around the image on desktop screens...
```

### Float Left (Image on left, text wraps on right)

```markdown
<figure class="float-left">
  <img src="/images/your-image.png" alt="Descriptive alt text" />
  <figcaption>Optional caption text</figcaption>
</figure>

Your paragraph text here will wrap around the image on desktop screens...
```

## Behavior

- **Mobile (< 768px)**: Images display full-width, stacked above/below text
- **Desktop (≥ 768px)**: Images float at 45% width with text wrapping around them
- **Captions**: Optional, styled in italic with muted color
- **Images**: Automatically sized with rounded corners

## Tips

1. **Placement**: Add the figure right before the paragraph you want to wrap
2. **Alt Text**: Always include descriptive alt text for accessibility
3. **Captions**: Use captions to provide context, not just repeat the alt text
4. **Image Paths**: Use `/images/filename.png` - the base path is automatically added for GitHub Pages
5. **Image Size**: Images will be automatically resized, but use reasonably sized originals (recommend 800-1200px wide)
6. **Text Length**: Works best with at least 2-3 paragraphs of text for proper wrapping

## Example in Practice

See `/src/content/projects/01-workshop.md` for a working example in the "Approach" section.
