import styles from "@/styles/index.module.css";

interface Props {
    shadowStyle: string;
    borderRadiusStyle: string;
}

const OutputBlock = ({
    shadowStyle,
    borderRadiusStyle
} : Props) => {
    return (
        <div className={styles.result}>
            <div style={{
                width: '200px',
                height: '200px',
                position: 'relative',
                margin: 'auto',
                backgroundColor: '#66b7ed',
                boxShadow: shadowStyle,
                borderRadius: borderRadiusStyle,
            }}>
                
            </div>
        </div>
    )
}

export default OutputBlock;