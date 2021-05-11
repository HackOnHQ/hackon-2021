<script>
export default {
  name: "polygonModal",
  methods: {
    close() {
      this.$emit("close");
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
        <img
          alt="close modal"
          class="close-modal"
          src="~/assets/close-modal.svg"
          v-on:click.self="close()"
        />
        <section class="modal-body" id="modalDescription">
          <div class="logo">
            <img src="~/assets/Prizes/sawo.png" alt="polygon logo" />
          </div>
          <br />
          <div class="content">
            HackOn Foundation is excited to announce SAWO Labs as our
            <span style="color: #f1c232">Gold Sponsor</span>!
            <br />
            <br />
            SAWO Labs will provide the following prizes for the best hack built
            using the SAWO Labs API -
          </div>
          <!-- <div class="subtitle">Polygon Bounty Track Details</div> -->
          <div class="content">
            ● $100 Prize to winning team <br />
            ● Feature in our Blogs &amp; Articles<br />
            ● 1-month Free Inaugurate Tier access<br />
            ● SAWO funds 100% of the Play Store / App Store subscription fee for
            the best mobile apps.
            <br />
            ● SAWO funds 100% of the hosting fee for the best web-apps
            <br />
            ● For extra special products - Special opportunity to pitch your
            hack to VCs and Investors in SAWO’s Pitch Day Hack
            <br /><br />
          </div>
        </section>
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
  }

  .logo {
    width: 95%;
    padding: 2rem 1rem;
    align-content: center;
    margin: 0 auto;
    img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 50%;
    }
  }

  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .content {
    margin-top: 0.4rem;
    margin-bottom: 1.2rem;
    ul {
      list-style-type: disc !important;
    }
    ol {
      list-style-type: decimal !important;
    }
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
