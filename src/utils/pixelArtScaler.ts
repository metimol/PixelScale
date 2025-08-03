// Pixel Art Scaling Utilities
// Provides high-quality pixel art upscaling with crisp edges

interface ScaleOptions {
  targetWidth?: number;
  targetHeight?: number;
  alignmentX?: number; // 0 = left, 0.5 = center, 1 = right
  alignmentY?: number; // 0 = top, 0.5 = center, 1 = bottom
  maintainAspectRatio?: boolean;
  backgroundColor?: string;
}

/**
 * Main pixel art scaling function
 * Scales source canvas to target dimensions with proper alignment
 */
export function scalePixelArt(
  sourceCanvas: HTMLCanvasElement, 
  targetWidth: number, 
  targetHeight: number, 
  alignment = { x: 0.5, y: 0.5 }
): HTMLCanvasElement {
  // Get source image dimensions
  const w0 = sourceCanvas.width;
  const h0 = sourceCanvas.height;
  
  // Create output canvas
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = targetWidth;
  outputCanvas.height = targetHeight;
  
  const ctx = outputCanvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }
  
  // KEY POINT: disable smoothing for pixel art
  ctx.imageSmoothingEnabled = false;
  
  // Calculate scale to fill target dimensions
  const scaleX = targetWidth / w0;
  const scaleY = targetHeight / h0;
  const scale = Math.max(scaleX, scaleY); // take larger scale for filling
  
  // Calculate scaled image dimensions
  const scaledWidth = w0 * scale;
  const scaledHeight = h0 * scale;
  
  // Calculate position for alignment
  const x = (targetWidth - scaledWidth) * alignment.x;
  const y = (targetHeight - scaledHeight) * alignment.y;
  
  // Draw scaled image
  ctx.drawImage(sourceCanvas, 0, 0, w0, h0, x, y, scaledWidth, scaledHeight);
  
  return outputCanvas;
}

/**
 * Function for exact scaling with integer coefficient
 * Maintains perfect pixel ratios
 */
export function scalePixelArtExact(sourceCanvas: HTMLCanvasElement, scaleFactor: number): HTMLCanvasElement {
  const w0 = sourceCanvas.width;
  const h0 = sourceCanvas.height;
  
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = w0 * scaleFactor;
  outputCanvas.height = h0 * scaleFactor;
  
  const ctx = outputCanvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }
  
  ctx.imageSmoothingEnabled = false;
  
  // Scale with exact integer coefficient
  ctx.drawImage(sourceCanvas, 0, 0, w0, h0, 0, 0, w0 * scaleFactor, h0 * scaleFactor);
  
  return outputCanvas;
}

/**
 * Function to load image into canvas
 * Supports both File objects and image URLs
 */
export function loadImageToCanvas(imageSource: File | string): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
      
      resolve(canvas);
    };
    img.onerror = reject;
    
    if (typeof imageSource === 'string') {
      img.src = imageSource;
    } else if (imageSource instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          img.src = e.target.result as string;
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageSource);
    } else {
      reject(new Error('Invalid image source'));
    }
  });
}

/**
 * Example usage for scaling to 4000x4000 for social media
 */
export async function upscalePixelArt(imageFile: File): Promise<{
  exact: HTMLCanvasElement;
  target: HTMLCanvasElement;
}> {
  try {
    // Load image
    const sourceCanvas = await loadImageToCanvas(imageFile);
    
    // Option 1: Exact scaling (calculate best integer scale factor for ~4000px)
    const maxDimension = Math.max(sourceCanvas.width, sourceCanvas.height);
    const exactScale = Math.floor(4000 / maxDimension);
    const exactResult = scalePixelArtExact(sourceCanvas, Math.max(1, exactScale));
    
    // Option 2: Scale to exact size 4000x4000
    const targetResult = scalePixelArt(sourceCanvas, 4000, 4000, { x: 0.5, y: 0.5 });
    
    return {
      exact: exactResult,      // Exact integer scale
      target: targetResult     // Scale to target size
    };
  } catch (error) {
    console.error('Error during scaling:', error);
    throw error;
  }
}

/**
 * Function to download canvas as PNG
 */
export function downloadCanvas(canvas: HTMLCanvasElement, filename = 'scaled_pixel_art.png'): void {
  canvas.toBlob((blob) => {
    if (!blob) {
      console.error('Failed to create blob from canvas');
      return;
    }
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}

/**
 * Advanced function with additional options
 */
export function advancedPixelArtScale(sourceCanvas: HTMLCanvasElement, options: ScaleOptions = {}): HTMLCanvasElement {
  const {
    targetWidth = 1000,
    targetHeight = 1000,
    alignmentX = 0.5,      // 0 = left, 0.5 = center, 1 = right
    alignmentY = 0.5,      // 0 = top, 0.5 = center, 1 = bottom
    maintainAspectRatio = true,
    backgroundColor = 'transparent'
  } = options;
  
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = targetWidth;
  outputCanvas.height = targetHeight;
  
  const ctx = outputCanvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }
  
  ctx.imageSmoothingEnabled = false;
  
  // Fill background if needed
  if (backgroundColor !== 'transparent') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, targetWidth, targetHeight);
  }
  
  let scaleX = targetWidth / sourceCanvas.width;
  let scaleY = targetHeight / sourceCanvas.height;
  
  if (maintainAspectRatio) {
    const scale = Math.min(scaleX, scaleY);
    scaleX = scaleY = scale;
  }
  
  const scaledWidth = sourceCanvas.width * scaleX;
  const scaledHeight = sourceCanvas.height * scaleY;
  
  const x = (targetWidth - scaledWidth) * alignmentX;
  const y = (targetHeight - scaledHeight) * alignmentY;
  
  ctx.drawImage(sourceCanvas, 0, 0, sourceCanvas.width, sourceCanvas.height, 
                x, y, scaledWidth, scaledHeight);
  
  return outputCanvas;
}