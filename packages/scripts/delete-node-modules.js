/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// Get the current working directory
const currentDir = process.cwd();

// Define the path to the node_modules directory
const nodeModulesPath = path.join(currentDir, 'node_modules');

// Check if the node_modules directory exists
if (fs.existsSync(nodeModulesPath)) {
  // If it exists, delete it recursively
  fs.rmdirSync(nodeModulesPath, { recursive: true });
  console.log('node_modules directory deleted successfully!');
} else {
  console.log('node_modules directory not found.');
}
