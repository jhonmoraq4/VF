from playwright.sync_api import Playwright, sync_playwright, expect
import time


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://grab.staging.factor.work/login")
    #page.locator("div").filter(has_text="Use your credentials to log into the platform.Don't have an account? No problem ").nth(1).click()
    page.get_by_placeholder("Email").click()
    page.get_by_placeholder("Email").fill("anthony.tan@client.bar")
    page.get_by_placeholder("Password").click()
    page.get_by_placeholder("Password").fill("secret")
    page.get_by_role("button", name="Sign in").click()
    time.sleep(1)
    page.get_by_role("button", name="Find or create a workspace").click()
    page.get_by_role("menuitem", name="New blank workspace").click()
    page.get_by_placeholder("e.g. Marketing strategies").click()
    page.get_by_placeholder("e.g. Marketing strategies").fill("Test38WorkSpace")
    page.get_by_role("button", name="Create workspace").click()
    page.get_by_role("link", name="Health").click()
    #page.locator("[dd-action-name=\"DD: Health instructions - Close\"]").click()
    page.locator("xpath=//button[contains(@dd-action-name,'DD: Health instructions - Close')]").click()
    page.locator("#health-check-start-survey").click()   
    page.get_by_role("button", name="Next").click()
    time.sleep(1)
    page.get_by_role("button", name="Next").click()
    time.sleep(1)

    slider_elements = page.locator('.mdc-slider__input')
    for i in range(6):
        current_slider = slider_elements.nth(i)
        current_slider.click()
        time.sleep(1)

    page.get_by_role("button", name="Next").click()
    time.sleep(1)
    page.get_by_role("application", name="Rich Text Editor").get_by_role("paragraph").click()
    page.get_by_role("textbox", name="Editor editing area: main").fill("I will like to know more about technology")
    page.get_by_role("button", name="Next").click()
    time.sleep(3)

    maintain_as_is_Elements = page.locator('.mat-radio-container')
    for i in range(0, 10, 3):
        current_radio_element = maintain_as_is_Elements.nth(i)
        current_radio_element.click()
        time.sleep(1)
    
    improve_later_Element = page.locator('.mat-radio-container')
    for i in range(11, 20, 2):
        current_radio_element = improve_later_Element.nth(i)
        current_radio_element.click()
        time.sleep(1)

    prioritize_Element = page.locator('.mat-radio-container')
    for i in range(21, 30, 3):
        current_radio_element = prioritize_Element.nth(i)
        current_radio_element.click()
        time.sleep(1)

    page.get_by_role("button", name="Back").click()
    time.sleep(2)
    page.get_by_role("button", name="Next").click()
    time.sleep(1)
    page.get_by_role("button", name="Next").click()
    time.sleep(1)

    ideas_to_improve= page.locator("xpath=//textarea")
    ideas_len = ideas_to_improve.count()

    for i in range(ideas_len):
        current_textarea = ideas_to_improve.nth(i)
        current_textarea.fill("This is a test")

    page.get_by_role("button", name="Next").click()
    time.sleep(1)

    #page.locator('#health-volunteer').click()
    page.locator('#health-not-volunteer').click()

    page.locator('#health-check-submit').click()

    time.sleep(6)
    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
