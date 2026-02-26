// @PATH "AE-REACT/tailwind.config.js"
// @REV "20251011-2300"
// @MODULE "OS"
// @STATUS "Deployed-Testing"
// @FILETYPE "CONFIG"
// @DESC "Configuration file for Tailwind CSS, defining theme's color palette with custom CSS variables to support a dynamic theming system."
//-------------------------------------
// @TODO-START
// * tailwind.config.js: add in semantic definition for highlight, shadow, and other updates from design-specs.md
// @TODO-END
//=====================================
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', 
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Text Colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'text-warning': 'var(--color-text-warning)',
        'text-success': 'var(--color-text-success)',
        'text-error': 'var(--color-text-error)',

        // Borders and Line Colors        
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-tertiary': 'var(--color-border-tertiary)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'accent-tertiary': 'var(--color-accent-tertiary)',
        'accent-hover': 'var(--color-accent-hover)',

        // Node Card Colors (Synced with style.css)
        'card-surface': 'var(--color-card-surface)',
        'node-line': 'var(--color-node-line)',
        'accent-trigger': 'var(--color-accent-trigger)',
        'accent-action': 'var(--color-accent-action)',
        'accent-prompt': 'var(--color-accent-prompt)',
        'accent-logic': 'var(--color-accent-logic)',
        'accent-human': 'var(--color-accent-human)',
        'accent-data': 'var(--color-accent-data)',
        
        // Surface Colors
        'surface-primary': 'var(--color-surface-primary)',
        'surface-secondary': 'var(--color-surface-secondary)',
        'surface-tertiary': 'var(--color-surface-tertiary)',

        'surface-inverse': 'var(--color-surface-inverse)',
        'surface-variant': 'var(--color-surface-variant)',
        'surface-popover': 'var(--color-surface-popover)',

        'surface-positive': 'var(--color-surface-positive)',
        'surface-destructive': 'var(--color-surface-destructive)',
        'surface-informational': 'var(--color-surface-informational)',
        'surface-navigational': 'var(--color-surface-navigational)',
        
        'surface-neutral': 'var(--color-surface-neutral)',
        'surface-warning': 'var(--color-surface-warning)',
        'surface-success': 'var(--color-surface-success)',
        'surface-error': 'var(--color-surface-error)',


      }
    },
  },
}
