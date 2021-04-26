<template>
  <Container id="codeofconduct">
    <section class="content-section">
      <HashHeader title="Code Of Conduct" />
      <div class="contents">
        <div class="dataSection">
          <h3>Applicability</h3>
          <p>
            This policy shall be applicable on all spaces related to HackOn
            Foundation, including the following, as well as their online
            counterparts (if any):
          </p>
          <ul>
            <li>hackathons</li>
            <li>talks, presentations, or demos</li>
            <li>workshops</li>
            <li>parties and social events</li>
            <li>social media channels, etc.</li>
          </ul>
          <p>
            This Code of Conduct also applies equally to all sponsors and
            partners of hackathons, and to all projects that are made at the
            hackathon.
          </p>
        </div>
        <div class="dataSection">
          <h3>No plagiarism or re-using of past work</h3>
          <p>
            We encourage you to submit projects only prepared in the duration of
            the hackathon. However, if you decide to submit projects consisting
            of re-used code, or re-submit a project that you have already
            submitted previously to any other hackathon, you are to disclose
            such previous use and its extent with the submission.
          </p>
          <br />
          <p>
            If upon inspection, it is found that the project has re-used code
            that was not disclosed with the submission, the organizer may ask
            the participant to point out similarities and differences between
            the old and new work, and/or disqualify the submission from winning
            awards automatically.
          </p>
        </div>
        <div class="dataSection">
          <p>
            Hackathons hosted by HackOn Foundation are dedicated to providing a
            safe and comfortable environment and harassment-free experience for
            everyone. No discrimination, on the basis of the following, shall be
            tolerated:
          </p>
          <ul>
            <li>gender</li>
            <li>gender identity and expression</li>
            <li>age</li>
            <li>sexual orientation</li>
            <li>disability</li>
            <li>physical appearance</li>
            <li>body size</li>
            <li>race</li>
            <li>ethinicity</li>
            <li>nationality</li>
            <li>religion</li>
            <li>poltical views</li>
            <li>previous hackathon attendance or lack of</li>
            <li>computing experience or lack of</li>
            <li>chosen programming language or tech stack</li>
          </ul>
        </div>
        <div class="dataSection">
          <h3>No harassment</h3>
          <p>
            We do not tolerate harassment of hackathon participants in any form,
            including offensive discriminatory verbal comments, public display
            of sexual material, in public spaces, deliberate intimidation,
            stalking, wilful disruption, inappropriate physical contact,
            unwelcome sexual advances, and the taking of photographs and
            audio/video recordings without the subjects consent.
          </p>
        </div>
        <div class="dataSection">
          <h3>No recording without consent</h3>
          <p>
            While photography and videography is encouraged, other participants
            must be given a reasonable chance to opt out from being
            photographed. If they object to the taking of their photograph,
            comply with their request.
          </p>
          <br />
          <p>
            If they express their disapproval after the photo or video has been
            captured, please delete it from your records, and in case it has
            been shared online, take reasonable steps to retract it from social
            media as well.
          </p>
          <br />
          <p>
            It is inappropriate to take photographs in contexts where people
            have a reasonable expectation of privacy (in bathrooms or where
            participants are sleeping).
          </p>
        </div>
        <div class="dataSection">
          <h3>Creation of safe space</h3>
          <p>
            No sponsors, partners, or participants shall use sexualised images,
            activities, or other material at the hackathons for any
            non-permitted purpose. The use of sexualised
            clothing/uniforms/costumes, and anything that creates a sexualised
            environment is prohibited.
          </p>
        </div>
        <div class="dataSection">
          <h3>Always Report</h3>
          <p>
            If you notice any violation of this Code of Conduct or find
            otherwise suspicious behavior or have any concerns, please contact a
            member of the hackathon organizing committee immediately.
          </p>
          <br />
          <p>
            We will be happy to help participants contact local security or
            local law enforcement, or otherwise assist those experiencing
            harassment to feel safe for the duration of the hackathon. We value
            your attendance.
          </p>
        </div>
        <div class="dataSection">
          <h3>Consequences of Violation</h3>
          <p>
            In case any participant violates this Code of Conduct, the organizer
            may, at their own discretion:
          </p>
          <ul>
            <li>
              expel them from the hackathon with no refund (if applicable),
            </li>
            <li>
              block their access to HackOn resources including the website,
            </li>
            <li>report their behaviour to local law enforcement.</li>
          </ul>
        </div>
        <div class="dataSection">
          <h3>Contact</h3>
          <p>
            If you have witnessed or experienced any transgressions of this Code
            of Conduct at a hackathon organised by HackOn Foundation, please
            report it to your hackathon organizer, or get in touch with Rishabh
            Bansal at
            <CopyLink
              value="rishabh@hackon.tech"
              link="maito:rishabh@hackon.tech"
              text="email address"
            />
            or
            <CopyLink
              value="+91-9560678655"
              link="tel:+919560678655"
              text="phone number"
            />.
          </p>
        </div>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .contents {
    padding: 10px 0;

    .dataSection {
      margin: 10px;
      padding: 20px 10px;

      h3 {
        font-size: 1.6rem;
        font-weight: 600;
        font-family: "Sen";
        margin-bottom: 1rem;
      }

      p {
        font-family: "Sen";
        font-size: 1.2rem;
      }

      ul {
        list-style-type: disc;
        font-family: "Sen";
        font-size: 1.2rem;
        list-style-position: inside;

        li {
          padding: 2px;
        }
      }
    }
  }
}
</style>
