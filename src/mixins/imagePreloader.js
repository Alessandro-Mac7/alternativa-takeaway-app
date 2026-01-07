import { utilityFunction } from '@/utility/utility.js';

const TIMEOUT_MS = 5000;

/**
 * Preloads an array of image paths
 * @param {string[]} imagePaths - Array of image paths (relative to assets)
 * @returns {Promise<void>} - Resolves when all images loaded or after timeout
 */
export function preloadImages(imagePaths) {
  if (!imagePaths || imagePaths.length === 0) {
    return Promise.resolve();
  }

  const loadPromises = imagePaths.map(path => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ path, success: true });
      img.onerror = () => resolve({ path, success: false });

      try {
        img.src = utilityFunction.getImgUrl(path);
      } catch (e) {
        resolve({ path, success: false });
      }
    });
  });

  const timeoutPromise = new Promise(resolve => {
    setTimeout(() => resolve('timeout'), TIMEOUT_MS);
  });

  return Promise.race([
    Promise.all(loadPromises),
    timeoutPromise
  ]);
}
