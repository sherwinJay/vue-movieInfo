// import { useBlurImages } from './useBlurImages';
// import lqip from "lqip-modern";
// import { useNormalizeImgixUrl } from "./useNormalizeImgixLoader";
import { computed, onMounted, ref } from "vue";

// export const useBlurImages = async (src: string) => {
//   const url = useNormalizeImgixUrl(src.substring(22));
//   const imgData = await fetch(src);
//   const lqipData = Buffer.from(await imgData.arrayBuffer());
//   const previewImage = await lqip(lqipData, { outputFormat: "jpeg" });

//   return {
//     props: {
//       image: {
//         src: url.href,
//         width: previewImage.metadata.originalWidth,
//         height: previewImage.metadata.originalHeight,
//         blurDataURL: previewImage.metadata.dataURIBase64,
//       },
//     },
//   };
// };

export const useProgressiveImage2 = (placeholder: string, url: string) => {
  const src = ref(placeholder);
  const blur = ref(true);

  const image = new Image();
  image.src = url;

  image.onload = () => {
    src.value = url;
    blur.value = false;
  };

  return {
    src,
    blur,
  };
};

export function useProgressiveImage(placeholder: string, url: string) {
  const src = ref(placeholder);

  onMounted(() => {
    src.value = placeholder;
    const img = new Image();
    img.src = url;
    img.onload = () => {
      src.value = url;
    };
  });
  const blur = computed(() => {
    return src.value === placeholder ? true : false;
  });

  return [src, blur];
}

export function useBlurImages() {}
