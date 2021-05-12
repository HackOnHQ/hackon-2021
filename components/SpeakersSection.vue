<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="Speakers, Judges and Mentors" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="speakers-card"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
          </div>
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
  data() {
    return {
      speakers: [
        {
          name: "Logan Kilpatrick",
          description: "Community Manager",
          url: "https://twitter.com/OfficialLoganK",
          picture: require("~/assets/Speakers/Logan.jpeg"),
          companyLogo: require("~/assets/julia.svg"),
          company: "The Julia Language",
        },
        {
          name: "Ali Mustufa Shaikh",
          description: "Student Community Manager",
          url: "https://twitter.com/ialimustufa",
          picture: require("~/assets/Speakers/Ali.jpg"),
          companyLogo: require("~/assets/postman.png"),
          company: "Postman",
        },
        {
          name: "Haimantika Mitra",
          description: "Support Engineer Intern",
          url: "https://twitter.com/HaimantikaM",
          picture: require("~/assets/Speakers/Haimantika.jpg"),
          companyLogo: require("~/assets/microsoft.svg"),
          company: "Microsoft",
        },
        {
          name: "Kunal Kushwaha",
          description: "MLH Coach",
          url: "https://twitter.com/kunalstwt",
          picture: require("~/assets/Speakers/Kunal.jpg"),
          companyLogo: require("~/assets/Sponsors/mlh.svg"),
          company: "MLH",
        },
        {
          name: "Mara Hart",
          description: "Returning Software Engineer Intern",
          url: "https://linkedin.com/in/maralihart",
          picture: require("~/assets/Speakers/Mara.jpg"),
          companyLogo: require("~/assets/microsoft.svg"),
          company: "Microsoft",
        },
        {
          name: "Juan Pablo Flores Cortés",
          description: "Program Manager",
          url: "https://twitter.com/juanpflores_",
          picture: require("~/assets/Speakers/Juan-Pablo.png"),
          companyLogo: require("~/assets/Sponsors/github.svg"),
          company: "GitHub",
        },
        {
          name: "Shivay Lamba",
          description: "Google Summer of Code Mentor",
          url: "https://www.linkedin.com/in/shivaylamba/",
          picture: require("~/assets/Speakers/Shivay.jpg"),
          companyLogo: require("~/assets/tensorflow.svg"),
          company: "Tensorflow",
        },
        {
          name: "Ranjoy Sen",
          description: "Staff Software Developer",
          url: "https://www.linkedin.com/in/ranjoysen/",
          picture: require("~/assets/Speakers/Ranjoy.png"),
          companyLogo: require("~/assets/collins.png"),
          company: "Collins Aerospace",
        },
        {
          name: "Eddie Jaoude",
          description: "GitHub Star of the Year",
          url: "https://twitter.com/eddiejaoude",
          picture: require("~/assets/Speakers/Eddie.jpg"),
        },
        {
          name: "Stephen Simon",
          description: "Regional Community Director",
          url: "https://twitter.com/codewithsimon",
          picture: require("~/assets/Speakers/Stephen-Simon.jpg"),
          companyLogo: require("~/assets/c-sharp-corner.png"),
          company: "C# Corner",
        },
        {
          name: "Mohammad Shahbaz Alam",
          description: "Developer Advocate",
          url: "https://twitter.com/mdsbzalam",
          picture: require("~/assets/Speakers/Mohammad-Shahbaz-Alam.png"),
          companyLogo: require("~/assets/magic.svg"),
          company: "Magic",
        },
        {
          name: "Santosh Yadav",
          description: "Judge",
          url: "https://twitter.com/SantoshYadavDev",
          picture: require("~/assets/Judges/santosh.png"),
        },
        {
          name: "Seema Saharan",
          description: "Judge",
          url: "https://twitter.com/SeemaSaharan5",
          picture: require("~/assets/Judges/seema.png"),
        },
        {
          name: "Aanchal Mishra",
          description: "Judge",
          url: "https://twitter.com/Aanchalmishra__",
          picture: require("~/assets/Judges/aanchal.jpg"),
        },
        {
          name: "Rishit Dagli",
          description: "Judge",
          url: "https://twitter.com/rishit_dagli",
          picture: require("~/assets/Judges/rishit.png"),
        },
        {
          name: "Praveen Kumar",
          description: "Judge and MERN Stack Mentor",
          url: "https://www.linkedin.com/in/praveentech/",
          picture: require("~/assets/Judges/praveen.png"),
        },
        {
          name: "Anush Krishna",
          description: "Judge and Quantum Computing Mentor",
          url: "https://twitter.com/Anush_krishna_v",
          picture: require("~/assets/Judges/anush.png"),
        },
        {
          name: "Vedant Khairnar",
          description: "Judge and ML/AI Mentor",
          url: "https://twitter.com/VedantKhairnar3",
          picture: require("~/assets/Judges/vedant.jpg"),
        },
        {
          name: "Jai Dewani",
          description: "Judge and FullStack Development Mentor",
          url: "https://twitter.com/jai_dewani",
          picture: require("~/assets/Judges/jai.jpg"),
        },
        {
          name: "Vitalii Honcharuk",
          description: "Judge",
          url: "http://linkedin.com/in/vitalii-honcharuk",
          picture: require("~/assets/Judges/vitalii.jpg"),
        },
        {
          name: "Nikita Starichenko",
          description: "Judge",
          url: "https://www.linkedin.com/in/nikita-starichenko/",
          picture: require("~/assets/Judges/nikita.jpg"),
        },
        {
          name: "Zhen Ruming",
          description: "Judge",
          url: "https://www.linkedin.com/in/zhenruming/",
          picture: require("~/assets/Judges/zhen.jpeg"),
        },
        {
          name: "George Andronchik",
          description: "Judge",
          url: "http://linkedin.com/in/george-andronchik-a75749a1",
          picture: require("~/assets/Judges/george.png"),
        },
        {
          name: "Reshul Dani",
          description: "Judge",
          url: "https://www.linkedin.com/in/reshuldani/",
          picture: require("~/assets/Judges/reshul.jpeg"),
        },
        {
          name: "Kartikey Rawat",
          description: "Machine Learning Mentor",
          url: "https://twitter.com/carrycooldude",
          picture: require("~/assets/Mentors/kartikey.png"),
        },
        {
          name: "Shubham Patel",
          description: "IOT Mentor",
          url: "https://twitter.com/shubham_patel21",
          picture: require("~/assets/Mentors/shubham.jpeg"),
        },
        {
          name: "Hargun Kaur",
          description: "MERN and Selenium Mentor",
          url: "https://www.linkedin.com/in/hargun-k-0b7815194/",
          picture: require("~/assets/Mentors/hargun.png"),
        },
        {
          name: "Vaibhav Arora",
          description: "Python, ML/DL Mentor",
          url: "https://www.linkedin.com/in/vaibhav-arora-3005a818a/",
          picture: require("~/assets/Mentors/vaibhav.jpg"),
        },
        {
          name: "Kuldeep Patel",
          description: "React and Firebase Mentor",
          url: "https://www.linkedin.com/in/patelkuldeep/",
          picture: require("~/assets/Mentors/kuldeep.jpg"),
        },
        {
          name: "Aditya Teltia",
          description: "Web Development Mentor",
          url: "https://www.linkedin.com/in/aditya-teltia-a9a7731b4/",
          picture: require("~/assets/Mentors/aditya.jpeg"),
        },
        {
          name: "Smaranjit Ghose",
          description: "Artificial Intelligence Mentor",
          url: "https://www.linkedin.com/in/smaranjitghose/",
          picture: require("~/assets/Mentors/smaranjit.jpeg"),
        },
        {
          name: "Anshumaan Kumar Prasad",
          description: "Backend and API Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/anshumaan.jpg"),
        },
        {
          name: "Poornakashi",
          description: "Web Development and Python Mentor",
          url: "",
          picture: require("~/assets/Mentors/poornakashi.jpg"),
        },
        {
          name: "Raghav Awasthi",
          description: "Android Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/raghav.jpg"),
        },
        {
          name: "Vanshika Garg",
          description: "Web and Android Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/vanshika.jpg"),
        },
        {
          name: "Avnish Singh",
          description: "Web Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/avnish.jpg"),
        },
        {
          name: "Vanshita Singh",
          description: "UI/UX Design Mentor",
          url: "",
          picture: require("~/assets/Mentors/vanshita.jpg"),
        },
        {
          name: "Harsh Jain",
          description: "FrontEnd Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/harsh.jpeg"),
        },
        {
          name: "Kumar Satyarth",
          description: "Blockchain Development Mentor",
          url: "",
          picture: require("~/assets/Mentors/satyarth.jpg"),
        },
      ],
    };
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

    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 20px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      .speakers-card {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--colour-pink);
          border-radius: 50%;
          transition: 0.3s all ease-in-out;

          &:hover {
            background: var(--gradient-blue);
          }

          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: var(--color-secondary-light);
          }

          @include respond-below(md) {
            width: 120px;
            height: 120px;
            .profile-pic {
              width: 110px;
              height: 110px;
            }
          }

          @include respond-below(sm) {
            width: 100px;
            height: 100px;
            .profile-pic {
              width: 90px;
              height: 90px;
            }
          }
        }

        .title {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 20px;

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }

        .description {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        .company-logo {
          font-size: 0.8rem;
          margin-top: 5px;
          height: 20px;
        }
      }
    }
  }
}
</style>
