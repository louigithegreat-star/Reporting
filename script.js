
/* ==========================================
   OUR ANNIVERSARY WEBSITE ❤️
   JavaScript - Made with love
========================================== */


/* ==========================================
   FIVE LOVE LETTERS
========================================== */

const letters = [
    {
        title: "Letter One: THE FIRST TIME WE MET ❤️",
        content: `
Boss do you remember the first we met? Haha, like Can i call you baby? Can you be my friend? Can you be my lover up until the very end. Grabi nohh? Simpleng ganto lang tas tingnan mo ngayon, grabi na haha. Can you imagine na simpleng asaran tas yung isa dyan akala na baliw ako dahil ganun hahahaaha. Ano nga sabi mo nun, parang sabi mo if malalaman lang talaga ng kaibigan mo na ganun ka, ewan ko nalang haaha. 1year of that and look what we haave now haha. Meeting you was one of the best things that happened in my life baby. ❤️`
    },

    {
	    title: "Letter Two: FIRST FEW MONTHS 💗",
	    content: `Alam mo nung time na yun yung parang antagal ng panagon kahit ilang days lang tayo haaha. Like gumawa pa tayo ng sarili marriage certificate cause it feels like months or years kahit days or months palang haha. The unlimited talk everyday na para bang walang buhay outside haha. Maybe there are some struggles especially nung January dahil kasi sa isa dito, ehemm ehemm. Jk lang poo hahaa, yeahh one of the best month yun it feels like iba haha tas yung mga first VC pa natin na wallang nagsasalita hahaa, yung iba dyan half pa yung mukha sa camera haha. Crazy how such a shorts days feels so long. 💗`
},

    {
        title: "Letter Three: THE THINGS I LIKE ABOUT YOU🌷",
        content: `Well madami haha, like if maay sasabihin talaga ako yung nagustuhan ko talaga siguro yung how you make me feel important, yun talagaa ehh. The fast replys? Small things but yeahh nung una mong ginagawa nun, I really like it. I like din yung how you still give us time kahit busy tayo or sa mga updates mo na kahit malayo tayo, it still feels like ramdam padin natin yung presence ng isa't isa. 🌷`
    },

    {
        title: "Letter Four: WISH KO SAYO🤍",
        content: `Siguro yung wish ko sayo is you have a healthy life. Lalo na masakitin ka pa naman haha, ano din like maganda yung buhay mo dyan, iwas sa stress at mga problem's. I wish na you find the happiness that you truly deserve. Wish ko din na maging successful ka in the future at maagawa mo lahat ng gusto mo sa buhay with me or without me hehe. Just remember na kahit anong mangyari, I will always be happy sayo heehe. 🤍`
    },

    {
        title: "Letter Five: THINGS I WANT TO DO WITH YOU💍",
        content: `Syempre ano.... Jk lang haha, siguro date tas hiking in a peaceful place na tayo lang dalawa talaga. Then hihiga ako or ikaw hihiga sa lap ko, enjoying the sound of silent and peaceful nature. Gusto ko din magcuddle ng matagal sayo habang kinikiss kita ng madamni sa mukha hehe. ❤️`
    }
];


/* ==========================================
   FIFTY REASONS WHY I LOVE YOU
========================================== */

const reasons = [
    "Your beautiful smile.",
    "The sound of your laugh.",
    "The way you make me happy.",
    "Your beautiful eyes.",
    "The way you care about me.",
    "Your beautiful personality.",
    "The way you always make me feel loved.",
    "Your kindness toward me.",
    "The way you update me of your day.",
    "Your beautiful Face.",

    "The way you brighten my day.",
    "Your cute little habits.",
    "The way you make me laugh.",
    "Your beautiful heart.",
    "The comfort I feel with you.",
    "The way you encourage me.",
    "Your honesty with me.",
    "The way you express yourself.",
    "The memories we create together.",
    "Because I can be myself with you.",

    "Your lovely voice.",
    "The way you make ordinary days special.",
    "Your patience with me kahit baliktad.",
    "The way you remember little things.",
    "Your strength when life gets difficult.",
    "The way you share your thoughts.",
    "Your enthusiasm for things you love.",
    "The way you make me feel appreciated.",
    "Your sweet messages.",
    "Because spending time with you feels special.",

    "Your beautiful energy.",
    "The way you show affection.",
    "Your determination to reach your goals.",
    "The way you surprise me.",
    "Your sense of humor.",
    "The way you inspire me.",
    "Because I enjoy talking with you.",
    "The way you make me feel understood.",
    "Your lovely imperfections.",
    "Because you are important to me.",

    "The way you make me smile at my phone.",
    "Your thoughtfulness.",
    "The little moments we share.",
    "The way you bring warmth into my life.",
    "Because I can learn from you.",
    "Because I want to see you achieve your dreams.",
    "Because I love seeing you happy.",
    "Because I want to keep making memories with you.",
    "Because I choose you.",
    "Because you are the girl I will always love. ❤️"
];


