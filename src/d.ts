declare module '*.svg' {
  import React = require('react');
  const src: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

/// <reference types="vite/client" />
