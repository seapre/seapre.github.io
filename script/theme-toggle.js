document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  const setIcon = () => {
    if (body.classList.contains('dark-mode')) {
      themeIcon.textContent = '\u263D'; // Moon icon
    } else {
      themeIcon.textContent = '\u2600'; // Sun icon
    }
  };

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    body.classList.add('dark-mode');
  }

  setIcon(); // Set initial icon

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode'); // Ensure light-mode class is added
      localStorage.setItem('theme', 'light-mode');
    } else {
      body.classList.remove('light-mode'); // Remove light-mode if present
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
    setIcon(); // Update icon after toggle
  });
});