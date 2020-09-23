class Fave < ApplicationRecord
  belongs_to :list
  belongs_to :park
  validates_uniqueness_of :park_id, :scope => :list_id
end
