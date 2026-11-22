# Top 10 Consoles

Aplicação mobile desenvolvida em **React Native**, **Expo** e **TypeScript** que apresenta um catálogo interativo com os 10 consoles mais marcantes da história dos videogames, com navegação entre cards, exibição de detalhes do console, tela inicial personalizada com logotipo e layout adaptado para dispositivos móveis.

## Funcionalidades

- **Tela de abertura (Splash):** Exibe o logotipo customizado do projeto logo ao iniciar o aplicativo antes de carregar a vitrine principal.
- **Catálogo interativo de consoles:** Navegação entre os 10 consoles por meio dos controles inferiores (`<` e `>`), atualizando imagem, posição no ranking, marca, modelo e valor exibido.
- **Identidade visual própria:** Tema escuro padronizado (`#1E1F22`) com logotipo local (`assets/logo.png`) e imagens locais dedicadas a cada console (`assets/ps2.png` até `assets/xbox.png`).
- **Ajuste de área segura e navegação:** Layout configurado com `SafeAreaView` e espaçamento inferior para manter os controles de navegação acessíveis acima da barra do sistema Android.

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

## Estrutura do projeto

```text
app-consoles/
├── assets/
│   ├── logo.png
│   └── ... (imagens dos consoles, de ps2.png a xbox.png)
├── src/
│   └── components/
│       ├── BuyButton/
│       │   ├── index.tsx
│       │   └── style.ts
│       └── CardView/
│           ├── index.tsx
│           └── style.ts
├── App.tsx
├── app.json
├── package.json
└── README.md
```

---

## 🤝 Conecte-se Comigo

<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---
