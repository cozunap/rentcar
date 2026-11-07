/**
 * Converts an image File to WebP format, resized to a maximum bounding box (e.g. 1500x1500px),
 * maintaining aspect ratio and preserving excellent visual quality while dramatically reducing file size.
 *
 * @param file The original image File (JPEG, PNG, HEIC, WebP, etc.)
 * @param maxWidth Max width in pixels (default 1500)
 * @param maxHeight Max height in pixels (default 1500)
 * @param quality WebP compression quality from 0.0 to 1.0 (default 0.88 for pristine quality)
 * @returns Promise<{ dataUrl: string, blob: Blob, file: File, originalSize: number, newSize: number, width: number, height: number }>
 */
export async function convertToWebP(
  file: File,
  maxWidth = 1500,
  maxHeight = 1500,
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
        let width = img.width;
        let height = img.height;

        // Calculate aspect-ratio preserved dimensions within maxWidth x maxHeight (1500x1500)
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          return reject(new Error('No se pudo inicializar el contexto de imagen.'));
        }

        // High quality rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              return reject(new Error('Error al procesar la conversión a WebP.'));
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
              width,
              height
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
