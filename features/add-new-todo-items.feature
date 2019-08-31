# language: en
@search @functional @gui @uat
Feature: Add new items to the todo list
    In order to avoid having to remember things that needs to do
    KP wants to records all the things needs to get done.

    @regression @integration @ci
    Scenario Outline: Add new items to the todo list

        Given that KP already has a list of things to do such as "<todo_list>"
         When he adds "<new_items>" to the list
         Then he shall see both "<todo_list>" and "<new_items>" in the todo list

    @smoke
    Examples:
        | todo_list                                             | new_items                         |
        | Smile more often, Drink more water, Eat a banana      | Quit the job, Sleep early         |
        | Join the 5AM Club, Join the Audible Inner-circle      | Go to Yoga, Meet the shrink       |
        | Sprint retrospective starts 2pm, Tech talk starts 6pm | Write some code, do some demos    |
    
    @sanity @security
    Examples:
        | todo_list                                             | new_items                         |
        | Join the 5AM Club, Join the Audible Inner-circle      | Go to Yoga, Meet the shrink       |
