// Interaktiv tur-knap
const startTourBtn = document.getElementById("startTour");
const sections = ["overview", "chloroplast", "lightReactions", "calvin", "flashcards", "quiz"];
let tourIndex = 0;

startTourBtn?.addEventListener("click", () => {
  const id = sections[tourIndex % sections.length];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  tourIndex++;
});

// Calvin-faser detaljeret tekst
const phaseButtons = document.querySelectorAll(".phase-btn");
const phaseText = document.getElementById("phaseText");

const phaseContent = {
  fix: {
    title: "1. Carbon-fiksering",
    text: `
      • Foregår i stroma.
      • Startmolekyle: RuBP (ribulose-1,5-bisfosfat), et 5C-sukker.
      • Enzym: RuBisCO katalyserer reaktionen mellem CO₂ og RuBP.
      • Hver RuBP (5C) + 1 CO₂ (1C) → ustabil 6C-forbindelse.
      • Denne 6C-forbindelse spaltes straks til to molekyler 3-PGA (3-fosfoglycerat, 3C).
      → CO₂ er nu "fikseret" i et organisk molekyle.
    `
  },
  red: {
    title: "2. Reduktion",
    text: `
      • 3-PGA er relativt energifattigt.
      • Først fosforyleres 3-PGA af ATP → 1,3-bisfosfoglycerat.
      • Derefter reduceres 1,3-bisfosfoglycerat af NADPH → G3P (glyceraldehyd-3-fosfat).
      • NADPH oxideres til NADP⁺ og afgiver elektroner og H⁺.
      • Nogle G3P forlader cyklussen og kan bruges til at danne glukose og andre stoffer.
      → Her tilføres energi (ATP) og elektroner (NADPH) til kulstof-skelettet.
    `
  },
  reg: {
    title: "3. Regenerering af RuBP",
    text: `
      • De fleste G3P-molekyler bliver i cyklussen.
      • 10 G3P (10 × 3C = 30 C) omdannes gennem en række enzymreaktioner til 6 RuBP (6 × 5C = 30 C).
      • Denne proces kræver yderligere ATP.
      • Når RuBP gendannes, er cyklussen klar til at fikserer mere CO₂.
      → Calvin-cyklussen er derfor cyklisk: RuBP bruges, omdannes og gendannes.
    `
  },
  energy: {
    title: "Energiregnskab for Calvin-cyklus (6 CO₂)",
    text: `
      For at danne nok G3P til én hexose (glukose) skal Calvin-cyklussen køre med 6 CO₂:
      • 6 CO₂ ind → 12 3-PGA → 12 G3P.
      • 2 G3P (2 × 3C = 6C) forlader cyklussen → kan blive til én glukose.
      • 10 G3P bruges til regenerering af 6 RuBP.

      Energiforbrug:
      • 12 ATP bruges i reduktionsfasen (3-PGA → 1,3-bisfosfoglycerat).
      • 12 NADPH bruges i reduktionsfasen (1,3-bisfosfoglycerat → G3P).
      • 6 ATP bruges i regenereringsfasen (G3P → RuBP).
      → I alt: 18 ATP og 12 NADPH for 6 CO₂ → netto 1 hexose.
    `
  }
};

phaseButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    phaseButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const phase = btn.dataset.phase;
    const content = phaseContent[phase];
    if (content && phaseText) {
      phaseText.innerHTML = `<h3>${content.title}</h3>` +
        content.text
          .split("\n")
          .map((line) => (line.trim().startsWith("•") || line.trim().startsWith("→"))
            ? `<p>${line.trim()}</p>`
            : "")
          .join("");
    }
  });
});

