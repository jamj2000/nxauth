// Formas de obtener avatars gratis
// https://dev.to/bruino/3-utiles-apis-generadoras-de-avatar-p6
// Ejemplos:
// - https://ui-avatars.com/api/?name=Usuario+1&background=00ff00&color=fff&size=128
// - https://ui-avatars.com/api/?name=Jose+Garcia&background=00ff00&color=fff&size=128
// - https://www.gravatar.com/avatar/bfcb1d6a22d7298439771d3bcec5a8c4?d=robohash&f=y&s=128
// - https://www.gravatar.com/avatar/b1cb116a22d7298439771d5bcec5a8c4?d=robohash&f=y&s=128


// Hash obtenido con PHP
// php -r "echo hash( 'sha256', 'user1@example.com');" 
const image1 = 'https://www.gravatar.com/avatar/b36a83701f1c3191e19722d6f90274bc1b5501fe69ebf33313e440fe4b0fe210?d=wavatar&f=y&s=128'
const image2 = 'https://www.gravatar.com/avatar/2b3b2b9ce842ab8b6a6c614cb1f9604bb8a0d502d1af49c526b72b10894e95b5?d=wavatar&f=y&s=128'
const image3 = 'https://www.gravatar.com/avatar/898628e28890f937bdf009391def42879c401a4bcf1b5fd24e738d9f5da8cbbb?d=wavatar&f=y&s=128'

export const Users = [
    {id: 1, name: 'Usuario 1', email: 'user1@example.com', password: "1234", image: image1},
    {id: 2, name: 'Usuario 2', email: 'user2@example.com', password: "2345", image: image2},
    {id: 3, name: 'Usuario 3', email: 'user3@example.com', password: "3456", image: image3},
]
  