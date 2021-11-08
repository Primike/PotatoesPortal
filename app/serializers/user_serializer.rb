class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :is_teacher, :teacher_id, :avatar, :complaints
  has_many :school_classes
  has_many :complaints
end
