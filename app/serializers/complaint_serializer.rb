class ComplaintSerializer < ActiveModel::Serializer
  attributes :id, :experience, :complaint, :name
  has_one :user
end
