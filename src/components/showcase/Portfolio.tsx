import React from 'react';

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = (props) => {
    return (
        <div className="site-page-content">
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Portfolio</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <b>
                            <p>Summer 2023 - Fall 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <h2>Web3.0 Strategic Operations Planning</h2>
                <ul>
                    <li>
                        <p>
                            Driving continuous innovation and growth in core
                            Web3.0 sectors
                        </p>
                    </li>
                    <li>
                        <p>Precise market analysis and strategic positioning</p>
                    </li>
                </ul>
                <br />
                <h2>Technical Support</h2>
                <ul>
                    <li>
                        <p>Comprehensive blockchain services</p>
                    </li>
                    <li>
                        <p>Web3.0 mainstream product development</p>
                    </li>
                    <li>
                        <p>Smart contract development</p>
                    </li>
                    <li>
                        <p>DApp optimization</p>
                    </li>
                    <li>
                        <p>Ensuring project stability and security</p>
                    </li>
                    <li>
                        <p>Security audits</p>
                    </li>
                </ul>
                <h2>Web3.0 Strategic Operations Planning</h2>
                <ul>
                    <li>
                        <p>Enhancing brand recognition</p>
                    </li>
                    <li>
                        <p>Driving user growth and community engagement</p>
                    </li>
                    <li>
                        <p>Effective brand building</p>
                    </li>
                    <li>
                        <p>Multi-channel promotion</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Portfolio;
