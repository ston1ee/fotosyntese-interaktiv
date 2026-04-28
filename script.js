// Interaktiv tur-knap
const startTourBtn = document.getElementById("startTour");
const sections = ["overview", "lightReactions", "calvin", "flashcards"];
let tourIndex = 0;

startTourBtn?.addEventListener("click", () => {
  const id = sections[tourIndex % sections.length];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  tourIndex++;
});

// Calvin-faser
const phaseButtons = document.querySelectorAll(".phase-btn");
const phaseText = document.getElementById("phaseText");

const phaseContent = {
  fix: {
    title: "1. Carbon-fiksering",
    text:
      "CO8 bindes til RuBP (et 5C-sukker) katalyseret af enzymet RuBisCO. Det ustabile 6C-mellemprodukt spaltes straks til to 3-PGA (3C). Dette er selve CO8-fikseringen."
  },
  red: {
    title: "2. Reduktion",
    text:
      "3-PGA fosforyleres af ATP og reduceres af NADPH til G3P. Her tilføjes energi og elektroner, så der dannes et energirigt sukker-mellemprodukt (G3P). Nogle G3P forlader cyklussen til sukkerdannelse."
  },
  reg: {
    title: "3. Regenerering",
    text:
      "De fleste G3P-molekyler omdannes via flere enzymreaktioner tilbage til RuBP. Det kræver ATP og sørger for, at cyklussen kan fortsætte med at fikserer ny CO8."
  }
};

phaseButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    phaseButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const phase = btn.dataset.phase;
    const content = phaseContent[phase];
    if (content && phaseText) {
      phaseText.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p>`;
    }
  });
});

// Flashcards
const flashcards = [
  {
    q: "Skriv den overordnede reaktionsligning for fotosyntese.",
    a: "6 CO8 + 6 H8O + lysenergi  C8H89O8 + 6 O8"
  },
  {
    q: "Hvor i planten foregår fotosyntesen primært?",
    a: "I kloroplaster i bladcellerne (specifikt i mesofylcellerne)."
  },
  {
    q: "Hvor foregår lysreaktionerne, og hvad er hovedprodukterne?",
    a: "I thylakoidmembranerne; de danner ATP, NADPH og frigiver O8 fra vand."
  },
  {
    q: "Hvad er formålet med Calvin-cyklussen?",
    a: "At bruge ATP og NADPH til at fikserer CO8 og danne G3P, som kan omdannes til glukose."
  },
  {
    q: "Hvad betyder carbon-fiksering?",
    a: "At uorganisk CO8 indbygges i et organisk molekyle (RuBP/3-PGA)."
  },
  {
    q: "Hvilket enzym katalyserer bindingen mellem CO8 og RuBP?",
    a: "RuBisCO (ribulose-1,5-bisfosfat carboxylase/oxygenase)."
  },
  {
    q: "Hvad er RuBP, og hvor mange C-atomer har det?",
    a: "Et sukkermolekyle, ribulose-1,5-bisfosfat, med 5 kulstofatomer."
  },
  {
    q: "Hvad dannes der, når RuBP reagerer med CO8 i Calvin-cyklussen?",
    a: "Et ustabilt 6C-mellemprodukt, som spaltes til to 3-PGA (3C)."
  },
  {
    q: "Hvad står G3P for, og hvorfor er det vigtigt?",
    a: "Glyceraldehyd-3-fosfat; et energirigt 3C-sukker, der er forløber for glukose og andre organiske stoffer."
  },
  {
    q: "Hvilke to energibærere fra lysreaktionerne bruges i Calvin-cyklussen?",
    a: "ATP (energi) og NADPH (reduktionskraft/elektrondonor)."
  },
  {
    q: "Hvor foregår Calvin-cyklussen?",
    a: "I stroma i kloroplasterne."
  },
  {
    q: "Hvad sker der i reduktionsfasen i Calvin-cyklussen?",
    a: "3-PGA fosforyleres af ATP og reduceres af NADPH til G3P."
  },
  {
    q: "Hvad menes der med regenerering i Calvin-cyklussen?",
    a: "At G3P bruges til at gendanne RuBP, så cyklussen kan fortsætte."
  },
  {
    q: "Hvorfor er fotosyntese vigtig for livet på Jorden?",
    a: "Den producerer organiske stoffer (energi) til fødekæderne og O8 til atmosfæren."
  },
  {
    q: "Hvad er den vigtigste forskel mellem lysreaktioner og Calvin-cyklus?",
    a: "Lysreaktioner omdanner lysenergi til ATP og NADPH og spalter vand, mens Calvin-cyklussen bruger ATP og NADPH til at opbygge sukker fra CO8."
  }
];

let currentCard = 0;
let flipped = false;

const flashcardEl = document.getElementById("flashcard");
const frontEl = flashcardEl?.querySelector(".front");
const backEl = flashcardEl?.querySelector(".back");

function renderCard() {
  flipped = false;
  flashcardEl?.classList.remove("flipped");
  if (frontEl && backEl) {
    frontEl.textContent = flashcards[currentCard].q;
    backEl.textContent = flashcards[currentCard].a;
  }
}

flashcardEl?.addEventListener("click", () => {
  flipped = !flipped;
  flashcardEl.classList.toggle("flipped", flipped);
});

const prevBtn = document.getElementById("prevCard");
const nextBtn = document.getElementById("nextCard");

prevBtn?.addEventListener("click", () => {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  renderCard();
});

nextBtn?.addEventListener("click", () => {
  currentCard = (currentCard + 1) % flashcards.length;
  renderCard();
});

// initial render
if (flashcardEl) {
  renderCard();
}
