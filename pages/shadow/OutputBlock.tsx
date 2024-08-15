interface Props {
    shadowStyle: string;
}

const OutputBlock = ({
    shadowStyle
} : Props) => {
    return (
        <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: '#fff',
            boxShadow: shadowStyle,
            border: '1px solid #ccc'
        }} />
    )
}

export default OutputBlock;