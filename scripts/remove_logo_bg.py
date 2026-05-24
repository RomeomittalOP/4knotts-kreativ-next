"""
Remove the white / near-white background from each project's logo.png and
write a transparent PNG in place. Originals are backed up to logo-original.png
(only once) so the operation is reversible / re-runnable.

Run from the project root:
    python scripts/remove_logo_bg.py
"""
import os
import sys
import numpy as np
from PIL import Image

# Tuning knobs ---------------------------------------------------------------
HI = 244          # min-channel >= HI  -> treat as pure background (fully transparent)
LO = 198          # min-channel <= LO  -> keep fully opaque
SAT_FLOOR = 12    # saturation <= this counts as fully colorless (cream/off-white)
SAT_MAX = 48      # colored pixels (saturation above this) are always kept
# ---------------------------------------------------------------------------

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "projects")


def process(path: str) -> bool:
    im = Image.open(path).convert("RGBA")
    arr = np.asarray(im).astype(np.float32)
    r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

    mn = np.minimum(np.minimum(r, g), b)   # how dark the darkest channel is
    mx = np.maximum(np.maximum(r, g), b)
    sat = mx - mn                          # rough saturation / colorfulness

    # "whiteness" 0..1 : 1 where brighter than HI, 0 where darker than LO
    whiteness = np.clip((mn - LO) / float(HI - LO), 0.0, 1.0)
    # "colorless" 0..1 : 1 for gray/white/cream pixels, 0 for saturated colors.
    # Saturation at or below SAT_FLOOR is treated as fully colorless so that
    # off-white / cream backgrounds erase completely.
    colorless = np.clip(
        (SAT_MAX - sat) / float(SAT_MAX - SAT_FLOOR), 0.0, 1.0
    )

    remove = whiteness * colorless          # how much to erase this pixel
    new_a = a * (1.0 - remove)

    out = arr.copy()
    out[..., 3] = new_a
    Image.fromarray(out.astype(np.uint8), "RGBA").save(path)
    return True


def main() -> int:
    if not os.path.isdir(ROOT):
        print("projects folder not found:", ROOT)
        return 1
    count = 0
    for slug in sorted(os.listdir(ROOT)):
        logo = os.path.join(ROOT, slug, "logo.png")
        if not os.path.isfile(logo):
            continue
        backup = os.path.join(ROOT, slug, "logo-original.png")
        # Always work from the pristine original so re-runs don't compound.
        if not os.path.exists(backup):
            Image.open(logo).save(backup)
        Image.open(backup).save(logo)  # restore original before processing
        process(logo)
        print(f"  cleaned: {slug}/logo.png")
        count += 1
    print(f"done — {count} logo(s) processed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
