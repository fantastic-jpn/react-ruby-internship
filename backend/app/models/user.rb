class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :fieldtype, presence: true
  has_many :chats, dependent: :destroy
end
