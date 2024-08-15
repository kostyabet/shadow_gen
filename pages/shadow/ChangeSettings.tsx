interface Props {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    spreadRadius: number;
    shadowColor: string;
    
    setOffsetX: (value: number) => void;
    setOffsetY: (value: number) => void;
    setBlurRadius: (value: number) => void;
    setSpreadRadius: (value: number) => void;
    setShadowColor: (value: string) => void;
}

const ChangeSettings = ({
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    shadowColor,
    setOffsetX,
    setOffsetY,
    setBlurRadius,
    setSpreadRadius,
    setShadowColor
} : Props) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <label>
                Offset X: {offsetX}px
                <input
                    type="range"
                    min="-50"
                    max="50"
                    value={offsetX}
                    onChange={(e) => setOffsetX(Number(e.target.value))}
                />
            </label>
            <br />
            <label>
                Offset Y: {offsetY}px
                <input
                    type="range"
                    min="-50"
                    max="50"
                    value={offsetY}
                    onChange={(e) => setOffsetY(Number(e.target.value))}
                />
            </label>
            <br />
            <label>
                Blur Radius: {blurRadius}px
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(Number(e.target.value))}
                />
            </label>
            <br />
            <label>
                Spread Radius: {spreadRadius}px
                <input
                    type="range"
                    min="-50"
                    max="50"
                    value={spreadRadius}
                    onChange={(e) => setSpreadRadius(Number(e.target.value))}
                />
            </label>
            <br />
            <label>
                Shadow Color:
                <input
                    type="color"
                    value={shadowColor}
                    onChange={(e) => setShadowColor(e.target.value)}
                />
            </label>
        </div>
    )
}

export default ChangeSettings;