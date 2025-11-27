# 🎮 Phaser Multiplayer Platform Game

Un joc de plataformes multiplayer desenvolupat amb Phaser 3 i Socket.IO, on múltiples jugadors poden jugar junts en temps real recollint estrelles i evitant bombes. Les estrelles i les bombes no estan al servidor si no als clients, per això no són comunes. Fixeu-vos-hi!

## ✨ Característiques

- **Multiplayer en temps real** - Fins a múltiples jugadors connectats simultàniament
- **Sincronització incompleta** - Els jugadors NO comparteixen ni estrelles ni bombes
- **Sistema de puntuació individual** - Cada jugador té la seva pròpia puntuació
- **Mort individual** - Els jugadors moren individualment però el joc continua per als altres
- **Interfície responsive** - Adaptat per a diferents mides de pantalla

## 🛠 Tecnologies Utilitzades

- **Frontend**: Phaser 3.11.0
- **Backend**: Node.js + Express
- **Comunicació en temps real**: Socket.IO
- **Llenguatges**: JavaScript, HTML5, CSS3

## 🚀 Instal·lació i Execució

### Prerequisits
- Node.js (versió 14 o superior)
- npm o yarn

### Passos d'instal·lació

1. **Clona el repositori**:
```bash
git clone <url-del-repositori>
cd phaser-multiplayer-game
```

2. **Instal·la les dependències**:
```bash
npm install
```

3. **Configura els assets**:
   - Assegura't que tens la carpeta `public/assets/` amb les següents imatges:
     - `sky.png` (fons)
     - `platform.png` (plataformes)
     - `star.png` (estrelles)
     - `bomb.png` (bombes)
     - `dude.png` (spritesheet del jugador)

4. **Inicia el servidor**:
```bash
npm start
```

5. **Obre el joc**:
   - Obre el teu navegador i ves a `http://localhost:3000`
   - Obre múltiples pestanyes/finestres per provar el multiplayer

## 🎯 Com Jugar

### Controles
- **Fletxa Esquerra/Dreta**: Moure el personatge
- **Fletxa Amunt**: Saltar
- **Recarrega la pàgina**: Reiniciar el joc (si has mort)

### Objectiu
- Recull totes les estrelles per sumar punts
- Evita les bombes que apareixen quan es recullen totes les estrelles
- Competiu amb altres jugadors per la major puntuació

### Mecàniques del Joc
- **Estrelles**: NO compartides entre tots els jugadors
- **Bombes**: NO sincronitzades entre tots els clients
- **Puntuació**: Individual per cada jugador
- **Mort**: Només afecta al jugador que toca la bomba

## 📁 Estructura del Projecte

```
phaser-multiplayer-game/
├── public/
│   ├── assets/
│   │   ├── sky.png
│   │   ├── ground.png
│   │   ├── star.png
│   │   ├── bomb.png
│   │   └── dude.png
│   └── index.html
├── index.js
├── package.json
└── README.md
```

## 🔧 Estructura del Codi

### Servidor (index.js)
- Gestiona les connexions dels jugadors
- Sincronitza estrelles i bombes entre clients
- Controla l'estat del joc global

### Client (index.html)
- Renderitza el joc amb Phaser 3
- Gestiona la física i les col·lisions
- Comunica amb el servidor via Socket.IO

## 🌐 Funcionament del Multiplayer

### Sincronització
- **Jugadors**: Les posicions s'actualitzen 60 vegades per segon
- **Estrelles**: Estat gestionat pel servidor, visibles per tots els jugadors
- **Bombes**: Generades pel servidor quan es recullen totes les estrelles

### Events de Socket.IO
- `updatePlayers`: Sincronitza les posicions dels jugadors
- `starsUpdate`: Actualitza l'estat de les estrelles
- `bombsUpdate`: Actualitza les bombes al joc
- `collectStar`: Notifica quan un jugador recull una estrella
- `playerDied`: Notifica la mort d'un jugador

## 🐛 Resolució de Problemes

### Problemes Comuns

1. **"Estrelles no apareixen"**
   - Verifica que el servidor estigui executant-se
   - Comprova la consola del navegador per errors

2. **"Error de connexió Socket.IO"**
   - Assegura't que el servidor està en el port 3000
   - Verifica que no hi hagi firewalls bloquejant la connexió

3. **"Assets no es carreguen"**
   - Confirma que la carpeta `public/assets/` existeix
   - Verifica els noms dels arxius d'assets

## 🔮 Possibles Millores Futures

- [ ] Sistema de sales per a grups de jugadors
- [ ] Diferents mapes o nivells
- [ ] Power-ups i habilitats especials
- [ ] Chat integrat entre jugadors
- [ ] Líderboard global
- [ ] So i efectes sonors

## 📝 Llicència

Aquest projecte està sota la Llicència MIT.

## 📝 Llicència

[Projecte amb el que es basa](https://www.youtube.com/watch?v=JhK1VgYZx6E)

---

**Diverteix-te jugant!** 🎉