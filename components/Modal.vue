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
    },
  },
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
        <header class="modal-header" id="modalTitle">
          {{ workshop.name }}
        </header>
        <div class="hashtags">#workshop #hackon2</div>
        <div class="date">
          <img src="~/assets/calender.svg" />
          {{ workshop.date }} IST
        </div>
        <section class="modal-body" id="modalDescription">
          <div class="title">About the workshop</div>
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
          <div class="content">
            {{ workshop.speaker.about }}
          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" aria-label="Close modal">
              <img src="~/assets/add-calender.svg" />
              Add to calender!
            </button>
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

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #171e2e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

.modal {
  max-width: 600px;
  background: #171e2e;
  padding: 3rem;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 10000;
  display: flex;
  flex-direction: column;

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
  padding: 12px 16px;
  img {
    width: 0.8rem;
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