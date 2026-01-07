<template>
  <a
    v-if="shouldShow"
    href="https://wa.me/3207414601"
    target="_blank"
    rel="noopener noreferrer"
    class="floating-whatsapp"
    aria-label="Contattaci su WhatsApp"
  >
    💬
  </a>
</template>

<script>
export default {
  name: 'FloatingWhatsApp',

  computed: {
    shouldShow() {
      const menuPages = ['Pizze', 'Fritti', 'Beverage'];
      return menuPages.includes(this.$route.name);
    }
  }
}
</script>

<style scoped>
.floating-whatsapp {
  position: fixed;
  bottom: 90px; /* Above bottom nav (70px) + spacing */
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366; /* WhatsApp green */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.floating-whatsapp:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  animation: none;
}

.floating-whatsapp:focus {
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
  animation: none;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Tablet and desktop: consistent with bottom nav */
@media (min-width: 768px) {
  .floating-whatsapp {
    bottom: 100px; /* Above desktop bottom nav */
  }
}

/* Small mobile: slightly smaller button */
@media (max-width: 480px) {
  .floating-whatsapp {
    width: 56px;
    height: 56px;
    font-size: 26px;
    right: 16px;
  }
}
</style>
