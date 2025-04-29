import { Box, Typography } from "@mui/material"
import styles from "./header.module.css";

interface HeaderProps {
    selectedTab: number;
    setSelectedTab: (tab: number) => void;
}

const Header = ({selectedTab, setSelectedTab}: HeaderProps) => {

    const handleTabChange = (tab: number) => {
        if (selectedTab !== tab) {
            setSelectedTab(tab);
        }
    }

    return <Box className={styles.header}>
        <Typography className={styles.title} variant="h5" component="h2">
            Zaniklé obce v oblasti vojenského újezdu Libavá
        </Typography>
        <Box className={styles.menu}>
            <button className={selectedTab === 1 ? styles.selectedButton : styles.button} onClick={() => handleTabChange(1)}>Mapa</button>
            <button className={selectedTab === 2 ? styles.selectedButton : styles.button} onClick={() => handleTabChange(2)}>Lokalita</button>
            <button className={selectedTab === 3 ? styles.selectedButton : styles.button} onClick={() => handleTabChange(3)}>Projekt</button>
        </Box>
    </Box>
}

export default Header;