<script>
    export let images = [];
    let currentImage = 0;

    function nextImage() {
        currentImage = currentImage < images.length - 1 ? currentImage + 1 : 0
    }

    function previousImage() {
        currentImage = currentImage > 0 ? currentImage - 1 : images.length - 1
    }

</script>

<style lang="scss">
.image-viewer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.image-viewer .image {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.image-viewer .nav {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
}
.image-viewer .nav button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, .35);
  outline: 0;
  cursor: pointer;
  -webkit-appearance: none;
  border: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.image-viewer .nav button.next {
  right: 1rem;
}
.image-viewer .nav button.previous {
  left: 1rem;
}
</style>

<div class="image-viewer">
    <div class="image" style={ `background-image:url(${images[currentImage]})`}></div>
    {#if images.length > 1}
        <div class="nav">
            <button on:click={nextImage} class="next" />
            <button on:click={previousImage} class="previous"></button>
        </div>
    {/if}
</div>