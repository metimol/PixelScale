/**
 * Image processing utilities for pixel art upscaling
 */

export interface ProcessedImage {
  originalFile: File;
  originalWidth: number;
  originalHeight: number;
  upscaledDataUrl: string;
  upscaledWidth: number;
  upscaledHeight: number;
  scaleFactor: number;
  pixelsAdded: number;
}

/**
 * Calculate target dimensions to add exactly 4000 pixels while maintaining aspect ratio
 */
function calculateTargetDimensions(originalWidth: number, originalHeight: number): {
  newWidth: number;
  newHeight: number;
  scaleFactor: number;
  pixelsAdded: number;
} {
  const originalPixels = originalWidth * originalHeight;
  const targetPixels = originalPixels + 4000;
  
  // Calculate scale factor to achieve target pixels while maintaining aspect ratio
  const scaleFactor = Math.sqrt(targetPixels / originalPixels);
  
  // Calculate new dimensions
  const newWidth = Math.round(originalWidth * scaleFactor);
  const newHeight = Math.round(originalHeight * scaleFactor);
  
  // Calculate actual pixels added (may be slightly different due to rounding)
  const actualPixelsAdded = (newWidth * newHeight) - originalPixels;
  
  return {
    newWidth,
    newHeight,
    scaleFactor,
    pixelsAdded: actualPixelsAdded
  };
}

/**
 * Load image from file and get its dimensions
 */
function loadImage(file: File): Promise<{ img: HTMLImageElement; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        img,
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
}

/**
 * Upscale image using nearest-neighbor interpolation for crisp pixel art
 */
function upscaleWithNearestNeighbor(
  sourceCanvas: HTMLCanvasElement,
  targetWidth: number,
  targetHeight: number
): HTMLCanvasElement {
  const sourceCtx = sourceCanvas.getContext('2d')!;
  const sourceImageData = sourceCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
  
  const targetCanvas = document.createElement('canvas');
  targetCanvas.width = targetWidth;
  targetCanvas.height = targetHeight;
  const targetCtx = targetCanvas.getContext('2d')!;
  
  // Disable image smoothing for crisp pixel art
  targetCtx.imageSmoothingEnabled = false;
  
  const targetImageData = targetCtx.createImageData(targetWidth, targetHeight);
  const sourceData = sourceImageData.data;
  const targetData = targetImageData.data;
  
  const xRatio = sourceCanvas.width / targetWidth;
  const yRatio = sourceCanvas.height / targetHeight;
  
  for (let targetY = 0; targetY < targetHeight; targetY++) {
    for (let targetX = 0; targetX < targetWidth; targetX++) {
      // Find the corresponding source pixel using nearest-neighbor
      const sourceX = Math.floor(targetX * xRatio);
      const sourceY = Math.floor(targetY * yRatio);
      
      const sourceIndex = (sourceY * sourceCanvas.width + sourceX) * 4;
      const targetIndex = (targetY * targetWidth + targetX) * 4;
      
      // Copy RGBA values
      targetData[targetIndex] = sourceData[sourceIndex];         // R
      targetData[targetIndex + 1] = sourceData[sourceIndex + 1]; // G
      targetData[targetIndex + 2] = sourceData[sourceIndex + 2]; // B
      targetData[targetIndex + 3] = sourceData[sourceIndex + 3]; // A
    }
  }
  
  targetCtx.putImageData(targetImageData, 0, 0);
  return targetCanvas;
}

/**
 * Process an image file for pixel art upscaling
 */
export async function processImageForUpscaling(file: File): Promise<ProcessedImage> {
  try {
    // Load the original image
    const { img, width, height } = await loadImage(file);
    
    // Calculate target dimensions
    const { newWidth, newHeight, scaleFactor, pixelsAdded } = calculateTargetDimensions(width, height);
    
    // Create canvas with original image
    const sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = width;
    sourceCanvas.height = height;
    const sourceCtx = sourceCanvas.getContext('2d')!;
    
    // Disable smoothing to preserve pixel art quality
    sourceCtx.imageSmoothingEnabled = false;
    sourceCtx.drawImage(img, 0, 0);
    
    // Upscale using nearest-neighbor interpolation
    const upscaledCanvas = upscaleWithNearestNeighbor(sourceCanvas, newWidth, newHeight);
    
    // Convert to data URL for storage/download
    const upscaledDataUrl = upscaledCanvas.toDataURL('image/png');
    
    return {
      originalFile: file,
      originalWidth: width,
      originalHeight: height,
      upscaledDataUrl,
      upscaledWidth: newWidth,
      upscaledHeight: newHeight,
      scaleFactor,
      pixelsAdded
    };
  } catch (error) {
    throw new Error(`Failed to process image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Convert data URL to blob for downloading
 */
export function dataUrlToBlob(dataUrl: string): Blob {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
}