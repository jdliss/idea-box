class Api::V1::UpvotesController < ApiController
  def create
    idea = Idea.find(params[:id])
    idea.update(quality: quality_plus_one(idea.quality)).save
    respond_with idea
  end

  private

  def quality_plus_one(quality)
    {
      'swill' => 'plausible',
      'plausible' => 'genius',
      'genius' => 'genius'
    }[quality]
  end
end
