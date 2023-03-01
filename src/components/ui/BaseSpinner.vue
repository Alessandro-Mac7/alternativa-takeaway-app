<template>
  <teleport to="body">
    <div class="position-absolute top-50 start-50 translate-middle">
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-1" alt="part1"/>
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-2" alt="part1"/>
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-3" alt="part1"/>
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png" class="pizza-part pizza-part-4" alt="part1"/>
    </div>
  </teleport>
</template>

<script>
export default {}
</script>

<style scoped>
.pizza-part {
  width: 80px;
  height: 80px;
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
@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

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
}</style>