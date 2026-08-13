document.addEventListener("DOMContentLoaded", () => {
  const copyAddressButton = document.getElementById("copyAddress");
  const addressElement = document.getElementById("verificationAddress");

  if (!copyAddressButton || !addressElement) {
    console.error("Copy button or address element not found.");
    return;
  }

  copyAddressButton.addEventListener("click", async () => {
    const text = addressElement.textContent.trim();

    try {
      // Modern clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for browsers where Clipboard API is unavailable
        const textArea = document.createElement("textarea");

        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");

        textArea.remove();

        if (!successful) {
          throw new Error("Copy command failed.");
        }
      }

      copyAddressButton.textContent = "Copied ✓";

      setTimeout(() => {
        copyAddressButton.textContent = "Copy Address";
      }, 1800);

    } catch (error) {
      console.error("Copy failed:", error);
      copyAddressButton.textContent = "Copy Failed";

      setTimeout(() => {
        copyAddressButton.textContent = "Copy Address";
      }, 1800);
    }
  });
});