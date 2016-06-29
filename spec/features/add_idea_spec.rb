require 'rails_helper'

RSpec.feature "user can add a new idea", :js => true do
  scenario "successfully" do
    visit root_path

    fill_in 'title', with: "new title lets gooooo"
    fill_in 'body', with: "ahhhhh this is a body wooooo"

    click_on "save"
    wait_for_ajax

    expect(Idea.count).to eq(1)

    expect(page).to have_content("new title lets gooooo")
    expect(page).to have_content("ahhhhh this is a body wooooo")
    expect(page).to have_content("swill")
  end
end
