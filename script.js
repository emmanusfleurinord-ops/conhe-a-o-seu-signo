const SIGNS = [
      { key: "capricornio", name: "Capricórnio", symbol: "♑", start: [12,22], end: [1,19], element: "Terra", quality: "Cardinal", planet: "Saturno", color: "Preto e marrom", energy: "disciplina e construção",
        meaning: "você tem um jeito constante de subir degrau por degrau.",
        relation: "o trabalho, o tempo e as metas de longo prazo",
        phrases: ["Gosta de organizar o caminho antes de sair correndo.", "É confiável quando assume uma responsabilidade.", "Transforma esforço em resultado.", "Tem paciência para projetos grandes.", "Valoriza conquista de verdade, não só aparência."] },
      { key: "aquario", name: "Aquário", symbol: "♒", start: [1,20], end: [2,18], element: "Ar", quality: "Fixo", planet: "Urano", color: "Azul elétrico", energy: "ideias novas e liberdade",
        meaning: "você enxerga o futuro com originalidade.",
        relation: "amizades, tecnologia e o que é diferente",
        phrases: ["Pensa fora do comum e gosta de inovar.", "Defende o grupo e as causas da turma.", "Tem um humor inteligente.", "Precisa de espaço para ser quem é.", "Inspira os outros com ideias frescas."] },
      { key: "peixes", name: "Peixes", symbol: "♓", start: [2,19], end: [3,20], element: "Água", quality: "Mutável", planet: "Netuno", color: "Lilás e verde-água", energy: "imaginação e empatia",
        meaning: "você sente o mundo com uma sensibilidade especial.",
        relation: "sonhos, arte e cuidado com as pessoas",
        phrases: ["Percebe o clima da sala sem ninguém explicar.", "Tem imaginação forte.", "Ajuda quem precisa com gentileza.", "Gosta de músicas e histórias.", "Encontra beleza em detalhes pequenos."] },
      { key: "aries", name: "Áries", symbol: "♈", start: [3,21], end: [4,20], element: "Fogo", quality: "Cardinal", planet: "Marte", color: "Vermelho", energy: "coragem para começar",
        meaning: "você nasce pronto para dar o primeiro passo.",
        relation: "desafios, movimento e liderança natural",
        phrases: ["Tem coragem de começar o que os outros só pensam.", "Leva energia para o grupo.", "Aprende fazendo.", "Gosta de metas claras.", "Quando acredita, vai até o fim."] },
      { key: "touro", name: "Touro", symbol: "♉", start: [4,21], end: [5,20], element: "Terra", quality: "Fixo", planet: "Vênus", color: "Verde e dourado", energy: "estabilidade e prazer simples",
        meaning: "você valoriza o que é sólido e bem feito.",
        relation: "conforto, natureza e constância",
        phrases: ["Tem gosto para coisas bonitas e duráveis.", "É paciente quando acredita no caminho.", "Protege quem gosta.", "Prefere qualidade a pressa.", "Traz calma para os amigos."] },
      { key: "gemeos", name: "Gêmeos", symbol: "♊", start: [5,21], end: [6,20], element: "Ar", quality: "Mutável", planet: "Mercúrio", color: "Amarelo", energy: "curiosidade e conversa",
        meaning: "você aprende rápido e conecta ideias.",
        relation: "comunicação, estudo e variedade",
        phrases: ["Faz perguntas boas e conta histórias bem.", "Se adapta a turmas diferentes.", "Tem mente ágil.", "Gosta de descobrir assunto novo.", "Transforma informação em papo interessante."] },
      { key: "cancer", name: "Câncer", symbol: "♋", start: [6,21], end: [7,22], element: "Água", quality: "Cardinal", planet: "Lua", color: "Prata e branco", energy: "cuidado e memória afetiva",
        meaning: "você guarda as pessoas com o coração.",
        relation: "família, casa e proteção",
        phrases: ["Lembra datas e detalhes importantes.", "Cria um ambiente acolhedor.", "É leal com quem confia.", "Sente com profundidade.", "Cuida do grupo de um jeito silencioso e forte."] },
      { key: "leao", name: "Leão", symbol: "♌", start: [7,23], end: [8,22], element: "Fogo", quality: "Fixo", planet: "Sol", color: "Dourado", energy: "brilho e criatividade",
        meaning: "você aquece o ambiente só de chegar.",
        relation: "expressão, coragem e generosidade",
        phrases: ["Tem presença e um jeito marcante.", "Gosta de criar e apresentar ideias.", "Anima a equipe.", "É generoso com elogios sinceros.", "Brilha mais quando pode ser autêntico."] },
      { key: "virgem", name: "Virgem", symbol: "♍", start: [8,23], end: [9,22], element: "Terra", quality: "Mutável", planet: "Mercúrio", color: "Bege e verde-oliva", energy: "organização e melhoria",
        meaning: "você percebe o detalhe que deixa tudo melhor.",
        relation: "método, cuidado e precisão",
        phrases: ["Repara no que ninguém viu.", "Gosta de deixar as coisas no lugar.", "Ajuda com soluções práticas.", "É observador e inteligente.", "Transforma bagunça em clareza."] },
      { key: "libra", name: "Libra", symbol: "♎", start: [9,23], end: [10,22], element: "Ar", quality: "Cardinal", planet: "Vênus", color: "Rosa e azul-claro", energy: "harmonia e equilíbrio",
        meaning: "você busca justiça e beleza nas relações.",
        relation: "parcerias, arte e diplomacia",
        phrases: ["Sabe ouvir os dois lados.", "Tem bom gosto.", "Busca paz sem ser omisso.", "Une pessoas diferentes.", "Deixa o ambiente mais elegante e justo."] },
      { key: "escorpiao", name: "Escorpião", symbol: "♏", start: [10,23], end: [11,21], element: "Água", quality: "Fixo", planet: "Plutão", color: "Vinho e preto", energy: "intensidade e verdade",
        meaning: "você sente fundo e não se contenta com a superfície.",
        relation: "mistério, coragem emocional e transformação",
        phrases: ["É leal de um jeito raro.", "Enxerga o que está por trás das palavras.", "Tem força para recomeçar.", "Protege os seus com seriedade.", "Transforma fases difíceis em aprendizado."] },
      { key: "sagitario", name: "Sagitário", symbol: "♐", start: [11,22], end: [12,21], element: "Fogo", quality: "Mutável", planet: "Júpiter", color: "Roxo e azul", energy: "aventura e otimismo",
        meaning: "você nasce com vontade de expandir o mapa.",
        relation: "viagens, estudo e liberdade",
        phrases: ["Vê possibilidade onde outros veem limite.", "Gosta de aprender coisas grandes.", "Contagia com humor e esperança.", "Precisa de horizonte.", "Inspira a turma a tentar o novo."] }
    ];

    const $ = (id) => document.getElementById(id);
    const screens = {
      home: $("home"),
      loading: $("loading"),
      result: $("result"),
      wheel: $("wheel"),
      compat: $("compat")
    };

    let current = null;
    let personName = "";
    let speaking = false;

    function show(name) {
      Object.values(screens).forEach((s) => s.classList.remove("active"));
      screens[name].classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function inRange(month, day, start, end) {
      const value = month * 100 + day;
      const a = start[0] * 100 + start[1];
      const b = end[0] * 100 + end[1];
      if (a <= b) return value >= a && value <= b;
      return value >= a || value <= b;
    }

    function signFromParts(month, day) {
      return SIGNS.find((s) => inRange(Number(month), Number(day), s.start, s.end)) || SIGNS[0];
    }

    function formatRange(sign) {
      const f = (arr) => `${String(arr[1]).padStart(2,"0")}/${String(arr[0]).padStart(2,"0")}`;
      return `${f(sign.start)} a ${f(sign.end)}`;
    }

    function capitalize(name) {
      return String(name || "")
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map(function (word) {
          if (!word) return "";
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    }

    function fillYears(selectId) {
      var sel = $(selectId);
      var year = 2026;
      for (var y = year; y >= 1950; y--) {
        var opt = document.createElement("option");
        opt.value = String(y);
        opt.textContent = String(y);
        sel.appendChild(opt);
      }
    }

    function fillDays(selectId) {
      var sel = $(selectId);
      for (var d = 1; d <= 31; d++) {
        var opt = document.createElement("option");
        opt.value = String(d);
        opt.textContent = String(d);
        sel.appendChild(opt);
      }
    }

    function showError(msg) {
      var el = $("formError");
      if (!el) return toast(msg);
      el.style.display = "block";
      el.textContent = msg;
    }

    function clearError() {
      var el = $("formError");
      if (!el) return;
      el.style.display = "none";
      el.textContent = "";
    }

    function buildSpeech(name, sign) {
      return `${name}, o seu signo é ${sign.name}. Isso significa que ${sign.meaning} O seu signo tem relação com ${sign.relation}. Ele pertence ao elemento ${sign.element}, é regido por ${sign.planet} e a energia do momento é ${sign.energy}. Sua cor da sorte é ${sign.color}. ${sign.phrases[0]} ${sign.phrases[1]}`;
    }

    function renderResult(name, sign) {
      current = { name, sign };
      $("symbol").textContent = sign.symbol;
      $("hello").textContent = `${name}, o seu signo é`;
      $("signName").textContent = sign.name;
      $("signDates").textContent = formatRange(sign);
      $("chips").innerHTML = `
        <span class="chip">Elemento ${sign.element}</span>
        <span class="chip">${sign.quality}</span>
        <span class="chip">Planeta ${sign.planet}</span>
        <span class="chip">Cor ${sign.color}</span>
      `;
      $("story").innerHTML = `
        <small>Revelação</small>
        <p style="margin-top:10px;font-size:18px;line-height:1.55">
          <strong>${name}</strong>, o seu signo é <strong>${sign.name}</strong>.
          Isso significa que ${sign.meaning}
          O seu signo tem relação com ${sign.relation}.
          A energia do momento é <strong>${sign.energy}</strong>.
        </p>
      `;
      $("phrases").innerHTML = sign.phrases.map((p) => `<li>${p}</li>`).join("");
      $("compareBox").hidden = true;
      $("compatChoice").style.display = "block";
      $("compatPanel").style.display = "none";
    }

    function listVoices() {
      return window.speechSynthesis ? window.speechSynthesis.getVoices() || [] : [];
    }

    function pickVoice() {
      var voices = listVoices();
      var box = $("voicePick");
      if (box && box.value) {
        var chosen = voices.find(function (v) { return v.name === box.value; });
        if (chosen) return chosen;
      }
      return voices.find(function (v) { return /pt-BR/i.test(v.lang); })
        || voices.find(function (v) { return /^pt/i.test(v.lang); })
        || voices[0]
        || null;
    }

    function fillVoicePick() {
      var box = $("voicePick");
      if (!box) return;
      var voices = listVoices();
      var current = box.value;
      box.innerHTML = "";
      voices.forEach(function (v) {
        var opt = document.createElement("option");
        opt.value = v.name;
        opt.textContent = v.name + " (" + v.lang + ")";
        box.appendChild(opt);
      });
      var pt = voices.find(function (v) { return /pt-BR/i.test(v.lang); })
        || voices.find(function (v) { return /^pt/i.test(v.lang); });
      if (current) box.value = current;
      else if (pt) box.value = pt.name;
    }

    function speakText(text) {
      if (!("speechSynthesis" in window)) {
        toast("Seu navegador não tem voz.");
        return;
      }
      var clean = String(text || "").replace(/\s+/g, " ").trim();
      if (!clean) return;
      window.speechSynthesis.cancel();
      fillVoicePick();
      var voice = pickVoice();
      if (!voice) {
        toast("Este computador não tem nenhuma voz instalada.");
        return;
      }
      toast("Voz: " + voice.name);
      var parts = clean.split(". ").filter(Boolean);
      speaking = true;
      if ($("btnSpeak")) $("btnSpeak").textContent = "Parar voz";
      var index = 0;
      function sayNext() {
        if (!speaking || index >= parts.length) {
          speaking = false;
          if ($("btnSpeak")) $("btnSpeak").textContent = "Ouvir de novo";
          return;
        }
        var piece = parts[index];
        if (piece.slice(-1) !== ".") piece += ".";
        var utter = new SpeechSynthesisUtterance(piece);
        utter.lang = voice.lang || "pt-BR";
        utter.rate = 0.88;
        utter.pitch = 1;
        utter.volume = 1;
        utter.voice = voice;
        utter.onend = function () { index += 1; sayNext(); };
        utter.onerror = function () {
          speaking = false;
          toast("A voz falhou. Tenta de novo em Ouvir resultado.");
        };
        window.speechSynthesis.speak(utter);
      }
      setTimeout(sayNext, 150);
    }

    function stopSpeak() {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      speaking = false;
      $("btnSpeak").textContent = "Ouvir resultado";
    }

    function toast(msg) {
      const el = $("toast");
      el.textContent = msg;
      el.style.display = "block";
      setTimeout(() => { el.style.display = "none"; }, 2200);
    }

    let lastCompatText = "";

    function elementScore(signA, signB) {
      var a = signA.element;
      var b = signB.element;
      var score = 68;
      var title = "Diferentes e interessantes";
      var text = "Não é igual, e isso pode ensinar bastante se houver respeito e conversa.";
      if (signA.key === signB.key) {
        score = 92;
        title = "Mesma estrela";
        text = "Os dois têm o mesmo signo. A identificação é forte e a amizade pode fluir com facilidade.";
      } else if (a === b) {
        score = 86;
        title = "Sintonia alta";
        text = "Os dois falam a mesma língua do elemento. Fica fácil se entender no dia a dia.";
      } else {
        var pair = [a, b].sort().join("|");
        if (pair === "Ar|Fogo" || pair === "Água|Terra") {
          score = 80;
          title = "Boa combinação";
          text = "As energias se completam. Um traz movimento, o outro traz equilíbrio.";
        } else {
          score = 64;
          title = "Ritmos diferentes";
          text = "O jeito de cada um é bem diferente. Com paciência, a dupla aprende bastante.";
        }
      }
      if (signA.quality === signB.quality && signA.key !== signB.key) score += 3;
      if (score > 98) score = 98;
      return { score: score, title: title, text: text };
    }

    function buildCompatSpeech(n1, s1, n2, s2, fit) {
      return n1 + " é " + s1.name + " e " + n2 + " é " + s2.name + ". A sintonia de vocês é de " + fit.score + " por cento. " + fit.title + ". " + fit.text;
    }

    function renderCompat(n1, s1, n2, s2) {
      var fit = elementScore(s1, s2);
      lastCompatText = buildCompatSpeech(n1, s1, n2, s2, fit);
      $("compatScore").textContent = fit.score + "%";
      $("compatTitle").textContent = fit.title;
      $("compatSym1").textContent = s1.symbol;
      $("compatSym2").textContent = s2.symbol;
      $("compatSign1").textContent = s1.name;
      $("compatSign2").textContent = s2.name;
      $("compatName1").textContent = n1 + " • " + s1.element;
      $("compatName2").textContent = n2 + " • " + s2.element;
      $("compatStory").innerHTML = "<small>Revelação</small><p style='margin-top:10px;font-size:18px;line-height:1.55'><strong>" + n1 + "</strong> e <strong>" + n2 + "</strong>, a sintonia de vocês é de <strong>" + fit.score + "%</strong>. " + fit.text + " Isso é uma leitura leve de amizade e energia, não uma regra.</p>";
      $("compatResult").hidden = false;
      $("compatResult").scrollIntoView({ behavior: "smooth", block: "start" });
      speakText(lastCompatText);
    }

    function descobrirCompat() {
      var n1 = capitalize($("cNome1").value);
      var n2 = capitalize($("cNome2").value);
      var err = $("compatError");
      err.style.display = "none";
      if (!n1 || !n2) {
        err.style.display = "block";
        err.textContent = "Escreva os dois nomes.";
        return;
      }
      if (!$("cDia1").value || !$("cMes1").value || !$("cAno1").value || !$("cDia2").value || !$("cMes2").value || !$("cAno2").value) {
        err.style.display = "block";
        err.textContent = "Escolha a data completa das duas pessoas.";
        return;
      }
      var s1 = signFromParts($("cMes1").value, $("cDia1").value);
      var s2 = signFromParts($("cMes2").value, $("cDia2").value);
      renderCompat(n1, s1, n2, s2);
    }
    window.descobrirCompat = descobrirCompat;

    function mostrarConsultas() {
      var box = $("savedList");
      if (!box) return;
      fetch("http://127.0.0.1:8000/consultas")
        .then(function (res) { return res.json(); })
        .then(function (linhas) {
          if (!linhas.length) {
            box.textContent = "O banco ainda não tem consultas.";
            return;
          }
          box.innerHTML = linhas.slice(0, 5).map(function (linha) {
            return "<p>" + linha.nome + " • " + linha.dia + "/" + linha.mes + "/" + linha.ano + " • " + linha.signo + "</p>";
          }).join("");
        })
        .catch(function () {
          box.textContent = "Não consegui ler o banco. O Python precisa estar aberto.";
        });
    }

    function salvarConsulta(nome, dia, mes, ano, signo) {
      var status = $("saveStatus");
      if (status) status.textContent = "Gravando no banco...";
      fetch("http://127.0.0.1:8000/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome,
          dia: Number(dia),
          mes: Number(mes),
          ano: Number(ano),
          signo: signo
        })
      }).then(function (res) {
        if (!res.ok) {
          if (status) status.textContent = "A tela não gravou no banco.";
          return;
        }
        if (status) status.textContent = "Gravado no banco: " + nome + " é " + signo + ".";
        mostrarConsultas();
      }).catch(function () {
        if (status) status.textContent = "A tela não gravou. Abra com python3 app.py e use a porta 8000.";
      });
    }

    function revelarSigno(e) {
      if (e) e.preventDefault();
      try {
        clearError();
        personName = capitalize($("nome").value);
        var dia = $("dia").value;
        var mes = $("mes").value;
        var ano = $("ano").value;
        if (!personName) {
          showError("Escreva o seu nome.");
          return;
        }
        if (!dia || !mes || !ano) {
          showError("Escolha o dia, o mês e o ano de nascimento.");
          return;
        }
        var sign = signFromParts(mes, dia);
        salvarConsulta(personName, dia, mes, ano, sign.name);
        show("loading");
        stopSpeak();
        setTimeout(function () {
          renderResult(personName, sign);
          show("result");
          speakText(buildSpeech(personName, sign));
        }, 900);
      } catch (err) {
        showError("Não deu para revelar agora. Tente de novo.");
      }
    }

    window.revelarSigno = revelarSigno;
    $("formMain").addEventListener("submit", revelarSigno);
    $("btnReveal").addEventListener("click", revelarSigno);

    $("btnSpeak").addEventListener("click", () => {
      if (!current) return;
      if (speaking) stopSpeak();
      else speakText(buildSpeech(current.name, current.sign));
    });

    $("btnAgain").addEventListener("click", () => {
      stopSpeak();
      show("home");
    });

    $("btnShare").addEventListener("click", async () => {
      if (!current) return;
      const text = buildSpeech(current.name, current.sign) + " — Conheça o Seu Signo";
      if (navigator.share) {
        try { await navigator.share({ title: "Conheça o Seu Signo", text }); return; }
        catch (_) {}
      }
      await navigator.clipboard.writeText(text);
      toast("Resultado copiado para colar onde quiser");
    });

    $("btnCompare").addEventListener("click", () => {
      if (!current) return;
      const n2 = capitalize($("nome2").value);
      const d2 = $("dia2").value;
      const m2 = $("mes2").value;
      const a2 = $("ano2").value;
      if (!n2) { toast("Escreva o nome da outra pessoa"); return; }
      if (!d2 || !m2 || !a2) { toast("Escolha a data completa da outra pessoa"); return; }
      const s1 = current.sign;
      const s2 = signFromParts(m2, d2);
      salvarConsulta(n2, d2, m2, a2, s2.name);
      const fit = elementScore(s1, s2);
      const speech = current.name + ", o seu signo é " + s1.name + ". " + n2 + " é do signo de " + s2.name + ". Isso significa que " + s2.meaning + " O signo de " + n2 + " tem relação com " + s2.relation + ", elemento " + s2.element + " e planeta " + s2.planet + ". A sintonia de vocês é de " + fit.score + " por cento. " + fit.text;
      lastCompatText = speech;
      $("compareBox").hidden = false;
      $("compareBox").innerHTML = `
        <div class="score">${fit.score}%</div>
        <p style="text-align:center;color:var(--gold-2);margin-bottom:12px"><strong>${fit.title}</strong></p>
        <div class="duo">
          <div>
            <span style="font-size:28px">${s1.symbol}</span>
            <b>${s1.name}</b>
            <small>${current.name} • ${s1.element}</small>
          </div>
          <div>
            <span style="font-size:28px">${s2.symbol}</span>
            <b>${s2.name}</b>
            <small>${n2} • ${s2.element}</small>
          </div>
        </div>
        <p style="margin-top:8px;line-height:1.55">
          <strong>${n2}</strong>, o signo é <strong>${s2.name}</strong> (${formatRange(s2)}).
          Isso significa que ${s2.meaning}
          O signo de ${n2} tem relação com ${s2.relation}.
          Elemento: <strong>${s2.element}</strong>.
          Qualidade: <strong>${s2.quality}</strong>.
          Planeta: <strong>${s2.planet}</strong>.
          Cor da sorte: <strong>${s2.color}</strong>.
          Energia: <strong>${s2.energy}</strong>.
        </p>
        <p style="margin-top:10px;line-height:1.55">${s2.phrases.slice(0,4).map(function(p){return "• " + p;}).join("<br>")}</p>
        <p style="margin-top:12px;line-height:1.55"><strong>${current.name}</strong> e <strong>${n2}</strong>: ${fit.text}</p>
        <button class="btn" type="button" id="btnCompareSpeak" style="margin-top:14px">Ouvir essa comparação</button>
      `;
      $("compareBox").scrollIntoView({ behavior: "smooth", block: "start" });
      var speakBtn = $("btnCompareSpeak");
      if (speakBtn) speakBtn.addEventListener("click", function () {
        if (speaking) stopSpeak();
        else speakText(speech);
      });
      speakText(speech);
    });

    $("btnWantCompat").addEventListener("click", () => {
      $("compatChoice").style.display = "none";
      $("compatPanel").style.display = "block";
      $("compatPanel").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("btnCancelCompat").addEventListener("click", () => {
      $("compatPanel").style.display = "none";
      $("compatChoice").style.display = "block";
      $("compareBox").hidden = true;
    });
    $("btnCompatBack").addEventListener("click", () => { stopSpeak(); show("home"); });
    $("btnCompatGo").addEventListener("click", descobrirCompat);
    $("btnCompatSpeak").addEventListener("click", () => {
      if (!lastCompatText) return;
      if (speaking) stopSpeak();
      else speakText(lastCompatText);
    });
    $("btnCompatShare").addEventListener("click", async () => {
      if (!lastCompatText) return;
      const text = lastCompatText + " — Conheça o Seu Signo";
      if (navigator.share) {
        try { await navigator.share({ title: "Compatibilidade", text }); return; }
        catch (_) {}
      }
      await navigator.clipboard.writeText(text);
      toast("Resultado copiado");
    });

    function drawWheel() {
      $("wheelGrid").innerHTML = SIGNS.map((s) => `
        <button class="sign-btn" type="button" data-key="${s.key}">
          <span style="font-size:28px">${s.symbol}</span>
          <b>${s.name}</b>
        </button>
      `).join("");
    }

    $("wheelGrid").addEventListener("click", (e) => {
      const btn = e.target.closest(".sign-btn");
      if (!btn) return;
      document.querySelectorAll(".sign-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const sign = SIGNS.find((s) => s.key === btn.dataset.key);
      $("wheelInfo").innerHTML = `
        <div style="font-size:28px">${sign.symbol}</div>
        <h2 style="margin:6px 0">${sign.name}</h2>
        <p>${formatRange(sign)} • ${sign.element} • ${sign.planet}</p>
        <p style="margin-top:8px">Isso significa que ${sign.meaning} Tem relação com ${sign.relation}. Energia: ${sign.energy}.</p>
      `;
    });

    $("btnWheelMini").addEventListener("click", () => { stopSpeak(); show("wheel"); });
    $("btnBackHome").addEventListener("click", () => show("home"));

    fillDays("dia");
    fillDays("dia2");
    fillDays("cDia1");
    fillDays("cDia2");
    fillYears("ano");
    fillYears("cAno1");
    fillYears("cAno2");
    fillYears("ano2");
    drawWheel();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function () {
        fillVoicePick();
      };
      fillVoicePick();
    }

    try {
      const canvas = $("stars");
      const ctx = canvas.getContext("2d");
      let stars = [];
      function resize() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        stars = Array.from({ length: 90 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.3,
          a: Math.random(),
          s: Math.random() * 0.008 + 0.002
        }));
      }
      function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((st) => {
          st.a += st.s;
          const alpha = 0.25 + Math.abs(Math.sin(st.a)) * 0.7;
          ctx.fillStyle = `rgba(240,215,140,${alpha})`;
          ctx.beginPath();
          ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(tick);
      }
      addEventListener("resize", resize);
      resize();
      tick();
    } catch (err) {}
