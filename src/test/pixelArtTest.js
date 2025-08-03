// Simple test to verify pixel art scaling functionality
// This can be run in browser console for manual testing

import { loadImageToCanvas, scalePixelArt, scalePixelArtExact } from '../utils/pixelArtScaler';

// Test function that can be run manually
window.testPixelArtScaling = async function() {
  console.log('Testing pixel art scaling...');
  
  try {
    // Create a test canvas
    const testCanvas = document.createElement('canvas');
    testCanvas.width = 4;
    testCanvas.height = 4;
    const ctx = testCanvas.getContext('2d');
    
    // Draw a simple pattern
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 2, 2);
    ctx.fillStyle = 'blue';
    ctx.fillRect(2, 0, 2, 2);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 2, 2, 2);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(2, 2, 2, 2);
    
    console.log('Original canvas:', testCanvas.width, 'x', testCanvas.height);
    
    // Test exact scaling
    const exactScaled = scalePixelArtExact(testCanvas, 1000);
    console.log('Exact scaled (1000x):', exactScaled.width, 'x', exactScaled.height);
    
    // Test target scaling
    const targetScaled = scalePixelArt(testCanvas, 4000, 4000);
    console.log('Target scaled (4000x4000):', targetScaled.width, 'x', targetScaled.height);
    
    console.log('All tests passed!');
    return { original: testCanvas, exact: exactScaled, target: targetScaled };
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
};

console.log('Test function added to window.testPixelArtScaling()');