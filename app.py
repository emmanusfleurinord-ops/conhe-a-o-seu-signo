"""Servidor do projeto Descubra o seu signo, com banco SQLite.

No VS Code, rode:

    python app.py

Depois abra http://127.0.0.1:8000

O arquivo signos.db abre no DB Browser for SQLite.
"""

import json
import sqlite3
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


PASTA = Path(__file__).resolve().parent
BANCO = PASTA / "signos.db"

SIGNOS = [
    ("capricornio", "Capricórnio", "♑", 12, 22, 1, 19, "Terra", "Cardinal", "Saturno", "Preto e marrom", "disciplina e construção", "você tem um jeito constante de subir degrau por degrau."),
    ("aquario", "Aquário", "♒", 1, 20, 2, 18, "Ar", "Fixo", "Urano", "Azul elétrico", "ideias novas e liberdade", "você enxerga o futuro com originalidade."),
    ("peixes", "Peixes", "♓", 2, 19, 3, 20, "Água", "Mutável", "Netuno", "Lilás e verde-água", "imaginação e empatia", "você sente o mundo com uma sensibilidade especial."),
    ("aries", "Áries", "♈", 3, 21, 4, 20, "Fogo", "Cardinal", "Marte", "Vermelho", "coragem para começar", "você nasce pronto para dar o primeiro passo."),
    ("touro", "Touro", "♉", 4, 21, 5, 20, "Terra", "Fixo", "Vênus", "Verde e dourado", "estabilidade e prazer simples", "você valoriza o que é sólido e bem feito."),
    ("gemeos", "Gêmeos", "♊", 5, 21, 6, 20, "Ar", "Mutável", "Mercúrio", "Amarelo", "curiosidade e conversa", "você aprende rápido e conecta ideias."),
    ("cancer", "Câncer", "♋", 6, 21, 7, 22, "Água", "Cardinal", "Lua", "Prata e branco", "cuidado e memória afetiva", "você guarda as pessoas com o coração."),
    ("leao", "Leão", "♌", 7, 23, 8, 22, "Fogo", "Fixo", "Sol", "Dourado", "brilho e criatividade", "você aquece o ambiente só de chegar."),
    ("virgem", "Virgem", "♍", 8, 23, 9, 22, "Terra", "Mutável", "Mercúrio", "Bege e verde-oliva", "organização e melhoria", "você percebe o detalhe que deixa tudo melhor."),
    ("libra", "Libra", "♎", 9, 23, 10, 22, "Ar", "Cardinal", "Vênus", "Rosa e azul-claro", "harmonia e equilíbrio", "você busca justiça e beleza nas relações."),
    ("escorpiao", "Escorpião", "♏", 10, 23, 11, 21, "Água", "Fixo", "Plutão", "Vinho e preto", "intensidade e verdade", "você sente fundo e não se contenta com a superfície."),
    ("sagitario", "Sagitário", "♐", 11, 22, 12, 21, "Fogo", "Mutável", "Júpiter", "Roxo e azul", "aventura e otimismo", "você nasce com vontade de expandir o mapa."),
]


def conectar():
    conn = sqlite3.connect(BANCO, timeout=10)
    conn.row_factory = sqlite3.Row
    return conn


def criar_banco():
    with conectar() as conn:
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS signos (
            id INTEGER PRIMARY KEY,
            chave TEXT NOT NULL UNIQUE,
            nome TEXT NOT NULL,
            simbolo TEXT NOT NULL,
            mes_inicio INTEGER NOT NULL,
            dia_inicio INTEGER NOT NULL,
            mes_fim INTEGER NOT NULL,
            dia_fim INTEGER NOT NULL,
            elemento TEXT NOT NULL,
            qualidade TEXT NOT NULL,
            planeta TEXT NOT NULL,
            cor TEXT NOT NULL,
            energia TEXT NOT NULL,
            significado TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS consultas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            dia INTEGER NOT NULL,
            mes INTEGER NOT NULL,
            ano INTEGER NOT NULL,
            signo TEXT NOT NULL,
            criado_em TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
        );
        """)
        total = conn.execute("SELECT COUNT(*) FROM signos").fetchone()[0]
        if total == 0:
            conn.executemany("""
            INSERT INTO signos (
                chave, nome, simbolo, mes_inicio, dia_inicio, mes_fim, dia_fim,
                elemento, qualidade, planeta, cor, energia, significado
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, SIGNOS)


def no_intervalo(mes, dia, inicio, fim):
    valor = mes * 100 + dia
    a = inicio[0] * 100 + inicio[1]
    b = fim[0] * 100 + fim[1]
    if a <= b:
        return a <= valor <= b
    return valor >= a or valor <= b


def descobrir_signo(mes, dia):
    with conectar() as conn:
        linhas = conn.execute("SELECT * FROM signos").fetchall()
    for linha in linhas:
        inicio = (linha["mes_inicio"], linha["dia_inicio"])
        fim = (linha["mes_fim"], linha["dia_fim"])
        if no_intervalo(mes, dia, inicio, fim):
            return linha["nome"]
    return "Capricórnio"


def salvar_consulta(nome, dia, mes, ano, signo):
    with conectar() as conn:
        conn.execute(
            "INSERT INTO consultas (nome, dia, mes, ano, signo, criado_em) VALUES (?, ?, ?, ?, ?, ?)",
            (nome, dia, mes, ano, signo, datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
        )


class ProjetoHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PASTA), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        caminho = urlparse(self.path).path
        if caminho != "/consulta":
            self.send_error(404)
            return
        tamanho = int(self.headers.get("Content-Length", "0"))
        corpo = self.rfile.read(tamanho).decode("utf-8")
        dados = json.loads(corpo or "{}")
        nome = str(dados.get("nome", "")).strip()
        dia = int(dados.get("dia", 0))
        mes = int(dados.get("mes", 0))
        ano = int(dados.get("ano", 0))
        signo = descobrir_signo(mes, dia)
        if nome and dia and mes and ano:
            salvar_consulta(nome, dia, mes, ano, signo)
            print("Consulta gravada:", nome, dia, mes, ano, signo)
        else:
            print("Consulta recusada:", dados)
        resposta = json.dumps({"signo": signo}, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(resposta)))
        self.end_headers()
        self.wfile.write(resposta)

    def do_GET(self):
        if urlparse(self.path).path == "/consultas":
            with conectar() as conn:
                linhas = conn.execute(
                    "SELECT id, nome, dia, mes, ano, signo, criado_em FROM consultas ORDER BY id DESC"
                ).fetchall()
            dados = [dict(linha) for linha in linhas]
            resposta = json.dumps(dados, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(resposta)))
            self.end_headers()
            self.wfile.write(resposta)
            return
        super().do_GET()


def main():
    criar_banco()
    print("Banco SQLite:", BANCO)
    print("Exemplo: 24/12 é", descobrir_signo(12, 24))
    print("Abra http://127.0.0.1:8000")
    print("No DB Browser, abra o arquivo signos.db")
    servidor = ThreadingHTTPServer(("127.0.0.1", 8000), ProjetoHandler)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
    finally:
        servidor.server_close()


if __name__ == "__main__":
    main()
