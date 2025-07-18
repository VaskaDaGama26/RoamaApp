//@ts-nocheck
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './WorldMap.css';
import type { DishProps } from '../types';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';

// ICONS LEAFLET
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const WorldMap: React.FC<DishProps> = ({ data }) => {
  return (
    <MapContainer
      center={[50, 15]}
      zoom={2}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={true}
      zoomControl={false}
      touchZoom={false}
      keyboard={false}
      style={{ height: '300px', width: '100%', borderRadius: '6px' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />
      {data.map((place, index) => (
        <Marker key={index} position={place.position}>
          <Popup>
            <div className="flex w-fit flex-col gap-2">
              <a target="_blank" href={place.link} rel="noopener noreferrer">
                {place.title}
              </a>
              <LazyMediaWithSkeleton type="image" height="80px" alt={place.title} src={place.image} />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
