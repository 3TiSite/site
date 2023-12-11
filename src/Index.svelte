<template lang="pug">
Topbar
Scroll
  b
    b
      +if M
        <svelte:component this="{M}" {...A}/>
    Foot
</template>

<script lang="coffee">
> ./Foot.svelte
  ./PAGE.coffee
  ./Topbar.svelte
  ./lib/SITE.js
  @3-/fetch/fTxt.js
  @~3/h404
  @~3/nav:Nav
  @~3/scroll:Scroll
  @~3/wait:Wait
  svelte > tick

A = {}
M = Wait

page = (m,a)=>
  M = undefined
  A = a
  await tick()
  M = m
  return

[
  route
  routeClear
  routeSetNoFound
] = Nav(
  (url, func, args)=>
    page func, (args or {})
    return
)

onI18n =>
  routeClear()
  for [func, li] from Object.entries SITE.url
    for u from li
      if u.endsWith '/'
        u = u.slice(0,-1)
      url = if u then u else '/'
      route u, PAGE[func], {url}
  routeSetNoFound =>
    page h404,{}
    return
  return
</script>

<style lang="stylus">
:global(body>.scroll)
  background #fff
  justify-content center
  position absolute
  width 100%

b
  display flex
  flex 1
  flex-direction column
  width 100%
</style>
