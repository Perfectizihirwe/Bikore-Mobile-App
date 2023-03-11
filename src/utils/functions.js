import { theme } from "../theme/theme";

export const getColor = (key, mode) => theme[mode][key];
