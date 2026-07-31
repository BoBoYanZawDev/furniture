const imageBaseUrl = import.meta.env.VITE_IMG_URL ?? "";

export function getImageUrl(path?: string | null): string {
  if (!path) return "";

  if (/^https?:\/\//i.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  return `${imageBaseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
