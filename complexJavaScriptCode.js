/* 
 * File: complexJavaScriptCode.js
 * Description: This code demonstrates a complex and sophisticated JavaScript implementation.
 * Author: Your Name
 */

// Constants
const MAX_ITERATIONS = 100;
const DEFAULT_VALUE = 0;

// Objects
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real || DEFAULT_VALUE;
    this.imaginary = imaginary || DEFAULT_VALUE;
  }

  add(other) {
    if (other instanceof ComplexNumber) {
      this.real += other.real;
      this.imaginary += other.imaginary;
    }
  }

  subtract(other) {
    if (other instanceof ComplexNumber) {
      this.real -= other.real;
      this.imaginary -= other.imaginary;
    }
  }

  multiply(other) {
    if (other instanceof ComplexNumber) {
      const real = this.real * other.real - this.imaginary * other.imaginary;
      const imaginary = this.real * other.imaginary + this.imaginary * other.real;
      this.real = real;
      this.imaginary = imaginary;
    }
  }

  magnitude() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  toString() {
    return `${this.real} ${this.imaginary >= 0 ? '+' : '-'} ${Math.abs(this.imaginary)}i`;
  }
}

// Functions
function calculateMandelbrotSet(realMin, realMax, imagMin, imagMax, resolution) {
  const width = Math.ceil((realMax - realMin) / resolution);
  const height = Math.ceil((imagMax - imagMin) / resolution);
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const c = new ComplexNumber(map(x, 0, width, realMin, realMax), map(y, 0, height, imagMin, imagMax));
      let z = new ComplexNumber();

      let n = 0;
      for (; n < MAX_ITERATIONS; n++) {
        z.multiply(z);
        z.add(c);
        if (z.magnitude() > 2) break;
      }

      const color = map(n, 0, MAX_ITERATIONS, 0, 255);
      ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  document.body.appendChild(canvas);
}

function map(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}

function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

// Entry point
window.addEventListener('DOMContentLoaded', () => {
  calculateMandelbrotSet(-2.5, 2.5, -2.5, 2.5, 0.01);
});