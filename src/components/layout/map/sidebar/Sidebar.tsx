import { Box, Typography } from '@mui/material';
import { PLACES } from '../../../../const/places';
import styles from './sidebar.module.css';
import CloseIcon from '@mui/icons-material/Close';
import EnlargeableImage from '../../../common/enlargeable_image/EnlargeableImage';

interface SidebarProps {
    selectedPlaceId: number | null;
    setSelectedPlaceId: (id: number | null) => void;
}

interface DescribedImageProps {
    widgth?: number;
    height?: number;
    imageUrl: string;
    description: string;
}

const DescribedImage = ({...props}: DescribedImageProps) => {
    return (
        <Box className={styles.describedImage}>
            <EnlargeableImage
                src={props.imageUrl}
                alt={props.description}
                width={props.widgth || 200}
                height={props.height || 200}
            />
            <Box className={styles.descriptionContainer}>
                <Typography className={styles.description} variant="caption">
                    {props.description}
                </Typography>
            </Box>
        </Box>
    );
}

const Sidebar = ({...props}: SidebarProps) => {
    const id = props.selectedPlaceId;
    const place = id ? PLACES[id] : null;

    return (
        <>
            {place && (
                <Box className={styles.sidebar}>
                    <Box className={styles.header}>
                            <Typography variant="h6" component="div" color='text.primary'>
                                {place.name}
                            </Typography>
                            <CloseIcon onClick={() => props.setSelectedPlaceId(null)} className={styles.closeIcon} />
                        </Box>
                    <Box className={styles.content}>
                        <ul>
                            {place.description.split('\n').map((line, index) => (
                                <li key={index}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                        <Box className={styles.imagesContainer}>
                            <DescribedImage
                                imageUrl={place.oldImgage.imageUrl}
                                description={place.oldImgage.description}
                            />
                            <DescribedImage
                                imageUrl={place.newImage.imageUrl}
                                description={place.newImage.description}
                            />   
                        </Box>
                        <Box className={styles.additionalImagesContainer}>
                            {place.otherImages.map((image, index) => (
                                <DescribedImage
                                    key={index}
                                    imageUrl={image.imageUrl}
                                    description={image.description}
                                    widgth={100}
                                    height={100}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Sidebar;