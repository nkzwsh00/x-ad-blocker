// X Ad Blocker - Hide promoted posts on X (Twitter)

function hideAds() {
  // Find all articles (tweets) on the page
  const articles = document.querySelectorAll('article[data-testid="tweet"]');

  articles.forEach(article => {
    // Check if already processed
    if (article.dataset.adBlockerProcessed) return;

    // Look for "Promoted" text in various languages
    const textContent = article.textContent || '';
    const isAd =
      textContent.includes('Promoted') ||
      textContent.includes('プロモーション') ||
      textContent.includes('広告') ||
      // Check for the "Ad" label that appears on sponsored content
      article.querySelector('[data-testid="placementTracking"]') !== null;

    if (isAd) {
      // Hide the entire article container
      article.style.display = 'none';
      console.log('[X Ad Blocker] Hidden promoted post');
    }

    // Mark as processed
    article.dataset.adBlockerProcessed = 'true';
  });
}

// Run immediately
hideAds();

// Watch for new content being added to the page (infinite scroll)
const observer = new MutationObserver(() => {
  hideAds();
});

// Start observing the timeline
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('[X Ad Blocker] Extension loaded and monitoring for ads');
