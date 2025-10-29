// Small interactive behaviors: random fun fact & simple form behaviour

const facts = [
  "Snoopy first appeared in the Peanuts comic strip on October 4, 1950.",
  "Snoopy often imagines himself as the World War I Flying Ace.",
  "Snoopy's best friend is Woodstock, a small yellow bird.",
  "Snoopy lives on top of his iconic red doghouse.",
  "Charles M. Schulz created Snoopy and the Peanuts cast."
];

document.addEventListener('DOMContentLoaded', () => {
  const factBtn = document.getElementById('random-fact');
  const factsList = document.getElementById('facts-list');
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  factBtn.addEventListener('click', () => {
    const f = facts[Math.floor(Math.random()*facts.length)];
    // add to top of list
    const li = document.createElement('li');
    li.textContent = f;
    factsList.prepend(li);
    li.scrollIntoView({behavior: 'smooth'});
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    // Fake send: this is client-side only
    status.textContent = `Thanks ${name}! Your message was not actually sent — connect a backend or email service to enable sending.`;
    form.reset();
  });

  // small accessibility improvement: set alt for hero image if placeholder present
  const heroImage = document.getElementById('hero-image');
  if (heroImage && heroImage.src.includes('placeholder')) {
    heroImage.alt = 'Placeholder Snoopy image — replace with a licensed image';
  }
});
