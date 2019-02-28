<template>
    <div class="dragBox" :style="style" @mousedown="mouseDown($event)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                parentWidth: null,
                parentHeight: null,
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
            }
        },
        watch: {
            moveX() {
                this.left = this.moveX - this.diffX;
                if (this.left > this.parentWidth-this.width) {
                    this.left = this.parentWidth-this.width;
                }
                if (this.left < this.parentX) {
                    this.left = 0;
                }
            },
            moveY() {
                this.top = this.moveY - this.diffY;
                if (this.top > this.parentHeight-this.height) {
                    this.top = this.parentHeight-this.height;
                }
                if (this.top < this.parentY) {
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
            }
        },
        created() {
            document.onmousemove = () => {
                this.mouseMove();
            };
            document.onmouseup = () => {
                this.$el.style.cursor = "pointer";
                this.press = false;
            };
            window.onresize = () => {
                this.getParentElement();
            };
        },
        mounted() {
            this.getParentElement();
        },
        methods: {
            mouseDown(e) {
                e.target.style.cursor = "move";
                this.press = true;
                this.eX = e.target.getBoundingClientRect().left;
                this.eY = e.target.getBoundingClientRect().top;
                this.startX = this.getMousePos().x;
                this.startY = this.getMousePos().y;
                console.log(this.eX, this.startX);
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
                console.log(this.$el.parentNode.getBoundingClientRect());
                this.parentWidth = this.$el.parentNode.getBoundingClientRect().width;
                this.parentHeight = this.$el.parentNode.getBoundingClientRect().height;
                this.parentX = this.$el.parentNode.getBoundingClientRect().x;
                this.parentY = this.$el.parentNode.getBoundingClientRect().y;
            }
        }
    };
</script>

<style lang="scss">
    .dragBox {
        cursor: pointer;
        position: absolute;
    }
</style>
