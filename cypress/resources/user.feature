Feature: User CRUD feature
  As a user
  I would like to create/update/delete/get an user

  @Regression
  Scenario Outline: create new user
    Given I have access to https://petstore.swagger.io/ API
    When I send POST request to '/v2/user' with json
    """
    {"username":"<username>","firstname":"<firstname>","lastname":"<lastname>","email":"<email>","password":"<password>","phone":"<phone>"}
    """
    Then I expect the response code 200
    And I expect the response body is equal
    """
    {
      "code": 200,
      "type": "unknown",
      "message": numerical type value
    }
    """
    Examples:
      | username | firstname | lastname | email | password  | phone |
      | ramonb44 | ramon     |  aguado  | aguado.soft2016@gmail.com | #NewPass  | 918285752 |

  @Regression
  Scenario: get an user data by username
    Given I have access to https://petstore.swagger.io/ API
    When I send GET request to '/v2/user/ramonb44' with json
    """
    """
    Then I expect the response code 200


  Scenario Outline: update user firstname, email
    Given I have access to https://petstore.swagger.io/ API
    When I send PUT request to '/v2/user/ramonb44' with json
    """
    {"username":"<username>","firstname":"<firstname>","lastname":"<lastname>","email":"<email>","password":"<password>","phone":"<phone>"}
    """
    Then I expect the response code 200
    Examples:
      | username | firstname | lastname | email | password  | phone |
      | ramonb44 | ramon     |  apaza   | ramon.b.aguado@gmail.com | #NewPass!  | 918285752 |

  @Regression
  Scenario: get an user data by username
    Given I have access to https://petstore.swagger.io/ API
    When I send GET request to '/v2/user/ramonb44' with json
    """
    """
    Then I expect the response code 200

  @Regression
  Scenario: delete user by username
    Given I have access to https://petstore.swagger.io/ API
    When I send DELETE request to '/v2/user/ramonb44' with json
    """
    """
    Then I expect the response code 200