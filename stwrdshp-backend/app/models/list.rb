class List < ApplicationRecord
  has_many :parks, through :faves
  belongs_to :user
end
