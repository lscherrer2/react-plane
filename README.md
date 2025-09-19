# React Plane

A React component for positioning elements mathematically based on plane bounds.

## Installation

Install directly from the GitHub repository:

```bash
npm install github:lscherrer2/react-plane
```

For a specific version or tag (e.g., v1.0.0):

```bash
npm install github:lscherrer2/react-plane@v1.0.0
```

For a specific branch or commit:

```bash
npm install github:lscherrer2/react-plane#branch-name
```

**Peer Dependencies**  
This library requires React and React DOM. Install them separately:

```bash
npm install react@^18.0.0 || ^19.0.0 react-dom@^18.0.0 || ^19.0.0
```

## Usage

Import the components and use them in your React app:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Plane, PlaneChild } from 'react-plane';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Plane bounds={{ x: { min: 0, max: 100 }, y: { min: 0, max: 100 } }}>
        <PlaneChild 
          position={{ 
            method: 'center', 
            x: 50, 
            y: 50, 
            width: 20, 
            height: 20 
          }}
        >
          <div style={{ background: 'red', width: '100%', height: '100%' }} />
        </PlaneChild>
      </Plane>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
```

- **bounds**: Define the mathematical plane (x/y ranges).
- **position**: Specify child coords in plane units (method: 'center' | 'top-left' etc.; width/height scale to pixels).
- Elements position and size based on container dimensions and bounds.

## Development

- `npm run build`: Build the library (generates `dist/`).
- `npm run dev:demo`: Run the examples demo in browser.
- `npm run build:demo`: Build static examples.

To contribute: Fork the repo, make changes, submit a PR.

## Troubleshooting

- **Build Fails on Install**: Ensure Node.js >=18, run `npm run build` locally if needed.
- **Import Errors**: Verify peers installed; use ES modules for modern bundlers (Vite/Webpack).
- **Types Not Found**: `.d.ts` files are auto-generated in `dist/`.

## License

MIT

