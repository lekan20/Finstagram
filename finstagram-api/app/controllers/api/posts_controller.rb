class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = Post.new(post_params)
    post.user_id = get_current_user.id
    post.save

    render json: post
  end

  private

  def post_params
    params.require(:post).permit(
        :img_url,
        :caption
      )
  end
end
