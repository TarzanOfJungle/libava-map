import styles from './locality.module.css';

const Locality= () => {
    return (
        <div className={styles.page}>
            <div className="locality-header">
                <h1>Vojenského újezdu Libavá
                </h1>
            </div>
            <div className={styles.content}>
                <pre>{`Proč’s jen rozbil skřipky svoje?
hoho, předčasně jsi zmlk’;
Na Sudetsku, slyšíš? boje,
však tam řádí ještě vlk!

Naši tam jsou vyděděnci,
schnoucí jsou tam haluzí;
jazyka, ba, vykleštěnci,
vlastním v domě podruzi;

barabizny jejich školy,
učebná síň páchne – stáj;
zříceniny ze stodoly
školou pro tu českou – láj!

paláce co zatím hostí
Němců odnož v přepychu;
naší bídy není dosti,
dál nám pít’ žluč z kalichu.

Dřív nás tiskli Francsefové,
dávali nás v područí;
a teď – kdo ?... vem skřipky nové,
barde, Petře Bezruči!

Projdi Hlučín, po Sudetsku,
hraničářů sejdi kruh;
zahraj, jak jsi hrával v Slezsku,
až by vládcům přešel sluch.

Až by struny popraskaly,
jedna jen by zůstala,
která srdce láme žaly,
od hněvu ta zoufalá!`}</pre>
            </div>
        </div>
    );
};

export default Locality;