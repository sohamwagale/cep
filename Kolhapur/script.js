document.addEventListener("DOMContentLoaded", () => {
    const allHead = document.querySelector('.all');
    const root = document.documentElement;

    // Get the height of the all-head container
    const allHeadHeight = allHead.offsetHeight;

    // Set the CSS variable for dynamic padding
    root.style.setProperty('--all-height', `${allHeadHeight}px`);
  });

  // Update on window resize to handle dynamic height changes
  window.addEventListener('resize', () => {
    const allHead = document.querySelector('.all');
    const root = document.documentElement;

    // Get the height of the all-head container
    const allHeadHeight = allHead.offsetHeight;

    // Update the CSS variable
    root.style.setProperty('--all-height', `${allHeadHeight}px`);
  });