/**
 * Benefits Block
 * Renders each row as icon + highlighted title + description layout.
 */

function moveChildren(source, target) {
  if (!source) return;
  while (source.firstChild) {
    target.append(source.firstChild);
  }
}

export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('div');
  list.className = 'benefits-list';

  rows.forEach((row) => {
    const item = document.createElement('article');
    item.className = 'benefit-item';

    const columns = [...row.children];

    const iconCol = document.createElement('div');
    iconCol.className = 'benefit-icon';
    moveChildren(columns[0], iconCol);

    const textCol = document.createElement('div');
    textCol.className = 'benefit-text';

    // Title
    const titleContainer = document.createElement('div');
    titleContainer.className = 'benefit-title';
    if (columns[1]) {
      const titleFragment = document.createDocumentFragment();
      moveChildren(columns[1], titleFragment);
      const titleText = titleFragment.textContent.trim();
      if (titleText) {
        const highlight = document.createElement('span');
        highlight.className = 'benefit-title-highlight';
        highlight.textContent = titleText;
        titleContainer.append(highlight);
      }
    }
    textCol.append(titleContainer);

    // Description
    const descriptionCol = document.createElement('div');
    descriptionCol.className = 'benefit-description';
    if (columns[2]) {
      moveChildren(columns[2], descriptionCol);
    }
    textCol.append(descriptionCol);

    item.append(iconCol, textCol);
    list.append(item);
  });

  block.replaceChildren(list);
}
