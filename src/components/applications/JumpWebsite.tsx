import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
    const initWidth = Math.min(1200, window.innerWidth - 100);
    const initHeight = Math.min(800, window.innerHeight - 50);

    return (
        <Window
            top={30}
            left={80}
            width={initWidth}
            height={initHeight}
            windowBarIcon="computerSmall"
            windowTitle="MEME JUMP"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    // src="https://oldgoogle.neocities.org/1998/"
                    src="https://memejump.io"
                    // src="https://app.uniswap.org/swap"
                    title="jump"
                    width="100%"
                    height="100%"
                    style={{
                        border: 'none',
                        overflow: 'auto',
                    }}
                />
                {/* <div style={}>
                    <DesktopShortcut
                        icon="computerBig"
                        invertText
                        shortcutName={'Computer Details'}
                        onOpen={() => {}}
                    />
                </div> */}
            </div>
        </Window>
    );
};

export default ThisComputerApp;
