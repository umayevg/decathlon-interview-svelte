<script>
  export let prev, next;
  export let fetchFunc;

  const prevPage = async () => {
    await fetchFunc({ url: prev });
  };

  const nextPage = async () => {
    await fetchFunc({ url: next });
  };
</script>

<div class="pagination">
  {#if prev !== null}
    <button on:click={prevPage}>&laquo; Previous</button>
  {:else}
    <button disabled>&laquo; Previous</button>
  {/if}

  {#if next !== null}
    <button on:click={nextPage}>Next &raquo;</button>
  {:else}
    <button disabled>Next &raquo;</button>
  {/if}
</div>

<style>
  .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .pagination button {
    cursor: pointer;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    border: none;
    border-radius: 8px;
    background: #000000;
    color: #fff;
    transition: all 0.2s;
  }

  .pagination button:hover {
    background: #fff;
    color: #000;
  }

  .pagination button[disabled] {
    color: #fff;
    background: rgba(28, 27, 27, 0.84);
    cursor: auto;
  }
</style>
