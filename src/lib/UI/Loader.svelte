<script>
    export let title
</script>

<span class="loader">{title}</span>

<style>
    .loader {
        display: inline-block;
        width: 140px;
        margin-left: calc(50% - 70px);
        margin-top: calc(100vh / 10);
        color: #fff;
        text-align: center;
    }
</style>