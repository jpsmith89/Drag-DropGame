# Drag & Drop Fun

A simple, free shadow-matching game for 3–5 year olds. Drag each picture onto its matching shadow.

- 6 themes: Vehicles, Fruit, Clothes, Sea, Farm, Yummy
- Choose 3, 4 or 5 pieces per round
- Sounds, spoken names ("Banana!") and applause at the end (mute button top right)
- Works with finger or mouse on phones, tablets and computers
- No dependencies, no build step, no tracking – just `index.html`, `style.css`, `game.js`

## Play locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Add or change pictures

Open `game.js` and edit the `THEMES` list at the top. Each picture is an emoji plus the name that is spoken.

## Host free on GitHub Pages

1. Create a new **public** repository on GitHub.
2. Push this folder to it (branch `main`).
3. In the repo go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`, and Save.
4. After about a minute the game is live at `https://<your-username>.github.io/<repo-name>/`.
