import React from 'react';
import Jump from '../../assets/jump/jump-function.jpg';

export interface JumpFunctionProps {
    altText?: string;
}

const JumpFunction: React.FC<JumpFunctionProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={Jump} />
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

export default JumpFunction;