/* ==========================================
   CHANGE BETWEEN WEBSITE PAGES
========================================== */

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* ==========================================
   OPEN THE FIRST SURPRISE
========================================== */

function openGift() {
    showPage("letters");
}


/* ==========================================
   OPEN AND CLOSE LOVE LETTERS
========================================== */

function openLetter(index) {
    if (index < 0 || index >= letters.length) {
        return;
    }

    const letter = letters[index];

    document.getElementById("letterTitle").textContent =
        letter.title;

    document.getElementById("letterContent").textContent =
        letter.content;

    document.getElementById("letterPopup").classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeLetter() {
    document.getElementById("letterPopup").classList.remove("show");

    document.body.style.overflow = "";
}


/* ==========================================
   CREATE THE 50 REASONS
========================================== */

function createReasons() {
    const grid = document.getElementById("reasonsGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    reasons.forEach(function(reason, index) {
        const card = document.createElement("div");

        card.className = "reason-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute(
            "aria-label",
            "Open reason number " + (index + 1)
        );

        card.innerHTML = `
            <span class="reason-icon">💗</span>
            <span class="reason-number">${index + 1}</span>
        `;

        card.addEventListener("click", function() {
            openReason(index);
        });

        card.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openReason(index);
            }
        });

        grid.appendChild(card);
    });
}


/* ==========================================
   OPEN AND CLOSE A REASON
========================================== */

function openReason(index) {
    if (index < 0 || index >= reasons.length) {
        return;
    }

    document.getElementById("reasonTitle").textContent =
        "Reason Number " + (index + 1) + " ❤️";

    document.getElementById("reasonContent").textContent =
        reasons[index];

    document.getElementById("reasonPopup").classList.add("show");

    document.body.style.overflow = "hidden";
}

function closeReason() {
    document.getElementById("reasonPopup").classList.remove("show");

    document.body.style.overflow = "";
}


/* ==========================================
   GO TO THE FINAL LOVE LETTER
========================================== */

function goToFinalLetter() {
    window.location.href = "gift.html";
}


/* ==========================================
   FLOATING HEARTS BACKGROUND
========================================== */

function createFloatingHearts() {
    const container = document.getElementById("heartsBackground");

    if (!container) {
        return;
    }

    const heartSymbols = ["❤️", "💗", "💕", "💖", "💘"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            (7 + Math.random() * 8) + "s";

        heart.style.animationDelay =
            (Math.random() * 10) + "s";

        heart.style.fontSize =
            (14 + Math.random() * 20) + "px";

        container.appendChild(heart);
    }
}


/* ==========================================
   HEART EXPLOSION EFFECT
========================================== */

function heartExplosion() {
    const heartSymbols = ["❤️", "💗", "💕", "💖", "💘", "💝"];

    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("span");

        heart.className = "explosion-heart";

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = "50%";
        heart.style.top = "50%";

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 250;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        heart.style.setProperty("--move-x", moveX + "px");
        heart.style.setProperty("--move-y", moveY + "px");

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 1600);
    }
}


/* ==========================================
   CLOSE POPUPS BY CLICKING OUTSIDE
========================================== */

document.addEventListener("click", function(event) {
    const letterPopup = document.getElementById("letterPopup");
    const reasonPopup = document.getElementById("reasonPopup");

    if (event.target === letterPopup) {
        closeLetter();
    }

    if (event.target === reasonPopup) {
        closeReason();
    }
});


/* ==========================================
   CLOSE POPUPS USING THE ESCAPE KEY
========================================== */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLetter();
        closeReason();
    }
});


/* ==========================================
   HANDLE MISSING PHOTOS
========================================== */

function setupPhotoFallbacks() {
    const images = document.querySelectorAll(".photo-card img");

    images.forEach(function(img) {
        img.addEventListener("error", function() {
            if (img.dataset.fallbackShown === "true") {
                return;
            }

            img.dataset.fallbackShown = "true";
            img.style.display = "none";

            const placeholder = document.createElement("div");

            placeholder.textContent = "📸 Add your photo here";
            placeholder.style.height = "230px";
            placeholder.style.display = "flex";
            placeholder.style.alignItems = "center";
            placeholder.style.justifyContent = "center";
            placeholder.style.color = "#ffd6e5";
            placeholder.style.background = "#57132f";
            placeholder.style.borderRadius = "14px";

            img.parentNode.insertBefore(placeholder, img.nextSibling);
        });
    });
}


/* ==========================================
   START THE WEBSITE
========================================== */

document.addEventListener("DOMContentLoaded", function() {
    createReasons();
    createFloatingHearts();
    setupPhotoFallbacks();
});
