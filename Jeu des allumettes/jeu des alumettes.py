#Consigne : https://github.com/adatechschool/Exercices-individuels-Dorothy-Vaugan-Nantes/blob/master/07_jeu_des_allumettes.md

#ETAPE 1 :
matches = 50

def removeMatch(chooseNumber):
   remainingMatches = matches - chooseNumber
   print(remainingMatches)

removeMatch(2)

remainingMatches = matches - removeMatch()       