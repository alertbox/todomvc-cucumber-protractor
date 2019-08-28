# language: en
@search @functional @gui @uat
Feature: Search contributors on GitHub
    A user can search for contributors on GitHub.

@regression @integration @ci
Scenario Outline: Searching on GitHub

    Given the user visits GitHub
    When a contributor search for "<contributor>"
    Then the search result summary should have at least 1 contributor

    @smoke
    Examples:
        | contributor   |
        | kosalanuwan   |
        | alertbox      |
        | 99xt          |
    
    @sanity @security
    Examples:
        | contributor   |
        | Alertbox Inc  |