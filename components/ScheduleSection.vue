<template>
  <Container id="schedule">
    <section class="content-section">
      <HashHeader title="Schedule" />
      <div class="contents">
        <span
          v-for="(schedule, index) in scheduleComplete"
          :key="index"
          :class="[index === selectedIndex ? 'activeDate' : '', 'allHeaders']"
          @click="changeShownSchedule(index)"
        >
          <div class="headers">{{ schedule.header.split(" -")[0] }}</div>
        </span>
        <!-- <div v-for="(schedule, index) in scheduleComplete" :key="index"> -->
        <div class="daily-schedule">
          <div
            v-for="(event, index) in scheduleComplete[selectedIndex].items"
            :key="index"
            class="single-event"
          >
            <div class="date-time">
              <span class="time">
                {{ event.time }}
              </span>
              <span class="date">
                {{ scheduleComplete[selectedIndex].date }}
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
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
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
      selectedIndex: 0,
      scheduleComplete: [
        {
          header: "Day 1 - May 28, 2021",
          date: "May 28",
          items: [
            {
              title: "Check-In",
              type: "Hackathon",
              time: "10:00",
            },
            {
              title: "Opening Ceremony",
              type: "Hackathon",
              time: "11:30",
            },
            {
              title: "Hacking Begins",
              type: "Hackathon",
              time: "12:00",
            },
            {
              title: "Mentorship Hours",
              type: "Hackathon",
              time: "15:00",
            },
            {
              title: "Session with Elastic",
              type: "Workshop",
              time: "18:00",
            },
            {
              title: "Hackathon AMA with Sashrika",
              type: "Workshop",
              time: "21:00",
            },
          ],
        },
        {
          header: "Day 2 - May 29, 2021",
          date: "May 29",
          items: [
            {
              title: "Announcements Day 2",
              type: "Hackathon",
              time: "9:00",
            },
            {
              title: "Auth0 Session",
              type: "Workshop",
              time: "11:30",
            },
            {
              title: "Mentorship Hours",
              type: "Hackathon",
              time: "14:00",
            },
            {
              title: "MS Paint Bob Ross",
              type: "Workshop",
              time: "17:00",
            },
            {
              title: "Hangout with Raahee",
              type: "Workshop",
              time: "21:00",
            },
          ],
        },
        {
          header: "Day 3 - May 30, 2021",
          date: "May 30",
          items: [
            {
              title: "Announcements Day 3",
              type: "Hackathon",
              time: "9:00",
            },
            {
              title: "Soft Deadline",
              type: "Hackathon",
              time: "10:30",
            },
            {
              title: "Hacking Ends",
              type: "Hackathon",
              time: "12:00",
            },
            {
              title: "Showcase",
              type: "Workshop",
              time: "14:00",
            },
            {
              title: "Closing Ceremony",
              type: "Hackathon",
              time: "18:00",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeShownSchedule(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  flex-direction: column;
  padding: 20px 0;
  .contents {
    padding: 10px 0;

    .allHeaders {
      // margin-left: 0.5em;

      @media (max-width: 465px) {
        margin-left: 0em;
      }

      &.activeDate {
        .headers {
          background-color: #fff;
        color: black;
        }
      }

      .headers {
        margin-top: 0.2em;
        display: inline-block;
        padding: 0.2em 0.8em;
        background-color: #313742;
        font-family: Sen;
        cursor: pointer;
      }
    }

    .allHeaders:nth-of-type(1) {
      margin-left: 0em;
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
        padding: 1em 1em 1em 5em;
        text-align: right;
        white-space: nowrap;

        @include respond-below(sm) {
          padding: 1em 1em 1em 2.5em;
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

        @include respond-below(sm) {
          padding-left: 1em;
        }

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
              margin-right: 1em;
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

              @include respond-below(sm) {
                letter-spacing: initial;
                font-size: 1em;
              }
            }

            .name {
              // margin-top: -0.5rem;
              // color: rgba(255, 255, 255, 0.5);

              @include respond-below(sm) {
                font-size: 0.8em;
              }
            }
          }
        }
      }

      .more-details {
        display: flex;
        align-items: center;
        color: #797e97;
        cursor: pointer;
        white-space: nowrap;

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
