import React from 'react';
import type {
  PlaneChildProps,
  PlaneChildStyle,
  PlaneContextType,
  PlaneProps
} from './PlaneTypes';
import { computePlaneChildStyle } from './PlaneUtils';

const PlaneContext = React.createContext<PlaneContextType | null>(null);

const Plane = ({ children, bounds }: PlaneProps) => {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child) || child.type !== PlaneChild) {
      throw new Error('Plane only accepts PlaneChild as children');
    }
  });

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setDimensions({
        width: container.clientWidth,
        height: container.clientHeight
      });
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const value: PlaneContextType = { bounds, containerRef, dimensions };

  return (
    <PlaneContext.Provider value={value}>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </PlaneContext.Provider>
  );
};

const PlaneChild = ({ children, position }: PlaneChildProps) => {
  const planeContext = React.useContext(PlaneContext);

  if (!planeContext) {
    throw new Error('PlaneChild must be used within a Plane');
  }

  const style: PlaneChildStyle = React.useMemo(() => computePlaneChildStyle(position, planeContext), [position, planeContext]);

  return (
    <div className="plane-child" style={style}>
      {children}
    </div>
  );
};

export { Plane, PlaneChild, PlaneContext };
