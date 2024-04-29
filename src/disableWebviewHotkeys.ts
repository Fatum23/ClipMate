const forbidden: string[] = ["F3", "F5", "F6", "F7"];
const ctrl_forbidden: string[] = ["r", "j", "p"];

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (e: MouseEvent) => {
    e.preventDefault();
  });
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      (e.ctrlKey && ctrl_forbidden.includes(e.key)) ||
      forbidden.includes(e.key)
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});
