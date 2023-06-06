import { marked } from 'marked';

const targetArea = document.getElementById('main-content');

function loadMarkdownFile(file) {
  return fetch(file)
    .then(response => response.text());
}

function mountMd(md, target) {
  const html = marked.parse(md);
  target.innerHTML = html;
}

loadMarkdownFile('./main.md').then(markdown => {
  mountMd(markdown, targetArea);
});