class User < ApplicationRecord
  has_many :lists
  has_secure_password
  validates :username, :email, presence: true
  validates :username, uniqueness: true
end
