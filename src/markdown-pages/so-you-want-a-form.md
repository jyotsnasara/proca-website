This is the journey of creating an action form. you know, 3 fields an a half, "please fill in your name email and country plus a 'I accept to be contacted" simple form. It doesn't matter which fields, I've had that discussion way too many times, and it goes like this:

So, how long does it take you to do that? a few hours?

# The 1 min shitty version

    <form url="https://example.org/yourshittyform.php">
      Name: <input name="name" >
      Email: <input name="email">
      Country: <input name="country">
    </form>

# Clarifying the need

Max length, which ones are mandatory, split the name into first and last (I know, opens a pandora box of cultural differences on what's a name), drop-down for country

GDPR: need explicit consent (ie checkbox)

# Handling presentation
mobile friendly, accessibility, placeholder, label, consistancy between browsers.

# Handling errors

Missing fields, incorrect values,
Spam

How to display error? pop-up? top of form? next to the field? How to phrase them?

# Handling success

How to display success? replace the form by a thank you message? next action? eg share?

# Make it fast (or give that feeling): Ajax submission

# One last thing

Improving the way you ask the consent: going from checkboxes to radios
Make it easier to the user: pre-select the country based on the IP address
native validation HTML5
pre-fill from autoComplete
pre-fill from url

# Ongoing journey

AB testing 

