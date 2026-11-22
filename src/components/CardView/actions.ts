import { CONSOLES_LIST } from "../../constants/consoles";
import { ConsoleModel } from "./props";

export const loadConsoleData = async (
  id: number,
  setConsoleData: React.Dispatch<React.SetStateAction<ConsoleModel | null>>
) => {
  const found =
    CONSOLES_LIST.find((item) => item.id === id) || CONSOLES_LIST[0];
  setConsoleData(found);
};

export const handlePreviousItem = async (
  consoleData: ConsoleModel | null,
  setConsoleData: React.Dispatch<React.SetStateAction<ConsoleModel | null>>
) => {
  if (!consoleData) return;
  const prevId =
    consoleData.id > 1 ? consoleData.id - 1 : CONSOLES_LIST.length;
  await loadConsoleData(prevId, setConsoleData);
};

export const handleNextItem = async (
  consoleData: ConsoleModel | null,
  setConsoleData: React.Dispatch<React.SetStateAction<ConsoleModel | null>>
) => {
  if (!consoleData) return;
  const nextId =
    consoleData.id < CONSOLES_LIST.length ? consoleData.id + 1 : 1;
  await loadConsoleData(nextId, setConsoleData);
};