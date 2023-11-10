<template lang="pug">
Topbar
Scroll
  b
    +if M
      <svelte:component this="{M}" {...A}/>
    Foot
</template>

<script lang="coffee">
> @~3/wait:Wait
  @~3/scroll:Scroll
  @3-/fetch/fTxt.js
  ./Foot.svelte
  ./PAGE.coffee
  ./Topbar.svelte
  ./lib/SITE.js
  @~3/h404
  @~3/nav:Nav
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
  (_, func, url)=>
    page func, {url}
    return
)

onI18n =>
  routeClear()
  for [func, li] from Object.entries SITE.url
    for u from li
      if u.endsWith '/'
        url = u.slice(0,-1)
      route url, PAGE[func], u
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

