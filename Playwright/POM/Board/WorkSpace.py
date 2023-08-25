import time

class WorkspacePage:
    

    def __init__(self, page):
        self.page = page
    
    def workSpaceComponent(self):
        self.WorkSpaceButton = self.page.get_by_role("button", name="Find or create a workspace")
        self.NewWorkspace = self.page.get_by_role("menuitem", name="New blank workspace")
        self.NewWorkspaceName = self.page.get_by_placeholder("e.g. Marketing strategies")
        self.CreateWorkSpaceButton = self.page.get_by_role("button", name="Create workspace")
        time.sleep(2)
        self.HealthCheckOption = self. page.get_by_role("link", name="Health")

    def workSpaceCreation(self, workspace):
        self.WorkSpaceButton.click()
        self.NewWorkspace.click()
        self.NewWorkspaceName.fill(workspace)
        self.CreateWorkSpaceButton.click()
        time.sleep(2)
    
    def workSpaceOptions(self):
        self.HealthCheckOption.click()

