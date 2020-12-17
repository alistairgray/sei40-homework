class CreatePlanets < ActiveRecord::Migration[5.2]
  def change

    # INSTEAD OF SQL:
    # CREATE TABLE planets(name TEXT, moons INTEGER...)

    # In Rails, we use a DB-abstracted Ruby style for create table structure; this stops us having to concern ourselves with what the underlying DB system even is; i.e. it's easu to change from one DB system to antoehr if we need to

    create_table :planets do |t|

      # NO NEED to create an 'id column' - it's so essential that it's always made for us automatically

      t.string :name        # a string colum for the planet name
      t.text   :image_url   # a longer text column for the image url
      t.float  :orbit       # a float for the orbit time (relative to the earth orbit)
      t.float  :mass        # mass, as proportion of earth's mass
      t.integer :moons      # number of moons

    end # create_table ()
  end # change
end # CreatePlanets
