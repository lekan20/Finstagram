def create_users
  User.create(username: "lekannicholson", password: "password", password_confirmation: "password", firstname: "Lekan", lastname: "Nicholson")
  User.create(username: "couchpirate8", password: "password", password_confirmation: "password", firstname: "Olive", lastname: "DeAngelis")
  User.create(username: "housesuper", password: "password", password_confirmation: "password", firstname: "Cheryl", lastname: "Wu")
end

def create_posts
  Post.create(user_id: 2, img_url: "https://cdn.vox-cdn.com/thumbor/X9wXXAedkTVLRoUkNZFz9U4kSWo=/0x0:3915x2613/920x613/filters:focal(1706x113:2332x739):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59594853/usa_today_10816472.1525210208.jpg", caption: "Winning!")
  Post.create(user_id: 1, img_url: "https://lh3.googleusercontent.com/a-/AAuE7mCE9vmFaf7awpJoBbDHNVSiFfYVg5aPTcPChwmyhg=s640-rw-il", caption: "Young fella")
  Post.create(user_id: 3, img_url: "https://secretldn.com/wp-content/uploads/2018/06/By-Chloe-Tower-Bridge-2.jpg", caption: "I'm hungry!!")
end

def truncate_database
  User.delete_all
  Post.delete_all
end

def main
  truncate_database
  create_users
  create_posts
end

main
