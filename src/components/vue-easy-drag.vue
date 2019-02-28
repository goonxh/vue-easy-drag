<template>
    <div class="dragBox"
         :class="isActive?'active':'negative'"
         :style="style" @mousedown="mouseDown($event)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                press: false,
                moveX: 0,
                moveY: 0,
                width: this.w,
                height: this.h,
                left: this.l,
                top: this.t,
                right: null,
                bottom: null,
                zIndex: this.z,
                startX: 0,
                startY: 0,
                eX: 0,
                eY: 0,
                parentWidth: this.pw,
                parentHeight: this.ph,
                parentX: null,
                parentY: null
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
            },
            pw: {
                type: Number,
                default: 0,
            },
            ph: {
                type: Number,
                default: 0,
            }
        },
        watch: {
            moveX() {
                this.left = this.moveX - this.diffX - this.parentX;
                if (this.left > this.parentWidth - this.width) {
                    this.left = this.parentWidth - this.width;
                }
                if (this.left <= 0) {
                    this.left = 0;
                }
            },
            moveY() {
                this.top = this.moveY - this.diffY - this.parentY;
                if (this.top > this.parentHeight - this.height) {
                    this.top = this.parentHeight - this.height;
                }
                if (this.top <= 0) {
                    this.top = 0;
                }
            },
            isActive() {
                if (this.isActive) {
                    document.onmousemove = () => {
                        this.mouseMove();
                    };
                    document.onmouseup = () => {
                        this.$el.style.cursor = "pointer";
                        this.press = false;
                        this.isActive = false;
                    };
                }
            },
            parentWidth() {
                if (this.left + this.width > this.parentWidth) {
                    this.left = this.parentWidth - this.width;
                }
                if (this.parentWidth < this.width) {
                    this.left = 0;
                }
            },
            parentHeight() {
                if (this.top + this.height > this.parentHeight) {
                    this.top = this.parentHeight - this.height;
                }
                if (this.parentHeight < this.height) {
                    this.top = 0;
                }
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
            window.onresize = () => {
                this.getParentElement();
                this.$emit('windowResize', this.parentWidth, this.parentY);
            };
        },
        mounted() {
           this.getParentElement();
        },
        methods: {
            mouseDown(e) {
                this.isActive = true;
                e.target.style.cursor = "move";
                this.press = true;
                this.eX = Math.floor(e.target.getBoundingClientRect().left);
                this.eY = e.target.getBoundingClientRect().top;
                this.startX = this.getMousePos().x;
                this.startY = this.getMousePos().y;
            },
            mouseMove() {
                if (this.press) {
                    this.moveX = this.getMousePos().x;
                    this.moveY = this.getMousePos().y;
                }
            },
            getMousePos(event) {
                let e = event || window.event;
                return {x: e.clientX, y: e.clientY};
            },
            getParentElement() {
                this.parentWidth = this.$el.parentNode.clientWidth;
                this.parentHeight = this.$el.parentNode.clientHeight;
                this.parentX = this.$el.parentNode.getBoundingClientRect().left;
                this.parentY = this.$el.parentNode.getBoundingClientRect().top;
            }
        },
        beforeDestroy() {
            document.onmousemove = null;
            document.onouseup = null;
            window.onresize = null;
        },
    };
</script>

<style lang="scss">
    .dragBox {
        cursor: pointer;
        position: absolute;
    }
</style>
