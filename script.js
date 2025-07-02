const verbs = [
  { v1: "go", v2: "went", v3: "gone", tr: "gitmek" },
  { v1: "eat", v2: "ate", v3: "eaten", tr: "yemek" },
  { v1: "see", v2: "saw", v3: "seen", tr: "g rmek" },
  { v1: "write", v2: "wrote", v3: "written", tr: "yazmak" },
  { v1: "speak", v2: "spoke", v3: "spoken", tr: "konu mak" },
  { v1: "come", v2: "came", v3: "come", tr: "gelmek" },
  { v1: "run", v2: "ran", v3: "run", tr: "ko�mak" },
  { v1: "drink", v2: "drank", v3: "drunk", tr: "i�mek" },
  { v1: "drive", v2: "drove", v3: "driven", tr: "s�rmek" },
  { v1: "give", v2: "gave", v3: "given", tr: "vermek" },
  { v1: "take", v2: "took", v3: "taken", tr: "almak" },
  { v1: "begin", v2: "began", v3: "begun", tr: "ba�lamak" },
  { v1: "break", v2: "broke", v3: "broken", tr: "k�rmak" },
  { v1: "choose", v2: "chose", v3: "chosen", tr: "se�mek" },
  { v1: "do", v2: "did", v3: "done", tr: "yapmak" },
  { v1: "draw", v2: "drew", v3: "drawn", tr: "�izmek" },
  { v1: "fall", v2: "fell", v3: "fallen", tr: "d��mek" },
  { v1: "forget", v2: "forgot", v3: "forgotten", tr: "unutmak" },
  { v1: "get", v2: "got", v3: "gotten", tr: "almak/edinmek" },
  { v1: "grow", v2: "grew", v3: "grown", tr: "b�y�mek" },
  { v1: "know", v2: "knew", v3: "known", tr: "bilmek" },
  { v1: "ride", v2: "rode", v3: "ridden", tr: "binmek" },
  { v1: "ring", v2: "rang", v3: "rung", tr: " almak (zil)" },
  { v1: "rise", v2: "rose", v3: "risen", tr: "y�kselmek" },
  { v1: "show", v2: "showed", v3: "shown", tr: "g�stermek" },
  { v1: "sing", v2: "sang", v3: "sung", tr: "�ark  s�ylemek" },
  { v1: "swim", v2: "swam", v3: "swum", tr: "y�zmek" },
  { v1: "wake", v2: "woke", v3: "woken", tr: "uyanmak" },
  { v1: "wear", v2: "wore", v3: "worn", tr: "giymek" },
  { v1: "write", v2: "wrote", v3: "written", tr: "yazmak" },
  { v1: "be", v2: "was/were", v3: "been", tr: "olmak" },
  { v1: "become", v2: "became", v3: "become", tr: "olmak (hale gelmek)" },
  { v1: "bite", v2: "bit", v3: "bitten", tr: "�s�rmak" },
  { v1: "blow", v2: "blew", v3: "blown", tr: "�flemek" },
  { v1: "build", v2: "built", v3: "built", tr: "in�a etmek" },
  { v1: "buy", v2: "bought", v3: "bought", tr: "sat�n almak" },
  { v1: "catch", v2: "caught", v3: "caught", tr: "yakalamak" },
  { v1: "come", v2: "came", v3: "come", tr: "gelmek" },
  { v1: "cost", v2: "cost", v3: "cost", tr: "mal olmak" },
  { v1: "cut", v2: "cut", v3: "cut", tr: "kesmek" },
  { v1: "deal", v2: "dealt", v3: "dealt", tr: "u ra mak" },
  { v1: "dig", v2: "dug", v3: "dug", tr: "kazmak" },
  { v1: "feed", v2: "fed", v3: "fed", tr: "beslemek" },
  { v1: "feel", v2: "felt", v3: "felt", tr: "hissetmek" },
  { v1: "fight", v2: "fought", v3: "fought", tr: "d�v��mek" },
  { v1: "find", v2: "found", v3: "found", tr: "bulmak" },
  { v1: "fly", v2: "flew", v3: "flown", tr: "u�mak" },
  { v1: "forget", v2: "forgot", v3: "forgotten", tr: "unutmak" },
  { v1: "freeze", v2: "froze", v3: "frozen", tr: "donmak" },
  { v1: "hang", v2: "hung", v3: "hung", tr: "asmak" },
  { v1: "have", v2: "had", v3: "had", tr: "sahip olmak" },
  { v1: "hear", v2: "heard", v3: "heard", tr: "duymak" },
  { v1: "hide", v2: "hid", v3: "hidden", tr: "saklamak" },
  { v1: "hit", v2: "hit", v3: "hit", tr: "vurmak" },
  { v1: "hold", v2: "held", v3: "held", tr: "tutmak" },
  { v1: "keep", v2: "kept", v3: "kept", tr: "saklamak" },
  { v1: "lead", v2: "led", v3: "led", tr: "�nc�l�k etmek" },
  { v1: "leave", v2: "left", v3: "left", tr: "ayr�lmak" },
  { v1: "lend", v2: "lent", v3: "lent", tr: "�d�n�  vermek" },
  { v1: "let", v2: "let", v3: "let", tr: "izin vermek" },
  { v1: "lose", v2: "lost", v3: "lost", tr: "kaybetmek" },
  { v1: "make", v2: "made", v3: "made", tr: "yapmak" },
  { v1: "mean", v2: "meant", v3: "meant", tr: "anlam�na gelmek" },
  { v1: "meet", v2: "met", v3: "met", tr: "bulu�mak" },
  { v1: "pay", v2: "paid", v3: "paid", tr: "�demek" },
  { v1: "put", v2: "put", v3: "put", tr: "koymak" },
  { v1: "read", v2: "read", v3: "read", tr: "okumak" },
  { v1: "ride", v2: "rode", v3: "ridden", tr: "binmek" },
  { v1: "say", v2: "said", v3: "said", tr: "s�ylemek" },
  { v1: "sell", v2: "sold", v3: "sold", tr: "satmak" },
  { v1: "send", v2: "sent", v3: "sent", tr: "g�ndermek" },
  { v1: "set", v2: "set", v3: "set", tr: "ayarlamak" },
  { v1: "shake", v2: "shook", v3: "shaken", tr: "sallamak" },
  { v1: "shine", v2: "shone", v3: "shone", tr: "parlamak" },
  { v1: "shoot", v2: "shot", v3: "shot", tr: "ate� etmek" },
  { v1: "shut", v2: "shut", v3: "shut", tr: "kapatmak" },
  { v1: "sing", v2: "sang", v3: "sung", tr: "�ark s�ylemek" },
  { v1: "sit", v2: "sat", v3: "sat", tr: "oturmak" },
  { v1: "sleep", v2: "slept", v3: "slept", tr: "uyumak" },
  { v1: "speak", v2: "spoke", v3: "spoken", tr: "konu�mak" },
  { v1: "spend", v2: "spent", v3: "spent", tr: "harcamak" },
  { v1: "stand", v2: "stood", v3: "stood", tr: "ayakta durmak" },
  { v1: "steal", v2: "stole", v3: "stolen", tr: "�almak" },
  { v1: "swim", v2: "swam", v3: "swum", tr: "y�zmek" },
  { v1: "take", v2: "took", v3: "taken", tr: "almak" },
  { v1: "teach", v2: "taught", v3: "taught", tr: "��retmek" },
  { v1: "tell", v2: "told", v3: "told", tr: "anlatmak" },
  { v1: "think", v2: "thought", v3: "thought", tr: "d���nmek" },
  { v1: "throw", v2: "threw", v3: "thrown", tr: "atmak" },
  { v1: "understand", v2: "understood", v3: "understood", tr: "anlamak" },
  { v1: "wake", v2: "woke", v3: "woken", tr: "uyanmak" },
  { v1: "wear", v2: "wore", v3: "worn", tr: "giymek" },
  { v1: "win", v2: "won", v3: "won", tr: "kazanmak" },
  { v1: "write", v2: "wrote", v3: "written", tr: "yazmak" },
];
let currentVerb;

function getRandomVerb() {
  const index = Math.floor(Math.random() * verbs.length);
  currentVerb = verbs[index];
  document.getElementById("verb").textContent = currentVerb.v1;
  document.getElementById("verbi").textContent = currentVerb.tr;
document.getElementById("verbo").textContent = `${currentVerb.v2} - ${currentVerb.v3}`;
document.getElementById("v2").value = "";
  document.getElementById("v3").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userV2 = document.getElementById("v2").value.trim().toLowerCase();
  const userV3 = document.getElementById("v3").value.trim().toLowerCase();
  if (userV2 === currentVerb.v2 && userV3 === currentVerb.v3) {
    document.getElementById("result").textContent = "✅ Doğru!";
  } else {
    document.getElementById("result").textContent = `❌ Yanlış! Doğrusu: ${currentVerb.v2}, ${currentVerb.v3}`;
  }
  setTimeout(getRandomVerb, 5000); // 5 saniye sonra yeni fiil
}



function showVerb() {
  const verboDiv = document.getElementById("verbo");
  verboDiv.textContent = `${currentVerb.v2} - ${currentVerb.v3}`;
  verboDiv.style.display = "block";
}



window.onload = getRandomVerb;
