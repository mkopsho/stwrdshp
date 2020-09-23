class Park < ApplicationRecord
  has_many :faves, class_name: "Fave"
  has_many :lists, through: :faves
end
