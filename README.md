# OneTap

My personal link-in-bio page — all my socials in one place, one tap away.

Built with **React**, **Vite**, and **Tailwind CSS**. It automatically switches between light and dark mode based on your device.

## Links

- 🌐 [Website](https://arrexha.netlify.app/)
- 📸 [Instagram](https://www.instagram.com/arrexha)
- 💼 [LinkedIn](https://linkedin.com/in/arrexha)
- 💻 [GitHub](https://github.com/arrexha)
- 🎮 [Twitch](https://www.twitch.tv/ar_r00)
- 🐦 [X](https://x.com/ArRexha00)

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Project structure

```
src/
├─ data/profile.js       ← name, footer, and links
├─ components/
│  ├─ Avatar.jsx         ← profile picture
│  └─ LinkButton.jsx     ← a single link button
├─ App.jsx               ← page layout
└─ index.css            ← theme colors
public/icons/            ← custom icons
```

## Customize

- **Links:** edit `src/data/profile.js`. Icons come from [Simple Icons](https://simpleicons.org) — just use the brand name in lowercase (e.g. `"instagram"`). For a custom icon, put an `.svg` in `public/icons/` and use `"/icons/name.svg"`.
- **Colors:** change the variables at the top of `src/index.css`.
