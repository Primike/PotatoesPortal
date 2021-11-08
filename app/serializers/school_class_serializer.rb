class SchoolClassSerializer < ActiveModel::Serializer
  attributes :id, :grade, :homeworks, :subject
  has_one :user
end
