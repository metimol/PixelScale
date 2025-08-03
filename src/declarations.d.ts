// Allow importing SVG files as modules (URL string)
declare module '*.svg' {
  const content: string;
  export default content;
}
