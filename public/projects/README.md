# Project image folders

Drop your images in here. Each project has its own folder, named after its `slug`.

```
public/projects/
  4-knotts-stationery/
  omega/
  vriksh/
  accd/
```

## What to add in each project folder

| File / folder         | Used for                                                              | Recommended size              |
| --------------------- | --------------------------------------------------------------------- | ----------------------------- |
| `logo.png`            | Logo shown on the tile (home page) + on the showcase hero             | PNG/SVG, transparent, 600×600 |
| `cover.jpg`           | Background image of the home-page tile + the showcase hero            | 1920×1200, JPG                |
| `preview.mp4`         | **Screen-recording of your live website that plays inside the LAPTOP** | 1920×1080 (16:9), .mp4/.webm  |
| `preview-mobile.mp4`  | Screen-recording that plays inside the PHONE (portrait)               | 1080×2340 (9:19.5), .mp4/.webm|
| `gallery/*.jpg`       | "A closer look" gallery on the showcase page                          | 1600×1000 (wide) / square     |
| `preview/*.jpg`       | (Fallback) stacked screenshots that auto-scroll inside the mockups    | 1280px wide, any height       |
| `instagram/*.jpg`     | **Posts for the dummy Instagram page shown inside the PHONE**          | square, 1080×1080             |

### Dummy Instagram page (phone)

Drop your post images in `instagram/` (named `01.jpg`, `02.jpg`, …). The phone
then shows a fake Instagram profile that **auto-opens the posts on a loop** —
great for a screen recording. The avatar uses your `logo.png`.

Optional profile text — set these in `src/lib/data.ts` on the project:
`instagramHandle`, `instagramName`, `instagramBio`, `instagramFollowers`,
`instagramFollowing`. If omitted, sensible defaults are used.

**What plays inside the PHONE screen, in priority order:**
1. `preview-mobile.mp4` (mobile screen recording) — if present
2. `instagram/*.jpg` (dummy Instagram profile) — if present
3. `preview/*.jpg` stacked screenshots — if present
4. the built-in animated placeholder — default

**What plays inside the laptop screen, in priority order:**
1. `preview.mp4` (your real website recording) — if present
2. `preview/*.jpg` stacked screenshots (auto-scroll) — if present
3. the built-in animated placeholder website — default

You can add **any number** of images — just drop them into `gallery/` and `preview/`. Then list them in **`src/lib/data.ts`** under the matching project (see fields `logoImage`, `coverImage`, `gallery[].src`, `previewImages`).

## Naming convention (recommended)

Numbered, zero-padded, so they sort cleanly:

```
4-knotts-stationery/
  logo.png
  cover.jpg
  gallery/
    01.jpg
    02.jpg
    03.jpg
    04.jpg
  preview/
    01.jpg     # top of the auto-scrolling website (e.g. hero screenshot)
    02.jpg     # next section down
    03.jpg
    04.jpg     # bottom of the page (e.g. footer)
```

If you don't add any images, the site falls back to the hand-built gradient placeholders that ship by default — so you can roll out images one project at a time.
