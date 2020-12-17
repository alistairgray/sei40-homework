# This is a derived or child ActiveRecord model class. It inherits from
# one of our own models

# i.e. this is how Single Table Inheritance is implemented

# This model will still use the fruits table
class Pear < Fruit

  # Methods like this are for storing CODE
  # rather than simple values - so if you
  # need to run some code to get an answer
  # about the properties of a model object,
  # this is the place to put it
  validates :name, presence: true, uniqueness: true

  def squishy?
    true
  end

end
