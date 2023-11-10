> ./Index.svelte
  ./conf.js:
  ./styl/site.styl
  @~3/nav/a.js:
  @~3/svelte_mount:Mount
  @~3/has-mouse:HAS_MOUSE

# > @3-/idb
#
# TABLE_URI_VER_BIN = 1
# EXT = 'e'
# PATH = 'p'
#
# await idb.vf(
#   1 # version
#   {
#     upgrade: (db)=>
#       db.createObjectStore TABLE_URI_VER_BIN, {
#         keyPath: [EXT, PATH]
#       }
#       return
#   }
# )

# 判断是否鼠标 https://stackoverflow.com/questions/7838680/detecting-that-the-browser-has-no-mouse-and-is-touch-only
if HAS_MOUSE
  (await import("@~3/mouse")).default()


Mount(
  Index
  document.body
)
