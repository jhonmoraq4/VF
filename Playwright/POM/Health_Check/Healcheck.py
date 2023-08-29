import time
from playwright.sync_api import Playwright,sync_playwright, expect
import random


class HealthCheckPage:

    def __init__(self,page):
        self.page = page

    def ImprovementPlanComponent(self):
        xButton= self.page.locator("[dd-action-name=\"DD: Health instructions - Close\"]").click()
        
    
    def Take_Your_First_Health_check(self):
        startButton= self.page.locator("#health-check-start-survey").click()
        time.sleep(3)
    
    def Next_Button_Click(self):
        NextButton= self.page.get_by_role("button", name="Next").click()
    
    def Back_Button_Click(self):
        NextButton= self.page.get_by_role("button", name="Back").click()
    
    def introScreen(self):
        intro= self.page.get_by_role("TEXT VALIDATION MISSING")
    
    def GetReadyScreen(self):
        intro= self.page.get_by_role("TEXT VALIDATION MISSING")
        copyLinkButton= self.page.locator("#health-check-copy-link").click()
    
    def movitesScreen(self):
        sliders = self.page.query_selector_all('input[type="range"]')
        for slider in sliders:
            random_value = str(random.randint(2, 100))
            slider.fill(random_value)


    def thoughtsScreen(self):
        ThoughtstextArea=self.page.get_by_role("application", name="Rich Text Editor").get_by_role("paragraph").click()
        textToFill= self.page.get_by_role("textbox", name="Editor editing area: main").fill("I will like to know more about technology")
    
    def habitsScreen(self):
        maintain_as_is_Elements = self.page.locator('.mat-radio-container')
        for i in range(0, 10, 3):
            current_radio_element = maintain_as_is_Elements.nth(i)
            current_radio_element.click()
            time.sleep(1)
    
        improve_later_Element = self.page.locator('.mat-radio-container')
        for i in range(11, 20, 2):
            current_radio_element = improve_later_Element.nth(i)
            current_radio_element.click()
            time.sleep(1)

        prioritize_Element = self.page.locator('.mat-radio-container')
        for i in range(21, 30, 3):
            current_radio_element = prioritize_Element.nth(i)
            current_radio_element.click()
            time.sleep(1)

    def ideasScreen(self):
        ideas_to_improve= self.page.locator("xpath=//textarea")
        ideas_len = ideas_to_improve.count()

        for i in range(ideas_len):
            current_textarea = ideas_to_improve.nth(i)
            current_textarea.fill("This is a test")
            time.sleep(1) 
             

    def volunteersScreen(self):
        #volunteerButton= self.#page.locator('#health-volunteer').click()
        NotvolunteerButton= self.page.locator('#health-not-volunteer').click()
    
    def submitButton(self):
        finishButton=self.page.locator('#health-check-submit').click()
    
    def diagnosticSubmitted(self):
        okayButton=self.page.locator("xpath=//button[contains(@mod,'accent')][.//span[contains(text(),'Okay')]]").click()