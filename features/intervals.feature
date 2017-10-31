Feature: User can customize the lengths of the work, break, and rest intervals
	As a user
	I want to be able to increase or decrease the lengths of an interval
	So I can have custom work, break, or rest intervals that fit my work style

	Scenario: Increase an interval timer
		Given I have the timer page open
		When I click the increase button for an interval
		Then the length of that interval will increase by one minute

	Scenario: Decrease an interval timer
		Given I have the timer page open
		When I click the decrease button for an interval
		Then the length of that interval will decrease by one minute		

	Scenario: Change the length of the active interval
		Given I have the timer page open
		And the timer is running
		When I change the length of the active interval
		Then the time remaining on the timer will not be changed