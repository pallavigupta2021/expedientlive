/**
 * Smoothly scrolls to a specific element on the page
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (e.g., for fixed headers)
 * @param {number} duration - Duration of the scroll animation in milliseconds
 */
export const scrollToElement = (elementId, offset = 0, duration = 800) => {
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) {
    // If we're on a different page, store the target in sessionStorage
    // so we can scroll to it after navigation
    sessionStorage.setItem('scrollToElementId', elementId);
    return;
  }
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  
  // Easing function for smooth animation
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
};

/**
 * Check if we need to scroll to an element after page navigation
 * @param {number} offset - Optional offset from the top (e.g., for fixed headers)
 */
export const checkForScrollTarget = (offset = 80) => {
  const elementId = sessionStorage.getItem('scrollToElementId');
  if (elementId) {
    // Clear the stored element ID
    sessionStorage.removeItem('scrollToElementId');
    
    // Wait a bit for the page to fully render
    setTimeout(() => {
      scrollToElement(elementId, offset);
    }, 100);
  }
};