// Flashcards
const flashcards = [
  {
    q: "Skriv den samlede reaktionsligning for fotosyntese.",
    a: "6 CO₂ + 6 H₂O + lysenergi → C₆H₁₂O₆ + 6 O₂"
  },
  {
    q: "Hvor i cellen foregår fotosyntese primært?",
    a: "I kloroplasterne i plantecellerne (mesofylceller i blade)."
  },
  {
    q: "Hvilke to hoveddele består fotosyntesen af?",
    a: "Lysreaktioner og Calvin-cyklus (lysuafhængige reaktioner)."
  },
  {
    q: "Hvor foregår lysreaktionerne, og hvad er deres hovedfunktion?",
    a: "I thylakoidmembranerne; de omdanner lysenergi til ATP og NADPH og spalter H₂O til O₂."
  },
  {
    q: "Hvor foregår Calvin-cyklussen?",
    a: "I stroma i kloroplasterne."
  },
  {
    q: "Hvad er formålet med Calvin-cyklussen?",
    a: "At bruge ATP og NADPH til at fikserer CO₂ og danne G3P, som kan blive til glukose."
  },
  {
    q: "Forklar begrebet carbon-fiksering.",
    a: "At uorganisk CO₂ bindes ind i et organisk molekyle (RuBP/3-PGA) ved hjælp af RuBisCO."
  },
  {
    q: "Hvilket enzym katalyserer reaktionen mellem CO₂ og RuBP?",
    a: "RuBisCO (ribulose-1,5-bisfosfat carboxylase/oxygenase)."
  },
  {
    q: "Hvad er RuBP, og hvor mange C-atomer indeholder det?",
    a: "RuBP er ribulose-1,5-bisfosfat, et sukker med 5 kulstofatomer."
  },
  {
    q: "Hvad dannes, når RuBP reagerer med CO₂ i Calvin-cyklussen?",
    a: "Et ustabilt 6C-mellemprodukt, der hurtigt spaltes til to 3-PGA (3C)."
  },
  {
    q: "Hvad står G3P for, og hvorfor er det vigtigt?",
    a: "G3P = glyceraldehyd-3-fosfat; et energirigt 3C-sukker, der er forløber for glukose og andre organiske stoffer."
  },
  {
    q: "Hvilke to energibærere fra lysreaktionerne bruges i Calvin-cyklussen?",
    a: "ATP (energi) og NADPH (reduktionskraft)."
  },
  {
    q: "Hvad sker der i reduktionsfasen i Calvin-cyklussen?",
    a: "3-PGA fosforyleres af ATP og reduceres af NADPH til G3P."
  },
  {
    q: "Hvad menes der med regenerering i Calvin-cyklussen?",
    a: "At G3P omdannes tilbage til RuBP, så cyklussen kan køre igen."
  },
  {
    q: "Hvorfor er fotosyntese afgørende for livet på Jorden?",
    a: "Den leverer organiske stoffer (energi) til fødekæderne og producerer O₂ til atmosfæren."
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

if (flashcardEl) {
  renderCard();
}

// Mini-quiz (3 enkle multiple choice-spørgsmål)
const quizQuestions = [
  {
    question: "Hvad er den direkte hovedfunktion af lysreaktionerne?",
    options: [
      "At danne glukose direkte fra CO₂",
      "At danne ATP og NADPH og spalte vand",
      "At regenerere RuBP",
      "At transportere sukker rundt i planten"
    ],
    correct: 1,
    explanation: "Lysreaktionerne danner ATP og NADPH og spalter H₂O til O₂, H⁺ og elektroner."
  },
  {
    question: "Hvilket af følgende sker i Calvin-cyklussen, men ikke i lysreaktionerne?",
    options: [
      "Spaltning af vand (fotolyse)",
      "Excitering af elektroner i klorofyl",
      "Carbon-fiksering af CO₂ i RuBP",
      "Dannelse af protongradient over thylakoidmembranen"
    ],
    correct: 2,
    explanation: "Carbon-fiksering (CO₂ + RuBP) er specifikt en del af Calvin-cyklussen."
  },
  {
    question: "Hvad er den vigtigste grund til, at G3P er centralt i fotosyntesen?",
    options: [
      "Det er det pigment, der absorberer lys",
      "Det er det molekyle, der spaltes til O₂",
      "Det er direkte energikilde i ATP-syntase",
      "Det er et 3C-sukker, som kan bygges videre til glukose og andre stoffer"
    ],
    correct: 3,
    explanation: "G3P er et 3C-sukker, som kan bruges til at danne glukose, stivelse, fedtsyrer osv."
  }
];

const quizContainer = document.getElementById("quizContainer");

function renderQuiz() {
  if (!quizContainer) return;
  quizContainer.innerHTML = "";

  quizQuestions.forEach((q, qi) => {
    const qDiv = document.createElement("div");
    qDiv.className = "quiz-question";
    qDiv.innerHTML = `<strong>${qi + 1}. ${q.question}</strong>`;

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "quiz-options";

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";

    q.options.forEach((opt, oi) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        // nulstil knappernes farve
        optionsDiv.querySelectorAll("button").forEach((b) => {
          b.classList.remove("correct", "wrong");
        });
        if (oi === q.correct) {
          btn.classList.add("correct");
          feedback.textContent = "Korrekt: " + q.explanation;
          feedback.style.color = "#2e7d32";
        } else {
          btn.classList.add("wrong");
          feedback.textContent = "Ikke helt: " + q.explanation;
          feedback.style.color = "#c62828";
        }
      });
      optionsDiv.appendChild(btn);
    });

    qDiv.appendChild(optionsDiv);
    qDiv.appendChild(feedback);
    quizContainer.appendChild(qDiv);
  });
}

if (quizContainer) {
  renderQuiz();
}
