describe('Coding Tests', () => {
  it('Increase the age attribute by 2', () => {
    let obj = [
      {
        name: 'Roger Federer',
        age: 37
      },
      {
        name: 'Rafael Nadal',
        age: 32
      },
      {
        name: 'Novak Djokovic',
        age: 30
      }
    ]
    const modifiedObj = []
    expect(obj).toMatchSnapshot()
  })

  it('Print all the keys of the objects in an array', () => {
      const obj = {
          'age': '22',
          'name': 'ABC',
          'place': 'Milwaukee',
          'designation': 'Software Developer'
      }
      const objKeys = []
      expect(objKeys).toMatchSnapshot()
  })
})
