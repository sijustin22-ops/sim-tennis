document.getElementById("year").textContent = new Date().getFullYear();

async function copyZelle() {
  const text = document.getElementById("zelle-contact").textContent.trim();
  const toast = document.getElementById("toast");

  try {
    await navigator.clipboard.writeText(text);
    toast.textContent = "Zelle contact copied!";
  } catch {
    toast.textContent = "Press and hold to copy.";
  }

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}
