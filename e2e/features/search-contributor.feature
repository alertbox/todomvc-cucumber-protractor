# language: en
@search @functional @gui @uat
Feature: Search for contributors on GitHub
    We can search for specific contributors on GitHub.

    @regression @integration @ci
    Scenario Outline: Searching for contributors

        Given the user visits GitHub
         When the user search for a "<contributor>"
         Then the result summary should at least find 1 contributor

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
