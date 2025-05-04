import { Box, Typography } from '@mui/material';
import styles from './project.module.css';
import { useEffect, useState } from 'react';

const Project = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box className={styles.page}>
            <img
                className={styles.image}
                src={'libava.png'}
                alt={'Vojenský újezd Libavá'}
                width={'100%'}
            />
            <Box className={styles.appContainer}>
                <Typography className={styles.title} variant="h5" component="h2">
                    {`O aplikaci Libavá Map`}
                </Typography>
                <p>
                    {`Libavá Map je veřejnosti přístupná webová aplikace, jež slouží jako platforma pro zmapování a dokumentaci zaniklých obcí v oblasti vojenského újezdu Libavá.`}
                </p>
                <p>
                    {`Aplikace si klade za cíl přiblížit historii oblasti interaktivní formou a nabídnout uživatelům možnost dozvědět se shrnující informace o jednotlivých obcích prostřednictvím interaktivní mapy, která obsahuje údaje o lokalitách, včetně historických fotografií.`}
                </p>
            </Box>
            <Box className={styles.projectContainer}>
                <Typography className={styles.title} variant="h5" component="h2">
                    {`O projektu`}
                </Typography>
                <p>
                    {`Platforma Libavá Map byla vytvořena jako studentský projekt v rámci závěrečné práce předmětu SDEb1107 - "Česko-německé vztahy" během studia na Fakultě sociálních studií Masarykovy univerzity v Brně.`}
                </p>
                <p>
                    {`Autory toho projektu jsou Richard Bednář a Ondřej Němec. Kontaktovat nás můžete prostřednictvím emailu: `}
                    <a href="mailto:libava.map@icloud.com">
                        {`libava.map@icloud.com`}
                    </a>
                </p>
            </Box>
            <Box className={`${styles.poemContainer} ${showText ? styles.slide : ''}`}>
                <pre>{`útěk tak zběsilý
zapomeneš spoustu věcí třeba
svoje rodné stavení

a už nikdy
a už nikdy se tam nevrátíš
                `}</pre>
            </Box>
        </Box>
    );
};

export default Project;