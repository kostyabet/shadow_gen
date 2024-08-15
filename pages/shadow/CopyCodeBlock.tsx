interface Props {
    shadowStyle: string;
}

const CopyCodeBlock = ({shadowStyle} : Props) => {
    return(
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
            <code>box-shadow: {shadowStyle};</code>
        </div>
    )
}

export default CopyCodeBlock;