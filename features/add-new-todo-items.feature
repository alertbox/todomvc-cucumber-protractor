# language: en
@search @functional @gui @uat
Feature: Add new items to the todo list
    In order to avoid having to remember things that needs to do
    KP wants to records all the things needs to get done.

    @regression @integration @ci
    Scenario Outline: Add new items to the todo list

        Given that KP already has a list of things to do such as "<todo-list>"
         When he adds "<new-items>" to the list
         Then he shall see both "<todo-list>" and "<new-items>" in the todo list
          And his number of todo items shall increase up to <nr-of-todos>

    @smoke
    Examples:
        | todo-list                                             | new-items                         | nr-of-todos |
        | Smile more often, Drink more water, Eat a banana      | Quit the job, Sleep early         | 5           |
        | Join the 5AM Club, Join the Audible Inner-circle      | Go to Yoga, Meet the shrink       | 4           |
        | Sprint retrospective starts 2pm, Tech talk starts 6pm | Write some code, do some demos    | 4           |
    
    @sanity @security
    Examples:
        | todo-list                                             | new-items                         | nr-of-todos |
        | Join the 5AM Club, Join the Audible Inner-circle      | Go to Yoga, Meet the shrink       | 4           |
