import styles from "@/styles/index.module.css";
import OutputBlock from "@/pages/shadow/OutputBlock";
import ChangeSettings from "@/pages/shadow/ChangeSettings";
import {useState} from "react";
import CopyCodeBlock from "@/pages/shadow/CopyCodeBlock";

const ShadowGenerator = () => {
    const [offsetX, setOffsetX] = useState(10);
    function ChangeXOffset(value: number) {
        setOffsetX(value);
    }
    const [offsetY, setOffsetY] = useState(10);
    function ChangeYOffset(value: number) {
        setOffsetY(value);
    }
    const [blurRadius, setBlurRadius] = useState(20);
    function ChangeBlurRadius(value: number) {
        setBlurRadius(value);
    }
    const [spreadRadius, setSpreadRadius] = useState(5);    
    function ChangeSpreadRadius(value: number) {
        setSpreadRadius(value);
    }
    const [borderRadius, setBorderRadius] = useState(25);
    function ChangeBorderRadius(value: number) {
        setBorderRadius(value);
    }
    const [shadowOpacity, setShadowOpacity] = useState('0.5');
    function ChangeShadowOpacity(value: string) {
        setShadowOpacity(value);
    }
    const [shadowInset, setShadowInset] = useState('');
    function ChangeShadowInset() {
        setShadowInset(shadowInset == '' ? 'inset' : '');
    }
    const [shadowColor, setShadowColor] = useState('#2c89c7');
    function ChangeShadowColor(value: string) {
        setShadowColor(value);
    }
    
    const shadowStyle = `${shadowInset} ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;
    const borderRadiusStyle = `${borderRadius}px`;
    function hexToRgba(shadowColor: string, shadowOpacity: string): string {
        const r = parseInt(shadowColor.substr(1, 2), 16);
        const g = parseInt(shadowColor.substr(3, 2), 16);
        const b = parseInt(shadowColor.substr(5, 2), 16);

        return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
    }
    
    return (
        <div className={styles.MainContainer}>
            <div className={styles.container}>
                <OutputBlock shadowStyle={shadowStyle} borderRadiusStyle={borderRadiusStyle} />

                <ChangeSettings
                    offsetX={offsetX}
                    offsetY={offsetY}
                    blurRadius={blurRadius}
                    spreadRadius={spreadRadius}
                    shadowOpacity={shadowOpacity}
                    borderRadius={borderRadius}
                    shadowColor={shadowColor}

                    setOffsetX={ChangeXOffset}
                    setOffsetY={ChangeYOffset}
                    setBlurRadius={ChangeBlurRadius}
                    setSpreadRadius={ChangeSpreadRadius}
                    setShadowOpacity={ChangeShadowOpacity}
                    setBorderRadius={ChangeBorderRadius}
                    setShadowColor={ChangeShadowColor}
                    setShadowInset={ChangeShadowInset}
                />
            </div>

            <CopyCodeBlock shadowStyle={shadowStyle} borderRadiusStyle={borderRadiusStyle} />
        </div>
    );
}

export default ShadowGenerator;