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

  const SPACING = 30;
  const REPEL_RADIUS = 85;
  const MAX_OFFSET = 9;

  let dots = [];
  let fieldRect = null;
  let pointer = { x: -9999, y: -9999 };
  let ticking = false;

  function buildGrid() {
    field.innerHTML = "";
    dots = [];
    fieldRect = field.getBoundingClientRect();
    const cols = Math.ceil(fieldRect.width / SPACING) + 1;
    const rows = Math.ceil(fieldRect.height / SPACING) + 1;
    const frag = document.createDocumentFragment();

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dot = document.createElement("span");
        const x = c * SPACING;
        const y = r * SPACING;
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        frag.appendChild(dot);
        dots.push({ el: dot, x, y });
      }
    }
    field.appendChild(frag);
  }

  function update() {
    ticking = false;
    for (const dot of dots) {
      const dx = dot.x - pointer.x;
      const dy = dot.y - pointer.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPEL_RADIUS) {
        const force = (1 - dist / REPEL_RADIUS) * MAX_OFFSET;
        const angle = Math.atan2(dy, dx);
        const ox = Math.cos(angle) * force;
        const oy = Math.sin(angle) * force;
        dot.el.style.transform = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
      } else {
        dot.el.style.transform = "translate(-50%, -50%)";
      }
    }
  }

  // Escuta no section (não no field, que é pointer-events:none pra não
  // atrapalhar cliques nos cards) — assim funciona em qualquer ponto da dobra.
  // A posição do field é recalculada a cada movimento: getBoundingClientRect()
  // é relativa à viewport, então rolar a página invalida um valor em cache.
  section.addEventListener("mousemove", (e) => {
    const liveRect = field.getBoundingClientRect();
    pointer.x = e.clientX - liveRect.left;
    pointer.y = e.clientY - liveRect.top;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  });

  section.addEventListener("mouseleave", () => {
    pointer.x = -9999;
    pointer.y = -9999;
    requestAnimationFrame(update);
  });

  buildGrid();
  field.classList.add("dot-field--active");

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildGrid, 200);
  });
});

// Garante a fonte certa do vídeo do hero via JS: o atributo media do <source>
// não é respeitado de forma confiável em todo navegador mobile (Safari/iOS em
// especial), o que fazia o celular carregar o vídeo pesado de desktop.
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-bg-video");
  if (!video) return;

  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const src = isMobile ? "assets/video/hero-mobile.mp4" : "assets/video/hero-globe.mp4";
  const poster = isMobile ? "assets/video/hero-mobile-poster.jpg" : "assets/video/hero-poster.jpg";

  video.poster = poster;
  video.querySelectorAll("source").forEach((s) => s.remove());
  const source = document.createElement("source");
  source.type = "video/mp4";
  source.src = src;
  video.appendChild(source);
  video.load();
  video.play().catch(() => {});
});

// Vídeo de fundo do hero: dissolve suavemente perto do corte do loop,
// pra mascarar o corte seco e parecer um loop contínuo.
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-bg-video");
  if (!video) return;

  const FADE = 0.6; // segundos de dissolução em cada ponta
  const MAX_OPACITY = 0.2; // vídeo bem discreto, pra não brigar com o texto

  video.addEventListener("timeupdate", () => {
    const duration = video.duration;
    if (!duration || Number.isNaN(duration)) return;

    const distFromEdge = Math.min(video.currentTime, duration - video.currentTime);
    const fade = distFromEdge >= FADE ? 1 : Math.max(distFromEdge / FADE, 0);
    video.style.opacity = (fade * MAX_OPACITY).toFixed(3);
  });
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
