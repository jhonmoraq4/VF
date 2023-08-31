import sys
sys.path.append("D:\\Repositorio\\VegaFactor\\Playwright")

from playwright.sync_api import Playwright, sync_playwright, expect
from POM.Loggin.Loggin import LogginPage
from POM.Board.WorkSpace import WorkspacePage
from POM.Health_Check.Healcheck import HealthCheckPage
import time


with sync_playwright() as p:
    browser=p.chromium.launch(headless=False)
    page = browser.new_page()
    loggin = LogginPage(page)
    environment="https://test414.staging.factor.work/login"
    loggin.navigate(environment)
    loggin.login('queenie.quinn@client.bar','secret')

    ws= WorkspacePage(page)
    ws.workSpaceComponent()
    time.sleep(1)
    ws.workSpaceCreation('TestWS300')
    time.sleep(3)
    ws.workSpaceOptions()
    hc=HealthCheckPage(page)
    time.sleep(3)
    hc.ImprovementPlanComponent()
    time.sleep(3)
    hc.Take_Your_First_Health_check()
    time.sleep(3)
    hc.Next_Button_Click()
    time.sleep(3)
    hc.Next_Button_Click()
    hc.movitesScreen()
    hc.Next_Button_Click()
    hc.thoughtsScreen()
    hc.Next_Button_Click()
    hc.habitsScreen()
    hc.Next_Button_Click()
    time.sleep(3)
    hc.ideasScreen()
    time.sleep(3)
    hc.Next_Button_Click()
    hc.volunteersScreen()
    time.sleep(3)
    hc.submitButton()
    time.sleep(1)
    hc.diagnosticSubmitted()
    time.sleep(9)