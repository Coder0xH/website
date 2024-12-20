import React from 'react';
import Window from '../os/Window';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={400}
            windowBarIcon="computerSmall"
            windowTitle="This Computer"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://memeshort.io/me"
                    title="short"
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
