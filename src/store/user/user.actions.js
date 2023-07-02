const fetchUserById = (userId) =>
    new Promise(resolve =>
        setTimeout(() => resolve({
            id: 1,
            name: 'Max',
        }), 1000)
    )
