<script>
  export let rating;
  let starsString = "";

  if (rating.title === "exceptional") {
    starsString = "&#11088;&#11088;&#11088;&#11088;";
  }
  if (rating.title === "recommended") {
    starsString = "&#11088;&#11088;&#11088;";
  }

  if (rating.title === "meh") {
    starsString = "&#11088;&#11088;";
  }

  if (rating.title === "skip") {
    starsString = "&#11088;";
  }
</script>

<div class="rating">
  <div>{@html starsString}</div>
  <div class="fill">
    <div class="bg" style="width: {rating.percent}%" />
  </div>
  <div>{Math.round(rating.percent)}%</div>
</div>

<style>
  .rating {
    display: flex;
    margin-bottom: 10px;
  }

  .rating > div {
    width: 33.33333%;
  }

  .fill {
    background: #ddd;
  }

  .rating .fill {
    margin-right: 10px;
  }

  div.bg {
    height: 100%;
    display: inline-block;
    background: yellow;
    width: 68%;
  }
</style>
