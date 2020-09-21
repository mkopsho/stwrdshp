class Fave < ApplicationRecord
  belongs_to :list
  belongs_to :park
end
