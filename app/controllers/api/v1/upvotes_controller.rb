class Api::V1::UpvotesController < ApiController
  def create
    respond_with Idea.upvote(params[:id]), location: nil
  end
end
