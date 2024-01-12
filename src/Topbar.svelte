<template lang="pug">
nav(@&nav)
  b
    +if L
      +each L as i
        a(href:i[0]) {i[1]}
      +else
        i.w
  b
    R
</template>


<script lang="coffee">
> @~3/topfix
  @~3/nav > splitSlash
  @2-/route/hashchange.js
  @3-/on:On
  ./topbar/R.svelte
  ~/lib/SITE.js

+ L, nav

classNow = =>
  url_prefix = splitSlash location.pathname.slice(1)
  now = 'n'
  for {classList, pathname} from nav.getElementsByTagName 'a'
    if url_prefix == pathname.slice(1)
      classList.add now
    else
      classList.remove now
  return


onI18n ->
  L = undefined
  l = []
  for [k,v] from Object.entries SITE.nav
    if not v
      v = '/'+k
    l.push [
      v
      @[k]
    ]
  L = l
  setTimeout(
    classNow
  )
  return

onMount =>
  n = nav
  loop
    {nextSibling:n} = n
    if n.tagName == 'B'
      topfix(nav, n)
      break
  On(
    window
    hashchange:classNow

  )
</script>

<style lang="stylus">
nav
  align-items stretch
  background #fff
  justify-content space-between
  padding 0 24px
  user-select none

  :global(b)
    align-items center
    display flex

  &>b
    &>a
      color #000
      margin-right 24px
      opacity 0.6

      &:global(.n)
        opacity 1

      &:hover
        color #f40
        opacity 1

&>b>:global(i), &>b>:global(m-c)
  border-radius 12px
  display inline-block
  height 24px
  margin-left 24px
  width 24px

  &.w
    background var(--svgWait) 50% 50% / 30px

:global(m-c)
  background 50% 50% / 20px no-repeat
  border-radius 12px
  display inline-block
  height 24px
  opacity 0.6
  transition all 0.5s
  width 24px

  &:hover
    filter invert(42%) sepia() saturate(47)
    opacity 1
</style>

