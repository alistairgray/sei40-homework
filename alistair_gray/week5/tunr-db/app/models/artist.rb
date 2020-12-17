class Artist < ApplicationRecord
  has_many :songs
  # FREE association (no_extra_id is required):
  # an artist has many albums, VIA the songs table, i.e:
  # to find the albums for an artist, first find all the
  # songs with this artist's ID as their artist_id and then
  # find all the albums which have the album_id of those songs
  has_many :albums, through: 'songs'

  has_many :genres, through: 'songs'
end
