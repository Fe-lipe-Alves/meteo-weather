export const clickOutside = {
// @ts-ignore
    mounted: function (el, binding) {
        // @ts-ignore
        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value(event, el)
            }
        }
        document.addEventListener("click", el.clickOutsideEvent)
    },
    // @ts-ignore
    unmounted: function (el) {
        document.removeEventListener("click", el.clickOutsideEvent)
    },
}