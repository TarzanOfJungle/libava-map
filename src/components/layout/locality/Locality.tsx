import { Box } from '@mui/material';
import styles from './locality.module.css';

const Locality= () => {
    return (
        <Box className={styles.page}>
            <Box className={styles.header}>
                <img
                    src={'libava-wide.jpg'}
                    alt={'Vojenský újezd Libavá'}
                    width={'100%'}
                />
                <Box className={styles.overlay} />
                <Box className={styles.title}>
                    <h1>Vojenský újezd Libavá</h1>
                </Box>
            </Box>
            <Box className={styles.content}>
                <p>
                    {`Vojenský újezd Libavá se nachází v Olomouckém kraji na ploše přibližně 235 km² v oblasti Oderských vrchů. Jeho území je charakteristické členitým terénem, lesy a říčními údolími. Na území újezdu se nenacházejí žádné trvale obývané obce, s výjimkou správního sídla Město Libavá. Vstup na území újezdu je omezen a povolen pouze s platným povolením újezdního úřadu. Jeho historie je úzce spjata s poválečnými událostmi a vojenskými aktivitami během studené války. Byl zřízen v roce 1950.`}
                </p>
                <p>
                    {`V roce 1946 vláda Československé republiky rozhodla o zřízení Vojenského výcvikového prostoru Libavá. Toto rozhodnutí vedlo k vysídlení obyvatel z 24 obcí a osad, které se nacházely na území budoucího vojenského prostoru. Vysídlení probíhalo mezi lety 1946 a 1952, kdy byly obce postupně opuštěny a jejich obyvatelé přemístěni. Celkem bylo vysídleno přibližně 3 400 osob, včetně dosídlenců z řad Čechů, kteří se do oblasti přistěhovali po odsunu německého obyvatelstva.`}
                </p>
                <p>
                    {`Vojenský újezd Libavá slouží především jako výcvikový prostor pro ozbrojené síly České republiky. Jeho rozloha a členitý terén poskytují ideální podmínky pro různé typy vojenských cvičení a výcviku. Újezd je spravován újezdním úřadem, který zajišťuje koordinaci vojenských a hospodářských činností na jeho území.`}
                </p>
                <p>
                    {`Během studené války byla Libavá významným vojenským prostorem, kde působila i sovětská armáda. Na území újezdu byly vybudovány objekty sovětské zabezpečovací raketové technické základny v lokalitě Kozlov, která byla střežena a přísně utajována. Sovětská jednotka byla vybavena balistickými raketami 9K76 Temp-S (NATO označení SS-12 Scaleboard) schopnými nést jaderné hlavice. Před místními obyvateli byly skutečné údaje o poslání a výzbroji jednotky tajeny. Odsun sovětských vojsk z Československa proběhl v letech 1988–1991. Jako první sovětská jednotka byla v rámci plnění smlouvy o likvidaci raket středního a krátkého doletu již v období od 25. února do 16. března 1988 stažena 122. raketová brigáda, umístěná v Hranicích, a právě v Libavé; rakety byly následně v SSSR zničeny. Po odchodu sovětských vojsk zůstalo na území újezdu množství technických a ekologických škod. Jen odstranění škod způsobených sovětskou armádou na lesních porostech ve vojenském újezdu Libavá stálo 127 milionů korun.`}
                </p>
                <p>
                    {`V roce 2016 došlo ke změně hranic vojenského újezdu, kdy byla část jeho území vyčleněna a připojena k okolním obcím. Tato změna byla součástí optimalizace vojenských újezdů v České republice.`}
                </p>
                <p>
                    {`Území vojenského újezdu Libavá má bohatou historii, která je spojena s osudy zaniklých obcí a jejich obyvatel. Mnohé z těchto obcí měly dlouhou historii sahající až do středověku. Po jejich vysídlení a zániku zůstaly na území újezdu pouze zbytky staveb, jako jsou základy domů, kostelů či hřbitovů. Tyto pozůstatky jsou svědectvím o minulém životě v této oblasti.`}
                </p>
                <p>
                    {`Každoročně se koná akce nazvaná "Bílý kámen", během níž je území újezdu zpřístupněno veřejnosti. Návštěvníci mají možnost prozkoumat zaniklé obce, přírodní krásy a historické památky, které se na území újezdu nacházejí.`}
                </p>
                {/* <pre>{`Proč’s jen rozbil skřipky svoje?
hoho, předčasně jsi zmlk’;
Na Sudetsku, slyšíš? boje,
však tam řádí ještě vlk!

Naši tam jsou vyděděnci,
schnoucí jsou tam haluzí;
jazyka, ba, vykleštěnci,
vlastním v domě podruzi;

barabizny jejich školy,
učebná síň páchne - stáj;
zříceniny ze stodoly
školou pro tu českou - láj!

paláce co zatím hostí
Němců odnož v přepychu;
naší bídy není dosti,
dál nám pít’ žluč z kalichu.

Dřív nás tiskli Francsefové,
dávali nás v područí;
a teď - kdo ?... vem skřipky nové,
barde, Petře Bezruči!

Projdi Hlučín, po Sudetsku,
hraničářů sejdi kruh;
zahraj, jak jsi hrával v Slezsku,
až by vládcům přešel sluch.

Až by struny popraskaly,
jedna jen by zůstala,
která srdce láme žaly,
od hněvu ta zoufalá!`}</pre> */}
            </Box>
        </Box>
    );
};

export default Locality;