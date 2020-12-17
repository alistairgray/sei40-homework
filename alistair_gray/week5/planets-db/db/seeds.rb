# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Planet.destroy_all # DESTROY THE REBEL BASE


# Use .create! because it fails loudly when it can't create an item for you - this helps us debug our seeds

Planet.create!(
  name: 'Earth',
  image_url: 'https://scitechdaily.com/images/earth-losing-mass.jpg',
  orbit: 1,
  mass: 1,
  moons: 1,
)

Planet.create!(
  name: 'Mars',
  image_url: 'https://space-facts.com/wp-content/uploads/mars.jpg',
  orbit: 1,
  mass: 0.33,
  moons: 2,
)

Planet.create!(
  name: 'Venus',
  image_url: 'https://space-facts.com/wp-content/uploads/mars.jpg',
  orbit: 1,
  mass: 1.1,
  moons: 0,
)

Planet.create!(
  name: 'Jupiter',
  image_url: 'http://cdn.sci-news.com/images/enlarge4/image_5608_2e-Jupiter.jpg',
  orbit: 1,
  mass: 1,
  moons: 200,
)



puts "Done! Create #{Planet.count} planets."
puts Planet.pluck(:name).join(', ')
