// Envoie de formulaire
window.onload = function () {
  document
    .getElementById("formulaire")
    .addEventListener("submit", function (e) {
      let lastName = document.querySelector("#lastName").value;
      let firstName = document.querySelector("#firstName").value;
      let telephone = document.querySelector("#tel").value;
      let email = document.querySelector("#email").value;
      let iWant_1 = document.querySelector("#iWant_1").checked;
      let iWant_2 = document.querySelector("#iWant_2").checked;
      let iWant_3 = document.querySelector("#iWant_3").checked;
      let iWant_4 = document.querySelector("#iWant_4").checked;
      let iWant_5 = document.querySelector("#iWant_5").checked;
      let iWant_6 = document.querySelector("#iWant_6").checked;
      let message = document.querySelector("#message").value;

      let prep = iWant_1 ? " L’accompagnement “INDÉ” m’intéresse, je voudrais en discuter." : " Pas coché ";
      let prep_2 = iWant_2 ? " L’accompagnement “COLLAB”, je voudrais en discuter. " : " Pas coché ";
      let prep_3 = iWant_3 ? " Je suis intéressé mais j’ai besoin d’être orienté. " : " Pas coché ";
      let prep_4 = iWant_4 ? "Autre" : " Pas coché ";
      let prep_5 = iWant_5 ? " Je souhaite être contacté par mail. (Pensez à surveiller vos spams.) " : " Pas coché ";
      let prep_6 = iWant_6 ? " Je souhaite être contacté par téléphone. " : " Pas coché ";

      let template_params = {
        name: firstName,
        nom: lastName,
        phoneNumber: telephone,
        email: email,
        prerempli: prep,
        prerempli_2: prep_2,
        prerempli_3: prep_3,
        prerempli_4: prep_4,
        prerempli_5: prep_5,
        prerempli_6: prep_6,
        message: message,
      };
      e.preventDefault();
      emailjs.send("service_khlnuya", "template_8yvw5yd", template_params).then(
        function (response) {
          alert( "Le formulaire à bien été envoyé \n \nPage d'Accueil cliquer sur ' OK ' ");
          location.href = "http://127.0.0.1:5500/";
          console.log("SUCCESS!", response.status, response.text);
          console.log("function éxecuté");

        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
