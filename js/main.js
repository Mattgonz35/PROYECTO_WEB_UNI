'use strict';
// Cambios de contenido en la portada.
const demoText = document.querySelector('#demoText');
const changeText = document.querySelector('#changeText');
if (changeText) changeText.addEventListener('click', () => { demoText.textContent = 'Portafolio actualizado. Revisa la trayectoria y los proyectos de Santiago.'; });
// Modificación puntual de estilo.
const toggleStyle = document.querySelector('#toggleStyle');
if (toggleStyle) toggleStyle.addEventListener('click', () => { demoText.style.color = demoText.style.color ? '' : '#55e6d0'; demoText.style.fontWeight = demoText.style.fontWeight ? '' : '700'; });
// Alternar una clase CSS reutilizable.
const toggleClass = document.querySelector('#toggleClass');
if (toggleClass) toggleClass.addEventListener('click', () => demoText.classList.toggle('demo-highlight'));
// Leer y actualizar atributos del párrafo.
const changeAttr = document.querySelector('#changeAttr');
if (changeAttr) changeAttr.addEventListener('click', () => { const current = demoText.getAttribute('data-state'); const next = current === 'actualizado' ? 'inicial' : 'actualizado'; demoText.setAttribute('data-state', next); demoText.setAttribute('title', `Estado: ${next}`); demoText.textContent = `Estado del contenido: ${demoText.getAttribute('data-state')}.`; });
// Crear, insertar y eliminar elementos de la lista.
const addItem = document.querySelector('#addItem');
const removeItem = document.querySelector('#removeItem');
const dynamicList = document.querySelector('#dynamicList');
if (addItem && dynamicList) addItem.addEventListener('click', () => { const item = document.createElement('li'); item.textContent = `Actividad añadida al registro (${dynamicList.children.length + 1})`; item.className = 'list-group-item'; dynamicList.append(item); });
if (removeItem && dynamicList) removeItem.addEventListener('click', () => { if (dynamicList.lastElementChild) dynamicList.lastElementChild.remove(); });
// Eventos de teclado en el texto interactivo.
if (demoText) { demoText.tabIndex = 0; demoText.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); demoText.classList.toggle('demo-highlight'); } }); }
// Formulario local: muestra una confirmación sin enviar datos a un servidor.
const contactForm = document.querySelector('#contactForm');
if (contactForm) contactForm.addEventListener('submit', (event) => { event.preventDefault(); const email = document.querySelector('#email').value; document.querySelector('#formMessage').textContent = `Gracias, ${email}. Tu solicitud quedó registrada en esta página; este formulario no envía correos.`; contactForm.reset(); });
// Aparición progresiva de tarjetas cuando entran en pantalla.
const revealTargets = document.querySelectorAll('.hero, .stat, .bento-card, .profile-card, article, .learning-box, .dom-demo, .contact-strip');
revealTargets.forEach((element) => element.classList.add('reveal'));
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.12 }); revealTargets.forEach((element) => observer.observe(element)); } else { revealTargets.forEach((element) => element.classList.add('is-visible')); }
// Inclinación sutil de tarjetas en dispositivos con puntero fino.
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) { document.querySelectorAll('.bento-card, .project-card, .stack-card, .quote').forEach((card) => { card.dataset.tilt = 'true'; card.addEventListener('pointermove', (event) => { const box = card.getBoundingClientRect(); const x = (event.clientX - box.left) / box.width - 0.5; const y = (event.clientY - box.top) / box.height - 0.5; card.style.transform = `perspective(850px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-3px)`; }); card.addEventListener('pointerleave', () => { card.style.transform = ''; }); }); }

// Copiar el correo de contacto con confirmación en pantalla.
const copyEmail = document.querySelector('#copyEmail');
if (copyEmail) copyEmail.addEventListener('click', async () => { const email = copyEmail.dataset.email; try { await navigator.clipboard.writeText(email); copyEmail.textContent = 'Correo copiado'; } catch { copyEmail.textContent = email; } });
