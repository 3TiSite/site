<script lang="coffee">
</script>

<template lang="pug">
footer
  a.site(href="/")
  b
    a &#xe769;
    a &#xe627;
    a(href="//github.com/3Ti-Site") &#xe64c;
    a(href="//twitter.com/3TiSite") &#xe606;
    a(href="//groups.google.com/u/8/g/3Ti-Site") &#xe608;
</template>

<style lang="stylus">
@font-face
  font-family FI /* Project id 4281991 */
  src url('//at.alicdn.com/t/c/font_4281991_qcwhx1sb59h.woff2?t=1697012466415') format('woff2')

footer
  align-items center
  background linear-gradient(to bottom, #333, #111)
  border-top 1px solid #000
  box-shadow 0 0 9px inset #000
  box-sizing border-box
  display flex
  justify-content space-between
  margin 64px 0 0
  padding 24px
  width 100%

  a
    filter grayscale(1)
    opacity 0.8
    transition all 0.3s

    &:hover
      filter none
      opacity 1

  &>b
    &>a
      background-clip text
      background-image -webkit-linear-gradient(45deg, #EB6A5B, #E58E38)
      display inline-block
      font-family FI
      font-size 24px
      height 24px
      line-height 1
      margin-left 24px
      width 24px
      -webkit-background-clip text
      -webkit-text-fill-color transparent

      &.github
        background url(':/svg/github.svg') 50% 50% / cover

  &>a.site
    background url('//i-01.eu.org/3Ti/3Ti.svg') 0 0 / cover
    display block
    height 24px
    opacity 0.8
    width 105px
</style>

