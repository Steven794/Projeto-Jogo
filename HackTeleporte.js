
/*
 * HACK DE TELEPORTE — BITSY TUXEDO
 * Versão inicial: estado, direção e configuração.
 */

(function () {
    "use strict";

    // CONFIGURAÇÕES
    var teleportOptions = {
        distance: 3,
        key: "e"
    };

    // ESTADO DA HABILIDADE
    var teleportUnlocked = false;
    var teleportReady = true;

    // Direção inicial caso o jogador ainda não tenha se movido.
    var facing = {
        x: 1,
        y: 0
    };

    // Desbloqueia a habilidade.
    window.unlockTeleport = function () {
        teleportUnlocked = true;
        console.log("Teleporte desbloqueado!");
    };

    // Consulta o estado da habilidade.
    window.isTeleportUnlocked = function () {
        return teleportUnlocked;
    };

    // Consulta a direção atual.
    window.setTeleportDirection = function (x, y) {
        if (x !== 0 || y !== 0) {
            facing.x = x;
            facing.y = y;
        }
    };

    // A função de teleporte será conectada à movimentação do Bitsy na próxima etapa.
    window.teleportOptions = teleportOptions;

})();