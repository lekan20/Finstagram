class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user
      t.string :img_url
      t.string :caption

      t.timestamps
    end
  end
end
