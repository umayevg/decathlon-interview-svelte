<script>
  import { onMount } from "svelte";
  import GameService from "../../api/GameService.js";
  import Loader from "../UI/Loader.svelte";
  import Card from "./Card.svelte";
  import Modal from "../UI/Modal.svelte";
  import Pagination from "../UI/Pagination.svelte";
  import Form from "../UI/Form.svelte";

  let games = [];
  let isLoading = false;
  let modal = { visible: false, game: null };
  let links = { prevLink: null, nextLink: null };

  const fetchGames = async (options) => {
    isLoading = true;
    const [results, previous, next] = await GameService.getAll(options);
    links = { prevLink: previous, nextLink: next };
    games = results;
    isLoading = false;
  };

  const onCardClickHandler = async (game) => {
    modal = { visible: true, game: game };
  };

  onMount(async () => {
    await fetchGames();
  });

  console.log('Cards');
</script>

<Form fetchFun={fetchGames} />

{#if modal.game !== null}
  <Modal visible={modal} />
{/if}

{#if isLoading}
  <Loader title="Loading..." />
{:else}
  <div class="cards">
    {#each games as game}
      <Card {game} cardClickFunc={onCardClickHandler} />
    {/each}
  </div>
{/if}

{#if !isLoading && links.nextLink !== null}
  <Pagination
    prev={links.prevLink}
    next={links.nextLink}
    fetchFunc={fetchGames}
  />
{/if}

{#if !isLoading && games.length < 1}
  <Loader title="No games found." />
{/if}

<style>
  /* Cards */

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
</style>
