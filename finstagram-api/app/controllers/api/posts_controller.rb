class Api::PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    post = Post.new(post_params)
  end

  def show
    render json: Post.find_by(id: params[:id])
  end
end
