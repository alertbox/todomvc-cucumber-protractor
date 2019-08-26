Feature: To search users in GitHub
    A user can search other contributors in GitHub.

Scenario: Searching on GitHub

    Given the user visits GitHub
    When a contributor search for "kosalanuwan"
    Then the search result summary should have at least 1 contributor
