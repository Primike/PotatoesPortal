class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true

    has_many :students, class_name: "User", foreign_key: "teacher_id"

    belongs_to :teacher, class_name: "User", optional: true
    has_many :school_classes
    has_many :complaints
end
