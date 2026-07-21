/**
 * Inject Cloudinary delivery transforms so images ship in a modern format
 * at an appropriate quality (and optionally capped width) straight from the
 * origin. Non-Cloudinary URLs (placeholders, local files) pass through
 * untouched.
 *
 *   cld(url)          -> f_auto,q_auto
 *   cld(url, 800)     -> f_auto,q_auto,w_800,c_limit
 */
export function cld(url: string, width?: number): string {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  const transforms = ["f_auto", "q_auto"];
  if (width) transforms.push(`w_${width}`, "c_limit");
  // Avoid double-injecting if a transform segment is already present.
  if (url.includes("/upload/f_auto")) return url;
  return url.replace("/upload/", `/upload/${transforms.join(",")}/`);
}
