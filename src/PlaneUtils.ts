import type { PlaneChildPosition, PlaneChildStyle, PlaneContextType } from "./PlaneTypes";

const computePlaneChildStyle = (
    position: PlaneChildPosition,
    planeContext: PlaneContextType
): PlaneChildStyle => {
    const { bounds, dimensions } = planeContext;

    if (dimensions.width === 0 || dimensions.height === 0) {
        return {
            position: 'absolute',
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        };
    }

    const contWidth = dimensions.width;
    const contHeight = dimensions.height;
    const { x, y } = bounds;
    const xRange = x.max - x.min;
    const yRange = y.max - y.min;

    if (xRange <= 0 || yRange <= 0) {
        throw new Error('Invalid bounds: ranges must be positive');
    }

    const xScale = contWidth / xRange;
    const yScale = contHeight / yRange;

    const anchorPixelX = (position.x - x.min) * xScale;
    let anchorPixelY = (position.y - y.min) * yScale;
    anchorPixelY = contHeight - anchorPixelY;

    const pixelWidth = position.width * xScale;
    const pixelHeight = position.height * yScale;

    switch (position.method) {
        case 'center':
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX - (pixelWidth / 2),
                top: anchorPixelY - (pixelHeight / 2),
            };
        case 'top-left':
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX,
                top: anchorPixelY,
            };
        case 'top-right':
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX - pixelWidth,
                top: anchorPixelY,
            };
        case 'bottom-left':
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX,
                top: anchorPixelY - pixelHeight,
            };
        case 'bottom-right':
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX - pixelWidth,
                top: anchorPixelY - pixelHeight,
            };
        default:
            return {
                position: 'absolute',
                width: pixelWidth,
                height: pixelHeight,
                left: anchorPixelX,
                top: anchorPixelY,
            };
    }
};

export { computePlaneChildStyle };
