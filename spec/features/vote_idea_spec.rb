require 'rails_helper'

RSpec.feature "user can vote an idea", :js => true do
  scenario "up and down" do
    visit root_path

    fill_in 'title', with: "new title lets gooooo"
    fill_in 'body', with: "ahhhhh this is a body wooooo"


    click_on "save"
    wait_for_ajax
    find(".upvote").click
    wait_for_ajax

    expect(page).to have_content("plausible")
    find(".downvote").click
    wait_for_ajax

    expect(page).to have_content("swill")
  end
end
