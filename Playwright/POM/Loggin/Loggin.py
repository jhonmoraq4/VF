class LogginPage:

    def __init__(self, page):
        self.page = page
        self.username_input = page.get_by_placeholder("Email")
        self.password_input = page.get_by_placeholder("Password")
        self.login_button = page.get_by_role("button", name="Sign in")

    def navigate(self,env):
        self.page.goto(env)

    def login(self, username, password):
        self.username_input.fill(username)
        self.password_input.fill(password)
        self.login_button.click()
