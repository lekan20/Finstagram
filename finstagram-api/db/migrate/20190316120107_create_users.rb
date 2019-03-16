class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :usersname
      t.string :password_digest
      t.string :firstname
      t.string :lastname
    end
  end
end
