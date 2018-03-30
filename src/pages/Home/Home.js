import React from 'react';
import { Section, Hero, Container, Title, SubTitle } from 'reactbulma';
import RolloutGenerator from '../../components/RolloutGenerator';

/** @type React.SFC<{}> */
const Home = () => (
    <>
        <Hero>
            <Hero.Body>
                <Container>
                    <Title>Rollout</Title>
                    <SubTitle>A Dungeons & Dragons Attribute Generator</SubTitle>
                </Container>
            </Hero.Body>
        </Hero>
        <Section>
            <Container>
                <RolloutGenerator />
            </Container>
        </Section>
    </>
);

export default Home;