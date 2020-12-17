class Fruit < ApplicationRecord

  belongs_to :shelf#, optional: true

  validates :name, presence: true


  # this model uses the db table 'fruits'

  # what if we want to distinguish between different kinds of fruits
  # ie pear, apple, peach etc.

  # if we make a model for each of these, we have to make a new db table
  # for each of them too - even though they all have a lot in common
  # name, price, squishiness

  # single table inheritance:
  # use one table to store

  def squishy
    false
  end
end
