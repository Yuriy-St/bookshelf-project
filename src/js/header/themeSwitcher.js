let themeSwitcher;

function markupThemeSwitcher() {
  return `
	<label class="theme-switcher">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>`;
}

export function renderThemeSwitcher(parentRef, position = 'afterbegin') {
  const markup = markupThemeSwitcher();
  parentRef.insertAdjacentHTML(position, markup);
  themeSwitcher = document.querySelector('.theme-switcher input');
  themeSwitcher.addEventListener('change', toggleTheme);
}

export function restoreTheme() {
  const themeCurrent = localStorage.getItem('theme');
  if (themeCurrent === 'theme-dark') {
    setTheme(themeCurrent);
    themeSwitcher.checked = true;
  }
}

function clearTheme() {
  document.documentElement.classList.remove('theme-dark');
  localStorage.removeItem('theme');
}
// function to set a given theme/color-scheme
function setTheme(themeName) {
  if (!themeName) {
    clearTheme();
    return;
  }
  localStorage.setItem('theme', themeName);
  document.documentElement.classList.add(themeName);
}
// function to toggle between light and dark theme
function toggleTheme() {
  document.documentElement.classList.toggle('theme-dark');
  if (themeSwitcher.checked) {
    setTheme('theme-dark');
  } else {
    clearTheme();
  }
}
