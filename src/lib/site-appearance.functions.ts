import { createServerFn } from "@tanstack/react-start";
import shareImageSrcAsset from "@/assets/rishishwar-share.webp";
const shareImageSrc = shareImageSrcAsset;
const shareImage = { url: shareImageSrc };

export const getSiteShareImage = createServerFn({ method: "GET" }).handler(() => ({ image: shareImage.url }));
