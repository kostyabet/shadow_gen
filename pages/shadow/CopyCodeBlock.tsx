import styles from "@/styles/index.module.css";

interface Props {
    shadowStyle: string;
    borderRadiusStyle: string;
}

const CopyCodeBlock = ({shadowStyle, borderRadiusStyle} : Props) => {
    const shadowText = `box-shadow: ${shadowStyle};`;
    const borderText = `border-radius: ${borderRadiusStyle};`;
    
    async function OnButtonClick() 
    {
        await navigator.clipboard.writeText(shadowText + '\n' + borderText);  
        const button = document.getElementById('button') as HTMLInputElement;
        button.innerText = 'Copied!';
        setTimeout(() => {
            button.innerText = "Copy";
        }, 1000);
    }
    
    return(
        <div className={styles.codeContainer}>
            <code>
                {shadowText}
                <br/>
                {borderText}
            </code>
            <button id={'button'} onClick={OnButtonClick}>Copy</button>
        </div>
    )
}

export default CopyCodeBlock;