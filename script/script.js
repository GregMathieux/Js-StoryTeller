

  //                             #
 //#####    ##    ####  ######  ##
 //#    #  #  #  #    # #      # #
 //#    # #    # #      #####    #
 //#####  ###### #  ### #        #
 //#      #    # #    # #        #
 //#      #    #  ####  ###### #####

function page1(){
var prenom = prompt("Quel est votre prénom ?");
alert("Bienvenus a toi : " + prenom + " je me prénomme Zat");
var spannom = document.getElementById('spannom');
spannom.innerHTML = prenom;
}


 //                             #####
 //#####    ##    ####  ###### #     #
 //#    #  #  #  #    # #            #
 //#    # #    # #      #####   #####
 //#####  ###### #  ### #      #
 //#      #    # #    # #      #
 //#      #    #  ####  ###### #######

function page2(){
  var renom = prompt("Pourais tu me rappeler ton prénom stp ?")
  var spanrenom = document.getElementById('spanrenom');
  spanrenom.innerHTML = renom;

  var cause = prompt ("Pourrais tu me dire pour quel motif tu te retrouve ici avec moi ?");
  var spancause = document.getElementById('spancause');
  spancause.innerHTML = cause;
}


//                              #####
 //#####    ##    ####  ###### #     #
 //#    #  #  #  #    # #            #
 //#    # #    # #      #####   #####
// #####  ###### #  ### #            #
// #      #    # #    # #      #     #
// #      #    #  ####  ######  #####
function page3(){
  var job = prompt("Quel métier veux tu exercé au paradis");
  var spanjob = document.getElementById('spanjob');
  spanjob.innerHTML = job;
}
//                             #
// #####    ##    ####  ###### #    #
// #    #  #  #  #    # #      #    #
// #    # #    # #      #####  #    #
// #####  ###### #  ### #      #######
// #      #    # #    # #           #
// #      #    #  ####  ######      #

function page4(){
  var oublie = prompt("Quel seras la seul est unique chose que tu souhaite oublier de ta vie sur terre ?");
  var spanoublie = document.getElementById('spanoublie');
  spanoublie.innerHTML = oublie;
}
