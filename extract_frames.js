const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'frames');
// Clean up existing frames
if (fs.existsSync(framesDir)) {
  fs.rmSync(framesDir, { recursive: true, force: true });
}
fs.mkdirSync(framesDir, { recursive: true });

const videoPath = path.join(__dirname, 'video', 'metro-hero.mp4');

// 300 frames over 8.0 seconds = 37.5 fps, quality q:v 4
const cmd = `"${ffmpeg.path}" -i "${videoPath}" -vf "fps=37.5,scale=1280:-1" -q:v 4 "${path.join(framesDir, 'frame_%04d.jpg')}"`;

console.log('Extracting exactly 300 frames...');
try {
  execSync(cmd, { stdio: 'inherit' });
  const files = fs.readdirSync(framesDir);
  console.log(`Successfully extracted ${files.length} frames to ${framesDir}`);
} catch (err) {
  console.error('Error extracting frames:', err);
}
