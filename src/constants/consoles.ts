export interface ConsoleModel {
  id: number;
  rankLabel: string;
  brand: string;
  consoleName: string;
  releaseYear: number;
  price: string;
  imageUrl: string;
}

export const CONSOLES_LIST: ConsoleModel[] = [
  {
    id: 1,
    rankLabel: "#1 Mais Vendido da História",
    brand: "Sony",
    consoleName: "PlayStation 2",
    releaseYear: 2000,
    price: "R$ 490,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PS2-Versions.jpg/640px-PS2-Versions.jpg",
  },
  {
    id: 2,
    rankLabel: "#2 Clássico Portátil",
    brand: "Nintendo",
    consoleName: "Nintendo DS Lite",
    releaseYear: 2006,
    price: "R$ 380,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo-DS-Lite-Black-Open.jpg/640px-Nintendo-DS-Lite-Black-Open.jpg",
  },
  {
    id: 3,
    rankLabel: "#3 Híbrido Moderno",
    brand: "Nintendo",
    consoleName: "Nintendo Switch",
    releaseYear: 2017,
    price: "R$ 1.890,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nintendo-Switch-wJoyCons-BlRd-FL.jpg/640px-Nintendo-Switch-wJoyCons-BlRd-FL.jpg",
  },
  {
    id: 4,
    rankLabel: "#4 Ícone Portátil 8-Bit",
    brand: "Nintendo",
    consoleName: "Game Boy Color",
    releaseYear: 1998,
    price: "R$ 420,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Game-Boy-Color-Purple.jpg/640px-Game-Boy-Color-Purple.jpg",
  },
  {
    id: 5,
    rankLabel: "#5 Oitava Geração",
    brand: "Sony",
    consoleName: "PlayStation 4",
    releaseYear: 2013,
    price: "R$ 1.350,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.jpg/640px-PS4-Console-wDS4.jpg",
  },
  {
    id: 6,
    rankLabel: "#6 Revolução 3D e CD",
    brand: "Sony",
    consoleName: "PlayStation 1",
    releaseYear: 1994,
    price: "R$ 360,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PSX-Original-Console-wController.jpg/640px-PSX-Original-Console-wController.jpg",
  },
  {
    id: 7,
    rankLabel: "#7 Fenômeno Familiar",
    brand: "Nintendo",
    consoleName: "Nintendo Wii",
    releaseYear: 2006,
    price: "R$ 410,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wii_console.jpg/640px-Wii_console.jpg",
  },
  {
    id: 8,
    rankLabel: "#8 Nova Geração Sony",
    brand: "Sony",
    consoleName: "PlayStation 5",
    releaseYear: 2020,
    price: "R$ 3.599,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/640px-PlayStation_5_and_DualSense_with_transparent_background.png",
  },
  {
    id: 9,
    rankLabel: "#9 Era de Ouro 16-Bit",
    brand: "Nintendo",
    consoleName: "Super Nintendo (SNES)",
    releaseYear: 1990,
    price: "R$ 550,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/640px-SNES-Mod1-Console-Set.jpg",
  },
  {
    id: 10,
    rankLabel: "#10 Clássico Sétima Geração",
    brand: "Microsoft",
    consoleName: "Xbox 360",
    releaseYear: 2005,
    price: "R$ 620,00",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Xbox-360-Pro-wController.jpg/640px-Xbox-360-Pro-wController.jpg",
  },
];