from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)
    
    # @task(2)
    # def login(self):
    #     self.client.post("/api/api-token-auth/", {
    #         "username": "qqqq@qqqq.com",
    #         "password": "qwer1234"
    #     })
    
    @task(3)
    def getselftrain(self):
        self.client.get("/api/selftrains/")
    
    @task(3)
    def getinfoboards(self):
        self.client.get("/api/infoboards/")

    @task(3)
    def getinfoboards(self):
        self.client.get("/api/infoboards/5/detail")    
    
    @task(3)
    def getinfoboards(self):
        self.client.get("/api/infoboards/6/detail")    
    
    @task(3)
    def getinfoboards(self):
        self.client.get("/api/infoboards/7/detail")    
    


    @task(3)
    def getmainpage(self):
        self.client.get("/")