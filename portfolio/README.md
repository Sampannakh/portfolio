# Photography Portfolio Website

A clean, modern, and visually stunning portfolio website for photographers and videographers built with HTML, CSS, and JavaScript.

## Features

- 📱 Fully responsive design that works beautifully on all devices
- 🎨 Elegant and professional UI with smooth animations
- 📸 Showcase for photography, videography, and cinematography work
- 🔍 Portfolio filtering by content type
- 🎬 Visual storytelling focused layout
- 📊 Skills visualization with progress bars
- 📝 Contact form for client inquiries
- 🔗 Social media integration for platforms photographers use (Instagram, YouTube, Vimeo, Behance)
- 🔄 Smooth scrolling navigation
- ⬆️ Back to top button
- 🍔 Mobile-friendly navigation menu

## Preview

![Portfolio Website Preview](https://placehold.co/1200x600/111827/ca8a04?text=Photography+Portfolio)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)
- Image editing software like Photoshop, GIMP, or any online image editor (for preparing your photos)

### Installation

1. Clone the repository or download the ZIP file
2. Extract the files to your desired location
3. Open the `index.html` file in a web browser to view the website

## How to Add Images

### Folder Structure for Images

Images should be organized in the `assets/images` folder:

```
portfolio/
├── assets/
│   ├── images/            # Main images folder
│   │   ├── portfolio/     # Portfolio project images
│   │   ├── profile.jpg    # Your profile/about image
│   │   ├── hero-background.jpg  # Hero section background
│   │   └── contact-background.jpg  # Contact section background
├── index.html
├── style.css
└── script.js
```

### Steps to Add Your Own Images

1. **Prepare your images:**

   - Optimize images for web (compress them) using tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Resize images to appropriate dimensions (recommendations below)
   - Save in JPG or WebP format for photos, PNG for graphics with transparency

2. **Place images in the correct folder:**

   - Create the folder structure if it doesn't exist: `mkdir -p assets/images/portfolio`
   - Copy your images into the appropriate folders

3. **Update image references in the HTML:**

   - For the profile image: `<img src="assets/images/profile.jpg" alt="Your Name - Photographer">`
   - For portfolio images: `<img src="assets/images/portfolio/project1.jpg" alt="Project description">`

4. **Update image references in CSS:**
   - For background images:
   ```css
   .hero {
     background: url("assets/images/hero-background.jpg") no-repeat center
       center;
   }
   ```

### Recommended Image Dimensions

For optimal performance while maintaining quality:

- **Hero background**: 1920x1080px (16:9 ratio)
- **About/profile image**: 800x1000px (4:5 ratio)
- **Portfolio images**: 800x600px or 1200x900px (4:3 ratio)
- **Contact background**: 1920x1080px (16:9 ratio)

### Image Formats and Optimization

- **JPG**: Best for photographs with many colors (compress to 70-80% quality)
- **PNG**: Best for graphics with transparency (use PNG-8 for simple graphics)
- **WebP**: Modern format with better compression (check browser compatibility)
- **SVG**: Ideal for logos and icons (scalable without quality loss)

Aim for image file sizes under:

- 200KB for hero and background images
- 100KB for portfolio images
- 50-80KB for profile images

### Adding Images to Portfolio Projects

To add a new portfolio project with your own image:

1. Create a new project card by copying an existing one:

```html
<div class="project-card" data-category="photo">
  <div class="project-image">
    <img
      src="assets/images/portfolio/your-new-project.jpg"
      alt="Project Title"
    />
    <div class="project-overlay">
      <div class="project-links">
        <a href="#" target="_blank"><i class="fas fa-eye"></i></a>
        <a href="#" target="_blank"><i class="fas fa-link"></i></a>
      </div>
    </div>
  </div>
  <div class="project-info">
    <h3>Your Project Title</h3>
    <p>Description of your photography project goes here.</p>
    <div class="project-tags">
      <span>Portrait</span>
      <span>Commercial</span>
      <span>Lifestyle</span>
    </div>
  </div>
</div>
```

2. Update the `src` attribute with the path to your image
3. Update the `alt` attribute with a descriptive text of your image
4. Update the project title, description, and tags

### Changing Background Images

To change the hero or contact section backgrounds:

1. Place your new background image in the `assets/images` folder
2. Update the CSS file:

```css
/* For hero section */
.hero {
  background: url("assets/images/your-hero-background.jpg") no-repeat center
    center;
  background-size: cover;
}

/* For contact section */
.contact::before {
  background: url("assets/images/your-contact-background.jpg") no-repeat center
    center;
  background-size: cover;
}
```

## Customization

### Personal Information

Edit the `index.html` file to replace the placeholder information with your own:

- Your name
- Your profession/title
- About me section
- Skills and expertise
- Portfolio items
- Contact information

### Styling

You can customize the look and feel of the website by modifying the `style.css` file:

- Change the color scheme by updating the CSS variables in the `:root` selector
- Adjust fonts, sizes, spacing, etc.
- Modify animations or add new ones

Example of changing the color scheme:

```css
:root {
  /* Colors */
  --primary-color: #e11d48; /* A vibrant red instead of gold */
  --primary-dark: #be123c; /* A darker shade of red */
  --primary-light: #ffe4e6; /* A lighter shade of red */
  /* ... other variables ... */
}
```

### JavaScript Functionality

You can extend or modify the functionality by editing the `script.js` file:

- Customize form validation and submission
- Add more animations
- Implement gallery lightbox for portfolio images
- Add video playback for videography samples
- Integrate with backend services for the contact form

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for placeholder images (in the production version, use your own images)

## Author

Sampanna Khanal - [khanallucky08@gmail.com](mailto:khanallucky08@gmail.com)

---

Feel free to reach out if you have any questions or need help customizing your photography portfolio website!
