const expancaoDeBotoes = document.addEventListener("DOMContentLoaded", function () {

  // váriveis de cada botão
    const toggleButtonPromo = document.querySelector(".combosPromo-toggle");
    const combosPromoOptions = document.querySelector(".combosPromo-options");
    const toggleButtonAcai = document.querySelector(".acai-toggle");
    const acaiOptions = document.querySelector(".acai-options");
    const toggleButtonCombinacoes = document.querySelector(".combinacoes-toggle");
    const combinacoesOptions = document.querySelector(".combinacoes-options");
    const toggleButtonAcaiZero = document.querySelector(".acaiZero-toggle");
    const acaiZeroOptions = document.querySelector(".acaiZero-options");
    const toggleButtonMilkShake = document.querySelector(".milkshake-toggle");
    const milkShakeOptions = document.querySelector(".milkshake-options");
    const toggleButtonSalada = document.querySelector(".salada-toggle");
    const saladaOptions = document.querySelector(".salada-options");
    const toggleButtonBolos = document.querySelector(".bolos-toggle");
    const bolosOptions = document.querySelector(".bolos-options");
    const toggleButtonSobremesa = document.querySelector(".sobremesa-toggle");
    const sobremesaOptions = document.querySelector(".sobremesa-options");
    const toggleButtonBrownie = document.querySelector(".brownie-toggle");
    const brownieOptions = document.querySelector(".brownie-options");
    const toggleButtonBebidas = document.querySelector(".bebidas-toggle");
    const bebidasOptions = document.querySelector(".bebidas-options");

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