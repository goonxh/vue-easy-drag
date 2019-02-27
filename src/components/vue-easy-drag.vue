<template>
  <div
    class="dragBox"
    :style="style"
    @mousedown="mouseDown($event)"
    @mouseup="mouseUp($event)"
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      press: false,
      moveX : 0,
      moveY: 0,
      width: this.w,
      height: this.h,
      left: this.l,
      top: this.t,
      zIndex: this.z,
      startX: 0,
      startY: 0,
      eX: 0,
      eY: 0,
    };
  },
  props: {
    w: {
      type: Number,
      default: 50
    },
    h: {
      type: Number,
      default: 50
    },
    t: {
      type: Number,
      default: 0
    },
    l: {
      type: Number,
      default: 0
    },
    z: {
      type: [String, Number],
      default: "auto"
    }
  },
  watch: {
      moveX() {
          this.left = this.moveX - this.diffX;
      },
      moveY() {
          this.top = this.moveY - this.diffY;
      }
  },
  computed: {
    style() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        top: this.top + "px",
        left: this.left + "px",
        zIndex: this.zIndex
      };
    },
    diffX() {
        return this.startX - this.eX;
    },
    diffY() {
        return this.startY - this.eY;
    },
  },
  created() {
    document.onmousemove = () => {
      this.mouseMove()
    };
  },
  methods: {
    mouseDown(e) {
      e.target.style.cursor = "move";
      this.press = true;
      this.eX = e.target.getBoundingClientRect().left;
      this.eY = e.target.getBoundingClientRect().top;
      this.startX = this.getMousePos().x;
      this.startY = this.getMousePos().y;
      console.log(this.eX, this.startX)
    },
    mouseUp(e) {
      e.target.style.cursor = "pointer";
      this.press = false;
    },
    mouseMove() {
      if (this.press) {
        this.moveX = this.getMousePos().x;
        this.moveY = this.getMousePos().y;
        console.log(this.moveX, this.moveY, this.press);
      }
    },
    getMousePos(event) {
      let e = event || window.event;
      return {x: e.clientX, y: e.clientY};
    },
  }
};
</script>

<style lang="scss">
.dragBox {
  cursor: pointer;
  position: absolute;
}
</style>
