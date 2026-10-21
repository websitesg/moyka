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
document.querySelector('a[href="#photo-credits"]').addEventListener('click', () => {
  credits.open = true;
});
if (window.location.hash === '#photo-credits') credits.open = true;
