class Idea < ActiveRecord::Base
  validates_presence_of :title, :body

  enum quality: {
         swill: 0,
         plausible: 1,
         genius: 2
       }

  def self.upvote(id)
    idea = find(id)
    idea.update(quality: upvote_quality(idea.quality))
    idea.save
    idea
  end

  def self.downvote(id)
    idea = find(id)
    idea.update(quality: downvote_quality(idea.quality))
    idea.save
    idea
  end

  private

  def self.upvote_quality(quality)
    {
      'swill' => 'plausible',
      'plausible' => 'genius',
      'genius' => 'genius'
    }[quality]
  end

  def self.downvote_quality(quality)
    {
      'genius' => 'plausible',
      'plausible' => 'swill',
      'swill' => 'swill'
    }[quality]
  end
end
