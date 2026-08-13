// ===============================
// Verification Page Configuration
// ===============================

const BTC_ADDRESS =
  "bc1qwcklty2l6waeqqu6xnqkdlstlkr4lsax4rlp0e5sjz74fzkht4zqqf7yd9";


// ===============================
// Copy BTC Address
// ===============================

const copyAddressButton = document.querySelector("#copyAddress");
const addressElement = document.querySelector("#btcAddress");

if (copyAddressButton && addressElement) {
  copyAddressButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(BTC_ADDRESS);

      copyAddressButton.textContent = "Copied ✓";

      setTimeout(() => {
        copyAddressButton.textContent = "Copy Address";
      }, 1800);

    } catch (error) {
      console.error("Unable to copy BTC address:", error);
    }
  });
}


// ===============================
// Approval Code Copy
// ===============================

const copyCodeButton = document.querySelector("#copyCode");
const approvalCodeElement = document.querySelector("#approvalCode");

if (copyCodeButton && approvalCodeElement) {
  copyCodeButton.addEventListener("click", async () => {
    const code = approvalCodeElement.textContent.trim();

    try {
      await navigator.clipboard.writeText(code);

      copyCodeButton.textContent = "Copied ✓";

      setTimeout(() => {
        copyCodeButton.textContent = "Copy Code";
      }, 1800);

    } catch (error) {
      console.error("Unable to copy approval code:", error);
    }
  });
}


// ===============================
// Display BTC Address
// ===============================

if (addressElement) {
  addressElement.textContent = BTC_ADDRESS;
}