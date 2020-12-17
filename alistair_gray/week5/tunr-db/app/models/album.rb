class Album < ApplicationRecord
  has_many :songs

  has_many :artists, through: 'songs'


  def artist
    artists.first
    self.artists.first # self is the same as 'this'
  end # artist

  def to_s
    "The album is called: '#{title}'"
  end # to_s

end
