<template>
  <Container id="team2020">
    <section class="content-section">
      <HashHeader title="HackOn Team 2020" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            class="team-card"
          >
            <a :href="teamMember.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper">
                <img
                  :src="teamMember.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ teamMember.name }}</h4>
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
    HashHeader
  },
  data() {
    return {
      team: [
        {
          name: "Aditya",
          url: "https://twitter.com/adityaoberai1",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/aditya.png"
        },
        {
          name: "Akanksha",
          url: "https://twitter.com/Akii_20",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/akanksha.png"
        },
        {
          name: "Akshat",
          url: "https://twitter.com/ak_jindal",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/akshat.png"
        },
        {
          name: "Bhumika",
          url: "https://twitter.com/bhumika_0311",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/bhumika.png"
        },
        {
          name: "Divyansh",
          url: "https://twitter.com/AsDivyansh",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/divyansh.png"
        },
        {
          name: "Gunnika",
          url: "https://twitter.com/GunnikaBatra",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/gunnika.png"
        },
        {
          name: "Hunar",
          url: "https://linkedin.com/in/hunarbatra/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/hunar.jpeg"
        },
        {
          name: "Kapil",
          url: "https://www.linkedin.com/in/kapil-israni-7a227317b/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/kapil.png"
        },
        {
          name: "Karan",
          url: "https://twitter.com/karansingh_005?s=09/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/karan.png"
        },
        {
          name: "Loveneesh",
          url: "https://twitter.com/LoveneeshDhir",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/loveneesh.png"
        },
        {
          name: "Manbir",
          url: "",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/manbir.png"
        },
        {
          name: "Manvi",
          url: "https://twitter.com/manvisinghwal/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/manvi_.png"
        },
        {
          name: "Nirbhay",
          url: "https://linkedin.com/in/nirbhayvashisht/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/nirbhay.JPG"
        },
        {
          name: "Rishabh",
          url: "https://twitter.com/rishabhbansal97",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/rishabh.png"
        },
        {
          name: "Sarthak",
          url: "https://twitter.com/sarcastic_sark",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/sarthak.png"
        },
        {
          name: "Shivang",
          url: "https://www.linkedin.com/in/shivang2k/",
          picture:
            "https://media-exp1.licdn.com/dms/image/C5103AQG6_aP5V6R5vA/profile-displayphoto-shrink_200_200/0/1582987573486?e=1625702400&v=beta&t=VbJYYN-A7rkjy73iS93n4lFath-TqWA5JGuszD2xKeg"
        },
        {
          name: "Shivay",
          url: "https://twitter.com/howdevelop",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/shivay.png"
        },
        {
          name: "Shubhangi",
          url: "https://www.linkedin.com/in/knowshubhangi/",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/shubhangi.png"
        },
        {
          name: "Tejas",
          url: "https://twitter.com/tejas_amle",
          picture:
            "https://raw.githubusercontent.com/HackOnHackathon/hackon-2020/master/assets/img/team/tejas.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .contents {
    padding: 10px 0;

    .team-grid {
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

      .team-card {
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
      }
    }
  }
}
</style>
