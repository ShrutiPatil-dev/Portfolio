import image from '@rollup/plugin-image';

export default {
  input: 'src/main.js', // Adjust as needed
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    image()
  ]
};
