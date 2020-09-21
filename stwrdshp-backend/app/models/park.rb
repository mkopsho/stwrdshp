class Park < ApplicationRecord
  has_many :lists, through: :faves
end
