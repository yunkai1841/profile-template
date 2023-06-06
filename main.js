import { marked } from 'marked';
const targetArea = document.getElementById('main-content');

const markdown = `
# Hello World
`;

mountMd(markdown, targetArea);
function mountMd(md, target) {
  const html = marked.parse(md);
  target.innerHTML = html;
}