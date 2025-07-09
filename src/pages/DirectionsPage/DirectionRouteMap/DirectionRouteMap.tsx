import { MapContainer, Tooltip, CircleMarker, TileLayer, Polyline, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

type DirectionRouteMapProps = {
  routeCoordinates: [number, number][];
  routeLabels: string[];
};

const FitBounds = ({ routeCoordinates }: { routeCoordinates: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (routeCoordinates && routeCoordinates.length > 0) {
      map.fitBounds(routeCoordinates, { padding: [30, 30] });
    }
  }, [routeCoordinates, map]);

  return null;
};

const DirectionRouteMap = ({ routeCoordinates, routeLabels }: DirectionRouteMapProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  if (!routeCoordinates || routeCoordinates.length === 0) {
    return <p>Нет координат для отображения маршрута</p>;
  }

  const center = routeCoordinates[0];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{
        height: '300px',
        width: '100%',
        borderRadius: '6px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        pointerEvents: 'auto',
      }}
      scrollWheelZoom={false}
      attributionControl={false}
      zoomControl={false}
      dragging={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      touchZoom={false}
      zoomSnap={0}
      zoomDelta={0}
      inertia={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />
      <Polyline positions={routeCoordinates} color="oklch(55.8% 0.288 302.321)" weight={3} />
      {routeCoordinates.map((coord, index) => (
        <CircleMarker
          key={`circle-${index}`}
          center={coord}
          radius={6}
          color="#ffffff"
          weight={2}
          fillColor="oklch(55.8% 0.288 302.321)"
          fillOpacity={1}
          eventHandlers={{
            click: () => setActiveIndex(index),
          }}
        >
          {activeIndex === index && (
            <Tooltip direction="right" offset={[0, -10]} opacity={1} permanent>
              {routeLabels?.[index] || `Точка ${index + 1}`}
            </Tooltip>
          )}
        </CircleMarker>
      ))}
      <FitBounds routeCoordinates={routeCoordinates} />
    </MapContainer>
  );
};

export default DirectionRouteMap;
