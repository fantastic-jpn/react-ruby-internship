class Test < ApplicationRecord
  validates :user, presence: true, uniqueness: true
  validates :pass, presence: true
  validates :birthday, presence: true
end
