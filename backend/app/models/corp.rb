class Corp < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  validates :fieldtype, presence: true 
  has_many :chats, dependent: :destroy
end
