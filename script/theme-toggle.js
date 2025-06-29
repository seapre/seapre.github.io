document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    body.classList.add('dark-mode');
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });
});