module.exports = {
  get: () =>
    new Promise(resolve =>
      resolve({
        client: {
          close: () => true
        },
        db: {
          collection: function() { return this },
          aggregate: (aggregation, callback) => {
            callback(null, {
              next: () =>
                new Promise(resolve => {
                  resolve({
                    mocked: true
                  })
                })
            })
          }
        }
      }))
}