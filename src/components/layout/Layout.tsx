import Header from "./header/Header"
import Map from "./map/Map";
import Sidebar from "./map/sidebar/Sidebar";

import styles from "./layout.module.css";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Locality from "./locality/Locality";
import Project from "./project/Project";

const Layout = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);
    const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

    return (
        <>
            <header className={styles.header}>
                <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            </header>
            <Box className={styles.content}>
                {selectedTab === 1 && (
                    <>
                        <div className={styles.mapContainer}>
                            <Map selectedPlaceId={selectedPlaceId} setSelectedPlaceId={setSelectedPlaceId} />
                        </div>
                        {selectedPlaceId && <aside className={styles.sidebar}>
                            <Sidebar selectedPlaceId={selectedPlaceId} setSelectedPlaceId={setSelectedPlaceId} />
                        </aside>}
                    </>
                )}
                {selectedTab === 2 && (
                    <Locality />
                )}
                {selectedTab === 3 && (
                    <Project />
                )}
                <footer className={styles.footer}>
                    <Typography variant="caption" style={{ fontSize: '0.75rem' }}>© {new Date().getFullYear()} Ondřej Němec - Všechna práva vyhrazena</Typography>
                    <Typography variant="caption" style={{ fontSize: '0.75rem' }}>FSS MU - SDEb1107</Typography>
                </footer>
            </Box>
        </>
    );
};

export default Layout;