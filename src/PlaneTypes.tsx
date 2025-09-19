import React from 'react';

type PlaneContextType = {
    bounds: Bounds;
    containerRef: React.RefObject<HTMLDivElement | null>;
    dimensions: {
        width: number;
        height: number;
    };
}

type Bounds = {
    x: PlaneRange,
    y: PlaneRange,
};
type PlaneProps = {
    children: React.ReactNode;
    bounds: Bounds;
};
type PlaneCoordinates = {
    x: number;
    y: number;
}
type PlaneRange = {
    min: number;
    max: number;
}

type PlaneChildPosition = {
    method: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    x: number;
    y: number;
    width: number;
    height: number;
}

type PlaneChildProps = {
    children: React.ReactNode;
    position: PlaneChildPosition;
};

type PlaneChildStyle = {
    position: 'absolute';
    width: number;
    height: number;
    left: number;
    top: number;
}

export type {
    Bounds,
    PlaneChildPosition,
    PlaneChildProps,
    PlaneChildStyle,
    PlaneContextType,
    PlaneCoordinates,
    PlaneProps,
    PlaneRange
};
