// Register our service worker.
// We place it in the root so it's scoped to the whole site and
// we don't have to deal with Service-Worker-Allowed headers

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceworker.js')
        .then(function(registration) {
            console.log('Success!', registration.scope);
        })
        .catch(function(error) {
            console.error('Failure!', error);
        });
}

// Sort table by country name by default
window.addEventListener('load', function () {
    const el = document.getElementById('country')
    if (el) {
      el.click()
    }
  })
