class Idea < ActiveRecord::Base
  validates_presence_true :title, :body

  enum quality: {
         swill: 0,
         plausible: 1,
         genius: 2
       }

end
