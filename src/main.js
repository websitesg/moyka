import { reviews } from './reviews.js';

const copyButton = document.querySelector('#copy-phone');
const copyStatus = document.querySelector('#copy-status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('+79088260236');
    copyStatus.textContent = 'Номер скопирован';
  } catch {
    copyStatus.textContent = 'Не удалось скопировать. Номер: +7 908 826-02-36';
  }
});

// A link to photo credits should reveal the attribution, not land on closed text.
const credits = document.querySelector('#photo-credits');
document.querySelectorAll('a[href="#photo-credits"]').forEach(link => {
  link.addEventListener('click', () => { credits.open = true; });
});
if (window.location.hash === '#photo-credits') credits.open = true;

// Render real testimonials when available; do not show placeholder reviews.
const reviewsSection = document.querySelector('#reviews');
const reviewsGrid = document.querySelector('#reviews-grid');
const reviewTemplate = document.querySelector('#review-template');
for (const review of reviews) {
  if (!review.name?.trim() || !review.text?.trim()) continue;
  const card = reviewTemplate.content.cloneNode(true);
  card.querySelector('blockquote').textContent = review.text;
  card.querySelector('.review-name').textContent = review.name;
  card.querySelector('.review-initial').textContent = review.name.trim().charAt(0);
  card.querySelector('.review-context').textContent = review.context || '';
  reviewsGrid.append(card);
}
reviewsSection.hidden = reviewsGrid.children.length === 0;
