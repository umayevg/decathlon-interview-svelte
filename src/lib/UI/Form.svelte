<script>
  export let fetchFun;

  let nameInput;
  let filterInput;

  const formChangeHandler = (e) => {
    e.preventDefault();
    console.log(nameInput.value, filterInput);
    const searchInputString = nameInput.value;
    const selectedFilter = filterInput.value;
    fetchFun({ searchString: searchInputString, filter: selectedFilter });
  };

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const debouncedFormChangeHandler = debounce(formChangeHandler);
</script>

<form on:input={debouncedFormChangeHandler}>
  <div class="row">
    <input bind:this={nameInput} type="search" placeholder="Search..." />
  </div>
  <div class="row">
    <select bind:this={filterInput}>
      <option value="">Select sorting</option>
      <option value="name">Name &uarr;</option>
      <option value="released">Released date &uarr;</option>
      <option value="rating">Rating &uarr;</option>
      <option value="metacritic">Popularity &uarr;</option>
      <option value="-name">Name &darr;</option>
      <option value="-released">Released date &darr;</option>
      <option value="-rating">Rating &darr;</option>
      <option value="-metacritic">Popularity &darr;</option>
    </select>
  </div>
</form>

<style>
  form {
    height: 130px;
    background: rgba(0, 0, 0, 0.27);
    padding: 12px;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 30px;
  }

  .row:first-child {
    width: 75%;
    border-right: 1px solid #333;
  }

  .row:nth-child(2) {
    width: 25%;
  }

  .row input,
  .row select {
    font-size: 1.4rem;
    outline: none;
    width: 100%;
    padding: 10px;
    border: none;
    height: 49px;
  }

  .row input {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 20px;
  }

  select {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  select option {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    form {
      height: 120px;
      flex-direction: column;
    }
    .row:first-child {
      border-right: none;
    }

    .row {
      width: 100% !important;
    }

    .row input,
    .row select {
      font-size: 1.2rem;
      outline: none;
      padding: 10px;
      border-radius: 6px;
      height: auto;
    }

    select option {
      font-size: 1rem;
    }
  }
</style>
