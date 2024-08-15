import styles from '@/styles/index.module.css';

interface Props {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    spreadRadius: number;
    borderRadius: number;
    shadowOpacity: string;
    shadowColor: string;
    
    setOffsetX: (value: number) => void;
    setOffsetY: (value: number) => void;
    setBlurRadius: (value: number) => void;
    setSpreadRadius: (value: number) => void;
    setBorderRadius: (value: number) => void;
    setShadowOpacity: (value: string) => void;
    setShadowColor: (value: string) => void;
    setShadowInset: () => void;
}

const ChangeSettings = ({
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius, 
    borderRadius,
    shadowOpacity,
    shadowColor,
    setOffsetX,
    setOffsetY,
    setBlurRadius,
    setSpreadRadius,
    setBorderRadius,
    setShadowOpacity,
    setShadowColor,
    setShadowInset
} : Props) => {
    return (
        <div className={styles.settings}>
            <div className={styles.range}>
                <label>Offset X:</label>
                <input type="range" min="-100" max="100" value={offsetX}
                       onChange={(e) => setOffsetX(Number(e.target.value))}
                />
            </div>
            <div className={styles.range}>
                <label>Offset Y:</label>
                <input type="range" min="-100" max="100" value={offsetY}
                       onChange={(e) => setOffsetY(Number(e.target.value))}
                />
            </div>
            <div className={styles.range}>
                <label>Blur Radius:</label>
                <input type="range" min="0" max="100" value={blurRadius}
                       onChange={(e) => setBlurRadius(Number(e.target.value))}
                />
            </div>
            <div className={styles.range}>
                <label>Spread Radius:</label>
                <input type="range" min="-50" max="50" value={spreadRadius}
                       onChange={(e) => setSpreadRadius(Number(e.target.value))}
                />
            </div>
            <div className={styles.range}>
                <label>Border Radius:</label>
                <input type="range" min="0" max="100" value={borderRadius}
                       onChange={(e) => setBorderRadius(Number(e.target.value))}
                />
            </div>
            <div className={styles.range}>
                <label>Shadow Opacity:</label>
                <input type="range" min="0" max="1" step="0.05" value={shadowOpacity}
                       onChange={(e) => setShadowOpacity(e.target.value)}
                />
            </div>
            <div className={styles.color}>
                <label>Shadow Color:</label>
                <input type="color" value={shadowColor}
                       onChange={(e) => setShadowColor(e.target.value)}
                />
            </div>
            <div className={styles.input}>
                <label>Shadow Inside:</label>
                <input type="checkbox"
                       onClick={(e) => setShadowInset()}
                />
            </div>
        </div>
    )
}

export default ChangeSettings;