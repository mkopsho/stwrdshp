class List < ApplicationRecord
  has_many :faves, class_name: "Fave"
  has_many :parks, through: :faves
  belongs_to :user
end
