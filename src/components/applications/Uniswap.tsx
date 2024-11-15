import React from 'react';
import Window from '../os/Window';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
    const initWidth = Math.min(1200, window.innerWidth - 100);
    const initHeight = Math.min(800, window.innerHeight - 50);

    return (
        <Window
            top={20}
            left={60}
            width={initWidth}
            height={initHeight}
            windowBarIcon="computerSmall"
            windowTitle="Uniswap"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://app.uniswap.org/swap"
                    // src="https://excalidraw.com/"
                    title="uniswap"
                    width="100%"
                    height="100%"
                    style={{
                        border: 'none',
                        overflow: 'auto',
                    }}
                />
            </div>
        </Window>
    );
};

export default ThisComputerApp;
