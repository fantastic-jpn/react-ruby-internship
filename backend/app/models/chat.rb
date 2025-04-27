class Chat < ApplicationRecord
  belongs_to :user, foreign_key: "users_id"
  belongs_to :corp, foreign_key: "corps_id"
  validates :message, presence: true
end
