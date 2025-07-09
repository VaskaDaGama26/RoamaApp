import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

type DirectionRouteMapProps = {
  routeCoordinates: [number, number][]; // [lat, lng]
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

const DirectionRouteMap = ({ routeCoordinates }: DirectionRouteMapProps) => {
  if (!routeCoordinates || routeCoordinates.length === 0) {
    return <p>Нет координат для отображения маршрута</p>;
  }

  const center = routeCoordinates[0];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '300px', width: '100%', filter: 'invert(0%)' }}
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
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={routeCoordinates} color="blue" weight={4} />
      <FitBounds routeCoordinates={routeCoordinates} />
    </MapContainer>
  );
};

export default DirectionRouteMap;
