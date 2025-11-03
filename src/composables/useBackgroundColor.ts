import ColorThief from "colorthief";
import { movieDbImgURL, movieDbKey } from "@/constants/constants";
import type { Ref } from "vue";

// export const useBgColor = (posterImg: HTMLImageElement) => {
//   const image = posterImg;
//   if (!image.complete) return;

//   const colorThief = new ColorThief();
//   const testVal = colorThief.getColor(image);
//   console.log(testVal);
// };

export function useBackgroundAnalyze(
  poster: Ref<null>,
  isLight: Ref<boolean>,
  backgroundImage: Ref<{
    backgroundImage: string;
  }>,
  backgroundUrl: string | undefined
) {
  const image = poster.value;

  // console.log(poster.value);
  if (!image.complete) return;

  const colorThief = new ColorThief();
  const palette = colorThief.getColor(image);
  const hexImageColor = rgbToHex(...palette);

  isLight.value = use_wc_hex_is_light(hexImageColor);

  backgroundImage.value.backgroundImage = `linear-gradient(${rgbaString(palette, 1)},${rgbaString(
    palette,
    0.5
  )}), url(${movieDbImgURL}/t/p/original/${backgroundUrl})`;
}

export function use_wc_hex_is_light(color: string) {
  const hex = color.replace("#", "");

  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 170;
}

export function useHexToRGB(hex: any, alpha: number) {
  const r = parseInt(hex.toString().slice(1, 3), 16);
  const g = parseInt(hex.toString().slice(3, 5), 16);
  const b = parseInt(hex.toString().slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r},${g} ,${b},${alpha})`;
  } else {
    return `rgba(${r},${g} ,${b})`;
  }
}

export function useBannerBgGradient(r: number, g: number, b: number, alpha: number) {
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgba(${r}, ${g}, ${b})`;
  }
}

export function rgbaString(palette: number[], alpha: number) {
  return `rgba(${palette[0]}, ${palette[1]}, ${palette[2]}, ${alpha})`;
}

export function rgbToHex(...palette: number[]) {
  const r = palette[0];
  const g = palette[1];
  const b = palette[2];
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// function analyze() {
//   const image = posterImage.value;
//   if (!image.complete) return;

//   const colorThief = new ColorThief();
//   const palette = colorThief.getColor(image);
//   const hexImageColor = rgbToHex(...palette);

//   isColorLight.value = use_wc_hex_is_light(hexImageColor);

//   bannerBG.value.backgroundImage = `linear-gradient(${rgbaString(palette, 1)},${rgbaString(
//     palette,
//     0.5
//   )}), url(${movieDbImgURL}/t/p/original/${props.backdropUrl})`;
// }
