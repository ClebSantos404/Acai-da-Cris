const expancaoDeBotoes = document.addEventListener("DOMContentLoaded", function () {

  // váriveis de cada botão
    var toggleButtonPromo = document.querySelector(".combosPromo-toggle");
    var combosPromoOptions = document.querySelector(".combosPromo-options");
    var toggleButtonAcai = document.querySelector(".acai-toggle");
    var acaiOptions = document.querySelector(".acai-options");
    var toggleButtonCombinacoes = document.querySelector(".combinacoes-toggle");
    var combinacoesOptions = document.querySelector(".combinacoes-options");
    var toggleButtonAcaiZero = document.querySelector(".acaiZero-toggle");
    var acaiZeroOptions = document.querySelector(".acaiZero-options");
    var toggleButtonMilkShake = document.querySelector(".milkshake-toggle");
    var milkShakeOptions = document.querySelector(".milkshake-options");
    var toggleButtonSalada = document.querySelector(".salada-toggle");
    var saladaOptions = document.querySelector(".salada-options");
    var toggleButtonBolos = document.querySelector(".bolos-toggle");
    var bolosOptions = document.querySelector(".bolos-options");
    var toggleButtonSobremesa = document.querySelector(".sobremesa-toggle");
    var sobremesaOptions = document.querySelector(".sobremesa-options");
    var toggleButtonBrownie = document.querySelector(".brownie-toggle");
    var brownieOptions = document.querySelector(".brownie-options");
    var toggleButtonBebidas = document.querySelector(".bebidas-toggle");
    var bebidasOptions = document.querySelector(".bebidas-options");

    // botão de combos promocionais
    toggleButtonPromo.addEventListener("click", function () {
      if (combosPromoOptions.style.display === "none") {
        combosPromoOptions.style.display = "block";
      } else {
        combosPromoOptions.style.display = "none";
      }
    });

    // botão de açaí tradicional
    toggleButtonAcai.addEventListener("click", function () {
      if (acaiOptions.style.display === "none") {
        acaiOptions.style.display = "block";
      } else {
        acaiOptions.style.display = "none";
      }
    });

    // botão de combinações perfeitas
    toggleButtonCombinacoes.addEventListener("click", function () {
      if (combinacoesOptions.style.display === "none") {
        combinacoesOptions.style.display = "block";
      } else {
        combinacoesOptions.style.display = "none";
      }
    });

    // botão de açaí zero
    toggleButtonAcaiZero.addEventListener("click", function () {
      if (acaiZeroOptions.style.display === "none") {
        acaiZeroOptions.style.display = "block";
      } else {
        acaiZeroOptions.style.display = "none";
      }
    });

    // botão de milkshake
    toggleButtonMilkShake.addEventListener("click", function () {
      if (milkShakeOptions.style.display === "none") {
        milkShakeOptions.style.display = "block";
      } else {
        milkShakeOptions.style.display = "none";
      }
    });

    // botão de salada
    toggleButtonSalada.addEventListener("click", function () {
      if (saladaOptions.style.display === "none") {
        saladaOptions.style.display = "block";
      } else {
        saladaOptions.style.display = "none";
      }
    });

    // botão bolos
    toggleButtonBolos.addEventListener("click", function () {
      if (bolosOptions.style.display === "none") {
        bolosOptions.style.display = "block";
      } else {
        bolosOptions.style.display = "none";
      }
    });

    // botão sobremesa
    toggleButtonSobremesa.addEventListener("click", function () {
      if (sobremesaOptions.style.display === "none") {
        sobremesaOptions.style.display = "block";
      } else {
        sobremesaOptions.style.display = "none";
      }
    });

    // botão brownie
    toggleButtonBrownie.addEventListener("click", function () {
      if (brownieOptions.style.display === "none") {
        brownieOptions.style.display = "block";
      } else {
        brownieOptions.style.display = "none";
      }
    });

    // botão bebidas
    toggleButtonBebidas.addEventListener("click", function () {
      if (bebidasOptions.style.display === "none") {
        bebidasOptions.style.display = "block";
      } else {
        bebidasOptions.style.display = "none";
      }
    });
  }
);