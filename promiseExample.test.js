it('fails when a promise throws without being caught', () => {
  new Promise(() => {
    throw new Error('unhandled');
  })
});
