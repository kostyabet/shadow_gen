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
    const [shadowColor, setShadowColor] = useState('rgba(0, 0, 0, 0.5)');
    function ChangeShadowColor(value: string) {
        setShadowColor(value);
    }
    
    const shadowStyle = `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
    return (
        <div>
            <OutputBlock shadowStyle={shadowStyle}/>

            <ChangeSettings 
                offsetX={offsetX} 
                offsetY={offsetY}
                blurRadius={blurRadius}
                spreadRadius={spreadRadius}
                shadowColor={shadowColor}

                setOffsetX={ChangeXOffset}
                setOffsetY={ChangeYOffset}
                setBlurRadius={ChangeBlurRadius}
                setSpreadRadius={ChangeSpreadRadius}
                setShadowColor={ChangeShadowColor}
            />

            <CopyCodeBlock shadowStyle={shadowStyle} />
        </div>
    );
}

export default ShadowGenerator;