<script>
export default {
  name: "modal",
  props: ["workshop"],
  methods: {
    close() {
      this.$emit("close");
    },
    handleModalClose(elem) {
      console.log(elem);
    }
  }
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="close()">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <img
          class="close-modal"
          src="~/assets/close-modal.svg"
          v-on:click.self="close()"
        />
        <header class="modal-header" id="modalTitle">
          {{ workshop.name }}
        </header>
        <div class="hashtags">#workshop #hackon2</div>
        <div class="date">
          <img src="~/assets/calender.svg" />
          {{ workshop.date }} {{ workshop.time }} IST
        </div>
        <section class="modal-body" id="modalDescription">
          <div v-if="workshop.about !== undefined" class="title">
            About the workshop
          </div>
          <div class="content">
            {{ workshop.about }}
          </div>
          <div class="title">About the Speaker</div>
          <div class="speaker-details">
            <img :src="workshop.speaker.picture" class="avatar" />
            <div class="details">
              <span class="name">
                {{ workshop.speaker.name }}
              </span>
              <span class="designation">
                {{ workshop.speaker.designation }}
              </span>
            </div>
          </div>
          <div class="content" v-if="workshop.speaker.about !== undefined">
            {{ workshop.speaker.about }}
          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <a :href="workshop.url" target="_blank">
              <button type="button" class="btn-green" aria-label="Close modal">
                <img src="~/assets/youtube.svg" />
                Session Link
              </button>
            </a>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8) !important;
  display: flex;
  z-index: 0;
  justify-content: center;
  align-items: center;
}

.modal {
  max-width: 600px;
  min-width: 40%;
  background: #171e2e;
  padding: 2rem 3rem;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  position: relative;

  .close-modal {
    cursor: pointer;
    transform: rotate(45deg);
    width: 1.8rem;
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
  }

  .modal-header {
    font-family: "Sen";
    font-weight: 600;
    font-size: 2rem;
    justify-content: space-between;
    margin-left: 0.5rem;
  }

  .hashtags {
    color: #e58ab2;
    font-size: 1rem;
    margin: 0.4rem 0;
    margin-left: 0.5rem;
  }

  .date {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    img {
      width: 0.8rem;
      margin-right: 1rem;
    }
    // align-content: center;
  }

  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .content {
    margin-top: 0.4rem;
    margin-bottom: 1.2rem;
  }

  .speaker-details {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    img.avatar {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-right: 10px;
    }
    .details {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .name {
        font-weight: bold;
      }

      .designation {
        margin-top: -0.4rem;
        // color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

/* 
  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  } */

button {
  float: right;
  border-radius: 20px;
  cursor: pointer;
  margin-top: -10px;
  border: 0px;
  color: #fff;
  padding: 12px 16px;
  background-color: var(--color-accent-2);
  img {
    width: 1rem;
    position: relative;
    top: 3px;
  }
  font-family: "Roboto Mono";
}

.modal-body {
  /* position: relative; */
  padding: 20px 0px;
}

/* .btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
} */
</style>
