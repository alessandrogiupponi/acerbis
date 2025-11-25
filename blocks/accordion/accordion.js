/**
 * Accordion Block
 * Creates an accessible accordion component
 */

export default function decorate(block) {
  const items = [...block.children];
  const accordion = document.createElement('div');
  accordion.className = 'accordion-list';

  items.forEach((item, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    // Get header and content
    const header = item.children[0];
    const content = item.children[1];

    // Create button for header
    const button = document.createElement('button');
    button.className = 'accordion-header';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `accordion-panel-${index}`);
    button.id = `accordion-header-${index}`;
    
    // Move header content to button
    while (header.firstChild) {
      button.appendChild(header.firstChild);
    }

    // Create panel for content
    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.id = `accordion-panel-${index}`;
    panel.setAttribute('aria-labelledby', `accordion-header-${index}`);
    panel.setAttribute('role', 'region');
    panel.hidden = true;

    // Move content to panel
    if (content) {
      while (content.firstChild) {
        panel.appendChild(content.firstChild);
      }
    }

    // Toggle functionality
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const allItems = accordion.querySelectorAll('.accordion-item');
      const allButtons = accordion.querySelectorAll('.accordion-header');
      const allPanels = accordion.querySelectorAll('.accordion-panel');

      // Close all other items (optional - remove if you want multiple open)
      allItems.forEach((item, idx) => {
        if (item !== accordionItem) {
          allButtons[idx].setAttribute('aria-expanded', 'false');
          allPanels[idx].hidden = true;
          item.classList.remove('expanded');
        }
      });

      // Toggle current item
      button.setAttribute('aria-expanded', !isExpanded);
      panel.hidden = isExpanded;
      accordionItem.classList.toggle('expanded', !isExpanded);
    });

    // Keyboard support
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextButton = accordion.querySelectorAll('.accordion-header')[index + 1];
        if (nextButton) nextButton.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevButton = accordion.querySelectorAll('.accordion-header')[index - 1];
        if (prevButton) prevButton.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        accordion.querySelector('.accordion-header').focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        const buttons = accordion.querySelectorAll('.accordion-header');
        buttons[buttons.length - 1].focus();
      }
    });

    accordionItem.appendChild(button);
    accordionItem.appendChild(panel);
    accordion.appendChild(accordionItem);
  });

  block.replaceChildren(accordion);
}

