require 'rails_helper'

RSpec.feature "user can delete an idea", :js => true do
  scenario "successfully" do
    visit root_path

    fill_in 'title', with: "new title lets gooooo"
    fill_in 'body', with: "ahhhhh this is a body wooooo"

    click_on "save"
    wait_for_ajax

    expect(page).to have_content("new title lets gooooo")
    expect(page).to have_content("ahhhhh this is a body wooooo")
    expect(page).to have_content("swill")

    click_on "delete"
    wait_for_ajax

    expect(page).to_not have_content("new title lets gooooo")
    expect(page).to_not have_content("ahhhhh this is a body wooooo")
    expect(page).to_not have_content("swill")
  end
end
