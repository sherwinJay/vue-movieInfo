// 'use server'
import { movieDbImgURL } from "@/constants/constants";
// import { ImageLoader } from "next/image"

export function useNormalizeImgixUrl(src: string) {
  const imgixBaseUrl = movieDbImgURL;

  if (src.slice(0, 4) === "http") {
    return new URL(src);
  } else {
    return new URL(`${movieDbImgURL}/${src[0] === "/" ? src.slice(1) : src}`);
  }
}

// export const imgixLoader = ({ src, width, quality }) => {
//   const url = useNormalizeImgixUrl(src);

//   // const url = new URL(`${movieDbImgURL}/${src}`);
//   const params = url.searchParams;
//   params.set("auto", params.getAll("auto").join(",") || "format");
//   params.set("fit", params.get("fit") || "max");
//   params.set("w", params.get("w") || width.toString());

//   if (quality) {
//     params.set("q", quality.toString());
//   }

//   // console.log('imgix: ', url)

//   return url.href;
// };
