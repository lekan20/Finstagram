class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :caption
  belongs_to :user
end
