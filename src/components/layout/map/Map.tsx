import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import styles from './map.module.css';
import {PLACES} from '../../../const/places';

interface MapProps {
    selectedPlaceId: number | null;
    setSelectedPlaceId: (id: number | null) => void;
}

// Define custom marker icons
const defaultIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
});

const selectedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
});

const Map = ({...props}: MapProps) => {
    const handleMarkerClick = (id: number) => {
        console.log(`Marker with id ${id} selected`);
        props.setSelectedPlaceId(props.selectedPlaceId && props.selectedPlaceId === id ? null : id);
    };

    return (
        <MapContainer center={[49.6777797, 17.5598567]} zoom={11} className={styles.map}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {Object.values(PLACES).map((place) => (
                <Marker
                    key={place.id}
                    position={place.coordinates as LatLngExpression}
                    icon={props.selectedPlaceId === place.id ? selectedIcon : defaultIcon}
                    eventHandlers={{
                        click: () => handleMarkerClick(place.id),
                    }}
                >
                    <Popup>
                        {place.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
