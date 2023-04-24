export function log(store) {
  let next = store.dispatch;
  function customThunk(action) {
    console.log("执行前", action);
    next(action);
  }

  store.dispatch = customThunk;
}
