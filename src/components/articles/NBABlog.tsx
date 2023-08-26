import React from 'react'
import SearchEngineOptimize from '../utils/SearchEngineOptimize';
import SectionHeading from '../utils/SectionHeading';
import Header from '../Header';
import SmallHeading from '../utils/SmallHeading';
import SmallerHeading from '../utils/SmallerHeading';
import PostImage from '../utils/PostImage';
import Divider from '../utils/Divider';
import basketballBG from '../../assets/img/basketball-bg.jpg';
import nbaPlayOff from '../../assets/img/nba-playoff.jpg';
import easternConference from '../../assets/img/eastern-conference.png';
import westernConference from '../../assets/img/western-conference.png';

interface NBABlogProps {
    // Add any props you might need
}

const NBABlog = ({ }: NBABlogProps): JSX.Element => {

    return (
        <>
            <Header 
                heading="NBA Structure"
                backgroundImage={basketballBG}
                subHeading="Unraveling the NBA's Unique Structure"
            />
            <SearchEngineOptimize
                title="NBA Structure"
                description="NBA Structure: 30 teams, two conferences, three divisions each, 82-game season."
                name="NBA Structure"
                type="article"
            />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <SectionHeading heading="The NBA League Structure"/>
                            <p>
                                The National Basketball Association (NBA) is not just one of the premier professional basketball leagues in the world, 
                                but it's also a powerhouse when it comes to global sports branding, media reach, and player recognition.
                                From its inception in 1946, the NBA has grown exponentially both in terms of teams and its organizational structure.
                                In this article, we will delve into the intricacies of the NBA's league structure and its evolution over the years.
                            </p>
                            <Divider />
                            <SmallHeading heading="1. Overview"/>
                            <p>
                                The NBA comprises <b>30 teams</b>, 29 in the United States and 1 in Canada, split between the Western and Eastern Conferences. 
                                Each conference is further divided into three divisions with <b>5 teams per division</b>.
                                Here's a quick breakdown:
                            </p>

                            <div className="container text-center">
                                <div className="row align-items-start">
                                    <div className="col">
                                        <SmallerHeading heading="Western Conference:" />
                                        <ul>
                                            <li>Pacific Division</li>
                                            <li>Northwest Division</li>
                                            <li>Southwest Division</li>
                                        </ul>

                                    </div>
                                    <div className="col">
                                        <SmallerHeading heading="Eastern Conference:" />
                                        <ul>
                                            <li>Atlantic Division</li>
                                            <li>Central Division</li>
                                            <li>Southeast Division</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="container text-center">
                                <div className="row align-items-start">
                                    <div className="col">
                                        <PostImage image_path={westernConference} />
                                    </div>
                                    <div className="col">
                                        <PostImage image_path={easternConference} />
                                    </div>
                                </div>
                            </div>

                            <SmallHeading heading="2. Regular Season" />

                            <p>
                                Each team plays a total of <b>82 games</b> in the regular season:
                            </p>
                            <ul>
                                <li>41 at home and 41 away.</li>
                                <li>They face teams within their division four times (two home games and two away games). </li>
                                <li>Teams play against the other teams in their conference either three or four times.</li>
                                <li>They also play against teams from the opposite conference twice (one home and one away).</li>
                            </ul>
                            <p>
                                This structure ensures that every team has an opportunity to play against all other teams in the league,
                                fostering competitive balance.
                            </p>
                            <SmallHeading heading="3. Playoffs"/>
                            <PostImage image_path={nbaPlayOff} />
                            <p>
                                The NBA Playoffs are an exciting time of the year when the top eight teams from each conference, 
                                based on their regular-season records, compete for the championship.
                                The playoffs are structured as follows:
                            </p>
                            <p>
                                <b>First Round:</b> The team with the best record in each conference faces the eighth-seeded team, the second faces the seventh, and so on.
                            </p>
                            <p>
                                <b>Conference Semifinals:</b> The winners from the first round compete in the semifinals.
                            </p>
                            <p>
                                <b>Conference Finals:</b> The winners of the semifinals vie for the conference title.
                            </p>
                            <p>
                                <b>NBA Finals:</b> The champions of the Western and Eastern conferences battle it out in a best-of-seven series to determine the league champion.
                            </p>
                            <p>
                                Each playoff series, from the first round to the NBA Finals, is a best-of-seven contest, meaning the first team to win four games advances.
                            </p>
                            <SmallHeading heading="4. Draft System"/>
                            <p>
                                The NBA Draft is an annual event where teams select eligible players to join the league.
                                This system is designed to allow weaker teams to choose earlier in the draft,
                                potentially securing stronger players and thus promoting parity within the league.
                            </p>
                            <p>
                                The draft order for the 14 teams that did not make the playoffs is determined by a lottery system.
                                The remaining order is set based on playoff results, with the NBA champion picking last.
                            </p>
                            <SmallHeading heading="5. All-Star Weekend"/>
                            <p>
                                Held in the middle of the NBA season, the All-Star Weekend is a celebration of the league's talent.
                                It features the All-Star Game, where the league's top players, voted by fans, coaches,
                                and media, compete in a friendly match.
                                The weekend also includes events such as the Skills Challenge, Three-Point Contest, and Slam Dunk Contest.
                            </p>
                            <SmallHeading heading="6. Evolution and Expansion"/>
                            <p>
                                The NBA has seen several changes in its structure over the decades.
                                Originally, there were fewer teams, and the league has expanded multiple times to its current 30-team format.
                                The divisions and conferences have been reshuffled over the years to accommodate new teams and maintain a competitive balance.
                            </p>
                            <SmallHeading heading="Conclusion"/>
                            <p>
                                The NBA's league structure has been instrumental in its global success.
                                By ensuring that teams compete fairly, promoting emerging talents, and celebrating the skills of its top players,
                                the NBA has solidified its position as a premier basketball league on the global stage.
                                Whether you're a die-hard fan or a casual observer,
                                understanding the structure of the NBA provides a deeper appreciation for the game and its storied history.
                            </p>
                            <p>More info: <a href="https://uk.global.nba.com/standings/">Official NBA</a></p>


                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default NBABlog;
