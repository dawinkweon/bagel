const createMockDb = () => {
  const categories = [
    {
        "name": "food",
        "icon": "🍔",
        "items": [
          {
            "name": "coffee"
          },
          {
            "name": "lunch"
          },
          {
            "name": "dinner"
          }
        ]
      },
      {
        "name": "groceries",
        "icon": "🛍️"
      },
      {
        "name": "car",
        "icon": "🚗"
      }
    ];

  return { categories };
}

module.exports = createMockDb;
