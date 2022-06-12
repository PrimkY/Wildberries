import { ChiefSlider } from './chief-slider'
export function slider() {
  document.addEventListener('DOMContentLoaded', function () {
    const sliders = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
    });
  });
}
