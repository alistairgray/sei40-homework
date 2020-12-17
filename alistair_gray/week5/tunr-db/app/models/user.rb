class User < ApplicationRecord
  has_many :mixtapes

  # uses bcrypt to encrypt passwords when users create accounts and stores
  # only the encrypted version in the 'users' table
  has_secure_password

  # Model validations
  validates :email, presence: true, uniqueness: true # makes sure field is not empty and is unique
  validates :name, length: {minimum: 2}
end
