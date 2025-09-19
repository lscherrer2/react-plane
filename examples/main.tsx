import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Plane, PlaneChild } from '../src/index';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Plane bounds={{ x: { min: -10, max: 10 }, y: { min: 0, max: 10 } }}>
            <PlaneChild position={{ method: 'center', x: 0, y: 5, width: 3, height: 5 }}>
                <div style={{ background: 'red', width: '100%', height: '100%' }} />
            </PlaneChild>
        </Plane>
    </StrictMode>
);