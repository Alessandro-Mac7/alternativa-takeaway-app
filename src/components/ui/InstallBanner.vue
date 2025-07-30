<template>
  <div v-if="showBanner" class="install-banner">
    <div class="banner-content">
      <div class="banner-icon">🍕</div>
      <div class="banner-text">
        <div class="banner-title">Installa L'Alternativa</div>
        <div class="banner-subtitle">Aggiungi l'app alla schermata home per un accesso rapido!</div>
      </div>
      <div class="banner-actions">
        <button @click="installApp" class="install-btn">Installa</button>
        <button @click="dismissBanner" class="dismiss-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstallBanner',
  data() {
    return {
      showBanner: false,
      deferredPrompt: null
    };
  },
  mounted() {
    this.checkInstallability();
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    
    // For iOS Safari detection
    this.detectiOS();
  },
  beforeUnmount() {
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
  },
  methods: {
    checkInstallability() {
      // Check if app is already installed
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        return; // Already installed
      }
      
      // Check if user has already dismissed the banner
      if (localStorage.getItem('installBannerDismissed')) {
        return;
      }
      
      // Show banner after a short delay
      setTimeout(() => {
        this.showBanner = true;
      }, 2000);
    },
    detectiOS() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isStandalone = window.navigator.standalone;
      
      if (isIOS && !isStandalone && !localStorage.getItem('installBannerDismissed')) {
        this.showBanner = true;
      }
    },
    handleBeforeInstallPrompt(e) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      this.deferredPrompt = e;
      this.showBanner = true;
    },
    async installApp() {
      if (this.deferredPrompt) {
        // Show the install prompt
        this.deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await this.deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        
        this.deferredPrompt = null;
      } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // iOS specific instructions
        alert('Per installare questa app su iOS: tocca il pulsante di condivisione e seleziona "Aggiungi alla schermata Home"');
      }
      
      this.dismissBanner();
    },
    dismissBanner() {
      this.showBanner = false;
      localStorage.setItem('installBannerDismissed', 'true');
    }
  }
};
</script>

<style scoped>
.install-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #d32f2f, #f44336);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
}

.banner-content {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
}

.banner-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.banner-text {
  flex: 1;
  text-align: left;
}

.banner-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
}

.banner-subtitle {
  font-size: 14px;
  opacity: 0.9;
}

.banner-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.install-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.install-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.dismiss-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dismiss-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .install-banner {
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
  
  .banner-content {
    padding: 12px;
  }
  
  .banner-subtitle {
    font-size: 13px;
  }
  
  .install-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>