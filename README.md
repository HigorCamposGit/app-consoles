# Como Consumir API em APPs React Native na Prática

Aplicação mobile desenvolvida em **React Native**, **Expo** e **TypeScript** que apresenta um catálogo interativo com os 10 consoles mais marcantes da história dos videogames, com navegação entre cards, exibição de detalhes do console, tela inicial personalizada com logotipo e layout adaptado para dispositivos móveis.

## Funcionalidades

- **Tela de abertura (Splash):** Exibe o logotipo customizado do projeto logo ao iniciar o aplicativo antes de carregar a vitrine principal.
- **Catálogo interativo de consoles:** Navegação entre os 10 consoles por meio dos controles inferiores (`<` e `>`), atualizando imagem, posição no ranking, marca, modelo e valor exibido.
- **Identidade visual própria:** Tema escuro padronizado (`#1E1F22`) com logotipo local (`assets/logo.png`) e imagens locais dedicadas a cada console (`assets/ps2.png` até `assets/xbox.png`).
- **Ajuste de área segura e navegação:** Layout configurado com `SafeAreaView` e espaçamento inferior para manter os controles de navegação acessíveis acima da barra do sistema Android.
  
---
## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- 
---
## Estrutura do projeto

- `assets/` — Logotipo (`logo.png`) e imagens locais dos consoles (`ps2.png` até `xbox.png`).
- `src/components/BuyButton/` — Componente e estilos do botão de ação.
- `src/components/CardView/` — Componente e estilos da vitrine e controles de navegação.
- `App.tsx` — Tela de abertura (splash) e montagem da aplicação.
- `app.json` — Configurações do Expo, nome, slug, ícone e pacote Android.
- `package.json` — Dependências e scripts do projeto.
- `README.md` — Documentação do repositório.

## Como executar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.
- Aplicativo **Expo Go** instalado no smartphone (Android ou iOS) para testes via rede ou tunnel.

### Passo a passo

1. Clone o repositório: `git clone https://github.com/digitalinnovationone/trilha-react-native-expo-lamborghini-app`
2. Acesse a pasta do projeto: `cd app-consoles`
3. Instale as dependências: `npm install`
4. Inicie o servidor do Expo: `npx expo start --tunnel --clear`
5. Escaneie o QR Code exibido no terminal usando o aplicativo **Expo Go** no celular.

## Agradecimentos e créditos

Agradecimento especial ao professor **Felipe Aguiar** e à **Digital Innovation One (DIO)** pelos ensinamentos durante a trilha e pelo projeto base que inspirou esta aplicação:

- Repositório base: [digitalinnovationone/trilha-react-native-expo-lamborghini-app](https://github.com/digitalinnovationone/trilha-react-native-expo-lamborghini-app)

## Autor

Desenvolvido por **Higor de Campos**.

- LinkedIn: [https://www.linkedin.com/in/higor-de-campos-a3187b16b/](https://www.linkedin.com/in/higor-de-campos-a3187b16b/)
- GitHub: [https://github.com/HigorCamposGit](https://github.com/HigorCamposGit)
