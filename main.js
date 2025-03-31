function sendToAppInventor(message) {
  if (typeof AppInventor !== "undefined") {
    AppInventor.setWebViewString(message);
  } else {
    alert("Erreur : Cette fonction ne fonctionne que dans WebViewer de MIT App Inventor.");
  }
}
