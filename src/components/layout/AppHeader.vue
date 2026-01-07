<template>
  <header class="app-header">
    <div class="header-content">
      <img src="../../assets/logo.png" class="logo-img clickable" alt="logo" @click="pushRoute('/')"/>

      <div class="quick-actions">
        <div class="quick-action-wrapper">
          <a href="https://www.google.com/maps/place/L%E2%80%99alternativa+take+away/@38.9537199,16.2806589,17z/data=!3m1!4b1!4m6!3m5!1s0x133fe5b34605eb47:0x1ee7e7b83b773a40!8m2!3d38.9537199!4d16.2828476!16s%2Fg%2F11b74tkqw3"
             class="quick-action-link"
             target="_blank"
             rel="noopener noreferrer">
            <img src="../../assets/icon/map.png" class="quick-action-icon" alt="Mappa">
          </a>
          <span class="quick-action-tooltip">Mappa</span>
        </div>
        <div class="quick-action-wrapper">
          <a href="tel:+393207414601" class="quick-action-link">
            <img src="../../assets/icon/phone-call.png" class="quick-action-icon" alt="Chiama">
          </a>
          <span class="quick-action-tooltip">Chiama</span>
        </div>
        <div class="quick-action-wrapper">
          <a href="https://wa.me/3207414601"
             target="_blank"
             rel="noopener noreferrer"
             class="quick-action-link">
            <img src="../../assets/icon/order-w.png" class="quick-action-icon" alt="WhatsApp">
          </a>
          <span class="quick-action-tooltip">WhatsApp</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.app-header {
  padding: 1.5rem 0 0.5rem;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.logo-img {
  max-height: 80px;
}

.clickable {
  cursor: pointer;
  transition: all .1s;
}

.clickable:hover {
  filter: brightness(120%);
  transform: scale(0.98);
}

.clickable:focus {
  filter: brightness(150%);
  transform: scale(0.93);
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

/* Quick Actions */
.quick-actions {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.quick-action-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.quick-action-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(197, 194, 106, 0.15) 0%, rgba(197, 194, 106, 0.05) 100%);
  border: 1px solid rgba(197, 194, 106, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.quick-action-link::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C5C26A, #D4A76B);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.quick-action-link:hover {
  transform: translateY(-4px) scale(1.1);
  background: linear-gradient(135deg, rgba(197, 194, 106, 0.3) 0%, rgba(197, 194, 106, 0.15) 100%);
  border-color: rgba(197, 194, 106, 0.5);
  box-shadow: 0 8px 20px rgba(197, 194, 106, 0.25);
}

.quick-action-link:hover::before {
  opacity: 0.15;
}

.quick-action-link:focus {
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

.quick-action-icon {
  width: 1.6rem;
  height: 1.6rem;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.quick-action-link:hover .quick-action-icon {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 8px rgba(197, 194, 106, 0.3));
}

/* Tooltip */
.quick-action-tooltip {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #C5C26A;
  letter-spacing: 0.5px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.quick-action-wrapper:hover .quick-action-tooltip {
  opacity: 1;
  transform: translateY(2px);
  text-shadow: 0 0 10px rgba(197, 194, 106, 0.5);
}

@media (min-width: 480px) {
  .quick-actions {
    gap: 2rem;
  }

  .quick-action-icon {
    width: 1.8rem;
    height: 1.8rem;
  }

  .quick-action-tooltip {
    font-size: 1rem;
  }
}
</style>
