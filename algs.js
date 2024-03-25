data = [
	/*[["", "Sune easy"],
		["", "Sune Diag"],
		["", "Sune Niklas Diag"],
		["", "Sune Niklas"],
		["", "Sune Opposite"],
		["", "Sune Opp/Opp"],

		["", "Anti easy"],
		["", "Anti Diag"],
		["", "Anti Niklas Diag"],
		["", "Anti Niklas"],
		["", "Anti Opposite"],
		["", "Anti Opp/Opp"],

		["", "Pi easy"],
		["", "Pi Diag"],
		["", "Pi Bars"],
		["", "Pi Schach"],
		["", "Pi DL"],
		["", "Pi DR"],

		["", "U easy"],
		["", "U RU"],
		["", "U Bars"],
		["", "U Opp"],
		["", "U B"],
		["", "U F"],

		["", "L left"],
		["", "L right"],
		["", "L Diag"],
		["", "L RU"],
		["", "L Top Equal ADJ"],
		["", "L Top Equal Opp"],

		["", "T right"],
		["", "T left"],
		["", "T doof"],
		["", "T RU"],
		["", "T Opp"],
		["", "T PLL"],

		["", "H easy"],
		["", "H Diag"],
		["", "H kurz"],
		["", "H lang"],

		["", "Adjacent swap"],
		["", "Diagonal Swap"],
		["", "Solved"]],
	[
		["","Hammer Long Opp"],
		["", "Hammer Long Adj"],
		["","Hammer Short Opp"],
		["","Hammer Short Adj"],
		["","Hammer Mixed Opp"],
		["","Hammer Mixed Adj"],

		["","Spaceship (Long) RU"],
		["","Spaceship Long"],
		["","Spaceship Diag Opp"],
		["","Spaceship Diag Adj"],
		["","Spaceship Mixed Opp"],//Recog Sune
		["","Spaceship Mixed Adj"],

		["","&Gamma; Skip"],
		["","&Gamma; Diag"],
		["","&Gamma; Left"],
		["","&Gamma; Right"],
		["","&Gamma; Front"],
		["","&Gamma; Back"],

		["","Windmill 1 / 4-Face RU"],
		["","Windmill 2 / 4-Face Diag"],
		["","Windmill 3 / 4-Face Adj"],

		["","2-Face RU"],
		["","2-Face Diag"],
		["","2-Face Left"],
		["","2-Face Right"],

		["","Galapagos Turtle"],
		["","Box Turtle"],
		["","Wood Turtle"],
		["","Sea Turtle"],
		["","Mud Turtle"],
		["","Slider Turtle"],

		["","&beta; Long"],
		["","&beta; Long"],
		["","&beta; Short"],
		["","&beta; Short"],
		["","&beta; Diag"],
		["","&beta; Diag"],

		["","Gun RU"],
		["","Gun Diag"],
		["","Gun Left"],
		["","Gun Right"],
		["","Gun Front"],
		["","Gun Back"]
	],*/
[

	],
	[ 
	],
	[
	],
	[
	],
	[
	],
	[
	],
	[	
	],
	[	
	],
	[
	],
	[
	],
	[	
	],
	[	
	],
	[	
	],
	[	
	],
	[//U-FH
		["R U2' R' U R' U' R2 U R' U' R", "Sune easy","F2 R U R U2 R2 F' U R"],//R U2 R' U2 R U2 R' U' R2 U' R
		["R' U' R F' U' F R2", "Sune Diag"],
		["R2 U' R2 U' R U' R' F R' F'", "Sune Niklas Diag"],//R' F U2 R' U' F U R' F;R' F U2 F R U R' F' R2 F;R2 F R' F' U2 R2 F R' F'; OppF: U' R2 F R' U' R2 U' R; OppR: U' F2 R U' R' U2 R' F
		["R F R' F' R U2' R' U R", "Sune Niklas"],//R2 U R' U2 R F' U' F; F' U2 F R2 U R U2 R; R2 U R' U2 R F' U' F
		["R U' R2 F R' F' R U' R2", "Sune Opposite", "R2 U R2 F' U' F U2 R"],
		["R' U' F' U' F R' U R'", "Sune Opp/Opp", "R U' R2' F R' F' R U' R2", "F R F' U2 R' U2 R' U R'"],

		["R' U2 R U' R U R2 U' R U R'", "Anti easy"],//R' F R' F2 U2 F U' R2
		["R U R' F R F' R2", "Anti Diag", "R2 U' F R F' R U2 R'"],
		["R2 F2 R U R' U2 F U' R2", "Anti Niklas Diag"],//bad; R F2 U' R U R2 U F'
		["R2' U' R U2 R' F R F'", "Anti Niklas", "R F R' F' R U2' R' U R"],//F R2 F' R2 U' R' U2 R'
		["R2 U' R2 F R F' U2 R'", "Anti Opposite"],
		["R U F R F' R U' R", "Anti Opp/Opp","F' U' F U2 R U2 R U' R"],//F' U R2 F2 R F' R F R' as x U' B R2 U2 ... x'

		["R2 U R' U R' U R", "Pi easy"],//R2 U2 R' U R2 U2 R'
		["F' U R' U2 F R F R", "Pi Diag","F2 R U' R2 U2 R' F R2"],
		["R' F R' F' U' R' U2 R'", "Pi Bars"],
		["R U2 R2' F' R' U' R U' F", "Pi Schach"],
		["F' U' F R2 U R' U2' R", "Pi DL"],
		["R U' R' U' R2 U' F R F'", "Pi DR", "F R F' R2 U' R U2 R'"],//R2 F' U' F R U' R2 U' R'

		["R F R' F U2 R' U' R U' F2", "U easy"],//R2 F R F' R U' R F' U2 F R2
		["R2 U R2' U2 R", "U RU", "R2' U' R2 U2' R'"],
		["F' U' F R2 U2 R' U R", "U Bars","F R F' R2' U2' R U' R'"],
		["(y') R2 U' R2 U R2 B2 U' B", "U Opp"],
		["R' F2 R' U' R2 U R' F", "U B", "R2 U' R2 U R' F R' F' R"],//lots of meh algs
		["R' F R' F' R U' R' U R'", "U F", "R F R' F' R U R' U2 R"],

		["F' U' R' F U' R U' F R2", "L left"],
		["F R U R' F U' R F' R2", "L right"],//ksolved
		["R2 U' R2 U' F R' F' R'", "L Diag"],//optimizable, lots of choices
		["R U2 R U2 R' U R2 U R'", "L RU", "R U' R U R' U2 R U' R U R'"],
		["F' U2 F R U R U' R", "L Top Equal ADJ"],//F' U2 F R U R U' R;R F R2 F' R U' R;F' U R' U' R U2 F R'
		["R' F' U2 F R' U R'", "L Top Equal Opp", "R' U R' F' U' F R2 U2 R'"],

		["R2 U' R U2 F' U' F", "T right", "R F U2 R' U' R' F2 R2"],
		["R2 U R' U2 F R F'", "T left"],
		["F' U' F R2 U' F R F'", "T doof"],//R' U2 R F' U' F2 R F' R
		["R2 U2 R U R' U R U' R' U R'", "T RU"],//R U' R2 F U2 F R2 U' F;R2 U R' U2 R U2 R U2 R'
		["F' R' U' R U' F R2", "T Opp"],
		["R F R' F' R2 U' R2 F' U' F R2", "T PLL"],//to optimize; F' R' F U' F' R U' F R2; R2 U' F R U2 R' F R U F'?

		["R F R' F' R U' F R F'", "H easy"],
		["R2 U R' U R' F' U F R", "H Diag"],//R2 U R2 F' U2 F U2 R; R2 U R' U F U R U' F'
		["R' F U R U' R' U2' R2' F", "H kurz"],
		["R' F U2' F R2 F", "H lang"],

		["R2 U' F2 R U2 R U2 R' F2", "Adjacent swap", "R2 F' R2 F' R2 F R2 U' R2"],
		["F R F R' U' R F2 R2", "Diagonal Swap"],
		["F2 R2 U' R' U R' F U' R", "Solved", "R2 U R2 F2 R U R' F U' R"]
	],
	[//FH-U
		["R' F R2 F' U' R2", "Sune easy"],//R2 U' F' U2 F R'
		["R2 U' R U R2 U' R U' R", "Sune Diag"],//R U' R' F U2 F' R2 F
		["F R2 F' U2 R U' R", "Sune Niklas Diag"],
		["L' U L U2 R U' R F", "Sune Niklas"],
		["R U' R U2 F' U2 F", "Sune Opposite"],
		["F R F2 L' U2 B2 L F", "Sune Opp/Opp", "F R U2 F2 R F2 R F"],//not good; R U R2 U' R U2 R' U' F R' F';F R F2 R' F2 U2 R F

		["R2 U F R2 F' R", "Anti easy"],//R F' U2 F U R2 is bad
		["R2 U R' U' R2 U R' U R'", "Anti Diag"],
		["F' U2 F U2 R' U R'", "Anti Niklas Diag"],
		["F' R2 U' R' U' F' R U R", "Anti Niklas", "F R F' U2 R U R U2 R", "F' R' U R' U2 R' F' R"],
		["R' U R' U2 F R2 F'", "Anti Opposite"],
		["R' F R' F' U2' R2' F R2 F'", "Anti Opp/Opp"],//bad; F' L' B2 U R' U' R2 U R; (x) U' R' U2 R' U2 B2 R' U' (x');   F' U2 F R' F R U2 R2 F

		["R' U' F R' F' R' U' R2 U' R'", "Pi easy", "F2 R U R' F R F' U' F R2"],//R2 F2 R F R' F U F R'
		["(y') F2 U' R' F2 R2 U R' U' F' (y)", "Pi Diag"],//R2 U R' F R2 F2 U' F R;R' U' F R2 F2 U' F U' R2;R F R' F2 U2 F R' U R2;R F' U2 F2 R F' R' U R2;R' U2 R U' R U R' U R U' R U2 R
		["R' F R F' R' U R'", "Pi Bars"],
		["F' U2 R' U R' F U2 R' F'", "Pi Schach"],
		["R' U' R' U2' R' F R2 F'", "Pi DL"],
		["R' F' U F R U' R U' R", "Pi DR", "F R2 F' R2 U R U R2"],

		["R U R2 U' R2 U R2 U' R2 U R'", "U easy"],
		["R' U' R2 U2 R2 F' U F R", "U RU"],//R' U' F U2 R2 U' F R
		["(y') R F2 R2 U2 R (y)", "U Bars", "y' F R U' R' F R U' R' F R U' R' y"/*.49*/],//y' R F2 U2 R2 U2 R' y
		["R U' F' U2 R U' R' F' R2 F'", "U Opp"],//F R F' R U' R F' U2 F
		["y L' F2 L U' L U' L'", "U B","R F' U' R2 F U2 F'"],//R' U R' F' R2 F' R2 F; somewhat optimizable
		["R' F R U2 F' R2 F", "U F"],

		["R F' U F R2 U2 R' U R'", "L left"],
		["R' F R' F' R2 U2 R U' R", "L right"],//R' F R U2 R2 F R' U' R
		["R' U R2' U' R", "L Diag", "R U' R2 U R'"],
		["R F' U' F R2 U2' F R2 F'", "L RU", "F' U R' F2 U' R F U2 R' U"],//R2 U' R2 U' R2 U R' F' U' F R2; F' U R' F' U2 R F U' R2 U
		["(y') R U R' U R' F2 R (x y')", "L Top Equal ADJ"],
		["F' R2 F U2' R' F' R", "L Top Equal Opp"],//F' R' U R' F U2 F'

		["R' U R' U2 R2 F R F' R", "T right"],
		["R U' R U2 R2 F' U' F R'", "T left"],
		["R2 F' U' R2 F' R2 U' F R2", "T doof", "R U R' U R U2 R2 U R2 U' R"],
		["R' F' U' F R2 U2 R2 U R", "T RU"],
		["R F' U F U' R' U R U2 R2", "T Opp"],//R F' U F U' R' U R U2 R2 bad
		["R2 F R2 F' R2", "T PLL"],

		["R' F R U2 R2 U F R'", "H easy"],
		["R U R2 U R2 U R", "H Diag"],
		["F' U' R2 F U' F U' R2 F'", "H lang", "F' U2 F2 R2 F' R U2 R2"],
		["F R F' U' R U' R", "H kurz", "R U' R F R' F' R"],

		["R' F2 U R2 U' F2 R", "Adjacent swap"],//or EG1
		["R2 U R' U2 R' U2 R' U R2", "Diagonal Swap"],
		["x2 F R U R' U2 F' R U' R' F (x2)", "Solved"]
	],
	[//T-FH
		["R U' R' U R2 U' R' U R' U2 R", "Sune easy", "R' U2 R U' R U' R' U R2 U' R'"],//R U' R2 U' R' U2 R U2 R' U2 R; R2 U F R' F2 U2 F R
		["R2 F R' F' R U' R'", "Sune Diag", "R U2 R' F R' F' U R2"],
		["R U2 F R' F' R2 U R2", "Sune Niklas Diag"],
		["F R' F' R U2' R' U R2", "Sune Niklas", "R U2 R U R2 F R2 F'"],
		["R' F' U' F U2 R' F R2 F' R'", "Sune Opposite", "F U' R2 U' R' U F2 R'"],//y' x' R' F' R U' R U' R' F2 U (x) (y)
		["R' U R' F R' F' U' R'", "Sune Opp/Opp", "y F R U R' U2 R U R' F R U' R'", "R2' U' R F' U' F R2 U' R"],

		["F' R U' R' F2 R' U R2", "Anti easy", "y F' R U R' F' R U2 R' U' R U R'"],//or some 2gen alg like R2 U R2 U2 R' U2 R U' R2 U2 R; R' U' F R2 U2 R' U' R' F2
		["R2 F' U F R' U R", "Anti Diag", "R U2 R2 F R F' R' U R2"],//there are similar good algs
		["F R' F' U' R' U' R2 U' R2", "Anti Niklas Diag"],//R' U' R2' F R F' U2 R2
		["R' U' R U2 R' F R F' R'", "Anti Niklas", "R U R2 F' U' F R' U2 R2"],
		["F R F' R U R' U R2 U R2", "Anti Opposite", "F' R U' F2 R U' R2 F2"],
		["R2 U R' F R F' R2 U R'", "Anti Opp/Opp", "R' U' R2 U2 R2 F R F' R U R2"],//R2' U' F R2 F' U R' U' R2

		["R U R' U R' U R2", "Pi easy", "R U2 R2 U' R U2 R2"],
		["R2 F' R' U2 R2 U' R' F2", "Pi Diag"],//R2 F U F2 U2 F R F2
		["F U2 F R2 F R'", "Pi Bars", "y' x' R F2 R U2 R U' x y"],
		["F' R2 U2 R U R' U' F' R", "Pi Schach", "R' U' R2 U' R2 F R F' R' U' R"],//R2 U F R2 U2 F' U2 F'
		["F R' F' U2 R U R' U2 R2", "Pi DL", "F R' F' U2 R U R U2 R2"],//(U) R' U' F2 R F' R' F2 U2 R2; (U') R' U R2 U R U2 R2 F R F'
		["R' U2 R U' R2 F' U F", "Pi DR"],//R' U' R2 U' R F R' F' R2

		["R U R' U R' F R F' R' U R2", "U easy", "R' U' R U' R F' U' F R U' R2"],//R2 U R' F' U' F R2 U' F R' F'
		["R' U R' U' R U R' U R U2 R2", "U RU", "R2 U2 R' U2 R U2 R2 U' R2"],//R F' U' R2 F2 U2 F' R
		["R U R' U2' R2 F R' F'", "U Bars"],
		["y F2 R U' R' U' R' F' R", "U Opp", "B2 R' U R U R B R'"],//R2' F' U R' U R F
		["R' U R' F R2 F' R'", "U B"],//R' U R' U' R' F' U2 F
		["R U' R F' U2 F R", "U F", "R2 U R U R' U' F R2 F'"],

		["F R' F' U2 R U' R2", "L left"],
		["F' U F U2 R' U R2", "L right", "R2 F2 R U R U2 F' R'"],//R U2 F R F' R2 U R2'
		["R' F' U' F U' R2 U' R2", "L Diag", "F2 R2 U R' U R' U' F R2"],//R F R F' U R2 U R2; R2 U' R2 F2 R U R' U' F R2
		["(x') R2 U R' U2 R' U' R U (x)", "L RU", "R U' R' U R' U2 R U' R' U R'"],//R U' R2 U' R U2 R U2 R2 U2 R; (U) R' U R2 U R' U2 R U2 R
		["R' F R F' R U' R2 U R2", "L Top Equal ADJ"],
		["R' U2 R U' R' F R F' R'", "L Top Equal Opp", "R U' R U R' F R F' R"],

		["(y) F' U R' F' R2 U R' F' (y')", "T right", "R2 F2 U' R' U R2 F' R'"],
		["(y) F U' R U R2 F' R F (y')", "T left", "R U' F R F2 U' F R"],//bad, R2 F2 U F R' U2 F R
		["(y) R' F R U' F2 R U' R (y')", "T doof", "R' U2 R U' F R F' R U' R2"],
		["R' U2 R2 U' R2", "T RU", "R U2 R2 U R2"],
		["R U2 R' F R F' U R U2 R", "T Opp"],//R U' R2 F2 U R2 U' F2
		["F' R U' R U' R2 F' R2 F'", "T PLL", "R U' R2 F R2 F' U R' U2 R"],

		["R U' R' U R' U R' U2 R'", "H easy"],
		["R' F' U' F R U' R U' R2", "H Diag"],
		["R U2 F R2 F' R2 U R2", "H kurz"],
		["R U2' R U F R F' R", "H lang"],//R' U2 R' U' F' U' F R', other r also good

		["R' F R' F' U2 R U' R U R'", "Adjacent swap"],
		["(y) R' F R F R' F R2 U' R' (y')", "Diagonal Swap", "R2 F2 R F' R' F U F"],
		["R' U F' R U' R U R2 F2", "Solved"]
	],
	[//FH-T
		["R' F R' F' R U' F R' F' R", "Sune easy"],
		["R' U2 R U2 R' U R U' R'", "Sune Diag"],//R' U2 R' U2 R2 U R' U R
		["(x) R U' R2 U R2 U (x')", "Sune Niklas Diag"],
		["R' F' U2 F R U R'", "Sune Niklas", "R' U R U' R' F' U2 F"],
		["(y') R U2 R U2' R' F (z')", "Sune Opposite"],
		["F' U' F U' R U R' U' R", "Sune Opp/Opp", "R U' R' U R U' F R' F'"],//U2 R' U2 R U R' F R F' R U R2; F' R U' R' F U' F U' R; 

		["R2 F' R U' F R' F2 R", "Anti easy"],
		["R U R' U' R U2 R' U2 R", "Anti Diag"],
		["(y') B' R U2 R' U2 R' (y)", "Anti Niklas Diag"],
		["R U' R' F' U2 F R", "Anti Niklas"],//R U2 R' F' U' F U' R
		["(x) U' R2' U' R2 U R' (x')", "Anti Opposite"],
		["F R F' U R' U' R U R'", "Anti Opp/Opp"],

		["R' F' U' R U' R' F2", "Pi easy", "R2' F R F' U' R' F R F'"],//R' F R F2 U2 F R
		["R2 U R' U R U2' R2' U R", "Pi Diag"],
		["R' U2 R2 F R F' R U' R' U R'", "Pi Bars"],//F' U' F U' R U' F R2 F'; F R2 F' R U2 R U' R2 U' R2
		["R2 U' R' U R U' F R' F' R", "Pi Schach"],//F2 R U' R' F U R' F2 R2
		["F R F' U2' R' F' U2' F", "Pi DL"],
		["(y') R' U' R U R' U2 R B (y)", "Pi DR"],

		["F2 R U R' F U R", "U easy", "R' U R U' R U R' U R U2 R2"],//F' U' R2 F' R2' U' F
		["F' U R' F2 R U2 F U R", "U RU"],
		["F2 R F2 R' F2", "U Bars"],
		["R' F R' F' R U2 F' U F", "U Opp"],
		["R' U' R U R2 F R F'", "U B"],
		["R U R' F R' F' R2", "U F"],

		["(y') B' R U' R U' R' U R'", "L left"],
		["(y') R2' U' R2 U R2' U' F (z')", "L right"],
		["F2 R2 U' R' U R' F R2 U' R", "L Diag"],//R2 U R' U R' U R2 U' R2 U R'; 
		["R' F R2 U R' F U' F' R", "L RU","R' F R2 F' U' R' U2 R2 U R2","R' F R2 F' R U R' U R' U' R"],
		["F R' F' R2 U' R' U R", "L Top Equal ADJ"],
		["R2' F R F' R U' R'", "L Top Equal Opp"],

		["R2 F R F' U R U2 R'", "T right", "R' D R2 U' R2 U R2"],
		["F R' F' R2 U2 R' U2 R", "T left", " R D' R2 U R2 U' R2"],
		["R' U R2 U R2 U' R2", "T doof", " R U' R2 U' R2' U R2"],
		["R' F R F' U R U' F R' F'", "T RU", "R2 F' R U' F U R' F R"],
		["F' U' F U2 R' F R F' R", "T Opp"],//F R F' U2 R F' U' F R'
		["R' F R' F' R2 U R' F' U2 F", "T PLL"],//R2 F2 R U2 R2 F2 R F2 R2

		["R' U2 F2 R F2 R' F2 R'", "H easy"],//F' U2 R' F R F R U R' U' R
		["R' U2 R U2 R' U2 R U2 R'", "H Diag", "R U2 R' U2 R U2 R' U2 R"],
		["R' F R F' U2 R U R' U' R", "H lang"],//R2 F2 R U' F' R U R' F2
		["R2' F' R F R' F R2 U R' F'", "H kurz"],//F' U2 F U' R U' F R' F'

		["R U' R' U R' F R F' R", "Adjacent swap"],
		["R U R' U' R U' R' U R", "Diagonal Swap", "R U2 R U2 R' U2 R'", "R' U2 R' U2 R U2 R"],
		["F' R F U2 F2 R F R' F", "Solved"]],//R' U' F R' F2 R F' U' F2
	[//++FH
		["F R2 U2 R' U' R' F2 R'","Hammer Long Opp"],
		["R' U R U R2 F' U F", "Hammer Long Adj", "R2 U2 R2 F R F' R U R U'"],
		["R' F R2 F' R' U' R'","Hammer Short Opp","R' U' R' F' U2 F R'"],
		["R U' R2 U2 F R2 F'","Hammer Short Adj"],
		["F' U2' F R2 U' R2' U' R'","Hammer Mixed Opp","R F R' F' U R U' R2' U R'"],
		["F R2 F' R U' R2'","Hammer Mixed Adj"],

		["F R2 F' U' R' F R F' R'","Spaceship (Long) RU","R' U' F' U2 F2 R F' R'"],
		["R U R2' U2 F R F' R","Spaceship Long"],
		["F' U2 F R2 U2 R2 U R","Spaceship Diag Opp","(y') R' U2 R U2' (y) R2' U' R", "(x') U' F2 R2 U' F R (x)"],
		["F R F' U' R U2' R' U R2","Spaceship Diag Adj","R' U' F R2 U' F R F2 R"],
		["(y') B R U R' U' R' F2 (z2)","Spaceship Mixed Opp","R U' F' U' F U R2"],//Exec like y'x D x' R U...
		["F R2 U R' U' F' R U' R2","Spaceship Mixed Adj","R2 U' F R F' U2 R U R'"],//F R U' R' U R2 U F2 R'

		["R2 U' R' U R' U' R2","&Gamma; Skip"],
		["R' F R2 F' R U' R2 U R","&Gamma; Diag"],
		["R F R' U2' F2 R2 F","&Gamma; Left"],//very unsafe
		["R F R' F' R U' R2' U R'","&Gamma; Right","R U' R U' F R F' R U R'"],
		["F R F' U R U' R2","&Gamma; Front"],
		["F U2 F2 R2 U' F R","&Gamma; Back"],

		["R2 U R U R2' U R","Windmill 1 / 4-Face RU"],
		["y R' U R U' y' R2 U' F R F'","Windmill 2 / 4-Face Diag","R U' R2' U' F R U R' U' R F'"],
		["R2 U R' U2 R F R' F' R","Windmill 3 / 4-Face Adj"],//R' U2 F R2 F' R U' R'

		["R2' U' R U2 R U R'","2-Face RU","R' U R U2 R U' R2"],
		["R' F' U F2 R F' R'","2-Face Diag"],
		["R' F R' F' R' U' R2","2-Face Left","R U' R2 F' U F R'"],
		["R F2 R U' F U2 R' F","2-Face Right","R' F' U' F R2 U' F R F' R"],

		["R' F R' U' F R F U2 F","Galapagos Turtle"],
		["R' U' R2 U' R2 F R2 F'","Box Turtle"],
		["R2' U' R F' U2' F","Wood Turtle"],
		["R2 F' R' U' F R U' F R","Sea Turtle"],
		["R F R F' R U2 R U R","Mud Turtle"],
		["F R' U2 F R2 U' F","Slider Turtle"],

		["R U' R U' R","&beta; Long","R2 U R' U2' R2 U R'"],
		["R U' R' F R F' U' R' F R' F'","&beta; Long"],
		["F2 R F' R' F2 R2 U2 R","&beta; Short"],
		["R' U' R2 U' R2 U' F R' F'","&beta; Short"],
		["F' U' F2 R F' R' U R'","&beta; Diag","y' R' U' R2 B R' y R' U R'"],
		["R U' F2 R F' R' F2 R2","&beta; Diag"],

		["R' U R' U R2 U R' U R'","Gun RU", "(y) F' U R U' R' U R U' R' F (y')"],
		["R U' R U2 F' U F R","Gun Diag"],
		["F' U' F R2 U' R2 U R'","Gun Left","R2 U' R' F' U' F R'"],
		["(x) U' R U' R U R' U R x' U' R","Gun Right"],
		["F R U' R U F2 R'","Gun Front","F' U' F2 R2 F' U' R2"],
		["R' U' R2 U' F R F' R","Gun Back","F R F' R U' R' U R2 U' R'"]
	],
	[//FH++
		["R2 U2 R U' R2 F R F' R2","Hammer Long Opp"],
		["R' U R' F R F'", "Hammer Long Adj","F R' F' U R'"],
		["R' U' F2 R U R' F","Hammer Short Opp"],
		["R' U F' U2 R' F R F","Hammer Short Adj"],
		["R F' R F' R' U' F2 R2","Hammer Mixed Opp"],
		["R U2 R' U2 F R F' U' R2","Hammer Mixed Adj"],

		["R U' R U' F U2 R2 F R'","Spaceship (Long) RU"],
		["R' U F' U' F","Spaceship Long"],
		["R' U2 F' U F R U' R'","Spaceship Diag Opp"],
		["R' U2 R2 U' R' F R' F'","Spaceship Diag Adj"],
		["F' U' F2 U2 F R2 F","Spaceship Mixed Opp"],//Recog Sune
		["R2 U2 R' U2 R U' R U2 R'","Spaceship Mixed Adj"],

		["F U' R' F' R' F","&Gamma; Skip"],
		["F' R U' R' F2 U2 R' U R'","&Gamma; Diag"],
		["R2 F2 R F' R' F2 R","&Gamma; Left"],
		["R' F R U2 R2 F2 R F'","&Gamma; Right"],
		["F2 U R' U' F2 U2 R'","&Gamma; Front"],
		["F' U' F' R2 F' R2 F2","&Gamma; Back"],//R F2 R' U' R F2 R2

		["R' U2 R F R' F' R'","Windmill 1 / 4-Face RU"],
		["R' F2 U2 F R' F' R U2 F2","Windmill 2 / 4-Face Diag"],
		["R2 F R F' U2 F' U F","Windmill 3 / 4-Face Adj"],

		["R F R F' U R' U2 R' U R'","2-Face RU"],
		["R2 U' R2 U R' U R2 U' R2","2-Face Diag"],
		["R' F2 U R' F R U2 F'","2-Face Left"],
		["R U2 R U2 F' U' F R'","2-Face Right"],//R U2 R2 F R' F' U2 R2

		["R' F U2 R2 F U' R U' R","Galapagos Turtle"],
		["R' F R' F' U2 R2 U R' U R","Box Turtle"],
		["F2 U R U' F2 U' R'","Wood Turtle"],
		["R2 F R' F' R F R2 F'","Sea Turtle"],
		["R' U2 R U' R'","Mud Turtle","R' U' R U2 R'"],
		["R' U R U2 F R F' U R'","Slider Turtle"],

		["R' U' F R U2 R2 F R","&beta; Long 1"],
		["R2 U R2 F' U2 F2 R F' R2","&beta; Long 2"],
		["F U2 R2 F R' U2 R","&beta; Short 1"],
		["R U R2 F' U2 F U' R2","&beta; Short 2"],
		["R2 F' R' U2 R U' F U' R","&beta; Diag 1"],
		["R U2 R' F U2 R2 F","&beta; Diag 2"],

		["R' U' F' U F U' R U2 R'","Gun RU", "(y) F' R U R' U' R U R' U F (y')"],
		["R' U R' U2 R' U2 R","Gun Diag"],
		["R F' U' F R' U R U' R'","Gun Left"],
		["R' F R' F' U2 R U2 R","Gun Right"],
		["R' F' R F2 R' F2 R' F","Gun Front"],
		["R2 F2 R F2 R' F2 R2 U' R'","Gun Back"]
	],
	[//--FH
		["R F2 R U R U2 R2 F'","Hammer Long Opp"],
		["R' F' U F R U' R2 U R'", "Hammer Long Adj"],
		["R F' U2 F R U R","Hammer Short Opp"],//R U R F R2 F' R
		["F' U2 F R' U R2","Hammer Short Adj"],
		["R' F R' F' U2 R2 U' R'","Hammer Mixed Opp"],
		["R' U' F R2 F' U2 R2","Hammer Mixed Adj"],

		["R' U' R2 U R2 U' R2 U R' U R'","Spaceship (Long) RU"],
		["F R U2 F R2 F U' R2","Spaceship Long "],//optimizable
		["F U2 R2 F U' R'","Spaceship Diag Opp"],
		["F' U' F U R' U2 R U' R2","Spaceship Diag Adj"],
		["R2 U R' F U R U' R2 F'","Spaceship Mixed Opp"],//bad
		["R' U F R F' U' R2","Spaceship Mixed Adj"],//R' U R2 U' F' U F

		["R2 U R U' R U R2","&Gamma; Skip"],
		["R' F R2 F' R' U2 R U' R","&Gamma; Diag"],
		["F' R2 U2 R' F2 U2 F R'","&Gamma; Left"],//bad
		["R2 U R' U' F R' F'","&Gamma; Right"],
		["R U' R2 U R' F R F' R'","&Gamma; Front"],
		["R' F' U' R2 F2 U2 R2 F'","&Gamma; Back"],

		["R' U' R2 U' R' U' R2","Windmill 1 / 4-Face RU"],
		["F2 R U' R2 U R' F2 R U2 R","Windmill 2 / 4-Face Diag"],//F' U R F' U2 R' U R F';F R' F' U R2 U F' U' F;F' U2 F U R F' U2 F U R
		["R U R' F R2 F' U2 R","Windmill 3 / 4-Face Adj"],

		["R2 U R' U2 R' U' R","2-Face RU"],
		["R F R' F2 U' F R","2-Face Diag"],
		["F' R2 U' R2 U' F' R2","2-Face Left"],
		["R' U R2 F R' F' R","2-Face Right"],

		["R' U R2 U' R' U R' U2 R U' R","Galapagos Turtle","R F' U2 F2 R F' U R"],//optimizable
		["R' F' U' F R2 U' R' U' R2","Box Turtle"],
		["F' U' R2 F U2 R' F'","Wood Turtle"],
		["R2 U' F' R' U' F2 R F","Sea Turtle"],
		["R2 U R' F R2 F'","Mud Turtle"],
		["R U R2 U R2 F' U2 F","Slider Turtle"],

		["R' U R' U R'","&beta; Long 1"],
		["R2 U' R U R' U F R2 F' R","&beta; Long 2"],//F2 R F' U' F R2 U2 R' F;R F2 U R' U2 R' U2 R' U' F';R' U' F R' F' R U2 R' U R';R F' U2 F U R' U R U' R2
		["R' U2 R2 F2 R F R' F2","&beta; Short 1"],
		["F' U2 R' U R2 U' R' F2 R","&beta; Short 2"],
		["R F2 U2 R U R' U R2 F'","&beta; Diag 1"],
		["R2 F2 R F R' F2 U R'","&beta; Diag 2"],

		["R F R' F' R F R' F'","Gun RU"],
		["R' U R' U2 F R' F' R'","Gun Diag"],
		["R F2 U' R' U R' F'","Gun Left"],//R F R' F' U' F' U' F R
		["F R F' R2 U R2 U' R","Gun Right"],
		["F' U' F2 R F' U' R","Gun Front"],
		["F2 R2 U R' U' F U R' F2","Gun Back"]
	],
	[//FH--
		["R' F R F' U F R' F' R2","Hammer Long Opp"],
		["F' R F R F' R U' R' F", "Hammer Long Adj"],//F' U F U' R' U2 R U2 R2; R' U2 R' F R' F' U' R2
		["F' R U' R' F2 U R","Hammer Short Opp"],
		["R F' R' U' R F2 R F'","Hammer Short Adj"],//R' U2 R U2 R2 U F R' F'
		["F' U F U' R","Hammer Mixed Opp"],
		["R U' F R2 U R' U' F'","Hammer Mixed Adj"],

		["R' U R' U F' R2 U2 F' R","Spaceship (Long) RU"],
		["R U' F R F'","Spaceship Long "],
		["R U2 F R' F' R' U R","Spaceship Diag Opp"],
		["(x) U R2 U' R' U R U' R2 (x')","Spaceship Diag Adj"],
		["R U2 R' U R' U2 R' U2 R2","Spaceship Mixed Opp"],//Recog Sune
		["F' R U' F U R U2 F'","Spaceship Mixed Adj"],

		["F' R F R U F'","&Gamma; Skip"],
		["F' R U' R U' R2 F2 U' R'","&Gamma; Diag"],//2gen???
		["(x) U R U R2 U R2 U2 (x')","&Gamma; Left"],
		["R U2 F2 U R U' F2","&Gamma; Right"],
		["F R' F2 R2 U2 R' F' R","&Gamma; Front"],
		["R2 F2 R' U R F2 R'","&Gamma; Back"],//R U2 R2 F' U F R2 U R'

		["R U2 R' F' U F R","Windmill 1 / 4-Face RU"],//F' R' F R F U2 R
		["F2 U2 R' F R F' U2 F2 R","Windmill 2 / 4-Face Diag"],
		["F R' F' R2 U F R' F'","Windmill 3 / 4-Face Adj"],

		["(x) U' B U R U' R2 U' R2 U (x')","2-Face RU"],
		["R2 U R2 U' R U' R2 U R2","2-Face Diag"],
		["R' U2 R' U2 F R F' R","2-Face Left"],
		["R F' R U2 R' F U R' F2","2-Face Right"],

		["F U' R U2 R' F R' F R2","Galapagos Turtle"],
		["R U2 R' U R","Box Turtle"],//R U R' U2 R other orientation
		["R2 U R' F' U' F R2 U' R'","Wood Turtle"],//R2 U2 R' F R F' R2 U2 R'
		["F R F' R U R2 U2 R","Sea Turtle"],
		["(y') R2 U' R' U R2 U B (y)","Mud Turtle"],
		["R2 F2 U R F R' F R'","Slider Turtle"],

		["R' F' R2 U2 R' F' U R","&beta; Long 1"],
		["R2 F' U2 F2 R F' R2 U' R2","&beta; Long 2"],
		["R' U2 R F' R2 U2 F'","&beta; Short 1"],
		["F' R2 U R' U' R2 U F2 R","&beta; Short 2"],
		["F R' F' R2 U2 F R2 F'","&beta; Diag 1"],
		["F' R2 U2 F' R U2 R'","&beta; Diag 2"],

		["R U F R' F' U R' U2 R","Gun RU"],
		["R' U2 R U2 R U' R","Gun Diag"],
		["R2 U2 F R' U2 R2 F R","Gun Left"],//R2 U2 F R F' R2 U2 R'
		["F' R U' F2 U F' R U' F2","Gun Right"],//bad
		["F U2 R' F' R U' F2 R","Gun Front"],
		["F' R2 U2 R' F' R2 U2 R'","Gun Back"]//secure alternative F' R2 U2 R U2 R2 F R
	],
	[// TEG1+
		["R' F2 R U' R' U' R2 U' R' F R'","Hammer Long Opp"],//F R' F' U2 R' U' F R' F' R
		["R U' R U' R F' U' F R", "Hammer Long Adj"],//F' U' F R U' R U' R U' R
		["R' U' R2 U R' U' R2","Hammer Short Opp"],
		["F R U' F R F2 R'","Hammer Short Adj", "F R U2 F' R2 F R"],
		["F R' F' U' R' U2 R U R'","Hammer Mixed Opp",],//R2 U F' U F R' U2 R2
		["F R2 F' U' R U2 R U2 R2","Hammer Mixed Adj","R2 U' R U F R F' R U R'","R2 U' R2 F R F' U F R F'","F R2 F' U' R U2 R' U2 R2"],

		["R F R F' R U' R2","Spaceship (Long) RU"],
		["R' U R U2 R' U' F' U' F","Spaceship Long","R2 U2 R' F R F' U R2"],
		["R' F R F' R U2 R U' R2","Spaceship Diag Opp"],//R U' R' F R' F2 U F
		["R' U R' U2 R U2 R F' U2 F","Spaceship Diag Adj"],
		["R2 F2 R U R' F R2 U' R'","Spaceship Mixed Opp","R U' R2 U R2 U R' U R'"],//Recog Sune
		["R' F R' F' R2 U' R'","Spaceship Mixed Adj"],

		["R' U R U' R' F R U2 R2 F R","&Gamma; Skip"],
		["R U R' U R U' R U' R2","&Gamma; Diag","R' U R U2 R' U R U2 R'"],
		["R U R' F' U' F R2 U' R2'","&Gamma; Left"],
		["R' F' U F","&Gamma; Right","F R F' R'"],
		["R2 F' U' R2 U2 R' F' R2","&Gamma; Front","R U2 R' F R U2 R2 U F"],
		["F U2 R2 U' F R U2 R","&Gamma; Back","R2 U' R' U R U' F' U' F"],

		["R F' U' F R' F R' F' R","Windmill 1 / 4-Face RU"],
		["R2 U2 R U2 R' U R U' R2","Windmill 2 / 4-Face Diag"],
		["R' F R F' R2 U2 R' U R2","Windmill 3 / 4-Face Adj","F' U' F R2 U' R U' R"],

		["(y) B R' U2 R' U R B' R (y')","2-Face RU","R' F2 U' R U R' U F2"],
		["R' U R U R'","2-Face Diag"],
		["F R F' U2 R' U' R U' R'","2-Face Left"],//R' U' F' U' F U R U' R'
		["R' U F2 R2 U' R' F R' F2","2-Face Right","R' U R2 U R2 F2 R F R' F2"],

		["R2 U' R2 F U R U' F'","Galapagos Turtle","R2 U' R F' U F R"],
		["R' U R' U R' U' R U' R2 U R'","Box Turtle"],//F2 U2 F' R F R' U2 F2 R'
		["F R U R' U' R F' R'","Wood Turtle"],
		["R2 F2 R U' F R U2 R' F","Sea Turtle"],
		["(x) U' R2' U R2 U B R' (x')","Mud Turtle"],
		["R F R' F' R U' R U' R","Slider Turtle"],//R2 F R2 F' U R' F R2 F'

		["R' U2 R2 U' F R' F' U2 R","&beta; Long 1"],//R U2 R2 U F R' F' U2 R
		["R2 U R' U2 R U' R","&beta; Long 2","R U' R U2 R' U R2"],
		["R2 U2 R U2 R2 F R F' R'","&beta 1; Short","R2 U2 R' U2 R F' U F"],
		["F R' F U2 F R U2 F2","&beta; Short 2"],//R U' R2 F U F2 U' R F';R U' R U' R2 U F R2 F'
		["R2 U R' F' R2 U2 B (z')","&beta; Diag 1"],
		["F R F' R U2 R' U2 R2","&beta; Diag 2"],

		["R2 U' R F R' F' R U R","Gun RU"],
		["R' U2 R U2 R' U R' U2 R U2 R","Gun Diag"],//R2 F2 R U R' F R U R U2 R'
		["F R2 F' U' R'","Gun Left","F' R' U2 R F R'"],
		["R' F' R U' R' F R' F R F","Gun Right"],//rotate
		["(x) R' U R' U' R2 U R' U' R' (x')","Gun Front","x R2 U' R' U2 R' U2 R2 U x'"],
		["R2 F2 R F R U' R2 F2 R","Gun Back"]
	],
	[//TEG1-
		["R' U2' F R F' R2","Hammer Long Opp"],
		["F R2 U R' F' R U' R F'", "Hammer Long Adj"],
		["R' F U2 F R2 U' F R","Hammer Short Opp"],
		["R2 U R2 U2 R F' U' F R","Hammer Short Adj"],
		["R' F R F' U R2 U' R2","Hammer Mixed Opp"],
		["R' F' U2 F R2 U' R","Hammer Mixed Adj"],

		["R' F2 R2 U2 R U R B2 (z2)","Spaceship (Long) RU"],
		["R2 U R' U R2 U R2","Spaceship Long","R2 U R2 U R' U R2"],
		["R2 U2 R' F' U F2 R F' R","Spaceship Diag Opp"],
		["R F' U F2 R F' U2 R2","Spaceship Diag Adj"],
		["R F R' F' R' U2 R2 U' R2","Spaceship Mixed Opp"],//Recog Sune
		["F' U R' F2 U R F U R'","Spaceship Mixed Adj"],

		["R' U R' U' F' U' F R2","&Gamma; Skip"],
		["R U2 R U' R2 U R' U R","&Gamma; Diag"],
		["R U' F U2 F' U2 F' R' (rotate)","&Gamma; Left"],//bad
		["R2 F2 R F' R F' R2 F2","&Gamma; Right"],
		["R' U2 R2 F R F' R U2 R","&Gamma; Front"],
		["R2' U' R2 U' R2' F R F' R","&Gamma; Back"],

		["F' U R' F2 R F2 R F' R'","Windmill 1 / 4-Face RU"],
		["R U2 R U' R U2 R","Windmill 2 / 4-Face Diag","R' U' R U2 R U R2 U2 R"],
		["F R U2 F2 R2 U' F","Windmill 3 / 4-Face Adj"],

		["R2 U R2 U F R' F' U R2","2-Face RU"],
		["F R' F2 U F U' F R F'","2-Face Diag"],//bad
		["R2 U' R U' R' F R F' R","2-Face Left"],
		["F' U' F U2 R2 U' R2","2-Face Right"],

		["R' F R2 U' R U F2","Galapagos Turtle"],
		["R2 U' R2 U' F R2 F'","Box Turtle"],
		["R U' R2 F R2 F' R'","Wood Turtle"],
		["F' R2 U2 F2 R U' R' F2","Sea Turtle"],
		["R2 U2 R' U' R2 U R' U R2","Mud Turtle"],
		["R U R2 U F R' F' U R","Slider Turtle"],

		["F' R2 U R' F' R U2 F'","&beta; Long 1"],
		["R U2 R U2 R' U R U' R","&beta; Long 2"],
		["F' R' F2 U2 R U' F","&beta; Short 1"],
		["F U' R U2 R U' F2 R2","&beta; Short 2"],//R U' R U2 R F' U F R2
		["R' U' F' U' F R2 U' R","&beta; Diag 1"],
		["R' F U F2 R2 U' R F'","&beta; Diag 2"],

		["R F' R2 F U' R F U' F'","Gun RU"],
		["R U' R' U R2 U' R2","Gun Diag"],
		["R2 F U2 F R F' R F","Gun Left"],
		["R2 U' R2 U2 F R' F'","Gun Right"],
		["R U R2 U2 R U' F R' F' R","Gun Front"],
		["R2 F' R2 F' R2 F R U' R'","Gun Back"]
	],
	[//TEG2+
		["R2 F R' F' U2 R","Hammer Long Opp"],
		["F R2 F' U R2 U R2", "Hammer Long Adj"],
		["F2 R U R' F U2 R' U R'","Hammer Short Opp"],
		["R F R2 F' R2 U R'","Hammer Short Adj"],
		["R2 U' R' F R F' R U2 R2","Hammer Mixed Opp"],
		["R2 U' R2 U2 R' F R F' R'","Hammer Mixed Adj"],

		["F2 U' R' U R2 F' R","Spaceship (Long) RU"],
		["R2 F R F' R' U2 R' U' R2","Spaceship Long"],
		["R' F' U2 F U2 R' U R2","Spaceship Diag Opp"],//F R2 F' R' U R' U R2
		["(x) R U R2 U' R U R' U' R (x')","Spaceship Diag Adj"],
		["R2 U' R2 U' R U' R2","Spaceship Mixed Opp"],//Recog Sune
		["R' F R' F' U2 R F R' F' R2","Spaceship Mixed Adj"],

		["R U' R U F R F' R2","&Gamma; Skip"],//R2 F' U F U R U' R
		["R U2 R' U R' U' R2 U2 R'","&Gamma; Diag"],
		["F R' U2 R F2 U' R F","&Gamma; Left"],//optimizable
		["R' U' R2 U2 R' U' F R2 F'","&Gamma; Right"],
		["(x) U2 R2 U R' U R' U2 R2 (x')","&Gamma; Front"],
		//["        ","&Gamma; Back"],

		["F R' U R2 U' F2 U' F R","Windmill 1 / 4-Face RU"],
		["R' U2 R' U R' U2 R'","Windmill 2 / 4-Face Diag"],
		["R' U2 R F' U' F R2 U' R'","Windmill 3 / 4-Face Adj"],

		["R2 U' F R F' U' R2 U' R2","2-Face RU"],
		["F2 R2 U' R' U R' F R U R'","2-Face Diag"],//R' U2 R' U' R2 U2 R U2 R' U2 R
		["F R F' U2 R2 U R2","2-Face Left"],
		["(y') R2 U' R2 U R2 (y) R' U R'","2-Face Right"],

		["R F' U2 R F' U' F2","Galapagos Turtle"],
		["R2 U R' U2 R U R2 U' R2","Box Turtle"],
		["R' U' F R F' U' R2 U' R'","Wood Turtle"],
		["F R' F2 U' F R2 U2 R'","Sea Turtle"],
		["R' U R2 F' U2 F R","Mud Turtle"],
		["F U2 R2 U' F R' U' R2","Slider Turtle"],//R2 U R2 D R' U2 R

		["R U R' U R F' U' F R2","&beta; Long 1"],
		["R' U R' U' R U2 R' U2 R'","&beta; Long 2"],
		["R F' R' U2 F2 R U' F","&beta; Short 1","F' U R' U2 F2 R F"],
		["R' U' F R' U2 R2 F U' R","&beta; Short 2"],//rather bad
		["R' U R' U2 R' F R' F' R2","&beta; Diag 1"],
		["R2 U2 F R' F' U R' U' R2","&beta; Diag 2"],//bad

		["F R2 F' U2 R F' U2 F R","Gun RU"],
		//["        ","Gun Diag"],
		//["        ","Gun Left"],
		["R U R' F R' F' R U R' U R2","Gun Right"],
		["R2 F R' F' R U2 F R F'","Gun Front"],
		["F2 U' F R' U R F' R2","Gun Back"]//R2 U2 R2 U' R2 U2 F' U F; R2 U2 R U' R2 U F' U2 F
	],
	[//TEG2-
		["R' F R2 F' R' U2 R2 U R'","Hammer Long Opp"],
		["R' U' R F R' F' R2 U R2","Hammer Long Adj","R2 U' F R' F' R U2 R2"],
		["R2 U R U' R2' U R","Hammer Short Opp","R2 U R2 U R U2 R'","R U R' U R U R' U' R"],
		["F R' F' U' R2 U' R' U2 R2","Hammer Short Adj","F' U' F2 R F' R U R'"],
		["R' U R' U R' F R F' R'","Hammer Mixed Opp"],
		["F' U' R U' R' F2 R","Hammer Mixed Adj"],

		["R' F' U' F R' U R2","Spaceship (Long) RU"],
		["R U' R U' R2 U' R2 U R'","Spaceship Long"],
		["R U R2 F R F' R","Spaceship Diag Opp","(x') R U' R U R2' F' R (x)"],
		["R2 F2 U R' U' F2 R2 U2 R","Spaceship Diag Adj"],
		["R2 U2 R' F U2 R2 F U R","Spaceship Mixed Opp"],//Recog Sune
		["R2 U R2 U' R' F R F'","Spaceship Mixed Adj"],

		["R F' U2 F R U2 R U R'","&Gamma; Skip"],
		["R' F' R F' U' F2 R","&Gamma; Diag"],
		["F' R2 U2 R F' R' U2 R'","&Gamma; Left"],
		["R2 F R' U2 R2 U' F R2","&Gamma; Right"],
		["R F R' F'","&Gamma; Front","(y) F R U' R' (y')","F' U' F R"],
		["R' U2 R' F' U' F U2 R2","&Gamma; Back"],

		["R' F R F' R F' U F R'","Windmill 1 / 4-Face RU"],
		["R2 U R' U' R U2 R U2 R2","Windmill 2 / 4-Face Diag"],
		["F R F' R2 U R' U R'","Windmill 3 / 4-Face Adj"],

		["F' R F' U' F U2 F R'","2-Face RU"],//bad
		["R' U' R' U R2", "2-Face Diag", "R U' R' U' R"],
		["F R2 F2 R' F2 R F R2","2-Face Left"],
		["F2 U F2 U2 F' R' F R2","2-Face Right"],

		["R2 U R' F R' F' R'","Galapagos Turtle"],
		["R' F' U F R' U R' U R'","Box Turtle","R' U R' U2 R2 U' R2 F' U2 F"],
		["(y') R U2 R' U2 R' U' F (x') (y)","Wood Turtle","R F2' R' F' U R' F'"],//F U2 F' U2 F' U' R
		["R' U R' U2 R2 U' F' U' F R'","Sea Turtle"],
		["F2 U2 F R' F' R U2 F2 R","Mud Turtle"],//bad
		["F' U' R' F R U' F R","Slider Turtle"],

		["R' U2 F R F' U' R2 U2 R'","&beta; Long 1"],//wrong alg
		["R' U R' U2 R U' R2","&beta; Long 2"],
		["(y) F U R U' R' U R U2 R' (y')","&beta; Short 1","F' U' F R' U2 R' U2 R2"],
		["F U2 R2 F R U' R2","&beta; Short 2"],
		["F' U F' U2 F U2 F2 R","&beta; Diag 1"],
		["R2 U2 R' U2 R' F R' F'","&beta; Diag 2"],

		["R F U' R' U' R U R' F'","Gun RU"],
		["R2 F2 U F R' F R2 U' R","Gun Diag"],
		["F R' F' U' R2 U R2","Gun Left","(y) F U R U2 R' (y')"],
		["F2 R F' R U R2 F2 U' R","Gun Right"],
		["F R' F U' F2 U F2 R2","Gun Front"],
		["R' F R F' U R U R' U R","Gun Back"]
	],
	[//<R2,F2,U,D> with 1x2x2 Block on DL
		["F' R U' R' F U2 F R U R'", "0LS0 Skip Skip"],
		["R' F R F' R' F R F' R' F R F'", "0LS0 Skip Y"],
		["R2 U' F2 U R2 U' F2", "0LS0 Skip Right"],
		["R2 U R2 U' R2", "0LS0 Skip Back"],
		["(y') R2 U' R2 U R2", "0LS0 Skip Left"],
		["F2 U R2 U' F2 U R2 U", "0LS0 Skip Front"],
		["","00LS-1a Skip Skip"],
		["","00LS-1a Skip Diag"],
		["R2 U R2","00LS-1a Skip Left"],
		["","00LS-1a Skip Front"],
		["","00LS-1a Skip Right"],
		["","00LS-1a Skip Back"],
		["","00LS-1b Skip Skip"],
		["","00LS-1b Skip Diag"],
		["R2 U' R2","00LS-1b Skip Left"],
		["","00LS-1b Skip Front"],
		["","00LS-1b Skip Right"],
		["","00LS-1b Skip Back"],
		["R U R' F' R U R' U' R' F R2 U' R'","PLL Adj"],
		["F R U' R' U' R U R' F' R U R' U' R' F R F'","PLL Opp"],
		["R2 U R2 U' R2 U R2 U' R2","Ortega Opp/Adj"],
		["F2 U' R2 U2 F2 U' F2","Ortega Adj/Adj"],
		["(U2) R2","Top Bar: Triple Line"],
		["x D2 R U R' D2 R U' R (x')","Top Bar: Opp/Skip"],
		["R' U R' F' R U R' U' R' F R2 U' R'","Top Bar: Skip/Opp"],
		["","Top Bar: Opp/Opp"],
		["R F R' F2 R U' R' F2 R2","Top Bar: Chaos 1"],
		["","Top Bar: Chaos 2"],
		["","Top AntiBar: Triple Line"],
		["","Top AntiBar: Opp/Skip"],
		["y' R2 U' B2 U2 R2 U' R2 (y)","Top AntiBar: Skip/Opp"],
		["R2' U' R2 U R2 U' R2","Top AntiBar: Opp/Opp", "R2 U R2 U' R2 U R2 U R2"],
		["R2 F2 U R2 U' F2 U2 R2","Top AntiBar: Chaos 1"],
		["F2 U R2 U R2 U2 F2","Top AntiBar: Chaos 2"],
		["R2 U' R2 U' R2","Top Diag: 1","R2 U R2 U R2"],
		["","Top Diag: 2"],
		["","Top Diag: 3"],
		["","Top Diag: 4"],
		["","Top Diag: 5"],
		["F2 U2 R2 U' R2 U' F2 R2","Top Diag: 6", "F2 U' R2 U R2 U F2 R2"],
	]
];