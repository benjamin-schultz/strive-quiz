# Guilty Gear Strive Character Quiz

<head><script type="text/javascript" src="questions.js"></script></head>

## Questions

### 1 - What's most important to you?
<input type="radio" id="1_one_thing" name="most_important"> 
<label for="1_one_thing">Doing one thing and doing it well</label><br>
<input type="radio" id="1_tools" name="most_important">
<label for="1_tools">Having tools for every situation</label><br>
<input type="radio" id="1_emotions" name="most_important">
<label for="1_emotions">How well I emotionally connect with my character</label><br>
<input type="radio" id="1_aesthetics" name="most_important">
<label for="1_aesthetics">Aesthetics/feeling suitably rewarded when I perform well</label><br><br>


### Skipping character specific questions atm

### 2 - What sort of moral system do you like in a character?
<input type="radio" id="any_good" name="moral_system" checked>
<label for="2_any_good">Any sort of "good". I don't really enjoy playing as assholes </label><br>
<input type="radio" id="chaotic_good" name="moral_system">
<label for="2_chaotic_good">Good intentions that bend rules to accomplish their goals. Like either Chaotic Good or a jerk with a heart of gold.</label><br>
<input type="radio" id="pure_good" name="moral_system">
<label for="2_pure_good">I like pure "good" or heroic characters, not the morally grey sort</label><br>
<input type="radio" id="neutral" name="moral_system">
<label for="2_neutral">I like neutral characters</label><br>
<input type="radio" id="evil" name="moral_system">
<label for="2_evil">I love to play the villain!</label><br>
<input type="radio" id="no_opinion" name="moral_system">
<label for="2_no_opinion">I have no strong feelings one way or another</label><br><br>

### 3 - Do you have a character gender preference?
<input type="radio" id="strongly_male" name="gender">
<label for="3_strongly_male">Strongly male</label><br>
<input type="radio" id="male" name="gender">
<label for="3_male">Male</label><br>
<input type="radio" id="female" name="gender">
<label for="3_female">Female</label><br>
<input type="radio" id="strongly_female" name="gender">
<label for="3_strongly_female">Strongly Female</label><br>
<input type="radio" id="subversive" name="gender">
<label for="3_subversive">I like gender subversive or androgynous characters</label><br>
<input type="radio" id="none" name="gender">
<label for="3_none">None. Please don't factor gender into my result</label><br><br>

### 4 - When in a match, whats your favourite thing to do?
<input type="radio" id="4_pressure" name="favourite">
<label for="4_pressure">Keeping the pressure on my opponent</label><br>
<input type="radio" id="4_outmanoeuvering" name="favourite">
<label for="4_outmanoeuvering">Outmanoeuvering my foe</label><br>
<input type="radio" id="4_mindgames" name="favourite">
<label for="4_mindgames">Mindgames!</label><br>
<input type="radio" id="4_combos" name="favourite">
<label for="4_combos">Executing the right combos in the right situations</label><br>
<input type="radio" id="4_none" name="favourite">
<label for="4_none">None of the above/I haven't played any fighting games yet</label><br><br>

### 5 - Whats the most important or enjoyable quality in a character for you?
<input type="radio" id="5_damage" name="important">
<label for="5_damage">Damage. Everything else is secondary</label><br>
<input type="radio" id="5_health" name="important">
<label for="5_health">Health Points. I want to last long in combat</label><br>
<input type="radio" id="5_mobility" name="important">
<label for="5_mobiliy">Mobility. I like going fast or enjoy unconventional movement options</label><br>
<input type="radio" id="5_utility" name="important">
<label for="5_utility">Utility. Give me a lot of tricks, tools and options to play with</label><br>
<input type="radio" id="5_all_rounder" name="important">
<label for="5_all_rounder">I would prefer to play an all-rounder</label><br><br>

### 6 - Do you have fun when zoning?
<input type="radio" id="6_very_yes" name="zoning">
<label for="6_very_yes">Yes! Very much so</label><br>
<input type="radio" id="6_yes" name="zoning">
<label for="6_yes">Yes</label><br>
<input type="radio" id="6_no" name="zoning">
<label for="6_no">No/no preference</label><br>
<input type="radio" id="6_very_no" name="zoning">
<label for="6_very_no">Hell NO</label><br><br>

### 7 - Do you have fun playing with a rushdown playstyle?
<input type="radio" id="6_very_yes" name="rushdown">
<label for="6_very_yes">Definitely!</label><br>
<input type="radio" id="6_yes" name="rushdown">
<label for="6_yes">I do</label><br>
<input type="radio" id="6_no" name="rushdown">
<label for="6_no">No/no preference</label><br>
<input type="radio" id="6_very_no" name="rushdown">
<label for="6_very_no">I hate rushdown gameplay</label><br><br>

### 8 - Do you enjoy playing the one player game?
    - I love getting opponent into a situation where they cannot really do anything
    - I am fine with doing it sometimes, if the need arises
    - I would rather play a more footsies/neutral/two player game
    - No preference

    
<button id="get_results" onclick="get_results()">Get Results</button>
<br>
<label id="results_label">Results go here</label>
<br>