const toggle = document.getElementById('sound-toggle');
toggle?.addEventListener('click', () => {
  const enabled = toggle.getAttribute('aria-pressed') !== 'true';
  toggle.setAttribute('aria-pressed', String(enabled));
  toggle.textContent = enabled ? 'Soundtrack on' : 'Soundtrack off';
});
