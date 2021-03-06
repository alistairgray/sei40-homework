# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
Games.destroy_all

Games.create!(
  name: 'Mario Kart',
  platform: "Nintendo",
  description: "Race around courses in the Nintendo universe and play as your favourite characters. To find out who is the Mario Kart Champion",
  max_players: 4,
  image_url:
  'https://upload.wikimedia.org/wikipedia/en/7/7e/Mario_Kart_64box.png'
)

Games.create!(
  name: 'Tomb Raider',
  platform:"Xbox",
  description: "Lara Croft solves puzzles and fights bad guys to survive, HINT: Dont get in Helicopters ever!",
  max_players:1,
  image_url:
  'http://www.superherohype.com/images/stories/2012/October/TR_PC.png'
)

Games.create!(
  name: 'Overcooked',
  platform: "Xbox, PS, PC, Nintendo",
  description:"Crazy kitchen capers",
  max_players:4,
  image_url:
  'https://www.mobygames.com/images/covers/l/381815-overcooked-playstation-4-front-cover.png'
)

puts "Done! Created #{Games.count} games."
puts Games.pluck(:name).join(',')
