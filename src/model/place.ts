import PlaceImage from "./placeImage";

interface Place {
    id: number;
    name: string;
    description: string;
    coordinates: [number, number];
    oldImgage: PlaceImage;
    newImage: PlaceImage;
    otherImages: PlaceImage[];
}

export default Place;