/**
 * Process any uploaded image:
 * 1. Automatically frames and renders it into a PERFECT SQUARE (1500x1500px) on clean white background,
 *    even if the user uploaded a rectangular, panoramic, vertical or landscape photo.
 * 2. Compresses to WebP (88% pristine quality), keeping file weight around ~150-250KB.
 * 3. Guarantees 100% of the vehicle is visible without cropping any tires or mirrors.
 *
 * @param file The original image File (JPEG, PNG, HEIC, WebP, etc.)
 * @param targetDimension Default 1500px for square 1:1 format
 * @param quality WebP compression quality from 0.0 to 1.0 (default 0.88)
 */
export async function convertToSquareWebP(
  file: File,
  targetDimension = 1500,
  quality = 0.88
): Promise<{
  dataUrl: string;
  blob: Blob;
  file: File;
  originalSize: number;
  newSize: number;
  width: number;
  height: number;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer el archivo de imagen.'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Formato de imagen inválido o corrupto.'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = targetDimension;
        canvas.height = targetDimension;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          return reject(new Error('No se pudo inicializar el lienzo de renderizado.'));
        }

        // Fill background with pristine pure white (for clean car presentation)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetDimension, targetDimension);

        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Fit image inside the square maintaining its full aspect ratio (no cuts, complete car)
        // Leaving 4% breathing margin so the vehicle looks perfectly centered and premium
        const usableSize = targetDimension * 0.94;
        const scale = Math.min(usableSize / img.width, usableSize / img.height);
        const drawWidth = Math.round(img.width * scale);
        const drawHeight = Math.round(img.height * scale);
        const offsetX = Math.round((targetDimension - drawWidth) / 2);
        const offsetY = Math.round((targetDimension - drawHeight) / 2);

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error('Error al procesar la conversión a WebP cuadrado.'));
            }

            const cleanName = file.name.replace(/\.[^/.]+$/, '') + '.webp';
            const convertedFile = new File([blob], cleanName, { type: 'image/webp' });
            const dataUrl = canvas.toDataURL('image/webp', quality);

            resolve({
              dataUrl,
              blob,
              file: convertedFile,
              originalSize: file.size,
              newSize: blob.size,
              width: targetDimension,
              height: targetDimension
            });
          },
          'image/webp',
          quality
        );
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

// Backward-compatible aliases
export const convertToWebP = convertToSquareWebP;
export const optimizeToSquareWebp = async (file: File, targetDimension = 1500, quality = 0.88): Promise<Blob> => {
  const result = await convertToSquareWebP(file, targetDimension, quality);
  return result.blob;
};
