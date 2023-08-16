import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(15);
  const center = ref([40.424206, -3.682723])

  function pin(e) {
    const marker = e.target.getLatLng()
    center.value = [marker.lat, marker.lng]
  }

  return {
    zoom,
    center, 
    pin
  };
}
