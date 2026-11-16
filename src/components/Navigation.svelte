<script>
  let open = $state(false)
</script>

<nav>
    <button class="sm:hidden" onclick={() => open = !open}>Menu</button>

    <div class={`${open ? 'block' : 'hidden'} sm:block`}>
      <a href="/">Home</a>
      <a href="/about/">About</a>
      <a href="/blog/">Blog</a>
    </div>
</nav>
