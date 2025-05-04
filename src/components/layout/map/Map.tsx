import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import styles from './map.module.css';
import {PLACES} from '../../../const/places';

interface MapProps {
    selectedPlaceId: number | null;
    setSelectedPlaceId: (id: number | null) => void;
}

// const defaultIcon = new L.Icon({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
// });

// const selectedIcon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     shadowSize: [41, 41],
// });

const ruinIcon = new L.Icon({
    iconUrl: 'ruined-white.png',
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

const selectedRuinIcon = new L.Icon({
    iconUrl: 'ruined-green.png',
    iconSize: [40, 40],
    popupAnchor: [0, -20],
});

const Map = ({...props}: MapProps) => {
    const handleMarkerClick = (id: number) => {
        console.log(`Marker with id ${id} selected`);
        props.setSelectedPlaceId(props.selectedPlaceId && props.selectedPlaceId === id ? null : id);
    };

    return (
        <MapContainer center={[49.6777797, 17.5598567]} zoom={11} className={styles.map}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Základní">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satelitní">
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
            {Object.values(PLACES).map((place) => (
                <Marker
                    key={place.id}
                    position={place.coordinates as LatLngExpression}
                    icon={props.selectedPlaceId === place.id ? selectedRuinIcon : ruinIcon}
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
