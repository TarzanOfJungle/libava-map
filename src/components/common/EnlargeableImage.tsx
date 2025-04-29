import CloseIcon from '@mui/icons-material/Close';
import {IconButton, Tooltip} from '@mui/material';
import {useState} from 'react';

import styles from './enlargeableImage.module.css';

interface EnlargeableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function EnlargeableImage({
  src,
  alt,
  width,
  height,
}: EnlargeableImageProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleClick = () => setIsEnlarged(!isEnlarged);


  return (
    <div>
      <div className={styles.smallImage} onClick={handleClick}>
        <Tooltip title={'Zvětšit obrázek'}>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </Tooltip>
      </div>

      {isEnlarged && (
        <div className={styles.overlay} onClick={handleClick}>
          <IconButton
            className={styles.closeBtn}
            aria-label="close"
            onClick={handleClick}
            title="Zavřít"
          >
            <CloseIcon />
          </IconButton>
          <img
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className={styles.enlarged}
          />
        </div>
      )}
    </div>
  );
}
