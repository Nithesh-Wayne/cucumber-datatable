Feature: login
 
  #Scenario Outline: First scenario
    #Given Browser login
    #When user enters username in userid field as "<uid>"
    #And user enters password in pwd field as "<pwd>"
    #And Click login button   
    #Then user log outs
    #
    #Examples:
    #|uid|pwd|
    #|lalitha|password123|
    #|lalitha|password123|
 
	Scenario: second scenario
	Given user credss
	When user checks the creds and enters username and password as
	|lalitha|password123|
  	|lalitha|password123|
  	|lalitha|password123|
	Then user log outs
