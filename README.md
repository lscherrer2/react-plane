# `react-plane` Package

Getting elements positioned exactly relative to each other in a mathematical context is often a headache for developers.

This is a lightweight package for positioning elements in the cartesian plane. 

## How it works

Everything boils down to the `Plane` and `PlaneChild` components. The `Plane` component takes up the full space of its parent and has mathematically-defined coordinates for its edges.

For example, the left edge might be at `x = -0.7`, and the right edge at `x = 2.4`. A child element positioned at `x = 0.2` will appear in the correct mathematical position relative to the bounds of the parent `Plane`.

A plane and its bounds can be defined as follows:
```tsx
<Plane 
  bounds={{
    x: {min: -0.7, max: 2.4},
    y: {min: -1.0, max: 1.0},
  }}
>
  {/* PlaneChild elements */}
</Plane>
```
The `Plane` component only accepts `PlaneChild` components as children. This is because the `Plane` needs to know where to put the child. A plane child can be defined like this:
```tsx
  <PlaneChild 
    method={'center'} // What part of the element should be aligned
    x={0.2} // | Location on the plane in the plane's coordinates
    y={0}   // |
    width={0.7} //  Width/height of the element in the plane's coordinates
    height={0.5} // Same as width
  >
    <h1>Child 1</h1>
  </PlaneChild>
```

Methods that are also supported include `top-left`, `top-right`, `bottom-left`, `bottom-right`, and `top-center`.

## Accessing context

Information about the plane can be accessed from within using `PlaneContext`.

```tsx
import { PlaneContext } from 'react-plane';

const MyComponent = () => {
  const {bounds, containerRef, dimensions} = useContext(PlaneContext);
  // ...
}
```

`bounds` is formatted as follows:
```tsx
{
  x: { min, max }, // In Plane coordinates
  y: { min, max },
}
```

`dimensions` Has the width and height of the `Plane` container.
```tsx
{
  width, // In pixels
  height,
}
```

