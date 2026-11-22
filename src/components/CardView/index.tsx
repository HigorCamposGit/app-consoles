import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, ImageSourcePropType } from "react-native";

// Importa o logo do topo (que você já substituiu)
import Logo from "../../../assets/logo.png";

// Importa as 10 imagens locais que acabamos de gerar
import Ps2Image from "../../../assets/ps2.png";
import N64Image from "../../../assets/n64.png";
import SnesImage from "../../../assets/snes.png";
import GenesisImage from "../../../assets/genesis.png";
import Ps1Image from "../../../assets/ps1.png";
import DreamcastImage from "../../../assets/dreamcast.png";
import NesImage from "../../../assets/nes.png";
import Atari2600Image from "../../../assets/atari2600.png";
import GameCubeImage from "../../../assets/gamecube.png";
import XboxImage from "../../../assets/xbox.png";

import { styles } from "./style";
import Divider from "../Divider";
import BuyButton from "../BuyButton";
import { ConsoleModel } from "./props";
import {
  handleNextItem,
  handlePreviousItem,
  loadConsoleData,
} from "./actions";

export default function CardView() {
  const [consoleData, setConsoleData] = useState<ConsoleModel | null>(null);

  useEffect(() => {
    // Carrega o primeiro console ao abrir
    loadConsoleData(1, setConsoleData);
  }, []);

  // Função auxiliar para mapear o ID do console para a imagem correta
  const getConsoleImage = (id?: number): ImageSourcePropType => {
    switch (id) {
      case 1: return Ps2Image;
      case 2: return N64Image;
      case 3: return SnesImage;
      case 4: return GenesisImage;
      case 5: return Ps1Image;
      case 6: return DreamcastImage;
      case 7: return NesImage;
      case 8: return Atari2600Image;
      case 9: return GameCubeImage;
      case 10: return XboxImage;
      default: return Ps2Image; // Imagem padrão caso o ID não exista
    }
  };

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} resizeMode="contain" />
      <Text style={styles.headerSubtitle}>TOP 10 CONSOLES</Text>
    </View>
  );

  const renderConsoleDetails = () => (
    <View style={styles.detailsBox}>
      <Text style={styles.rankText}>{consoleData?.rankLabel}</Text>
      <Text style={styles.consoleBrand}>
        {consoleData?.brand} • {consoleData?.releaseYear}
      </Text>
      <Text style={styles.consoleName}>{consoleData?.consoleName}</Text>
    </View>
  );

  // Renderiza a imagem usando a função de mapeamento acima
  const renderConsoleImage = () => (
    <View style={styles.consolePhotoWrapper}>
      <Image
        style={styles.image}
        source={getConsoleImage(consoleData?.id)}
        resizeMode="contain" // Garante que a imagem caiba sem cortar
      />
    </View>
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem(consoleData, setConsoleData)}
      />
      <Text style={styles.priceLabel}>{consoleData?.price}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem(consoleData, setConsoleData)}
      />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderConsoleDetails()}
      {renderConsoleImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}