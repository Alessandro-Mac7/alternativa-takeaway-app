// Maps route names to their critical images for preloading

export const routeImageManifest = {
  Home: [
    'home-full.png',
    'impasto.png',
    'footer-logo.png'
  ],
  Pizze: [
    'pizze/tropena.png',
    'pizze/mortazza.png',
    'pizze/colorata.png',
    'pizze/diavola.png',
    'pizze/parmigiana.png',
    'pizze/silana.png',
    'icon/small.png',
    'icon/large.png'
  ],
  Fritti: [
    'fritti/nduja.png',
    'fritti/arancino.png',
    'fritti/funghi.png',
    'fritti/carne.png'
  ],
  Beverage: [
    'beer-frame.png',
    'icon/small-b.png',
    'icon/large-b.png',
    'icon/beer.png'
  ]
};

export function getRouteImages(routeName) {
  return routeImageManifest[routeName] || [];
}
