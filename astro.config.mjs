// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ginga.com.co/javascript/',  // Set your actual subfolder URL
  	base: '/javascript/',  // This ensures links & assets work inside a subdirectory
 	// outDir: 'dist',  // Default output folder
	integrations: [
		starlight({
			title: 'Javascript',
			social: {
				youtube: 'https://youtube.com/@gingasoluciones',
				instagram: 'https://instagram.com/gingasoluciones',
				facebook: 'https://facebook.com/gingasoluciones',
				github: 'https://github.com/gingasoluciones',
			},
			sidebar: [
				{
					label: 'Que es?',
					autogenerate: { directory: 'quees' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	// { label: 'Example Guide', slug: 'guides/example' },
					// ],
				},
				{
					label: 'Uso',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Basicos',
					autogenerate: { directory: 'basics' },
				},
				{
					label: 'Principales Funciones',
					autogenerate: { directory: 'functions' },
				},
				{
					label: 'Manejando Datos',
					autogenerate: { directory: 'others' },
				},
			],
			customCss: ['./src/styles/custom.css'], // Include custom CSS
			head: [
				// Inject custom HTML into the <head>
				{
				  tag: 'script',
				  attrs: { type: 'module' },
				  content: `
					document.addEventListener('DOMContentLoaded', () => {
					  const title = document.querySelector('.sl-stretch h1');
					  if (title) {
						title.classList.add('title-with-image');
						title.insertAdjacentHTML('beforeend', '<img src="assets/logo.png" alt="Logo">');
					  }
					});
				  `,
				},
				// ✅ Script to add an image above the "On this page" section
				{
					tag: 'script',
					attrs: { type: 'module' },
					content: `
					  document.addEventListener('DOMContentLoaded', () => {
						const tocContainer = document.querySelector('.right-sidebar-panel');
						if (tocContainer) {
						  const img = document.createElement('img');
						  img.src = '../../logo.png';  // ✅ Set your image path
						  img.alt = 'Custom Image';
						  img.style.width = '100px';
						  img.style.borderRadius = '10px';
						  img.style.marginBottom = '10px';
			  
						  tocContainer.prepend(img);
						}
					  });
					`,
				  },
				  {
					tag: 'script',
					attrs: { type: 'module' },
					content: `
					  document.addEventListener('DOMContentLoaded', () => {
						const content = document.querySelector('main .sl-markdown-content');
						if (!content) return;

						const key = 'like:' + window.location.pathname;
						const liked = window.localStorage.getItem(key) === '1';

						const box = document.createElement('div');
						box.className = 'like-box';

						const button = document.createElement('button');
						button.className = 'like-button';
						button.type = 'button';
						button.setAttribute('aria-pressed', liked ? 'true' : 'false');
						button.textContent = 'Me gusta';

						const count = document.createElement('span');
						count.className = 'like-count';
						count.textContent = liked ? '1 like' : '0 likes';

						button.addEventListener('click', () => {
							const isLiked = button.getAttribute('aria-pressed') === 'true';
							const nextLiked = !isLiked;
							button.setAttribute('aria-pressed', nextLiked ? 'true' : 'false');
							window.localStorage.setItem(key, nextLiked ? '1' : '0');
							count.textContent = nextLiked ? '1 like' : '0 likes';
						});

						box.appendChild(button);
						box.appendChild(count);
						content.appendChild(box);
					  });
					`,
				  },
			  ],
			  
		}),
	],
});
