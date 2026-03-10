window.addEventListener('DOMContentLoaded', () => {
  const installBtn = document.getElementById('installBtn');
  if (!installBtn) return;

  installBtn.style.display = 'none';

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
  });

  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log('User response to install:', choiceResult.outcome);
      deferredPrompt = null;
      installBtn.style.display = 'none';
    } else {
      alert("Your browser doesn't support automatic installation. Open the site in Chrome/Edge and use 'Create Shortcut' in the menu.");
    }
  });
});
