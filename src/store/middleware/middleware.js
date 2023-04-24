export function middleware(store, ...fns) {
  fns.forEach(fn => {
    fn(store);
  });
}
