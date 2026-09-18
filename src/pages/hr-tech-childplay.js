import React from "react"
import Layout from "../components/layout"
import endToendPCB from "../images/newWeb/blog/endToendPCB.png"
import Seo from "../components/seo"
import {
  PageWrapper,
  ArticleHero,
  HeroImage,
  ArticleBodyGrid,
  ShareRail,
  BodyColumn,
  Lede,
  Body,
  Subhead,
  BulletList,
  BulletItem,
  RelatedArticles,
  BlogNewsletter,
} from "../components/blogPost/BlogPostLayout"

const POST_URL = "hr-tech-childplay"
const POST_TITLE = "How HR Tech Became Child's Play"
const POST_DESCRIPTION =
  "Go behind the scenes of 'Evolve or Fossilise,' the interactive game that made Darwinbox a hit at HR Tech Las Vegas. See how we did it"

const HRTechChildsPlay = () => {
  return (
    <Layout>
      <PageWrapper>
        <ArticleHero
          category="SOFTWARE"
          date="27th Nov 2025"
          title={POST_TITLE}
          standfirst={POST_DESCRIPTION}
          author="Parveen Sharma"
        />
        <HeroImage src={endToendPCB} alt={POST_TITLE} />
        <ArticleBodyGrid>
          <ShareRail title={POST_TITLE} />
          <BodyColumn>
            <Lede>
              At a sprawling expo like HR Tech Las Vegas, it's a battle for
              attention. Hundreds of brands, all armed with sleek booths and
              competing pitches, compete for a few moments of a visitor's
              time. In this sea of corporate sameness, standing out requires
              something different—something memorable. That's where
              Darwinbox, a leader in HR technology, decided to change the
              game.
            </Lede>
            <Body>
              Instead of another predictable booth, they partnered with us at
              Avantari to create "Evolve or Fossils," an interactive game
              that turned their core message into an unforgettable
              experience. This wasn't just about adding a fun gimmick; it was
              a strategic move to cut through the noise and connect with
              attendees on an emotional level. This post takes you behind the
              scenes to show how we transformed a complex business concept
              into a simple, addictive game that people couldn't stop
              playing.
            </Body>

            <Subhead>The Challenge: Making HR Tech Memorable</Subhead>
            <Body>
              The primary challenge was clear: how do you make a
              sophisticated HR technology platform feel engaging and
              accessible on a crowded expo floor? Darwinbox's message is
              about helping organizations evolve with agile, future-ready
              solutions. The risk was that this message could get lost amidst
              technical jargon and standard marketing spiels. We needed to
              translate this idea into an experience that was not only
              instantly understandable but also genuinely fun.
            </Body>
            <Body>
              The environment of a trade show presents unique obstacles.
              Visitors are often overwhelmed, short on time, and bombarded
              with information. Any engagement tool we designed had to have
              no learning curve. It needed to grab attention from afar,
              invite immediate interaction, and leave a lasting impression of
              what the person was feeling. The solution was to create a
              "sticky" experience that would anchor Darwinbox's brand in the
              minds of potential clients.
            </Body>

            <Subhead>The Concept: Evolution As Gameplay</Subhead>
            <Body>
              To capture the essence of Darwinbox's mission, we centered the
              game around a simple but powerful idea: growth versus
              stagnation. This concept of evolution became the core gameplay
              mechanic. We needed a narrative that attendees could grasp in
              seconds.
            </Body>
            <Body>
              The game became a side-scrolling adventure where the player's
              goal was to evolve. We introduced two key elements:
            </Body>
            <BulletList>
              <BulletItem>
                <strong>Fossils as Obstacles</strong>: These represented
                outdated, rigid HR systems—the very problems Darwinbox
                solves. The fossil obstacles blocked the player's progress, a
                clear metaphor for how legacy technology can hold a business
                back.
              </BulletItem>
              <BulletItem>
                <strong>Coins as Growth</strong>: Collecting coins symbolized
                progress, agility, and the adoption of modern solutions. Each
                coin collected helped the player "evolve" to the next level,
                visually demonstrating the benefits of moving forward.
              </BulletItem>
            </BulletList>
            <Body>
              This simple duality—avoid fossils, collect coins—turned a
              complex business proposition into an intuitive and engaging
              game. The player didn't need a manual; the message was
              embedded directly into the play loop.
            </Body>

            <Subhead>Art &amp; Design: Pixel Nostalgia Meets Modern UX</Subhead>
            <Body>
              To create immediate appeal, we chose a retro pixel-art style.
              This aesthetic taps into a shared sense of nostalgia, evoking
              the classic video games many of us grew up with. It's
              friendly, accessible, and stands out brilliantly against the
              slick, corporate-heavy environment at tech expos. The pixel
              art wasn't just a stylistic choice; it was a strategic tool to
              make the experience inviting and non-intimidating.
            </Body>
            <Body>
              While the style was retro, we infused it with a modern
              sensibility. The landscapes and backgrounds were inspired by
              the warm, enchanting worlds of Studio Ghibli films. This
              brought a sense of charm and visual depth to the game, making
              the world feel alive and engaging. The design choices were
              also informed by UX principles. There was no need for clarity,
              the player, obstacles, and rewards had to be instantly
              recognizable, ensuring the gameplay remained front and center.
            </Body>

            <Subhead>Building The Play Loop: Fast, Fun, Addictive</Subhead>
            <Body>
              At an event, you have only a few seconds to capture someone's
              interest. The gameplay for "Evolve or Fossils" had to be
              incredibly intuitive. We designed a simple "tap to jump"
              mechanic that anyone could master instantly. There were no
              complicated controls or instructions, which eliminated any
              barrier to entry.
            </Body>
            <Body>
              To make the experience addictive, we focused on
              micro-interactions. The satisfying sound of collecting a coin,
              the subtle animation of the character evolving, and the smooth
              physics of the jump all contributed to a feeling of
              engagement. These small details create a rewarding feedback
              loop that encourages players to try again and beat their high
              score. The game was competitive, with a real-time leaderboard
              that is enough to get along with conference goers. As much of
              a visitor's time, this quick, repeatable loop was key to
              keeping the booth buzzing with activity.
            </Body>

            <Subhead>Technology Behind The Scenes</Subhead>
            <Body>
              To bring this vision to life, we relied on a robust and
              flexible tech stack. The game was developed using a
              lightweight game engine optimized for speed and deployment.
              This ensured that the experience would load almost instantly
              on the expo hardware, a critical factor when attendees have
              little patience for delays.
            </Body>
            <Body>
              We focused heavily on performance, making sure the
              interactions were responsive and the transitions between game
              states were seamless. The code was streamlined to handle
              continuous play without any lag or glitches. This technical
              polish is what elevates a simple concept into a professional
              experience. The invisible, seamless technology, while
              invisible to the player, was the foundation that allowed the
              creative vision to shine.
            </Body>

            <Subhead>Results: A Booth Experience People Remembered</Subhead>
            <Body>
              The response at the expo floor was immediate and overwhelmingly
              positive. Visitors were drawn in by the vibrant pixel art and
              the sounds of the game. Soon, a crowd formed as people tried to
              beat each other's scores. High scores on the leaderboard became
              a conversation starter, allowing the Darwinbox team to connect
              with potential clients in a relaxed and organic way.
            </Body>
            <Body>
              The gameplay itself served as a powerful storytelling tool. As
              players tried to "evolve," the Darwinbox team could explain how
              their platform helps organizations do the same. The game
              wasn't just an icebreaker; it was a masterclass in
              experiential marketing. Instead of just talking about agility
              and growth, they were letting people feel it. The booth was no
              longer just a space—it was an experience people remembered and
              talked about.
            </Body>

            <Subhead>Our Philosophy At Avantari</Subhead>
            <Body>
              This project is a perfect example of our core philosophy at
              Avantari. We believe that good design is about creating an
              experience that serves a clear purpose. Whether we are
              designing hardware, a mobile app, or an interactive game, the
              principles remain the same. It's about understanding the user,
              simplifying the message, and crafting an experience that feels
              intuitive and delightful.
            </Body>
            <Body>
              We see a future where interactive experiences are no longer a
              novelty but a fundamental part of brand strategy. Games,
              interactive activations, and immersive installations are
              powerful tools to invite audiences to participate in a brand's
              story. When done thoughtfully, these experiences can create
              for deeper and more lasting connections than traditional
              marketing ever could.
            </Body>

            <Subhead>More Than A Game: Designing For Impact</Subhead>
            <Body>
              "Evolve or Fossils" demonstrates how thoughtful design can turn
              a simple concept into a memorable experience. It shows that
              with the right creative approach, even at a bustling
              conference, playfulness can be a serious business tool. This
              project is a testament to the future of brand engagement,
              where creativity and interaction are key to cutting through the
              noise.
            </Body>
            <Body>
              We're excited to keep pushing the boundaries of what's
              possible in experiential design. We specialize in creating
              experiential designs that capture attention and leave a
              lasting impact.
            </Body>
          </BodyColumn>
        </ArticleBodyGrid>
        <RelatedArticles currentUrl={POST_URL} />
        <BlogNewsletter />
      </PageWrapper>
    </Layout>
  )
}

const canonicalUrl = `https://www.avantari.org/${POST_URL}`

export const Head = () => (
  <Seo
    title={`${POST_TITLE} | Avantari`}
    description={POST_DESCRIPTION}
    image={endToendPCB}
    url={canonicalUrl}
  />
)

export default HRTechChildsPlay
