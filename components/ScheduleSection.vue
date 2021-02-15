<template>
  <Container id="schedule">
    <section class="content-section">
      <HashHeader title="Schedule" />
      <div class="contents">
        <div
          v-for="(schedule, index) in scheduleComplete"
          :key="index"
          class="card"
        >
          <div class="daily-header">{{ schedule.header }}</div>
          <div class="daily-schedule">
            <div
              v-for="(event, index) in schedule.items"
              :key="index"
              class="single-event"
            >
              <div class="date-time">
                <span class="time">
                  {{ event.time }}
                </span>
                <span class="date">
                  {{ schedule.date }}
                </span>
              </div>
              <div :class="['description', event.type]">
                <div class="speaker">
                  <img
                    v-if="event.speaker !== undefined"
                    :src="event.speaker.picture"
                    class="avatar"
                  />
                  <div class="details">
                    <span class="title">
                      {{ event.title }}
                    </span>
                    <span class="name">
                      <span v-if="event.speaker !== undefined">
                        {{ event.speaker.name }} /
                      </span>
                      <span v-if="event.type !== 'Break'" class="type">
                        {{ event.type }}
                      </span>
                    </span>
                  </div>
                </div>
                <div v-if="event.type === 'Workshop'" class="more-details">
                  More Details
                  <img src="~/assets/faq-up-arrow.svg" />
                </div>
              </div>
            </div>
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
      scheduleComplete: [
        {
          header: "Day 1 - April 11, 2021",
          date: "April 11",
          items: [
            {
              title: "Web Development 101 with Angular",
              type: "Workshop",
              time: "11:00 am",
              about:
                "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.",
              speaker: {
                name: "Paras Pundir",
                designation: "Program Manager, Reactor Bangalore, Microsoft",
                about:
                  "Paras is the Program Manager at Microsoft Reactor, Bangalore, who is also the Community Professional of the Year 2020.",
                picture:
                  "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/be0de8e087c844d79199695d8997779f/judges/de2017b2f5cd44da90dc782b28469487/703.jpeg",
              },
            },
            {
              title: "Community as a Cure",
              type: "Workshop",
              time: "11:00 am",
              about:
                "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.",
              speaker: {
                name: "Paras Pundir",
                designation: "Program Manager, Reactor Bangalore, Microsoft",
                about:
                  "Paras is the Program Manager at Microsoft Reactor, Bangalore, who is also the Community Professional of the Year 2020.",
                picture:
                  "https://miro.medium.com/fit/c/1360/1360/2*1d2PU06qLbaY-3EqeQBUZQ.jpeg",
              },
            },
            {
              title: "Hackathon Begins",
              type: "Hackathon",
              time: "11:00 am",
            },

            {
              title: "Break",
              type: "Break",
              time: "11:00 am",
            },
            {
              title: "Hackathon Begins",
              type: "Hackathon",
              time: "11:00 am",
            },
          ],
        },

        {
          header: "Day 2 - April 12, 2021",
          date: "April 12",
          items: [
            {
              title: "Community as a Cure",
              type: "Workshop",
              time: "11:00 am",
              about:
                "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.",
              speaker: {
                name: "Paras Pundir",
                designation: "Program Manager, Reactor Bangalore, Microsoft",
                about:
                  "Paras is the Program Manager at Microsoft Reactor, Bangalore, who is also the Community Professional of the Year 2020.",
                picture:
                  "https://miro.medium.com/fit/c/1360/1360/2*1d2PU06qLbaY-3EqeQBUZQ.jpeg",
              },
            },
            {
              title: "Community as a Cure",
              type: "Workshop",
              time: "11:00 am",
              about:
                "Talk about the importance of communities, and how a group of like-minded people can bring about an essential change in our lives.",
              speaker: {
                name: "Paras Pundir",
                designation: "Program Manager, Reactor Bangalore, Microsoft",
                about:
                  "Paras is the Program Manager at Microsoft Reactor, Bangalore, who is also the Community Professional of the Year 2020.",
                picture:
                  "https://miro.medium.com/fit/c/1360/1360/2*1d2PU06qLbaY-3EqeQBUZQ.jpeg",
              },
            },
            {
              title: "Hackathon Begins",
              type: "Hackathon",
              time: "11:00 am",
            },

            {
              title: "Break",
              type: "Break",
              time: "11:00 am",
            },
            {
              title: "Hackathon Begins",
              type: "Hackathon",
              time: "11:00 am",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  // display: flex;
  flex-direction: column;
  padding: 20px 0;
  .contents {
    padding: 10px 0;

    .daily-header {
      display: inline-block;
      color: black;
      padding: 0.2em 0.8em;
      border-radius: 1.5em;
      background-color: #7fc1c8;
      font-family: Sen;
    }

    .daily-schedule {
      margin-bottom: 1em;
    }

    .single-event {
      display: flex;
      flex-direction: row;
      margin-top: 0.6em;

      .date-time {
        background-color: #151629;
        display: flex;
        flex-direction: column;
        padding: 2em 1em 2em 5em;
        text-align: right;
        white-space: nowrap;

        @include respond-below(md) {
          padding: 2em 1em 2em 1em;
        }

        .time {
          font-size: 1.2em;
          font-weight: bold;
        }

        .date {
          color: #5f657a;
        }
      }

      .description {
        padding-left: 2em;
        background-color: #252638;
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-left: 1rem;

        &.Workshop {
          border-left: 3px solid #7fc1c8;
          .type {
            color: #7fc1c8;
          }
        }

        &.Break {
          border-left: 3px solid #5f657a;
        }

        &.Hackathon {
          border-left: 3px solid #e58ab2;
          .type {
            color: #e58ab2;
          }
        }

        .speaker {
          display: flex;
          align-items: center;

          @include respond-below(md) {
            padding-right: 0.5em;
          }

          img.avatar {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            margin-right: 2rem;

            @include respond-below(sm) {
              width: 3rem;
              height: 3rem;
            }
          }
          .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 1.5rem;

            .title {
              font-size: 1.1em;
              letter-spacing: 0.1rem;
              font-weight: 699;
            }

            .designation {
              margin-top: -0.5rem;
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }

      .more-details {
        display: flex;
        align-items: center;
        color: #797e97;
        cursor: pointer;

        @include respond-below(sm) {
          display: none;
        }

        img {
          transform: rotate(90deg);
          margin-left: 0.5em;
          margin-right: 2em;
          width: 1em;
        }
      }
    }
  }
}
</style>
