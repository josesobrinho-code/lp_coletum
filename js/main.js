// Animações de entrada: elementos aparecem conforme o usuário rola a página
document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const fadeSlideGroups = [
    document.querySelectorAll(".section-head"),
    document.querySelectorAll(".feature-card"),
    document.querySelectorAll(".segment-card"),
    document.querySelectorAll(".step-card"),
    document.querySelectorAll(".benefits-grid"),
    document.querySelectorAll(".faq-item"),
    document.querySelectorAll(".transition-section p"),
    document.querySelectorAll(".final-cta .lead, .final-cta .trust-line, .final-cta .btn"),
    document.querySelectorAll(".marquee-section .kicker"),
  ];

  fadeSlideGroups.forEach((list) => {
    list.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", Math.min(i, 5) * 80 + "ms");
    });
  });

  // Elementos com transform próprio (posicionamento do ciclo, card em destaque)
  // usam só fade, pra não conflitar com o transform que já têm.
  const fadeOnlyGroups = [
    document.querySelectorAll(".cycle-node"),
    document.querySelectorAll(".price-card"),
  ];

  fadeOnlyGroups.forEach((list) => {
    list.forEach((el, i) => {
      el.classList.add("reveal-fade");
      el.style.setProperty("--reveal-delay", Math.min(i, 5) * 90 + "ms");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-fade").forEach((el) => observer.observe(el));
});

// Campo de pontos interativo da dobra "problema" — se afastam sutilmente do cursor.
// Só roda em telas com mouse de verdade (hover); em touch não tem cursor persistente,
// então geraria centenas de elementos à toa. Nesse caso o CSS mostra um padrão estático.
document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".dot-field");
  const section = document.querySelector(".problem-section");
  if (!field || !section) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  const SPACING = 36;
  const REPEL_RADIUS = 85;
  const MAX_OFFSET = 9;

  let dots = [];
  let rows = 0;
  let cols = 0;
  let activeDots = new Set();
  let pointer = { x: -9999, y: -9999 };
  let ticking = false;
  let activated = false;

  function buildGrid() {
    field.innerHTML = "";
    dots = [];
    activeDots.clear();
    const fieldRect = field.getBoundingClientRect();
    cols = Math.ceil(fieldRect.width / SPACING) + 1;
    rows = Math.ceil(fieldRect.height / SPACING) + 1;
    const frag = document.createDocumentFragment();

    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const dot = document.createElement("span");
        const x = c * SPACING;
        const y = r * SPACING;
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        frag.appendChild(dot);
        row.push({ el: dot, x, y });
      }
      dots.push(row);
    }
    field.appendChild(frag);
  }

  function update() {
    ticking = false;
    activeDots.forEach((dot) => {
      dot.el.style.transform = "translate(-50%, -50%)";
    });
    activeDots.clear();

    const minCol = Math.max(0, Math.floor((pointer.x - REPEL_RADIUS) / SPACING));
    const maxCol = Math.min(cols - 1, Math.ceil((pointer.x + REPEL_RADIUS) / SPACING));
    const minRow = Math.max(0, Math.floor((pointer.y - REPEL_RADIUS) / SPACING));
    const maxRow = Math.min(rows - 1, Math.ceil((pointer.y + REPEL_RADIUS) / SPACING));

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        const dot = dots[r]?.[c];
        if (!dot) continue;
        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * MAX_OFFSET;
          const angle = Math.atan2(dy, dx);
          const ox = Math.cos(angle) * force;
          const oy = Math.sin(angle) * force;
          dot.el.style.transform = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
          activeDots.add(dot);
        }
      }
    }
  }

  // Escuta no section (não no field, que é pointer-events:none pra não
  // atrapalhar cliques nos cards) — assim funciona em qualquer ponto da dobra.
  // A posição do field é recalculada a cada movimento: getBoundingClientRect()
  // é relativa à viewport, então rolar a página invalida um valor em cache.
  section.addEventListener("mousemove", (e) => {
    if (!activated) return;
    const liveRect = field.getBoundingClientRect();
    pointer.x = e.clientX - liveRect.left;
    pointer.y = e.clientY - liveRect.top;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  });

  section.addEventListener("mouseleave", () => {
    if (!activated) return;
    pointer.x = -9999;
    pointer.y = -9999;
    requestAnimationFrame(update);
  });

  function activate() {
    if (activated) return;
    activated = true;
    buildGrid();
    field.classList.add("dot-field--active");

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildGrid, 200);
    }, { passive: true });
  }

  const activationObserver = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    activate();
    activationObserver.disconnect();
  }, { rootMargin: "400px 0px" });

  activationObserver.observe(section);
});

// Mostra primeiro o poster leve e só baixa o vídeo quando o navegador estiver
// ocioso. Economia de dados e movimento reduzido permanecem somente no poster.
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-bg-video");
  if (!video) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData;
  if (prefersReducedMotion || saveData) return;

  const loadVideo = () => {
    if (video.src) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    video.addEventListener("canplay", () => {
      video.classList.add("is-ready");
      video.play().catch(() => {});
    }, { once: true });
    video.src = isMobile ? video.dataset.mobileSrc : video.dataset.desktopSrc;
    video.load();
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadVideo, { timeout: 2000 });
  } else {
    window.setTimeout(loadVideo, 800);
  }
});

// FAQ accordion: mantém só um item aberto por vez
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
