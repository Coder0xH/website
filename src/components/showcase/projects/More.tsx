import React from 'react';

// import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import SundayNFT from '../SundayNFT';

export interface MoreProjectsProps {}

const MoreProjects: React.FC<MoreProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>MORE</h1>
            <h3>Projects</h3>
            <div className="text-block">
                <p>
                    Here is a brief overview of previous projects, reflecting a
                    focus on practical implementation and consistent results.
                </p>
            </div>
            <div className="text-block">
                <h2>Sunday NFT</h2>
                <br />
                <SundayNFT />
                <br />
                <p>
                    Sunday NFT is an innovative NFT marketplace designed for the
                    next generation of digital asset trading. Built with user
                    experience and security at its core, Sunday NFT offers a
                    seamless platform for creators and collectors alike to buy,
                    sell, and trade a vast array of digital assets. From unique
                    digital collectibles to groundbreaking artwork and other
                    tokenized assets, the marketplace fosters a thriving
                    community of artists, collectors, and investors. Equipped
                    with advanced search and filtering tools, Sunday NFT
                    simplifies the discovery process, allowing users to easily
                    find and invest in assets that resonate with them. With
                    features such as wallet integration, secure transactions,
                    and a commitment to supporting emerging artists, Sunday NFT
                    positions itself as a key player in the expanding NFT
                    ecosystem. As the digital landscape evolves, Sunday NFT aims
                    to bridge the gap between creators and audiences, providing
                    a space where the true value of digital ownership can be
                    realized.
                </p>
                {/* <br />
                <div className="captioned-image">
                    <img src={girlRun} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Eight Frame Run cycle animated by
                            myself, original sprite by kevink
                        </sub>
                    </p>
                </div>
                <p>
                    I really started enjoying the work I was doing, and felt I
                    was improving a lot. Around 2017, I started to upload videos
                    of my work flow and animation process to YouTube just for
                    fun. I was really surprised however when my first video took
                    off and got a few thousand views! Below are the video links
                    to the work I uploaded to youtube.
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                and Tutorial
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                Cycle Time-lapse
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more pixel art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of pixel
                    art!
                </p> */}
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default MoreProjects;
