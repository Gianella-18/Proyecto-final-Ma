// Expandir/colapsar acordeones
document.querySelectorAll('.acordeon-section summary').forEach(sum => {
    sum.addEventListener('click', () => {
      const details = sum.parentElement;
      if (details.open) {
        setTimeout(() => details.open = !details.open, 0);
      }
    });
  });

console.log("Página Embarazo lista");

// 