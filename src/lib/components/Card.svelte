<script>
  export let game;
  export let cardClickFunc;
  const cardClickHandler = () => {
    cardClickFunc(game);
  };

  console.log('Card');
</script>

<div class="card" on:click={cardClickHandler}>
  <div class="cardImg">
    {#if game.metacritic}
      <span>{game.metacritic}</span>
    {/if}
    <img
      src={game.background_image}
      alt={game.name}
      height="190"
      loading="lazy"
      decoding="async"
      style={{ contentVisibility: "auto" }}
    />
  </div>

  <div class="cardContent">
    <h2>{game.name}</h2>
    <div>
      {#if game.platforms}
        {#each game.platforms as platform}
          <span class="platform">{platform.platform.name}</span>
        {/each}
      {/if}
    </div>
    <div class="tags">
      {#if game.tags}
        {#each game.tags.slice(0, 2) as tag}
          <span>{tag.name}</span>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .card {
    border: 2px solid #0b6374;
    border-radius: 8px;
    overflow: hidden;
    min-height: 300px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
    cursor: pointer;
    transition: border ease 0.3s;
  }

  .card:hover {
    border: 2px solid #fff;
  }

  .card .cardContent {
    padding-left: 5px;
    padding-right: 5px;
  }

  .card img {
    width: 100%;
    object-fit: cover;
  }

  .card h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .card .cardImg {
    position: relative;
  }

  .card .cardImg span {
    z-index: 1;
    position: absolute;
    background: #fff;
    height: 35px;
    width: 35px;
    top: 0;
    right: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    border-top: 0;
    border-right: 0;
    font-size: 1rem;
    font-weight: bold;
    border-bottom-left-radius: 5px;
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

  span {
    font-size: 0.8rem;
  }

  .card .tags span {
    display: inline-block;
    padding: 5px;
    margin-bottom: 5px;
    margin-right: 2px;
    color: #fff;
    background: #1c3a40;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .card .card-img span {
      height: 30px;
      width: 30px;
      font-size: 0.8rem;
    }

    .card h2 {
      font-size: 1rem;
    }

    .card span {
      font-size: 12px;
    }
  }
</style>
