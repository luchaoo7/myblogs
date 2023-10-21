import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Divider from '../utils/Divider';
import { cat1 } from '../utils/ImageImporter';
import SearchEngineOptimize from '../utils/SearchEngineOptimize';

interface CatProps {
    // Add any props you might need
}

const Cat = ({ }: CatProps): JSX.Element => {

    return (
        <>
            <Header 
                heading="Feline Love"
                subHeading="Miaou"
                backgroundImage={cat1}
            />
            <SearchEngineOptimize
                title="Cat"
                description="A place to know a little bit about everything"
                name="All-About-It"
                type="article"
            />

            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-11 col-lg-9 col-xl-10">
                            <p>Ah, the cat, nature's most enigmatic stand-up comedian. Picture this: a fluffy, four-legged philosopher with a penchant for chaos. Cats are the only creatures on Earth that can simultaneously demand cuddles and swat your hand away with impeccable timing. They're purrpetual masters of Zen, napping in sunbeams as if they hold the secrets of the universe.</p>
                            <p>Cats believe they're invisible, especially when they're "hunting" a shoelace. Their daily routines involve rigorous exercise—stretching their paws to tap dance on your keyboard when you're working. With an unparalleled ability to turn a simple cardboard box into a multidimensional playground, they're the architects of minimalistic marvels.</p>
                            <p>But beneath their suave exterior lies a mischievous streak. They'll bring you "gifts" (read: half-eaten insects) like a culinary critic presenting a dish you never ordered. And let's not forget their nocturnal symphonies, a harmonious blend of yowls and door-scratching that can rival any opera.</p>
                            <p>In short, cats are the furry comedians who've perfected the art of aloofness, leaving us mere humans forever entranced by their charming antics and questionable life choices.</p>
                        </div>

                        <div className="col-md-1 col-lg-3 col-xl-2 shadow-sm">
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/">Siamese Cat</Link>
                            <Divider />
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/">Bengal Cat</Link>
                            <Divider />
                            <Link  className="nav-link px-lg-3 py-3 py-lg-4" to="/">Maine Coon Cat</Link>
                            <Divider />
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
};

export default Cat;
