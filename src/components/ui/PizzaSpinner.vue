<template>
  <div class="pizza-spinner">
    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-1" alt="Loading..." />
    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-2" alt="Loading..." />
    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-3" alt="Loading..." />
    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-4" alt="Loading..." />
  </div>
</template>

<script>
export default {
  name: 'PizzaSpinner',
  props: {
    size: {
      type: String,
      default: 'medium' // small, medium, large
    }
  }
};
</script>

<style scoped>
.pizza-spinner {
  position: relative;
  display: inline-block;
}

.pizza-part {
  position: absolute;
}

/* Size variants */
.pizza-spinner .pizza-part {
  width: 40px;
  height: 40px;
}

/* Small size */
.pizza-spinner.small .pizza-part {
  width: 24px;
  height: 24px;
}

/* Large size */
.pizza-spinner.large .pizza-part {
  width: 60px;
  height: 60px;
}

.pizza-part-1 {
  animation: pizza1 2s ease-in-out infinite;
}

.pizza-part-2 {
  animation: pizza2 2s ease-in-out infinite;
}

.pizza-part-3 {
  animation: pizza4 2s ease-in-out infinite;
}

.pizza-part-4 {
  animation: pizza3 2s ease-in-out infinite;
}

/* animations */
@keyframes pizza1 {
  0% {
    transform: translate(-20%, -20%);
    opacity: 0;
  }
  10% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  50% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  60% {
    transform: translate(-20%, -20%);
    opacity: 0;
  }
  100% {
    transform: translate(-20%, -20%);
    opacity: 0;
  }
}

@keyframes pizza2 {
  0% {
    transform: translate(20%, -20%) rotateZ(90deg);
    opacity: 0;
  }
  10% {
    transform: translate(20%, -20%) rotateZ(90deg);
    opacity: 0;
  }
  20% {
    transform: translate(0%, 0%) rotateZ(90deg);
    opacity: 1;
  }
  60% {
    transform: translate(0%, 0%) rotateZ(90deg);
    opacity: 1;
  }
  70% {
    transform: translate(20%, -20%) rotateZ(90deg);
    opacity: 0;
  }
  100% {
    transform: translate(20%, -20%) rotateZ(90deg);
    opacity: 0;
  }
}

@keyframes pizza3 {
  0% {
    transform: translate(20%, 20%) rotateZ(180deg);
    opacity: 0;
  }
  20% {
    transform: translate(20%, 20%) rotateZ(180deg);
    opacity: 0;
  }
  30% {
    transform: translate(0%, 0%) rotateZ(180deg);
    opacity: 1;
  }
  70% {
    transform: translate(0%, 0%) rotateZ(180deg);
    opacity: 1;
  }
  80% {
    transform: translate(20%, 20%) rotateZ(180deg);
    opacity: 0;
  }
  100% {
    transform: translate(20%, 20%) rotateZ(180deg);
    opacity: 0;
  }
}

@keyframes pizza4 {
  0% {
    transform: translate(-20%, 20%) rotateZ(-90deg);
    opacity: 0;
  }
  30% {
    transform: translate(-20%, 20%) rotateZ(-90deg);
    opacity: 0;
  }
  40% {
    transform: translate(0%, 0%) rotateZ(-90deg);
    opacity: 1;
  }
  80% {
    transform: translate(0%, 0%) rotateZ(-90deg);
    opacity: 1;
  }
  90% {
    transform: translate(-20%, 20%) rotateZ(-90deg);
    opacity: 0;
  }
  100% {
    transform: translate(-20%, 20%) rotateZ(-90deg);
    opacity: 0;
  }
}
</style>