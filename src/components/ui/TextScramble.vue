<template>
  <span class="text-scramble" :class="{ 'is-scrambling': isScrambling }">
    {{ displayText }}
  </span>
</template>

<script>
export default {
  name: 'TextScramble',

  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 50 // ms per frame
    },
    scrambleDuration: {
      type: Number,
      default: 600 // total animation duration in ms
    }
  },

  data() {
    return {
      displayText: this.text,
      isScrambling: false,
      chars: '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      frameRequest: null
    };
  },

  watch: {
    text(newText, oldText) {
      if (newText !== oldText) {
        this.scrambleTo(newText);
      }
    }
  },

  mounted() {
    this.displayText = this.text;
  },

  beforeUnmount() {
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
    }
  },

  methods: {
    scrambleTo(newText) {
      this.isScrambling = true;

      const oldText = this.displayText;
      const length = Math.max(oldText.length, newText.length);
      const startTime = performance.now();
      const duration = this.scrambleDuration;

      // Queue for each character: { from, to, start, end }
      const queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        // Stagger the start times for wave effect
        const start = (duration * i) / length * 0.4;
        const end = start + duration * 0.6;
        queue.push({ from, to, start, end, char: '' });
      }

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          const { from, to, start, end } = queue[i];

          if (elapsed >= end) {
            // Character has finished scrambling
            complete++;
            output += to;
          } else if (elapsed >= start) {
            // Character is scrambling
            if (!queue[i].char || Math.random() < 0.28) {
              queue[i].char = this.randomChar();
            }
            output += queue[i].char;
          } else {
            // Character hasn't started yet
            output += from;
          }
        }

        this.displayText = output;

        if (complete === queue.length) {
          // Animation complete
          this.isScrambling = false;
          this.displayText = newText;
        } else {
          this.frameRequest = requestAnimationFrame(update);
        }
      };

      // Cancel any existing animation
      if (this.frameRequest) {
        cancelAnimationFrame(this.frameRequest);
      }

      this.frameRequest = requestAnimationFrame(update);
    },

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
};
</script>

<style scoped>
.text-scramble {
  display: inline-block;
  font-family: inherit;
  will-change: contents;
  transition: text-shadow 0.2s ease;
}

.text-scramble.is-scrambling {
  /* Glowing effect during scramble */
  text-shadow:
    0 0 10px rgba(197, 194, 106, 0.6),
    0 0 20px rgba(197, 194, 106, 0.3);
  animation: scramble-pulse 0.15s ease-in-out infinite alternate;
}

@keyframes scramble-pulse {
  from {
    opacity: 0.85;
  }
  to {
    opacity: 1;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .text-scramble.is-scrambling {
    animation: none;
    text-shadow: none;
  }
}
</style>
