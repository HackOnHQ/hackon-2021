<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="Past Speakers" />
      <div class="contents">
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            class="speakers-card"
          >
            <div class="picture-wrapper">
              <img :src="speaker.picture" alt="" class="profile-pic" />
            </div>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
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
      speakers: [
        {
          name: "Saurabh Jain",
          description: "Vice President at Paytm",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/9727f388b1354367aa6c1d24e81d9280/460.jpeg"
        },
        {
          name: "Juan Pablo Flores",
          description: "Program Manager at Github Education",
          picture: "https://www.hackjaipur.com/images/speaker/juan.jpg"
        },
        {
          name: "Dhananjay Kumar",
          description: "Most Valuable Professional at Microsoft",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/519c888869584eefa120edf5e4971e22/652.jpeg"
        },
        {
          name: "Saptarshi Prakash",
          description: "Senior Design Manager at Swiggy",
          picture:
            "https://pbs.twimg.com/profile_images/1257372007781425152/tmcdvef7_400x400.jpg"
        },
        {
          name: "Jason Etcovitch",
          description: "Engineer at Github",
          picture:
            "https://pbs.twimg.com/profile_images/922510360153767936/_WjDCeqO_400x400.jpg"
        },
        {
          name: "Miguel de Andres-Clavera",
          description: "Senior Product Manager at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/dc8b2492ab4e460e88084b84a0ae8ea9/194.jpeg"
        },
        {
          name: "Nikita Gandhi",
          description: "Community Manager at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/503be308d27942c6af30aa665c9e2940/430.png"
        },
        {
          name: "Aviral Aggarwal",
          description: "Software Development Engineer at Microsoft",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/64dea866b8304c3fb5a885fb933944f0/594.jpeg"
        },
        {
          name: "Madhav Bahl",
          description: "Software Engineer at Microsoft",
          picture:
            "https://pbs.twimg.com/profile_images/952528304145293317/5ULYwLxb_400x400.jpg"
        },
        {
          name: "Harshit Dwivedi",
          description: "Google Developer Expert for Firebase at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/b4f252c9276743d9a4d8ab5c94b15bff/296.jpeg"
        },
        {
          name: "Kathita Goel",
          description: "Sr. Product Technology Manager at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/4dd5af545d1346b38a505ca24072fd5e/584.png"
        },
        {
          name: "Aman Sanduja",
          description: "Co-Founder at Zubi.io",
          picture:
            "https://pbs.twimg.com/profile_images/1334941769117564929/6uAyGQ_h_400x400.jpg"
        },
        {
          name: "Ben Dechrai",
          description: "Developer Advocate at Auth0",
          picture: "https://www.hackjaipur.com/images/speaker/ben.jpg"
        },
        {
          name: "Ashish Jha",
          description: "Alexa Community Evangelist at Amazon",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/206bffde42a244fcbe7b4af44102671c/208.jpeg"
        },
        {
          name: "Jatin Katyal",
          description: "Product Engineer and Instructor at Coding Blocks",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/bea23fa33ba74fa589fa2d56b958741a/309.jpeg"
        },
        {
          name: "Yashraj Nayak",
          description: "India Community Manager at Progate",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/7abfc583c97b45acb935881595d95eaf/20.jpeg"
        },
        {
          name: "Paige Bailey",
          description: "Product Manager at Tensorflow",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/b2a187edf9fe4a478923ef77c0073e4b/562.jpeg"
        },
        {
          name: "Arnav Gupta",
          description: "Engineering Lead at Zomato",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/de2017b2f5cd44da90dc782b28469487/703.jpeg"
        },
        {
          name: "Arkodyuti Saha",
          description: "Developer Relations Program Manager at Microsoft",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/c688634a276f4e7db93de8833a1f5806/482.jpeg"
        },
        {
          name: "Saurabh Rajpal",
          description: "Technical Solutions Consultant at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/4e828a778c604399913a1dd4e4d87e21/265.png"
        },
        {
          name: "Sachit Mishra",
          description: "Developer Relations Engineer at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/ecc04e202290473f891c17d73f96a6f7/900.jpeg"
        },
        {
          name: "Siddhant Aggarwal",
          description:
            "Program Coordinator, Developer Relations Team at Google",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/f76a9093b9c946ab98bf78f0ebf35dc5/284.jpeg"
        },
        {
          name: "Harish Kotra",
          description: "Regional Manager, India at AngelHack",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/3eb9475ed60746c1be18d9c27fb971f2/744.jpeg"
        },
        {
          name: "Pulkit Aggarwal",
          description: "Software Engineer at Coding Blocks",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/ce355e72c43c46c29d0272bc1ed37552/60.jpeg"
        },
        {
          name: "Aravind Putrevu",
          description: "Senior Developer Advocate at Elastic",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/9162cfc964dd43babff57c68122d6906/460.jpeg"
        },
        {
          name: "Mritunjay Vishwakarma",
          description: "Community Leader - Developer Ecosystem at IBM",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/aefd8106846f42dc84720fb7c0a0dcdd/167.jpeg"
        },
        {
          name: "Akash Shukla",
          description: "Ecosystem Initiatives at Rapido Labs",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/0146b31617f8482cb99c475254ff5d65/959.jpeg"
        },
        {
          name: "Neha Sharma",
          description: "Community Founder at JSLovers",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/c8e3c5550b104a91b06caa675612331c/424.jpeg"
        },
        {
          name: "Karan Chaturvedi",
          description: "Developer Advocate at IBM",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/7c6500b387a342deb0fbc96c588c2b75/144.jpeg"
        },
        {
          name: "Nishu Goel",
          description: "Developer, UI Garage at IBM",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/976dbbca2b7346d781894b11d4bca2f5/350.jpeg"
        },
        {
          name: "Prateek Narang",
          description: "Co-founder at Coding Blocks",
          picture:
            "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/10f628f79bf2481e97cf48b48c473d0d/165.jpeg"
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
          opacity: 0.7;
          text-align: center;
        }
      }
    }
  }
}
</style>
