# AI Visual Labs – Portfolio Website

A clean, responsive, and professional portfolio website built to showcase AI-generated visual projects, featuring advanced image/video workflows using ComfyUI, SDXL, ControlNet, LoRA, and SadTalker.

---

## 🌟 Project Overview

**AI Visual Labs** is an independently developed digital portfolio site designed to present real-world, production-grade generative AI outputs with a focus on:

- AI image synthesis (Stable Diffusion, SDXL)
- Real-time video lip-sync (SadTalker/OpenTalker)
- Workflow automation and content generation
- Future-facing branding, SEO, and monetization

This website is meant for recruiters, hiring managers, and collaborators to explore the technical and creative depth behind modern generative AI workflows.

---

## 🔧 Tech Stack

| Frontend | Libraries/Tools | Hosting |
|----------|-----------------|---------|
| HTML5, CSS3, Bootstrap 5 | Google Fonts (Poppins), JS (Bootstrap Bundle), GitHub Pages | Static Hosting (GitHub Pages or S3) |

---

## 🧠 Key Features

- **Hero Section** with headline and CTA resume download
- **About Section** with detailed background of AI content generation process
- **Responsive Image Showcase** with hover zoom and lightbox-ready layout
- **AI Workflow Diagram** section showing visualized pipeline
- **Professional Footer** with LinkedIn, GitHub, and Email links
- **Modern UI/UX** with gradients, rounded corners, and mobile-first responsiveness

---

## 📁 Folder Structure

```
/assets
  └── sample1.jpg
  └── sample2.jpg
  └── workflow-diagram-landscape.png
index.html
resume.pdf
README.md
```

---

## 🖼️ Image Showcase Guide

To update your portfolio images:

1. Add images to the `/assets` folder
2. Replace the `<img src="assets/sampleX.jpg">` in the `Showcase` section
3. Add descriptive `alt` tags and optional captions for SEO and accessibility

---

## 🧪 AI Workflow Overview

The visuals shown on this site are generated using a multi-stage pipeline:

```
Prompt → ControlNet (Depth/Hand Pose) → LoRA (Style/Subject) → SDXL Render → GFPGAN / Inpainting → SadTalker (Optional Video) → Final Output
```

Automation scripts were developed in Python for batch processing and optimization on CUDA-capable GPUs.

---

## 📥 Resume Download

Ensure your latest resume is saved as `resume.pdf` in the root directory.  
The "Download Resume" button is linked to automatically download this file.

---

## 🚀 Deployment Instructions

You can host this site via:

### GitHub Pages

```bash
git clone https://github.com/yourusername/ai-visual-labs.git
cd ai-visual-labs
git add .
git commit -m "Initial commit"
git push origin main
# Then enable GitHub Pages under repo settings
```

### AWS S3 (Optional)

- Upload all files to an S3 bucket
- Enable static website hosting
- Set index.html as the entry point

---

## 📌 Author

**Khushal Sehrawat**  
[LinkedIn](https://www.linkedin.com/in/khushalsehrawat/) | [GitHub](https://github.com/khushalsehrawat)

---

## 📃 License

Develop & Maintained by - www.thebenzzcreations.com

This project is licensed under the MIT License. Feel free to reuse and modify for your personal portfolio.
