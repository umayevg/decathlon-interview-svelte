<script>
  import Rating from "./Rating.svelte";
  import Carousel from "svelte-carousel";

  export let visible;

  const { game } = visible;
  const screenshots = game.short_screenshots?.slice(1) || [];

  const closeModal = () => {
    visible = { visible: false, game: null };
  };

  console.log('Modal');
</script>

<div
  class="modal {visible.game !== null ? ' active' : ''}"
  on:click={closeModal}
>
  <div class="modalContent" on:click|stopPropagation>
    <img src={game.background_image} alt={game.name} />
    <h2>{game.name}</h2>
    <div class="platforms">
      {#each game.platforms as platform}
        <span class="platform">{platform.platform.name}</span>
      {/each}
    </div>
    <div class="ratings">
      {#each game.ratings.sort((a, b) => b.id - a.id) as rating}
        <Rating {rating} />
      {/each}
    </div>
    <div class="screenshots">
      <Carousel arrows={false}>
        {#each screenshots as src}
          <div class="img-container">
            <img src={src.image} alt="Game" />
          </div>
        {/each}
      </Carousel>
    </div>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }

  .modal.active {
    display: flex;
    justify-content: center;
    align-items: self-start;
    padding-top: 50px;
  }

  .modalContent {
    padding: 30px;
    background: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    max-width: 800px;
    max-height: 650px;
    overflow-y: scroll;
    scrollbar-color: #333 #333;
    scrollbar-width: auto;
  }

  .modal ::-webkit-scrollbar {
    width: 8px;
  }

  .modal ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  .modal ::-webkit-scrollbar-thumb {
    background: #868686;
    height: 10px;
    -webkit-border-radius: 20px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
  }

  .modalContent h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .modalContent img {
    object-fit: cover;
    width: 100%;
  }

  .modalContent > img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .platform {
    display: inline-block;
    padding: 5px;
    margin-bottom: 5px;
    margin-right: 2px;
    font-size: 0.8rem;
    color: #fff;

    background: #d24335;
    border-radius: 5px;
  }

  .ratings {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .screenshots {
    margin-top: 30px;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    .modalContent {
      padding: 10px;
      margin-left: 20px;
      margin-right: 20px;
      max-height: 500px;
    }

    .modalContent h2 {
      font-size: 1.2rem;
    }

    .platforms span {
      font-size: 12px;
    }
  }
</style>
