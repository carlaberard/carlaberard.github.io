# Carla Berard González — Biomedical Engineering Portfolio

A free, static GitHub Pages website for displaying projects in biomedical engineering, AI, neuroimaging and robotics.

## Publish in 5 steps (no coding required)

1. Extract this ZIP on your computer.
2. Open `assets/data/config.js` in Notepad or VS Code and replace `carlaberard` with your actual GitHub username. Save.
3. Optional: add your email and LinkedIn in the same file. To enable CV download, put your PDF at `assets/CV.pdf` and set `showCVButton: true`.
4. In GitHub, create a **public** repository named `carlaberard.github.io` (the exact username you use on GitHub). Do **not** generate a README in GitHub: one is included here.
5. Upload the **contents of this folder** into that repository (not the ZIP file and not the outer folder). In **Settings → Pages**, choose **Deploy from a branch → main → /(root)** and save. In up to 10 minutes, visit `https://carlaberard.github.io`.

Official guide: https://docs.github.com/en/pages/quickstart

## Before uploading

- The **`index.html` must be at repository root**, alongside `project.html`, `assets/`, and `README.md`.
- Repository buttons only activate after you fill the username. These are links, not copies of your full project files.
- The 12 repository names are the suggestions used in this chat. If your repositories have different names, edit the relevant `repo` fields in `assets/data/projects.js`.
- The project illustrations are original schematic illustrations included with this site. They are *not actual medical images or robot result photographs*.
- Your email and LinkedIn are blank by default. Add only the contact information you are comfortable publishing.
- The site displays academic project results and their limitations rather than claiming validated clinical performance. Check project claims, group attribution and permission to share any extra images before publishing.

## Customize content

- Profile headline and About: edit `index.html` in Notepad/VS Code.
- Portfolio project details: edit `assets/data/projects.js`.
- Website colors and typography: edit `assets/style.css`.
- Each project case study is rendered at `project.html?id=PROJECT_ID`.
- Preview offline: double-click `index.html` after extracting the ZIP.

Built with HTML, CSS and JavaScript; no paid tools, no build process and no subscription required.

## Blue & white design edition

This version uses a minimalist blue-and-white visual identity: white and pale-blue sections, deep navy type, cobalt highlights, subtle project-card hover effects, and recolored original schematics.

To switch to a different blue, edit the `--blue` variable and the `.btn-primary` styles at the end of `assets/style.css`. No paid themes or hosting are required.


## Homepage update (v2)

The homepage now uses a single-column hero with no right-hand dark illustration. The main headline is “From data to devices. Engineering for people.” To change it, edit the `<h1>` in `index.html`.


## Homepage update (v3)

The hero headline is now “Interested in the technology behind better movement.” To edit it, change the `<h1>` inside `index.html`.


## Homepage update (v4)

The hero headline now covers engineering, neuroscience and healthcare instead of focusing exclusively on movement. The introduction, About section and contact text are also broadened to reflect interests in neurotechnology and rehabilitation.

## Original photo header collage
The homepage now contains a photo collage beneath the introduction. All photos in `assets/header-photos/` are **unaltered, byte-for-byte copies** of the photographs supplied by the portfolio owner. The layout is created in HTML/CSS; photos are displayed in their entirety via `object-fit: contain` (never cropped or retouched). Editing the original photos is not needed.


## Custom project photographs (pending Carla’s selection)

The homepage now shows **only “Explore my projects”**, without the “More about me” button.

Every project in `assets/data/projects.js` now contains a `photo` property. It is blank until Carla chooses and uploads an original photograph for that specific project. Existing illustrations remain as temporary previews; each chosen original photo will replace the illustration in both the project card and its detail page. Original image files are to be preserved without retouching.

Place the chosen image in `assets/project-photos/` and update the relevant `photo` field with its path.

## Homepage name and badge update
The small `Biomedical Engineer · Barcelona` badge above the hero heading was removed.
The displayed name was updated to `Carla Berard González` in the header, footer and page titles.
The homepage retains only the `Explore my projects` hero button.


## Individual project image update (in progress)

- Projects **1–9** now use the original source images chosen by Carla, unchanged byte-for-byte.
- The two segmentation visuals from the same upload are preserved: the four-panel MRI capture is the visible cover for project 5, and `assets/project-photos/mri-segmentation-2d-alternative.png` is also included (not shown in the website).
- Still pending: photos for projects **10, 11 and 12** (UR3e pick-and-place, UR3e force feedback, UR3/UR3e collaboration). Their existing illustrations remain until the original pictures are received.
- Images are shown uncropped (`object-fit: contain`) without filters or zoom; the original files are never resaved or altered.
- On GitHub Pages, upload the *contents* of the ZIP into repository root, or update just `assets/data/projects.js`, `assets/style.css`, `assets/site.js`, `project.html`, and the new files under `assets/project-photos/`.


### Latest update

Added the Pulse Oximeter embedded electronics project and a user-provided original photograph, and set the UR3 + UR3e Collaborative Robotics project to its original two-robot photograph. The pulse oximeter project has no public repository link until one is supplied. Two robotics projects (UR3e pick-and-place and UR3e force-feedback) still use existing illustrations pending user photographs.


## New projects added on 2026-11-06

- **Hodgkin–Huxley Neuron Modelling** (`project.html?id=hodgkin-huxley-neuron`)
- **EEG Sleep Spectral Analysis** (`project.html?id=eeg-sleep-spectral`)
- **ECG PVC Detection & Analysis** (`project.html?id=ecg-pvc-detection`)

All three card and case-study images are unaltered copies of the original uploaded PNG files. They are in `assets/project-photos/`. These three projects do not claim a GitHub source repository: their repository buttons remain disabled until a corresponding public repository is explicitly added.

To update an already published GitHub Pages website, extract `biomedical-portfolio-16-projects-update-only.zip` and upload its **contents** directly into the root of `carlaberard.github.io` using **Add file → Upload files → Commit changes**, replacing existing files when prompted. If you have not yet uploaded the preceding 13-project version, use the complete ZIP instead.
