import React from 'react';
import NFT from '../../assets/more/SundayNFT.jpg';

export interface SundayNFTProps {
    altText?: string;
}

const SundayNFT: React.FC<SundayNFTProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={NFT} />
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        // width: 56,
        // height: 48,
        maxWidth: '100%',
        height: 'auto',
        paddingRight: 24,
    },
};

export default SundayNFT;
