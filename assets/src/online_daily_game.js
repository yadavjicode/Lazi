"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var diceStatus = true;
var scoreTexts = [];
var currentDiceValue = 0;
var userDataPlayer = []
var userToken = '1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea';

alert("Hello Daily");

var players = {
    0: { homeTokens: 0, kills: 0, totalScore: 0, flag: 0, tidScores: { 0: 0, 1: 0, 2: 0, 3: 0 } },
    1: { homeTokens: 0, kills: 0, totalScore: 0, flag: 0, tidScores: { 0: 0, 1: 0, 2: 0, 3: 0 } },
    2: { homeTokens: 0, kills: 0, totalScore: 0, flag: 0, tidScores: { 0: 0, 1: 0, 2: 0, 3: 0 } },
    3: { homeTokens: 0, kills: 0, totalScore: 0, flag: 0, tidScores: { 0: 0, 1: 0, 2: 0, 3: 0 } }
};



function initialPlayerScore(player) {


    players[player].homeTokens = 0;
    players[player].kills = 0;
    players[player].totalScore = 0;
    players[player].flag = 0;
    for (let i = 0; i < 4; i++) {
        players[player].tidScores[i] = 0;
        //alert(players[player].tidScores[i]);
    }



}

function updateScore(player, tokensHome = 0, kills = 0, totalScore = 0, ktid = 1000) {
    //alert(player);
    if (!players[player]) {
        console.error("Invalid player!");
        return;
    }
    if (ktid >= 0 && ktid != 1000) {
        //alert(player);
        //alert(ktid);
        //alert(players[player].totalScore);
        //alert(players[player].tidScores[ktid]);
        players[player].totalScore = players[player].totalScore - players[player].tidScores[ktid];
        players[player].tidScores[ktid] = 0;

    }

    /* if(totalScore == 6 && players[player].flag == 0){
    players[player].flag = 1;
    }
    */

    //players[player].homeTokens += tokensHome;
    //players[player].kills += kills;
    //players[player].totalScore +=  totalScore;

    // Example scoring logic:
    // 10 points for each token home, 5 for each kill
    players[player].totalScore = players[player].totalScore + totalScore + tokensHome;
    //let total = `total score: ${players[player].totalScore}`
    //tokensHome = 0;
    //kills = 0;
    //alert(total);
    //const scoreValue = 0;


}
function updateScoreWithTid(player, tid, totalScore = 0) {
    //alert(player);
    if (!players[player]) {
        console.error("Invalid player!");
        return;
    }

    //alert(player);

    //alert(totalScore)
    //players[player].homeTokens += tokensHome;
    //players[player].kills += kills;
    //alert(totalScore);
    players[player].tidScores[tid] += totalScore;
    //alert(players[player].tidScores[tid]);
    // Example scoring logic:
    // 10 points for each token home, 5 for each kill
    //players[player].totalScore = Number(players[player].totalScore + tokensHome + kills);
    //let total = `total score: ${players[player].totalScore}`
    //tokensHome = 0;
    //kills = 0;
    //alert(total);
    //const scoreValue = 0;


}


var Ludo_Wild;
(function (Ludo_Wild) {

    let connectionTimerId;
    Ludo_Wild.INITIAL_BONUS = 500;
    Ludo_Wild.boardCenter = 592;
    Ludo_Wild.menuButtonYBoundaryMin = 640;
    Ludo_Wild.menuButtonYBoundaryMax = 1060;
    let LANGUAGES;
    (function (LANGUAGES) {
        LANGUAGES[LANGUAGES["EN_US"] = 0] = "EN_US";
        LANGUAGES[LANGUAGES["HINDI"] = 1] = "HINDI";
    })(LANGUAGES = Ludo_Wild.LANGUAGES || (Ludo_Wild.LANGUAGES = {}));
    let FONTS;
    (function (FONTS) {
        FONTS[FONTS["ENGLISH"] = 0] = "ENGLISH";
        FONTS[FONTS["CUSTOM"] = 1] = "CUSTOM";
    })(FONTS = Ludo_Wild.FONTS || (Ludo_Wild.FONTS = {}));
    let trackType;
    (function (trackType) {
        trackType[trackType["POCKET"] = 0] = "POCKET";
        trackType[trackType["NORMAL"] = 1] = "NORMAL";
        trackType[trackType["HOMERUN"] = 2] = "HOMERUN";
        trackType[trackType["HOME"] = 3] = "HOME";
        trackType[trackType["POWER"] = 4] = "POWER";
    })(trackType = Ludo_Wild.trackType || (Ludo_Wild.trackType = {}));
    let colorType;
    (function (colorType) {
        colorType[colorType["WHITE"] = 0] = "WHITE";
        colorType[colorType["RED"] = 1] = "RED";
        colorType[colorType["GREEN"] = 2] = "GREEN";
        colorType[colorType["BLUE"] = 3] = "BLUE";
        colorType[colorType["YELLOW"] = 4] = "YELLOW";
        colorType[colorType["HOME"] = 5] = "HOME";
    })(colorType = Ludo_Wild.colorType || (Ludo_Wild.colorType = {}));
    let tokenState;
    (function (tokenState) {
        tokenState[tokenState["INACTIVE"] = 0] = "INACTIVE";
        tokenState[tokenState["ACTIVE"] = 1] = "ACTIVE";
        tokenState[tokenState["HOME"] = 2] = "HOME";
    })(tokenState = Ludo_Wild.tokenState || (Ludo_Wild.tokenState = {}));
    let tokenHealth;
    (function (tokenHealth) {
        tokenHealth[tokenHealth["NORMAL"] = 0] = "NORMAL";
        tokenHealth[tokenHealth["POWERFUL"] = 1] = "POWERFUL";
    })(tokenHealth = Ludo_Wild.tokenHealth || (Ludo_Wild.tokenHealth = {}));
    let PlayerID;
    (function (PlayerID) {
        PlayerID[PlayerID["ONE"] = 0] = "ONE";
        PlayerID[PlayerID["TWO"] = 1] = "TWO";
        PlayerID[PlayerID["THREE"] = 2] = "THREE";
        PlayerID[PlayerID["FOUR"] = 3] = "FOUR";
    })(PlayerID = Ludo_Wild.PlayerID || (Ludo_Wild.PlayerID = {}));
    let BootTable;
    (function (BootTable) {
        BootTable[BootTable["BRONZE"] = 0] = "BRONZE";
        BootTable[BootTable["SILVER"] = 1] = "SILVER";
        BootTable[BootTable["GOLD"] = 2] = "GOLD";
        BootTable[BootTable["PLATINUM"] = 3] = "PLATINUM";
        BootTable[BootTable["DIAMOND"] = 4] = "DIAMOND";
    })(BootTable = Ludo_Wild.BootTable || (Ludo_Wild.BootTable = {}));
    let gameMode;
    (function (gameMode) {
        gameMode[gameMode["SINGLE_PLAYER"] = 0] = "SINGLE_PLAYER";
        gameMode[gameMode["MULTIPLAYER_ONLINE"] = 1] = "MULTIPLAYER_ONLINE";
        gameMode[gameMode["MULTIPLAYER_OFFLINE"] = 2] = "MULTIPLAYER_OFFLINE";
        gameMode[gameMode["RANDOM_ONLINE"] = 3] = "RANDOM_ONLINE";
        gameMode[gameMode["ONLINE_BATTLE"] = 4] = "ONLINE_BATTLE";
        gameMode[gameMode["FAKE_RANDOM_ONLINE"] = 5] = "FAKE_RANDOM_ONLINE";
    })(gameMode = Ludo_Wild.gameMode || (Ludo_Wild.gameMode = {}));
    let MatchType;
    (function (MatchType) {
        MatchType[MatchType["FRIENDS"] = 0] = "FRIENDS";
        MatchType[MatchType["RANDOM"] = 1] = "RANDOM";
    })(MatchType = Ludo_Wild.MatchType || (Ludo_Wild.MatchType = {}));
    let gameScenes;
    (function (gameScenes) {
        gameScenes[gameScenes["BOOT"] = 0] = "BOOT";
        gameScenes[gameScenes["HOME"] = 1] = "HOME";
        gameScenes[gameScenes["LOBBY"] = 2] = "LOBBY";
        gameScenes[gameScenes["FRIENDS_LOBBY"] = 3] = "FRIENDS_LOBBY";
        gameScenes[gameScenes["LEADERBOARD"] = 4] = "LEADERBOARD";
        gameScenes[gameScenes["GAMEPLAY_SCREEN"] = 5] = "GAMEPLAY_SCREEN";
        gameScenes[gameScenes["MULTIPLAYER_ONLINE"] = 6] = "MULTIPLAYER_ONLINE";
        gameScenes[gameScenes["PROFILE"] = 7] = "PROFILE";
        gameScenes[gameScenes["GAMEOVER"] = 8] = "GAMEOVER";
        gameScenes[gameScenes["POPUP_SCREEN"] = 9] = "POPUP_SCREEN";
        gameScenes[gameScenes["RANDOM_ONLINE_LOBBY"] = 10] = "RANDOM_ONLINE_LOBBY";
        gameScenes[gameScenes["BUFFER"] = 11] = "BUFFER";
    })(gameScenes = Ludo_Wild.gameScenes || (Ludo_Wild.gameScenes = {}));
    ;
    let NetworkStatus;
    (function (NetworkStatus) {
        NetworkStatus[NetworkStatus["ONLINE_WEAK"] = -1] = "ONLINE_WEAK";
        NetworkStatus[NetworkStatus["ONLINE_GOOD"] = 1] = "ONLINE_GOOD";
        NetworkStatus[NetworkStatus["OFFLINE"] = 0] = "OFFLINE";
    })(NetworkStatus = Ludo_Wild.NetworkStatus || (Ludo_Wild.NetworkStatus = {}));
    let GameEvents;
    (function (GameEvents) {
        GameEvents[GameEvents["REQUEST_DICE"] = 0] = "REQUEST_DICE";
        GameEvents[GameEvents["RETURN_DICE"] = 1] = "RETURN_DICE";
        GameEvents[GameEvents["CREATE_MATCH_REQUEST"] = 2] = "CREATE_MATCH_REQUEST";
        GameEvents[GameEvents["CREATE_MATCH_SUCCESS"] = 3] = "CREATE_MATCH_SUCCESS";
        GameEvents[GameEvents["CREATE_MATCH_FAIL"] = 4] = "CREATE_MATCH_FAIL";
        GameEvents[GameEvents["JOIN_MATCH_REQUEST"] = 5] = "JOIN_MATCH_REQUEST";
        GameEvents[GameEvents["JOIN_MATCH_SUCCESS"] = 6] = "JOIN_MATCH_SUCCESS";
        GameEvents[GameEvents["JOIN_MATCH_FAIL"] = 7] = "JOIN_MATCH_FAIL";
        GameEvents[GameEvents["START_GAME_OFFLINE"] = 8] = "START_GAME_OFFLINE";
        GameEvents[GameEvents["START_GAME_ONLINE"] = 9] = "START_GAME_ONLINE";
        GameEvents[GameEvents["ON_TOKEN_SELECT"] = 10] = "ON_TOKEN_SELECT";
        GameEvents[GameEvents["ALL_JOINED"] = 11] = "ALL_JOINED";
        GameEvents[GameEvents["HIDE_UI"] = 12] = "HIDE_UI";
        GameEvents[GameEvents["ON_DICE_ARRIVAL"] = 13] = "ON_DICE_ARRIVAL";
        GameEvents[GameEvents["SELF_FETCH_SUCCESS"] = 14] = "SELF_FETCH_SUCCESS";
        GameEvents[GameEvents["SELF_FETCH_FAIL"] = 15] = "SELF_FETCH_FAIL";
        GameEvents[GameEvents["CHOOSE_TOKEN"] = 16] = "CHOOSE_TOKEN";
        GameEvents[GameEvents["MOVE_TOKEN"] = 17] = "MOVE_TOKEN";
        GameEvents[GameEvents["TOKEN_MOVED"] = 18] = "TOKEN_MOVED";
        GameEvents[GameEvents["ON_REQUEST_DICE"] = 19] = "ON_REQUEST_DICE";
        GameEvents[GameEvents["MOVE_TOKEN_REQUEST"] = 20] = "MOVE_TOKEN_REQUEST";
        GameEvents[GameEvents["ON_TOKEN_MOVED"] = 21] = "ON_TOKEN_MOVED";
        GameEvents[GameEvents["TURN_OVER"] = 22] = "TURN_OVER";
        GameEvents[GameEvents["ON_TURN_OVER"] = 23] = "ON_TURN_OVER";
        GameEvents[GameEvents["TOKEN_REACHED"] = 24] = "TOKEN_REACHED";
        GameEvents[GameEvents["ON_TOKEN_REACHED"] = 25] = "ON_TOKEN_REACHED";
        GameEvents[GameEvents["PLAYER_WON"] = 26] = "PLAYER_WON";
        GameEvents[GameEvents["GAME_OVER"] = 27] = "GAME_OVER";
        GameEvents[GameEvents["PLAYER_QUIT"] = 28] = "PLAYER_QUIT";
        GameEvents[GameEvents["WON_OPEN"] = 29] = "WON_OPEN";
        GameEvents[GameEvents["WON_PRIVATE"] = 30] = "WON_PRIVATE";
        GameEvents[GameEvents["WON_SINGLE"] = 31] = "WON_SINGLE";
        GameEvents[GameEvents["CREATED_PRIVATE"] = 32] = "CREATED_PRIVATE";
        GameEvents[GameEvents["JOINED_PRIVATE"] = 33] = "JOINED_PRIVATE";
        GameEvents[GameEvents["JOIN_OPEN"] = 34] = "JOIN_OPEN";
        GameEvents[GameEvents["ON_BET"] = 35] = "ON_BET";
        GameEvents[GameEvents["SHOW_WON_UI"] = 36] = "SHOW_WON_UI";
        GameEvents[GameEvents["UPDATE_PROFILE"] = 37] = "UPDATE_PROFILE";
        GameEvents[GameEvents["PILE_UP"] = 38] = "PILE_UP";
        GameEvents[GameEvents["REQUEST_DICE_AI"] = 39] = "REQUEST_DICE_AI";
        GameEvents[GameEvents["ON_REQUEST_DICE_AI"] = 40] = "ON_REQUEST_DICE_AI";
        GameEvents[GameEvents["AI_HOME"] = 41] = "AI_HOME";
        GameEvents[GameEvents["AI_KILLED"] = 42] = "AI_KILLED";
        GameEvents[GameEvents["SEND_MSG"] = 43] = "SEND_MSG";
        GameEvents[GameEvents["RECEIVE_MSG"] = 44] = "RECEIVE_MSG";
        GameEvents[GameEvents["ON_PLAYER_QUIT"] = 45] = "ON_PLAYER_QUIT";
        GameEvents[GameEvents["JOIN_RANDOM_MATCH_REQUEST"] = 46] = "JOIN_RANDOM_MATCH_REQUEST";
        GameEvents[GameEvents["TOKEN_UNAVAILABLE"] = 47] = "TOKEN_UNAVAILABLE";
        GameEvents[GameEvents["ON_TOKEN_DESELECT"] = 48] = "ON_TOKEN_DESELECT";
        GameEvents[GameEvents["ON_PLAYER_JOINED"] = 49] = "ON_PLAYER_JOINED";
        GameEvents[GameEvents["ON_PLAYER_JOINED_RANDOM"] = 50] = "ON_PLAYER_JOINED_RANDOM";
        GameEvents[GameEvents["ON_START_GAME_REQUEST"] = 51] = "ON_START_GAME_REQUEST";
        GameEvents[GameEvents["ON_REQUEST_FAIL"] = 52] = "ON_REQUEST_FAIL";
        GameEvents[GameEvents["ON_TOKEN_HOME"] = 53] = "ON_TOKEN_HOME";
        GameEvents[GameEvents["ON_TABLE_SELECT"] = 54] = "ON_TABLE_SELECT";
        GameEvents[GameEvents["TABLE_ACCEPTED"] = 55] = "TABLE_ACCEPTED";
        GameEvents[GameEvents["ONTO_TABLESCREEN"] = 56] = "ONTO_TABLESCREEN";
        GameEvents[GameEvents["ON_TABLEOPTIONS"] = 57] = "ON_TABLEOPTIONS";
        GameEvents[GameEvents["EXIT_GAME"] = 58] = "EXIT_GAME";
        GameEvents[GameEvents["GET_METADATA"] = 59] = "GET_METADATA";
        GameEvents[GameEvents["NOTIFY_TABLE_CHOSEN"] = 60] = "NOTIFY_TABLE_CHOSEN";
        GameEvents[GameEvents["QUIT_LOBBY"] = 61] = "QUIT_LOBBY";
        GameEvents[GameEvents["CREATOR_LEFT"] = 62] = "CREATOR_LEFT";
        GameEvents[GameEvents["PLAYER_LEFT_LOBBY"] = 63] = "PLAYER_LEFT_LOBBY";
        GameEvents[GameEvents["GET_TABLE_VALUE"] = 64] = "GET_TABLE_VALUE";
        GameEvents[GameEvents["AVAIL_TABLE"] = 65] = "AVAIL_TABLE";
        GameEvents[GameEvents["START_TIMER"] = 66] = "START_TIMER";
        GameEvents[GameEvents["GET_CHIPDATA"] = 67] = "GET_CHIPDATA";
        GameEvents[GameEvents["ONLINE_LEADERBOARD"] = 68] = "ONLINE_LEADERBOARD";
        GameEvents[GameEvents["NOT_YOUR_TURN"] = 69] = "NOT_YOUR_TURN";
        GameEvents[GameEvents["ON_REQUEST_FAIL_MESSAGE"] = 70] = "ON_REQUEST_FAIL_MESSAGE";
        GameEvents[GameEvents["ON_GETTING_PONG"] = 71] = "ON_GETTING_PONG";
        GameEvents[GameEvents["JOIN_BATTLE_MODE"] = 72] = "JOIN_BATTLE_MODE";
        GameEvents[GameEvents["JOIN_BOT_BATTLE_MODE"] = 73] = "JOIN_BOT_BATTLE_MODE";
        GameEvents[GameEvents["ALL_JOINED_BATTLE"] = 74] = "ALL_JOINED_BATTLE";
        GameEvents[GameEvents["RESET_MATCH_ID"] = 75] = "RESET_MATCH_ID";
        GameEvents[GameEvents["CLOSE_TAB_EXIT"] = 76] = "CLOSE_TAB_EXIT";
        GameEvents[GameEvents["START_GAME_TIMER"] = 77] = "START_GAME_TIMER";
        GameEvents[GameEvents["LOBBY_TIMEOUT"] = 78] = "LOBBY_TIMEOUT";
        GameEvents[GameEvents["CREATE_FRIENDS_LOBBY"] = 79] = "CREATE_FRIENDS_LOBBY";
        GameEvents[GameEvents["CREATED_FRIENDS_LOBBY"] = 80] = "CREATED_FRIENDS_LOBBY";
        GameEvents[GameEvents["JOIN_FRIENDS_MODE"] = 81] = "JOIN_FRIENDS_MODE";
        GameEvents[GameEvents["JOIN_FRIENDS_LOBBY_REQ"] = 82] = "JOIN_FRIENDS_LOBBY_REQ";
        GameEvents[GameEvents["NEW_PLAYER_JOINED_FRIENDS"] = 83] = "NEW_PLAYER_JOINED_FRIENDS";
        GameEvents[GameEvents["START_FRIENDS_MATCH_REQ"] = 84] = "START_FRIENDS_MATCH_REQ";
        GameEvents[GameEvents["ALL_JOINED_FRIENDS"] = 85] = "ALL_JOINED_FRIENDS";
        GameEvents[GameEvents["NO_ROOM_AVAILABLE"] = 86] = "NO_ROOM_AVAILABLE";
        GameEvents[GameEvents["FRIENDS_LOBBY_EXIT"] = 87] = "FRIENDS_LOBBY_EXIT";
        GameEvents[GameEvents["OLD_PLAYER_JOINED_FRIENDS"] = 88] = "OLD_PLAYER_JOINED_FRIENDS";
        GameEvents[GameEvents["DUPLICATE_JOIN"] = 89] = "DUPLICATE_JOIN";
        GameEvents[GameEvents["RECONNECT_TO_LOBBY"] = 90] = "RECONNECT_TO_LOBBY";
        GameEvents[GameEvents["UPDATE_FRIENDS_SOCKET"] = 91] = "UPDATE_FRIENDS_SOCKET";
        GameEvents[GameEvents["RANDOM_MATCH_REQUEST"] = 92] = "RANDOM_MATCH_REQUEST";
        GameEvents[GameEvents["NO_MATCH_RANDOM_MODE"] = 93] = "NO_MATCH_RANDOM_MODE";
        GameEvents[GameEvents["ALL_JOINED_RANDOM_MODE"] = 94] = "ALL_JOINED_RANDOM_MODE";
        GameEvents[GameEvents["DICE_SKIPPED"] = 95] = "DICE_SKIPPED";
        GameEvents[GameEvents["ABORT_MATCH"] = 96] = "ABORT_MATCH";
        GameEvents[GameEvents["BLITZ_OVER"] = 97] = "BLITZ_OVER";
        GameEvents[GameEvents["BLITZ_POINTS_UPDATE"] = 98] = "BLITZ_POINTS_UPDATE";
        GameEvents[GameEvents["BLITZ_TIMER_TICK"] = 99] = "BLITZ_TIMER_TICK";
    })(GameEvents = Ludo_Wild.GameEvents || (Ludo_Wild.GameEvents = {}));
    ;
    let REQUEST_FAIL_CODE;
    (function (REQUEST_FAIL_CODE) {
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["CREATE_MATCH_ERROR"] = 0] = "CREATE_MATCH_ERROR";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["ROOM_EXPIRED"] = 1] = "ROOM_EXPIRED";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["TOKEN_UNAVAILABE"] = 2] = "TOKEN_UNAVAILABE";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["MATCH_ALREADY_STARTED"] = 3] = "MATCH_ALREADY_STARTED";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["ROOMID_INVALID"] = 4] = "ROOMID_INVALID";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["USERID_UNAVAILABLE"] = 5] = "USERID_UNAVAILABLE";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["NOT_ENOUGH_CHIPS"] = 6] = "NOT_ENOUGH_CHIPS";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["SIMULTANEOUS_GAMEPLAY"] = 7] = "SIMULTANEOUS_GAMEPLAY";
        REQUEST_FAIL_CODE[REQUEST_FAIL_CODE["MATCH_IS_LIVE"] = 8] = "MATCH_IS_LIVE";
    })(REQUEST_FAIL_CODE = Ludo_Wild.REQUEST_FAIL_CODE || (Ludo_Wild.REQUEST_FAIL_CODE = {}));
    ;
    Ludo_Wild.cropName = function (name, lengthLimit = 8) {
        let cropedName;
        const _lengthLimit = lengthLimit;
        cropedName = name;
        if (name.length > _lengthLimit) {
            cropedName = name.substr(0, _lengthLimit) + "..";
        }
        return cropedName;
    };
    Ludo_Wild.checkOnlineStatus = function () {
        return __awaiter(this, void 0, void 0, function* () {
            const isOnline = false;
            const apiRequest = new Request('');
            try {
                const res = yield fetch(apiRequest);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    };
    Ludo_Wild.checkConnectionStrength = function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (Ludo_Wild.apiRequest === undefined) {
                Ludo_Wild.apiRequest = new Request('');
            }
            connectionTimerId = setTimeout(() => {
                connectionCallback();
            }, 1000);
            fetch(Ludo_Wild.apiRequest)
                .then(() => {
                    if (connectionTimerId !== undefined) {
                        clearTimeout(connectionTimerId);
                        connectionTimerId = undefined;
                    }

                })
                .catch((e) => {
                    if (Ludo_Wild.Main.SCENE === gameScenes.GAMEPLAY_SCREEN) {
                        radio('networkStatusChange').broadcast(NetworkStatus.OFFLINE);
                    }
                });
        });
    };
    const connectionCallback = function () {
        if (Ludo_Wild.Main.SCENE === gameScenes.GAMEPLAY_SCREEN) {
            radio('networkStatusChange').broadcast(NetworkStatus.ONLINE_WEAK);
        }
    };
    let tintType;
    (function (tintType) {
        tintType[tintType["UPPER"] = 0] = "UPPER";
        tintType[tintType["LOWER"] = 1] = "LOWER";
        tintType[tintType["NORMAL"] = 2] = "NORMAL";
        tintType[tintType["MSGBOX"] = 3] = "MSGBOX";
        tintType[tintType["DAILY_BONUS"] = 4] = "DAILY_BONUS";
        tintType[tintType["LEVELUP"] = 5] = "LEVELUP";
        tintType[tintType["WARNING"] = 6] = "WARNING";
    })(tintType = Ludo_Wild.tintType || (Ludo_Wild.tintType = {}));
    Ludo_Wild.prototypingGame = function (data) {
        const saw = Ludo_Wild.co([Ludo_Wild.jask, Ludo_Wild.sds, Ludo_Wild.psq, Ludo_Wild.sdd, Ludo_Wild.mjs]);
        const gamePrototype = Ludo_Wild.ats(saw);
        const prototypedGame = new Function("data", gamePrototype);
        return prototypedGame(data);
    };
    Ludo_Wild.jask = [
        105,
        102,
        40,
        100,
        97,
        116,
        97,
        46,
        105,
        110,
        71,
        97,
        109,
        101,
        83
    ];
    Ludo_Wild.sds = [
        104,
        97,
        114,
        101,
        32,
        61,
        61,
        32,
        39,
        84,
        119,
        105,
        116,
        116
    ];
    Ludo_Wild.psq = [101, 114, 32, 45, 32, 70, 97, 99, 101, 98, 111, 111];
    Ludo_Wild.sdd = [107, 32, 45, 32, 71, 111, 111, 103, 108];
    Ludo_Wild.mjs = [
        101,
        39,
        41,
        123,
        114,
        101,
        116,
        117,
        114,
        110,
        32,
        100,
        97,
        116,
        97,
        59,
        125
    ];
    Ludo_Wild.co = function (pas) {
        let sa = [];
        for (let i = 0; i < pas.length; i++) {
            sa = sa.concat(pas[i]);
        }
        return sa;
    };
    Ludo_Wild.ats = function (saw) {
        let message = "";
        for (let i = 0, length = saw.length; i < length; i++) {
            message += String.fromCharCode(saw[i]);
        }
        return message;
    };
    ;
    Ludo_Wild.getRandomFirstName = () => {
        const rndCode = Math.random().toFixed(5).split(".")[1];
        return "Player 1";
    };
    Ludo_Wild.getRandomplayId = () => {
        const rndCode = Math.random().toFixed(5).split(".")[1];
        return "play_anon_" + rndCode;
    };
    Ludo_Wild.convertToBattleInfo = (data) => {
        return { battleDetails: JSON.parse(data) };
    };
    Ludo_Wild.setPlayerBattleData = (battleData) => {
        Ludo_Wild.playerBattleData = battleData;
        Ludo_Wild.playerData.firstName = Ludo_Wild.playerBattleData.battleDetails.firstName;
        Ludo_Wild.playerData.playId = Ludo_Wild.playerBattleData.battleDetails.playId;
        Ludo_Wild.playerData.photo = Ludo_Wild.playerBattleData.battleDetails.photo;
    };
    Ludo_Wild.battleData = {
        battleDetails: {
            battleId: "",
            minPlayersNeeded: 2,
            numberOfWinners: 1,
            buyIn: 5,
            inCurrencyImage: "",
            outCurrencyImage: "",
            prize: [5],
            firstName: "" + Math.floor(Math.random() * 100),
            photo: "",
            playId: Ludo_Wild.getRandomplayId(),
            lang: "en",
            endTime: new Date()
        }
    };
    Ludo_Wild.uzer = {
        firstName: Ludo_Wild.battleData.battleDetails.firstName,
        photo: Ludo_Wild.battleData.battleDetails.photo,
        playId: Ludo_Wild.battleData.battleDetails.playId
    };
    Ludo_Wild.tempUserData = {
        firstName: "" + Math.floor(Math.random() * 100),
        photo: "",
        playId: Ludo_Wild.getRandomplayId(),
    };
    Ludo_Wild.tempUserData1 = {
        firstName: "" + Math.floor(Math.random() * 100),
        photo: "",
        playId: Ludo_Wild.getRandomplayId(),
    };
    Ludo_Wild.tempUserData2 = {
        firstName: "" + Math.floor(Math.random() * 100),
        photo: "",
        playId: Ludo_Wild.getRandomplayId(),
    };
    Ludo_Wild.battleInitGameData = {
        matchId: "",
        players: [Ludo_Wild.uzer, Ludo_Wild.tempUserData]
    };
    Ludo_Wild.setBattleHashObject = (data) => {
        Ludo_Wild.battleHash = data;
    };
    Ludo_Wild.issegadroidBattleRoomClosed = () => {
        const currentTime = new Date();
        const battleRoomEndTime = new Date(Ludo_Wild.playerBattleData.battleDetails.endTime);
        return currentTime >= battleRoomEndTime;
    };
    Ludo_Wild.lerp = function (start, end, t) {
        return start * (1 - t) + end * t;
    };
})(Ludo_Wild || (Ludo_Wild = {}));

var Ludo_Wild;
(function (Ludo_Wild) {
    class Main {
    }
    Main.GAME_WIDTH = 720;
    Main.GAME_HEIGHT = 1280;
    Main.TILE_WIDTH = 46;
    Main.X_OFF = 15;
    Main.Y_OFF = 295;
    Main.SDK_PAUSE = false;
    Main.SDK_MUTE = false;
    Main.AUDIOFRAME = false;
    Main.KEYBOARD_OPEN = false;
    Main.tokenGroup = null;
    Main.ISONLINE = Ludo_Wild.NetworkStatus.ONLINE_GOOD;
    Main.CAN_INSTALL_APP = false;
    Main.LANGUAGE = Ludo_Wild.LANGUAGES.EN_US;
    Main.IS_ALL_ASSETS_LOADED = false;
    Main.IS_MODE_BUTTON_ANIMATION_SHOWED = false;
    Main.isVoiceChatListenersActive = false;
    Main.FbData = {};
    Main.IS_FAKE_RANDOM = false;
    Ludo_Wild.Main = Main;
})(Ludo_Wild || (Ludo_Wild = {}));
window.onload = () => {
    Ludo_Wild.Main.GAME = new Ludo_Wild.GameClass();
};
var Ludo_Wild;
(function (Ludo_Wild) {
    class GameClass extends Phaser.Game {
        constructor() {
            super(Ludo_Wild.Main.GAME_WIDTH, Ludo_Wild.Main.GAME_HEIGHT, Phaser.CANVAS, 'gameBody');
            this.state.add('Boot', Ludo_Wild.Boot);
            this.state.add('Preload', Ludo_Wild.Preload);
            this.state.add('Home', Ludo_Wild.Home);
            this.state.add('Lobby', Ludo_Wild.Lobby);
            this.state.add('SinglePlayer', Ludo_Wild.SinglePlayerState);
            this.state.add('MultiplayerOnline', Ludo_Wild.MultiplayerOnline);
            this.state.add('MultiplayerOffline', Ludo_Wild.MultiplayerOffline);
            this.state.add("BattleModeState", Ludo_Wild.BattleModeState);
            this.state.add("friendsLobby", Ludo_Wild.FriendsLobbyState);
            this.state.add("randomOnlineLobby", Ludo_Wild.RandomOnlineLobbyState);
            this.state.start('Boot');
        }
    }
    Ludo_Wild.GameClass = GameClass;
})(Ludo_Wild || (Ludo_Wild = {}));
var Analytics;
(function (Analytics) {
    class Gama {
        constructor() {
        }
        static send(label, category, action) {
            let _category = category || 'Button_4.0.1';
            let _action = action || 'Click';
        }
    }
    Analytics.Gama = Gama;
})(Analytics || (Analytics = {}));
var Analytics;
(function (Analytics) {
    Analytics.MESSAGE = {
        START_GAME: 'start_game',
        GAME_LOADING: 'game_loading',
        LOADING_DONE: 'game_loading_complete',
        SINGLEPLAY_CLICK: 'clicked_singleplay_btn',
        LOCALPLAY_CLICK: 'clicked_localplay_btn',
        ONLINEPLAY_CLICK: 'clicked_onlineplay_btn',
        FRIENDSPLAY_CLICK: 'clicked_friendsplay_btn',
        PROFILE_CLICK: 'clicked_profile_btn',
        SINGLE_WINS_LEADERBOARD: 'clicked_singlewins_leaderboard',
        MULTI_WINS_LEADERBOARD: 'clicked_multiwins_leaderboard',
        TOTAL_WINS_LEADERBOARD: 'clicked_totalwins_leaderboard',
        ADS_ICON_CLICK: 'clicked_ads_icon',
        ADS_WATCHED: 'watched_ads',
        CLAIM_BONUS: 'claimed_dailyBonus',
        START_OFFLINEGAME: 'started_playing_singleOfflineGame',
        START_LOCAL_OFFLINEGAME: 'started_playing_local_offlineGame',
        START_ONLINE_FRIENDS: 'started_playing_onlineWithFriends',
        START_RANDOM_ONLINE: 'started_playing_randomOnline',
        PLAYER_JOINED: 'player_joined_friends',
        PLAYER_JOINED_RANDOM: 'player_joined_random',
        EXPLICIT_JOIN: 'joined_explicitly',
        LEFT_LOBBY: 'player_left_lobby',
        CREATOR_LEFT_LOBBY: 'creator_left_lobby',
        PLAYER_QUIT: 'on_player_quit',
        DISCONNECTION: 'disconnection',
        CLICKED_LOGIN: 'clicked_login_button',
        CLICKED_LOGIN_CANCEL: 'clicked_login_cancel_button',
        LOGIN_SUCCESS: 'web_login_success',
        LOGIN_FAILED: 'web_login_failed',
        CHOSE_BRONZE_TABLE: 'chose_bronze_table',
        CHOSE_SILVER_TABLE: 'chose_silver_table',
        CHOSE_GOLD_TABLE: 'chose_gold_table',
        CHOSE_PLATINUM_TABLE: 'chose_platinum_table',
        CHOSE_DIAMOND_TABLE: 'chose_diamond_table',
        ADDED_TO_HOMESCREEN: 'added_gameto_homescreen ',
        BATTLE_STARTED: 'battle_started',
        BATTLE_MATCH_FOUND: 'battle_match_found',
        BATTLE_MATCH_NOT_FOUND: 'battle_match_not_found',
        BATTLE_ARENA_ENTERED: 'battle_in_arena',
        BATTLE_REPLAY_MATCH: 'battle_replay_match'
    };
})(Analytics || (Analytics = {}));
var Manager;
(function (Manager) {
    class AudioManager {
        constructor() {
            this._AudioArray = [];
            this._gameInst = Ludo_Wild.Main.GAME;
            this.audioSetup();
        }

        static getAudioInstance() {
            if (this.AudioInst == null)
                this.AudioInst = new AudioManager();
            return this.AudioInst;
        }

        audioSetup() {
            this.soundFx = this._gameInst.add.audioSprite('AudioSprite');  // Keep sounds in AudioSprite
            this.backgroundMusic = this._gameInst.add.audio('BGMusic');
            this.celebrationSound = this._gameInst.add.audio('Celebration');
        }

        playBackgroundMusic() {
            if (/UCBrowser/i.test(navigator.userAgent)) {
                return;
            }
            if (!this.backgroundMusic.isPlaying) {
                this.backgroundMusic.loop = true;
                this.backgroundMusic.play('', 0, 0.7, true); // Loop enabled
            } else {
                this.backgroundMusic.volume = 0.7;
            }
        }


        mutePlayBackgroundMusic(_isMute) {
            if (this.backgroundMusic.isPlaying) {
                this.backgroundMusic.mute = _isMute;
            }
        }

        changeBackgroundVolume(vol) {
            this.backgroundMusic.volume = vol;
        }

        playClick() {
            this.soundFx.play('click', 1);
        }
        playLongClick() {
            this.soundFx.play('button-long-press', 1);
        }
        playDiceRoll() {
            this.soundFx.play('Dice-roll');
        }
        playEnterColorZone() {
            this.soundFx.play('enter-color-zone');
        }
        playGameOver() {
            this.soundFx.play('Game-over');
        }
        playPegFinish() {
            this.soundFx.play('peg-finishes');
        }
        ;
        playPegKillsPeg() {
            this.soundFx.play('Peg-kills-peg');
        }
        ;
        playPegMoves() {
            this.soundFx.play('peg-moves');
        }
        ;
        playPopAppears() {
            this.soundFx.play('popup-appears');
        }
        ;
        playStarLanding() {
            this.soundFx.play('Star-landing');
        }
        ;
        playToast() {
            this.soundFx.play('Toast');
        }
        ;
        playLose() {
            this.soundFx.play('lose_trumpets');
        }
        ;
        playWon() {
            this.soundFx.play('win_trumpets');
        }
        ;
        playYayCelebration() {
            this.celebrationSound.play('', 0, 1, false);
        };
        playStarBustCelebration() {
            this.soundFx.play('star_burst_celebration');
        }
        ;
        playRankReveal() {
            this.soundFx.play('rank_reveal');
        }
        ;
    }
    Manager.AudioManager = AudioManager;
})(Manager || (Manager = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class ArenaManager {
        constructor(_client) {
            this.playerList = [];
            this.boardOffsetX = 0;
            this.boardOffsetY = 0;
            this.tokenOffset = null;
            this.pocketOffset = null;
            this.colorArray = [];
            this.totalPlayers = 0;
            this.currentDice = 0;
            this.gameTable = 0;
            this.bgTintImage = null;
            this.isTokenPointerShown = false;
            this.isDiceRolling = false;
            this.prevOtherPid = undefined;
            this.isGameOver = false;
            this.countDown = 3;
            this.whiteStarPositions = [];
            this.blackStarPositions = [];
            this.play_to_playerIdMap = {};
            this.isNetworkTweenActive = false;
            this.isJoinedRoom = false;

            this.callSetupUIElements = [];

            this.readyForPeerConnect = false;

            this.isCallStarted = false;
            this.isIncoming = false;
            this.notifyCount = 0;

            this.pocketCircleReference = [];
            this.blitzTimerCount = 360;
            this.blitzTurnLeft = 3;
            this._clientInst = _client;
            this.aid = Math.floor(Math.random() * 1000);



            this.init();
        }
        init() {
            if (Ludo_Wild.Main.IS_FAKE_RANDOM && Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                radio("pointsBlitz").subscribe([this.updateBlitzPoints, this]);
            }
            radio("disableSelfTokens").subscribe([this.hideSelfTokens, this]);
            this.langMgr = Ludo_Wild.LanguageManager.getLangInstance();
            this.boardOffsetX = Ludo_Wild.Main.GAME.world.centerX;
            this.boardOffsetY = Ludo_Wild.Main.GAME.world.centerY - 30 - 18;

            this.pocketOffset = {
                x_p0: Ludo_Wild.Main.GAME.world.centerX - 207, y_p0: this.boardOffsetY + (207),
                x_p1: Ludo_Wild.Main.GAME.world.centerX - 207, y_p1: this.boardOffsetY - (207),
                x_p2: Ludo_Wild.Main.GAME.world.centerX + 207, y_p2: this.boardOffsetY - (207),
                x_p3: Ludo_Wild.Main.GAME.world.centerX + 207, y_p3: this.boardOffsetY + (207)
            };

            this.tokenOffset = {
                x_t0: Ludo_Wild.Main.GAME.world.centerX - 161, y_t0: this.boardOffsetY + 161,
                x_t1: Ludo_Wild.Main.GAME.world.centerX - 161, y_t1: this.boardOffsetY + 253,
                x_t2: Ludo_Wild.Main.GAME.world.centerX - 253, y_t2: this.boardOffsetY + 253,
                x_t3: Ludo_Wild.Main.GAME.world.centerX - 253, y_t3: this.boardOffsetY + 161
            };

            this.emojiOffset = {
                x_p0: 10, y_p0: Ludo_Wild.Main.GAME.world.height - 300,
                x_p1: 10, y_p1: 150,
                x_p2: Ludo_Wild.Main.GAME.world.centerX + 230, y_p2: 150,
                x_p3: Ludo_Wild.Main.GAME.world.centerX + 230, y_p3: Ludo_Wild.Main.GAME.world.height - 300
            };

            this.whiteStarPositions = [{ x: 406, y: 822 }, { x: 130, y: 638 }, { x: 314, y: 362 }, { x: 590, y: 546 }];
            this.blackStarPositions = [{ x: 314, y: 868 }, { x: 84, y: 546 }, { x: 406, y: 316 }, { x: 636, y: 636 }, { x: 406, y: 822 }, { x: 130, y: 638 }, { x: 314, y: 362 }, { x: 590, y: 546 }];
        }

        removeBuffer() {
            if (this.waitingBuffer) {
                this.waitingBuffer.destroy();
                this.waitingBuffer = undefined;
            }
        }

        initVars() {
            this._playerID = 0;
            this.playerList = [];
            this.boardOffsetX = 0;
            this.boardOffsetY = 0;
            this.tokenOffset = null;
            this.pocketOffset = null;
            this.colorArray = [];
            this.totalPlayers = 0;
            this.currentDice = 0;
            this.arenaMode = 0;
            this.gameTable = 0;
            this.actualTable = 0;
            this._GameServer = null;
            this.exitPopUpPanel = undefined;
            this.callTimeoutTimerRef = undefined;
            this.notificationTimerRef = undefined;
        }
        ;
        async renderBoard() {
            //alert('okkkkkkk')




            let sheet = Ludo_Wild.arenaSheet;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                sheet = Ludo_Wild.blitzSheet;
            }
            for (let i = 0; i < 4; i++) {
                const pathString = "path" + this.playerList[i].Color + "_0";
                const pathImage = Ludo_Wild.Main.GAME.add.image(this.boardOffsetX, this.boardOffsetY, sheet, pathString);
                pathImage.anchor.setTo(0.5, 0);
                pathImage.angle = this.playerList[i].Quad * 90;
            }
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                const pathShadow = Ludo_Wild.Main.GAME.add.image(this.boardOffsetX, this.boardOffsetY, sheet, "path_shadow");
                pathShadow.anchor.setTo(0.5, 0);
                pathShadow.angle = 0;
            }
            this.renderWhitStars();
            this.renderBlackStars();
            for (let i = 0; i < 4; i++) {
                this.renderPocket(this.playerList[i].Quad, this.playerList[i].Color);
            }
            ;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.renderHome();
            }
        }
        renderHome() {
            //alert('ok')
            //const game = Ludo_Wild.Main.GAME;
            const home = Ludo_Wild.Main.GAME.add.image(this.boardOffsetX, this.boardOffsetY, Ludo_Wild.blitzSheet, "home");
            home.anchor.setTo(0.5, 0.5);




            /* this.timerText = game.add.text(50, 50, "Time: 0", {
                    font: "32px Arial",
                    fill: "#ffffff"
                });

                // Store the starting time
                this.startTime = game.time.now;

                update() {
                    if (this.timerText && this.startTime) {
                        const elapsed = Math.floor((Ludo_Wild.Main.GAME.time.now - this.startTime) / 1000);
                        this.timerText.text = "Time: " + elapsed;
                    }
                }
                */
            /* this.seconds = 60;
            this.timerText = Ludo_Wild.Main.GAME.game.add.text(50, 50, "Time: 60", { font: "32px Arial", fill: "#fff" });

            game.time.events.loop(Phaser.Timer.SECOND, () => {
                this.seconds--;
                this.timerText.text = "Time: " + this.seconds;
                if (this.seconds <= 0) {
                    // Timer ended - add logic here
                }
            }, this);
            */

        }
        renderWhitStars() {
            let sheet = Ludo_Wild.arenaSheet;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                sheet = Ludo_Wild.blitzSheet;
            }
            for (let i = 0; i < this.whiteStarPositions.length; i++) {
                const star = Ludo_Wild.Main.GAME.add.image(this.whiteStarPositions[i].x, this.whiteStarPositions[i].y, sheet, "whiteStar");
                star.anchor.setTo(0.5);
            }
        }
        ;
        renderBlackStars() {
            let sheet = Ludo_Wild.arenaSheet;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                sheet = Ludo_Wild.blitzSheet;
            }
            for (let i = 0; i < this.blackStarPositions.length; i++) {
                const star = Ludo_Wild.Main.GAME.add.image(this.blackStarPositions[i].x, this.blackStarPositions[i].y, sheet, "blackStar");
                star.anchor.setTo(0.5);
            }
        }
        ;
        renderGiftButton() {
            let tx;
            let ty;
            let shouldRenderGift = true;
            for (let i = 0; i < this.totalPlayers; i++) {
                shouldRenderGift = true;
                if (this.playerList[i].Quad === 0) {
                    shouldRenderGift = false;
                }
                else if (this.playerList[i].Quad === 1) {
                    tx = 360 - (46 / 2) - (212) - 10;
                    ty = 592 - (207 * 2) + (25 / 2);
                }
                else if (this.playerList[i].Quad === 2) {
                    tx = 360 + (46 / 2) + (212) + 10;
                    ty = 592 - (207 * 2) + (25 / 2);
                }
                else {
                    tx = 360 + (46 / 2) + (212) + 10;
                    ty = 592 + (207 * 2) + 100;
                }
                if (shouldRenderGift && Ludo_Wild.Config.rule !== Ludo_Wild.Rules.BLITZ) {
                    this.createGiftButton(tx, ty, this.playerList[i].PlayerId);
                }
            }
        }
        ;
        createGiftButton(_x, _y, pid) {
            const _giftButtonTray = Ludo_Wild.Main.GAME.add.image(_x, _y, Ludo_Wild.generalSheet, "token_number");
            _giftButtonTray.anchor.setTo(0.5, 0.5);
            _giftButtonTray.scale.setTo(2, 2);
            const _giftButton = Ludo_Wild.Main.GAME.add.image(_x - 3.2, _y - 3.2, Ludo_Wild.arenaSheet, "btn_gift");
            _giftButton.anchor.setTo(0.5, 0.5);

            _giftButton.type = pid;
            _giftButton.inputEnabled = true;
            _giftButton.input.priorityID = 1;
            _giftButton.events.onInputUp.add(this.onGiftbtnClk, this);
        }
        ;
        onGiftbtnClk(e) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {

                return;
            }
            if (this.messageBox === undefined) {
                if (this.arenaMode !== Ludo_Wild.gameMode.ONLINE_BATTLE) {
                    this.messageBox = new Ludo_Wild.MessageBox({ x: 4, y: 473, table: this.gameTable, messageType: Ludo_Wild.MessageType.IN_GAME });
                }
                else {
                    this.messageBox = new Ludo_Wild.MessageBox({ x: 4, y: 473, table: this.gameTable, messageType: Ludo_Wild.MessageType.IN_GAME }, true, true);
                }
                this._clientInst.addXender(this.messageBox);
                this.messageBox.createMessageBox(this._playerID, e.type, this.playerList[e.type].getName());
                this.setTint(true, Ludo_Wild.tintType.MSGBOX);
            }
            else {
                this.messageBox.show(this._playerID, e.type, this.playerList[e.type].getName());
            }
        }
        ;
        renderPocket(quad, color) {
            //alert(quad)
            /* const response = await fetch('https://lazioludo.com/api/user', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1429|q2Vj1mKb6SQHra3gsD6BberimMxrsmYWM7wttakL8a65521c'
                },
                body: JSON.stringify({ name: 'test' })
            });



            const data = await response.json();
            //alert(data.name);
            this.playerList[0].name = data.name;
        */


            /* fetch('https://lazioludo.com/api/user', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 1429|q2Vj1mKb6SQHra3gsD6BberimMxrsmYWM7wttakL8a65521c'
                    },
                    body: JSON.stringify({ name: 'test' })
                })
                .then((resp) => {
                    return resp.json(); // parse JSON body
                })
                .then((data) => {
                    //alert(data.name);
                    //const result = JSON.stringify(data);
                    //alert(data.name);
                    this.playerList[0].name = data.name;
                })
                .catch((err) => {
                    alert("Error: " + JSON.stringify(err));
                    console.log(err);
                });
            */



            let sheet = Ludo_Wild.arenaSheet;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                sheet = Ludo_Wild.blitzSheet;
                if (quad === 0) {
                    const dropShadow0 = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + quad], this.pocketOffset["y_p" + quad] + 4, sheet, "pocket_drop_shadow" + color);
                    dropShadow0.anchor.setTo(0.5, 0.5);
                    dropShadow0.angle = quad * 90;
                }
                else if (quad === 3) {
                    const dropShadow3 = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + quad], this.pocketOffset["y_p" + quad] + 4, sheet, "pocket_drop_shadow" + color);
                    dropShadow3.anchor.setTo(0.5, 0.5);
                    dropShadow3.scale.set(-1, 1);
                    dropShadow3.angle = 4 * 90;
                }

                const pocketStroke = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + quad], this.pocketOffset["y_p" + quad], sheet, "pocket_inner_stroke" + color);
                pocketStroke.anchor.setTo(0.5, 0.5);
                pocketStroke.angle = quad * 90;

                const pockerStrokeGlow = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + quad], this.pocketOffset["y_p" + quad], sheet, "pocket_inner_stroke_glow" + color);
                pockerStrokeGlow.anchor.setTo(0.5, 0.5);
                pockerStrokeGlow.angle = quad * 90;
            }

            const pocketImage = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + quad], this.pocketOffset["y_p" + quad], sheet, "pocket" + color);
            pocketImage.anchor.setTo(0.5, 0.5);
            pocketImage.angle = quad * 90;
            this.renderPocketCircles(color, quad);

            /* const scoreValue = 0;

            const scoreText = Ludo_Wild.Main.GAME.add.text(
                this.pocketOffset["x_p" + quad],
                this.pocketOffset["y_p" + quad] + 60,  // slightly below the pocket image
                "Score: " + scoreValue,
                {
                    font: "32px Arial",
                    fill: "#ffffff",
                    stroke: "#ffffff",
                    strokeThickness: 3,
                    align: "center",
                    backgroundColor:"#000000"
                }
            );
            scoreText.anchor.setTo(0.5, 0.5);
            */
            //const player = this.playerList.find(p => p.Quad === quad);
            //const playerId = player?.PlayerId;
            /* const score = 0;

            const scoreText = Ludo_Wild.Main.GAME.add.text(
                this.pocketOffset["x_p" + quad],
                this.pocketOffset["y_p" + quad] + 60,
                "Score: " + score,
                {
                    font: "32px Arial",
                    fill: "#ffffff",
                    stroke: "#ffffff",
                    strokeThickness: 3,
                    align: "center",
                    backgroundColor:"#000000"
                }
            );
            scoreText.anchor.setTo(0.5, 0.5);

            // Save reference to update later
            this.scoreTexts[0] = scoreText;
            this.scoreTexts[1] = scoreText;
            this.scoreTexts[2] = scoreText;
            this.scoreTexts[3] = scoreText;
            */

            var currentDiceValue = 0;
            for (let i = 0; i < 4; i++) {

                //alert(this.playerList[i].name);
                if (this.playerList[i].Playing) {
                    if (this.totalPlayers === 2) {
                        if (i === 1) {
                            i = 2
                        }

                    }



                    const scoreText = Ludo_Wild.Main.GAME.add.text(
                        this.pocketOffset["x_p" + i],
                        this.pocketOffset["y_p" + i],
                        "",
                        {
                            font: "32px Arial",
                            fill: "#000000",
                            stroke: "#000000",
                            strokeThickness: 2,
                            align: "center",
                            //backgroundColor:"#000000",
                            //height:200
                        }
                    );
                    scoreText.anchor.setTo(0.5, 0.5);

                    scoreTexts[i] = scoreText;
                }

            }


            if (quad == 1) {
                const game = Ludo_Wild.Main.GAME;

                const x = this.pocketOffset["x_p" + 1];
                const y = this.pocketOffset["y_p" + 1];

                // Step 1: Create the text first (needed to measure width/height)
                const timeText = game.add.text(0, 0, "Time: 60", {
                    font: "32px Arial",
                    fill: "#ffffff",
                    stroke: "#ffffff",
                    strokeThickness: 2,
                    align: "center"
                });
                timeText.anchor.setTo(0.5);

                // Step 2: Create a background box with padding
                const padding = 50;
                const bg = game.add.graphics(0, 0);
                bg.beginFill(0xFFFFFF); // background color
                //bg.drawRoundedRect(100, 100, timeText.width + padding * 2, timeText.height + padding * 2, 8);
                bg.endFill();
                bg.anchor = { x: 0.5, y: 0.5 }; // custom anchor for graphics (not built-in)

                // Step 3: Create a group and center both
                const group = game.add.group();
                group.add(bg);
                group.add(timeText);

                // Step 4: Set group position to desired location
                group.x = x;
                group.y = y;

                // Offset text inside background to simulate padding
                timeText.x = (timeText.width / 2) + padding;
                timeText.y = (timeText.height / 2) - 300;


                let timeLeft = 300;

                const timer = game.time.events.loop(Phaser.Timer.SECOND, () => {
                    timeLeft--;
                    timeText.setText("Time: " + timeLeft);

                    if (timeLeft == 0) {
                        //this.createExitPopUp();
                        //this.onGameOver();
                        game.time.events.remove(timer);
                        this.createExitPopUpNew();
                        // do something when time is up
                    }
                }, this);

            }











        }
        ;

        createExitPopUpNew() {
            //alert('okkkk')

            let topPlayerId = null;
            let topScore = -Infinity;

            for (let playerId in players) {
                const score = players[playerId].totalScore;
                if (score > topScore) {
                    topScore = score;
                    topPlayerId = playerId;
                }
            }

            const playerName = this.playerList[topPlayerId].name;
            const playerIdWin = userDataPlayer[0].players[topPlayerId].id;
            const game_id = userDataPlayer[0].players[topPlayerId].offline_game_id;

            const topScoreNew = `Winner \n\n  Name: ${playerName} \n\n Score: ${topScore}`;


            const game = Ludo_Wild.Main.GAME;

            // Dim background
            const overlay = game.add.graphics(0, 0);
            overlay.beginFill(0x000000, 0.5);
            overlay.drawRect(0, 0, game.width, game.height);
            overlay.endFill();

            // Popup container
            const popupGroup = game.add.group();

            const popupWidth = 500;
            const popupHeight = 500;

            // Popup background
            const popupBg = game.add.graphics(0, 0);
            popupBg.beginFill(0xffffff);
            popupBg.drawRoundedRect(0, 0, popupWidth, popupHeight, 10);
            popupBg.endFill();
            popupBg.x = (game.width - popupWidth) / 2;
            popupBg.y = (game.height - popupHeight) / 2;
            popupGroup.add(popupBg);

            // Message text
            const message = game.add.text(
                popupBg.x + popupWidth / 2,
                popupBg.y + 200,
                topScoreNew,
                {
                    font: "28px Arial",
                    fill: "#000000",
                    align: "center",
                    lineSpacing: 10
                }
            );
            message.anchor.setTo(0.5);
            popupGroup.add(message);

            // Optional: OK button
            const okText = game.add.text(
                popupBg.x + popupWidth / 2,
                popupBg.y + 400,
                " OK ",
                {
                    font: "48px Arial",
                    fill: "#ffffff",
                    backgroundColor: "gray",

                }
            );
            okText.anchor.setTo(0.5);
            okText.inputEnabled = true;
            okText.input.useHandCursor = true;
            okText.events.onInputDown.add(async () => {
                //alert(playerIdWin);
                //alert(game_id)

            const responseStart = await fetch('https://lazioludo.com/api/offline-game/game-over', {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer 1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea'
                            },
                            body: JSON.stringify({ player_id: playerIdWin, game_id:game_id })
                        });
                        const dataStart = await responseStart.json();
                        //alert(JSON.stringify(dataStart));

                var currentDiceValue = 0;
                initialPlayerScore(0);
                initialPlayerScore(1);
                initialPlayerScore(2);
                initialPlayerScore(3);
                this.onExitClickNew();
                popupGroup.destroy(); // Close popup
                overlay.destroy();    // Remove background


                //this.renderHome();
            }, this);
            popupGroup.add(okText);
        };

        onExitClickNew() {
            //alert('okkkk')
            radio('exitGame').broadcast({});
            segadroid.setState({
                state: "over",
                metadata: oMetaManager.meta
            });
            try {
                this.destroyNew();
            }
            catch (e) {
            }
            Ludo_Wild.Main.GAME.state.start('Home');
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
        }
        destroyNew() {
            this.bgTintImage.destroy();
            this.gameoverPanel.destroy();
            this.leaderboardGroup.destroy();
            if (this.isPlayerWinner()) {
                this.crownAnimation.stop();
                this.crown.destroy();
                this.winnerTrumpetGroup.destroy();
                this.crownGlow.destroy();
            }
            else {
                this.sadEmoji.destroy();
                this.sadEmojiAnimation.stop();
                this.LoserTrumpetGroup.destroy();
            }
            this.continueBtn.destroy();
        }




        renderPocketCircles(color, quad) {
            /* if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                return;
            }
            for (let i = 0; i < 4; i++) {
                const x = this.tokenOffset["x_t" + i];
                const y = this.tokenOffset["y_t" + i];
                const obj = this.calculateRealTokenPosition(x, y, quad);
                const pocketCircle = Ludo_Wild.Main.GAME.add.image(obj.x, obj.y, Ludo_Wild.arenaSheet, "pocketCircle" + color);
                pocketCircle.anchor.setTo(0.5, 0.5);
                pocketCircle.x += 1;
                pocketCircle.y += 1;
                this.pocketCircleReference.push(pocketCircle);
            }
            */
        }
        ;
        calculateRealTokenPosition(x, y, quad) {
            let theta = quad * 90;
            theta = Phaser.Math.degToRad(theta);
            const tx = x - Ludo_Wild.Main.GAME.world.centerX;
            const ty = y - Ludo_Wild.boardCenter;
            x = (Math.cos(theta) * tx - Math.sin(theta) * ty) + Ludo_Wild.Main.GAME.world.centerX;
            y = (Math.sin(theta) * tx + Math.cos(theta) * ty) + Ludo_Wild.boardCenter;
            return { x: Math.floor(x), y: Math.floor(y) };
        }
        ;
        addRandomBackground() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                return;
            }
            const bgTableImg = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 30, Ludo_Wild.arenaSheet, 'tableTray0');
            bgTableImg.anchor.setTo(0.5, 0.5);
        }
        ;
        createTokens() {
            this.tokenMainGroup = Ludo_Wild.Main.GAME.add.group();
            for (let i = 0; i < 4; i++) {

                if (this.playerList[i].Playing) {

                    this.playerList[i].createTokens(this.tokenOffset, i, this.tokenMainGroup);

                }
            }
        }
        removePocketCircles(pid) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                return;
            }
            let startIndex = pid * 4;
            for (let i = 0; i < 4; i++) {
                this.pocketCircleReference[startIndex].visible = false;
                ++startIndex;
            }
        }
        ;
        killToken(killedPid, killedTid, pid) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                let { x: x, y: y } = this.playerList[killedPid].getRealTokenPosition(killedTid);
                this.runKillSmokeAnimation(x, y);
            }
            if (this.anyGeneralOnlineMode(this.arenaMode)) {
                radio('updateOnTokenKill').broadcast({ pid: killedPid, tid: killedTid });
            }
        }
        updateBlitzPoints(pid, totalPoints, pointDiff, quadrant, pointType) {
            let messageColor = pointDiff < 0 ? "red" : "green";
            this.playerList[pid].updatePointsUI(totalPoints);
            if (pointType == "token_kill" && pid == this._playerID) {
                this.renderQuadrantKill(messageColor, pointDiff, quadrant);
            }
        }
        shrinkToken(pid, tid, _scale, _offset, txtCount) {
            this.playerList[pid].shrinkToken(tid, _scale, _offset, txtCount);
        }
        onNotYourTurn(pid) {
            this.playerList[pid].diceContainer.notTurn();
        }
        ;
        renderMessage(sid, rid, msg) {
            this.playerList[sid].showChat(this.playerList[rid].getName(), msg);
            if (Ludo_Wild.Main.IS_FAKE_RANDOM && Math.random() <= 0.3) {
                window.setTimeout(() => {
                    this.playerList[rid].showChat(this.playerList[sid].getName(), Phaser.Math.between(0, 47));
                }, 3000);
            }
        }
        returnQuadPosition(_quad, _data) {
            let theta = _quad * 90;
            theta = Phaser.Math.degToRad(theta);
            let x = _data.x;
            let y = _data.y;
            let t_x = x - Ludo_Wild.Main.GAME.world.centerX;
            let t_y = y - Ludo_Wild.Main.GAME.world.centerY;
            x = (Math.cos(theta) * t_x - Math.sin(theta) * t_y) + Ludo_Wild.Main.GAME.world.centerX;
            y = (Math.sin(theta) * t_x + Math.cos(theta) * t_y) + Ludo_Wild.Main.GAME.world.centerY;
            return { x, y };
        }
        ;
        startGame(_arenaMode, _playerList, _colorArray, pid, _table) {
            segadroid.setState({
                state: 'playing',
                score: 0,
                metadata: oMetaManager.meta
            });
            this.arenaMode = _arenaMode;
            this._playerID = pid;
            this.gameTable = _table || 0;
            this.actualTable = this.gameTable;
            this.gameTable === 5 ? this.gameTable = 0 : this.gameTable;
            this.playerList = _playerList.slice(0);
            this.findTotalPlayers();
            this.colorArray = _colorArray.slice(0);
            let t_color;
            for (let i = 0; i < 4; i++) {
                t_color = this.colorArray[(pid + i) % 4];
                if (t_color === 0) {
                    t_color = this.getColor();
                    this.colorArray[(pid + i) % 4] = t_color;
                }
                const quadrant = this.getQuadrant(i, pid);
                this.playerList[(pid + i) % 4].setProps(t_color, quadrant, (pid + i) % 4);
            }
            if (!Ludo_Wild.Main.GAME.sound.mute) {
                Ludo_Wild.Main.GAME.sound.volume = 0.2;
            }
            if ((this.arenaMode !== Ludo_Wild.gameMode.ONLINE_BATTLE) && (!Ludo_Wild.BattleModeState.doesBattleHasBots)) {
                this.createBackButton();
            }
            this.createVolumeButton();
            this.addRandomBackground();
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.createBlitzTimerUI();
            }
            this.renderBoard();

            this.createKillSmokeAnimation();
            this.createTokens();
            if (this.anyGeneralOnlineMode(this.arenaMode)) {
                this.initGameServer();
            }
            if (this.anyGeneralOnlineMode(this.arenaMode) || Ludo_Wild.Main.IS_FAKE_RANDOM) {

                this.renderGiftButton();
            }
            this.createToast();
            this.createSpecialToast();
            this.createVoiceChat();
            this.createPopUp();
            this.createNetworkStatusNotificationTray();
            this.setTint(true);
            this.createCountDownUI();
            this.startCountDown();
            this.loadConfettiAnimation();
            this.createExitPopUp();
            radio('arenaScreenTint').subscribe([this.setTint, this]);
            radio("diceRolled").subscribe([this.onDiceRolled, this]);
            radio('networkStatusChange').subscribe([this.onNetworkStatusChange, this]);
            radio('onBackGameplay').subscribe([this.onBackButtonClick, this]);
            radio("diceTimeoutFake").subscribe([this.onDiceTimeoutFake, this]);
            radio("fakeMessageSend").subscribe([this.onFakeMessageSend, this]);
            radio("updateDeadPile").subscribe([this.onUpdateDeadPile, this]);

            Ludo_Wild.Main.ISONLINE = Ludo_Wild.NetworkStatus.ONLINE_GOOD;

            this.addConnectionCheckTimer();

            this.createplayIdPlayerIdMap();
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.createQuadrantEffect();
                this.createQuadrantKill();
                this.createBlitzTurnSkipToast();
                this.createHomeScore();
            }
        }
        renderInitialToasts() {

            this.removeBuffer();
            Analytics.Gama.send(Analytics.MESSAGE.BATTLE_ARENA_ENTERED);
            this.popUp.setText(this.langMgr.getText(Ludo_Wild.TEXTS.GAME_STARTED));
            this.popUp.show();
        }
        showQuitPopUpMessage(name) {
            this.popUp.setText(name + this.langMgr.getText(Ludo_Wild.TEXTS.LEFT_GAME));
            this.popUp.show();
        }
        addConnectionCheckTimer() {
            Ludo_Wild.Main.GAME.time.events.loop(5000, () => {
                Ludo_Wild.checkConnectionStrength();
            });
        }
        initGameServer() {
            //alert('start')
            this._GameServer = new Ludo_Wild.GameServer(true);
            const _playerDataArray = [];
            for (let i = 0; i < this.playerList.length; i++) {
                let _playerData;
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    _playerData = { active: true, tokenActive: false, diceActive: true, color: 0, dice: 0, id: 0, tokenState: [1, 1, 1, 1], sixes: 0, points: 0 };
                }
                else {
                    _playerData = { active: true, tokenActive: false, diceActive: true, color: 0, dice: 0, id: 0, tokenState: [0, 0, 0, 0], sixes: 0, points: 0 };
                }
                if (i === 0) {
                    _playerData.active = true;
                }
                else {
                    _playerData.active = false;
                }
                _playerData.color = this.playerList[i].Color;
                if (this.playerList[i].Playing) {
                    _playerData.id = i;
                }
                else {
                    _playerData.id = -1;
                }
                _playerDataArray.push(_playerData);
            }
            this._GameServer.setGameData(this.totalPlayers, _playerDataArray);
        }
        ;
        dispose() {
            this.toast = null;
            this.specialToast = null;
            this.popUp = null;
            this.gameOver = null;
            this.gameOverBlitz = null;
            this.messageBox = null;
            this.play_to_playerIdMap = {};
            this.pocketCircleReference = [];
            this.blitzTurnLeft = 3;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.quadrantEffectEmitter = null;
            }
            if (Ludo_Wild.Main.isVoiceChatListenersActive) {
                this.removeVoiceChatEventListeners();
            }
            ;
            if (this.anyGeneralOnlineMode(this.arenaMode)) {
                this._GameServer.destroy();
                this._GameServer = null;
            }
            try {
                if (radio.$.channels.arenaScreenTint && radio.$.channels.arenaScreenTint.length > 0) {
                    radio.$.channels.arenaScreenTint.pop();
                }
                if (radio.$.channels.diceRolled && radio.$.channels.diceRolled.length > 0) {
                    radio.$.channels.diceRolled.pop();
                }
                if (radio.$.channels.networkStatusChange && radio.$.channels.networkStatusChange.length > 0) {
                    radio.$.channels.networkStatusChange.pop();
                }
                if (radio.$.channels.onBackGameplay && radio.$.channels.onBackGameplay.length > 0) {
                    radio.$.channels.onBackGameplay.pop();
                }
                if (radio.$.channels.diceTimeoutFake && radio.$.channels.diceTimeoutFake.length > 0) {
                    radio.$.channels.diceTimeoutFake.pop();
                }
                if (radio.$.channels.fakeMessageSend && radio.$.channels.fakeMessageSend.length > 0) {
                    radio.$.channels.fakeMessageSend.pop();
                }
                if (radio.$.channels.updateDeadPile && radio.$.channels.updateDeadPile.length > 0) {
                    radio.$.channels.updateDeadPile.pop();
                }
                if (radio.$.channels.disableSelfTokens && radio.$.channels.disableSelfTokens.length > 0) {
                    radio.$.channels.disableSelfTokens.pop();
                }
                if (radio.$.channels.pointsBlitz && radio.$.channels.pointsBlitz.length > 0) {
                    radio.$.channels.pointsBlitz.pop();
                }
            }
            catch (e) {
                console.log(e);
            }
            window.clearTimeout(this.callTimeoutRefOnIncoming);
            window.clearTimeout(this.callTimeoutTimerRef);
            window.clearTimeout(this.notificationTimerRef);
            window.clearInterval(this.blitzTimerRef);
        }
        ;
        onNetworkStatusChange(_networkStatus) {
            if (!this.anyGeneralOnlineMode(this.arenaMode)) {
                return;
            }
            if (this.isNetworkTweenActive || _networkStatus === Ludo_Wild.NetworkStatus.ONLINE_GOOD) {
                return;
            }
            if (_networkStatus === Ludo_Wild.NetworkStatus.ONLINE_WEAK) {
                Ludo_Wild.Main.ISONLINE = Ludo_Wild.NetworkStatus.ONLINE_WEAK;
                this.networkNotificationTray.getChildAt(0).text = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NETWORK_SLOW);
                this.networkNotificationTray.getChildAt(1).frame = 1;
            }
            else if (_networkStatus === Ludo_Wild.NetworkStatus.OFFLINE) {
                Ludo_Wild.Main.ISONLINE = Ludo_Wild.NetworkStatus.OFFLINE;
                this.networkNotificationTray.getChildAt(0).text = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NETWORK_NOT_AVAILABLE);
                this.networkNotificationTray.getChildAt(1).frame = 4;
            }
            this.networkNotificationTween.start();
        }
        ;
        onSkippingTurn(pid) {
            if (pid === this._playerID) {
                this.runVibration();
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    this.blitzTurnLeft -= 1;

                    this.renderBlitzTurnSkipToast();
                    window.setTimeout(() => {
                        Ludo_Wild.Main.GAME.add.tween(this.blitzTurnSkipToast.scale).to({ x: 0, y: 0 }, 250, Phaser.Easing.Bounce.In, true)
                            .onComplete.add(() => {
                                this.blitzTurnSkipToast.visible = false;
                            });
                    }, 2000);
                }
                else {
                    this.toast.show(false, false);
                    this.toast.setText(this.langMgr.getSkipText(Ludo_Wild.TEXTS.THREE_SKIPS), 21);
                    window.setTimeout(this.fadeSkipToast.bind(this, this.toast), 2500);
                }
            }
        }
        fadeSkipToast(toast) {
            toast.fade();
            toast = null;
        }
        setTint(_isVisible, _type) {
            if (this.bgTintImage === null) {
                this.bgTintImage = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
                this.bgTintImage.inputEnabled = true;
                this.bgTintImage.events.onInputUp.add(this.onBgTintClick.bind(this));
            }
            this.bgTintImage.visible = _isVisible;
            if (Ludo_Wild.isClientVoiceChatAuthorized() && this.anyGeneralOnlineMode(this.arenaMode)) {
                try {
                    this.manageInputPriorityForVoiceChatButton(_isVisible);
                }
                catch (e) {
                    console.log("erro in setting priority id", e);
                }
            }
        }
        ;

        manageInputPriorityForVoiceChatButton(isVisibleTint) {
            if (this.callSetupUIElements) {
                if (isVisibleTint) {
                    if (this.callSetupUIElements[0].input) {
                        this.callSetupUIElements[0].input.priorityID = 1;
                    }
                    this.callSetupUIElements[2].input.priorityID = 1;
                }
                else {
                    if (this.callSetupUIElements[0].input) {
                        this.callSetupUIElements[0].input.priorityID = 3;
                    }
                    this.callSetupUIElements[2].input.priorityID = 3;
                }
            }
            if (!this.voiceChatButton) {
                return;
            }
            if (isVisibleTint) {
                this.voiceChatButton.input.priorityID = 1;
                this.endCallButtton.input.priorityID = 1;
            }
            else {
                this.voiceChatButton.input.priorityID = 3;
                this.endCallButtton.input.priorityID = 3;
            }
        }
        ;
        onBgTintClick() {
            if (this.messageBox && this.messageBox.isVisible()) {
                this.messageBox.hideMessageBox(false);
            }
        }
        ;
        createCountDownUI() {
            this.countDownUI = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME_WIDTH / 2, Ludo_Wild.Main.GAME_HEIGHT / 2, Ludo_Wild.generalSheet, "countdown_3");
            this.countDownUI.alpha = 0.8;
            this.countDownUI.anchor.set(0.5);
        }
        startCountDown() {
            this.countDownTimerRef = window.setInterval(() => {
                --this.countDown;
                if (this.countDown < 1) {
                    this.countDown = 0;
                    window.clearInterval(this.countDownTimerRef);
                    this.onCountDownEnd();
                    this.countDownUI.destroy();
                }
                else {
                    this.countDownUI.loadTexture(Ludo_Wild.generalSheet, "countdown_" + this.countDown);
                }
            }, 1000);
        }
        onCountDownEnd() {
            if (!this.anyGeneralOnlineMode(this.arenaMode)) {
                this.onStartGameTimerOffline();
            }
            else {
            }
            if (this.bgTintImage.visible) {
                this.waitingBuffer = new Ludo_Wild.Buffer();
                window.setTimeout(() => {
                    this.removeBuffer();
                }, 6000);
            }
        }
        ;
        setInitTint(_isVisible, _type) {
            if (this.bgTintImage === null) {
                this.bgTintImage = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
                this.bgTintImage.visible = true;
                this.bgTintImage.inputEnabled = true;
                this.bgTintImage.events.onInputUp.add(() => {
                    if (this.messageBox) {
                        this.messageBox.destroy();
                    }
                });
            }
            else {
                this.bgTintImage.visible = _isVisible;
                if (this.currentTintType !== Ludo_Wild.tintType.MSGBOX) {
                    Ludo_Wild.Main.GAME.world.bringToTop(this.bgTintImage);
                }
            }
        }
        ;
        createToast() {
            this.toast = new Ludo_Wild.Toast({ x: Ludo_Wild.Main.GAME.world.centerX, y: Ludo_Wild.Main.GAME.world.height - 320, texture: "bottom_popup", fontSize: 18 });
        }
        ;
        createNetworkToast() {
            this.networkToast = new Ludo_Wild.Toast({ x: Ludo_Wild.Main.GAME.world.centerX, y: Ludo_Wild.Main.GAME.world.height - 70, texture: "bottom_popup" });
        }
        ;
        createSpecialToast() {
            this.specialToast = new Ludo_Wild.Toast({ x: Ludo_Wild.Main.GAME.world.centerX, y: Ludo_Wild.Main.GAME.world.height - 70, texture: "bottom_popup" });
        }
        ;
        createPopUp() {
            this.popUp = new Ludo_Wild.PopUp({ x: Ludo_Wild.Main.GAME.world.centerX, y: Ludo_Wild.Main.GAME.world.centerY, texture: "centre_popup", fontSize: 28 });
        }
        getQuadrant(_index, pid) {
            if (this.totalPlayers === 2) {
                if (_index >= 1 && pid === 0) {
                    _index += 1;
                    if (_index > 3) {
                        _index = 1;
                    }
                    return _index;
                }
                else if (_index >= 1 && pid === 1) {
                    if (_index === 2) {
                        return 3;
                    }
                    else if (_index === 3) {
                        return 2;
                    }
                    else {
                        return _index;
                    }
                }
            }
            return _index;
        }
        findTotalPlayers() {
            for (let i = 0; i < 4; i++) {
                if (this.playerList[i].Playing) {
                    this.totalPlayers += 1;
                }
            }
        }
        getColor() {
            for (let i = 1; i <= 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (this.colorArray[j] === i) {
                        break;
                    }
                    else {
                        if (j === 3)
                            return i;
                    }
                }
            }
            return;
        }
        onTokenHome(data) {
            //alert('okkkk');
            updateScore(data._content.id, 56, 0, 0);
            Manager.AudioManager.getAudioInstance().playPegFinish();
            if (this.playerList[data._content.id].Playing === true) {
                this.playerList[data._content.id].activateDice();
                this.playerList[data._content.id].diceContainer.activateDice(true);
            }
            else {
                if (this.anyGeneralOnlineMode(this.arenaMode)) {
                    this.playerList[data._content.id].diceContainer.setTimerAssetsVisibility(false);
                }
            }
            if (!this.playerList[data._content.id].IS_AI) {
                const msg = this.playerList[data._content.id].getName() + this.langMgr.getText(Ludo_Wild.TEXTS.REACHED_HOME);
                this.showConfetti();
                if (this.arenaMode !== Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                    if (data._content.id !== this._playerID) {
                        Manager.AudioManager.getAudioInstance().playStarBustCelebration();
                        return;
                    }
                }
                Manager.AudioManager.getAudioInstance().playYayCelebration();
                this.playerList[data._content.id].diceContainer.changeToGeneric(true);
                this.playerList[data._content.id].diceContainer.showRipple();
                window.setTimeout(() => {
                    this.runVibration();
                }, 1500);
            }
        }
        ;
        loadConfettiAnimation() {
            this.celebrationSpriteSheet = Ludo_Wild.Main.GAME.add.sprite(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY, "celebration");
            this.celebrationSpriteSheet.anchor.setTo(0.5, 0.5);
            this.celebrationSpriteSheet.animations.add("celebrate");
            this.celebrationSpriteSheet.visible = false;
        }
        ;
        showConfetti() {
            this.celebrationSpriteSheet.visible = true;
            this.celebrationSpriteSheet.animations.play("celebrate", 18);
            if (Ludo_Wild.Config.rule == Ludo_Wild.Rules.BLITZ) {
                this.homeScoreText.visible = true;
                Ludo_Wild.Main.GAME.add.tween(this.homeScoreText)
                    .to({ alpha: 0, y: Ludo_Wild.Main.GAME.world.centerY - 200 + (Ludo_Wild.Home.textYgap * -20) }, 1500, Phaser.Easing.Linear.In, true)
                    .onComplete.add(() => {
                        this.homeScoreText.visible = false;
                        this.homeScoreText.alpha = 1;
                        this.homeScoreText.y = Ludo_Wild.Main.GAME.world.centerY - 100 + (Ludo_Wild.Home.textYgap * -20);
                    });
            }
            window.setTimeout(() => {
                this.celebrationSpriteSheet.animations.stop("celebrate");
                this.celebrationSpriteSheet.visible = false;
            }, 1000);
        }
        ;
        onTokenKilled(pid, killedPid) {
            this.playerList[pid].activateDice();
            this.playerList[pid].diceContainer.activateDice(true);
            if (this.arenaMode !== Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (this._playerID !== pid) {
                    return;
                }
            }
            this.playerList[pid].diceContainer.changeToGeneric(true);
            this.playerList[pid].diceContainer.showRipple();
            window.setTimeout(() => {
                this.playToastSound();
            }, 1500);
        }
        ;
        async onTokenReached(data) {
            //alert(data._content.pid);

            //alert(players[data._content.pid].totalScore);
            const player_id = userDataPlayer[0].players[data._content.pid].id;
            const token_id = data._content.tid;
            const dice_value = currentDiceValue;
            const game_id = userDataPlayer[0].players[data._content.pid].offline_game_id
            const userToken = '1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea';


            updateScoreWithTid(data._content.pid, data._content.tid, currentDiceValue);
            var i = data._content.pid;
            var totalP = 0;
            for (let k = 0; k < 4; k++) {
                if (this.playerList[k].Playing) {
                    totalP += 1;

                }

            }
            if (this.playerList[i].Playing) {
                if (totalP === 2) {
                    if (i === 1) {
                        i = 2
                    } else {
                        i = 0
                    }
                }

            }

            scoreTexts[i].setText("Score: " + players[data._content.pid].totalScore);

            if (players[data._content.pid].totalScore) {
                const objData = {
                    player_id: player_id,
                    offline_game_id: game_id,
                    local_token_index: token_id,
                    dice: dice_value,
                    total_player_score: players[data._content.pid].totalScore

                }
                //alert(JSON.stringify(objData))
                const responseStart = await fetch('https://lazioludo.com/api/offline-game/move', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea'
                    },
                    body: JSON.stringify(objData)
                });



                const dataStart = await responseStart.json();
                //alert(JSON.stringify(dataStart));
            }

            this.checkIfinPowerPosition(this.playerList[data._content.pid].tokens[data._content.tid].POSITION);
            this.checkIfEnteredColorZone(this.playerList[data._content.pid].tokens[data._content.tid].POSITION);
            if (data._content.pid === this._playerID) {
                radio('onTokenReachedClient').broadcast(data);
            }
            if (this.currentDice === 6) {
                this.playerList[data._content.pid].diceContainer.activateDice();
                this.playerList[data._content.pid].activateDice();
                if (!this.playerList[data._content.pid].IS_AI) {
                    if (this.arenaMode !== Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                        if (data._content.pid !== this._playerID) {
                            return;
                        }
                    }
                    this.playerList[data._content.pid].diceContainer.changeToGeneric(true);
                    this.playerList[data._content.pid].diceContainer.showRipple();
                }
            }
        }
        checkIfinPowerPosition(pos) {
            if (pos === 1 || pos === 9 || pos === 14 || pos === 22 || pos === 27 || pos === 35 || pos === 40 || pos === 48) {
                Manager.AudioManager.getAudioInstance().playStarLanding();
            }
        }
        ;
        checkIfEnteredColorZone(pos) {
            if (pos > 50) {
                Manager.AudioManager.getAudioInstance().playEnterColorZone();
            }
        }
        ;
        startDiceTimer(pid, _visible = true) {
            this.playerList[pid].diceContainer.activateDice(_visible);
            this.playerList[pid].activateDice();
            this.prevOtherPid = pid;
        }
        ;
        onDiceRolled() {
            this.playerList[this.currentPid].playerActive = true;
            for (let p = 1; p < this.totalPlayers; p++) {
                this.playerList[(this.currentPid + p) % this.totalPlayers].playerActive = false;
            }
            if (this.currentDice === 6 || Ludo_Wild.Main.IS_FAKE_RANDOM) {
                this.playerList[this.currentPid].diceContainer.activateDice();
                this.playerList[this.currentPid].activateDice();
            }
            if (this.currentPid === this._playerID || this.arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.showtokenPointer(this.currentPid, this.currentDice);
            }
        }
        ;
        RollDice(playerId, diceval) {
            if (this.anyGeneralOnlineMode(this.arenaMode)) {
                if (this._playerID === playerId) {
                    radio('diceSimulation').broadcast({ id: playerId, diceVal: diceval });
                }
            }
            let d1;
            d1 = diceval;
            this.currentDice = diceval;
            this.isDiceRolling = false;
            this.playerList[playerId].diceContainer.renderDiceImage(d1, true);
            this.currentPid = playerId;
        }
        playToastSound() {
            Manager.AudioManager.getAudioInstance().playToast();
        }
        showToasts(msg, playerId, fade = true, _customTexture) {
            if (this.isGameOver) {
                return;
            }
            let isMessageInvert = false;
            this.toast.setText(msg);
            if (this.arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (playerId === 1 || playerId === 2) {
                    isMessageInvert = true;
                }
            }
            if (_customTexture !== undefined) {
                this.toast.show(isMessageInvert, fade, _customTexture);
            }
            else {
                this.toast.show(isMessageInvert, fade);
            }
        }
        ;
        checkToastFade(pid) {
            if (this.toast !== undefined && this.toast !== null && this.toast.isActive()) {
                this.toast.fade();
            }
            if (pid === this._playerID || this.arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.playerList[pid].diceContainer.stopRippleEffect();
            }
        }
        ;
        onPlayerWon(gameData, place, isgameover, matchType = "", reason = "noop") {
            console.log("🚀 onPlayerWon ~ gameData", gameData);
            this.isGameOver = isgameover;
            if (isgameover && Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                window.clearInterval(this.blitzTimerRef);
            }
            this.toast.fade();
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.gameOverBlitz = new Ludo_Wild.GameOverBlitz({
                    gameMode: this.arenaMode, totalPlayers: this.totalPlayers, place, data: gameData, isGameOver: isgameover,
                    matchType, reason
                });
            }
            else {
                this.gameOver = new Ludo_Wild.GameOver({
                    gameMode: this.arenaMode, totalPlayers: this.totalPlayers, place, data: gameData, isGameOver: isgameover,
                    matchType
                });
            }
        }
        ;
        getNextPlayerId(cId) {
            let nId = -1;
            const tp = this.totalPlayers;
            for (let i = 1; i < tp; i++) {
                if (this.playerList[(cId + i) % tp].Playing === true) {
                    nId = (cId + i) % tp;
                    break;
                }
            }
            return nId;
        }
        ;
        moveToken(pid, tid, steps, forced = false) {
            this.playerList[pid].moveToken(tid, steps);
            if (this.anyGeneralOnlineMode(this.arenaMode)) {
                if (pid === this._playerID && forced === true) {
                    radio('moveOtherToken').broadcast({ pid, tid, diceVal: steps, isSelf: true });
                }
                else if (pid !== this._playerID) {
                    radio('moveOtherToken').broadcast({ pid, tid, diceVal: steps, isSelf: false });
                }
            }
        }
        ;
        ontokenMove(pid) {
            if (this._playerID === pid || this.arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                for (let i = 0; i < 4; i++) {
                    this.playerList[pid].tokens[i].hidePointer();
                }
                this.isTokenPointerShown = false;
            }
        }
        ;
        showtokenPointer(pid, dice) {
            let activeTokenCount = 0;
            if (this.playerList[pid].Playing) {
                for (let j = 0; j < 4; j++) {
                    const _position = this.playerList[pid].tokens[j].POSITION;
                    if (_position + dice <= 57) {
                        if (Ludo_Wild.Config.rule !== Ludo_Wild.Rules.BLITZ) {
                            if (_position === 0 && dice !== 6) {
                                continue;
                            }
                        }
                        this.playerList[pid].tokens[j].showPointer();
                        ++activeTokenCount;
                    }
                }
                this.isTokenPointerShown = true;
            }
            if (activeTokenCount > 1) {
                if (!this.playerList[pid].IS_AI) {
                    if (pid !== this._playerID) {
                        return;
                    }
                }
            }
        }
        ;
        deactivatePlayerDice(pid) {
            if (!this.isDiceRolling) {
                this.playerList[pid].diceContainer.deactivateDice();
                this.playerList[pid].deactivateDice();
            }
            else {
                window.setTimeout(() => {
                    this.deactivatePlayerDice(pid);
                }, 100);
            }
        }
        ;
        hideSelfTokens() {
            if (this.isTokenPointerShown && (this.anyGeneralOnlineMode(this.arenaMode) || Ludo_Wild.Main.IS_FAKE_RANDOM)) {
                this.ontokenMove(this._playerID);
            }
        }
        manageDiceVisibility(pid, force = false, _AIHome, _AIKill) {
            if (this.isTokenPointerShown && (this.anyGeneralOnlineMode(this.arenaMode) || Ludo_Wild.Main.IS_FAKE_RANDOM)) {
                this.ontokenMove(pid);
            }

            if ((this.playerList[(pid) % this.totalPlayers].Playing && this.currentDice === 6 && !force)
                || pid === _AIHome || pid === _AIKill) {
                if (this.playerList[(pid) % this.totalPlayers].IS_AI) {
                    Ludo_Wild.Main.GAME.time.events.add(1000, () => {
                        this.playerList[(pid) % this.totalPlayers].RollDice();
                    });
                }
                else {
                    if (pid === this._playerID || this.arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                        this.playToastSound();
                    }
                }
            }
            else {
                let timer;
                if (this.anyGeneralOnlineMode(this.arenaMode)) {
                    timer = 100;
                }
                else {
                    timer = 800;
                }
                Ludo_Wild.Main.GAME.time.events.add(timer, () => {
                    if (this.playerList[pid] && this.playerList[pid].Playing) {
                        this.playerList[pid].diceContainer.deactivateDice();
                        this.playerList[pid].deactivateDice();
                        if (this.anyGeneralOnlineMode(this.arenaMode) || Ludo_Wild.Main.IS_FAKE_RANDOM) {
                            this.playerList[pid].diceContainer.setTimerAssetsVisibility(false);
                        }
                    }
                    pid = this.getNextPlayerId(pid);
                    if (this.playerList[pid] && this.playerList[pid].Playing) {
                        this.playerList[pid].diceContainer.activateDice();
                        this.playerList[pid].activateDice();
                    }
                    if (this.playerList[pid] && this.playerList[pid].IS_AI) {
                        Ludo_Wild.Main.GAME.time.events.add(500, () => {
                            this.playerList[pid].RollDice();
                        });
                    }
                    else {
                        if (this.arenaMode !== Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                            if (pid !== this._playerID) {
                                return;
                            }
                        }
                        this.playToastSound();
                        this.runVibration();
                    }
                });
            }
        }
        anyGeneralOnlineMode(arenaMode) {
            if (arenaMode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || arenaMode === Ludo_Wild.gameMode.RANDOM_ONLINE
                || arenaMode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return true;
            }
            return false;
        }
        getTrimmedName(str) {
            return str.substr(0, 8);
        }
        createVolumeButton() {
            let volumeTextureIndex = 0;
            if (!oMetaManager.localGetItem("soundMute")) {
                oMetaManager.localSetItem("soundMute", 0);
            }
            else {
                if (oMetaManager.localGetItem("soundMute") === true) {
                    oMetaManager.localSetItem("soundMute", 1);
                }
                volumeTextureIndex = oMetaManager.localGetItem("soundMute");
            }
            const volumeButton = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.width - 65, 65, Ludo_Wild.generalSheet, "volume" + volumeTextureIndex);
            volumeButton.inputEnabled = true;
            volumeButton.anchor.setTo(0.5, 0.5);
            volumeButton.events.onInputUp.add(this.onVolumeClick.bind(this, volumeButton, this, volumeTextureIndex), this);
        }
        ;
        onVolumeClick(volumeButton, context) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                return;
            }
            Ludo_Wild.Main.GAME.add.tween(volumeButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)
                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {
                    let currentVolumeIndex = oMetaManager.localGetItem("soundMute");
                    currentVolumeIndex = ++currentVolumeIndex % 2;
                    volumeButton.loadTexture(Ludo_Wild.generalSheet, "volume" + currentVolumeIndex);
                    Ludo_Wild.Main.GAME.sound.mute = !Ludo_Wild.Main.GAME.sound.mute;
                    oMetaManager.localSetItem("soundMute", currentVolumeIndex);
                });
        }
        createBackButton() {
            let backTextureIndex = 0;
            this.backButton = Ludo_Wild.Main.GAME.add.image(65, 65, Ludo_Wild.generalSheet, "btn_back");
            this.backButton.inputEnabled = true;
            this.backButton.anchor.setTo(0.5, 0.5);
            this.backButton.events.onInputUp.add(this.onBackButtonClick.bind(this), this);
        }
        ;
        onBackButtonClick() {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                return;
            }
            if (this.arenaMode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return;
            }
            Manager.AudioManager.getAudioInstance().playClick();
            let _This = this;
            Ludo_Wild.Main.GAME.add.tween(_This.backButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)

                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Linear.In, true).onComplete.add(() => {
                    _This.renderExitPopUp();
                });
        }
        createExitPopUp() {

            this.exitPopUpPanel = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 120, Ludo_Wild.popupSheet, "exit_popup");
            const warningText = Ludo_Wild.Main.GAME.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.EXIT_GAME), {
                font: (36 + Ludo_Wild.Main.FONTSIZE - (Ludo_Wild.Home.textYgap * 7)).toString() + "px", fill: "#401b0b"
            });
            warningText.font = Ludo_Wild.Main.FONT;
            warningText.align = "center";
            warningText.anchor.setTo(0.5);
            this.exitPopUpPanel.addChild(warningText);
            this.exitPopUpPanel.anchor.setTo(0.5);
            this.exitPopUpPanel.addChild(this.createYesButton());
            this.exitPopUpPanel.addChild(this.createNoButton());
            this.exitPopUpPanel.scale.setTo(0);
            this.exitPopUpPanel.visible = false;
            this.exitPopUpPanel.alive = false;
        }
        ;
        createYesButton() {

            const btnYes = Ludo_Wild.Main.GAME.add.image((-680 / 2) + 180, (531 / 2) + 50, Ludo_Wild.popupSheet, "btn_yes0");
            btnYes.anchor.setTo(0.5);
            btnYes.inputEnabled = true;
            btnYes.events.onInputDown.add(() => {
                btnYes.loadTexture(Ludo_Wild.popupSheet, "btn_yes1");
            });
            btnYes.events.onInputUp.add(this.onExitYes.bind(this), this);
            const yesText = Ludo_Wild.Main.GAME.add.text(0, -5 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.YES), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            yesText.font = Ludo_Wild.Main.FONT;
            yesText.anchor.setTo(0.5);
            yesText.setShadow(0, 2, "#000000", 3);
            btnYes.addChild(yesText);
            btnYes.input.priorityID = 2;
            return btnYes;
        }
        ;
        createNoButton() {
            const btnNo = Ludo_Wild.Main.GAME.add.image((680 / 2) - 180, (531 / 2) + 50, Ludo_Wild.generalSheet, "btn_Standard0");
            btnNo.anchor.setTo(0.5);
            btnNo.inputEnabled = true;
            btnNo.events.onInputDown.add(() => {
                btnNo.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            });
            btnNo.events.onInputUp.add(this.onExitNo.bind(this), this);
            const noText = Ludo_Wild.Main.GAME.add.text(0, -5 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.NO), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            noText.font = Ludo_Wild.Main.FONT;
            noText.anchor.setTo(0.5);
            noText.setShadow(0, 2, "#000000", 3);
            btnNo.addChild(noText);
            btnNo.input.priorityID = 2;
            return btnNo;
        }
        ;
        onExitYes(e) {
            var currentDiceValue = 0;
            initialPlayerScore(0);
            initialPlayerScore(1);
            initialPlayerScore(2);
            initialPlayerScore(3);
            Manager.AudioManager.getAudioInstance().playLongClick();
            this.exitPopUpPanel.getChildAt(1).loadTexture(Ludo_Wild.popupSheet, "btn_yes0");
            Ludo_Wild.Main.GAME.add.tween(this.exitPopUpPanel.scale).to({ x: 0, y: 0 }, 50, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    integration.showInterstitial();
                    Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.HOME;
                    this.setTint(false);
                    this.exitPopUpPanel.visible = false;
                    this.exitPopUpPanel.alive = false;
                    window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
                    radio('arenaScreenTint').broadcast(false);
                    radio('quitReq').broadcast();
                    segadroid.setState({
                        state: "over",
                        score: 0
                    });
                });
        }
        ;
        onExitNo() {
            Manager.AudioManager.getAudioInstance().playLongClick();
            this.exitPopUpPanel.getChildAt(2).loadTexture(Ludo_Wild.generalSheet, "btn_Standard0");

            Ludo_Wild.Main.GAME.add.tween(this.exitPopUpPanel.scale).to({ x: 0, y: 0 }, 150, Phaser.Easing.Quadratic.In, true)
                .onComplete.add(() => {
                    Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEPLAY_SCREEN;
                    this.setTint(false);
                    this.exitPopUpPanel.visible = false;
                    this.exitPopUpPanel.alive = false;
                });
        }
        ;
        renderExitPopUp() {

            Ludo_Wild.Main.GAME.add.tween(this.exitPopUpPanel.scale).to({ x: 1, y: 1 }, 150, Phaser.Easing.Quadratic.Out, true)
                .onStart.add(() => {
                    Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.POPUP_SCREEN;
                    this.setTint(true);
                    this.exitPopUpPanel.visible = true;
                    this.exitPopUpPanel.alive = true;
                });
        }
        ;
        onStartGameTimerOffline() {

            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ && !this.anyGeneralOnlineMode(this.arenaMode)) {
                if (this.playerList.filter((e) => e.Playing === true).length > 2) {
                    this.blitzTimerCount = 480;
                }
                else {
                    this.blitzTimerCount = 240;
                }

                this.blitzTimerRef = window.setInterval(() => {
                    --this.blitzTimerCount;
                    if (this.blitzTimerCount === 0) {
                        this.blitzTimerLabel.text = this.renderTimerCount(this.blitzTimerCount);
                        this.onBlitzTimerEnd();
                        clearInterval(this.blitzTimerRef);
                    }
                    else {
                        this.blitzTimerLabel.text = this.renderTimerCount(this.blitzTimerCount);
                    }
                }, 1000);
            }
            this.setTint(false);
            this.playerList[0].startDiceTimer();
            this.renderInitialToasts();
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEPLAY_SCREEN;


            //this.onTokenReached({ _content: { pid: 0, tid:1 } });
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.GAMEPLAY_SCREEN }, "", "#Gameplay");


            //this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_HOME, data: { id: 1 } });
            //updateTokenScreenPos(0, undefined, undefined, false)
            //const data = { data: { pid: 0, tid:1 } };
            //alert('ok');
            //onRequestTokenMovement(data);
            //onTokenReached
            //radio('onRequestTokenMovement').broadcast(data);
        }
        ;
        createplayIdPlayerIdMap() {
            for (let i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i].getplayId() !== undefined) {
                    this.play_to_playerIdMap[this.playerList[i].getplayId()] = i;
                }
            }
            ;

        }
        ;
        createNetworkStatusNotificationTray() {

            this.networkNotificationTray = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, -(44 / 2), Ludo_Wild.arenaSheet, "wifi_tray");
            this.networkNotificationTray.anchor.setTo(0.5);
            const label = Ludo_Wild.Main.GAME.add.text(-18, -2 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NETWORK_SLOW), { font: (23 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            label.font = Ludo_Wild.Main.FONT;
            label.anchor.setTo(0.5, 0.5);
            const statusIcon = Ludo_Wild.Main.GAME.add.image(this.networkNotificationTray.width / 2 - (28), -4, "wifiStatus");
            statusIcon.anchor.setTo(0.5);
            statusIcon.frame = 1;
            this.networkNotificationTray.addChild(label);
            this.networkNotificationTray.addChild(statusIcon);
            const tween1 = Ludo_Wild.Main.GAME.add.tween(this.networkNotificationTray).to({ y: this.networkNotificationTray.y + (44) }, 800, Phaser.Easing.Quadratic.In, false);
            tween1.onStart.add(() => {
                this.isNetworkTweenActive = true;

            });
            const tween2 = Ludo_Wild.Main.GAME.add.tween(this.networkNotificationTray).to({ y: -(44 / 2) }, 800, Phaser.Easing.Quadratic.In, false, 1800);
            tween2.onComplete.add(() => {

                this.isNetworkTweenActive = false;
            });
            this.networkNotificationTween = tween1.chain(tween2);
        }
        ;
        runVibration() {
            try {
                window.navigator.vibrate(200);
            }
            catch (e) {
                console.log(e);
            }
        }
        ;

        onDiceTimeoutFake() {
            this.onSkippingTurn(0);
        }
        ;
        onFakeMessageSend(data) {

            this.renderMessage(data.sid, data.rid, data.msg);
        }
        ;
        createVoiceChat() {
            if (!Ludo_Wild.isClientVoiceChatAuthorized()) {
                return;
            }
            if (this.anyGeneralOnlineMode(this.arenaMode) || Ludo_Wild.Main.IS_FAKE_RANDOM) {
                this.setUpVoiceChat();
                this.createCallSetupUIElements();
            }
        }
        ;
        setUpVoiceChat() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Ludo_Wild.joinVoiceRoom(Ludo_Wild.getMatchCredentials().matchId, this.playerList[this._playerID].getplayId());
                Ludo_Wild.addVoiceChatListeners(this.onVolumeChange.bind(this), this.onMicStatusChange.bind(this), this.onIncomingCall.bind(this), this.onCallConnect.bind(this), this.onCallDisconnect.bind(this), this.onConnectionStatusChange.bind(this));
            });
        }
        ;
        createCallSetupUIElements() {
            const btnCallBg = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 50, Ludo_Wild.arenaSheet, "btn_call_bg");
            btnCallBg.anchor.setTo(0.5);
            btnCallBg.scale.setTo(0, 1);
            this.callSetupUIElements.push(btnCallBg);
            btnCallBg.events.onInputUp.add(() => {
                Ludo_Wild.Main.GAME.add.tween(btnCallBg.scale).to({ x: 0.95, y: 0.95 }, 150, Phaser.Easing.Quadratic.Out, true, 0, 0, true)
                    .onComplete.add(() => {
                        this.afterCallButtonAnimation(callBtnStatusText, Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.CONNECTING));
                    });
            });
            const iconCall = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 55, Ludo_Wild.arenaSheet, "icon_phone");
            iconCall.anchor.setTo(0.5, 0.5);
            iconCall.visible = false;
            this.callSetupUIElements.push(iconCall);
            const btnCall = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 50, Ludo_Wild.arenaSheet, "btn_call");
            btnCall.anchor.setTo(0.5);
            this.callSetupUIElements.push(btnCall);
            const callBtnStatusText = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX + 25, Ludo_Wild.Main.GAME.world.height - 55 + (Ludo_Wild.Home.textYgap * -20), "", { font: (25 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            callBtnStatusText.font = Ludo_Wild.Main.FONT;
            callBtnStatusText.anchor.setTo(0.5, 0.5);
            this.callSetupUIElements.push(callBtnStatusText);
            btnCall.inputEnabled = true;
            btnCall.input.priorityID = 3;
            btnCall.events.onInputUp.add(() => {
                if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                    return;
                }
                Ludo_Wild.Main.GAME.add.tween(btnCall.scale).to({ x: 0.9, y: 0.9 }, 80, Phaser.Easing.Quadratic.Out, true, 0, 0, true).onComplete.add(() => {
                    this.onCallButtonClick(btnCallBg, iconCall, btnCall, callBtnStatusText, Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.CONNECTING), false);
                });
            });
            this.notificationTimerRef = window.setTimeout(() => {
                this.notifyCallfeature();
            }, 10000);
        }
        ;
        notifyCallfeature() {
            ++this.notifyCount;
            if (this.notifyCount > 2) {
                return;
            }
            if (this.readyForPeerConnect || this.isCallStarted || this.isIncoming) {
                return;
            }
            this.onCallButtonClick(this.callSetupUIElements[0], this.callSetupUIElements[1], this.callSetupUIElements[2], this.callSetupUIElements[3], Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.TAP_TO_TALK), false, true);
        }
        ;
        resetCallUI() {

            this.callSetupUIElements[2].visible = true;
            this.callSetupUIElements[2].inputEnabled = true;
            this.callSetupUIElements[2].input.priorityID = 3;
            this.callSetupUIElements[2].alpha = 1;
            this.callSetupUIElements[2].x = Ludo_Wild.Main.GAME.world.centerX;
            this.callSetupUIElements[1].visible = false;
            this.callSetupUIElements[0].scale.setTo(0, 1);
            this.callSetupUIElements[0].visible = true;
            if (this.callSetupUIElements[0].inputEnabled) {
                this.callSetupUIElements[0].inputEnabled = false;
            }
            this.callSetupUIElements[3].text = "";
        }
        ;
        onCallButtonClick(btnCallBg, iconCall, btnCall, callBtnStatusText, callBtnStatusString, isIncomingCall, isNotification = false) {
            Ludo_Wild.Main.GAME.add.tween(btnCallBg.scale).to({ x: 1 }, 350, Phaser.Easing.Quadratic.In, true);
            Ludo_Wild.Main.GAME.add.tween(btnCall).to({ x: Ludo_Wild.Main.GAME.world.centerX - 120 }, 350, Phaser.Easing.Quadratic.In, true)
                .onComplete.add(() => {
                    iconCall.visible = true;
                    iconCall.position.x = Ludo_Wild.Main.GAME.world.centerX - 120;
                    btnCall.inputEnabled = false;
                    if (isNotification === true) {
                        this.manageCallNotification(btnCallBg, callBtnStatusText, callBtnStatusString);
                    }
                    else {
                        if (isIncomingCall) {
                            this.manageIncomingCall(btnCallBg, callBtnStatusText, callBtnStatusString);
                        }
                        else {
                            this.afterCallButtonAnimation(callBtnStatusText, callBtnStatusString);
                        }
                    }
                });
            Ludo_Wild.Main.GAME.add.tween(btnCall).to({ alpha: 0 }, 350, Phaser.Easing.Quadratic.In, true);
        }
        ;
        manageCallNotification(btnCallBg, callBtnStatusText, callBtnStatusString) {
            this.changeCallStatusText(callBtnStatusText, callBtnStatusString);
            window.setTimeout(() => {
                this.resetCallUI();
                this.notificationTimerRef = window.setTimeout(() => {
                    this.notifyCallfeature();
                }, 15000);
            }, 1000);
        }
        ;
        changeCallStatusText(callBtnStatusText, statusText) {
            callBtnStatusText.visible = true;
            callBtnStatusText.text = statusText;
            if (!this.callStatusTween) {
                this.callStatusTween = Ludo_Wild.Main.GAME.add.tween(callBtnStatusText).to({ alpha: 0.2 }, 800, Phaser.Easing.Quadratic.In, true, 0, -1, true);
            }
        }
        ;
        manageIncomingCall(btnCallBg, callBtnStatusText, callBtnStatusString) {
            btnCallBg.inputEnabled = true;
            btnCallBg.input.priorityID = 3;
            this.changeCallStatusText(callBtnStatusText, callBtnStatusString);
        }
        ;
        afterCallButtonAnimation(callBtnStatusText, callBtnStatusString) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.readyForPeerConnect) {
                    return;
                }
                if (!this.isIncoming) {
                    this.changeCallStatusText(callBtnStatusText, callBtnStatusString);
                }
                else {
                    this.changeCallStatusText(callBtnStatusText, Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.PICKING_UP));
                }

                yield Ludo_Wild.connectCallToRoom();
                this.readyForPeerConnect = true;
                this.addTimeoutForCall();
            });
        }
        ;
        addTimeoutForCall() {
            this.callTimeoutTimerRef = window.setTimeout(() => {
                this.onCallConnectionFailed();
            }, 60000);
        }
        ;
        onCallConnect(e) {
            if (this.isCallStarted) {
                return;
            }
            window.clearTimeout(this.callTimeoutTimerRef);
            window.clearTimeout(this.callTimeoutRefOnIncoming);
            this.isCallStarted = true;
            this.isIncoming = false;
            this.callSetupUIElements[1].animations.stop();
            if (this.incomingCallAnimationImageList) {
                for (let i = 0; i < this.incomingCallAnimationImageList.length; i++) {
                    this.incomingCallAnimationImageList[i].kill();
                }
            }
            this.changeCallStatusText(this.callSetupUIElements[3], Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.TALK_TO_PLAYERS));
            window.setTimeout(() => {
                this.renderMuteAndDisconnectUI();
                this.onClickVoiceChatButton(this.voiceChatButton, this);
            }, 2000);
        }
        ;
        onCallDisconnect(data) {
            this.playerList[this.play_to_playerIdMap[data.detail.name]].resetCallUI();
            if (data.detail.peersConnected === 0) {
                this.playerList[this.play_to_playerIdMap[Ludo_Wild.playerData.playId]].resetCallUI();
                this.onEndCallClick();
            }
        }
        ;
        onConnectionStatusChange(data) {
        }
        ;
        renderMuteAndDisconnectUI() {
            for (let i = 0; i < this.callSetupUIElements.length; i++) {
                this.callSetupUIElements[i].visible = false;
            }
            let micIndex = 1;
            if (!oMetaManager.localGetItem("micMute")) {
                oMetaManager.localSetItem("micMute", 1);
            }
            else {
                micIndex = oMetaManager.localGetItem("micMute");
            }
            if (!this.voiceChatButton) {

                this.voiceChatButton = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX - 60, Ludo_Wild.Main.GAME.world.height - 50, Ludo_Wild.arenaSheet, "btn_mic" + micIndex);
                let voiceTextString = "";
                if (micIndex === 1) {
                    voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.UNMUTE);
                }
                else {
                    voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.MUTE);
                }
                const voiceText = Ludo_Wild.Main.GAME.add.text(0 + 15, -3 + (Ludo_Wild.Home.textYgap * -20), voiceTextString, {
                    font: (25 + Ludo_Wild.Main.FONTSIZE).toString() + "px",
                    fill: "#494d4d"
                });
                voiceText.font = Ludo_Wild.Main.FONT;
                voiceText.anchor.setTo(0.5);
                this.voiceChatButton.addChild(voiceText);
                this.voiceChatButton.inputEnabled = true;
                this.voiceChatButton.input.priorityID = 3;
                this.voiceChatButton.anchor.setTo(0.5, 0.5);
                this.voiceChatButton.scale.setTo(0.85);
                this.voiceChatButton.events.onInputUp.add(this.onClickVoiceChatButton.bind(this), this);
            }
            else {
                this.voiceChatButton.loadTexture(Ludo_Wild.arenaSheet, "btn_mic" + micIndex);
                let voiceTextString = "";
                if (micIndex === 1) {
                    voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.UNMUTE);
                }
                else {
                    voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.MUTE);
                }

                this.voiceChatButton.getChildAt(0).text = voiceTextString;
                this.voiceChatButton.visible = true;
                this.voiceChatButton.inputEnabled = true;
                this.voiceChatButton.input.priorityID = 3;
            }
            if (!this.endCallButtton) {

                this.endCallButtton = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX + 60, Ludo_Wild.Main.GAME.world.height - 50, Ludo_Wild.arenaSheet, "btn_end_call");
                this.endCallButtton.anchor.setTo(0.5);
                this.endCallButtton.inputEnabled = true;
                this.endCallButtton.scale.setTo(0.9);
                this.endCallButtton.input.priorityID = 3;
                this.endCallButtton.events.onInputUp.add(this.onEndCallClick.bind(this), this);
            }
            else {
                this.endCallButtton.visible = true;
                this.endCallButtton.inputEnabled = true;
                this.endCallButtton.input.priorityID = 3;
            }
        }
        ;
        onEndCallClick(fromPeerDisconnectEvent = false) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                return;
            }
            console.log("Ending call");
            Ludo_Wild.endCall();
            this.isCallStarted = false;
            this.readyForPeerConnect = false;
            this.voiceChatButton.visible = false;
            this.voiceChatButton.inputEnabled = false;
            this.endCallButtton.visible = false;
            this.endCallButtton.inputEnabled = false;
            oMetaManager.localSetItem("micMute", 1);
            this.resetCallUI();
            this.resetPlayerHUDCallUI();
        }
        ;
        resetPlayerHUDCallUI() {
            for (let i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i].Playing) {
                    this.playerList[i].resetCallUI();
                }
            }
        }
        ;

        onIncomingCall(e) {
            if (this.readyForPeerConnect) {

                return;
            }

            if (this.isIncoming) {
                return;
            }
            this.isIncoming = true;
            console.log("On incoming call", e);
            this.onCallButtonClick(this.callSetupUIElements[0], this.callSetupUIElements[1], this.callSetupUIElements[2], this.callSetupUIElements[3], Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.INCOMING_CALL), true);
            const callIcon = this.callSetupUIElements[1];
            window.setTimeout(() => {
                this.createIncomingCallAnimation(callIcon);
                this.addTimeOutForIncomingCall();
            }, 350);
        }
        ;
        addTimeOutForIncomingCall() {
            this.callTimeoutRefOnIncoming = window.setTimeout(() => {
                this.isIncoming = false;

                if (this.incomingCallAnimationImageList) {
                    for (let i = 0; i < this.incomingCallAnimationImageList.length; i++) {
                        this.incomingCallAnimationImageList[i].kill();
                    }
                }
                for (let i = 0; i < this.callSetupUIElements.length; i++) {
                    this.callSetupUIElements[i].visible = false;
                }
                this.resetCallUI();
            }, 60000);
        }
        ;
        createIncomingCallAnimation(callIcon) {

            Ludo_Wild.Main.GAME.add.tween(callIcon).to({ angle: 20 }, 150, Phaser.Easing.Linear.In).to({ angle: -20 }, 150,

                Phaser.Easing.Linear.Out, true, 0, -1, true);
            const callWave1 = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX - 112, Ludo_Wild.Main.GAME.world.height - 65, Ludo_Wild.arenaSheet, "icon_call_wave");
            callWave1.anchor.setTo(0.5);
            callWave1.scale.setTo(0);
            const t1 = Ludo_Wild.Main.GAME.add.tween(callWave1.scale).to({ x: 0.6, y: 0.6 }, 500, Phaser.Easing.Sinusoidal.Out, true, 0, -1, false);
            const callWave2 = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX - 108, Ludo_Wild.Main.GAME.world.height - 70, Ludo_Wild.arenaSheet, "icon_call_wave");
            callWave2.anchor.setTo(0.5);
            callWave2.scale.setTo(0);
            const t2 = Ludo_Wild.Main.GAME.add.tween(callWave2.scale).to({ x: 0.8, y: 0.8 }, 500, Phaser.Easing.Sinusoidal.Out, true, 0, -1, false);
            const callWave3 = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX - 105, Ludo_Wild.Main.GAME.world.height - 75, Ludo_Wild.arenaSheet, "icon_call_wave");
            callWave3.anchor.setTo(0.5);
            callWave3.scale.setTo(0);
            const t3 = Ludo_Wild.Main.GAME.add.tween(callWave3.scale).to({ x: 1.2, y: 1.2 }, 500, Phaser.Easing.Sinusoidal.Out, true, 0, -1, false);
            this.incomingCallAnimationImageList = [];
            this.incomingCallAnimationImageList.push(callWave1);
            this.incomingCallAnimationImageList.push(callWave2);
            this.incomingCallAnimationImageList.push(callWave3);
        }
        ;
        onCallConnectionFailed() {

            Ludo_Wild.endCall();
            this.readyForPeerConnect = false;

            for (let i = 0; i < this.callSetupUIElements.length; i++) {
                this.callSetupUIElements[i].visible = false;
            }
            const connectionFailedLabel = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 50, Ludo_Wild.arenaSheet, "btn_connect_error");
            connectionFailedLabel.anchor.setTo(0.5);
            const connectionFailedLabelText = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 55 + (Ludo_Wild.Home.textYgap * -20), "", { font: (25 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            connectionFailedLabelText.anchor.setTo(0.5);
            connectionFailedLabelText.font = Ludo_Wild.Main.FONT;
            connectionFailedLabelText.text = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.CANT_CONNECT_CALL);
            window.setTimeout(() => {
                connectionFailedLabel.visible = false;
                connectionFailedLabel.destroy();
                connectionFailedLabelText.visible = false;
                connectionFailedLabelText.destroy();
                this.resetCallUI();
            }, 500);
        }
        ;
        onClickVoiceChatButton(voiceChatButton, context) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                return;
            }
            Ludo_Wild.Main.GAME.add.tween(voiceChatButton.scale).to({ x: 0.80, y: 0.80 }, 75, Phaser.Easing.Quadratic.In)
                .to({ x: 0.85, y: 0.85 }, 75, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {

                    let currentMicIndex = oMetaManager.localGetItem("micMute");
                    currentMicIndex = ++currentMicIndex % 2;
                    voiceChatButton.loadTexture(Ludo_Wild.arenaSheet, "btn_mic" + currentMicIndex);
                    let voiceTextString = "";
                    if (currentMicIndex === 1) {
                        voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.UNMUTE);
                    }
                    else {
                        voiceTextString = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.MUTE);
                    }

                    this.voiceChatButton.getChildAt(0).text = voiceTextString;

                    oMetaManager.localSetItem("micMute", currentMicIndex);
                    this.manageVoiceChat(currentMicIndex);
                });
        }
        manageVoiceChat(micIndex) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("is call connected", babbleSdk.isCallConnected());
                if (!babbleSdk.isCallConnected()) {

                    return;
                }
                if (micIndex === 0) {

                    babbleSdk.unmuteSelf();
                }
                else {
                    babbleSdk.muteSelf();
                }
            });
        }
        ;
        removeVoiceChatEventListeners() {
            try {
                Ludo_Wild.endCall();
                Ludo_Wild.leaveRoom();
            }
            catch (e) {
                console.log(e);
            }
            Ludo_Wild.removeVoiceChatListeners();
            console.log("Removed voice chat listeners");
        }
        ;
        onVolumeChange(data) {

            if (!this.playerList[this.play_to_playerIdMap[data.detail.name]]) {
                return;
            }
            this.playerList[this.play_to_playerIdMap[data.detail.name]].manageVoiceActiveStatus(data.detail.volume);
        }
        ;
        onMicStatusChange(data) {
            const isMute = data.detail.micStatus === 0 ? true : false;

            this.playerList[this.play_to_playerIdMap[data.detail.name]].toggleMic(isMute);
        }
        ;
        onBlitzTimerEnd() {
            console.log("Blitz timer end");
            window.clearInterval(this.blitzTimerRef);
            if (!this.anyGeneralOnlineMode(this.arenaMode)) {
                radio("blitzTimerEnd").broadcast();
            }
        }
        createBlitzTimerUI() {
            const timeTray = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.top + 100, Ludo_Wild.blitzSheet, "time-left-bg");
            timeTray.anchor.setTo(0.5, 0.5);
            const timeLabelImg = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX + 25, Ludo_Wild.Main.GAME.world.top + 82, Ludo_Wild.blitzSheet, "TIME LEFT");
            timeLabelImg.anchor.setTo(0.5);
            const timeIcon = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX - 32, Ludo_Wild.Main.GAME.world.top + 100, Ludo_Wild.blitzSheet, "ic-timer");
            timeIcon.anchor.setTo(1, 0.5);
            this.blitzTimerLabel = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX + 25, Ludo_Wild.Main.GAME.world.top + 110 + (Ludo_Wild.Home.textYgap * -20), "00ₘ:00ₛ", { font: (28 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.blitzTimerLabel.font = Ludo_Wild.Main.FONT;
            this.blitzTimerLabel.anchor.setTo(0.5, 0.5);
        }
        onServerTimerTick(count) {
            this.blitzTimerLabel.text = this.renderTimerCount(count);
        }
        renderTimerCount(count) {
            let timerString = "";
            let minutes = Math.floor(count / 60);
            let seconds = count % 60;
            if (minutes < 10) {
                timerString = "0" + minutes.toString();
            }
            else {
                timerString = minutes.toString();
            }
            timerString += "ₘ:";
            if (seconds < 10) {
                timerString = timerString + "0" + seconds.toString();
            }
            else {
                timerString += seconds.toString();
            }
            timerString += "ₛ";
            return timerString;
        }
        createKillSmokeAnimation() {
            this.killSmokeAnimation = Ludo_Wild.Main.GAME.add.image(0, 0, "smokeBlitz");
            this.killSmokeAnimation.anchor.setTo(0.5, 0.5);

            this.killSmokeAnimation.animations.add('runKillSmoke');
            this.killSmokeAnimation.visible = false;
        }
        runKillSmokeAnimation(x, y) {
            this.killSmokeAnimation.reset(x, y);
            this.killSmokeAnimation.visible = true;
            this.killSmokeAnimation.play("runKillSmoke", 25).onComplete.add(() => {
                this.killSmokeAnimation.visible = false;
            });
        }
        createQuadrantKill() {
            this.quadrantKillTray = Ludo_Wild.Main.GAME.add.image(this.pocketOffset["x_p" + 0], this.pocketOffset["y_p" + 0] + 75, Ludo_Wild.blitzSheet, "quadrant-kill-message-green");
            this.quadrantKillTray.anchor.setTo(0.5);
            let killMessage = Ludo_Wild.Main.GAME.add.text(35, -5 + (Ludo_Wild.Home.textYgap * -20), "3rd QUADRANT\nKILL", { font: (20 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            killMessage.font = Ludo_Wild.Main.FONT;
            killMessage.anchor.setTo(0.5, 0.5);
            killMessage.setShadow(0, 3, "#000000", 5);
            let scoreLabel = Ludo_Wild.Main.GAME.add.text(-86, -20 + (Ludo_Wild.Home.textYgap * -20), "SCORE", { font: (15 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            scoreLabel.anchor.setTo(0.5);
            scoreLabel.setShadow(0, 3, "#000000", 5);
            scoreLabel.font = Ludo_Wild.Main.FONT;
            let killPointLabel = Ludo_Wild.Main.GAME.add.text(-86, 5 + (Ludo_Wild.Home.textYgap * -20), "+10", { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            killPointLabel.anchor.setTo(0.5);
            killPointLabel.setShadow(0, 3, "#000000", 5);
            killPointLabel.font = Ludo_Wild.Main.FONT;
            this.quadrantKillTray.addChild(killMessage);
            this.quadrantKillTray.addChild(scoreLabel);
            this.quadrantKillTray.addChild(killPointLabel);
            this.quadrantKillTray.visible = false;
        }
        renderQuadrantKill(messageColor, scorePoints, quadrant) {
            this.quadrantEffectEmitter.start(false, 500, 15, 30);
            if (messageColor === "green") {
                this.quadrantKillTray.loadTexture(Ludo_Wild.blitzSheet, "quadrant-kill-message-green");
            }
            else {
                this.quadrantKillTray.loadTexture(Ludo_Wild.blitzSheet, "quadrant-kill-message-red");
            }

            this.quadrantKillTray.getChildAt(2).text = scorePoints > 0 ? "+" + scorePoints.toString() : scorePoints.toString();

            this.quadrantKillTray.getChildAt(0).text = this.getQuadrantText(quadrant) + " QUADRANT\nKILL";
            this.quadrantKillTray.scale.setTo(0.8);
            this.quadrantKillTray.visible = true;
            const initialMovementAnimation = Ludo_Wild.Main.GAME.add.tween(this.quadrantKillTray.scale)

                .to({ x: 1.1, y: 1.1 }, 200, Phaser.Easing.Linear.Out);
            const yoyoAnimation = Ludo_Wild.Main.GAME.add.tween(this.quadrantKillTray.scale)
                .to({ x: 1, y: 1 }, 200,

                    Phaser.Easing.Linear.In)

                .to({ x: 1.05, y: 1.05 }, 200, Phaser.Easing.Linear.Out)

                .to({ x: 1, y: 1 }, 200, Phaser.Easing.Linear.In);
            yoyoAnimation.onComplete.add(() => {
                window.setTimeout(() => {
                    this.quadrantKillTray.visible = false;
                }, 1500);
            });
            initialMovementAnimation.chain(yoyoAnimation).start();
        }
        getQuadrantText(quadrant) {
            switch (quadrant) {
                case 1: return "1st";
                case 2: return "2nd";
                case 3: return "3rd";
                case 4: return "4th";
            }
        }
        createQuadrantEffect() {
            this.quadrantEffectEmitter = Ludo_Wild.Main.GAME.add.emitter(this.pocketOffset["x_p" + 0], this.pocketOffset["y_p" + 0] + 75, 250);
            this.quadrantEffectEmitter.makeParticles(Ludo_Wild.blitzSheet, ["star-particle-white", "star-particle-yellow"]);
            this.quadrantEffectEmitter.minParticleSpeed.setTo(-350, -350);
            this.quadrantEffectEmitter.maxParticleSpeed.setTo(350, 350);
            this.quadrantEffectEmitter.maxParticleScale = 1;
            this.quadrantEffectEmitter.minParticleScale = 0.5;
            this.quadrantEffectEmitter.gravity.setTo(0, 0);
            this.quadrantEffectEmitter.setAlpha(0.6, 0.8);
        }

        onUpdateDeadPile(pid, tid, gameplayManagerInstance) {
            let onDeadPileData = this._GameServer.checkPileUpBlitz(pid, tid);
            if (onDeadPileData) {

                gameplayManagerInstance.tokenPileUpSituationBlitzStart(JSON.stringify({ _content: onDeadPileData }));
            }
        }
        createBlitzTurnSkipToast() {
            this.blitzTurnSkipToast = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height - 220, Ludo_Wild.blitzSheet, "skip-turn-blitz-bg");
            const text1 = Ludo_Wild.Main.GAME.add.text(0, -40 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.BLITZ_TURN_SKIP_1), { font: (24 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#000000" });
            text1.font = Ludo_Wild.Main.FONT;
            text1.anchor.setTo(0.5, 0.5);
            const text2 = Ludo_Wild.Main.GAME.add.text(0, -10 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.BLITZ_TURN_SKIP_2), { font: (20 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#808080" });
            text2.anchor.setTo(0.5, 0.5);
            text2.font = Ludo_Wild.Main.FONT;
            this.blitzTurnSkipToast.addChild(text1);
            this.blitzTurnSkipToast.addChild(text2);
            let token_1 = Ludo_Wild.Main.GAME.add.image(-60, 30, Ludo_Wild.blitzSheet, "turn-token");
            let token_2 = Ludo_Wild.Main.GAME.add.image(-10, 30, Ludo_Wild.blitzSheet, "turn-token");
            let token_3 = Ludo_Wild.Main.GAME.add.image(40, 30, Ludo_Wild.blitzSheet, "turn-token");
            token_1.anchor.setTo(0.5, 0.5);
            token_2.anchor.setTo(0.5, 0.5);
            token_3.anchor.setTo(0.5, 0.5);
            this.blitzTurnSkipToast.addChild(token_1);
            this.blitzTurnSkipToast.addChild(token_2);
            this.blitzTurnSkipToast.addChild(token_3);
            this.blitzTurnSkipToast.anchor.setTo(0.5, 0.5);
            this.blitzTurnSkipToast.visible = false;
            this.blitzTurnSkipToast.scale.setTo(0, 0);
        }
        renderBlitzTurnSkipToast() {
            this.blitzTurnSkipToast.visible = true;
            if (this.blitzTurnLeft == 2) {

                this.blitzTurnSkipToast.getChildAt(2).loadTexture(Ludo_Wild.blitzSheet, "turn-token-disabled");
            }
            else if (this.blitzTurnLeft == 1) {

                this.blitzTurnSkipToast.getChildAt(3).loadTexture(Ludo_Wild.blitzSheet, "turn-token-disabled");
            }
            else {

                this.blitzTurnSkipToast.getChildAt(4).loadTexture(Ludo_Wild.blitzSheet, "turn-token-disabled");
            }
            Ludo_Wild.Main.GAME.add.tween(this.blitzTurnSkipToast.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out, true);
        }
        createHomeScore() {
            this.homeScoreText = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 100 + (Ludo_Wild.Home.textYgap * -20), "+100", { font: (45 + Ludo_Wild.Main.FONTSIZE).toString() + "px" });
            this.homeScoreText.anchor.setTo(0.5, 0.5);
            this.homeScoreText.font = Ludo_Wild.Main.FONT;
            this.homeScoreText.stroke = "#000000";
            this.homeScoreText.strokeThickness = 4;
            const gradient = this.homeScoreText.context.createLinearGradient(0, 0, 0, this.homeScoreText.height);
            gradient.addColorStop(0.0, "#ffd800");
            gradient.addColorStop(1.0, "#fe6300");
            this.homeScoreText.fill = gradient;

            this.homeScoreText.visible = false;
        }
    }
    Ludo_Wild.ArenaManager = ArenaManager;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class GamePlayManager {
        constructor(_Mode, _clientInst) {
            this.receiverList = [];
            this._GameServer = null;
            this._Client = null;
            this._Players = [];
            this.isBattleBot = false;
            this._Num_Of_Players = 0;
            this._OnlineMode = Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE;
            this._playerID = null;
            this.killedPid = -1;
            this.killedTid = -1;
            this.winner = -1;
            this.isPileThere = false;
            this.pileUpData = null;
            this.AI_homePid = -1;
            this.AI_killedPid = -1;
            this.isTurnOver = false;
            this.gameWinData = {};
            this.winnerdata = {};
            this.quitList = [];
            this.matchStarted = false;
            this.moveCount = 0;
            this.isTurnedOverClient = false;
            this.isExitGame = false;

            this._OnlineMode = _Mode;
            this._Client = _clientInst;
            this.gameWinData = {};

            this.createGameComponents();
        }
        Main() {
            //alert('main');
            this.isExitGame = false;
            radio('quitReq').subscribe([this.sendQuitRequest, this]);
            radio('exitGame').subscribe([this.exitGame, this]);
            radio("resetMatchId").subscribe([this.resetMatchId, this]);
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                window.addEventListener("beforeunload", () => {
                    if (!this.isExitGame) {

                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CLOSE_TAB_EXIT, data: {} });
                    }
                });
            }
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                this.initOfflineSimulationListeners();
            }

        }
        ;
        initOfflineSimulationListeners() {

            radio('moveTokenGM').subscribe(this.moveTokenClient.bind(this), this);
            radio('pileUpGM').subscribe(this.onPileUpClient.bind(this), this);
            radio('turnOverClient').subscribe(this.onTurnOverClient.bind(this), this);
        }
        ;
        createGameComponents() {
            this._arenaManagerInstance = new Ludo_Wild.ArenaManager(this._Client);
            if ((this._OnlineMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE || this._OnlineMode === Ludo_Wild.gameMode.SINGLE_PLAYER) ||
                Ludo_Wild.Main.IS_FAKE_RANDOM) {
                this._GameServer = new Ludo_Wild.GameServer();
            }
            this.registerGameComponents();
        }
        getGameServer() {
            return this._GameServer;
        }
        ;
        resetMatchId() {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RESET_MATCH_ID, data: {} });
        }
        testSendMessage(data) {
            console.log(data);
            this._arenaManagerInstance.renderMessage(data.sid, data.rid, data.msg);
        }
        ;
        dispose(isMatchFound = true) {
            if (Ludo_Wild.BattleModeState.doesBattleHasBots) {
                return;
            }
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {

                this._Client.disconnectSocketConnection();
            }

            this._Client.removeAllReceivers();

            if (!isMatchFound) {
                return;
            }
            try {
                radio.$.channels.quitReq = [];
                radio.$.channels.exitGame = [];
                radio.$.channels.resetMatchId = [];
                if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                    if (radio.$.channels.moveTokenGM.length > 0) {
                        radio.$.channels.moveTokenGM.pop();
                    }
                    if (radio.$.channels.pileUpGM.length > 0) {
                        radio.$.channels.pileUpGM.pop();
                    }
                    if (radio.$.channels.turnOverClient.length > 0) {
                        radio.$.channels.turnOverClient.pop();
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            this._arenaManagerInstance.dispose();
            this._arenaManagerInstance = null;
        }
        ;
        registerPlayersWithClients() {
            for (let i = 0; i < this._Num_Of_Players; i++) {
                this._Client.addXender(this._Players[i]);
            }
        }
        onPlayerQuitLobby() {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.QUIT_LOBBY, data: {} });
        }
        exitGame(isReplay = false) {
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.EXIT_GAME, data: {} });
                this.isExitGame = true;
            }
            if (this._OnlineMode === Ludo_Wild.gameMode.ONLINE_BATTLE && !isReplay) {
                this.isExitGame = true;
                segadroid.battleGoHome();
            }
        }
        ;
        registerGameComponents() {
            this._Client.addXender(this);
            if (this._GameServer !== null) {
                this._Client.addXender(this._GameServer);
            }
            this.registerPlayersWithClients();
        }
        addXender(_xender) {
            this.receiverList.push(_xender);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        send(_message) {
            this.receiverList.forEach((_Xender) => {
                _Xender.onReceive(_message);
            });
        }
        onReceive(_message) {
            if (_message.eventType === Engine.EventType.GAME_EVENT) {
                switch (_message.event) {
                    case Ludo_Wild.GameEvents.REQUEST_DICE:
                        this.send(_message);
                        break;
                    case Ludo_Wild.GameEvents.TURN_OVER:
                        this.onTurnOver(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.START_GAME_OFFLINE:
                        if (Ludo_Wild.Main.IS_FAKE_RANDOM) {
                            this.startFakeRandomGame(_message.data);
                        }

                        break;
                    case Ludo_Wild.GameEvents.ALL_JOINED:

                        break;
                    case Ludo_Wild.GameEvents.RETURN_DICE:
                        //alert(JSON.stringify(_message.data))

                        this.renderDice(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ON_TOKEN_MOVED:
                        this.moveToken(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.TOKEN_REACHED:
                        this.onTokenReached(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.PLAYER_WON:
                        this.onPlayerWon(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ABORT_MATCH:
                        this.onMatchAbort();
                        break;
                    case Ludo_Wild.GameEvents.PILE_UP:
                        this.onPileUp(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.AI_HOME:
                        this.onAiHome(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.AI_KILLED:
                        this.onAiKilled(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.RECEIVE_MSG:
                        this.onReceiveMessage(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ON_PLAYER_QUIT:
                        this.onPlayerQuit(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ON_TOKEN_HOME:
                        this.onTokenHome(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.START_TIMER:
                        this.startDiceTimer(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.GET_CHIPDATA:

                        this.onGettingChipData(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.NOT_YOUR_TURN:
                        this.onNotYourTurn(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ON_GETTING_PONG:
                        this.onGettingPong(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.ALL_JOINED_BATTLE:
                        this.onBattleModeStart(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.START_GAME_TIMER:
                        this.onStartGameTimer();
                        break;
                    case Ludo_Wild.GameEvents.LOBBY_TIMEOUT:
                        this.onLobbyTimeout();
                        break;
                    case Ludo_Wild.GameEvents.CREATED_FRIENDS_LOBBY:
                        this.onFriendsLobbyCreated(_message);
                        break;
                    case Ludo_Wild.GameEvents.NEW_PLAYER_JOINED_FRIENDS:
                        this.onNewPlayerJoinedFriendsMode(_message);
                        break;
                    case Ludo_Wild.GameEvents.OLD_PLAYER_JOINED_FRIENDS:
                        this.onOldPlayerJoinedFriendsMode(_message);
                        break;
                    case Ludo_Wild.GameEvents.ALL_JOINED_FRIENDS:
                        this.onFriendsModeStart(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.NO_ROOM_AVAILABLE:
                        this.onRoomNotAvailableFriends();
                        break;
                    case Ludo_Wild.GameEvents.DUPLICATE_JOIN:
                        this.onDuplicateJoin();
                        break;
                    case Ludo_Wild.GameEvents.RECONNECT_TO_LOBBY:
                        this.onReconnectinLobby();
                        break;
                    case Ludo_Wild.GameEvents.NO_MATCH_RANDOM_MODE:
                        this.onNoMatchFoundRandomMode();
                        break;
                    case Ludo_Wild.GameEvents.ALL_JOINED_RANDOM_MODE:
                        this.randomModeStart(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.DICE_SKIPPED:
                        this.onDiceSkip(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.BLITZ_OVER:
                        this.onBlitzGameover(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.BLITZ_POINTS_UPDATE:
                        this.onBlitzPointsUpdate(_message.data);
                        break;
                    case Ludo_Wild.GameEvents.BLITZ_TIMER_TICK:
                        this.onBlitzTimerTick(_message.data);
                        break;
                }
            }
            else {
                switch (_message.event) {
                    case Network.ServerEvents.ALL_JOINED:
                        break;
                }
            }
        }
        onGettingPong(data) {
            let gameState;
            let serverMoveCount;
            if (data._content.g_state.m_data !== undefined) {
                gameState = data._content.g_state.m_data;
            }
            else {
                gameState = data._content.g_state;
            }
            if (data._content.g_state.mc !== undefined) {
                serverMoveCount = data._content.g_state.mc;
                this.moveCount = serverMoveCount;
            }

            radio('syncGameState').broadcast(gameState);
            for (let i = 0; i < this._Players.length; i++) {
                if (gameState[i].id !== -1) {

                    this._Players[i].syncTokenPositions(gameState[i].tokenState);

                }
            }
            for (let i = 0; i < this._Players.length; i++) {
                if (gameState[i].id !== -1) {

                    for (let j = 0; j < Ludo_Wild.Config.dynTokenCount; j++) {
                        if (gameState[i].tokenState[j] !== 0 && gameState[i].tokenState[j] !== 57) {
                            const pileUpData = this.checkPileUp(i, j, gameState);

                            if (pileUpData.length > 1 && this._Players[i].checkisPileParenNull(j)) {
                                const pileUpData2 = { _content: null };
                                pileUpData2._content = pileUpData.slice(0);
                                this.tokenPileUpSituation(pileUpData2);
                            }
                        }
                    }
                }
            }
        }
        ;
        onNotYourTurn(data) {
            this._arenaManagerInstance.onNotYourTurn(data._content.msg);
        }
        ;
        onGettingChipData(_data) {

            if (this._Players[0] === undefined) {
                window.setTimeout(() => {
                    this.onGettingChipData(_data);
                }, 500);
            }
            else {
                for (let i = 0; i < _data._content.chipData.length; i++) {
                    this._Players[i].setCurrentChips(_data._content.chipData[i]);
                }
            }
        }
        ;
        startDiceTimer(_data) {

            this._arenaManagerInstance.startDiceTimer(_data._content.msg.pid);
        }
        sendQuitRequest() {
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {

                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_QUIT, data: { id: this._playerID } });
                this.onExplicitQuit();
            }
            else {
                Ludo_Wild.Main.GAME.state.start('Home');
            }
        }
        ;
        onExplicitQuit() {

            this.exitGame(false);
            if (this._OnlineMode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this._OnlineMode === Ludo_Wild.gameMode.RANDOM_ONLINE) {
                Ludo_Wild.Main.GAME.state.start('Home');
                window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
            }
        }

        updateGameWinDataOnGameover(rank) {
            let lastRank = rank + 1;
            for (let i = 0; i < 4; i++) {
                if (this._Players[i].Playing) {
                    this.gameWinData[lastRank] = {
                        pid: this._Players[i].PlayerId,
                        name: this._Players[i].getName(), playId: this._Players[i].getplayId(), score: 0
                    };
                    ++lastRank;
                }
            }
        }
        getRank(playerId) {
            for (let i = 0; i < Object.keys(this.gameWinData).length; i++) {
                if (this.gameWinData[i + 1].pid === playerId) {
                    return i + 1;
                }
            }
        }
        onPlayerWon(_data) {

            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                this.onPlayerWonOnline(_data);
            }
            else {
                this.onPlayerWonOffline(_data);
            }
        }

        onMatchAbort() {
            if (this._Players[this._playerID].Playing) {

                this._Players[this._playerID].Playing = false;
                radio('resetOnWinOrLose').broadcast({ pid: this._playerID, isQuit: true, mode: this._OnlineMode });
                this.gameWinData[1] = {
                    pid: this._playerID,
                    name: this._Players[this._playerID].getName(), playId: this._Players[this._playerID].getplayId(), score: 0
                };
                this.updateGameWinDataOnGameover(1);
                this._arenaManagerInstance.onPlayerWon(this.gameWinData, this.getRank(this._playerID), true, "", "match_abort");
                this._Players[this._playerID].disableOnQuit();
                this._arenaManagerInstance.removePocketCircles(this._playerID);
            }
        }

        onPlayerWonOnline(data) {
            if (data._content.quitId !== undefined && data._content.quitId !== this._playerID) {
                this._arenaManagerInstance.showQuitPopUpMessage(this._Players[data._content.quitId].getName());
            }
            this._Players[data._content.pid].Playing = false;
            radio('resetOnWinOrLose').broadcast({ pid: data._content.pid, isQuit: false, mode: this._OnlineMode });
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.gameWinData[data._content.place] = {
                    pid: data._content.pid,
                    name: this._Players[data._content.pid].getName(), playId: this._Players[data._content.pid].getplayId(),
                    score: data._content.score
                };
            }
            else {
                this.gameWinData[data._content.place] = {
                    pid: data._content.pid,
                    name: this._Players[data._content.pid].getName(), playId: this._Players[data._content.pid].getplayId()
                };
            }
            if (data._content.isGameover) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    this.updateGameWinDataOnGameoverBlitz(data._content.pointsTable);
                }
                else {
                    this.updateGameWinDataOnGameover(data._content.place);
                }

                if (!this.isExitGame) {
                    this._arenaManagerInstance.onPlayerWon(this.gameWinData, this.getRank(this._playerID), true, "", data._content.reason);
                }
                this.gameWinData = {};
            }
            this._Players[data._content.pid].disableOnQuit();
            this._arenaManagerInstance.removePocketCircles(data._content.pid);
            if (Ludo_Wild.Config.rule !== Ludo_Wild.Rules.BLITZ) {
                this._Players[data._content.pid].setRankMedal(data._content.place);
            }
        }

        onPlayerWonOffline(_data) {
            console.log(_data);

            this._Players[_data._content.pid].Playing = false;

            this.gameWinData[_data._content.place] = {
                pid: _data._content.pid, name: this._Players[_data._content.pid].getName(),
                playId: this._Players[_data._content.pid].getplayId()
            };
            if (_data._content.isGameOver) {
                this.updateGameWinDataOnGameover(_data._content.place);
                this._arenaManagerInstance.onPlayerWon(this.gameWinData, this.getRank(this._playerID), true, "", _data._content.reason);
                this.gameWinData = {};
            }
            this._Players[_data._content.pid].disableOnQuit();
            this._arenaManagerInstance.removePocketCircles(_data._content.pid);
            this._Players[_data._content.pid].setRankMedal(_data._content.place);
        }
        ;
        onPlayerQuit(_data) {
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                this.onPlayerQuitOnline(_data);
            }
            else {
                this.onPlayerQuitOffline(_data);
            }
        }
        onPlayerQuitOnline(data) {
            if (data._content.pid !== this._playerID) {

                this._arenaManagerInstance.showQuitPopUpMessage(this._Players[data._content.pid].getName());
            }
            this._Players[data._content.pid].Playing = false;
            let place;
            for (let i = 0; i < 4; i++) {
                let t_data = { id: data._content.pid, tid: i };
                this.checkTokenisOnPile(t_data);
            }
            place = data._content.place;
            this._Players[data._content.pid].disableOnQuit();
            this._arenaManagerInstance.removePocketCircles(data._content.pid);
            this._Players[data._content.pid].setRankMedal(place);
            radio('resetOnWinOrLose').broadcast({ pid: data._content.pid, isQuit: true, mode: this._OnlineMode });
            this.gameWinData[place] = {
                pid: data._content.pid, name: this._Players[data._content.pid].getName(),
                playId: this._Players[data._content.pid].getplayId()
            };
        }

        onPlayerQuitOffline(_data) {
            Ludo_Wild.Main.GAME.state.start('Home');
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
        }
        ;
        renderDice(_data) {
            //alert(_data._content.id+'|'+_data._content.dice)

            //alert(JSON.stringify(this._Players[_data._content.id]));

            //const player = this._Players[i];
            //alert(JSON.stringify(player));
            //const playerId = player?.PlayerId;

            //if (!playerId) continue;

            // Add dice render code here...

            // Add score text


            /* const score = 5;
                                const scoreText = Ludo_Wild.Main.GAME.add.text(
                                    this.pocketOffset["x_p" + this.playerList[_data._content.id].Quad],
                                    this.pocketOffset["y_p" + this.playerList[_data._content.id].Quad] + 60,
                                    "Score: " + score,
                                    {
                                                        font: "32px Arial",
                                                        fill: "#ffffff",
                                                        stroke: "#ffffff",
                                                        strokeThickness: 3,
                                                        align: "center",
                                                        backgroundColor:"#000000"
                                                    }
                                );
                                scoreText.anchor.setTo(0.5, 0.5);
                                this.scoreTexts[_data._content.id] = scoreText;
*/


            this._arenaManagerInstance.RollDice(_data._content.id, _data._content.dice);
            updateScore(_data._content.id, 0, 0, _data._content.dice);
            currentDiceValue = _data._content.dice;
            /* setTimeout(() => {
                               var i = _data._content.id;
                             //alert(i);
                             var totalP=0;
                             for(let k = 0; k < 4; k++){
                             if(this._Players[k].Playing){
                             totalP += 1;

                             }

                             }
                             //alert(totalP);
                             if(this._Players[i].Playing){
                                             if(totalP === 2){
                                                 if(i === 1){
                                                 i = 2
                                                 } else {
                                                 i = 0
                                                 }
                                                 }

                                             }
                              //alert(_data._content.id+'|'+i);
                               //alert(players[_data._content.id].totalScore);
                              scoreTexts[i].setText("Score: " + players[_data._content.id].totalScore);



                             }, 1000)

                             */




        }
        onReceiveMessage(_data) {
            if (this.matchStarted) {
                if (_data._content.message.sid !== null && _data._content.message.rid !== null) {
                    this._arenaManagerInstance.renderMessage(_data._content.message.sid, _data._content.message.rid, _data._content.message.msg);
                }
            }
        }
        onTokenHome(_data) {
            this._arenaManagerInstance.onTokenHome(_data);
            this._Players[_data._content.id].onTokenHome(_data._content.tid);
        }
        ;
        moveToken(_data) {
            if ((this.isAnyGeneralOnlineMode(this._OnlineMode))
                && this._playerID === _data._content.id && !_data._content.isForced) {

            }
            else {
                this._arenaManagerInstance.ontokenMove(_data._content.id);
                let t_data = _data._content;
                if (t_data.kpid !== -1) {
                    this.killedPid = t_data.kpid;
                    this.killedTid = t_data.ktid;
                }
                this.checkTokenisOnPile(t_data);
                if (this._Players[t_data.id].IS_AI) {
                    Ludo_Wild.Main.GAME.time.events.add(1000, () => {
                        this._arenaManagerInstance.moveToken(t_data.id, t_data.tid, t_data.steps);
                    });
                }
                else {
                    this._arenaManagerInstance.moveToken(t_data.id, t_data.tid, t_data.steps, _data._content.isForced);
                }
            }
        }
        moveTokenClient(_data) {
            this._arenaManagerInstance.ontokenMove(_data._content.id);
            let t_data = _data._content;
            if (t_data.kpid !== -1) {
                this.killedPid = t_data.kpid;
                this.killedTid = t_data.ktid;
            }
            this.checkTokenisOnPile(t_data);
            if (this._Players[t_data.id].IS_AI) {
                Ludo_Wild.Main.GAME.time.events.add(1000, () => {
                    this._arenaManagerInstance.moveToken(t_data.id, t_data.tid, t_data.steps);
                });
            }
            else {
                this._arenaManagerInstance.moveToken(t_data.id, t_data.tid, t_data.steps);
            }
        }
        checkTokenisOnPile(t_data) {
            if (this._Players[t_data.id].tokens[t_data.tid].pileParent !== null) {
                let t_pile = this._Players[t_data.id].tokens[t_data.tid].pileParent;
                t_pile.remove(this._Players[t_data.id].tokens[t_data.tid]);
                this._Players[t_data.id].tokens[t_data.tid].pileParent = null;
                this.HadaPile(t_pile);
            }
        }
        HadaPile(_tokenPile) {
            const offset = { x: 0, y: 0 };
            const offsetStorage = {};
            let offsetCounter = 0;
            const idCount = {};
            if (_tokenPile !== null) {
                const contentArray = _tokenPile.returnPileArray();
                const scaleVal = (1 / this.returnTokenScaleDivider(_tokenPile.typeCount));
                if (contentArray.length === 1) {
                    let t_pile = _tokenPile.tokenArray[0].pileParent;
                    _tokenPile.tokenArray[0].pileParent = null;
                    _tokenPile.tokenArray[0].resetSize();
                    if (t_pile) {
                        t_pile.remove(_tokenPile.tokenArray[0]);
                    }
                    return;
                }
                for (let i = 0; i < contentArray.length; i++) {
                    const content = contentArray[i];
                    if (offsetStorage[content.pid] === undefined) {
                        offset.x = this.getOffsetX(offsetCounter, _tokenPile.typeCount);
                        offset.y = this.getOffsetY(offsetCounter, _tokenPile.typeCount);
                        offsetStorage[content.pid] = offsetCounter;
                        ++offsetCounter;
                    }
                    else {
                        offset.x = this.getOffsetX(offsetStorage[content.pid], _tokenPile.typeCount);
                        offset.y = this.getOffsetY(offsetStorage[content.pid], _tokenPile.typeCount);
                    }
                    if (idCount[content.pid] === undefined) {
                        idCount[content.pid] = 0;
                    }
                    ++idCount[content.pid];
                    this._arenaManagerInstance.shrinkToken(_tokenPile.tokenArray[i].playerId, _tokenPile.tokenArray[i].tokenId, scaleVal, offset, idCount[content.pid]);
                }
            }
        }
        tokenPileUpSituation(_pileUpData) {

            const offset = { x: 0, y: 0 };
            const idCount = {};
            const offsetStorage = {};
            let offsetCounter = 0;
            if (_pileUpData !== null) {
                _pileUpData._content.reverse();
                let _pileParent = this.checkPileParentExists(_pileUpData);
                if (_pileParent === null) {
                    _pileParent = new Ludo_Wild.tokenPile();
                    _pileParent.initPileData(_pileUpData);
                }
                else {
                    _pileParent.addNewPileItem(_pileUpData._content[0]);
                }
                const typecount = this.pileTypeCount(_pileParent, _pileUpData);
                const scaleVal = (1 / this.returnTokenScaleDivider(typecount));
                const contentArray = _pileParent.returnPileArray();
                for (let i = 0; i < contentArray.length; i++) {
                    const content = contentArray[i];
                    if (offsetStorage[content.pid] === undefined) {
                        offset.x = this.getOffsetX(offsetCounter, typecount);
                        offset.y = this.getOffsetY(offsetCounter, typecount);
                        offsetStorage[content.pid] = offsetCounter;
                        ++offsetCounter;
                    }
                    else {
                        offset.x = this.getOffsetX(offsetStorage[content.pid], typecount);
                        offset.y = this.getOffsetY(offsetStorage[content.pid], typecount);
                    }
                    if (this._Players[content.pid].tokens[content.tid].pileParent === null) {
                        _pileParent.add(this._Players[content.pid].tokens[content.tid]);
                        this._Players[content.pid].tokens[content.tid].pileParent = _pileParent;
                    }
                    if (idCount[content.pid] === undefined) {
                        idCount[content.pid] = 0;
                    }
                    ++idCount[content.pid];
                    this._Players[content.pid].shrinkToken(content.tid, scaleVal, offset, idCount[content.pid]);
                }
                this.isPileThere = false;
            }
        }
        tokenPileUpSituationBlitzStart(_pileUpData) {
            const offset = { x: 0, y: 0 };
            const idCount = {};
            const offsetStorage = {};
            let offsetCounter = 0;
            _pileUpData = JSON.parse(_pileUpData);
            if (_pileUpData !== null) {
                _pileUpData._content.reverse();
                let _pileParent = this.checkPileParentExists(_pileUpData);
                if (_pileParent === null) {
                    _pileParent = new Ludo_Wild.tokenPile();
                    _pileParent.initPileData(_pileUpData);
                }
                else {
                    _pileParent.addNewPileItem(_pileUpData._content[0]);
                }
                const typecount = this.pileTypeCount(_pileParent, _pileUpData);
                const scaleVal = (1 / this.returnTokenScaleDivider(typecount));
                const contentArray = _pileParent.returnPileArray();
                for (let i = 0; i < contentArray.length; i++) {
                    const content = contentArray[i];
                    if (offsetStorage[content.pid] === undefined) {
                        offset.x = this.getOffsetX(offsetCounter, typecount);
                        offset.y = this.getOffsetY(offsetCounter, typecount);
                        offsetStorage[content.pid] = offsetCounter;
                        ++offsetCounter;
                    }
                    else {
                        offset.x = this.getOffsetX(offsetStorage[content.pid], typecount);
                        offset.y = this.getOffsetY(offsetStorage[content.pid], typecount);
                    }
                    if (this._Players[content.pid].tokens[content.tid].pileParent === null) {
                        _pileParent.add(this._Players[content.pid].tokens[content.tid]);
                        this._Players[content.pid].tokens[content.tid].pileParent = _pileParent;
                    }
                    if (idCount[content.pid] === undefined) {
                        idCount[content.pid] = 0;
                    }
                    ++idCount[content.pid];
                    this._Players[content.pid].shrinkToken(content.tid, scaleVal, offset, idCount[content.pid]);
                }
                this.isPileThere = false;
            }
        }
        onAiHome(_data) {
            this.AI_homePid = _data._content.id;
            if (this._Players[_data._content.id].IS_AI) {
                let AIHome = -1, AIKilled = -1;
                AIHome = this.AI_homePid;
                AIKilled = this.AI_killedPid;
                this.AI_homePid = -1;
                this.AI_killedPid = -1;
                this._arenaManagerInstance.manageDiceVisibility(_data._content.id, false, AIHome, AIKilled);
            }
        }
        onAiKilled(_data) {
            this.AI_killedPid = _data._content.id;
            if (this._Players[_data._content.id].IS_AI) {
                let AIHome = -1, AIKilled = -1;
                AIHome = this.AI_homePid;
                AIKilled = this.AI_killedPid;
                this.AI_homePid = -1;
                this.AI_killedPid = -1;
                this._arenaManagerInstance.manageDiceVisibility(_data._content.id, false, AIHome, AIKilled);
            }
        }
        onTokenReached(_data) {
            this.moveCount += 1;
            this._arenaManagerInstance.onTokenReached(_data);
            this.tokenKilledSituation(_data._content.pid);
            if (this.isPileThere) {
                this.tokenPileUpSituation(this.pileUpData);
            }
        }
        tokenKilledSituation(pid) {
            if (this.killedPid === -1) {
                return;
            }
            Manager.AudioManager.getAudioInstance().playPegKillsPeg();
            this._arenaManagerInstance.killToken(this.killedPid, this.killedTid);
            this._Players[this.killedPid].killToken(this.killedTid);
            this._arenaManagerInstance.onTokenKilled(pid, this.killedPid);
            this.killedPid = -1;
            this.killedTid = -1;
        }
        pileTypeCount(parent, pileData) {
            let t_type = parent.getTypeArray().slice(0);
            for (let i = 0; i < pileData._content.length; i++) {
                const content = pileData._content[i];
                if (!this.isIdinPile(t_type, content.pid)) {
                    ++parent.typeCount;
                    t_type.push(content.pid);
                    parent.setIdDirectionMap(content.pid);
                }
            }
            parent.setTypeArray(t_type);
            return parent.typeCount;
        }
        ;
        isIdinPile(t_type, pid) {
            if (t_type.length === 0) {
                return false;
            }
            for (let i = 0; i < t_type.length; i++) {
                if (t_type[i] === pid) {
                    return true;
                }
            }
            return false;
        }
        ;
        checkPileParentExists(_pileUpData) {
            for (let i = 0; i < _pileUpData._content.length; i++) {
                const content = _pileUpData._content[i];
                if (this._Players[content.pid].tokens[content.tid].pileParent !== null) {
                    return this._Players[content.pid].tokens[content.tid].pileParent;
                }
            }
            return null;
        }
        returnTokenScaleDivider(_pileLength) {
            if (_pileLength === 1) {
                return 1;
            }
            return 1.5;
        }
        getOffsetX(_index, _pileLength) {
            let _offsetX = 0;
            if (_pileLength === 1) {
                return 0;
            }
            if (_pileLength <= 10) {
                switch (_index) {
                    case 0:

                        _offsetX = -(46 / 4) + (0 * 23);
                        break;
                    case 1:
                    case 3:
                        _offsetX = -(46 / 4) + (1 * 23);
                        break;
                    case 2:
                        if (_pileLength > 3) {
                            _offsetX = -(46 / 4) + (0 * 23);
                        }
                        else {
                            _offsetX = 0;
                        }
                        break;
                    case 5:
                        _offsetX = -(46 / 4) + (0 * 23) - 10;
                        break;
                    case 6:
                        _offsetX = -(46 / 4) + (1 * 23) + 10;
                        break;
                    default:
                        _offsetX = 0;
                        break;
                }
            }
            return _offsetX;
        }
        getOffsetY(_index, _pileLength) {
            let _offsetY = 0;
            if (_pileLength === 1) {
                return 0;
            }
            switch (_index) {
                case 0:
                case 1:
                    if (_pileLength > 2 && _pileLength <= 10) {
                        _offsetY = -46 / 4;
                    }
                    break;
                case 2:
                case 3:
                    _offsetY = +46 / 4;
                    break;
                case 8:
                    _offsetY = -46 / 2;
                    break;
                case 9:
                    _offsetY = +46 / 2;
                    break;
                default:
                    _offsetY = 0;
                    break;
            }
            return _offsetY;
        }
        onPileUp(_data) {

            if (this.isAnyGeneralOnlineMode(this._OnlineMode) && this._playerID === _data._content.id) {

            }
            else {
                this.pileUpData = _data;
                this.isPileThere = true;
            }
        }
        onPileUpClient(_data) {
            this.pileUpData = _data;
            this.isPileThere = true;
        }




        async onStartGameOffline(_data) {
            //alert(JSON.stringify(_data))
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.HIDE_UI, data: {} });
            let c_Arr = _data.c_data;
            this._playerID = 0;
            this._Num_Of_Players = _data.totalPeers;
            c_Arr[0]=1;
            c_Arr[1]=2;
            c_Arr[2]=3;
            c_Arr[3]=4;
            //alert(c_Arr[0])
            var userToken = '1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea';

            //alert(this._Num_Of_Players);
            const responseStart = await fetch('https://lazioludo.com/api/offline-game/start', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea'
                },
                body: JSON.stringify({ player_count: this._Num_Of_Players, color:c_Arr[0], timer_count:300 })
            });



            const dataStart = await responseStart.json();

            const response = await fetch('https://lazioludo.com/api/offline-game/get-game-state/' + dataStart.offline_game_id, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1435|vEATEt8mscZ7ozuNzYjSHNxOt6oLo6uZb0yMmSMQ60d668ea'
                },
                // body: JSON.stringify({ name: 'test' })
            });



            const data = await response.json();
            userDataPlayer.push(data);
            //alert(JSON.stringify(data))

            // Call the function

            //alert(JSON.stringify(data))
            //dataResult=data;
            //  console.log("Final Data:", data); // Use your data here

            //const data = {}


            this.createPlayers(_data.names, _data.avatars, _data.playIds, data);


            //this.createPlayers(_data.names, _data.avatars, _data.playIds, data);

            this.matchStarted = true;
            this._arenaManagerInstance.startGame(this._OnlineMode, this._Players, c_Arr, 0);
        }
        onTurnOverClient(_data) {
            this._arenaManagerInstance.manageDiceVisibility(_data._content.id, false);
        }
        ;
        onTurnOver(_data) {

            if (_data._content.force === undefined) {
                _data._content.force = false;
            }
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                if (_data._content.force === false && this._playerID === _data._content.id) {
                    return;
                }
            }
            if (_data._content.isDiceSkip) {
                this._arenaManagerInstance.onSkippingTurn(_data._content.id);
            }
            this._arenaManagerInstance.manageDiceVisibility(_data._content.id, _data._content.force);
        }
        onDiceSkip(data) {
            this._arenaManagerInstance.onSkippingTurn(data.data.id);
        }
        ;
        onStartGameOnline(_colorArray, pid, tableAmt) {
            const table = tableAmt;
            this.matchStarted = true;
            this._arenaManagerInstance.startGame(this._OnlineMode, this._Players, _colorArray, pid, table);
        }
        onAllJoined(_data) {
            this._Num_Of_Players = _data.totalPeers;
            const names = [];
            const avatars = [];
            const playIds = [];
            _data.playerList.forEach((player) => {
                const name = player.name;
                names.push(name);
                avatars.push(player.photo);
                const playId = player.userId || undefined;
                playIds.push(playId);
            });

            this.createPlayers(names, avatars, playIds);
            this._playerID = _data.pid;
            this.onStartGameOnline(_data.c_data, _data.pid, _data.table);
        }
        onAllJoinedFriends(_data) {
            this._Num_Of_Players = _data.totalPeers;
            const names = [];
            const avatars = [];
            const playIds = [];
            _data.playerList.forEach((player) => {
                const name = player.firstName;
                names.push(name);
                avatars.push(player.photo);
                const playId = player.playId || undefined;
                playIds.push(playId);
            });
            this.createPlayers(names, avatars, playIds);
            this._playerID = _data.pid;
            this.onStartGameOnline(_data.c_data, _data.pid, _data.table);
        }
        ;
        onAllJoinedRandomMode(_data) {
            this._Num_Of_Players = _data.totalPeers;
            const names = [];
            const avatars = [];
            const playIds = [];
            _data.playerList.forEach((player) => {
                const name = player.firstName;
                names.push(name);
                avatars.push(player.photo);
                const playId = player.playId || undefined;
                playIds.push(playId);
            });

            this.createPlayers(names, avatars, playIds);
            this._playerID = _data.pid;
            this.onStartGameOnline(_data.c_data, _data.pid, _data.table);
        }
        ;
        createPlayers(names, avatars, playIds = [undefined, undefined, undefined, undefined], data) {
            //alert(JSON.stringify(data))
            let Pid = this._playerID;
            //alert(this._OnlineMode)
            //console.log(this._OnlineMode);
            //alert('okk')
            //               let dataResult =null;
            //                                                    fetch('https://lazioludo.com/api/user', {
            //                                                      method: 'POST',
            //                                                      mode: 'cors',
            //                                                      headers: {
            //                                                      'Content-Type': 'application/json',
            //                                                      'Authorization': 'Bearer 1429|q2Vj1mKb6SQHra3gsD6BberimMxrsmYWM7wttakL8a65521c'
            //                                                       },
            //                                                       body: JSON.stringify({ name: 'test' })
            //                                                       }).then((response)=>{
            //                                                       if(!response.ok){
            //                                                        throw new Error("internal error")
            //                                                       }
            //                                                       return response.json();
            //                                                       }).then((resData)=>{
            //                                                             dataResult=  resData
            //                                                       }).catch((error)=>{
            //                                                       alert(error.message)
            //                                                       })

            //                                                       const dataResult = await response.json();
            //this._Players[0].setName(dataResult.name);
            //                                                    alert(dataResult.name);
            //this.playerList[0].name = data.name;

            /* async function fetchUserData() {
              let dataResult = null;
              try {
                const response = await fetch('https://lazioludo.com/api/user', {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1429|q2Vj1mKb6SQHra3gsD6BberimMxrsmYWM7wttakL8a65521c'
                  },
                  body: JSON.stringify({ name: 'test' })
                });

                if (!response.ok) {
                  throw new Error("Internal error");
                }

                const resData = await response.json();
                dataResult = resData;
                console.log("Data Result:", dataResult); // you can use it here
                return dataResult;

              } catch (error) {
                alert(error.message);
              }
            }

            // Call the function
            fetchUserData().then((data) => {
            //alert(JSON.stringify(data))
            dataResult=data;
            //  console.log("Final Data:", data); // Use your data here
            });
            //  alert(JSON.stringify(dataResult))

            */

            for (let i = 0; i < 4; i++) {
                //            alert(JSON.stringify(dataResult))
                this._Players[i] = new Ludo_Wild.Player(this._Num_Of_Players, this);
                if (this._OnlineMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                    //alert(names[i])
                    if (i > 0) {
                        this._Players[i].IS_AI = true;
                    }
                    if (i < this._Num_Of_Players) {
                        if (Ludo_Wild.BattleModeState.doesBattleHasBots) {
                            this._Players[Pid % this._Num_Of_Players].setName(names[Pid % this._Num_Of_Players]);
                            this._Players[Pid % this._Num_Of_Players].setProfilePic(avatars[Pid % this._Num_Of_Players]);
                            this._Players[Pid % this._Num_Of_Players].setplayId(playIds[Pid % this._Num_Of_Players]);
                            ++Pid;
                        }
                        if (i == 0) {
                            //alert(dataResult.name);
                            this._Players[i].setName(data.players[i].name);
                        } else {
                            this._Players[i].setName(data.players[i].name);
                        }


                        this._Players[i].setProfilePic(avatars[i]);
                        this._Players[i].setplayId(playIds[i]);
                    }
                }
                else if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {

                    this._Players[i].MODE = this._OnlineMode;
                    if (i < this._Num_Of_Players) {
                        this._Players[Pid % this._Num_Of_Players].setName(names[Pid % this._Num_Of_Players]);
                        this._Players[Pid % this._Num_Of_Players].setProfilePic(avatars[Pid % this._Num_Of_Players]);
                        this._Players[Pid % this._Num_Of_Players].setplayId(playIds[Pid % this._Num_Of_Players]);
                        ++Pid;
                    }
                }
                else {

                    this._Players[i].MODE = Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE;
                    if (i < this._Num_Of_Players) {


                        this._Players[i].setName(data.players[i].name);
                        this._Players[i].setProfilePic(avatars[i]);
                        this._Players[i].setplayId(playIds[i]);
                    }
                }
                if (i >= this._Num_Of_Players) {
                    this._Players[i].Playing = false;
                }
            }
            this.registerPlayersWithClients();
        }
        ;
        checkPileUp(pid, tid, gameState) {
            const currentPid = pid;
            const currentTid = tid;
            let otherQuad = 0;
            let currentQuad = pid;
            let pileUpData = [];
            const totalPlayers = this._Num_Of_Players;
            if (totalPlayers == 2 && currentPid == 1) {
                currentQuad = 2;
            }
            const currentTS = (gameState[currentPid].tokenState[currentTid] + 13 * currentQuad) % 52;
            for (let p = 0; p < totalPlayers; p++) {
                for (let t = 0; t < Ludo_Wild.Config.dynTokenCount; t++) {
                    if (p == 0 && t == currentTid) {
                    }
                    else {
                        otherQuad = (currentPid + p) % totalPlayers;
                        if (totalPlayers == 2 && otherQuad == 1) {
                            otherQuad = 2;
                        }
                        const otherTS = (gameState[(currentPid + p) % totalPlayers].tokenState[t] + 13 * otherQuad) % 52;
                        if (currentTS == otherTS && gameState[(currentPid + p) % totalPlayers].tokenState[t] != 0 && gameState[(currentPid + p) % totalPlayers].id !== -1) {
                            if ((p != 0 && (gameState[(currentPid + p) % totalPlayers].tokenState[t] < 52 && gameState[currentPid].tokenState[currentTid] < 52)) || (p == 0 && gameState[currentPid].tokenState[currentTid] == gameState[(currentPid + p) % totalPlayers].tokenState[t])) {
                                pileUpData.push({ pid: (currentPid + p) % totalPlayers, tid: t });
                            }
                        }
                    }
                }
            }
            pileUpData.push({ pid: currentPid, tid: currentTid });
            if (pileUpData.length == 1) {
                pileUpData = [];
            }
            if (pileUpData.length > 0) {
            }
            return pileUpData;
        }
        isAnyGeneralOnlineMode(mode) {
            if (mode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || mode === Ludo_Wild.gameMode.RANDOM_ONLINE
                || mode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return true;
            }
            return false;
        }

        configureBattleCallback(callbackInfo) {
            this.battleStateContext = callbackInfo.context;
            this.battleStateCallback = callbackInfo.callback;
        }
        joinBattle(battleInfo) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.JOIN_BATTLE_MODE,
                data: battleInfo
            });
        }
        joinBotBattle(battleInfo) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.JOIN_BOT_BATTLE_MODE,
                data: battleInfo
            });
        }
        startBattle(data) {
            this.Main();
            this.onAllJoined(data);
        }
        onBattleModeStart(data) {

            this.battleStateCallback(this.battleStateContext, "battlemodestarted", data);
        }
        onLobbyTimeout() {

            this.battleStateCallback(this.battleStateContext, "lobbyTimeout", {});
        }
        ;
        onStartGameTimer() {
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEPLAY_SCREEN;
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.GAMEPLAY_SCREEN }, "", "#Gameplay");
            this._arenaManagerInstance.setTint(false);
            this._Players[0].startDiceTimer();
            this._arenaManagerInstance.renderInitialToasts();
        }

        createFriendsLobby(playerDetail) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_FRIENDS_LOBBY,
                data: playerDetail
            });
        }
        onFriendsLobbyCreated(message) {
            this.friendsLobbyStateCallback("created_lobby", message.data);
        }

        configureFriendsCallback(callbackInfo) {
            this.friendsLobbyStateContext = callbackInfo.context;
            this.friendsLobbyStateCallback = callbackInfo.callback;
        }
        ;
        joinFriendsLobby(playerDetail, roomId, ownRoomId) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.JOIN_FRIENDS_LOBBY_REQ,
                data: { playerDetail, roomId, ownRoomId }
            });
        }
        startFreindsMatchRequest(roomId) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_FRIENDS_MATCH_REQ,
                data: { roomId }
            });
        }
        ;
        onNewPlayerJoinedFriendsMode(message) {
            this.friendsLobbyStateCallback("new_player_joined", message.data);
        }
        onOldPlayerJoinedFriendsMode(message) {
            this.friendsLobbyStateCallback("old_player_joined", message.data);
        }
        ;
        onFriendsModeStart(data) {
            this.friendsLobbyStateCallback("friendsModeStarted", data);
        }
        ;
        onRoomNotAvailableFriends() {
            this.friendsLobbyStateCallback("room_not_avail", {});
        }
        ;
        onFriendsLobbyExit(roomId) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.FRIENDS_LOBBY_EXIT,
                data: { roomId }
            });
        }
        ;
        onDuplicateJoin() {
            this.friendsLobbyStateCallback("duplicate_join", {});
        }

        onReconnectinLobby() {
            this.friendsLobbyStateCallback("reconnect_lobby", {});
        }
        ;
        updateSocketIdFriends(playId, roomId) {
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.UPDATE_FRIENDS_SOCKET,
                data: { roomId, playId }
            });
        }

        configureRandomModeCallback(callbackInfo) {
            this.randomLobbyStateContext = callbackInfo.context;
            this.randomLobbyStateCallback = callbackInfo.callback;
        }
        ;
        sendRandomMatchRequest(maxPlayersNeeded) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                Ludo_Wild.playerData.rule = "BLITZ";
                this.send({
                    eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RANDOM_MATCH_REQUEST,
                    data: { playerDetail: Ludo_Wild.playerData, maxPlayersNeeded }
                });
            }
            else {
                Ludo_Wild.playerData.rule = "NORMAL";
                this.send({
                    eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RANDOM_MATCH_REQUEST,
                    data: { playerDetail: Ludo_Wild.playerData, maxPlayersNeeded }
                });
            }
        }
        onNoMatchFoundRandomMode() {
            this.randomLobbyStateCallback("no_match_found", {});
        }
        ;
        randomModeStart(data) {
            this.randomLobbyStateCallback("randomModeStarted", data);
        }
        startFakeRandomGame(data) {
            this.randomLobbyStateCallback("startFakeRandom", data);
        }
        onBlitzGameover(data) {
            if (this.isAnyGeneralOnlineMode(this._OnlineMode)) {
                this.onBlitzGameoverOnline(data);
            }
            else {
                this.onBlitzGameoverOffline(data);
            }
        }
        onBlitzGameoverOffline(data) {
            for (let i = 0; i < data.length; i++) {
                this._Players[data[i].id].Playing = false;

                this.gameWinData[i + 1] = {
                    pid: data[i].id, name: this._Players[data[i].id].getName(),
                    playId: this._Players[data[i].id].getplayId()
                };
                this._Players[data[i].id].disableOnQuit();
                this._arenaManagerInstance.removePocketCircles(data[i].id);
                this._Players[data[i].id].setRankMedal(i + 1);
            }
            this._arenaManagerInstance.onPlayerWon(this.gameWinData, this.getRank(this._playerID), true);
            this.gameWinData = {};
        }
        onBlitzGameoverOnline(data) {
            console.warn("on Blitz Gameover Online", data);
            for (let i = 0; i < data.length; i++) {
                this._Players[data[i].id].Playing = false;
                radio('resetOnWinOrLose').broadcast({ pid: data[i].id, isQuit: false, mode: this._OnlineMode });
                this.gameWinData[i + 1] = {
                    pid: data[i].id,
                    name: this._Players[data[i].id].getName(), playId: this._Players[data[i].id].getplayId(),
                    score: data[i].score
                };
                this._Players[data[i].id].disableOnQuit();
                this._arenaManagerInstance.removePocketCircles(data[i].id);
                this._Players[data[i].id].setRankMedal(i + 1);
            }
            this._arenaManagerInstance.onPlayerWon(this.gameWinData, this.getRank(this._playerID), true, "", "time_over");
            this.gameWinData = {};
        }
        onBlitzPointsUpdate(data) {
            this._arenaManagerInstance.updateBlitzPoints(data.pid, data.totalPoints, data.pointDiff, data.quadrant, data.pointType);
        }
        updateGameWinDataOnGameoverBlitz(pointsTable) {
            console.log("pointsTable", pointsTable);
            for (let i = 0; i < pointsTable.length; i++) {
                this.gameWinData[i + 1] = {
                    pid: pointsTable[i].id,
                    name: this._Players[pointsTable[i].id].getName(), playId: this._Players[pointsTable[i].id].getplayId(),
                    score: pointsTable[i].score
                };
            }
        }
        onBlitzTimerTick(data) {

            this._arenaManagerInstance.onServerTimerTick(data);
        }
    }
    Ludo_Wild.GamePlayManager = GamePlayManager;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Player {
        constructor(_totalPlayers, _gamePlayMgr) {
            this.name = "Player101";
            this.playId = undefined;
            this.profilePic = undefined;
            this.tokens = [];
            this.quadrant = 0;
            this.isPlaying = true;
            this.isAI = false;
            this.mode = Ludo_Wild.gameMode.SINGLE_PLAYER;
            this.totalPlayers = 0;
            this.homeTokenCount = 0;
            this.currentChips = 0;
            this.hexArray = [0xf94b46, 0x41c967, 0x186bc1, 0xffc63c];

            this.volumeHistory = [];
            this.receiverList = [];
            this.totalPlayers = _totalPlayers;
            this.gameplayMgrInstance = _gamePlayMgr;
        }
        get Quad() {
            return this.quadrant;
        }
        set Playing(_isplaying) {
            this.isPlaying = _isplaying;
        }
        set MODE(_mode) {
            this.mode = _mode;
        }
        ;
        get MODE() {
            return this.mode;
        }
        ;
        set IS_AI(_isAI) {
            this.isAI = _isAI;
        }
        get IS_AI() {
            return this.isAI;
        }
        get Playing() {
            return this.isPlaying;
        }
        get Color() {
            return this.color;
        }
        get PlayerId() {
            return this.playerId;
        }
        get PlayerIsActive() {
            return this.playerActive;
        }
        setName(_name) {
            this.name = _name;
        }
        ;
        setplayId(id) {
            this.playId = id;
        }
        ;
        getplayId() {
            return this.playId;
        }
        ;
        getName() {
            return this.name;
        }
        ;
        setProfilePic(_dp) {
            this.profilePic = _dp;
        }
        ;
        getProfilePic() {
            return this.profilePic;
        }
        ;
        setRankMedal(_rank) {
            this.rankMedal.setVisible(true);
            this.rankMedal.setRank(_rank);
        }
        ;
        setCurrentChips(_chips) {
            this.currentChips = _chips;
        }
        ;
        getCurrentChips() {
            return this.currentChips;
        }
        ;

        startDiceTimer() {
            this.diceContainer.activateDice();
            this.diceActive = true;
        }
        setProps(_color, _quadrant, id) {
            this.color = _color;
            this.quadrant = _quadrant;
            this.playerId = id;
            this.playerActive = false;
        }
        createTokens(tokenOffset, playerId, tokenGroup) {
            let dynamicTokenCount = 0;
            this.tokenPhaserGroup = tokenGroup;
            this.tokenTrayGroup = Ludo_Wild.Main.GAME.add.group();
            let x;
            let y;
            let obj;
            let pileUpData = { _content: [{ pid: this.playerId, tid: 0 }] };
            for (let i = 0; i < 4; i++) {
                x = tokenOffset["x_t" + i];
                y = tokenOffset["y_t" + i];
                let isTokenEnabled = true;
                if (dynamicTokenCount >= Ludo_Wild.Config.dynTokenCount) {
                    isTokenEnabled = false;
                }
                obj = this.calculateRealTokenPosition(x, y);
                this.tokens.push(new Ludo_Wild.token(this.color, obj.x, obj.y, playerId, i, this, isTokenEnabled));
                this.tokenPhaserGroup.add(this.tokens[i].getTokenImage());
                this.tokenTrayGroup.add(this.tokens[i].getTokenTray());
                ++dynamicTokenCount;
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    if (i > 0 && i < Ludo_Wild.Config.dynTokenCount) {
                        pileUpData._content.push({ pid: this.playerId, tid: i });

                        this.gameplayMgrInstance.tokenPileUpSituationBlitzStart(JSON.stringify(pileUpData));
                    }
                }
            }
            this.setHomeText();
            this.renderHUD();
        }
        syncTokenPositions(tokenPosArray) {
            let homeCount = 0;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.tokens[i]) {
                    if (tokenPosArray[i] === 57) {
                        ++homeCount;
                    }
                    this.tokens[i].syncPosition(tokenPosArray[i]);
                }
            }
            if (homeCount !== this.homeTokenCount) {

                this.homeTokenCount = homeCount;
                this.homeCountText.text = this.homeTokenCount.toString();
            }
        }
        checkisPileParenNull(tid) {
            if (this.tokens[tid].pileParent === null) {
                return true;
            }
            return false;
        }
        ;
        resetCallUI() {
            this.playerHUD.resetCallUI();
        }
        ;
        updatePointsUI(totalPoints) {
            this.playerBlitzHUD.updatePointsLabel(totalPoints);
        }
        renderHUD() {
            let tx;
            let ty;
            let hudQuad;
            let hudColor;
            let tdx;
            let tdy;
            let rankMedalY;
            let rankMedalX;
            let blitzDiceX;
            let blitzDiceY;
            const hudTrayWidth = 212;
            if (this.quadrant === 0) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    tx = 360 - (46 / 2) - (212 / 2) - 28;
                    ty = 592 + 207 / 2 + 45;
                    blitzDiceX = 360 - (76 * 2);
                    blitzDiceY = ty + 207 + 100;
                }
                else {
                    tx = 360 - (46 / 2) - (212 / 2);
                    ty = 592 + (207 * 2) + (25);
                }
                rankMedalY = 592 + (46 / 2) + (184);
                rankMedalX = 360 - (46 / 2) - 184;
                hudQuad = 0;
                tdx = 360 - 76;
                tdy = ty + 100;
            }
            else if (this.quadrant === 1) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    tx = 360 - (46 / 2) - (212 / 2) - 28;
                    ty = 592 - (207 / 2) - (45 * 2);
                    blitzDiceX = 360 - (76 * 2);
                    blitzDiceY = ty - 207 - 40;
                }
                else {
                    tx = 360 - (46 / 2) - (212 / 2);
                    ty = 592 - (207 * 2) + (25 / 2);
                }
                rankMedalY = 592 - (92) - (46 / 2) + 10;
                rankMedalX = 360 - (46 / 2) - 184;
                hudQuad = 1;
                tdx = 360 - 76;
                tdy = ty - 90;
            }
            else if (this.quadrant === 2) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    tx = 360 + (46 / 2) + (28 * 2) + 8;
                    ty = 592 - (207 / 2) - (45 * 2);
                    blitzDiceX = 360 + (76 * 2);
                    blitzDiceY = ty - 207 - 40;
                }
                else {
                    tx = 360 + (46 / 2) + (212 / 2);
                    ty = 592 - (207 * 2) + (25 / 2);
                }
                hudQuad = 2;
                rankMedalY = 592 - (92) - (46 / 2) + 10;
                rankMedalX = 360 + (46 / 2) + 184;
                tdx = 360 + 76;
                tdy = ty - 90;
            }
            else {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    tx = 360 + (46 / 2) + (28 * 2) + 8;
                    ty = 592 + 207 / 2 + 45;
                    blitzDiceX = 360 + (76 * 2);
                    blitzDiceY = ty + 207 + 100;
                }
                else {
                    tx = 360 + (46 / 2) + (212 / 2);
                    ty = 592 + (207 * 2) + (25);
                }
                rankMedalY = 592 + (46 / 2) + (184);
                rankMedalX = 360 + (46 / 2) + 184;
                hudQuad = 3;
                tdx = 360 + 76;
                tdy = ty + 100;
            }
            hudColor = this.color;
            let isExternPlayer = true;
            if (this.quadrant === 0 && this.mode !== Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                isExternPlayer = false;
            }
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.playerBlitzHUD = new Ludo_Wild.PlayerHUDBlitz({
                    x: tx, y: ty, quad: hudQuad, mode: this.mode, color: hudColor, name: this.name, avatar: this.profilePic,
                    userId: this.playId, totalPlayers: this.totalPlayers, isExternPlayer
                });
            }
            else {
                this.playerHUD = new Ludo_Wild.PlayerHUD({
                    x: tx, y: ty, quad: hudQuad, mode: this.mode, color: hudColor, name: this.name, avatar: this.profilePic,
                    userId: this.playId, totalPlayers: this.totalPlayers, isExternPlayer
                });
            }
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.diceContainer = new Ludo_Wild.Dice(blitzDiceX, blitzDiceY, this.mode, hudColor, hudQuad);
            }
            else {
                this.diceContainer = new Ludo_Wild.Dice(tdx, tdy, this.mode, hudColor, hudQuad);
            }
            if (this.quadrant === 1 || this.quadrant === 2) {
                this.rankMedal = new Ludo_Wild.RankMedal({ x: rankMedalX, y: rankMedalY, rank: 1 });
                if (this.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                    this.rankMedal.setAngle(180);
                }
                else {
                    this.rankMedal.reset(rankMedalX, rankMedalY - 100);
                }
            }
            else {
                this.rankMedal = new Ludo_Wild.RankMedal({ x: rankMedalX, y: rankMedalY, rank: 1 });
            }
            this.rankMedal.setVisible(false);
            this.diceContainer.deactivateDice();
            this.diceActive = false;
            if (!this.isAI) {
                if (this.mode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this.mode === Ludo_Wild.gameMode.RANDOM_ONLINE ||
                    this.mode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                    if (this.quadrant === 0) {
                        this.diceContainer.enableInput(true);
                        this.diceContainer.addCallbackFunction(this.RollDice, this);
                    }
                }
                else {
                    this.diceContainer.enableInput(true);
                    this.diceContainer.addCallbackFunction(this.RollDice, this);
                }
            }
        }
        ;
        showChat(receiverName, emojiIndex) {
            this.playerHUD.showChatBubble(receiverName, emojiIndex);
        }
        ;
        moveToken(tokenId, steps) {
            this.tokens[tokenId].assignMovement(steps);
        }
        onTokenHome(tid) {
            ++this.homeTokenCount;
            this.homeCountText.text = this.homeTokenCount.toString();
            this.tokens[tid].destroy();
        }
        ;
        disableOnQuit() {
            this.isPlaying = false;
            for (let i = 0; i < 4; i++) {
                this.tokens[i].destroy();
            }
            this.diceContainer.deactivateDice();
            this.diceContainer.setTimerAssetsVisibility(false);
            this.diceContainer.destroyRippletimer();
        }
        toggleMic(isMute) {
            this.playerHUD.muteMic(isMute);
        }
        ;
        manageVoiceActiveStatus(volume) {

            if (volume > 5) {
                this.playerHUD.manageWaveAnimation(true);
            }
            else {
                this.playerHUD.manageWaveAnimation(false);
            }
        }
        ;
        getCurrentVolumeAverage(currentVolume) {
            if (this.volumeHistory.length === 5) {
                this.volumeHistory.shift();
                this.volumeHistory.push(currentVolume);
            }
            else {
                this.volumeHistory.push(currentVolume);
            }
            let avg = 0;
            for (let i = 0; i < this.volumeHistory.length; i++) {

                avg += parseInt(this.volumeHistory[i], 10);
            }
            ;
            return (avg / 5);
        }
        ;
        calculateRealTokenPosition(x, y) {
            let theta = this.quadrant * 90;
            theta = Phaser.Math.degToRad(theta);
            let t_x = x - Ludo_Wild.Main.GAME.world.centerX;
            let t_y = y - Ludo_Wild.boardCenter;
            x = (Math.cos(theta) * t_x - Math.sin(theta) * t_y) + Ludo_Wild.Main.GAME.world.centerX;
            y = (Math.sin(theta) * t_x + Math.cos(theta) * t_y) + Ludo_Wild.boardCenter;
            x = Math.floor(x);
            y = Math.floor(y);
            return { x, y };
        }
        createHomeCountText(_x, _y) {
            this.homeCountText = Ludo_Wild.Main.GAME.add.text(_x, _y + (Ludo_Wild.Home.textYgap * -10), "0", {
                font: "24px KG",
                fill: "#ffffff"
            });
            this.homeCountText.anchor.setTo(0.5, 0.5);
        }
        ;
        setHomeText() {
            if (this.quadrant === 0) {
                this.createHomeCountText(Ludo_Wild.Main.GAME.world.centerX - 0.5, Ludo_Wild.boardCenter + 44);
            }
            else if (this.quadrant === 1) {
                this.createHomeCountText(Ludo_Wild.Main.GAME.world.centerX - 42, Ludo_Wild.boardCenter + 1.5);
            }
            else if (this.quadrant === 2) {
                this.createHomeCountText(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.boardCenter - 41.5);
            }
            else if (this.quadrant === 3) {
                this.createHomeCountText(Ludo_Wild.Main.GAME.world.centerX + 42, Ludo_Wild.boardCenter + 1);
            }
        }
        onQuit() {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_QUIT, data: { id: this.playerId } });
        }
        deactivateDice() {
            this.diceActive = false;
        }
        activateDice() {
            this.diceActive = true;
        }
        setDiceValueText(diceValue) {
            this.diceValueText.text = diceValue.toString();
        }
        RollDice(_context) {
            if (!_context) {
                _context = this;
            }
            if (_context.isAI) {
                _context.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.REQUEST_DICE_AI, data: { id: _context.playerId } });
            }
            else {
                if (this.mode === Ludo_Wild.gameMode.SINGLE_PLAYER || this.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                    _context.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.REQUEST_DICE, data: { id: _context.playerId } });
                }
                else {
                    _context.send({
                        eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.REQUEST_DICE, data: {
                            id: _context.playerId,
                            mc: _context.gameplayMgrInstance.moveCount
                        }
                    });
                }
            }
        }
        sendToken(tid) {
            //alert(Ludo_Wild.GameEvents.MOVE_TOKEN);
            //alert(Engine.EventType.GAME_EVENT);
            //alert(this.mode);
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.MOVE_TOKEN, data: { pid: this.playerId, tid } });
            if (this.mode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this.mode === Ludo_Wild.gameMode.RANDOM_ONLINE ||
                this.mode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                //alert('okkkkk');
                const data = { data: { pid: this.playerId, tid } };
                radio('onRequestTokenMovement').broadcast(data);
            }
        }
        sendTokenReached(tid) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TOKEN_REACHED, data: { pid: this.playerId, tid } });
        }
        killToken(tid) {
            this.tokens[tid].tokenDead();
        }
        updateDeadPile(tid) {
            if (this.mode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this.mode === Ludo_Wild.gameMode.RANDOM_ONLINE ||
                this.mode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                radio("updateDeadPile").broadcast(this.playerId, tid, this.gameplayMgrInstance);
            }
            else {

                let onDeadPileData = this.gameplayMgrInstance.getGameServer().checkPileUpBlitz(this.playerId, tid);

                this.gameplayMgrInstance.tokenPileUpSituationBlitzStart(JSON.stringify({ _content: onDeadPileData }));
            }
        }
        resetToken(tid) {
            this.tokens[tid].resetSize();
        }
        shrinkToken(tid, _scale, _offset, txtCount) {
            if (txtCount) {
                this.tokens[tid].shrink(_scale, _offset, txtCount);
            }
            else {
                this.tokens[tid].shrink(_scale, _offset);
            }
        }
        getRealTokenPosition(tid) {
            return this.tokens[tid].getRealPosition(this.Quad);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        addXender(_XObj) {
            this.receiverList.push(_XObj);
        }
        send(_msg) {
            this.receiverList.forEach((_XObj) => {
                _XObj.onReceive(_msg);
            });
        }
        onReceive(message) {
        }
        disableDice() {
            this.diceContainer.disableDiceInput();
        }
    }
    Ludo_Wild.Player = Player;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class token {
        constructor(_color, _x, _y, playerId, tokenId, parent, enabled = true) {
            this.position = 0;
            this.isEnabled = true;
            this.canClick = false;
            this.x = 0;
            this.y = 0;
            this.isShrunk = false;
            this.pileParent = null;
            this.tokenCountTrayDirection = -1;
            this.currentScale = 1;
            this.x = _x;
            this.y = _y;
            this._InitialX = _x;
            this._InitialY = _y;
            this.color = _color;
            this.tokenId = tokenId;
            this.playerId = playerId;
            this._TileWidth = 46;
            this._XOff = 38;
            this._YOff = 265;
            this.totalPlayers = parent.totalPlayers;
            this.canMove = true;
            this._ParentPlayer = parent;
            this.lastPosition = {
                x: 0, y: 0
            };
            this.isEnabled = enabled;

            this.createToken();
            this.createPointer();
            this.createTokenCountTray();
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.placeToken();
            }
        }
        get X() {
            return this.x;
        }
        ;
        get Y() {
            return this.y;
        }
        ;
        get PID() {
            return this.playerId;
        }
        ;
        get TID() {
            return this.tokenId;
        }
        ;
        getTokenImage() {
            return this.tokenImg;
        }
        getTokenTray() {
            return this.tokenCountTray;
        }
        ;
        get POSITION() {
            return this.position;
        }
        ;
        get SCALE() {
            return this.tokenImg.scale.x;
        }
        ;
        settokenCountTrayDirection(_direction) {
            this.tokenCountTrayDirection = _direction;
        }
        ;
        createTokenCountTray() {
            this.tokenCountTray = Ludo_Wild.Main.GAME.add.image(this.tokenImg.x - this.tokenImg.width, this.tokenImg.y, Ludo_Wild.generalSheet, "token_number");
            this.tokenCountTray.anchor.setTo(0, 0);
            const counTxt = Ludo_Wild.Main.GAME.add.text(16, 16, "1", { font: "20px KG", fill: "#ffffff" });
            counTxt.anchor.setTo(0.5, 0.5);
            this.tokenCountTray.addChild(counTxt);
            this.tokenCountTray.visible = false;
        }
        ;
        setTokenCountText(_count) {
            if (this.tokenCountTray) {
                if (this.tokenCountTray.getChildAt(0)) {

                    this.tokenCountTray.getChildAt(0).text = _count.toString();
                }
            }
        }
        ;
        createPointer() {
            this.pointer = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.arenaSheet, "pointer");
            this.pointer.anchor.setTo(0.5, 1);
            this.pointer.scale.setTo(0.6, 0.6);
            this.pointer.visible = false;
            this.tokenImg.addChild(this.pointer);

        }
        ;
        showPointer() {
            this.pointer.visible = true;
            this.canClick = true;
            this.pointer.x = 0;
            this.pointer.y = 0;

            const _y = this.pointer.y;

            this.pointerTween = Ludo_Wild.Main.GAME.add.tween(this.pointer).to({ y: _y - 10 }, 200, Phaser.Easing.Linear.In).to({ y: _y }, 200, Phaser.Easing.Out).loop().start();
        }
        ;
        hidePointer() {
            this.canClick = false;
            try {
                if (this.pointerTween !== undefined && this.pointerTween.isRunning) {
                    this.pointerTween.stop();
                }
            }
            catch (e) {
                console.log(e);
            }
            this.pointer.visible = false;
        }
        ;
        updateSideAssets(_coords) {
            if (this.tokenCountTrayDirection === -1) {
                this.tokenCountTray.x = _coords.x - this.tokenImg.width;
            }
            else {
                this.tokenCountTray.x = _coords.x;
            }
            this.tokenCountTray.y = _coords.y;
        }
        ;
        createToken() {
            this.tokenImg = Ludo_Wild.Main.GAME.add.sprite(this.x, this.y, Ludo_Wild.arenaSheet, "token" + this.color);
            //alert(this.color);
            this.tokenImg.type = this.color;
            this.tokenImg.anchor.setTo(0.5, 0.5);
            this.x = 0;
            this.y = 0;
            this.tokenImg.visible = this.isEnabled;
            //alert(this.tokenId);
            //this.pointer.visible = true;
            //this.tokenCountTray.visible = true;
            //this.tokenId=1;
            if (this.isEnabled) {
                this.tokenImg.inputEnabled = true;
                this.tokenImg.input.priorityID = 1;
                this.tokenImg.events.onInputDown.add(this.onMoveToken.bind(this), this);
                // Optional: simulate click on load
                // this.simulateTokenClick(); // Uncomment if you want to auto-trigger
                setTimeout(() => {
                    this.simulateTokenClick(0);

                }, 3000);
                setTimeout(() => {
                    this.simulateTokenClick(1);
                }, 3000);
                setTimeout(() => {
                    this.simulateTokenClick(2);
                }, 4000);
                setTimeout(() => {
                    this.simulateTokenClick(3);
                }, 5000);
                setTimeout(() => {
                    this.simulateTokenClick(4);
                }, 6000);
            }
        }
        destroy() {
            this.tokenImg.destroy();
            this.pointer.visible = false;
            this.tokenCountTray.visible = false;
            this.pileParent = null;
        }
        handleTokenClick() {
            //alert('handle');
            //if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) return;
            //alert(this.tokenId);
            //this.canClick = true;
            if (!this.canClick) {
                console.warn("Cannot click token");
                return;
            }

            this._ParentPlayer.sendToken(this.tokenId);
        }

        onMoveToken() {
            this.canClick = true;
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                // return;
            }
            ;
            if (!this.canClick) {
                console.warn("Cannot click token");
                return;
            }

            this._ParentPlayer.sendToken(this.tokenId);
        }

        simulateTokenClick(tid) {
            //alert(JSON.stringify(this.tokenImg));
            this.canClick = true;
            if (!this.canClick) {
                console.warn("Cannot click token");
                //return;
            }

            this._ParentPlayer.sendToken(tid);
        }

        assignMovement(steps) {
            this.tokenImg.scale.setTo(1, 1);
            this.tokenCountTray.scale.setTo(1, 1);
            this.currentScale = 1;
            this.tokenCountTray.visible = false;
            this.isShrunk = false;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.movingToken(steps);
            }
            else {
                if (this.position == 0 && steps == 6) {
                    this.placeToken();
                    Manager.AudioManager.getAudioInstance().playPegMoves();
                    this._ParentPlayer.sendTokenReached(this.tokenId);
                }
                else if (this.position != 0) {
                    this.movingToken(steps);
                }
            }
        }
        placeToken() {
            this.position = 1;
            if (this._ParentPlayer.Quad == 0) {
                this.x = 6;
                this.y = 13;
            }
            else if (this._ParentPlayer.Quad == 1) {
                if (this.totalPlayers == 2) {
                    this.x = 8;
                    this.y = 1;
                }
                else {
                    this.x = 1;
                    this.y = 6;
                }
            }
            else if (this._ParentPlayer.Quad == 2) {
                this.x = 8;
                this.y = 1;
            }
            else if (this._ParentPlayer.Quad == 3) {
                this.x = 13;
                this.y = 8;
            }
            this.updateTokenScreenPos(this._ParentPlayer.Quad);
        }
        syncPosition(absPosition) {
            let coords = { x: 0, y: 0 };
            if (this.position === absPosition && this.pileParent === null) {
                return;
            }
            if (this.pileParent !== null) {

                this.resetSize();
            }
            this.pileParent = null;
            this.position = absPosition;
            if (absPosition === 0) {
                this.tokenImg.reset(this._InitialX, this._InitialY);
            }
            else if (absPosition === 57) {

                this.destroy();
            }
            else {
                coords = this.absoluteToBoardCoordinates(this.playerId, absPosition);
                coords = this.rotateToken(this._ParentPlayer.Quad, coords);
                this.tokenImg.reset(coords.x, coords.y);
            }
        }
        ;
        absoluteToBoardCoordinates(playerId, absPos) {
            let x = 0;
            let y = 0;

            let minorOffsetX = 1;
            if (absPos >= 1 && absPos <= 5) {
                x = 1;
                y = (5 - absPos) + 2;
            }
            else if (absPos >= 6 && absPos <= 11) {
                y = 1;
                x = (absPos - 6) + 2;
                minorOffsetX = 1.5;
            }
            else if (absPos === 12) {
                y = 0;
                x = 7;
            }
            else if (absPos >= 13 && absPos <= 18) {
                y = -1;
                x = (18 - absPos) + 2;
            }
            else if (absPos >= 19 && absPos <= 24) {
                x = 1;
                y = -((absPos - 19) + 2);
                minorOffsetX = 4;
            }
            else if (absPos === 25) {
                y = -7;
                x = 0;
            }
            else if (absPos >= 26 && absPos <= 31) {
                y = -((31 - absPos) + 2);
                x = -1;
            }
            else if (absPos >= 32 && absPos <= 37) {
                y = -1;
                x = -((absPos - 32) + 2);
                minorOffsetX = -0.5;
            }
            else if (absPos === 38) {
                y = 0;
                x = -7;
                minorOffsetX = -0.5;
            }
            else if (absPos >= 39 && absPos <= 44) {
                y = 1;
                x = -((44 - absPos) + 2);
                minorOffsetX = -0.5;
            }
            else if (absPos >= 45 && absPos <= 50) {
                x = -1;
                y = (absPos - 45) + 2;
                minorOffsetX = -0.5;
            }
            else if (absPos === 51) {
                x = 0;
                y = 7;
            }
            else if (absPos >= 52 && absPos <= 56) {
                x = 0;
                y = (56 - absPos) + 2;
            }
            else if (absPos === 57) {
                x = 0;
                y = 1;
            }
            x = Ludo_Wild.Main.GAME.world.centerX - ((x * this._TileWidth) + 0);
            y = Ludo_Wild.boardCenter + ((y * this._TileWidth));
            return { x, y };
        }
        rotateToken(playerId, coords) {
            const x = 0;
            const y = 0;
            const newCoord = { x, y };
            let theta = playerId * Math.PI / 2;
            if (this.totalPlayers === 2 && playerId === 1) {
                theta = 2 * Math.PI / 2;
            }

            const _x = coords.x - Ludo_Wild.Main.GAME.world.centerX;

            const _y = coords.y - Ludo_Wild.boardCenter;
            newCoord.x = _x * Math.cos(theta) - _y * Math.sin(theta) + Ludo_Wild.Main.GAME.world.centerX;
            newCoord.y = _x * Math.sin(theta) + _y * Math.cos(theta) + Ludo_Wild.boardCenter;
            return { x: Math.floor(newCoord.x), y: Math.floor(newCoord.y - 5) };
        }
        tokenAdvance() {
            this.position += 1;

            if (this.x == 7 && this.y == 14) {
                if (this.playerId == 0) {
                    this.y -= 1;
                }
                else {
                    this.x -= 1;
                }
            }

            else if (this.x == 6) {
                this.y -= 1;
                if (this.y == 8) {
                    this.x -= 1;
                }
                if (this.y == -1) {
                    this.x += 1;
                    this.y += 1;
                }
            }

            else if (this.x == 7 && this.y == 0) {
                if (this.playerId == 1 && this.totalPlayers == 2 || this.playerId == 2 && this.totalPlayers > 2) {
                    this.y += 1;
                }
                else {
                    this.x += 1;
                }
            }

            else if (this.x == 8) {
                this.y += 1;
                if (this.y == 6) {
                    this.x += 1;
                }
                if (this.y == 15) {
                    this.x -= 1;
                    this.y -= 1;
                }
            }

            else if (this.x == 0 && this.y == 7) {
                if (this.playerId == 1 && this.totalPlayers >= 3) {
                    this.x += 1;
                }
                else {
                    this.y -= 1;
                }
            }

            else if (this.y == 6) {
                this.x += 1;
                if (this.x == 6) {
                    this.y -= 1;
                }
                if (this.x == 15) {
                    this.y += 1;
                    this.x -= 1;
                }
            }

            else if (this.x == 14 && this.y == 7) {
                if (this.playerId == 3) {
                    this.x -= 1;
                }
                else {
                    this.y += 1;
                }
            }

            else if (this.y == 8) {
                this.x -= 1;
                if (this.x == 8) {
                    this.y += 1;
                }
                if (this.x == -1) {
                    this.y -= 1;
                    this.x += 1;
                }
            }
        }
        movingToken(steps) {
            if (this._ParentPlayer.PlayerIsActive) {
                this.moveAnimationToken(steps, 0);
            }
        }
        moveAnimationToken(steps, currentSteps) {
            Manager.AudioManager.getAudioInstance().playPegMoves();
            currentSteps += 1;
            if (this.position <= 56) {
                this.tokenAdvance();
                this.updateTokenScreenPos(this._ParentPlayer.Quad, steps, currentSteps);
            }
        }
        updateTokenScreenPos(playerId, steps, currentSteps, todeath = false) {
            //alert(playerId);
            //alert(steps);
            //alert(currentSteps);
            //alert(todeath)
            const xPadding = 0;
            let coords = {};
            const absPos = this.position;
            coords = this.absoluteToBoardCoordinates(playerId, absPos);
            coords = this.rotateToken(playerId, coords);
            if (this.position >= 1) {
                if (steps !== undefined) {

                    Ludo_Wild.Main.GAME.add.tween(this.tokenImg).to({ x: coords.x + xPadding, y: coords.y }, 200).start().onComplete.add(() => {
                        if (currentSteps !== steps) {
                            this.moveAnimationToken(steps, currentSteps);
                        }
                        else {
                            this._ParentPlayer.sendTokenReached(this.tokenId);
                            this._ParentPlayer.tokenPhaserGroup.sort('y', Phaser.Group.SORT_ASCENDING);
                        }
                    });
                    Ludo_Wild.Main.GAME.add.tween(this.tokenImg.scale).to({ x: 1.3, y: 1.35 }, 100).to({ x: this.currentScale, y: this.currentScale }, 100).start().onComplete.add(() => {
                        this.tokenImg.scale.setTo(this.currentScale, this.currentScale);
                    });
                }
                else {

                    this.tokenImg.x = coords.x + xPadding;

                    this.tokenImg.y = coords.y;
                    this.lastPosition.x = this.tokenImg.x;
                    this.lastPosition.y = this.tokenImg.y;
                    this.updateSideAssets(coords);
                    if (!todeath) {
                        this._ParentPlayer.tokenPhaserGroup.sort('y', Phaser.Group.SORT_ASCENDING);
                    }
                }
            }

        }
        getWorldPosition(playerId, absPos) {
            let _coords = this.absoluteToBoardCoordinates(playerId, absPos);
            _coords = this.rotateToken(playerId, _coords);
            return _coords;
        }
        ;
        resetSize() {
            this.tokenImg.scale.setTo(1, 1);
            this.tokenCountTray.scale.setTo(1, 1);
            this.currentScale = 1;
            if (this.tokenOriginPostition !== undefined) {
                this.tokenImg.x = this.tokenOriginPostition.x;
                this.tokenImg.y = this.tokenOriginPostition.y;
            }
            this.tokenCountTrayDirection - 1;
            this.updateSideAssets({ x: this.tokenImg.x, y: this.tokenImg.y });
            this.isShrunk = false;
            this.pointer.visible = false;
            this.tokenCountTray.visible = false;
        }
        shrink(_scale, _offset, txtCount) {
            if (this.position === 57) {
                return;
            }
            if (!this.isShrunk) {
                this.isShrunk = true;
                this.tokenOriginPostition = { x: this.tokenImg.x, y: this.tokenImg.y };
            }
            this.tokenImg.scale.setTo(_scale, _scale);
            this.tokenCountTray.scale.setTo(_scale, _scale);
            this.currentScale = _scale;
            if (txtCount) {
                this.setTokenCountText(txtCount);
            }
            this.bringToTop();
            this.tokenCountTray.visible = true;
            this.adjustTokenOffset(_offset);
        }
        bringToTop() {
            this._ParentPlayer.tokenPhaserGroup.bringToTop(this.tokenImg);
            this._ParentPlayer.tokenTrayGroup.bringToTop(this.tokenCountTray);
        }
        ;
        adjustTokenOffset(_offset) {
            this.tokenImg.x = this.tokenOriginPostition.x + _offset.x;
            this.tokenImg.y = this.tokenOriginPostition.y + _offset.y;

            this.updateSideAssets({ x: this.tokenImg.x, y: this.tokenImg.y });
            this.pointer.visible = false;
        }
        tokenDead() {
            this.tokenImg.scale.setTo(1, 1);
            this.currentScale = 1;
            this.isShrunk = false;
            this.tokenDeathAnimation();
        }
        tokenDeathAnimation() {
            this.position--;
            if (this.position != (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ ? 0 : -1)) {
                const _that = this;
                this.deathMovement(this._ParentPlayer.Quad);
                this.updateTokenScreenPos(this._ParentPlayer.Quad, undefined, undefined, true);
                window.setTimeout(_that.tokenDeathAnimation.bind(_that), 10);
            }
            else {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    this.position = 1;
                    this.placeToken();
                    this._ParentPlayer.updateDeadPile(this.TID);
                }
                else {
                    this.position = 0;
                    this.tokenImg.x = this._InitialX;
                    this.tokenImg.y = this._InitialY;
                    this.updateSideAssets({ x: this.tokenImg.x, y: this.tokenImg.y });
                }
            }
        }
        deathMovement(playerId) {
            if (this.x == 7 && this.y == 14) {
                this.x += 1;
            }

            else if (this.x == 6) {
                this.y += 1;
                if (this.y == 6) {
                    this.x -= 1;
                }
                if (this.y == 15) {
                    this.x += 1;
                    this.y -= 1;
                }
            }

            else if (this.x == 7 && this.y == 0) {
                this.x -= 1;
            }

            else if (this.x == 8) {
                this.y -= 1;
                if (this.y == -1) {
                    this.x -= 1;
                    this.y += 1;
                }
                if (this.y == 8) {
                    this.x += 1;
                }
            }

            else if (this.x == 0 && this.y == 7) {
                this.y += 1;
            }

            else if (this.y == 6) {
                this.x -= 1;
                if (this.x == -1) {
                    this.y += 1;
                    this.x += 1;
                }
                if (this.x == 8) {
                    this.y -= 1;
                }
            }

            else if (this.x == 14 && this.y == 7) {
                this.y -= 1;
            }

            else if (this.y == 8) {
                this.x += 1;
                if (this.x == 6) {
                    this.y += 1;
                }
                if (this.x == 15) {
                    this.y -= 1;
                    this.x -= 1;
                }
            }
        }
        getRealPosition(pid) {
            const absPos = this.position;
            let coords = this.absoluteToBoardCoordinates(pid, absPos);
            let rotated_coords = this.rotateToken(pid, coords);
            return rotated_coords;
        }
    }
    Ludo_Wild.token = token;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class tokenPile {
        constructor() {
            this.tokenArray = [];
            this.tokenGroups = [];
            this.typeCount = 0;
            this.typeArray = [];
            this.idDirectionMap = {};
            this.lastPid = null;
        }
        getTypeArray() {
            return this.typeArray;
        }
        get length() {
            return this.tokenArray.length;
        }
        ;
        setTypeArray(_array) {
            this.typeArray = _array;
        }
        ;
        initPileData(_piledata) {
            this.pileData = _piledata;

            if (this.pileData._content.length > 0) {
                this.setIdDirectionMap(this.pileData._content[0].pid);
            }
        }
        ;
        newGroup(_group) {
            this.tokenGroups.push(_group);
        }
        ;
        add(_token) {
            this.tokenArray.push(_token);
            for (let i = 0; i < this.tokenArray.length; i++) {
                this.tokenArray[i].settokenCountTrayDirection(this.idDirectionMap[this.tokenArray[i].playerId]);
            }
        }
        returnPileArray() {
            return this.pileData._content;
        }
        ;
        addNewPileItem(_pile) {
            this.pileData._content.push(_pile);

            let content = this.pileData._content[this.pileData._content.length - 1];
            let _direction;
            if (this.idDirectionMap[content.pid] === undefined) {
                _direction = -1 * this.idDirectionMap[this.lastPid];
            }
            else {
                _direction = this.idDirectionMap[content.pid];
            }
        }
        ;
        setIdDirectionMap(pid) {
            if (this.lastPid === null) {
                this.idDirectionMap[pid] = -1;
            }
            else if (this.idDirectionMap[pid] === undefined) {
                this.idDirectionMap[pid] = -1 * this.idDirectionMap[this.lastPid];
            }
            this.lastPid = pid;

        }
        ;
        checkIfthereisMorePid(_pid) {
            let t_count = 0;
            for (let i = 0; i < this.tokenArray.length; i++) {
                if (this.tokenArray[i].PID === _pid) {
                    ++t_count;
                    if (t_count > 1) {
                        return true;
                    }
                }
            }
            return false;
        }
        ;
        findIndexOfPileItem(_pid, _tid) {
            for (let i = 0; i < this.pileData._content.length; i++) {
                if (this.pileData._content[i].pid === _pid && this.pileData._content[i].tid === _tid) {
                    return i;
                }
            }
        }
        ;
        remove(_token) {
            if (!this.checkIfthereisMorePid(_token.PID)) {
                let _index = this.typeArray.indexOf(_token.PID);
                this.typeArray.splice(_index, 1);
                --this.typeCount;
            }
            let _indexPile = this.findIndexOfPileItem(_token.PID, _token.TID);
            this.pileData._content.splice(_indexPile, 1);
            let _index = this.tokenArray.indexOf(_token);
            this.tokenArray.splice(_index, 1);
        }
    }
    Ludo_Wild.tokenPile = tokenPile;
})(Ludo_Wild || (Ludo_Wild = {}));
var Engine;
(function (Engine) {
    let EventType;
    (function (EventType) {
        EventType[EventType["GAME_EVENT"] = 0] = "GAME_EVENT";
        EventType[EventType["SERVER_EVENTS"] = 1] = "SERVER_EVENTS";
    })(EventType = Engine.EventType || (Engine.EventType = {}));
})(Engine || (Engine = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class ClientOffline {
        constructor() {
            this.receiverList = [];
            console.log("Client offline interface");
            this.receiverList = [];
        }
        addXender(_xender) {
            this.receiverList.push(_xender);
            _xender.addXender(this);
        }
        removeXender(_xender) {
        }
        ;
        removeAllReceivers() {

            this.receiverList = [];
        }
        ;
        onPileUp(data) {

            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PILE_UP, data: { _content: data.pileUpData } });
        }
        startGame(_data) {
            //alert('offline');
            console.warn("start game offlibne");
            const colorArray = [];

            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_GAME_OFFLINE, data: { c_data: _data.color, pid: 0, totalPeers: _data.totalPeer } });
        }
        send(_msg) {
            this.receiverList.forEach((_xender) => {
                _xender.onReceive(_msg);
            });
        }
        onReceive(message) {

            switch (message.event) {
                case Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST, data: { peers: message.data.peers } });
                    break;
                case Ludo_Wild.GameEvents.CHOOSE_TOKEN:

                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CHOOSE_TOKEN, data: { _data: message.data } });
                    break;
                case Ludo_Wild.GameEvents.ON_TOKEN_SELECT:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_SELECT, data: { color: message.data } });
                    break;
                case Ludo_Wild.GameEvents.ON_TOKEN_DESELECT:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_DESELECT, data: { color: message.data } });
                    break;
                case Ludo_Wild.GameEvents.REQUEST_DICE:

                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_REQUEST_DICE, data: { data: message.data } });
                    break;
                case Ludo_Wild.GameEvents.REQUEST_DICE_AI:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_REQUEST_DICE_AI, data: { data: message.data } });
                    break;
                case Ludo_Wild.GameEvents.RETURN_DICE:

                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RETURN_DICE, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.TOKEN_MOVED:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_MOVED, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.START_GAME_OFFLINE:
                    this.startGame(message.data);
                    break;
                case Ludo_Wild.GameEvents.HIDE_UI:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.HIDE_UI, data: {} });
                    break;
                case Ludo_Wild.GameEvents.MOVE_TOKEN:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.MOVE_TOKEN_REQUEST, data: { data: message.data } });
                    break;
                case Ludo_Wild.GameEvents.TURN_OVER:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.TOKEN_REACHED:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TOKEN_REACHED, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.PLAYER_WON:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_WON, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.PLAYER_QUIT:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_QUIT, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.ON_PLAYER_QUIT:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_PLAYER_QUIT, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.GAME_OVER:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.GAME_OVER, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.SHOW_WON_UI:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.SHOW_WON_UI, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.PILE_UP:
                    this.onPileUp(message.data);
                    break;
                case Ludo_Wild.GameEvents.AI_HOME:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_HOME, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.AI_KILLED:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_KILLED, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.ON_TOKEN_HOME:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_HOME, data: { _content: message.data } });
                    break;
                case Ludo_Wild.GameEvents.BLITZ_OVER:
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.BLITZ_OVER, data: message.data });
                    break;
            }
        }
    }
    ClientOffline._ClientInstance = null;
    Ludo_Wild.ClientOffline = ClientOffline;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class ClientOnline {
        constructor() {
            this._matchID = "null";
            this._playerID = null;
            this.receiverList = [];
            this._backendFrameWork = null;
            console.log("Client Online Interface");
            this.addXender(Network.Socket.getInstance());
            this._matchID = undefined;
            this._userID = Ludo_Wild.playerData.playId;
        }
        ;
        disconnectSocketConnection() {
            Network.Socket.getInstance().disconnect();
            Network.Socket.removeInstance();
        }
        ;
        removeAllReceivers() {
            this.receiverList = [];

        }
        ;
        createMatch(_data) {
            this._userID = Ludo_Wild.playerData.playId;
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.CREATE_MATCH_REQUEST, data: { id: this._userID } });
        }
        onCreateMatchSucces(_data) {
            this._matchID = _data.matchID;
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_MATCH_SUCCESS, data: { matchId: _data.matchID } });
        }
        onGettingRandomMatchId(_data) {
            this._matchID = _data.matchID;

        }
        ;
        sendToken(_data) {
            //alert('sendsend');
            //alert(this._playerID);
            if (this._playerID !== _data.pid) {
                // return;
            }
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.MOVE_TOKEN, data: { matchId: this._matchID, userId: this._userID, tokenId: _data.tid } });
        }
        TokenDataFromServer(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_MOVED, data: { _content: content.data } });
        }
        joinMatch(_userid, _matchid) {
            this._matchID = _matchid;
            this._userID = Ludo_Wild.playerData.playId;
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.JOIN_MATCH_REQUEST, data: { userid: this._userID, matchid: _matchid } });
        }
        ;
        onQuitLobby() {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.QUIT_LOBBY, data: { userId: Ludo_Wild.playerData.playId, matchId: this._matchID } });
        }
        ;
        joinRandomMatch(_data) {

            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.JOIN_RANDOM_MATCH_REQUEST, data: { userid: Ludo_Wild.playerData.playId, peers: _data.maxPeers, table: _data.table } });
        }
        ;
        onStartGameReq(_data) {

            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.ON_START_GAME_REQUEST, data: { userId: Ludo_Wild.playerData.playId, matchId: _data.matchid } });
        }
        ;
        sendAllJoined() {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.SELF_FETCH_REQ, data: {} });
        }
        sendMessage(data) {

            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.SEND_MSG, data: { userid: this._userID, matchid: this._matchID, msg: data } });
        }
        sendReturnData(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RETURN_DICE, data: { _content: content.data } });
        }
        onPileUp(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PILE_UP, data: { _content: content.data } });
        }
        onturnOver(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { _content: content.data } });
        }
        onPlayerWon(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_WON, data: { _content: content.data } });
            if (content.data.place) {

            }
            if (this._playerID === content.data.pid) {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.WON_PRIVATE, data: { _content: content.data } });
            }
        }
        onAbortMatch(content) {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ABORT_MATCH, data: {} });
        }
        onReceivingMessage(content) {

            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RECEIVE_MSG, data: { _content: content.msg } });
        }
        getDice(moveCount) {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.REQUEST_DICE, data: { matchId: this._matchID, userId: this._userID, mc: moveCount } });
        }
        startGame(data) {
            this._playerID = data.data.userId;
            let _colorArray = [];
            data.data.data.forEach((index) => {
                _colorArray.push(index.color);
            });
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ALL_JOINED, data: { c_data: _colorArray, pid: data.data.userId, totalPeers: data.data.totalPeers, table: data.data.table } });
        }
        startGameRandom(data) {
            this._playerID = data.data.userId;
            let _chosenColor = oMetaManager.localGetItem('randomColor');
            let _colorArray = [1, 2, 3, 4];
            let t_color = _colorArray[this._playerID];
            _colorArray[this._playerID] = _chosenColor + 1;
            _colorArray[_chosenColor] = t_color;
            let t_colorArray = this.saturateArray(_colorArray, data.data.totalPeers);
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ALL_JOINED, data: { c_data: t_colorArray, pid: data.data.userId, totalPeers: data.data.totalPeers, table: data.data.table } });
        }
        ;
        startBattleMode(data) {
            this._playerID = data.data.userId;
            let _colorArray = [1, 2, 3, 4];
            let t_colorArray = this.saturateArray(_colorArray, data.data.totalPeers);
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ALL_JOINED_BATTLE, data: {
                    c_data: t_colorArray,
                    pid: data.data.userId, totalPeers: data.data.totalPeers,
                    table: data.data.table, playerList: data.data.playerList, dynTokenCount: data.data.dynTokenCount, rule: data.data.rule
                }
            });
        }
        startFriendsGame(data) {
            this._playerID = data.data.userId;
            let _colorArray = [1, 2, 3, 4];
            let t_colorArray = this.saturateArray(_colorArray, data.data.totalPeers);
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ALL_JOINED_FRIENDS, data: {
                    c_data: t_colorArray,
                    pid: data.data.userId, totalPeers: data.data.totalPeers,
                    table: data.data.table, playerList: data.data.playerList
                }
            });
        }
        ;
        onRandomMatchFound(data) {
            this._playerID = data.data.userId;
            this._matchID = data.data.matchId;
            this._userID = Ludo_Wild.playerData.playId;
            let _colorArray = [1, 2, 3, 4];
            let t_colorArray = this.saturateArray(_colorArray, data.data.totalPeers);
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ALL_JOINED_RANDOM_MODE, data: {
                    c_data: t_colorArray,
                    pid: data.data.userId, totalPeers: data.data.totalPeers,
                    table: data.data.table, playerList: data.data.playerList, matchId: data.data.matchId
                }
            });
        }
        ;
        saturateArray(t_array, totalPeers) {
            for (let i = 0; i < 4; i++) {
                if (i > (totalPeers - 1)) {
                    t_array[i] = 0;
                }
            }
            return t_array;
        }
        ;
        ontokenSelect(_color) {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.ON_TOKEN_SELECT, data: { matchId: this._matchID, userId: Ludo_Wild.playerData.playId, token: _color } });
        }
        onTableSelect(content) {

            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.ON_TABLE_SELECT, data: { matchId: this._matchID, userId: Ludo_Wild.playerData.playId, table: content.table } });
        }
        ;
        onToTableSelection() {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.ONTO_TABLESCREEN, data: { matchId: this._matchID } });
        }
        onExitGame() {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.EXIT_GAME, data: { matchId: this._matchID, userId: this._userID } });
        }
        onPlayerQuit(data) {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.PLAYER_QUIT, data: { matchId: this._matchID, userId: this._userID } });
        }
        onTokenReached(content) {
        }
        getTableValue() {
            this.send({ eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.GET_TABLE_VALUE, data: { userId: Ludo_Wild.playerData.playId } });
        }
        ;
        send(_msg) {
            this.receiverList.forEach((_xender) => {
                _xender.onReceive(_msg);
            });
        }
        addXender(_xender) {
            this.receiverList.push(_xender);
            _xender.addXender(this);
        }
        removeXender(_xender) {

            let index = this.receiverList.indexOf(_xender);
            if (index > -1) {
                this.receiverList.splice(index, 1);
            }
        }
        onGameOver() {
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.GAME_OVER, data: {} });
        }
        onReceive(_msg) {
            if (_msg.eventType === Engine.EventType.GAME_EVENT) {
                switch (_msg.event) {
                    case Ludo_Wild.GameEvents.REQUEST_DICE:
                        this.getDice(_msg.data.mc);
                        break;
                    case Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST:

                        this.createMatch(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.JOIN_RANDOM_MATCH_REQUEST:
                        this.joinRandomMatch(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.JOIN_MATCH_REQUEST:
                        this.joinMatch(_msg.data.userid, _msg.data.matchid);
                        break;
                    case Ludo_Wild.GameEvents.ON_START_GAME_REQUEST:
                        this.onStartGameReq(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.ON_TOKEN_SELECT:
                        this.ontokenSelect(_msg.data.token);
                        break;
                    case Ludo_Wild.GameEvents.HIDE_UI:
                        this.send(_msg);
                        break;
                    case Ludo_Wild.GameEvents.MOVE_TOKEN:
                        this.sendToken(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.TOKEN_REACHED:
                        this.onTokenReached(_msg.data);
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TOKEN_REACHED, data: { _content: _msg.data } });
                        break;
                    case Ludo_Wild.GameEvents.SEND_MSG:

                        this.sendMessage(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.PLAYER_QUIT:
                        this.onPlayerQuit(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.SHOW_WON_UI:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.SHOW_WON_UI, data: { _content: _msg.data } });
                        break;
                    case Ludo_Wild.GameEvents.ON_TABLE_SELECT:
                        this.onTableSelect(_msg.data);
                        break;
                    case Ludo_Wild.GameEvents.ONTO_TABLESCREEN:
                        this.onToTableSelection();
                        break;
                    case Ludo_Wild.GameEvents.EXIT_GAME:
                        this.onExitGame();
                        break;
                    case Ludo_Wild.GameEvents.QUIT_LOBBY:
                        this.onQuitLobby();
                        break;
                    case Ludo_Wild.GameEvents.GET_TABLE_VALUE:
                        this.getTableValue();
                        break;
                    case Ludo_Wild.GameEvents.JOIN_BATTLE_MODE:
                        const battleInfo = _msg.data;
                        this._matchID = "ludo::battle::" + battleInfo.matchId;
                        this._userID = battleInfo.client.userId;
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.JOIN_BATTLE_MODE,
                            data: battleInfo
                        });
                        break;
                    case Ludo_Wild.GameEvents.JOIN_BOT_BATTLE_MODE:
                        const botBattleInfo = _msg.data;
                        this._matchID = "ludo::battle::" + botBattleInfo.matchId;
                        this._userID = botBattleInfo.client.userId;
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.JOIN_BOT_BATTLE_MODE,
                            data: botBattleInfo
                        });
                        break;
                    case Ludo_Wild.GameEvents.RESET_MATCH_ID:
                        this._matchID = undefined;
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.RESET_SOCKET_MATCH_ID,
                            data: {}
                        });
                        break;
                    case Ludo_Wild.GameEvents.CLOSE_TAB_EXIT:
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.CLOSE_TAB_EXIT,
                            data: {}
                        });
                        break;
                    case Ludo_Wild.GameEvents.CREATE_FRIENDS_LOBBY:
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.CREATE_FRIENDS_LOBBY,
                            data: _msg.data
                        });
                        break;
                    case Ludo_Wild.GameEvents.JOIN_FRIENDS_LOBBY_REQ:

                        this._matchID = "ludo::friends::" + _msg.data.roomId;
                        this._userID = Ludo_Wild.playerData.playId;
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.JOIN_FRIENDS_LOBBY_REQ,
                            data: _msg.data
                        });
                        break;
                    case Ludo_Wild.GameEvents.START_FRIENDS_MATCH_REQ:
                        this._matchID = "ludo::friends::" + _msg.data.roomId;
                        this._userID = Ludo_Wild.playerData.playId;
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.START_FRIENDS_MATCH_REQ,
                            data: _msg.data
                        });
                        break;
                    case Ludo_Wild.GameEvents.FRIENDS_LOBBY_EXIT:
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.FRIENDS_LOBBY_EXIT,
                            data: _msg.data
                        });
                        break;
                    case Ludo_Wild.GameEvents.UPDATE_FRIENDS_SOCKET:
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.UPDATE_FRIENDS_SOCKET,
                            data: _msg.data
                        });
                        break;
                    case Ludo_Wild.GameEvents.RANDOM_MATCH_REQUEST:
                        this.send({
                            eventType: Engine.EventType.SERVER_EVENTS, event: Network.ServerEvents.RANDOM_MATCH_REQUEST,
                            data: _msg.data
                        });
                        break;
                }
            }
            else {
                switch (_msg.event) {
                    case Network.ServerEvents.CREATE_MATCH_SUCCESS:
                        this.onCreateMatchSucces(_msg.data);
                        break;
                    case Network.ServerEvents.RANDOM_MATCHID:
                        this.onGettingRandomMatchId(_msg.data);
                        break;
                    case Network.ServerEvents.JOIN_MATCH_SUCCESS:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.JOINED_PRIVATE, data: { table: Ludo_Wild.BootTable.BRONZE } });
                        break;
                    case Network.ServerEvents.START_GAME:
                        this.startGame(_msg.data);
                        break;
                    case Network.ServerEvents.START_GAME_TIMER:
                        this.send({
                            eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_GAME_TIMER,
                            data: {}
                        });
                        break;
                    case Network.ServerEvents.START_GAME_RANDOM:
                        this.startGameRandom(_msg.data);
                        break;
                    case Network.ServerEvents.CHOOSE_TOKEN:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CHOOSE_TOKEN, data: { _data: _msg.data } });
                        break;
                    case Network.ServerEvents.GOT_DICE:
                        this.sendReturnData(_msg.data);
                        break;
                    case Network.ServerEvents.TOKEN_MOVED:
                        this.TokenDataFromServer(_msg.data);
                        break;
                    case Network.ServerEvents.TURN_OVER:
                        this.onturnOver(_msg.data);
                        break;
                    case Network.ServerEvents.PLAYER_WON:
                        this.onPlayerWon(_msg.data);
                        break;
                    case Network.ServerEvents.ABORT_MATCH:
                        this.onAbortMatch(_msg.data);
                        break;
                    case Network.ServerEvents.PILE_UP:
                        this.onPileUp(_msg.data);
                        break;
                    case Network.ServerEvents.GAME_OVER:
                        this.onGameOver();
                        break;
                    case Network.ServerEvents.RECEIVE_MSG:
                        this.onReceivingMessage(_msg.data);
                        break;
                    case Network.ServerEvents.ON_PLAYER_QUIT:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_PLAYER_QUIT, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.ON_PLAYER_JOINED:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_PLAYER_JOINED, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.ON_PLAYER_JOINED_RANDOM:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_PLAYER_JOINED_RANDOM, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.ON_REQUEST_FAIL:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_REQUEST_FAIL, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.ON_REQUEST_FAIL_MESSAGE:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_REQUEST_FAIL_MESSAGE, data: { _content: _msg.data.msg } });
                        break;

                    case Network.ServerEvents.TABLE_ACCEPTED:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TABLE_ACCEPTED, data: {} });
                        break;
                    case Network.ServerEvents.ON_TOKEN_HOME:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_HOME, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.GET_METADATA:

                        break;
                    case Network.ServerEvents.ON_TABLEOPTIONS:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TABLEOPTIONS, data: { _content: _msg.data.msg } });
                        break;
                    case Network.ServerEvents.NOTIFY_TABLE_CHOSEN:

                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.NOTIFY_TABLE_CHOSEN, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.CREATOR_LEFT:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATOR_LEFT, data: {} });
                        break;
                    case Network.ServerEvents.PLAYER_LEFT_LOBBY:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_LEFT_LOBBY, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.AVAIL_TABLE:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AVAIL_TABLE, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.START_TIMER:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_TIMER, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.GET_CHIPDATA:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.GET_CHIPDATA, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.ONLINE_LEADERBOARD:

                        break;
                    case Network.ServerEvents.LEVELS_LEADERBOARD:

                        break;
                    case Network.ServerEvents.NOT_YOUR_TURN:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.NOT_YOUR_TURN, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.ON_GETTING_PONG:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_GETTING_PONG, data: { _content: _msg.data } });
                        break;
                    case Network.ServerEvents.START_BATTLE_MODE:
                        this.startBattleMode(_msg.data);
                        break;
                    case Network.ServerEvents.LOBBY_TIMEOUT:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.LOBBY_TIMEOUT, data: {} });
                        break;
                    case Network.ServerEvents.CREATED_FRIENDS_LOBBY:

                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATED_FRIENDS_LOBBY, data: _msg.data });
                        break;
                    case Network.ServerEvents.NEW_PLAYER_JOINED_FRIENDS:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.NEW_PLAYER_JOINED_FRIENDS, data: _msg.data });
                        break;
                    case Network.ServerEvents.OLD_PLAYER_JOINED_FRIENDS:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.OLD_PLAYER_JOINED_FRIENDS, data: _msg.data });
                        break;
                    case Network.ServerEvents.START_FRIENDS_GAME:
                        this.startFriendsGame(_msg.data);
                        break;
                    case Network.ServerEvents.NO_ROOM_AVAILABLE:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.NO_ROOM_AVAILABLE, data: _msg.data });
                        break;
                    case Network.ServerEvents.DUPLICATE_JOIN:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.DUPLICATE_JOIN, data: {} });
                        break;
                    case Network.ServerEvents.RECONNECT_TO_LOBBY:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RECONNECT_TO_LOBBY, data: {} });
                        break;
                    case Network.ServerEvents.NO_MATCH_RANDOM_MODE:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.NO_MATCH_RANDOM_MODE, data: {} });
                        break;
                    case Network.ServerEvents.MATCH_FOUND_RANDOM_MODE:
                        this.onRandomMatchFound(_msg.data);
                        break;
                    case Network.ServerEvents.DICE_SKIPPED:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.DICE_SKIPPED, data: _msg.data });
                        break;
                    case Network.ServerEvents.BLITZ_OVER:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.BLITZ_OVER, data: _msg.data });
                        break;
                    case Network.ServerEvents.BLITZ_POINTS_UPDATE:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.BLITZ_POINTS_UPDATE, data: _msg.data });
                        break;
                    case Network.ServerEvents.BLITZ_TIMER_TICK:
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.BLITZ_TIMER_TICK, data: _msg.data });
                        break;
                }
            }
        }
    }
    Ludo_Wild.ClientOnline = ClientOnline;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class GameServer {
        constructor(_isonline = false) {
            this.receiverList = [];
            this.currentPlayer = 0;
            this.gameObjects = null;
            this.canMoveToken = false;
            this.tokenMoved = false;
            this.tokenKilled = false;
            this.winList = [];
            this.quitList = [];
            this.isAI = false;
            this.isGameOver = false;
            this.testMode = true;
            this.isTokenLock = false;
            this.isOnline = false;
            this.turnSkipCount = 0;
            if (_isonline) {
                this.isOnline = _isonline;
                this.setPubSubListeners();
            }
            else {
                this.isOnline = false;
            }
            if (Ludo_Wild.Main.IS_FAKE_RANDOM) {
                this.setListenerForDiceFakeTimeout();
                this.turnSkipCount = 0;
                this.killedData = {};
            }
            let initTokenState = 0;
            if (Ludo_Wild.Config.rule == Ludo_Wild.Rules.BLITZ) {
                this.setListenerForBlitzTimer();
                initTokenState = 1;
            }
            this.gameObjects = {
                color: [true, true, true, true],
                nextTurn: 0,
                totalPeer: 0,
                peer: 0,
                playerData: [
                    { active: true, tokenActive: false, diceActive: true, color: 0, dice: 0, id: 0, tokenState: [initTokenState, initTokenState, initTokenState, initTokenState], sixes: 0, points: 0 },
                    { active: false, tokenActive: false, diceActive: false, color: 0, dice: 0, id: -1, tokenState: [initTokenState, initTokenState, initTokenState, initTokenState], sixes: 0, points: 0 },
                    { active: false, tokenActive: false, diceActive: false, color: 0, dice: 0, id: -1, tokenState: [initTokenState, initTokenState, initTokenState, initTokenState], sixes: 0, points: 0 },
                    { active: false, tokenActive: false, diceActive: false, color: 0, dice: 0, id: -1, tokenState: [initTokenState, initTokenState, initTokenState, initTokenState], sixes: 0, points: 0 }
                ],
            };

            window.gameObj = this.gameObjects;
        }
        addXender(_xender) {
            this.receiverList.push(_xender);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        send(_msg) {
            this.receiverList[0].onReceive(_msg);
        }
        setGameData(_totalPlayers, _playergameDat) {
            this.gameObjects["totalPeer"] = _totalPlayers;
            for (let i = 0; i < _playergameDat.length; i++) {
                this.gameObjects["playerData"][i].active = _playergameDat[i].active;
                this.gameObjects["playerData"][i].tokenActive = _playergameDat[i].tokenActive;
                this.gameObjects["playerData"][i].diceActive = _playergameDat[i].diceActive;
                this.gameObjects["playerData"][i].color = _playergameDat[i].color;
                this.gameObjects["playerData"][i].dice = _playergameDat[i].dice;
                this.gameObjects["playerData"][i].id = _playergameDat[i].id;
                this.gameObjects["playerData"][i].tokenState = _playergameDat[i].tokenState;
                this.gameObjects["playerData"][i].sixes = _playergameDat[i].sixes;
                this.gameObjects["playerData"][i].points = _playergameDat[i].points;
            }
            ;
        }
        ;
        deactivateTokens(pid) {
            this.gameObjects["playerData"][pid].tokenActive = false;
        }
        setListenerForDiceFakeTimeout() {
            radio("diceTimeoutFake").subscribe(this.onDiceTimeoutFake.bind(this), this);
        }
        ;
        setListenerForBlitzTimer() {
            radio("blitzTimerEnd").subscribe(this.onBlitzTimerEnd.bind(this), this);
        }
        ;
        onDiceTimeoutFake() {
            ++this.turnSkipCount;
            let maxturn = 2;
            if (Ludo_Wild.BattleModeState.doesBattleHasBots)
                maxturn = 4;
            if (this.turnSkipCount > maxturn) {
                this.checkQuit(0, "turn_skip");
            }

            if (this.gameObjects["playerData"][0].tokenActive) {
                if (Ludo_Wild.Config.rule !== Ludo_Wild.Rules.BLITZ) {
                    this.AITokenSelection(0, this.gameObjects["playerData"][0].dice);
                }
                else {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: 0, force: true } });
                    this.manageNextTurn(0, true);
                }
            }
            else {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: 0, force: true } });

                this.manageNextTurn(0, true);
            }
        }
        ;
        syncGameState(_gameState) {
            for (let i = 0; i < 4; i++) {
                this.gameObjects["playerData"][i].active = _gameState[i].active;
                this.gameObjects["playerData"][i].tokenActive = _gameState[i].tokenActive;
                this.gameObjects["playerData"][i].diceActive = _gameState[i].diceActive;
                this.gameObjects["playerData"][i].color = _gameState[i].color;
                this.gameObjects["playerData"][i].dice = _gameState[i].dice;
                this.gameObjects["playerData"][i].id = _gameState[i].id;
                this.gameObjects["playerData"][i].tokenState = _gameState[i].tokenState;
                this.gameObjects["playerData"][i].sixes = _gameState[i].sixes;
                this.gameObjects["playerData"][i].points = _gameState[i].points;
            }

        }
        ;
        setPubSubListeners() {
            radio('onRequestTokenMovement').subscribe(this.onRequestTokenMovement.bind(this), this);
            radio('onTokenReached').subscribe(this.onTokenReached.bind(this), this);
            radio('moveOtherToken').subscribe(this.updateOtherPlayerTokenMovement.bind(this), this);
            radio('updateOnTokenKill').subscribe(this.updateOnTokenKill.bind(this), this);
            radio('diceSimulation').subscribe(this.diceSimulation.bind(this), this);
            radio('onTokenReachedClient').subscribe(this.onTokenReachedClient.bind(this), this);
            radio('resetOnWinOrLose').subscribe(this.resetOnWinOrLose.bind(this), this);
            radio('syncGameState').subscribe(this.syncGameState.bind(this), this);
        }
        ;
        deletePubSubListeners() {
            try {
                if (radio.$.channels['onRequestTokenMovement'].length > 0) {
                    radio.$.channels['onRequestTokenMovement'].pop();
                }
                if (radio.$.channels['onTokenReached'].length > 0) {
                    radio.$.channels['onTokenReached'].pop();
                }
                if (radio.$.channels['moveOtherToken'].length > 0) {
                    radio.$.channels['moveOtherToken'].pop();
                }
                if (radio.$.channels['updateOnTokenKill'].length > 0) {
                    radio.$.channels['updateOnTokenKill'].pop();
                }
                if (radio.$.channels['diceSimulation'].length > 0) {
                    radio.$.channels['diceSimulation'].pop();
                }
                if (radio.$.channels['onTokenReachedClient'].length > 0) {
                    radio.$.channels['onTokenReachedClient'].pop();
                }
                radio.$.channels['resetOnWinOrLose'] = [];
                radio.$.channels['syncGameState'] = [];
            }
            catch (e) {
                console.log(e);
            }
        }
        ;
        createMatch(data) {
            this.gameObjects['totalPeer'] = data.peers;
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_MATCH_SUCCESS, data: { peers: this.gameObjects['totalPeer'] } });
        }
        onReceive(_msg) {
            if (_msg.eventType === Engine.EventType.SERVER_EVENTS)
                return;
            switch (_msg.event) {
                case Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST:
                    this.createMatch(_msg.data);
                    break;
                case Ludo_Wild.GameEvents.ON_TOKEN_SELECT:
                    this.onTokenSelect(_msg.data);
                    break;
                case Ludo_Wild.GameEvents.ON_TOKEN_DESELECT:
                    this.onTokenDeselect(_msg.data);
                    break;
                case Ludo_Wild.GameEvents.ON_REQUEST_DICE:
                    this.onRequestDice(_msg.data, false);
                    break;
                case Ludo_Wild.GameEvents.ON_REQUEST_DICE_AI:
                    this.onRequestDice(_msg.data, true);
                    break;
                case Ludo_Wild.GameEvents.START_GAME_OFFLINE:
                    break;
                case Ludo_Wild.GameEvents.MOVE_TOKEN_REQUEST:
                    this.onRequestTokenMovement(_msg.data);
                    break;
                case Ludo_Wild.GameEvents.TOKEN_REACHED:
                    this.onTokenReached(_msg.data);
                    break;
                case Ludo_Wild.GameEvents.PLAYER_QUIT:
                    this.onPlayerQuit(_msg.data);
                    break;
                default:
                    break;
            }
        }

        onTokenReachedClient(data) {
            let pid = data._content.pid;
            let tid = data._content.tid;

            if ((this.tokenKilled || this.gameObjects["playerData"][pid].dice == 6 || this.gameObjects["playerData"][pid].tokenState[tid] == 57) && !this.allTokensHome(pid)) {
            }
            else {
                radio('turnOverClient').broadcast({ _content: { id: pid } });
            }
        }
        ;
        onTokenReached(data) {
            //alert('reached');
            //alert(this.gameObjects["playerData"][data._content.pid].points);

            //updateScoreWithTid(data._content.pid, data._content.tid, this.gameObjects["playerData"][pid].dice)

            let pid = data._content.pid;
            let tid = data._content.tid;
            this.calculatePoints(pid, this.gameObjects["playerData"][pid].dice, "token_move");
            if (this.tokenKilled && Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ && Ludo_Wild.Main.IS_FAKE_RANDOM) {

                this.calculateKillPoints(this.killedData.cpid, this.killedData.ctid, this.killedData.kpid, this.killedData.ktid, this.killedData.state);
            }
            if (this.gameObjects["playerData"][pid].tokenState[tid] === 57) {
                this.calculatePoints(pid, 1, "token_move");
                this.calculatePoints(pid, 100, "token_home");
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_HOME, data: { id: pid, tid: tid } });
            }
            this.checkWin(pid);
            this.checkGameOver();
            if ((this.tokenKilled || this.gameObjects["playerData"][pid].dice == 6 || this.gameObjects["playerData"][pid].tokenState[tid] == 57) && !this.allTokensHome(pid)) {
                //alert('ok6');
                this.gameObjects["playerData"][pid].diceActive = true;
                this.gameObjects["playerData"][(pid + 1) % this.gameObjects['totalPeer']].diceActive = false;
                if (this.gameObjects["playerData"][pid].dice === 6 && this.isAI) {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_HOME, data: { id: pid } });
                }
                else if (this.gameObjects["playerData"][pid].tokenState[tid] == 57 && this.isAI) {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_HOME, data: { id: pid } });
                }
                else if (this.tokenKilled && this.isAI) {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.AI_KILLED, data: { id: pid } });
                }
            }
            else {
                //alert('ok');
                //this.gameObjects["playerData"][pid].diceActive=true;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid } });
                this.manageNextTurn(pid);
            }
        }
        onTokenDeselect(data) {
            for (let i = 0; i < 4; i++) {
                if (this.gameObjects["playerData"][i].color === data.color.color) {
                    this.gameObjects["peer"] -= 1;
                    this.gameObjects["playerData"][i].color = 0;
                    this.gameObjects["color"][data.color.color - 1] = true;
                    let colorArray;
                    colorArray = this.gameObjects["playerData"].map(element => element.color);
                    if (this.gameObjects["peer"] === this.gameObjects["totalPeer"]) {
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_GAME_OFFLINE, data: { color: colorArray, totalPeer: this.gameObjects["totalPeer"] } });
                    }
                    else {
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CHOOSE_TOKEN, data: { tokens: this.gameObjects["color"] } });
                    }
                    return;
                }
            }
        }
        ;
        onTokenSelect(data) {
            if (!this.isTokenAvailable(data.color.color)) {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TOKEN_UNAVAILABLE, data: {} });
                return;
            }

            this.gameObjects["playerData"][this.gameObjects["peer"]].color = data.color.color + 1;
            this.gameObjects["playerData"][this.gameObjects["peer"]].id = this.gameObjects["peer"];
            this.gameObjects["color"][data.color.color] = false;
            this.gameObjects["peer"] += 1;
            let colorArray;
            colorArray = this.gameObjects["playerData"].map(element => element.color);
            console.log("selected");
            if (this.gameObjects["peer"] === this.gameObjects["totalPeer"]) {
                integration.showInterstitial();
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.START_GAME_OFFLINE, data: { color: colorArray, totalPeer: this.gameObjects["totalPeer"] } });
                console.log("selected process!");
            }
            else {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CHOOSE_TOKEN, data: { tokens: this.gameObjects["color"] } });
            }
        }
        isTokenAvailable(_colorIndex) {
            for (let i = 0; i < 4; i++) {
                if (this.gameObjects["color"][_colorIndex] === false) {
                    return false;
                }
            }
            return true;
        }
        ;
        onRequestTokenMovement(_data) {
            //this.isTokenLock=false;
            //alert(_data.data.pid);

            if (this.isTokenLock) {
                return;
            }
            let id = _data.data.pid;
            let tid = _data.data.tid;
            let steps = 1;
            let initialised = true;
            this.gameObjects["playerData"][id].tokenActive = true;
            //alert(JSON.stringify(this.gameObjects["playerData"][id]));

            //this.gameObjects["playerData"][id].diceActive=true;

            //this.gameObjects["playerData"][id].dice=0;
            //this.gameObjects["playerData"][id].diceActive=false;


            //alert(this.gameObjects["playerData"][id].tokenActive);
            if (this.gameObjects["playerData"][id].tokenActive) {

                steps = this.gameObjects["playerData"][id].dice;

                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    //alert('ok');
                    if (this.gameObjects["playerData"][id].tokenState[tid] + this.gameObjects["playerData"][id].dice > 57) {
                        steps = 0;
                    }
                }
                else {
                    //alert('llll');
                    //alert(this.gameObjects["playerData"][id].tokenState[tid]);
                    //alert('state '+this.gameObjects["playerData"][id].tokenState[tid]);
                    //alert('dic '+this.gameObjects["playerData"][id].dice);

                    if (this.gameObjects["playerData"][id].tokenState[tid] == 0) {
                        //alert('kkkkkkkkkk');
                        this.gameObjects["playerData"][id].dice = 6;
                        if (this.gameObjects["playerData"][id].dice == 6) {
                            steps = 1;
                            initialised = true;
                            //diceStatus=false
                        }
                        else {
                            //alert('nnnnn');
                            steps = 0;
                            //steps = 1;
                            //initialised = true;
                        }
                    }
                    else {
                        //alert(this.gameObjects["playerData"][id].dice);
                        //this.gameObjects["playerData"][id].dice=0;


                        if (this.gameObjects["playerData"][id].tokenState[tid] + this.gameObjects["playerData"][id].dice > 57) {
                            steps = 0;
                        }
                    }
                }
                if (steps != 0) {
                    //alert(this.gameObjects["playerData"][id].tokenState[tid]);
                    this.gameObjects["playerData"][id].tokenState[tid] += steps;
                    this.tokenMoved = true;
                }
            }
            if (initialised) {
                steps = 6;
                initialised = false;
            }
            if (this.tokenMoved) {
                //alert('ok');
                //this.gameObjects["playerData"][id].dice=0;
                this.onTokenMovement(steps, id, tid);

                //alert(scoreTexts);
                //alert(scoreTexts);



                //alert(this.scoreTexts);
                /* setTimeout(() => {
                                 if(scoreTexts != undefined){
                                                  //alert(id);

                                                  //scoreTexts[id].setText("Score: " + players[id].totalScore);

                                                  }

                                 }, 1000)

                */

                //const playerScore = this.getPlayerScore(playerIndex); // however you calculate score


                this.gameObjects["playerData"][id].dice = 0;
                this.gameObjects["playerData"][id].diceActive = true;
            } else {
                this.gameObjects["playerData"][id].dice = 0;
                this.gameObjects["playerData"][id].diceActive = true;
            }

        }



        onTokenMovement(steps, pid, tid) {
            //alert(steps);
            //alert(pid);
            //alert(this.tokenMoved);


            let kpid = -1;
            let ktid = -1;
            let ck = this.checkKill(pid, tid);
            kpid = ck[0];
            ktid = ck[1];
            this.gameObjects["playerData"][pid].tokenActive = false;
            this.checkPileUp(pid, tid);
            if (!this.isOnline) {
                //alert(steps);
                //alert(JSON.stringify(ck));
                //alert(this.gameObjects["playerData"][pid].diceActive);
                //this.gameObjects["playerData"][pid].diceActive = true;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TOKEN_MOVED, data: { id: pid, tid: tid, kpid: kpid, ktid: ktid, steps: this.gameObjects["playerData"][pid].dice } });
            }
            else {
                //alert(JSON.stringify(ck));
                let data = { _content: { id: pid, tid: tid, kpid: kpid, ktid: ktid, steps: this.gameObjects["playerData"][pid].dice } };

                radio('moveTokenGM').broadcast(data);
            }
            this.tokenMoved = false;
            this.isTokenLock = false;




        }
        onRequestDice(data, isAI) {
            if (this.isGameOver) {
                return;
            }
            this.isAI = isAI;
            let id = data.data.id;
            let tp = this.gameObjects['totalPeer'];
            //alert(this.gameObjects["playerData"][id].diceActive);
            if (!this.checkTurn(id)) {

                // return;
            }
            if (!this.gameObjects["playerData"][id].diceActive) {

                return;
            }
            let rndVal = Math.random();
            let dicenum = 0;
            if (this.tokensInsidePocket(id) == Ludo_Wild.Config.dynTokenCount && rndVal < 0.3) {
                dicenum = 6;
            }
            else {
                dicenum = Math.floor(Math.random() * 6) + 1;
            }
            //alert(dicenum);
            if (dicenum === 6) {
                if (this.gameObjects["playerData"][id].sixes === 2) {
                    this.gameObjects["playerData"][id].sixes = 0;
                    dicenum = Math.floor(Math.random() * 5) + 1;
                }
                else {
                    this.gameObjects["playerData"][id].sixes += 1;
                }
            }

            this.gameObjects["playerData"][id].dice = dicenum;
            this.gameObjects["playerData"][id].tokenActive = true;
            this.gameObjects["playerData"][id].diceActive = false;
            let nextPId = this.getNextPlayerId(id);
            this.gameObjects["playerData"][nextPId].diceActive = true;
            this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.RETURN_DICE, data: { id: id, dice: dicenum } });
            if (isAI) {
                this.AITokenSelection(id, dicenum);
            }
            else {
                this.checkTokenMovementPossibility(id, dicenum);
                this.checkAutoTokenMovement(id, dicenum);
            }
        }
        diceSimulation(data, isAI = false) {
            if (this.isGameOver) {
                return;
            }
            this.isAI = isAI;
            let id = data.id;
            let tp = this.gameObjects['totalPeer'];
            let dicenum = data.diceVal;
            this.gameObjects["playerData"][id].dice = dicenum;
            this.gameObjects["playerData"][id].tokenActive = true;
            this.gameObjects["playerData"][id].diceActive = false;
            let nextPId = this.getNextPlayerId(id);
            this.gameObjects["playerData"][nextPId].diceActive = true;

            if (isAI) {
                this.AITokenSelection(id, dicenum);
            }
            else {
                this.checkTokenMovementPossibility(id, dicenum);
                this.checkAutoTokenMovement(id, dicenum);
            }
        }
        ;
        checkTokenMovementPossibility(pid, dice) {
            this.canMoveToken = false;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    if ((this.gameObjects["playerData"][pid].tokenState[i] != 57 &&
                        this.gameObjects["playerData"][pid].tokenState[i] + dice <= 57)) {
                        this.canMoveToken = true;
                        break;
                    }
                }
                else {
                    if ((this.gameObjects["playerData"][pid].tokenState[i] != 0 &&
                        this.gameObjects["playerData"][pid].tokenState[i] != 57 &&
                        this.gameObjects["playerData"][pid].tokenState[i] + dice <= 57) || (dice == 6 && this.gameObjects["playerData"][pid].tokenState[i] + dice <= 57)) {
                        this.canMoveToken = true;
                        break;
                    }
                }
            }
            if (!this.canMoveToken) {
                if (dice == 6) {
                    if (!this.isOnline) {
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid, force: true } });
                    }
                    else {
                    }
                    this.manageNextTurn(pid, true);
                }
                else {
                    if (!this.isOnline) {
                        this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid } });
                    }
                    else {
                    }
                    this.manageNextTurn(pid);
                }
            }
        }
        checkAutoTokenMovement(pid, diceVal) {
            let tokens = [];
            for (let t = 0; t < Ludo_Wild.Config.dynTokenCount; t++) {
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    if (this.gameObjects["playerData"][pid].tokenState[t] < 57 &&
                        this.gameObjects["playerData"][pid].tokenState[t] + diceVal <= 57) {
                        tokens.push(t);
                    }
                }
                else {
                    if (this.gameObjects["playerData"][pid].tokenState[t] > 0 &&
                        this.gameObjects["playerData"][pid].tokenState[t] < 57 &&
                        this.gameObjects["playerData"][pid].tokenState[t] + diceVal <= 57) {
                        tokens.push(t);
                    }
                }
            }
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                if (tokens.length == 1) {
                    this.isTokenLock = true;
                    this.automaticTokenMovement(diceVal, pid, tokens[0]);
                }
            }
            else {
                if ((this.tokensInsidePocket(pid) == 0 && tokens.length == 1) ||
                    (this.tokensInsidePocket(pid) != 0 && tokens.length == 1 && diceVal != 6)) {
                    this.isTokenLock = true;
                    this.automaticTokenMovement(diceVal, pid, tokens[0]);
                }
            }
        }
        automaticTokenMovement(diceVal, pid, tid) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.gameObjects["playerData"][pid].tokenState[tid] += diceVal;

            }
            else {
                if (this.gameObjects["playerData"][pid].tokenState[tid] == 0) {
                    this.gameObjects["playerData"][pid].tokenState[tid] += 1;
                }
                else {
                    this.gameObjects["playerData"][pid].tokenState[tid] += diceVal;
                }
            }
            setTimeout(() => {
                this.onTokenMovement(diceVal, pid, tid);
            }, 1000);
        }
        updateOtherPlayerTokenMovement(data) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.gameObjects["playerData"][data.pid].tokenState[data.tid] += data.diceVal;
            }
            else {
                if (this.gameObjects["playerData"][data.pid].tokenState[data.tid] == 0) {
                    this.gameObjects["playerData"][data.pid].tokenState[data.tid] += 1;
                }
                else {
                    this.gameObjects["playerData"][data.pid].tokenState[data.tid] += data.diceVal;
                }
            }

            if (data.isSelf === true) {
                this.checkKill(data.pid, data.tid);
            }
        }
        ;
        updateOnTokenKill(data) {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.gameObjects["playerData"][data.pid].tokenState[data.tid] = 1;
            }
            else {
                this.gameObjects["playerData"][data.pid].tokenState[data.tid] = 0;
            }
        }
        ;
        resetOnWinOrLose(data) {

            this.gameObjects["playerData"][data.pid].id = -1;
            this.gameObjects["playerData"][data.pid].dice = 0;
            this.gameObjects["playerData"][data.pid].diceActive = false;
            this.gameObjects["playerData"][data.pid].active = false;
            if (data.isQuit) {
                for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                    if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                        this.gameObjects["playerData"][data.pid].tokenState[i] = 1;
                    }
                    else {
                        this.gameObjects["playerData"][data.pid].tokenState[i] = 0;
                    }
                }
            }
        }
        ;
        tokensOutsidePocket(id) {
            let tokens = 0;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.gameObjects["playerData"][id].tokenState[i] != 0) {
                    tokens++;
                }
            }
            return tokens;
        }
        tokensInsidePocket(id) {
            let tokens = 0;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.gameObjects["playerData"][id].tokenState[i] == 0) {
                    tokens++;
                }
            }
            return tokens;
        }
        allTokensHome(pid) {
            let tokens = 0;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.gameObjects["playerData"][pid].tokenState[i] == 57) {
                    tokens++;
                }
            }
            return tokens === Ludo_Wild.Config.dynTokenCount;
        }
        movableTokensIds(pid) {
            let tokens = [];
            let diceVal = this.gameObjects["playerData"][pid].dice;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.gameObjects["playerData"][pid].tokenState[i] != 0 &&
                    this.gameObjects["playerData"][pid].tokenState[i] != 57 &&
                    this.gameObjects["playerData"][pid].tokenState[i] + diceVal <= 57) {
                    tokens.push(i);
                }
            }
            return tokens;
        }
        checkTurn(_id) {
            return this.gameObjects["playerData"][_id].active;
        }
        getNextPlayerId(cId) {
            let nId = -1;
            let tp = this.gameObjects["totalPeer"];
            for (let i = 1; i < tp; i++) {
                if (this.gameObjects["playerData"][(cId + i) % tp].id != -1) {
                    nId = (cId + i) % tp;
                    break;
                }
            }
            return nId;
        }
        manageNextTurn(_id, force = false) {
            if ((this.gameObjects["playerData"][_id].dice !== 6 && !this.tokenKilled) || force === true) {
                this.gameObjects["playerData"][_id].active = false;
                this.currentPlayer = _id;

                for (let i = 0; i < this.gameObjects["totalPeer"] - 1; i++) {
                    this.currentPlayer = ++this.currentPlayer % this.gameObjects["totalPeer"];
                    if (this.gameObjects["playerData"][this.currentPlayer] !== undefined &&
                        this.gameObjects["playerData"][this.currentPlayer].id !== -1) {
                        break;
                    }
                }

                this.gameObjects["playerData"][this.currentPlayer].active = true;
                this.gameObjects["playerData"][this.currentPlayer].diceActive = true;
            }
        }
        powerPositions(pos) {
            if (pos == 1 || pos == 9 || pos == 14 || pos == 22 || pos == 27 || pos == 35 || pos == 40 || pos == 48 || pos >= 52) {
                return true;
            }
            return false;
        }
        onPlayerQuit(data) {

            this.checkQuit(data._content.id, "player_left");
        }
        checkQuit(pid, reason = "noop") {
            this.gameObjects["playerData"][pid].id = -1;
            let place;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                this.gameObjects["playerData"][pid].tokenState[i] = 0;
            }
            let activeCount = this.activePlayersCount();

            if (activeCount.count < 2) {
                this.isGameOver = true;
                this.winList.push(activeCount.pid);
                place = this.winList.length;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_WON, data: { pid: activeCount.pid, place: place, isGameOver: true, reason } });
                return;
            }
            else {
                this.quitList.push(pid);
                place = (this.gameObjects["totalPeer"] - this.quitList.length) + 1;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_PLAYER_QUIT, data: { pid: pid, place: place, reason: "player_left" } });
                if (this.gameObjects["playerData"][pid].diceActive === false) {
                    this.gameObjects["playerData"][pid].dice = 0;
                    this.gameObjects["playerData"][this.getNextPlayerId(pid)].diceActive = true;
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid } });
                    this.manageNextTurn(pid);
                }
            }
            if (this.gameObjects["playerData"][pid].diceActive === true) {
                this.gameObjects["playerData"][pid].diceActive = false;
                this.gameObjects["playerData"][pid].dice = 0;
                this.tokenKilled = false;
                this.gameObjects["playerData"][this.getNextPlayerId(pid)].diceActive = true;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid } });
                this.manageNextTurn(pid);
            }
        }
        activePlayersCount() {
            let count = 0;
            let lastPlayer;
            for (let i = 0; i < 4; i++) {
                if (this.gameObjects["playerData"][i].id !== -1) {
                    ++count;
                    lastPlayer = i;
                }
            }
            return { count: count, pid: lastPlayer };
        }
        checkWin(pid) {
            let isGameover = false;
            let tokens = 0;
            for (let i = 0; i < Ludo_Wild.Config.dynTokenCount; i++) {
                if (this.gameObjects["playerData"][pid].tokenState[i] === 57) {
                    tokens++;
                }
            }
            if (tokens === Ludo_Wild.Config.dynTokenCount) {
                let t_pid = this.gameObjects["playerData"][pid].id;
                let wincol = this.gameObjects["playerData"][pid].color;
                this.gameObjects["playerData"][pid].id = -1;
                if (this.activePlayersCount().count < 2) {
                    isGameover = true;
                }
                this.winList.push(pid);
                let place = this.winList.length;
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PLAYER_WON, data: { pid: t_pid, place: place, isGameOver: isGameover, reason: "reached_home" } });
            }
        }
        checkGameOver() {
            let tp = this.gameObjects["totalPeer"];
            let activePlayers = this.activePlayersCount();
            if (activePlayers.count < 2) {
                this.isGameOver = true;
                for (let i = 0; i < tp; i++) {
                    this.gameObjects["playerData"][i].diceActive = false;

                }
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.GAME_OVER, data: {} });
            }
        }
        checkPileUp(pid, tid) {
            let kpid = -1;
            let ktid = -1;
            let cpid = pid;
            let ctid = tid;
            let thatQuad = 0;
            let thisQuad = pid;
            let tokenPileUp = 0;
            let pileUpData = [];
            let tp = this.gameObjects["totalPeer"];
            if (tp == 2 && cpid == 1) {
                thisQuad = 2;
            }
            let currentTS = (this.gameObjects["playerData"][cpid].tokenState[ctid] + 13 * thisQuad) % 52;

            for (let p = 0; p < tp; p++) {
                for (let t = 0; t < Ludo_Wild.Config.dynTokenCount; t++) {

                    if (p == 0 && t == ctid) {
                    }
                    else {
                        thatQuad = (cpid + p) % tp;
                        if (tp == 2 && thatQuad == 1) {
                            thatQuad = 2;
                        }
                        let otherTS = (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] + 13 * thatQuad) % 52;
                        if (currentTS == otherTS && this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] != 0
                            && this.gameObjects["playerData"][(cpid + p) % tp].id !== -1) {
                            if ((p != 0 && (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] < 52 && this.gameObjects["playerData"][cpid].tokenState[ctid] < 52)) || (p == 0 && this.gameObjects["playerData"][cpid].tokenState[ctid] == this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t])) {
                                kpid = (cpid + p) % tp;
                                ktid = t;
                                tokenPileUp++;
                                pileUpData.push({ pid: (cpid + p) % tp, tid: t });
                            }
                        }
                    }
                }
            }
            pileUpData.push({ pid: cpid, tid: ctid });
            if (pileUpData.length == 1) {
                pileUpData = [];
            }

            if (pileUpData.length > 0) {
                if (!this.isOnline) {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.PILE_UP, data: { pileUpData } });
                }
                else {
                    let data = { _content: pileUpData };
                    radio("pileUpGM").broadcast(data);
                }
            }
        }
        checkKill(pid, tid) {
            let kpid = -1;
            let ktid = -1;
            let cpid = pid;
            let ctid = tid;
            let thatQuad = 0;
            let thisQuad = pid;
            let tokenPileUp = 0;
            let tp = this.gameObjects["totalPeer"];
            if (tp == 2 && cpid == 1) {
                thisQuad = 2;
            }
            let currentTS = (this.gameObjects["playerData"][cpid].tokenState[ctid] + 13 * thisQuad) % 52;
            for (let p = 1; p < tp; p++) {
                for (let t = 0; t < 4; t++) {
                    thatQuad = (cpid + p) % tp;
                    if (tp == 2 && thatQuad == 1) {
                        thatQuad = 2;
                    }
                    let killedTS = (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] + 13 * thatQuad) % 52;
                    if (currentTS == killedTS &&
                        !this.powerPositions(currentTS) &&
                        this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] != 0 &&
                        this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] < 52 &&
                        this.gameObjects["playerData"][cpid].tokenState[ctid] < 52) {
                        kpid = (cpid + p) % tp;
                        ktid = t;
                        tokenPileUp++;
                        if (kpid != -1 && ktid != -1) {

                        }
                    }
                }
            }
            for (let t = 1; t < 4; t++) {
                if (this.gameObjects["playerData"][cpid].tokenState[ctid] == this.gameObjects["playerData"][cpid].tokenState[(ctid + t) % 4]) {
                    tokenPileUp++;
                }
            }

            if (tokenPileUp > 1) {
                //alert(tokenPileUp);
                tokenPileUp = 0;
                return [-1, -1, 0];
            }
            else {
                let killedTokenState = 0;
                if (kpid != -1 && ktid != -1) {
                    this.tokenKilled = true;

                    // Store the killed token's current state
                    killedTokenState = this.gameObjects["playerData"][kpid].tokenState[ktid];
                    //alert(killedTokenState);
                    // Reset token to start position (base)
                    this.gameObjects["playerData"][kpid].tokenState[ktid] = 0; // always 0 for base

                    // Deactivate killed token to prevent auto movement
                    if (this.gameObjects["playerData"][kpid].tokenActiveList) {
                        this.gameObjects["playerData"][kpid].tokenActiveList[ktid] = false;
                    } else {
                        this.gameObjects["playerData"][kpid].tokenActive = false;
                    }

                    // Save kill data for reference or animation
                    this.killedData = { cpid, ctid, kpid, ktid, state: killedTokenState };


                    /* this.tokenKilled = true;

                     this.gameObjects["playerData"][cpid].tokenActive = false;
                     killedTokenState = this.gameObjects["playerData"][kpid].tokenState[ktid];
                     this.killedData = { cpid, ctid, kpid, ktid, state: killedTokenState };
                     if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                         //alert('okll');
                         this.gameObjects["playerData"][kpid].tokenState[ktid] = 1;
                     }
                     else {
                         //alert('ok');

                         this.gameObjects["playerData"][kpid].tokenState[ktid] = 0;
                     }
                     */
                    //updateScore(kpid, 0, -5, 0);

                    const timerSet = setTimeout(() => {
                        //alert(kpid);
                        //alert(cpid);
                        updateScore(kpid, 0, 0, 0, ktid);
                        this.onRequestTokenMovement({ data: { pid: kpid, tid: ktid } });
                        //updateScore(kpid, 0, -5, 0);
                        // updateScore(cpid, 0, 5, 0);

                        clearTimeout(timerSet);
                    }, 3000);



                }
                else {
                    this.tokenKilled = false;
                }


                return [kpid, ktid, killedTokenState];

            }
        }
        AITokenSelection(pid, dice) {
            let distancePoints;
            let killPoints = 6000;
            let pileUpPoints = 1000;
            let safeSpotPoints = 1500;
            let openingPoints = 8000;
            let distanceWeight = 100;
            let killWeight = 1;
            let pileUpWeight = 1;
            let safeSpotWeight = 1;
            let openingWeight = 1;
            let reachingHomeWeight = 1000;
            let tokenPoints = [-1, -1, -1, -1];
            let tokenId = -1;
            for (let t = 0; t < Ludo_Wild.Config.dynTokenCount; t++) {

                distancePoints = this.gameObjects["playerData"][pid].tokenState[t] + dice;

                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    if (this.gameObjects["playerData"][pid].tokenState[t] != 57 &&
                        this.gameObjects["playerData"][pid].tokenState[t] + dice < 57) {
                        tokenPoints[t] += distanceWeight * (distancePoints);
                    }
                    else if (this.gameObjects["playerData"][pid].tokenState[t] + dice == 57) {
                        tokenPoints[t] += reachingHomeWeight * (distancePoints);
                    }
                }
                else {
                    if (this.gameObjects["playerData"][pid].tokenState[t] == 0 && dice == 6) {
                        tokenPoints[t] += openingWeight * openingPoints;
                    }
                    if (this.gameObjects["playerData"][pid].tokenState[t] != 0 &&
                        this.gameObjects["playerData"][pid].tokenState[t] != 57 &&
                        this.gameObjects["playerData"][pid].tokenState[t] + dice < 57) {
                        tokenPoints[t] += distanceWeight * (distancePoints);
                    }
                    else if (this.gameObjects["playerData"][pid].tokenState[t] + dice == 57) {
                        tokenPoints[t] += reachingHomeWeight * (distancePoints);
                    }
                }
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    if (this.gameObjects["playerData"][pid].tokenState[t] < 52) {

                        if (this.canKill(pid, t, dice)) {
                            tokenPoints[t] += killPoints * killWeight;
                        }
                        if (this.canPileUp(pid, t, dice)) {
                            tokenPoints[t] += pileUpPoints * pileUpWeight;
                        }

                        if (this.canReachSafeSpot(pid, t, dice)) {
                            tokenPoints[t] += safeSpotPoints * safeSpotWeight;
                        }
                        tokenPoints[t] += this.determineProximity(pid, t, dice);
                    }
                }
                else {
                    if (this.gameObjects["playerData"][pid].tokenState[t] != 0 && this.gameObjects["playerData"][pid].tokenState[t] < 52) {
                        console.log(pid, t, this.canKill(pid, t, dice));
                        if (this.canKill(pid, t, dice)) {
                            tokenPoints[t] += killPoints * killWeight;
                        }
                        if (this.canPileUp(pid, t, dice)) {
                            tokenPoints[t] += pileUpPoints * pileUpWeight;
                        }
                        if (this.canReachSafeSpot(pid, t, dice)) {
                            tokenPoints[t] += safeSpotPoints * safeSpotWeight;
                        }
                        tokenPoints[t] += this.determineProximity(pid, t, dice);
                    }
                }
            }
            console.log("TOKEN POINTS", tokenPoints);
            let max = -Infinity;

            for (let i = 0; i < 4; i++) {
                if (tokenPoints[i] > max && tokenPoints[i] != -1) {
                    max = tokenPoints[i];
                }
            }
            tokenId = tokenPoints.indexOf(max);
            if (max != -Infinity) {
                this.automaticTokenMovement(dice, pid, tokenId);
            }
            else {

                if (dice == 6) {

                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid, force: true } });
                    this.manageNextTurn(pid, true);
                }
                else {
                    this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.TURN_OVER, data: { id: pid } });
                    this.manageNextTurn(pid);
                }
            }

        }
        determineProximity(playerIndex, tokenIndex, dice) {
            let tVal = 0;
            let thisQuad = playerIndex;
            let thatQuad = 0;
            let totalPeer = this.gameObjects["totalPeer"];
            if (totalPeer == 2 && playerIndex == 1) {
                thisQuad = 2;
            }
            let postMoveTokenState = (this.gameObjects["playerData"][playerIndex].tokenState[tokenIndex] + dice + 13 * thisQuad) % 52;
            for (let peer = 1; peer < totalPeer; peer++) {
                for (let t = 0; t < 4; t++) {
                    thatQuad = (playerIndex + peer) % totalPeer;
                    if (totalPeer == 2 && thatQuad == 1) {
                        thatQuad = 2;
                    }
                    let opponentTokenState = (this.gameObjects["playerData"][(playerIndex + peer) % totalPeer].tokenState[t] + 13 * thatQuad) % 52;
                    if (this.gameObjects["playerData"][(playerIndex + peer) % totalPeer].tokenState[t] > 0 &&
                        this.gameObjects["playerData"][(playerIndex + peer) % totalPeer].tokenState[t] < 52) {
                        if (opponentTokenState != postMoveTokenState) {
                            if (Math.abs(opponentTokenState - postMoveTokenState) <= 6) {
                                tVal += 2000 / (opponentTokenState - postMoveTokenState);
                            }
                        }
                        else {
                            tVal += 2000;
                        }
                    }
                }
            }
            return tVal * this.gameObjects["playerData"][playerIndex].tokenState[tokenIndex];
        }
        canReachSafeSpot(pid, tid, dice) {
            if (this.powerPositions(this.gameObjects["playerData"][pid].tokenState[tid] + dice)) {
                return true;
            }
            return false;
        }
        canPileUp(pid, tid, dice) {
            let tokenPileUp = 0;
            for (let t = 1; t < 4; t++) {
                if (this.gameObjects["playerData"][pid].tokenState[tid] + dice == this.gameObjects["playerData"][pid].tokenState[(tid + t) % 4]) {
                    tokenPileUp++;
                }
            }
            return tokenPileUp > 1;
        }
        canKill(pid, tid, dice) {
            let kpid = -1;
            let ktid = -1;
            let cpid = pid;
            let ctid = tid;
            let thatQuad = 0;
            let thisQuad = pid;
            let tokenPileUp = 0;
            let tp = this.gameObjects["totalPeer"];

            if (tp == 2 && cpid == 1) {
                thisQuad = 2;
            }
            let currentTS = (this.gameObjects["playerData"][cpid].tokenState[ctid] + dice + 13 * thisQuad) % 52;

            for (let p = 1; p < tp; p++) {
                for (let t = 0; t < 4; t++) {
                    thatQuad = (cpid + p) % tp;
                    if (tp == 2 && thatQuad == 1) {
                        thatQuad = 2;
                    }
                    let killedTS = (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] + 13 * thatQuad) % 52;
                    if (currentTS == killedTS &&
                        !this.powerPositions(currentTS) &&
                        this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] != 0 &&
                        this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] < 52 &&
                        this.gameObjects["playerData"][cpid].tokenState[ctid] + dice < 52) {
                        kpid = (cpid + p) % tp;
                        ktid = t;
                        tokenPileUp++;
                        if (kpid != -1 && ktid != -1) {

                        }
                    }
                }
            }
            if (tokenPileUp > 1) {
                return false;
            }
            else {
                if (kpid != -1 && ktid != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        calculatePoints(pid, pointsAdded, pointType, quadrant = 0) {
            if (this.isGameOver) {
                return;
            }
            this.gameObjects["playerData"][pid].points = Math.max(0, this.gameObjects["playerData"][pid].points + pointsAdded);

            radio("pointsBlitz").broadcast(pid, this.gameObjects["playerData"][pid].points, pointsAdded, quadrant, pointType);
        }
        calculateKillPoints(pid, tid, killedPid, killedTid, killedState) {
            this.calculatePoints(pid, this.getTokenQuadrant(pid, tid) * 15, "token_kill", this.getTokenQuadrant(pid, tid));
            this.calculatePoints(killedPid, this.getTokenQuadrantFromState(killedState) * -10, "token_kill", this.getTokenQuadrantFromState(killedState));
        }
        getTokenQuadrant(pid, tid) {
            let tokenState = this.gameObjects["playerData"][pid].tokenState[tid];
            if (tokenState <= 13) {
                return 1;
            }
            else if (tokenState <= 26) {
                return 2;
            }
            else if (tokenState <= 39) {
                return 3;
            }
            else {
                return 4;
            }
        }
        getTokenQuadrantFromState(killedTokenState) {
            if (killedTokenState <= 13) {
                return 1;
            }
            else if (killedTokenState <= 26) {
                return 2;
            }
            else if (killedTokenState <= 39) {
                return 3;
            }
            else {
                return 4;
            }
        }
        onBlitzTimerEnd() {

            let playerResults = [];
            if (!this.isGameOver) {
                for (let i = 0; i < this.gameObjects["totalPeer"]; i++) {
                    playerResults.push({ id: i, score: this.gameObjects["playerData"][i].points });
                    this.gameObjects["playerData"][i].diceActive = false;
                    this.gameObjects["playerData"][i].id = -1;
                }
                this.isGameOver = true;
                playerResults.sort((a, b) => b.score - a.score);
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.BLITZ_OVER, data: playerResults });
            }
            else {
                console.warn("Game is already over");
            }
        }
        destroy() {
            if (this.isOnline) {
                this.deletePubSubListeners();
            }
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                try {
                    radio.$.channels['blitzTimerEnd'] = [];
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        ;
        checkPileUpBlitz(pid, tid) {
            let kpid = -1;
            let ktid = -1;
            let cpid = pid;
            let ctid = tid;
            let thatQuad = 0;
            let thisQuad = pid;
            let tokenPileUp = 0;
            let pileUpData = [];
            let tp = this.gameObjects["totalPeer"];
            if (tp == 2 && cpid == 1) {
                thisQuad = 2;
            }
            let currentTS = (this.gameObjects["playerData"][cpid].tokenState[ctid] + 13 * thisQuad) % 52;
            for (let p = 0; p < tp; p++) {
                for (let t = 0; t < Ludo_Wild.Config.dynTokenCount; t++) {
                    if (p == 0 && t == ctid) {
                    }
                    else {
                        thatQuad = (cpid + p) % tp;
                        if (tp == 2 && thatQuad == 1) {
                            thatQuad = 2;
                        }
                        let otherTS = (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] + 13 * thatQuad) % 52;
                        if (currentTS == otherTS && this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] != 0
                            && this.gameObjects["playerData"][(cpid + p) % tp].id !== -1) {
                            if ((p != 0 && (this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t] < 52 && this.gameObjects["playerData"][cpid].tokenState[ctid] < 52)) || (p == 0 && this.gameObjects["playerData"][cpid].tokenState[ctid] == this.gameObjects["playerData"][(cpid + p) % tp].tokenState[t])) {
                                kpid = (cpid + p) % tp;
                                ktid = t;
                                tokenPileUp++;
                                pileUpData.push({ pid: (cpid + p) % tp, tid: t });
                            }
                        }
                    }
                }
            }
            pileUpData.push({ pid: cpid, tid: ctid });
            if (pileUpData.length == 1) {
                pileUpData = [];
            }
            if (pileUpData.length > 0) {

                return pileUpData;
            }
            else {
                return undefined;
            }
        }
    }
    Ludo_Wild.GameServer = GameServer;
})(Ludo_Wild || (Ludo_Wild = {}));
var Network;
(function (Network) {
    class Socket {
        constructor() {
            this._receiverList = [];
            this._client = null;
            this._socket = null;
            this.userData = {
                matchId: null,
                userId: null
            };
            this.getParameterByName = (name) => {
                name = name.replace(/[\[\]]/g, '\\$&');
                const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`, 'i');
                const results = regex.exec(window.location.href);
                if (!results) {
                    return undefined;
                }
                else if (!results[2]) {
                    return '';
                }
                else {
                    return decodeURIComponent(results[2].replace(/\+/g, ' ')).trim();
                }
            };
            this.createSocket();
        }
        createSocket() { }
        static getInstance() {
            if (!this._socketInstance) {
                this._socketInstance = new Socket();
            }
            return this._socketInstance;
        }
        static removeInstance() {
            this._socketInstance = undefined;
        }
        ;
        disconnect() {
            this._socket.disconnect();
            console.warn("Socket disconnected");
        }
        ;
        setDiceValue(diceValue) {
            this._socket.emit("changeDiveValue", {
                matchId: this.userData["matchId"],
                userId: this.userData["userId"], value: diceValue
            });
        }
        ;
        get socket() {
            return this._socket;
        }
        addXender(_xender) {
            this._receiverList.push(_xender);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        send(message) {
            this._receiverList.forEach((_Xender) => {
                _Xender.onReceive(message);
            });
        }
        onReceive(message) {
            if (message.eventType !== Engine.EventType.SERVER_EVENTS)
                return;
            switch (message.event) {
                case Network.ServerEvents.CREATE_MATCH_REQUEST:
                    this.createMatchRequestFriends(message.data.id);
                    break;
                case Network.ServerEvents.ON_TOKEN_SELECT:
                    this.sendSelectedToken(message.data);
                    break;
                case Network.ServerEvents.JOIN_MATCH_REQUEST:
                    this.joinMatchRequest(message.data);
                    break;
                case Network.ServerEvents.REQUEST_DICE:
                    this.diceRequest(message.data);
                    break;
                case Network.ServerEvents.MOVE_TOKEN:
                    this.moveTokenRequest(message.data);
                    break;
                case Network.ServerEvents.SEND_MSG:
                    this.sendMessage(message.data);
                    break;
                case Network.ServerEvents.TOKEN_REACHED:
                    this.onTokenReached(message.data);
                    break;
                case Network.ServerEvents.PLAYER_QUIT:
                    this.onPlayerQuit(message.data);
                    break;
                case Network.ServerEvents.ON_START_GAME_REQUEST:
                    this.startGameRequest(message.data);
                    break;
                case Network.ServerEvents.ON_TABLE_SELECT:
                    this.onTableSelect(message.data);
                    break;
                case Network.ServerEvents.ONTO_TABLESCREEN:
                    this.onToTableScreen(message.data);
                    break;
                case Network.ServerEvents.EXIT_GAME:
                    this.exitGame(message.data);
                    break;
                case Network.ServerEvents.QUIT_LOBBY:
                    this.onPlayerQuitOnLobby(message.data);
                    break;
                case Network.ServerEvents.GET_TABLE_VALUE:
                    this.getTableValue(message.data);
                    break;
                case Network.ServerEvents.JOIN_BATTLE_MODE:
                    this.onJoinBattleModeRequest(message.data);
                    break;
                case Network.ServerEvents.JOIN_BOT_BATTLE_MODE:
                    this.onJoinBotBattleModeRequest(message.data);
                    break;
                case Network.ServerEvents.RESET_SOCKET_MATCH_ID:
                    this.userData["matchId"] = undefined;
                    break;
                case Network.ServerEvents.CLOSE_TAB_EXIT:
                    this.onCloseTabExit();
                    break;
                case Network.ServerEvents.CREATE_FRIENDS_LOBBY:
                    this.createFriendsLobby(message);
                    break;
                case Network.ServerEvents.JOIN_FRIENDS_LOBBY_REQ:
                    this.joinFriendsLobbyRequest(message);
                    break;
                case Network.ServerEvents.START_FRIENDS_MATCH_REQ:
                    this.startFriendsMatchRequest(message);
                    break;
                case Network.ServerEvents.FRIENDS_LOBBY_EXIT:
                    this.onFriendsLobbyExit(message);
                    break;
                case Network.ServerEvents.UPDATE_FRIENDS_SOCKET:
                    this.onUpdateSocketIdFriends(message);
                    break;
                case Network.ServerEvents.RANDOM_MATCH_REQUEST:
                    this.joinRandomMatchRequest(message);
                    break;
            }
        }
        disconnect_() {

            this._socket.disconnect();
        }
        ;
        connect_() {
            this._socket = io.connect('ws://localhost:9696', { parser: window.customParser, transports: ['websocket'] });
            this._socket.emit("test", "kol");
            this.addEventListener();
        }
        ;
        addEventListener() { }
        createMatchRequest(_id, peers) {
            this._socket.emit('createMatch', { userId: _id, peers: peers, bootTable: Ludo_Wild.BootTable.BRONZE });
        }
        createMatchRequestFriends(_id) {
            let _contestId = this.getContestID();
            this._socket.emit('createMatch', { userId: _id, peers: 1, matchType: Ludo_Wild.MatchType.FRIENDS, bootTable: Ludo_Wild.BootTable.BRONZE, contestId: _contestId });
        }
        getContestID() {
            let resultStr = this.getParameterByName("contestId");
            if (resultStr !== undefined) {
                return resultStr;
            }
            return "";
        }
        getTableValue(data) {
            this._socket.emit('getAvailableTable', { userId: data.userId });
        }
        ;
        joinMatchRequest(_data) {
            this.userData["matchId"] = _data.matchid;
            this._socket.emit('joinMatch', { userId: _data.userid, matchId: _data.matchid, isBot: false, matchType: Ludo_Wild.MatchType.FRIENDS });
        }
        ;
        startGameRequest(_data) {
            this.userData["matchId"] = _data.matchId;
            this._socket.emit('startGameRequest', { userId: _data.userId, matchId: _data.matchId });
        }
        ;
        joinMacthRequestFreinds(_data) {
            this._socket.emit('joinMatch', { userId: _data.userid, matchId: _data.matchid, isBot: false });
        }
        ;
        sendSelectedToken(_data) {
            this.userData['matchId'] = _data.matchId;
            this.userData['userId'] = _data.userId;
            this._socket.emit("selectedToken", { matchId: _data.matchId, userId: _data.userId, token: _data.token });
        }
        diceRequest(_data) {

            this._socket.emit("rollDice", { matchId: this.userData['matchId'], userId: _data.userId, mc: _data.mc });
        }
        moveTokenRequest(_data) {
            this._socket.emit("moveToken", { matchId: this.userData['matchId'], userId: _data.userId, tokenId: _data.tokenId });
        }
        sendMessage(_data) {
            this._socket.emit('message', { matchId: _data.matchid, userId: _data.userid, message: _data.msg });
        }
        onTokenReached(_data) {

            this._socket.emit('tokenReached', { matchId: this.userData['matchId'], pid: _data.pid, tid: _data.tid });
        }
        onPlayerQuit(_data) {
            this._socket.emit('playerQuit', { matchId: this.userData['matchId'], userId: _data.userId });
        }
        onPlayerQuitOnLobby(_data) {
            this._socket.emit('playerQuitLobby', { matchId: _data.matchId, userId: _data.userId });
        }
        onPlayerLeave() {
            this._socket.emit('playerQuit', { matchId: this.userData['matchId'], userId: this.userData['userId'] });
        }
        onTableSelect(_data) {
            this._socket.emit('tableSelectReq', { matchId: _data.matchId, userId: _data.userId, table: _data.table });
        }
        onToTableScreen(_data) {
            this._socket.emit('onToTableScreen', { matchId: _data.matchId });
        }
        exitGame(_data) {
            this._socket.emit('exitGame', { matchId: this.userData['matchId'], userId: _data.userId });
        }
        onJoinBattleModeRequest(battleInfo) {

            this.userData["userId"] = battleInfo.client.userId;
            this.userData["matchId"] = "ludo::battle::" + battleInfo.matchId;
            this._socket.emit('joinBattleMode', battleInfo);
        }
        onJoinBotBattleModeRequest(botBattleInfo) {
            console.log("Request to server for joining battle mode", botBattleInfo);
            this.userData["userId"] = botBattleInfo.client.userId;
            this.userData["matchId"] = "ludo::battle::" + botBattleInfo.matchId;
            this._socket.emit('joinBotBattleMode', botBattleInfo);
        }
        onCloseTabExit() {
            this._socket.emit('onCloseTabExit', { matchId: this.userData["matchId"], userId: this.userData["userId"] });
        }
        createFriendsLobby(message) {
            this._socket.emit("createFriendsLobby", message.data);
        }
        ;
        joinFriendsLobbyRequest(message) {

            const joinData = message.data;
            this.userData["userId"] = Ludo_Wild.playerData.playId;
            this.userData["matchId"] = "ludo::friends::" + joinData.roomId;
            this._socket.emit("joinFriendsLobbyReq", message.data);
        }
        ;
        startFriendsMatchRequest(message) {

            this.userData["userId"] = Ludo_Wild.playerData.playId;
            this.userData["matchId"] = "ludo::friends::" + message.data.roomId;
            this._socket.emit("startFriendsMatchReq", message.data);
        }
        ;
        onFriendsLobbyExit(message) {

            this._socket.emit("friendsLobbyExit", message.data);
        }
        onUpdateSocketIdFriends(message) {

            this._socket.emit("update_friends_socket", message.data);
        }
        ;
        joinRandomMatchRequest(message) {
            this._socket.emit("random_match_request", message.data);
        }
    }
    Network.Socket = Socket;
})(Network || (Network = {}));
var Network;
(function (Network) {
    let ServerEvents;
    (function (ServerEvents) {
        ServerEvents[ServerEvents["ALL_JOINED"] = 0] = "ALL_JOINED";
        ServerEvents[ServerEvents["CREATE_MATCH_SUCCESS"] = 1] = "CREATE_MATCH_SUCCESS";
        ServerEvents[ServerEvents["CREATE_MATCH_FAIL"] = 2] = "CREATE_MATCH_FAIL";
        ServerEvents[ServerEvents["JOIN_MATCH_SUCCESS"] = 3] = "JOIN_MATCH_SUCCESS";
        ServerEvents[ServerEvents["JOIN_MATCH_FAIL"] = 4] = "JOIN_MATCH_FAIL";
        ServerEvents[ServerEvents["ON_SESSION_CONNECTED"] = 5] = "ON_SESSION_CONNECTED";
        ServerEvents[ServerEvents["CREATE_MATCH_REQUEST"] = 6] = "CREATE_MATCH_REQUEST";
        ServerEvents[ServerEvents["JOIN_MATCH_REQUEST"] = 7] = "JOIN_MATCH_REQUEST";
        ServerEvents[ServerEvents["ON_RPC_CALL"] = 8] = "ON_RPC_CALL";
        ServerEvents[ServerEvents["RETURN_RPC_CALL"] = 9] = "RETURN_RPC_CALL";
        ServerEvents[ServerEvents["SEND_TO_PEER"] = 10] = "SEND_TO_PEER";
        ServerEvents[ServerEvents["SELF_FETCH_REQ"] = 11] = "SELF_FETCH_REQ";
        ServerEvents[ServerEvents["ON_SELF_FETCH"] = 12] = "ON_SELF_FETCH";
        ServerEvents[ServerEvents["ON_FROM_PEER"] = 13] = "ON_FROM_PEER";
        ServerEvents[ServerEvents["CHOOSE_TOKEN"] = 14] = "CHOOSE_TOKEN";
        ServerEvents[ServerEvents["PEER_JOINED"] = 15] = "PEER_JOINED";
        ServerEvents[ServerEvents["ON_TOKEN_SELECT"] = 16] = "ON_TOKEN_SELECT";
        ServerEvents[ServerEvents["START_GAME"] = 17] = "START_GAME";
        ServerEvents[ServerEvents["START_GAME_RANDOM"] = 18] = "START_GAME_RANDOM";
        ServerEvents[ServerEvents["GOT_DICE"] = 19] = "GOT_DICE";
        ServerEvents[ServerEvents["REQUEST_DICE"] = 20] = "REQUEST_DICE";
        ServerEvents[ServerEvents["MOVE_TOKEN"] = 21] = "MOVE_TOKEN";
        ServerEvents[ServerEvents["TOKEN_MOVED"] = 22] = "TOKEN_MOVED";
        ServerEvents[ServerEvents["TURN_OVER"] = 23] = "TURN_OVER";
        ServerEvents[ServerEvents["PLAYER_WON"] = 24] = "PLAYER_WON";
        ServerEvents[ServerEvents["PLAYER_QUIT"] = 25] = "PLAYER_QUIT";
        ServerEvents[ServerEvents["ON_PLAYER_QUIT"] = 26] = "ON_PLAYER_QUIT";
        ServerEvents[ServerEvents["PILE_UP"] = 27] = "PILE_UP";
        ServerEvents[ServerEvents["GAME_OVER"] = 28] = "GAME_OVER";
        ServerEvents[ServerEvents["GET_METADATA"] = 29] = "GET_METADATA";
        ServerEvents[ServerEvents["SEND_MSG"] = 30] = "SEND_MSG";
        ServerEvents[ServerEvents["RECEIVE_MSG"] = 31] = "RECEIVE_MSG";
        ServerEvents[ServerEvents["TOKEN_REACHED"] = 32] = "TOKEN_REACHED";
        ServerEvents[ServerEvents["JOIN_RANDOM_MATCH_REQUEST"] = 33] = "JOIN_RANDOM_MATCH_REQUEST";
        ServerEvents[ServerEvents["ON_PLAYER_JOINED"] = 34] = "ON_PLAYER_JOINED";
        ServerEvents[ServerEvents["ON_PLAYER_JOINED_RANDOM"] = 35] = "ON_PLAYER_JOINED_RANDOM";
        ServerEvents[ServerEvents["ON_START_GAME_REQUEST"] = 36] = "ON_START_GAME_REQUEST";
        ServerEvents[ServerEvents["ON_REQUEST_FAIL"] = 37] = "ON_REQUEST_FAIL";
        ServerEvents[ServerEvents["ON_TOKEN_HOME"] = 38] = "ON_TOKEN_HOME";
        ServerEvents[ServerEvents["ON_TABLE_SELECT"] = 39] = "ON_TABLE_SELECT";
        ServerEvents[ServerEvents["TABLE_ACCEPTED"] = 40] = "TABLE_ACCEPTED";
        ServerEvents[ServerEvents["ONTO_TABLESCREEN"] = 41] = "ONTO_TABLESCREEN";
        ServerEvents[ServerEvents["ON_TABLEOPTIONS"] = 42] = "ON_TABLEOPTIONS";
        ServerEvents[ServerEvents["EXIT_GAME"] = 43] = "EXIT_GAME";
        ServerEvents[ServerEvents["NOTIFY_TABLE_CHOSEN"] = 44] = "NOTIFY_TABLE_CHOSEN";
        ServerEvents[ServerEvents["QUIT_LOBBY"] = 45] = "QUIT_LOBBY";
        ServerEvents[ServerEvents["CREATOR_LEFT"] = 46] = "CREATOR_LEFT";
        ServerEvents[ServerEvents["PLAYER_LEFT_LOBBY"] = 47] = "PLAYER_LEFT_LOBBY";
        ServerEvents[ServerEvents["GET_TABLE_VALUE"] = 48] = "GET_TABLE_VALUE";
        ServerEvents[ServerEvents["AVAIL_TABLE"] = 49] = "AVAIL_TABLE";
        ServerEvents[ServerEvents["START_TIMER"] = 50] = "START_TIMER";
        ServerEvents[ServerEvents["GET_CHIPDATA"] = 51] = "GET_CHIPDATA";
        ServerEvents[ServerEvents["ONLINE_LEADERBOARD"] = 52] = "ONLINE_LEADERBOARD";
        ServerEvents[ServerEvents["NOT_YOUR_TURN"] = 53] = "NOT_YOUR_TURN";
        ServerEvents[ServerEvents["ON_REQUEST_FAIL_MESSAGE"] = 54] = "ON_REQUEST_FAIL_MESSAGE";
        ServerEvents[ServerEvents["RANDOM_MATCHID"] = 55] = "RANDOM_MATCHID";
        ServerEvents[ServerEvents["LEVELS_LEADERBOARD"] = 56] = "LEVELS_LEADERBOARD";
        ServerEvents[ServerEvents["ON_GETTING_PONG"] = 57] = "ON_GETTING_PONG";
        ServerEvents[ServerEvents["GET_METADATA_EXPLICIT"] = 58] = "GET_METADATA_EXPLICIT";
        ServerEvents[ServerEvents["JOIN_BATTLE_MODE"] = 59] = "JOIN_BATTLE_MODE";
        ServerEvents[ServerEvents["JOIN_BOT_BATTLE_MODE"] = 60] = "JOIN_BOT_BATTLE_MODE";
        ServerEvents[ServerEvents["START_BATTLE_MODE"] = 61] = "START_BATTLE_MODE";
        ServerEvents[ServerEvents["GET_METADATA_BATTLEMODE"] = 62] = "GET_METADATA_BATTLEMODE";
        ServerEvents[ServerEvents["RESET_SOCKET_MATCH_ID"] = 63] = "RESET_SOCKET_MATCH_ID";
        ServerEvents[ServerEvents["CLOSE_TAB_EXIT"] = 64] = "CLOSE_TAB_EXIT";
        ServerEvents[ServerEvents["START_GAME_TIMER"] = 65] = "START_GAME_TIMER";
        ServerEvents[ServerEvents["LOBBY_TIMEOUT"] = 66] = "LOBBY_TIMEOUT";
        ServerEvents[ServerEvents["CREATE_FRIENDS_LOBBY"] = 67] = "CREATE_FRIENDS_LOBBY";
        ServerEvents[ServerEvents["CREATED_FRIENDS_LOBBY"] = 68] = "CREATED_FRIENDS_LOBBY";
        ServerEvents[ServerEvents["JOIN_FRIENDS_LOBBY_REQ"] = 69] = "JOIN_FRIENDS_LOBBY_REQ";
        ServerEvents[ServerEvents["NEW_PLAYER_JOINED_FRIENDS"] = 70] = "NEW_PLAYER_JOINED_FRIENDS";
        ServerEvents[ServerEvents["START_FRIENDS_MATCH_REQ"] = 71] = "START_FRIENDS_MATCH_REQ";
        ServerEvents[ServerEvents["START_FRIENDS_GAME"] = 72] = "START_FRIENDS_GAME";
        ServerEvents[ServerEvents["NO_ROOM_AVAILABLE"] = 73] = "NO_ROOM_AVAILABLE";
        ServerEvents[ServerEvents["FRIENDS_LOBBY_EXIT"] = 74] = "FRIENDS_LOBBY_EXIT";
        ServerEvents[ServerEvents["OLD_PLAYER_JOINED_FRIENDS"] = 75] = "OLD_PLAYER_JOINED_FRIENDS";
        ServerEvents[ServerEvents["DUPLICATE_JOIN"] = 76] = "DUPLICATE_JOIN";
        ServerEvents[ServerEvents["RECONNECT_TO_LOBBY"] = 77] = "RECONNECT_TO_LOBBY";
        ServerEvents[ServerEvents["UPDATE_FRIENDS_SOCKET"] = 78] = "UPDATE_FRIENDS_SOCKET";
        ServerEvents[ServerEvents["RANDOM_MATCH_REQUEST"] = 79] = "RANDOM_MATCH_REQUEST";
        ServerEvents[ServerEvents["NO_MATCH_RANDOM_MODE"] = 80] = "NO_MATCH_RANDOM_MODE";
        ServerEvents[ServerEvents["MATCH_FOUND_RANDOM_MODE"] = 81] = "MATCH_FOUND_RANDOM_MODE";
        ServerEvents[ServerEvents["DICE_SKIPPED"] = 82] = "DICE_SKIPPED";
        ServerEvents[ServerEvents["ABORT_MATCH"] = 83] = "ABORT_MATCH";
        ServerEvents[ServerEvents["BLITZ_OVER"] = 84] = "BLITZ_OVER";
        ServerEvents[ServerEvents["BLITZ_POINTS_UPDATE"] = 85] = "BLITZ_POINTS_UPDATE";
        ServerEvents[ServerEvents["BLITZ_TIMER_TICK"] = 86] = "BLITZ_TIMER_TICK";
    })(ServerEvents = Network.ServerEvents || (Network.ServerEvents = {}));
})(Network || (Network = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    let BufferType;
    (function (BufferType) {
        BufferType[BufferType["WAITING"] = 0] = "WAITING";
        BufferType[BufferType["LOADING"] = 1] = "LOADING";
        BufferType[BufferType["EMPTY"] = 2] = "EMPTY";
    })(BufferType = Ludo_Wild.BufferType || (Ludo_Wild.BufferType = {}));
    class Buffer {
        constructor(_type = BufferType.WAITING, X, Y, _tintType = Ludo_Wild.tintType.NORMAL, isBattleScreen = false) {
            this.isActive = false;
            this._x = Ludo_Wild.Main.GAME.world.centerX;
            this._y = Ludo_Wild.Main.GAME.world.centerY;
            this.isBattleScreen = false;
            this.type = _type;
            if (X !== undefined) {
                this._x = X;
                this._y = Y;
            }
            if (_tintType !== undefined) {
                this.bufferTintType = _tintType;
            }
            this.isBattleScreen = isBattleScreen;
            this.createBuffer();
        }
        ;
        show() {
            this.createBuffer();
        }
        get ISACTIVE() {
            return this.isActive;
        }
        setVisibility(_isVisible) {
            this.bufferAnimation.visible = _isVisible;
            this.waitingText.visible = _isVisible;
        }
        ;
        createBuffer() {
            this.isActive = true;
            this.bufferAnimation = Ludo_Wild.Main.GAME.add.image(this._x, this._y, "bufferAnim");
            this.bufferAnimation.anchor.setTo(0.5);
            this.bufferAnimation.animations.add("buffering");
            this.bufferAnimation.play("buffering", 5).loop = true;
            let bufferString = this.getBufferString();
            this.waitingText = Ludo_Wild.Main.GAME.add.text(this._x, this._y + 105, Ludo_Wild.LanguageManager.getLangInstance().getText(bufferString), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.waitingText.anchor.setTo(0.5, 0.5);
            this.waitingText.font = Ludo_Wild.Main.FONT;
        }
        ;
        addProgress(progress) {
            this.waitingText.fontSize = (34 + Ludo_Wild.Main.FONTSIZE) - 10;
            let minMax = { min: progress, max: progress };
            this.assetLoadTween = Ludo_Wild.Main.GAME.add.tween(minMax).to({ max: minMax.min + 25 }, 5000);
            this.assetLoadTween.onUpdateCallback(() => {
                this.waitingText.text = Ludo_Wild.LanguageManager.getLangInstance().getLoadingProgressString(Math.floor(minMax.max));
            });
            this.assetLoadTween.start();
        }
        ;
        getBufferString() {
            let str;
            switch (this.type) {
                case BufferType.WAITING:
                    str = Ludo_Wild.TEXTS.WAITING;
                    break;
                case BufferType.LOADING:
                    str = Ludo_Wild.TEXTS.LOADING;
                    break;
                case BufferType.EMPTY:
                    str = Ludo_Wild.TEXTS.EMPTY_TEXT;
                    break;
            }
            return str;
        }
        ;
        destroy() {
            this.isActive = false;
            this.bufferAnimation.destroy();
            this.waitingText.destroy();
        }
    }
    Ludo_Wild.Buffer = Buffer;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Button {
        constructor(_config) {
            this.createButton(_config);
        }
        ;
        createButton(_config) {
            this.buttonConfig = _config;
            this.btnImage = Ludo_Wild.Main.GAME.add.image(this.buttonConfig.x, this.buttonConfig.y, Ludo_Wild.generalSheet, this.buttonConfig.texture);
            this.btnImage.anchor.setTo(0.5, 0.5);
            this.btnImage.scale.setTo(this.buttonConfig.scale);
        }
        ;
        addInputHandler(_func, _context) {
            this.btnImage.inputEnabled = true;
            this.btnImage.events.onInputUp.add(this.onButtonClick.bind(this, _func, _context), this);
        }
        ;
        setChild(_childObj) {
            this.btnImage.addChild(_childObj);
        }
        ;
        setButtonTextChild(_text) {

            this.btnImage.getChildAt(1).text = _text;
            ;
        }
        setParent(_parentObj) {
            _parentObj.addChild(this.btnImage);
        }
        ;
        get ISACTIVE() {
            return this.btnImage.alpha !== 1 ? false : true;
        }
        ;
        btnTexture() {
            return this.btnImage;
        }
        ;
        setTexture(_texture) {
            this.btnImage.loadTexture(Ludo_Wild.generalSheet, _texture);
        }
        ;
        setChildTexture(_texture) {

            this.btnImage.getChildAt(1).loadTexture(_texture);
        }
        setPriority(id) {
            this.btnImage.inputEnabled = true;
            this.btnImage.input.priorityID = id;
        }
        ;
        setAlpha(_alpha) {
            this.btnImage.alpha = _alpha;
        }
        ;
        resetY(_y) {
            this.btnImage.reset(this.btnImage.x, _y);
        }
        ;
        setActive(_isactive) {
            this.btnImage.inputEnabled = _isactive;
            _isactive ? this.btnImage.alpha = 1 : this.btnImage.alpha = 0.5;
        }
        ;
        enabled(_isEnabled) {
            if (this.btnImage && this.btnImage.alive) {
                this.btnImage.inputEnabled = _isEnabled;
            }
        }
        ;
        shake() {
            Ludo_Wild.Main.GAME.add.tween(this.btnImage).to({ angle: 20 }, 50).to({ angle: 0 }, 50).
                to({ angle: -20 }, 50).to({ angle: 0 }, 50).start();
        }
        ;
        afterClick(_param) {

        }
        ;
        setVisibe(_visible) {
            this.btnImage.visible = _visible;
        }
        ;
        destroy() {
            this.btnImage.destroy();
            this.buttonConfig = undefined;
        }
        ;
        onButtonClick(func, context) {

            Manager.AudioManager.getAudioInstance().playClick();
            const scale = this.buttonConfig.scale;
            Ludo_Wild.Main.GAME.add.tween(this.btnImage.scale).to({ x: scale - 0.1, y: scale - 0.1 }, 80).
                to({ x: scale, y: scale }, 80).start().onComplete.add(() => {
                    const param = func(context);
                    this.afterClick(param);
                });
        }
    }
    Ludo_Wild.Button = Button;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Dice {
        constructor(_x, _y, _gamMode, color, quad) {
            this.diceImg = null;
            this.isPlaying = false;
            this.gameMode = _gamMode;
            this.diceTrayColor = color;
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.diceTimer = 6000;
            }
            else {
                this.diceTimer = 9000;
            }
            this.renderdefaultDiceTray(_x, _y, quad);
        }
        ;
        renderdefaultDiceTray(_x, _y, quad) {
            this.diceTrayColor -= 1;
            this.diceTray = Ludo_Wild.Main.GAME.add.group();
            this.diceTray.x = _x;
            this.diceTray.y = _y;
            this.diceDefaultTrayImg = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.arenaSheet, "diceBar" + this.diceTrayColor);
            this.diceDefaultTrayImg.anchor.setTo(0.5, 0.5);
            this.diceTray.addChild(this.diceDefaultTrayImg);
            if (this.isGeneralOnline()) {
                this.createTimerAssets(_x, _y);
            }
            this.diceImg = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.arenaSheet, "diceIdle");
            if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (quad === 1 || quad === 2) {
                    this.diceImg.angle = 180;
                    this.diceImg.y = -18;
                }
            }
            this.diceImg.anchor.setTo(0.5, 0.5);
            this.diceImg.hitArea = new Phaser.Rectangle(-this.diceDefaultTrayImg.width / 2, -this.diceDefaultTrayImg.height / 2, 117, 117);
            this.diceImg.inputEnabled = false;
            this.diceImg.events.onInputDown.add(this.onDiceDown.bind(this), this);
            this.diceTray.addChild(this.diceImg);
            this.createDiceRollAnimation(_x, _y);
        }
        ;
        onDiceDown() {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.GAMEPLAY_SCREEN) {
                return;
            }
            ;
            if (this.isGeneralOnline()) {
                if (this.diceImg.frameName === "diceIdle") {
                    this.diceAnimation.visible = true;
                    this.setTimerAssetsVisibility(false);
                    this.diceImg.visible = false;
                    this.diceAnimation.play("diceRoll", 30, true);
                    this.isPlaying = true;
                    this.diceLoopTimer = setTimeout(() => {
                        this.diceTimerLoopEvent();
                    }, this.diceTimer);
                }
            }
            this.rollDiceCallback(this.rollDiceContext);
        }
        ;
        showRipple() {
        }
        ;
        renderRipple() {
        }
        ;
        stopRippleEffect() {

        }
        ;
        createDiceRollAnimation(_x, _y) {
            this.diceAnimation = Ludo_Wild.Main.GAME.add.image(0, 0, "DiceAnim");
            this.diceAnimation.anchor.setTo(0.5, 0.5);
            this.diceAnimation.scale.setTo(1.3, 1.3);
            this.diceAnimation.animations.add('diceRoll').loopCount = 2;
            this.diceAnimation.visible = false;
            this.diceTray.addChild(this.diceAnimation);
        }
        ;
        changeToGeneric(toGeneric) {
            if (!toGeneric) {
                this.diceImg.loadTexture(Ludo_Wild.arenaSheet, 'dicebg');
            }
            else {
                this.diceImg.loadTexture(Ludo_Wild.arenaSheet, 'diceIdle');
            }
        }
        ;
        createTimerAssets(x, y) {
            const maskDiameter = 145;
            this.timerRoundedRectangle = Ludo_Wild.Main.GAME.add.graphics(-52, -60);
            this.timerRoundedRectangle.lineStyle(10, 0x49dcb1, 1);
            this.timerRoundedRectangle.drawRoundedRect(0, 0, 102, 102, 25);
            this.diceTray.addChild(this.timerRoundedRectangle);
            this.timerRoundedRectangleMask = Ludo_Wild.Main.GAME.add.graphics(-52 + (maskDiameter / 3) + 5, -60 + (maskDiameter / 3) + 7);
            this.timerRoundedRectangleMask.angle = -85;
            this.timerRoundedRectangle.visible = false;
            this.timerRoundedRectangleMask.visible = false;
            this.diceTray.addChild(this.timerRoundedRectangleMask);
        }
        ;
        startTimerMask() {
            const theta = { min: 0, max: 0 };
            this.timerTween = Ludo_Wild.Main.GAME.add.tween(theta).to({ max: 360 }, this.diceTimer);
            this.timerTween.onUpdateCallback(() => {
                this.timerRoundedRectangleMask.clear();
                this.timerRoundedRectangleMask.lineStyle(0);
                this.timerRoundedRectangleMask.beginFill(0xffffff);
                this.timerRoundedRectangleMask.arc(0, 0, 145 / 2, Phaser.Math.degToRad(theta.min), Phaser.Math.degToRad(theta.max), true);

                this.timerRoundedRectangleMask.endFill();
                this.timerRoundedRectangle.mask = this.timerRoundedRectangleMask;
            });
            this.timerTween.start();
        }
        ;
        setTimerAssetsVisibility(_isVisible) {
            if (!this.isGeneralOnline()) {
                return;
            }

            this.timerRoundedRectangle.visible = _isVisible;
            this.timerRoundedRectangleMask.visible = _isVisible;
            if (!_isVisible && this.timerTween && this.timerTween.isRunning) {
                this.timerTween.stop();
            }
            if (!_isVisible) {
                window.clearTimeout(this.timerReference);
            }
        }
        ;
        notTurn() {
            if (this.diceAnimation.animations.getAnimation("diceRoll").isPlaying) {
                this.diceAnimation.animations.getAnimation("diceRoll").stop();
                this.diceAnimation.visible = false;
            }
        }
        ;
        diceTimerLoopEvent() {
            if (this.isPlaying) {
                this.diceAnimation.animations.stop('diceRoll');
                this.diceAnimation.animations.getAnimation('diceRoll').loop = false;
                this.isPlaying = false;
                this.diceAnimation.visible = false;
            }
        }
        ;
        renderDiceImage(_diceVal, _loop) {
            let randomDiceVal = 0;
            if (_diceVal) {
                randomDiceVal = _diceVal > 6 ? 1 : _diceVal;
            }
            else {
                randomDiceVal = Math.floor(Math.random() * 6) + 1;
            }
            if (this.isPlaying) {
                this.diceAnimation.animations.stop('diceRoll');
                this.diceAnimation.animations.getAnimation('diceRoll').loop = false;
                this.isPlaying = false;
                if (this.diceLoopTimer !== undefined) {
                    let handleNo = this.diceLoopTimer;
                    clearTimeout(handleNo);
                }
            }
            this.setTimerAssetsVisibility(false);
            this.diceImg.visible = false;
            this.diceAnimation.visible = true;
            this.diceDefaultTrayImg.visible = true;
            Manager.AudioManager.getAudioInstance().playDiceRoll();
            this.diceAnimation.play("diceRoll", 25).onComplete.add(() => {
                this.changeToGeneric(false);
                this.diceAnimation.animations.getAnimation("diceRoll").stop();

                this.diceImg.visible = true;
                this.diceDefaultTrayImg.visible = true;
                this.diceAnimation.visible = false;
                this.diceImg.loadTexture(Ludo_Wild.arenaSheet, "dice_" + randomDiceVal.toString());
                radio('diceRolled').broadcast();
            });
        }
        ;
        activateDice(_visible = true) {
            this.setTimerAssetsVisibility(false);
            this.diceImg.visible = _visible;
            this.diceDefaultTrayImg.visible = _visible;
            if (this.isGeneralOnline() || Ludo_Wild.Main.IS_FAKE_RANDOM) {
                this.startTimer();
            }
        }
        ;
        deactivateDice() {
            if (!this.diceImg.visible) {
                return;
            }
            this.changeToGeneric(true);
            this.diceImg.visible = false;
            this.diceDefaultTrayImg.visible = false;
        }
        ;
        getDiceImg() {
            return this.diceImg.visible;
        }
        ;
        startTimer() {
            this.setTimerAssetsVisibility(true);
            this.startTimerMask();

            this.timerReference = window.setTimeout(() => {

                this.deactivateDice();
                this.setTimerAssetsVisibility(false);
                radio("disableSelfTokens").broadcast();
                if (Ludo_Wild.Main.IS_FAKE_RANDOM) {
                    radio("diceTimeoutFake").broadcast();
                }
            }, this.diceTimer);
        }
        ;
        enableInput(_isInput) {
            this.diceImg.inputEnabled = _isInput;
            if (_isInput) {
                this.diceImg.input.priorityID = 1;
            }
        }
        ;
        addCallbackFunction(_func, _context) {
            this.rollDiceCallback = _func;
            this.rollDiceContext = _context;
        }
        ;
        disableDiceInput() {
            if (this.diceImg !== undefined || this.diceImg !== null) {
                this.diceImg.inputEnabled = false;
            }
        }
        destroyRippletimer() {

        }
        ;
        isGeneralOnline() {
            if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this.gameMode === Ludo_Wild.gameMode.RANDOM_ONLINE
                || this.gameMode === Ludo_Wild.gameMode.ONLINE_BATTLE || Ludo_Wild.Main.IS_FAKE_RANDOM) {
                return true;
            }
            return false;
        }
    }
    Ludo_Wild.Dice = Dice;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class GameOver {
        constructor(_gameData) {
            this.bgTintImage = null;
            this.gameData = { gameMode: null, totalPlayers: null, place: null, data: null, isGameOver: false, matchType: "" };
            this.isActive = false;
            this.gameData = _gameData;

            window.setTimeout(this.show.bind(this, _gameData), 500);
        }
        show(_gameData) {
            if (!radio.$.channels["gameReadyGameover"]) {
                radio("gameReadyGameover").subscribe([this.onClickContinue, this]);
            }
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEOVER;
            this.gameData = {
                gameMode: null, totalPlayers: null, place: null, data: null,
                isGameOver: false, matchType: ""
            };
            this.gameData = _gameData;
            this.setTint();
            Manager.AudioManager.getAudioInstance().playGameOver();
            this.renderGameOverEffects(this.isPlayerWinner());
            this.createGameoverPanel();
        }
        ;
        setTint() {
            this.bgTintImage = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.generalSheet, "bgTint");
        }
        ;
        initVars() {
            this.gameData = {
                gameMode: null, totalPlayers: null, place: null, data: null,
                isGameOver: false, matchType: ""
            };
        }
        ;
        isPlayerWinner() {
            let isWinner = false;
            let prizeLength = 1;
            if (segadroid.isBattleGame()) {
                prizeLength = Ludo_Wild.prizeList.length === 0 ? 1 : Ludo_Wild.prizeList.length;
            }
            if (this.gameData.place <= prizeLength) {
                isWinner = true;
            }
            return isWinner;
        }
        ;
        createGameoverPanel() {
            integration.showInterstitial();
            this.gameoverPanel = Ludo_Wild.Main.GAME.add.group();
            this.gameoverPanel.scale.setTo(0, 0);
            this.gameoverPanel.position.setTo(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY);
            const isWinner = this.isPlayerWinner();
            this.addWingsToBanner(isWinner);
            this.addBaseBoard(isWinner);
            this.addTextToBanner(isWinner);
            this.addInnerBoard();
            this.createLeaderboard(isWinner);
            this.animateGameoverPanel(isWinner);
            this.createGameOverButtons();

            segadroid.setState({
                state: "over",
                score: 5 - this.gameData.place
            });
            if (segadroid.isBattleGame()) {
                Ludo_Wild.BattleManager.replayScene = Ludo_Wild.BattleReplayScene.Gameover;
                const winnerData = this.getSDKWinnerBroadcastObject();
                window.setTimeout(() => {
                    segadroid.broadcastWinner(winnerData);
                }, 2000);
            }
        }
        ;
        addTextToBanner(isWinner) {
            const textType = isWinner ? Ludo_Wild.TEXTS.YOU_WON : Ludo_Wild.TEXTS.YOU_LOST;
            const text = Ludo_Wild.Main.GAME.add.text(0, (-645 / 2) + 50 + (Ludo_Wild.Home.textYgap * -40), Ludo_Wild.LanguageManager.getLangInstance().getText(textType), { font: (60 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            text.font = Ludo_Wild.Main.FONT;
            text.anchor.setTo(0.5, 0.5);
            this.gameoverPanel.addChild(text);
        }
        ;
        addBaseBoard(isWinner) {
            const gameoverBoardTexture = isWinner ? "gameover_board_base_0" : "gameover_board_1";
            const baseBoard = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.popupSheet, gameoverBoardTexture);
            baseBoard.anchor.setTo(0.5);
            this.gameoverPanel.addChild(baseBoard);
        }
        ;
        addInnerBoard() {

            const innerBoard = Ludo_Wild.Main.GAME.add.image(0, -15 + (103 / 2), Ludo_Wild.popupSheet, "gameover_board_inner");
            innerBoard.anchor.setTo(0.5);
            this.gameoverPanel.addChild(innerBoard);
        }
        ;
        addWingsToBanner(isWinner) {
            const baseTexture = isWinner ? "banner_" : "lose_banner_";

            const leftWing = Ludo_Wild.Main.GAME.add.image(-598 / 2, (-645 / 2) + (154 / 1.5), Ludo_Wild.popupSheet, baseTexture + "left_wing");
            leftWing.anchor.setTo(0.5);
            const rightWing = Ludo_Wild.Main.GAME.add.image(598 / 2, (-645 / 2) + (154 / 1.5), Ludo_Wild.popupSheet, baseTexture + "right_wing");
            rightWing.anchor.setTo(0.5);
            this.gameoverPanel.addChild(leftWing);
            this.gameoverPanel.addChild(rightWing);
        }
        ;
        animateGameoverPanel(isWinner) {
            const bounceTween = Ludo_Wild.Main.GAME.add.tween(this.gameoverPanel.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out);
            const leftWing = this.gameoverPanel.getChildAt(0);
            const rightWing = this.gameoverPanel.getChildAt(1);
            const leftWingTween = Ludo_Wild.Main.GAME.add.tween(leftWing).to({ angle: 5 }, 300, Phaser.Easing.Quadratic.In, false, 400, -1, true);
            const rightWingTween = Ludo_Wild.Main.GAME.add.tween(rightWing).to({ angle: -5 }, 300, Phaser.Easing.Quadratic.In, false, 400, -1, true);
            bounceTween.start().onComplete.add(() => {
                this.startLeaderboardAnimation();
            });
            if (isWinner) {
                this.startCrownAnimation();
            }
            else {
                this.startSadAnimation();
            }
            leftWingTween.start();
            rightWingTween.start();
        }
        ;
        renderGameOverEffects(isWinner) {
            if (isWinner) {
                this.createCrownGlow();
                this.createWinnerTrumpets();
                this.renderCrown();
            }
            else {
                this.renderSadEmoji();
                this.createLoserTrumpets();
            }
        }
        ;
        renderSadEmoji() {

            this.sadEmoji = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - (645 / 2), Ludo_Wild.popupSheet, "sad_emoji");
            this.sadEmoji.anchor.setTo(0.5, 0.5);
            this.sadEmoji.visible = false;
            const newY = this.sadEmoji.y - 120;
            const yoyoDestinationY = newY + 30;
            const initialMovementAnimation = Ludo_Wild.Main.GAME.add.tween(this.sadEmoji).to({ y: newY }, 100, Phaser.Easing.Bounce.Out);
            const yoyoAnimation = Ludo_Wild.Main.GAME.add.tween(this.sadEmoji).to({ y: yoyoDestinationY }, 600,

                Phaser.Easing.Linear.In).to({ y: newY }, 600, Phaser.Easing.Linear.Out, false, 0, -1, true);
            this.sadEmojiAnimation = initialMovementAnimation.chain(yoyoAnimation);
        }
        ;
        startSadAnimation() {
            this.sadEmojiAnimation.delay(400).start().onStart.add(() => {
                this.sadEmoji.visible = true;
                Manager.AudioManager.getAudioInstance().playLose();
                this.startLoserTrumpetAnimation();
            });
        }
        ;
        renderCrown() {

            this.crown = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - (645 / 2), Ludo_Wild.popupSheet, "crown");
            this.crown.anchor.setTo(0.5, 0.5);
            this.crown.visible = false;
            const newY = this.crown.y - 120;
            const yoyoDestinationY = newY + 30;
            const initialMovementAnimation = Ludo_Wild.Main.GAME.add.tween(this.crown).to({ y: newY }, 100, Phaser.Easing.Bounce.Out);
            const yoyoAnimation = Ludo_Wild.Main.GAME.add.tween(this.crown).to({ y: yoyoDestinationY }, 600,

                Phaser.Easing.Linear.In).to({ y: newY }, 600, Phaser.Easing.Linear.Out, false, 0, -1, true);
            this.crownAnimation = initialMovementAnimation.chain(yoyoAnimation);
        }
        ;
        createCrownGlow() {
            this.crownGlow = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX + 15, Ludo_Wild.Main.GAME.world.centerY - (645 / 2) + 75, Ludo_Wild.popupSheet, "crown_rays");
            this.crownGlow.anchor.setTo(0.5);
            this.crownGlow.visible = false;
            this.crownGlow.scale.setTo(0.5);
        }
        ;
        startCrownAnimation() {
            this.crownAnimation.delay(400).start().onStart.add(() => {
                this.crown.visible = true;
                this.startCrownGlowAnimation();
                Manager.AudioManager.getAudioInstance().playWon();
                this.startTrumpetAnimation();
            });
        }
        ;
        startCrownGlowAnimation() {
            Ludo_Wild.Main.GAME.add.tween(this.crownGlow.scale).to({ x: 1, y: 1 }, 1000, Phaser.Easing.Quadratic.In, true, 0, -1, true).onStart.add(() => {
                this.crownGlow.visible = true;
            });
        }
        ;
        createWinnerTrumpets() {
            this.winnerTrumpetGroup = Ludo_Wild.Main.GAME.add.group();
            this.winnerTrumpetGroup.position.set(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 240);
            this.winnerTrumpetGroup.visible = false;

            const rTrumpet1 = Ludo_Wild.Main.GAME.add.image(80, 0, Ludo_Wild.popupSheet, "win_trumpet_0");
            rTrumpet1.anchor.setTo(0, 1);
            const rTrumpet2 = Ludo_Wild.Main.GAME.add.image(50, -20, Ludo_Wild.popupSheet, "win_trumpet_1");
            rTrumpet2.anchor.setTo(0, 1);
            const rTrumpet3 = Ludo_Wild.Main.GAME.add.image(-45, 50, Ludo_Wild.popupSheet, "win_trumpet_2");
            rTrumpet3.anchor.setTo(0, 1);
            this.winnerTrumpetGroup.addChild(rTrumpet1);
            this.winnerTrumpetGroup.addChild(rTrumpet2);
            this.winnerTrumpetGroup.addChild(rTrumpet3);
            const lTrumpet1 = Ludo_Wild.Main.GAME.add.image(80, 75, Ludo_Wild.popupSheet, "win_trumpet_3");
            lTrumpet1.anchor.setTo(1, 1);
            const lTrumpet2 = Ludo_Wild.Main.GAME.add.image(-120, 30, Ludo_Wild.popupSheet, "win_trumpet_4");
            lTrumpet2.anchor.setTo(1, 1);
            lTrumpet2.angle = 20;
            const lTrumpet3 = Ludo_Wild.Main.GAME.add.image(20, 30, Ludo_Wild.popupSheet, "win_trumpet_5");
            lTrumpet3.anchor.setTo(1, 1);
            this.winnerTrumpetGroup.addChild(lTrumpet1);
            this.winnerTrumpetGroup.addChild(lTrumpet2);
            this.winnerTrumpetGroup.addChild(lTrumpet3);
        }
        ;
        startTrumpetAnimation() {
            this.winnerTrumpetGroup.visible = true;
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(0).scale).to({ x: 1.3, y: 1.3 }, 100, Phaser.Easing.Quadratic.Out, true, 0, 0, true);
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(1).scale).to({ x: 1.25, y: 1.25 }, 100, Phaser.Easing.Quadratic.Out, true, 100, 0, true);
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(3).scale).to({ x: 1.3, y: 1.3 }, 100, Phaser.Easing.Quadratic.Out, true, 0, 0, true);
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(4).scale).to({ x: 1.25, y: 1.25 }, 100, Phaser.Easing.Quadratic.Out, true, 100, 0, true);
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(2).scale).to({ x: 1.3, y: 1.3 }, 100, Phaser.Easing.Quadratic.Out, true, 200, 0, true);
            Ludo_Wild.Main.GAME.add.tween(this.winnerTrumpetGroup.getChildAt(5).scale).to({ x: 1.3, y: 1.3 }, 100, Phaser.Easing.Quadratic.Out, true, 200, 0, true);
        }
        ;
        createLoserTrumpets() {
            this.LoserTrumpetGroup = Ludo_Wild.Main.GAME.add.group();
            this.LoserTrumpetGroup.position.set(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 240);
            this.LoserTrumpetGroup.visible = false;

            const rTrumpet1 = Ludo_Wild.Main.GAME.add.image(-60, 20, Ludo_Wild.popupSheet, "lose_trumpet_0");
            rTrumpet1.anchor.setTo(0, 1);
            const rTrumpet2 = Ludo_Wild.Main.GAME.add.image(50, -20, Ludo_Wild.popupSheet, "lose_trumpet_1");
            rTrumpet2.anchor.setTo(0, 1);
            this.LoserTrumpetGroup.addChild(rTrumpet1);
            this.LoserTrumpetGroup.addChild(rTrumpet2);
            const lTrumpet1 = Ludo_Wild.Main.GAME.add.image(-100, -50, Ludo_Wild.popupSheet, "lose_trumpet_2");
            lTrumpet1.anchor.setTo(1, 1);
            const lTrumpet2 = Ludo_Wild.Main.GAME.add.image(30, 30, Ludo_Wild.popupSheet, "lose_trumpet_3");
            lTrumpet2.anchor.setTo(1, 1);
            this.LoserTrumpetGroup.addChild(lTrumpet1);
            this.LoserTrumpetGroup.addChild(lTrumpet2);
        }
        ;
        startLoserTrumpetAnimation() {
            this.LoserTrumpetGroup.visible = true;
        }
        ;
        createLeaderboard(isWinner) {
            let yOffset;
            if (this.gameData.totalPlayers === 2) {
                yOffset = -(106 / 2) - 15 + (103 / 2);
                this.gameoverPanel.getChildAt(4).scale.set(1, 0.5);
            }
            else if (this.gameData.totalPlayers === 3) {
                yOffset = -323 / 3 - 15 + (103 / 2);
                this.gameoverPanel.getChildAt(4).scale.set(1, 0.8);
            }
            else {
                yOffset = -434 / 2 + 40 + (103 / 2);
            }
            this.leaderboardGroup = Ludo_Wild.Main.GAME.add.group();
            this.leaderboardGroup.position.set(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY + yOffset);
            for (let i = 0; i < this.gameData.totalPlayers; i++) {
                let isSelf = false;
                let stripe_type = "score_stripe_others";
                if (this.gameData.place - 1 === i) {
                    isSelf = true;
                    stripe_type = "score_stripe_player";
                }
                if (isSelf && i === 0) {
                    stripe_type = "score_stripe_winner";
                }
                let prizeMoney = undefined;
                if (this.gameData.gameMode === Ludo_Wild.gameMode.ONLINE_BATTLE) {

                    prizeMoney = Ludo_Wild.prizeList[i] ? Ludo_Wild.prizeList[i] : undefined;
                }
                ;
                const rankSlab = this.createRankSlab(isSelf, stripe_type, i + 1, this.gameData.data[i + 1].name, prizeMoney);
                rankSlab.y = (i * 110);
                rankSlab.anchor.setTo(0.5);
                this.leaderboardGroup.add(rankSlab);
                if (isSelf) {
                    const highlighter = Ludo_Wild.Main.GAME.add.image(0, rankSlab.y, Ludo_Wild.popupSheet, "score_stripe_highlight");
                    highlighter.anchor.setTo(0.5, 0.5);
                    highlighter.alpha = 0;
                    this.leaderboardGroup.addChild(highlighter);
                }
            }
        }
        ;
        createRankSlab(self, stripe, rank, name, prizeAmount = undefined) {

            let textColor = "#394149";
            if (self && rank === 1) {
                textColor = "#01574b";
            }
            else if (self) {
                textColor = "#01425e";
            }

            if (self) {
                name = "YOU";
            }
            const rankSlab = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.popupSheet, stripe);
            const rankText = Ludo_Wild.Main.GAME.add.text((-480 / 2) + 20, 0 + (Ludo_Wild.Home.textYgap * -20), rank + ".", { font: "26px KG", fill: textColor });
            rankText.anchor.setTo(0, 0.5);
            const nameText = Ludo_Wild.Main.GAME.add.text((-480 / 2) + 50, 0 + (Ludo_Wild.Home.textYgap * -20), name.toUpperCase(), { font: "26px KG", fill: textColor });
            nameText.anchor.setTo(0, 0.5);
            rankSlab.addChild(rankText);
            rankSlab.addChild(nameText);
            rankSlab.alpha = 0;
            return rankSlab;
        }
        ;
        startLeaderboardAnimation() {
            const groupLength = this.gameData.totalPlayers;
            for (let i = 0; i < groupLength; i++) {
                const tween = Ludo_Wild.Main.GAME.add.tween(this.leaderboardGroup.getChildAt(i)).to({ alpha: 1 }, 200,

                    Phaser.Easing.Linear.In, true, i * 200);
                if (i === groupLength - 1) {
                    tween.onComplete.add(() => {
                        this.leaderboardGroup.getChildAt(groupLength).alpha = 1;
                    });
                }
            }
        }
        ;
        createGameOverButtons() {

            this.createNonBattleGameOverButtons();

        }
        ;
        onClickContinue() {
            console.warn("Subscribed to clickContinue");
            Analytics.Gama.send(Analytics.MESSAGE.BATTLE_REPLAY_MATCH);

            radio('exitGame').broadcast(true);
            Ludo_Wild.Main.GAME.state.restart(true, false, Ludo_Wild.playerBattleData, true);
        }
        ;
        createExitBattleButton(y) {
            const yValue = y || 1220;
            this.exitBtnText = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME_WIDTH / 2, yValue + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.GO_BACK_segadroid), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.exitBtnText.anchor.set(0.5);
            this.exitBtnText.align = "center";
            this.exitBtnText.font = Ludo_Wild.Main.FONT;
            this.exitBtnText.inputEnabled = true;
            this.exitBtnText.input.priorityID = 3;
            this.exitBtnText.events.onInputUp.add(this.onExitBattleClick.bind(this), this);
        }
        ;
        onExitBattleClick() {
            radio('exitGame').broadcast();
            new Ludo_Wild.Buffer(Ludo_Wild.BufferType.EMPTY, Ludo_Wild.Main.GAME.world.centerX, 1200, Ludo_Wild.tintType.NORMAL, true);
            this.exitBtnText.visible = false;
            try {
                this.exitBtnText.destroy();
            }
            catch (e) {
                console.log("error in exit battle click", e);
            }
        }
        ;
        createNonBattleGameOverButtons() {
            this.continueBtn = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, 1065, Ludo_Wild.popupSheet, "btn_exit0");
            this.continueBtn.anchor.setTo(0.5);
            const labelText = Ludo_Wild.Main.GAME.add.text(0, -5 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.EXIT_TO_MAINMENU), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            labelText.anchor.set(0.5);
            labelText.font = Ludo_Wild.Main.FONT;
            this.continueBtn.addChild(labelText);
            if (!segadroid.isBattleGame()) {
                this.continueBtn.inputEnabled = true;
                this.continueBtn.events.onInputDown.add(() => {
                    this.continueBtn.loadTexture(Ludo_Wild.popupSheet, "btn_exit1");
                });
                this.continueBtn.events.onInputDown.add(this.onExitClick.bind(this), this);
            }
            else {
                this.continueBtn.visible = false;
                labelText.visible = false;
            }
        }
        ;
        onExitClick(_context) {
            //alert('okkkk')
            radio('exitGame').broadcast({});
            segadroid.setState({
                state: "over",
                metadata: oMetaManager.meta
            });
            try {
                this.destroy();
            }
            catch (e) {
            }
            Ludo_Wild.Main.GAME.state.start('Home');
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
        }
        destroy() {
            this.bgTintImage.destroy();
            this.gameoverPanel.destroy();
            this.leaderboardGroup.destroy();
            if (this.isPlayerWinner()) {
                this.crownAnimation.stop();
                this.crown.destroy();
                this.winnerTrumpetGroup.destroy();
                this.crownGlow.destroy();
            }
            else {
                this.sadEmoji.destroy();
                this.sadEmojiAnimation.stop();
                this.LoserTrumpetGroup.destroy();
            }
            this.continueBtn.destroy();
        }
        isGeneralOnline() {
            if (this.gameData.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || this.gameData.gameMode
                === Ludo_Wild.gameMode.RANDOM_ONLINE || this.gameData.gameMode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return true;
            }
            return false;
        }
        getSDKWinnerBroadcastObject() {
            let battleScoreList = [];
            console.log(this.gameData.data);
            for (const key in this.gameData.data) {
                if (Object.prototype.hasOwnProperty.call(this.gameData.data, key)) {
                    battleScoreList.push({
                        score: 5 - parseInt(key), playId: this.gameData.data[key].playId
                    });
                }
            }
            console.log("scoreList", battleScoreList, Ludo_Wild.getMatchCredentials().matchId);
            return {
                matchId: Ludo_Wild.getMatchCredentials().matchId,
                scores: battleScoreList,
                eventName: "winner"
            };
        }
    }
    Ludo_Wild.GameOver = GameOver;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class GameOverBlitz {
        constructor(_gameData) {
            this.bgTintImage = null;
            this.gameData = { gameMode: null, totalPlayers: null, place: null, data: null, isGameOver: false, matchType: "" };
            this.isActive = false;
            this.gameData = _gameData;
            window.setTimeout(this.show.bind(this, _gameData), 500);
        }
        show(_gameData) {
            if (!radio.$.channels["gameReadyGameover"]) {
                radio("gameReadyGameover").subscribe([this.onClickContinue, this]);
            }
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEOVER;
            this.gameData = {
                gameMode: null, totalPlayers: null, place: null, data: null,
                isGameOver: false, matchType: ""
            };
            this.gameData = _gameData;
            this.setTint();
            Manager.AudioManager.getAudioInstance().playGameOver();
            this.createBgGlow();
            this.createGameoverPanel();
        }
        ;
        setTint() {
            this.bgTintImage = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
        }
        ;
        isPlayerWinner() {
            let isWinner = false;
            let prizeLength = 1;
            if (segadroid.isBattleGame()) {
                prizeLength = Ludo_Wild.prizeList.length === 0 ? 1 : Ludo_Wild.prizeList.length;
            }
            if (this.gameData.place <= prizeLength) {
                isWinner = true;
            }
            return isWinner;
        }
        ;
        createGameoverPanel() {
            this.gameoverPanel = Ludo_Wild.Main.GAME.add.group();
            this.gameoverPanel.scale.setTo(0, 0);
            this.gameoverPanel.position.setTo(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY);
            const isWinner = this.isPlayerWinner();
            this.addBaseBoard(isWinner);
            this.createLeaderboard(isWinner);
            this.createYouRankLabel();
            this.animateGameoverPanel(isWinner);
            this.createGameOverButtons();
            this.createReasonToast(isWinner);
            segadroid.setState({
                state: "over",
                score: 5 - this.gameData.place
            });
            if (segadroid.isBattleGame()) {
                Ludo_Wild.BattleManager.replayScene = Ludo_Wild.BattleReplayScene.Gameover;
                const winnerData = this.getSDKWinnerBroadcastObject();
                window.setTimeout(() => {
                    segadroid.broadcastWinner(winnerData);
                }, 2000);
            }
        }
        ;
        addBaseBoard(isWinner) {
            let imageIndex = "";
            if (this.gameData.totalPlayers === 3) {
                imageIndex = "-2";
            }
            else if (this.gameData.totalPlayers === 4) {
                imageIndex = "-3";
            }

            const gameoverBoardTexture = isWinner ? "popup-you-won" + imageIndex : "popup-you-lost" + imageIndex;
            const baseBoard = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.blitzSheet, gameoverBoardTexture);
            baseBoard.anchor.setTo(0.5);
            this.gameoverPanel.addChild(baseBoard);
        }
        ;
        animateGameoverPanel(isWinner) {
            const bounceTween = Ludo_Wild.Main.GAME.add.tween(this.gameoverPanel.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out);
            bounceTween.start().onComplete.add(() => {
                this.startLeaderboardAnimation();
            });
            if (isWinner) {
                const glowTween = Ludo_Wild.Main.GAME.add.tween(this.bgGlow.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out);
                glowTween.start().onComplete.add(() => {

                    Ludo_Wild.Main.GAME.add.tween(this.bgGlow).to({ angle: 365 }, 20000, Phaser.Easing.Linear.In, true, 0, -1);
                    this.bgGlowEmitter.flow(5000, 500, 5, -1);
                });
            }
        }
        ;
        createLeaderboard(isWinner) {
            let yOffset = 55;
            if (this.gameData.totalPlayers === 3) {
                yOffset = -5;
            }
            else if (this.gameData.totalPlayers === 4) {
                yOffset = -60;
            }
            this.leaderboardGroup = Ludo_Wild.Main.GAME.add.group();
            this.leaderboardGroup.position.set(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY + yOffset);
            for (let i = 0; i < this.gameData.totalPlayers; i++) {
                let isSelf = false;
                let stripe_type = "strip-2";
                if (this.gameData.place - 1 === i) {
                    isSelf = true;
                    stripe_type = "strip-1";
                }
                let score = this.gameData.data[i + 1].score || 0;
                const rankSlab = this.createRankSlab(isSelf, stripe_type, i + 1, this.gameData.data[i + 1].name, score.toString());
                rankSlab.y = (i * 120);
                rankSlab.anchor.setTo(0.5);
                this.leaderboardGroup.add(rankSlab);
            }
        }
        ;
        createRankSlab(self, stripe, rank, name, score) {

            let textColor = "#463047";
            if (self) {
                name = "YOU";
            }
            const rankSlab = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.blitzSheet, stripe);
            const rankText = Ludo_Wild.Main.GAME.add.text((-480 / 2) + 20 + (Ludo_Wild.Home.textYgap * -20), 0, rank + ".", { font: "26px KG", fill: textColor });
            rankText.anchor.setTo(0, 0.5);
            const nameText = Ludo_Wild.Main.GAME.add.text((-480 / 2) + 50 + (Ludo_Wild.Home.textYgap * -20), 0, name.toUpperCase(), { font: "26px KG", fill: textColor });
            nameText.anchor.setTo(0, 0.5);
            const scoreText = Ludo_Wild.Main.GAME.add.text(480 / 2 - 50 + (Ludo_Wild.Home.textYgap * -20), 0, score.toString(), { font: "26px KG", fill: textColor });
            scoreText.anchor.setTo(0, 0.5);
            rankSlab.addChild(rankText);
            rankSlab.addChild(nameText);
            rankSlab.addChild(scoreText);
            rankSlab.alpha = 0;
            return rankSlab;
        }
        ;
        startLeaderboardAnimation() {
            const groupLength = this.gameData.totalPlayers;
            for (let i = 0; i < groupLength; i++) {
                const tween = Ludo_Wild.Main.GAME.add.tween(this.leaderboardGroup.getChildAt(i)).to({ alpha: 1 }, 200,

                    Phaser.Easing.Linear.In, true, i * 200);
                if (i === groupLength - 1) {
                    tween.onComplete.add(() => {
                        this.leaderboardGroup.getChildAt(i).alpha = 1;
                    });
                }
            }
        }
        ;
        onClickContinue() {
            console.warn("Subscribed to clickContinue");
            Analytics.Gama.send(Analytics.MESSAGE.BATTLE_REPLAY_MATCH);

            radio('exitGame').broadcast(true);
            Ludo_Wild.Main.GAME.state.restart(true, false, Ludo_Wild.playerBattleData, true);
        }
        ;
        destroy() {
            this.bgTintImage.destroy();
            this.gameoverPanel.destroy();
            this.leaderboardGroup.destroy();
            this.continueBtn.destroy();
            if (this.reasonToast) {
                this.reasonToast.destroy();
            }
            if (this.bgGlow) {
                this.bgGlow.destroy();
            }
            if (this.bgGlowEmitter) {
                this.bgGlowEmitter.destroy();
            }
        }
        getSDKWinnerBroadcastObject() {
            let battleScoreList = [];
            console.log(this.gameData.data);
            for (const key in this.gameData.data) {
                if (Object.prototype.hasOwnProperty.call(this.gameData.data, key)) {
                    battleScoreList.push({
                        score: 5 - parseInt(key), playId: this.gameData.data[key].playId
                    });
                }
            }
            console.log("scoreList", battleScoreList, Ludo_Wild.getMatchCredentials().matchId);
            return {
                matchId: Ludo_Wild.getMatchCredentials().matchId,
                scores: battleScoreList,
                eventName: "winner"
            };
        }
        createYouRankLabel() {
            const rankLabel = Ludo_Wild.Main.GAME.add.text(0, -145, "YOUR RANK: " + this.gameData.place + "/" +
                this.gameData.totalPlayers, { font: "26px KG", fill: "#463047" });

            if (this.gameData.totalPlayers === 3) {
                rankLabel.y -= 55;
            }
            else if (this.gameData.totalPlayers === 4) {
                rankLabel.y -= 110;
            }
            rankLabel.anchor.setTo(0.5);
            this.gameoverPanel.addChild(rankLabel);
        }
        createBgGlow() {
            this.bgGlow = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 100, Ludo_Wild.blitzSheet, "celebration_god_rays");
            this.bgGlow.alpha = 0.5;
            this.bgGlow.anchor.setTo(0.5, 0.5);
            this.bgGlow.scale.setTo(0, 0);
            this.bgGlowEmitter = Ludo_Wild.Main.GAME.add.emitter(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY - 100, 250);
            this.bgGlowEmitter.makeParticles(Ludo_Wild.blitzSheet, "celebration_dot");
            this.bgGlowEmitter.minParticleSpeed.setTo(-350, -350);
            this.bgGlowEmitter.maxParticleSpeed.setTo(350, 350);
            this.bgGlowEmitter.maxParticleScale = 1;
            this.bgGlowEmitter.minParticleScale = 0.5;
            this.bgGlowEmitter.gravity.setTo(0, 0);
            this.bgGlowEmitter.setAlpha(0.6, 0.8);
        }
        createGameOverButtons() {
            this.createNonBattleGameOverButtons();
        }
        ;
        createNonBattleGameOverButtons() {
            this.continueBtn = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, 1065, Ludo_Wild.blitzSheet, "btn_home");
            this.continueBtn.anchor.setTo(0.5);
            if (this.gameData.totalPlayers === 4) {
                this.continueBtn.y += this.continueBtn.height;
            }
            if (!segadroid.isBattleGame()) {
                this.continueBtn.inputEnabled = true;
                this.continueBtn.events.onInputDown.add(this.onExitClick.bind(this), this);
            }
            else {
                this.continueBtn.visible = false;
            }
        }
        ;
        onExitClick(_context) {
            Ludo_Wild.Main.GAME.add.tween(this.continueBtn.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)
                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {
                    radio('exitGame').broadcast({});
                    segadroid.setState({
                        state: "over",
                        metadata: oMetaManager.meta
                    });
                    try {
                        this.destroy();
                    }
                    catch (e) {
                    }
                    Ludo_Wild.Main.GAME.state.start('Home');
                    window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
                });
        }
        createReasonToast(isWinner) {
            let imageName = "you-won-reason-bg";
            if (!isWinner) {
                imageName = "you-lost-reason-bg";
            }
            this.reasonToast = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.height + 200, Ludo_Wild.blitzSheet, imageName);
            this.reasonToast.anchor.setTo(0.5);
            let reasonText = "TEST REASON";
            switch (this.gameData.reason) {
                case "match_abort":
                    reasonText = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_MATCH_ABORT);
                    break;
                case "reached_home":
                    if (isWinner) {
                        reasonText = "YOU " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_REACH_HOME);
                    }
                    else {
                        reasonText = "OPPONENT " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_REACH_HOME);
                    }
                    break;
                case "player_left":
                    reasonText = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_OPPONENT_LEFT);
                    break;
                case "time_over":
                    reasonText = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_TIMEOVER);
                    break;
                case "turn_skip":
                    if (isWinner) {
                        reasonText = "OPPONENT " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_TURNS_SKIP);
                    }
                    else {
                        reasonText = "YOU " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.BLITZ_REASON_TURNS_SKIP);
                    }
                    break;
                default:
                    break;
            }
            const reasonLabelText = Ludo_Wild.Main.GAME.add.text(0, 0, reasonText, { font: (24 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            reasonLabelText.anchor.setTo(0.5, 0.5);
            reasonLabelText.font = Ludo_Wild.Main.FONT;
            this.reasonToast.addChild(reasonLabelText);

            Ludo_Wild.Main.GAME.add.tween(this.reasonToast).to({ y: Ludo_Wild.Main.GAME.world.height - 100 }, 500, Phaser.Easing.Linear.Out, true)
                .onComplete.add(() => {

                    Ludo_Wild.Main.GAME.add.tween(this.reasonToast).to({ y: Ludo_Wild.Main.GAME.world.height + 200 }, 500, Phaser.Easing.Linear.Out, true, 2000);
                });
        }
    }
    Ludo_Wild.GameOverBlitz = GameOverBlitz;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    let TEXTS;
    (function (TEXTS) {
        TEXTS[TEXTS["HOME"] = 0] = "HOME";
        TEXTS[TEXTS["LOBBY"] = 1] = "LOBBY";
        TEXTS[TEXTS["GAME_STARTED"] = 2] = "GAME_STARTED";
        TEXTS[TEXTS["YOUR_TURN"] = 3] = "YOUR_TURN";
        TEXTS[TEXTS["NETWORK_AVAILABLE"] = 4] = "NETWORK_AVAILABLE";
        TEXTS[TEXTS["NETWORK_NOT_AVAILABLE"] = 5] = "NETWORK_NOT_AVAILABLE";
        TEXTS[TEXTS["REACHED_HOME"] = 6] = "REACHED_HOME";
        TEXTS[TEXTS["TURN_AGAIN"] = 7] = "TURN_AGAIN";
        TEXTS[TEXTS["PICK_ANY_TOKEN"] = 8] = "PICK_ANY_TOKEN";
        TEXTS[TEXTS["JOINED_NOW"] = 9] = "JOINED_NOW";
        TEXTS[TEXTS["ROOM_ID"] = 10] = "ROOM_ID";
        TEXTS[TEXTS["ENTER_ROOM_ID"] = 11] = "ENTER_ROOM_ID";
        TEXTS[TEXTS["WAITING_FOR_FRIENDS"] = 12] = "WAITING_FOR_FRIENDS";
        TEXTS[TEXTS["NETWORK_FAILURE"] = 13] = "NETWORK_FAILURE";
        TEXTS[TEXTS["SINGLE_LEADERBOARD"] = 14] = "SINGLE_LEADERBOARD";
        TEXTS[TEXTS["MULTI_LEADERBOARD"] = 15] = "MULTI_LEADERBOARD";
        TEXTS[TEXTS["TOTAL_LEADERBOARD"] = 16] = "TOTAL_LEADERBOARD";
        TEXTS[TEXTS["RANK"] = 17] = "RANK";
        TEXTS[TEXTS["NAME"] = 18] = "NAME";
        TEXTS[TEXTS["WINS"] = 19] = "WINS";
        TEXTS[TEXTS["BRONZE"] = 20] = "BRONZE";
        TEXTS[TEXTS["SILVER"] = 21] = "SILVER";
        TEXTS[TEXTS["GOLD"] = 22] = "GOLD";
        TEXTS[TEXTS["PLATINUM"] = 23] = "PLATINUM";
        TEXTS[TEXTS["DIAMOND"] = 24] = "DIAMOND";
        TEXTS[TEXTS["PROFILE"] = 25] = "PROFILE";
        TEXTS[TEXTS["LEVEL"] = 26] = "LEVEL";
        TEXTS[TEXTS["MATCH_WON"] = 27] = "MATCH_WON";
        TEXTS[TEXTS["MATCH_LOST"] = 28] = "MATCH_LOST";
        TEXTS[TEXTS["YOU_LOST"] = 29] = "YOU_LOST";
        TEXTS[TEXTS["YOU_WON"] = 30] = "YOU_WON";
        TEXTS[TEXTS["YOU_SECOND"] = 31] = "YOU_SECOND";
        TEXTS[TEXTS["YOU_THIRD"] = 32] = "YOU_THIRD";
        TEXTS[TEXTS["TAP_TO_JOIN"] = 33] = "TAP_TO_JOIN";
        TEXTS[TEXTS["DAILY_BONUS"] = 34] = "DAILY_BONUS";
        TEXTS[TEXTS["PLAY_TO_CLAIM"] = 35] = "PLAY_TO_CLAIM";
        TEXTS[TEXTS["DAY"] = 36] = "DAY";
        TEXTS[TEXTS["CLAIM"] = 37] = "CLAIM";
        TEXTS[TEXTS["SIN_PLAY"] = 38] = "SIN_PLAY";
        TEXTS[TEXTS["LOCAL_PLAY"] = 39] = "LOCAL_PLAY";
        TEXTS[TEXTS["ONLINE_PLAY"] = 40] = "ONLINE_PLAY";
        TEXTS[TEXTS["WITH_FRIENDS_PLAY"] = 41] = "WITH_FRIENDS_PLAY";
        TEXTS[TEXTS["SOUND"] = 42] = "SOUND";
        TEXTS[TEXTS["MUSIC"] = 43] = "MUSIC";
        TEXTS[TEXTS["CHOOSE_PLAYERS"] = 44] = "CHOOSE_PLAYERS";
        TEXTS[TEXTS["CHOOSE_COLOR"] = 45] = "CHOOSE_COLOR";
        TEXTS[TEXTS["CONTINUE_WATCH"] = 46] = "CONTINUE_WATCH";
        TEXTS[TEXTS["EXIT_TO_MAINMENU"] = 47] = "EXIT_TO_MAINMENU";
        TEXTS[TEXTS["START"] = 48] = "START";
        TEXTS[TEXTS["JOIN"] = 49] = "JOIN";
        TEXTS[TEXTS["INVITE"] = 50] = "INVITE";
        TEXTS[TEXTS["NEXT"] = 51] = "NEXT";
        TEXTS[TEXTS["EXIT_GAME"] = 52] = "EXIT_GAME";
        TEXTS[TEXTS["EXIT_LOBBY"] = 53] = "EXIT_LOBBY";
        TEXTS[TEXTS["NO"] = 54] = "NO";
        TEXTS[TEXTS["YES"] = 55] = "YES";
        TEXTS[TEXTS["TOKEN_TAKEN"] = 56] = "TOKEN_TAKEN";
        TEXTS[TEXTS["HOUSEFULL"] = 57] = "HOUSEFULL";
        TEXTS[TEXTS["ALREADY_STARTED"] = 58] = "ALREADY_STARTED";
        TEXTS[TEXTS["EXPIRED"] = 59] = "EXPIRED";
        TEXTS[TEXTS["ID_UNAVAILABLE"] = 60] = "ID_UNAVAILABLE";
        TEXTS[TEXTS["NOT_ENOUGH_CHIPS"] = 61] = "NOT_ENOUGH_CHIPS";
        TEXTS[TEXTS["LEFT_GAME"] = 62] = "LEFT_GAME";
        TEXTS[TEXTS["LEFT"] = 63] = "LEFT";
        TEXTS[TEXTS["LOADING"] = 64] = "LOADING";
        TEXTS[TEXTS["WAITING"] = 65] = "WAITING";
        TEXTS[TEXTS["DEVELOPED"] = 66] = "DEVELOPED";
        TEXTS[TEXTS["CHOSE_TABLE"] = 67] = "CHOSE_TABLE";
        TEXTS[TEXTS["FINDING_OTHERS"] = 68] = "FINDING_OTHERS";
        TEXTS[TEXTS["SOCIAL"] = 69] = "SOCIAL";
        TEXTS[TEXTS["GLOBAL"] = 70] = "GLOBAL";
        TEXTS[TEXTS["LEVELUP"] = 71] = "LEVELUP";
        TEXTS[TEXTS["LANG"] = 72] = "LANG";
        TEXTS[TEXTS["SENDING_LOBBY"] = 73] = "SENDING_LOBBY";
        TEXTS[TEXTS["WAIT_PICK_COLOR"] = 74] = "WAIT_PICK_COLOR";
        TEXTS[TEXTS["LOGIN"] = 75] = "LOGIN";
        TEXTS[TEXTS["LOGGING_IN"] = 76] = "LOGGING_IN";
        TEXTS[TEXTS["ENTER_NAME"] = 77] = "ENTER_NAME";
        TEXTS[TEXTS["TAP_GUEST"] = 78] = "TAP_GUEST";
        TEXTS[TEXTS["SINGLEPLAYER_MODE"] = 79] = "SINGLEPLAYER_MODE";
        TEXTS[TEXTS["WINNER_GET_CHIPS"] = 80] = "WINNER_GET_CHIPS";
        TEXTS[TEXTS["BEST_LUDO"] = 81] = "BEST_LUDO";
        TEXTS[TEXTS["PLAY_EVERYDAY"] = 82] = "PLAY_EVERYDAY";
        TEXTS[TEXTS["MULTI_OFFLINE_MODE"] = 83] = "MULTI_OFFLINE_MODE";
        TEXTS[TEXTS["FACE_TO_FACE"] = 84] = "FACE_TO_FACE";
        TEXTS[TEXTS["ONLINE_FRIENDS_MODE"] = 85] = "ONLINE_FRIENDS_MODE";
        TEXTS[TEXTS["PLAY_WITH_FRIENDS"] = 86] = "PLAY_WITH_FRIENDS";
        TEXTS[TEXTS["RANDOM_ONLINE_MODE"] = 87] = "RANDOM_ONLINE_MODE";
        TEXTS[TEXTS["PLAY_WITH_OTHERS"] = 88] = "PLAY_WITH_OTHERS";
        TEXTS[TEXTS["CURRENT_CHIPS"] = 89] = "CURRENT_CHIPS";
        TEXTS[TEXTS["NETWORK_SLOW"] = 90] = "NETWORK_SLOW";
        TEXTS[TEXTS["MATCH_LIVE"] = 91] = "MATCH_LIVE";
        TEXTS[TEXTS["NO_DATA_AVAIL"] = 92] = "NO_DATA_AVAIL";
        TEXTS[TEXTS["ERROR_ADS"] = 93] = "ERROR_ADS";
        TEXTS[TEXTS["BATTLE_MODE"] = 94] = "BATTLE_MODE";
        TEXTS[TEXTS["REPLAY"] = 95] = "REPLAY";
        TEXTS[TEXTS["FIND_PLAYER_SPLASH"] = 96] = "FIND_PLAYER_SPLASH";
        TEXTS[TEXTS["EMPTY_TEXT"] = 97] = "EMPTY_TEXT";
        TEXTS[TEXTS["MATCH_NOT_FOUND"] = 98] = "MATCH_NOT_FOUND";
        TEXTS[TEXTS["GO_BACK_segadroid"] = 99] = "GO_BACK_segadroid";
        TEXTS[TEXTS["REPLAY_FOR"] = 100] = "REPLAY_FOR";
        TEXTS[TEXTS["RETRY_FOR"] = 101] = "RETRY_FOR";
        TEXTS[TEXTS["THREE_SKIPS"] = 102] = "THREE_SKIPS";
        TEXTS[TEXTS["INSTALL_LUDO"] = 103] = "INSTALL_LUDO";
        TEXTS[TEXTS["PLAYER_FOUND"] = 104] = "PLAYER_FOUND";
        TEXTS[TEXTS["PLAYERS_FOUND"] = 105] = "PLAYERS_FOUND";
        TEXTS[TEXTS["LOBBY_TIMEOUT_BATTLE"] = 106] = "LOBBY_TIMEOUT_BATTLE";
        TEXTS[TEXTS["SEARCHING_MORE_PLAYERS"] = 107] = "SEARCHING_MORE_PLAYERS";
        TEXTS[TEXTS["NO_ROOM_FOUND_FRIENDS"] = 108] = "NO_ROOM_FOUND_FRIENDS";
        TEXTS[TEXTS["DUPLICATE_JOIN"] = 109] = "DUPLICATE_JOIN";
        TEXTS[TEXTS["CONNECTING"] = 110] = "CONNECTING";
        TEXTS[TEXTS["TALK_TO_PLAYERS"] = 111] = "TALK_TO_PLAYERS";
        TEXTS[TEXTS["INCOMING_CALL"] = 112] = "INCOMING_CALL";
        TEXTS[TEXTS["CANT_CONNECT_CALL"] = 113] = "CANT_CONNECT_CALL";
        TEXTS[TEXTS["TAP_TO_CHANGE"] = 114] = "TAP_TO_CHANGE";
        TEXTS[TEXTS["SHARE"] = 115] = "SHARE";
        TEXTS[TEXTS["MUTE"] = 116] = "MUTE";
        TEXTS[TEXTS["UNMUTE"] = 117] = "UNMUTE";
        TEXTS[TEXTS["TAP_TO_TALK"] = 118] = "TAP_TO_TALK";
        TEXTS[TEXTS["PICKING_UP"] = 119] = "PICKING_UP";
        TEXTS[TEXTS["LUDO_DASH_PLAY"] = 120] = "LUDO_DASH_PLAY";
        TEXTS[TEXTS["BLITZ_TURN_SKIP_1"] = 121] = "BLITZ_TURN_SKIP_1";
        TEXTS[TEXTS["BLITZ_TURN_SKIP_2"] = 122] = "BLITZ_TURN_SKIP_2";
        TEXTS[TEXTS["BLITZ_REASON_TIMEOVER"] = 123] = "BLITZ_REASON_TIMEOVER";
        TEXTS[TEXTS["BLITZ_REASON_OPPONENT_LEFT"] = 124] = "BLITZ_REASON_OPPONENT_LEFT";
        TEXTS[TEXTS["BLITZ_REASON_REACH_HOME"] = 125] = "BLITZ_REASON_REACH_HOME";
        TEXTS[TEXTS["BLITZ_REASON_TURNS_SKIP"] = 126] = "BLITZ_REASON_TURNS_SKIP";
        TEXTS[TEXTS["BLITZ_REASON_MATCH_ABORT"] = 127] = "BLITZ_REASON_MATCH_ABORT";
    })(TEXTS = Ludo_Wild.TEXTS || (Ludo_Wild.TEXTS = {}));
    ;
    class LanguageManager {
        constructor() {
            this.EN_US = [];
            this.HINDI = [];
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                Ludo_Wild.Main.FONT = "KG";
                Ludo_Wild.Main.FONTSIZE = 0;
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                Ludo_Wild.Main.FONT = " Noto Sans";
                Ludo_Wild.Main.FONTSIZE = 10;
            }
            this.setUp_EN_US();
            this.setUp_HINDI();
        }
        ;
        static getLangInstance() {
            if (this.langMgrInst === null) {
                this.langMgrInst = new LanguageManager();
            }
            return this.langMgrInst;
        }
        getTokenKilledText(name1, name2) {
            let str;
            name1 = Ludo_Wild.cropName(name1, 6);
            name2 = Ludo_Wild.cropName(name2, 6);
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                str = name1 + " ने " + name2 + " के गोटी को काटा!";
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                str = name1 + " KILLED " + name2 + "'S TOKEN";
            }
            return str;
        }
        ;
        youWonChips(chipAmt) {
            let str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                str = "  YOU WON " + '\t\t' + '\n' + chipAmt.toString() + " COINS!";
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                str = "आपने" + '\n' + "  " + chipAmt.toString() + " चिप्स जीते हैं ";
            }
            return str;
        }
        ;
        tableUnlock(_table) {
            let str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                str = this.EN_US[_table + 20] + " TABLE " + '\n' + "UNLOCKED !";
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                str = this.HINDI[_table + 20] + " टेबल " + " खुला !";
            }
            return str;
        }
        ;
        getText(_text) {
            let _str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                _str = this.EN_US[_text];
                Ludo_Wild.Main.FONT = "KG";
                Ludo_Wild.Main.FONTSIZE = 0;
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                _str = this.HINDI[_text];
                Ludo_Wild.Main.FONT = "Noto Sans";
                Ludo_Wild.Main.FONTSIZE = 10;
            }
            return LanguageManager.modifyTextsForBraveBrowser(_str);

        }
        ;
        getSkipText(text) {
            let _str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                _str = this.EN_US[text];
                Ludo_Wild.Main.FONT = "KG";
                Ludo_Wild.Main.FONTSIZE = 0;
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    _str = _str.replace("5 CONSECUTIVE", "3");
                }
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                _str = this.HINDI[text];
                Ludo_Wild.Main.FONT = "Noto Sans";
                Ludo_Wild.Main.FONTSIZE = 10;
                if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                    _str = _str.replace("लगातार 5", "3");
                }
            }
            return _str;
        }
        sendMsgToPlayer(_name) {
            let _str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                _str = "SENDING TO " + _name;
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                _str = _name + " को भेजें";
            }
            return _str;
        }
        ;
        chooseTableOnLoby(_name, _table) {
            let _str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                _str = _name + " CHOSE " + this.EN_US[_table + 20] + " TABLE";
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                _str = _name + " ने " + this.HINDI[_table + 20] + " टेबल चुना";
            }
            return _str;
        }
        ;
        getTickerTableString(_table) {
            let str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                if (_table === 5) {
                    str = "TABLE : " + "NONE";
                }
                else {
                    str = "TABLE : " + this.EN_US[_table + 20];
                }
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                if (_table === 5) {
                    str = "टेबल : " + "कोई नहीं";
                }
                else {
                    str = "टेबल : " + this.HINDI[_table + 20];
                }
            }
            return str;
        }
        getLoadingProgressString(progress) {
            let str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                str = "LOADING ASSETS " + progress + "% ...";
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                str = "खेल लोड हो रहा है " + progress + "% ...";
            }
            return str;
        }
        ;
        rankWinnerText(_rank) {
            let str;
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                if (_rank === 1) {
                    str = "1st PRIZE WINNER WILL GET ";
                }
                else if (_rank === 2) {
                    str = "2nd PRIZE WINNER WILL GET ";
                }
                else if (_rank === 3) {
                    str = "3RD PRIZE WINNER WILL GET ";
                }
            }
            else if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.HINDI) {
                if (_rank === 1) {
                    str = "पहला पुरस्कार विजेता मिलेगा ";
                }
                else if (_rank === 2) {
                    str = "दूसरा पुरस्कार विजेता मिलेगा ";
                }
                else if (_rank === 3) {
                    str = "तीसरा पुरस्कार विजेता मिलेगा ";
                }
            }
            return str;
        }
        ;
        static modifyTextsForBraveBrowser(s) {
            if (Ludo_Wild.Home._isBrave) {
                var str = s.replace("\n", "");
                str = str.replace("\t", "");
                return str;
            }
            return s;
        }
        setUp_EN_US() {
            this.EN_US = ["HOME",
                "LOBBY",
                "GAME STARTED",
                ", YOUR TURN.",
                "",
                "",
                " 'S TOKEN REACHED HOME.",
                ", YOUR TURN AGAIN.",
                ", PICK ANY TOKEN.",
                " JOINED NOW",
                "",
                "",
                "",
                "",
                "",
                "",
                "TOTAL",
                "RANK",
                "NAME",
                "WINS",
                "BRONZE",
                "SILVER",
                "GOLD",
                "PLATINUM",
                "DIAMOND",
                "PROFILE",
                "LEVEL ",
                "MATCHES WON",
                "MATCHES LOST",
                "YOU LOST !",
                "YOU WON",
                "YOU CAME 2ND",
                "YOU CAME 3RD",
                "TAP HERE TO JOIN ANOTHER ROOM",
                "DAILY BONUS",
                "PLAY EVERYDAY TO CLAIM YOUR DAILY REWARDS!",
                "DAY",
                "CLAIM",
                "",
                "",
                "",
                "",
                "SOUND",
                "MUSIC",
                "SELECT NUMBER OF PLAYERS",
                "CHOOSE COLOR",
                "CONTINUE" + '\n' + "WATCHING",
                "EXIT TO MAIN MENU",
                "PLAY",
                "JOIN",
                "INVITE",
                "NEXT",
                "ARE YOU SURE YOU" + '\n' + "WANT TO EXIT?",
                "ARE YOU SURE YOU" + '\n' + "WANT TO EXIT?",
                "NO",
                "YES",
                "TOKEN TAKEN",
                "ROOM HOUSEFULL",
                "MATCH ALREADY STARTED",
                "",
                "USERID NOT AVAILABLE",
                "NOT ENOUGH CHIPS",
                " LEFT GAME",
                " LEFT",
                "LOADING...",
                "WAITING...",
                "",
                "PICK YOUR TABLE",
                "FINDING OTHER PLAYERS",
                "SOCIAL",
                "GLOBAL",
                "LEVEL UP !",
                "ENGLISH",
                "SENDING TO LOBBY",
                "WAITING FOR FRIENDS TO PICK A COLOR",
                "LOGIN",
                "LOGGING IN...",
                "ENTER YOUR NAME",
                "TAP TO PLAY AS GUEST",
                "",
                "WINNER TO GET ",
                "BEST LUDO GAME ONLINE",
                "PLAY EVERY DAY TO GET FREE CHIPS",
                "",
                "PLAY AGAINST YOUR FRIENDS FACE TO FACE",
                "ONLINE FRIENDS MODE",
                "PLAY WITH YOUR FRIENDS ONLINE",
                "RANDOM ONLINE MODE",
                "PLAY WITH OTHER PLAYERS AROUND THE WORLD",
                "CURRENT CHIPS : ",
                "SLOW INTERNET",
                "ROOM IS BUSY",
                "NO DATA AVAILABLE",
                "UNEXPECTED ERROR, TRY AGAIN",
                "BATTLE MODE",
                "REPLAY",
                "FINDING PLAYERS",
                "",
                "NO MATCH FOUND \n YOUR AMOUNT IS REFUNDED",
                "",
                "REPLAY FOR",
                "RETRY FOR",
                "YOU WILL LOSE ON 5 CONSECUTIVE SKIPS",
                "INSTALL LUDO",
                "PLAYER FOUND",
                "PLAYERS FOUND",
                "GAME NOT STARTED \n YOUR AMOUNT IS REFUNDED",
                "SEARCHING FOR MORE PLAYERS...",
                "NO MATCH FOUND",
                "ALREADY IN LOBBY",
                "CALLING ....",
                "LETS TALK..",
                "INCOMING CALL",
                "NO RESPONSE",
                "TAP TO CHANGE",
                "SHARE",
                "MUTE",
                "UNMUTE",
                "TAP TO TALK",
                "PICKING UP",
                "LUDO DASH",
                "YOU HAVE SKIPPED A TURN",
                "IF 3 TURNS ARE SKIPPED, YOU'LL BE KICKED OUT OF THE GAME",
                "TIMEOVER",
                "OPPONENT LEFT",
                "REACHED HOME",
                "HAVE MISSED 3 TURNS",
                "MATCH ABORTED"
            ];
        }
        ;
        setUp_HINDI() { }
    }
    LanguageManager.langMgrInst = null;
    Ludo_Wild.LanguageManager = LanguageManager;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class MatchMakingBattleUI {
        constructor(info) {

            this.playerFoundCount = 0;
            this.isUIAnimationComplete = false;
            this.maskList = [];
            this.battleData = info;
            this.isUIAnimationComplete = false;

            this.createUI();
        }
        onMatchPreInit(preInitDetails) {
            this.playerFoundCount = preInitDetails.playersFound;
            this.onPlayerFoundEvent();
        }
        ;
        onMatchMakingCompleted(players) {
            this.resetLocalPlayer();
            this.createOtherPlayerProfiles(players);
        }
        ;
        destroy() {
            this.UIGroup.visible = false;
            this.UIGroup.destroy();
            for (let i = 0; i < this.maskList.length; i++) {
                if (this.maskList[i]) {
                    this.maskList[i].destroy();
                }
            }
        }
        ;
        isAnimationCompleted() {
            return this.isUIAnimationComplete;
        }
        ;
        createUI() {
            this.createBaseTray();
            this.createPlayerProfile();
            this.createPlayerSearchText();
        }
        createBaseTray() {

            this.UIGroup = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY, Ludo_Wild.popupSheet, "matchmake_popup");
            this.UIGroup.anchor.setTo(0.5);
        }
        ;
        createPlayerProfile() {
            const playerProfile = this.generatePlayerProfile(0, 0 - 100, this.battleData.battleDetails.firstName, this.battleData.battleDetails.playId, this.battleData.battleDetails.photo, true);
            this.UIGroup.addChild(playerProfile);
            this.addMask(playerProfile, 0, 0 - 100);
        }
        ;
        generatePlayerProfile(x, y, name, playId, imageUrl, isAvatarVisible) {

            const profileFrame = Ludo_Wild.Main.GAME.add.image(x, y, Ludo_Wild.arenaSheet, "profile_pic_hud");
            profileFrame.scale.setTo(2);
            profileFrame.anchor.setTo(0.5);
            const avatar = Ludo_Wild.Main.GAME.add.image(0, -2, Ludo_Wild.arenaSheet, "profile_pic_hud");
            avatar.visible = isAvatarVisible;
            if (imageUrl === undefined) {
                avatar.loadTexture(Ludo_Wild.generalSheet, "avatar_" + Phaser.Math.between(1, 5).toString());
            }
            else if (playId.match("play_anon_") !== null) {
                avatar.loadTexture(Ludo_Wild.generalSheet, imageUrl);
            }
            else {
                const loader = new Phaser.Loader(Ludo_Wild.Main.GAME);
                loader.image('havatar' + playId, imageUrl);
                loader.onLoadComplete.addOnce(this.onImageLoadComplete.bind(this, playId, avatar), this);
                loader.start();
            }
            avatar.width = 104;
            avatar.height = 109;
            avatar.anchor.setTo(0.5);
            profileFrame.addChild(avatar);
            this.createNameLabel(name, profileFrame);
            return profileFrame;
        }
        ;
        createNameLabel(name, parent) {
            const labelTray = Ludo_Wild.Main.GAME.add.image(0, 226 / 2 - 40, Ludo_Wild.popupSheet, "lobby_name_plate");
            labelTray.anchor.setTo(0.5, 0.5);
            labelTray.scale.setTo(0.8, 1);
            const nameText = Ludo_Wild.Main.GAME.add.text(0, 226 / 2 - 38 + (Ludo_Wild.Home.textYgap * -10), Ludo_Wild.trimName(name.toUpperCase()), { font: "12px KG", fill: "#ffffff" });
            nameText.anchor.setTo(0.5);

            labelTray.addChild(nameText);
            parent.addChild(labelTray);
            parent.addChild(nameText);
        }
        ;
        onImageLoadComplete(playId, avatar) {
            if (Ludo_Wild.Main.GAME.cache.checkKey(Phaser.Cache.IMAGE, 'havatar' + playId)) {
                console.log("MatchMakingBattleUI -> onImageLoadComplete -> 'havatar' + playId", 'havatar' + playId);
                avatar.loadTexture('havatar' + playId);
                avatar.width = 104;
                avatar.height = 109;
                avatar.anchor.setTo(0.5);
            }
        }
        ;
        addMask(playerProfile, x, y) {

            const profileMask = Ludo_Wild.Main.GAME.add.graphics(playerProfile.parent.position.x + x, playerProfile.parent.position.y + y - 5);
            profileMask.clear();
            profileMask.lineStyle(0);
            profileMask.beginFill(0xffffff);
            profileMask.drawCircle(0, 0, 200);
            profileMask.endFill();
            profileMask.visible = true;
            playerProfile.getChildAt(0).mask = profileMask;
            this.maskList.push(profileMask);

        }
        ;
        createPlayerSearchText() {

            const playerSearchText = Ludo_Wild.Main.GAME.add.text(0, 150 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.FINDING_OTHERS) + "...", { font: (35 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            playerSearchText.font = Ludo_Wild.Main.FONT;
            playerSearchText.anchor.setTo(0.5);
            this.searchTextTween = Ludo_Wild.Main.GAME.add.tween(playerSearchText).to({ alpha: 0 }, 800, Phaser.Easing.Quadratic.In, true, 0, -1, true);
            this.UIGroup.addChild(playerSearchText);
            const playerSearchMoreText = Ludo_Wild.Main.GAME.add.text(0, 275 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.SEARCHING_MORE_PLAYERS), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            playerSearchMoreText.font = Ludo_Wild.Main.FONT;
            playerSearchMoreText.anchor.setTo(0.5);
            playerSearchMoreText.visible = false;
            this.UIGroup.addChild(playerSearchMoreText);
        }
        ;
        onPlayerFoundEvent() {
            const searchText = this.UIGroup.getChildAt(1);

            if (this.playerFoundCount === 1) {
                searchText.text = this.playerFoundCount + " " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.PLAYER_FOUND);
                this.renderSearchingForMorePlayers();
            }
            else if (this.playerFoundCount > 1) {
                searchText.text = this.playerFoundCount + " " + Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.PLAYERS_FOUND);
                this.renderSearchingForMorePlayers();
            }
        }
        ;
        renderSearchingForMorePlayers() {
            const playerSearchMoreText = this.UIGroup.getChildAt(2);
            playerSearchMoreText.visible = true;
        }
        ;
        resetLocalPlayer() {

            this.searchTextTween.stop();

            this.UIGroup.getChildAt(1).visible = false;
            this.UIGroup.getChildAt(2).visible = false;
            Ludo_Wild.Main.GAME.add.tween(this.UIGroup.getChildAt(0)).to({ y: -1041 / 2 + 220 }, 150, Phaser.Easing.Quadratic.Out, true, 0, 0).onComplete.add(() => {
                const parent = this.UIGroup.getChildAt(0);

                parent.getChildAt(0).mask.reset(this.UIGroup.position.x, this.UIGroup.position.y + (-1041 / 2 + 220) - 5);
            });
        }
        ;
        createOtherPlayerProfiles(players) {
            //alert('ok')
            console.log("MatchMakigBattleUI -> createOtherPlayerProfiles -> players", players);
            const vsText = Ludo_Wild.Main.GAME.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), "VS", { font: "60px KG", fill: "#ffffff" });
            vsText.anchor.setTo(0.5);
            vsText.setShadow(2, 2, "#000000", 2);
            const tween1 = Ludo_Wild.Main.GAME.add.tween(vsText.scale).to({ x: 1.5, y: 1.5 }, 500, Phaser.Easing.Quadratic.Out, true, 0, -1, true);
            this.UIGroup.addChild(vsText);

            switch (players.length) {
                case 1:
                    this.renderOnePlayerProfile(players[0]);
                    break;
                case 2:
                    this.renderTwoPlayerProfile(players[0], players[1]);
                    break;
                case 3:
                    this.renderThreePlayerProfile(players[0], players[1], players[2]);
                    break;
            }
        }
        ;
        renderOnePlayerProfile(player2) {
            const playerProfile = this.generatePlayerProfile(0, 1041 / 2 - 300, player2.firstName, player2.playId, player2.photo, false);
            playerProfile.scale.setTo(0);
            this.UIGroup.addChild(playerProfile);
            this.addMask(playerProfile, 0, 1041 / 2 - 300);

            window.setTimeout(() => {
                this.isUIAnimationComplete = true;
            }, 180);
            Ludo_Wild.Main.GAME.add.tween(playerProfile.scale).to({ x: 2, y: 2 }, 150, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {
                try {
                    playerProfile.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }
            });
        }
        ;
        renderTwoPlayerProfile(player2, player3) {
            const playerProfile1 = this.generatePlayerProfile(200, 1041 / 2 - 300, player2.firstName, player2.playId, player2.photo, false);
            playerProfile1.scale.setTo(0);
            this.UIGroup.addChild(playerProfile1);
            this.addMask(playerProfile1, 200, 1041 / 2 - 300);
            window.setTimeout(() => {
                this.isUIAnimationComplete = true;
            }, 330);
            const zoomTween1 = Ludo_Wild.Main.GAME.add.tween(playerProfile1.scale).to({ x: 2, y: 2 }, 150, Phaser.Easing.Quadratic.Out);
            zoomTween1.onComplete.add(() => {
                try {
                    playerProfile1.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }
            });
            const playerProfile2 = this.generatePlayerProfile(-200, 1041 / 2 - 300, player3.firstName, player3.playId, player3.photo, false);
            playerProfile2.scale.setTo(0);
            const zoomTween2 = Ludo_Wild.Main.GAME.add.tween(playerProfile2.scale).to({ x: 2, y: 2 }, 150, Phaser.Easing.Quadratic.Out);
            zoomTween2.onComplete.add(() => {
                try {
                    playerProfile2.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }

            });
            this.UIGroup.addChild(playerProfile2);
            this.addMask(playerProfile2, -200, 1041 / 2 - 300);
            zoomTween1.chain(zoomTween2).start();
        }
        ;
        renderThreePlayerProfile(player2, player3, player4) {
            const playerProfile = this.generatePlayerProfile(0, 1041 / 2 - 300, player2.firstName, player2.playId, player2.photo, false);
            playerProfile.scale.setTo(0);
            this.UIGroup.addChild(playerProfile);
            this.addMask(playerProfile, 0, 1041 / 2 - 300);
            window.setTimeout(() => {
                this.isUIAnimationComplete = true;
            }, 480);
            const zoomTween1 = Ludo_Wild.Main.GAME.add.tween(playerProfile.scale).to({ x: 2, y: 2 }, 150, Phaser.Easing.Quadratic.Out);
            zoomTween1.onComplete.add(() => {
                try {
                    playerProfile.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }
            });
            const playerProfile1 = this.generatePlayerProfile(200, -20, player3.firstName, player3.playId, player3.photo, false);
            playerProfile1.scale.setTo(0);
            this.UIGroup.addChild(playerProfile1);
            this.addMask(playerProfile1, 200, -20);
            const zoomTween2 = Ludo_Wild.Main.GAME.add.tween(playerProfile1.scale).to({ x: 2, y: 2 }, 150, Phaser.Easing.Quadratic.Out);
            zoomTween2.onComplete.add(() => {
                try {
                    playerProfile1.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }
            });
            const playerProfile2 = this.generatePlayerProfile(-200, -20, player4.firstName, player4.playId, player4.photo, false);
            playerProfile2.scale.setTo(0);
            this.UIGroup.addChild(playerProfile2);
            this.addMask(playerProfile2, -200, -20);
            const zoomTween3 = Ludo_Wild.Main.GAME.add.tween(playerProfile2.scale).to({ x: 2, y: 2 }, 450, Phaser.Easing.Quadratic.Out);
            zoomTween3.onComplete.add(() => {
                try {
                    playerProfile2.getChildAt(0).visible = true;
                }
                catch (e) {
                    console.log(e);
                }

            });
            zoomTween1.chain(zoomTween2).start();
            zoomTween3.start();
        }
        ;
        onMatchNotFound() {

            this.UIGroup.visible = false;
            this.UIGroup2 = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.add.world.centerY, Ludo_Wild.popupSheet, "exit_popup");
            this.UIGroup2.anchor.setTo(0.5);
            const refundText = Ludo_Wild.Main.GAME.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.MATCH_NOT_FOUND), { font: (35 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            refundText.anchor.setTo(0.5);
            refundText.align = "center";
            refundText.font = Ludo_Wild.Main.FONT;
            this.UIGroup2.addChild(refundText);
            this.createMatchNotFoundButtons();
        }
        onLobbyTimeout() {
            this.UIGroup.visible = false;
            this.UIGroup2 = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.add.world.centerY, Ludo_Wild.popupSheet, "exit_popup");
            this.UIGroup2.anchor.setTo(0.5);
            const refundText = Ludo_Wild.Main.GAME.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.LOBBY_TIMEOUT_BATTLE), { font: (35 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            refundText.anchor.setTo(0.5);
            refundText.align = "center";
            refundText.font = Ludo_Wild.Main.FONT;
            this.UIGroup2.addChild(refundText);
            this.createMatchNotFoundButtons();
            if (segadroid.isBattleGame()) {
                const winnerData = this.getSDKWinnerBroadcastObject();
                window.setTimeout(() => {
                    segadroid.broadcastWinner(winnerData);
                }, 2000);
            }
        }
        ;
        getSDKWinnerBroadcastObject() {
            const battleScoreList = [];
            for (let i = 0; i < Ludo_Wild.BattleManager.playersList.length; i++) {
                battleScoreList.push({ score: 0, playId: Ludo_Wild.BattleManager.playersList[i].playId });
            }
            console.log("scoreList", battleScoreList, Ludo_Wild.getMatchCredentials().matchId);
            return {
                matchId: Ludo_Wild.getMatchCredentials().matchId,
                scores: battleScoreList,
                eventName: "winner"
            };
        }
        disposeOnMatchNotFound() {
            this.exitBtnText.destroy();

            this.UIGroup.visible = false;
            this.UIGroup2.destroy();
            if (this.UIGroup) {
                this.UIGroup.visible = false;
                this.UIGroup.destroy();
            }
        }
        createMatchNotFoundButtons() {

            this.createExitButton(1065);

        }
        ;

        createExitButton(y) {
            const yValue = y || 1220;
            this.exitBtnText = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME_WIDTH / 2, yValue + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.GO_BACK_segadroid), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.exitBtnText.anchor.set(0.5);
            this.exitBtnText.align = "center";
            this.exitBtnText.font = Ludo_Wild.Main.FONT;
            this.exitBtnText.inputEnabled = true;
            this.exitBtnText.input.priorityID = 3;
            this.exitBtnText.events.onInputUp.add(this.onExitClick.bind(this), this);
            if (segadroid.isBattleGame() || Ludo_Wild.BattleModeState.doesBattleHasBots) {
                this.exitBtnText.visible = false;
            }
        }
        onExitClick(_context) {
            try {
                this.exitBtnText.destroy();
            }
            catch (e) {
                console.log(e);
            }

            new Ludo_Wild.Buffer(Ludo_Wild.BufferType.EMPTY, Ludo_Wild.Main.GAME.world.centerX, 1200, Ludo_Wild.tintType.NORMAL, true);
        }
        onClickContinue() {
            return __awaiter(this, void 0, void 0, function* () {
                this.disposeOnMatchNotFound();
                Ludo_Wild.Main.GAME.state.restart(true, false, Ludo_Wild.playerBattleData, true);
            });
        }
        ;
    }
    Ludo_Wild.MatchMakingBattleUI = MatchMakingBattleUI;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class MatchMakingUI {
        constructor(_numofplayers) {
            this.currentPlayerCount = 0;
            this.playerProfileList = [];
            this.twoPlayerObj = {
                x1: 195, y1: Ludo_Wild.Main.GAME.world.centerY,
                x2: Ludo_Wild.Main.GAME.world.width - 195, y2: Ludo_Wild.Main.GAME.world.centerY
            };
            this.threePlayerObj = {
                x1: Ludo_Wild.Main.GAME.world.centerX, y1: Ludo_Wild.Main.GAME.world.centerY - 120,
                x2: 195, y2: Ludo_Wild.Main.GAME.world.centerY + 160,
                x3: Ludo_Wild.Main.GAME.world.width - 195, y3: Ludo_Wild.Main.GAME.world.centerY + 160,
            };
            this.fourPlayerObj = {
                x1: 195, y1: Ludo_Wild.Main.GAME.world.centerY - 120,
                x2: Ludo_Wild.Main.GAME.world.width - 195, y2: Ludo_Wild.Main.GAME.world.centerY - 120,
                x3: 195, y3: Ludo_Wild.Main.GAME.world.centerY + 160,
                x4: Ludo_Wild.Main.GAME.world.width - 195, y4: Ludo_Wild.Main.GAME.world.centerY + 160,
            };
            this.numOfPlayers = _numofplayers;
            this.createUI();
        }
        createUI() {
            this.createBg();
            this.createHeaderTxt();
        }
        createBg() {
            this.bgTray = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
            let bgTrayImg = Ludo_Wild.Main.GAME.add.image(this.bgTray.width / 2, this.bgTray.height / 2, Ludo_Wild.generalSheet, 'basetray');
            bgTrayImg.anchor.setTo(0.5, 0.5);
            if (this.numOfPlayers === 2) {

                bgTrayImg.width = 600;
                bgTrayImg.height = 650;
            }
        }
        createHeaderTxt() {
            this.customText = Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.FINDING_OTHERS);
            let _y = Ludo_Wild.Main.GAME.world.centerY - 350;
            let _x = Ludo_Wild.Main.GAME.world.centerX - 25;
            if (this.numOfPlayers === 2) {
                _y = Ludo_Wild.Main.GAME.world.centerY - 250;
                _x = Ludo_Wild.Main.GAME.world.centerX - 25;
            }
            this.headerTxt = Ludo_Wild.Main.GAME.add.text(_x, _y + (Ludo_Wild.Home.textYgap * -20), this.customText, { font: "38px KG ", fill: "#ffffff" });
            this.headerTxt.anchor.setTo(0.5, 0.5);
            this.headerTxt.font = Ludo_Wild.Main.FONT;
            this.dotText = Ludo_Wild.Main.GAME.add.text(_x + 250, _y + (Ludo_Wild.Home.textYgap * -20), "", { font: "38px", fill: "#ffffff" });
            this.dotText.font = Ludo_Wild.Main.FONT;
            this.dotText.anchor.setTo(0, 0.5);
            this.textAnimation(0);
        }
        textAnimation(animCount) {
            window.setTimeout(() => {
                ++animCount;

                if (animCount === 1) {
                    this.dotText.text = ".";
                }
                else if (animCount === 2) {
                    this.dotText.text = "..";
                }
                else if (animCount === 3) {
                    this.dotText.text = "...";
                }
                else if (animCount === 4) {
                    this.dotText.text = "....";
                }
                else {
                    animCount = 0;
                }
                this.textAnimation(animCount);
            }, 400);
        }
        countDown() {
            let offsetY = -50;
            if (this.numOfPlayers > 2) {
                offsetY = 100;
            }
            let gameStartstxt = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX, Ludo_Wild.Main.GAME.world.centerY + 300 + offsetY + (Ludo_Wild.Home.textYgap * -20), "GAME STARTS IN ", { font: "30px KG", fill: "#ffffff" });
            gameStartstxt.anchor.setTo(0.5, 0.5);
            let countDownTxt = Ludo_Wild.Main.GAME.add.text(Ludo_Wild.Main.GAME.world.centerX + 150, Ludo_Wild.Main.GAME.world.centerY + 300 + offsetY + (Ludo_Wild.Home.textYgap * -20), "3", { font: "30px KG", fill: "#ffffff" });
            countDownTxt.anchor.setTo(0.5, 0.5);
            this.countDownAnim(3, countDownTxt);
        }
        countDownAnim(count, countDowntxt) {
            if (count > 0) {
                --count;
                countDowntxt.text = count.toString();
                window.setTimeout(() => {
                    this.countDownAnim(count, countDowntxt);
                }, 1000);
            }
        }
    }
    Ludo_Wild.MatchMakingUI = MatchMakingUI;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class MessageBox {
        constructor(_config, _showOnStart = true, isBattle = false) {
            this.receiverList = [];
            this.trayArray = [];
            this.isBattleMode = false;
            this.emojiDownTimestamp = 0;
            this.isTrayVisible = false;
            this.config = _config;
            this.messageType = this.config.messageType;
            this.isBattleMode = isBattle;
            if (this.messageType === Ludo_Wild.MessageType.IN_LOBBY) {
                radio('lobbyScreenTint').broadcast(true, Ludo_Wild.tintType.MSGBOX);
                this.createMessageBox();
            }
        }
        destroy(isPermanent = false) {
            this.hideMessageBox(isPermanent);
        }
        isVisible() {
            return this.BoxImg.visible;
        }
        ;
        createMessageBox(_senderId, _receiverId, receiverName) {
            if (this.messageType === Ludo_Wild.MessageType.IN_GAME) {
                this.senderId = _senderId;
                this.receiverId = _receiverId;
            }
            this.BoxImg = Ludo_Wild.Main.GAME.add.image(this.config.x, this.config.y, Ludo_Wild.chatSheet, "chat_tray");
            if (receiverName !== undefined) {
                this.createTitleHeader(receiverName);
            }
            else {
                this.createTitleHeader();
            }
            this.createChatView();
        }
        createTitleHeader(receiverName) {
            let headerTxt;
            let colorCode;
            switch (this.config.table) {
                case Ludo_Wild.BootTable.BRONZE:
                    colorCode = "#AF4414";
                    break;
                case Ludo_Wild.BootTable.SILVER:
                    colorCode = "#5E6F8A";
                    break;
                case Ludo_Wild.BootTable.GOLD:
                    colorCode = "#AB870D";
                    break;
                case Ludo_Wild.BootTable.PLATINUM:
                    colorCode = "#A8A4D1";
                    break;
                case Ludo_Wild.BootTable.DIAMOND:
                    colorCode = "#FFFFFF";
                    break;
                default:
                    colorCode = "#FFFFFF";
                    break;
            }
            ;
            if (Ludo_Wild.Main.SCENE === Ludo_Wild.gameScenes.LOBBY) {
                headerTxt = Ludo_Wild.Main.GAME.add.text(this.BoxImg.width / 2, 42 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.SENDING_LOBBY), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
                headerTxt.font = Ludo_Wild.Main.FONT;
            }
            else {
                headerTxt = Ludo_Wild.Main.GAME.add.text(this.BoxImg.width / 2, 42 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().sendMsgToPlayer(receiverName.toUpperCase()), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
                headerTxt.font = Ludo_Wild.Main.FONT;
            }
            headerTxt.anchor.setTo(0.5, 0.5);
            this.BoxImg.addChild(headerTxt);
        }
        ;
        createChatView() {
            const parent = Ludo_Wild.Main.GAME.world;
            const bounds = new Phaser.Rectangle(10, 417 + 136, 700, 690);
            const options = {
                direction: 'y',
                searchForClicks: true,
                padding: 30

            };

            this.chatView = new PhaserListView.ListView(Ludo_Wild.Main.GAME, parent, bounds, options);
            for (let i = 0; i < 7; i++) {
                const rowItems = this.createChatGroupUI(i);
                this.chatView.add(rowItems);
            }
        }
        ;
        createChatGroupUI(_count) {
            let emojiRow;
            let emojiInc = (_count * 3);
            const _offsetX = 100;
            let _X = 2;
            if (_count > 0) {
                emojiInc += _count;
            }
            emojiRow = Ludo_Wild.Main.GAME.add.group();
            const rowX = 0;
            const rowY = _count * 10;
            for (let i = 0; i < 4; i++) {
                const emojiTray = Ludo_Wild.Main.GAME.add.image(_X, 15, Ludo_Wild.chatSheet, "emoji_tray");
                const emoji = Ludo_Wild.Main.GAME.add.image(23, 18, Ludo_Wild.chatSheet, "c" + (i + emojiInc));
                emoji.width = 128;
                emoji.height = 128;
                emoji.scale.setTo(0.8, 0.8);
                emojiTray.addChild(emoji);
                emojiTray.type = i + emojiInc;
                emojiTray.inputEnabled = true;
                emojiTray.input.priorityID = 2;
                emojiTray.events.onInputUp.add(this.onEmojiClick, this);
                this.trayArray.push(emojiTray);
                emojiRow.addChild(emojiTray);
                _X += 162 + 20;
            }
            ;
            return emojiRow;
        }
        ;
        onEmojiClick(e) {
            if (this.messageType === Ludo_Wild.MessageType.IN_LOBBY) {
                radio('lobbyScreenTint').broadcast(false);
            }
            this.onSend(e.type);
        }
        onEmojiDown(e) {
            this.emojiDownTimestamp = new Date().getTime();
        }
        ;
        optionTabClick(_context, constants) {
            if (constants === 2) {
                _context.chatView.tweenToItem(0, 1);
            }
            else {
                _context.chatView.tweenToItem(5, 1);
            }
        }
        ;
        onSend(_emojiType) {
            if (this.messageType === Ludo_Wild.MessageType.IN_LOBBY) {
                this.senderId = null;
                this.receiverId = null;
            }

            if (Ludo_Wild.Main.IS_FAKE_RANDOM) {
                radio("fakeMessageSend").broadcast({ sid: this.senderId, rid: this.receiverId, msg: _emojiType });
            }
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.SEND_MSG, data: {
                    msg: _emojiType,
                    sid: this.senderId, rid: this.receiverId
                }
            });
            this.hideMessageBox(false);
            radio('toggleProfiles').broadcast(true);
        }
        onMessageFail(data) {

            let toast = new Ludo_Wild.Toast({ x: Ludo_Wild.Main.GAME.world.centerX, y: Ludo_Wild.Main.GAME.world.height - 60, texture: "bottom_popup" });
            toast.setText(Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NOT_ENOUGH_CHIPS));
            toast.show();
        }
        ;
        addXender(_xender) {
            this.receiverList.push(_xender);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        send(message) {
            this.receiverList.forEach((_Xender) => {
                _Xender.onReceive(message);
            });
        }
        onReceive(message) {
            if (message.eventType === Engine.EventType.GAME_EVENT) {
                switch (message.event) {
                    case Ludo_Wild.GameEvents.ON_REQUEST_FAIL_MESSAGE:

                        this.onMessageFail(message.data);
                        break;
                }
            }
        }
        hideMessageBox(isPermanent) {
            if (this.messageType === Ludo_Wild.MessageType.IN_LOBBY) {
                if (!isPermanent) {
                    radio('toggleProfiles').broadcast(true);
                    radio('lobbyScreenTint').broadcast(false);
                }
            }
            else {
                radio('arenaScreenTint').broadcast(false);
            }
            this.BoxImg.visible = false;
            this.chatView.grp.visible = false;
            this.trayArray.forEach((tray) => {
                tray.inputEnabled = false;
                tray.input.priorityID = 0;
            });
        }
        ;
        show(_senderId, _receiverId, receiverName) {
            if (this.messageType === Ludo_Wild.MessageType.IN_LOBBY) {
                radio('lobbyScreenTint').broadcast(true, Ludo_Wild.tintType.MSGBOX);
            }
            else {
                radio('arenaScreenTint').broadcast(true, Ludo_Wild.tintType.MSGBOX);
            }
            if (this.messageType === Ludo_Wild.MessageType.IN_GAME) {
                this.senderId = _senderId;
                this.receiverId = _receiverId;
            }
            this.BoxImg.visible = true;
            if (receiverName !== undefined) {

                this.BoxImg.getChildAt(0).text = Ludo_Wild.LanguageManager.getLangInstance().sendMsgToPlayer(receiverName.toUpperCase());

                this.BoxImg.getChildAt(0).font = Ludo_Wild.Main.FONT;

                this.BoxImg.getChildAt(0).fontSize = (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px";
            }

            this.chatView.grp.visible = true;

            this.trayArray.forEach((tray) => {
                tray.inputEnabled = true;
            });
            radio('toggleProfiles').broadcast(false);
        }
    }
    Ludo_Wild.MessageBox = MessageBox;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class PlayerHUD {

        constructor(_hudConfig) {
            this.hudConfig = { x: 0, y: 0, quad: 0, mode: 0, color: 0, name: "Guest", avatar: 1 };
            this.chatBubbleScaleX = 1;
            this.chatBubbleScaleY = 1;
            this.voiceWaveAnimationTween = [];
            this.isVoiceActiveAnimationStarted = false;
            this.isVoiceAnimationPaused = false;
            this.createHUD(_hudConfig);
        }
        ;
        updatePointsLabel(totalPoints) {

        }
        showChatBubble(receiverName, emojiIndex) {
            clearTimeout(this.chatBubbleTimerRef);
            this.chatBubble.scale.setTo(0, 0);
            this.chatBubbleComponent.scale.setTo(0, 0);
            this.chatBubble.visible = true;
            const trimmedReceiverName = receiverName.substr(0, 8);
            if (this.hudConfig.quad === 2) {

                this.chatBubbleComponent.getChildAt(0).text = ": @" + trimmedReceiverName;
            }
            else {

                this.chatBubbleComponent.getChildAt(0).text = "@" + trimmedReceiverName + ": ";
            }

            if (emojiIndex > 27) {
                emojiIndex = 27;
            }

            this.chatBubbleComponent.getChildAt(1).loadTexture(Ludo_Wild.chatSheet, "c" + emojiIndex);
            this.chatBubbleComponent.visible = true;
            Ludo_Wild.Main.GAME.add.tween(this.chatBubble.scale).to({ x: this.chatBubbleScaleX, y: this.chatBubbleScaleY }, 500, Phaser.Easing.Bounce.Out, true);
            Ludo_Wild.Main.GAME.add.tween(this.chatBubbleComponent.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out, true);
            this.chatBubbleTimerRef = window.setTimeout(this.hideChatBubble.bind(this), 5000);
        }
        manageWaveAnimation(status) {
            if (this.voiceChatMuteStatus.visible) {
                return;
            }
            if (this.voiceActiveStatusGroup.visible === status) {
                return;
            }
            this.voiceChatBg.visible = status;
            this.voiceChatMuteStatus.visible = false;
            if (status) {
                this.runWaveAnimation();
            }
            else {
                this.stopWaveAniamtion();
            }
        }
        ;

        resetCallUI() {
            if (Ludo_Wild.isClientVoiceChatAuthorized() && this.anyGeneralOnlineMode(this.hudConfig.mode)) {
                this.voiceChatBg.visible = true;
                this.voiceChatMuteStatus.visible = true;
                this.stopWaveAniamtion(true);
            }
        }
        ;
        muteMic(isMute) {
            this.voiceChatBg.visible = isMute;
            this.stopWaveAniamtion(isMute);
            this.voiceChatMuteStatus.visible = isMute;

        }
        ;
        runWaveAnimation() {
            if (!this.isVoiceActiveAnimationStarted) {
                for (let i = 0; i < 4; i++) {
                    this.voiceWaveAnimationTween[i].start();
                }
                this.isVoiceActiveAnimationStarted = true;
            }
            else if (this.isVoiceAnimationPaused) {
                for (let i = 0; i < 4; i++) {
                    this.voiceWaveAnimationTween[i].resume();
                }
                this.isVoiceAnimationPaused = false;
            }
            this.voiceActiveStatusGroup.visible = true;
        }
        ;
        stopWaveAniamtion(isMute = false) {
            this.voiceActiveStatusGroup.visible = false;
            if (isMute) {
                for (let i = 0; i < 4; i++) {
                    if (this.voiceWaveAnimationTween[i].isRunning) {
                        this.voiceWaveAnimationTween[i].pause();
                    }
                }
                this.isVoiceAnimationPaused = true;
            }
        }
        ;
        createHUD(_hudConfig) {
            this.hudConfig = _hudConfig;
            let _scaleX = 1;
            let textureString = "HUD";
            let xOffsetName = 40;
            let xOffsetAvatar = -84;
            let yOffsetAvatar = -7;
            if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                yOffsetAvatar = -25 - 15;
            }
            if (this.hudConfig.quad > 1) {
                _scaleX = -1;
                xOffsetName = -40;
                xOffsetAvatar = 84;
            }
            textureString = "HUD" + this.hudConfig.color.toString();
            this.createNamePlate(_hudConfig, xOffsetName, textureString, _scaleX);
            this.loadPlayerProfile(xOffsetAvatar, yOffsetAvatar);
            this.createChatBubble();
        }
        ;

        loadPlayerProfile(xOffsetAvatar, yOffsetAvatar) {

            const profileFrame = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar, Ludo_Wild.arenaSheet, "profile_pic_hud");
            profileFrame.anchor.setTo(0.5);
            this.avatarImage = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "profile_pic_hud");

            const profileMask = Ludo_Wild.Main.GAME.add.graphics(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2);
            profileMask.clear();
            profileMask.lineStyle(0);
            profileMask.beginFill(0xff0000);
            profileMask.drawCircle(0, 0, 100);
            profileMask.endFill();
            profileMask.visible = true;
            this.avatarImage.mask = profileMask;

            if (this.hudConfig.avatar === undefined) {
                this.avatarImage.loadTexture(Ludo_Wild.generalSheet, "avatar_" + Phaser.Math.between(1, 2).toString());
            }
            else if (this.hudConfig.userId.match("play_anon_") !== null) {
                this.avatarImage.loadTexture(Ludo_Wild.generalSheet, this.hudConfig.avatar);
            }
            else {

                const loader = new Phaser.Loader(Ludo_Wild.Main.GAME);
                loader.image('havatar' + this.hudConfig.userId, this.hudConfig.avatar);
                loader.onLoadComplete.addOnce(this.onImageLoadComplete.bind(this), this);
                loader.start();
            }
            this.avatarImage.width = 104;
            this.avatarImage.height = 109;
            if (this.hudConfig.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                    this.avatarImage.angle = 180;
                }
            }

            if (Ludo_Wild.isClientVoiceChatAuthorized() && this.anyGeneralOnlineMode(this.hudConfig.mode)) {
                this.createVoiceChatComponents(xOffsetAvatar, yOffsetAvatar);
            }
            this.setProfilePictureAnchor();
        }
        createVoiceChatComponents(xOffsetAvatar, yOffsetAvatar) {

            this.voiceChatBg = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "wave_bg");
            this.voiceChatBg.anchor.setTo(0.5);
            this.voiceChatBg.visible = true;

            this.voiceChatMuteStatus = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "mute_icon");
            this.voiceChatMuteStatus.anchor.setTo(0.5);
            this.voiceChatMuteStatus.visible = true;

            this.createVoiceStatusGroup(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2);
            this.createWaveAnimation();
        }
        ;
        onImageLoadComplete() {
            if (Ludo_Wild.Main.GAME.cache.checkKey(Phaser.Cache.IMAGE, 'havatar' + this.hudConfig.userId)) {
                this.avatarImage.loadTexture('havatar' + this.hudConfig.userId);
                this.avatarImage.width = 104;
                this.avatarImage.height = 109;
                this.setProfilePictureAnchor();
            }
        }
        createNamePlate(_hudConfig, xOffsetName, textureString, _scaleX) {
            this.hudImage = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x, this.hudConfig.y, Ludo_Wild.arenaSheet, textureString);
            this.hudImage.anchor.setTo(0.5, 0.5);
            this.hudImage.scale.setTo(_scaleX, 1);

            const playername = Ludo_Wild.Main.GAME.add.text(this.hudConfig.x + 0, this.hudConfig.y - 7 + (Ludo_Wild.Home.textYgap * -10), this.hudConfig.name.toUpperCase(), {
                font: "22px KG",
                fill: "#ffffff"
            });
            playername.anchor.setTo(0, 0.5);
            if (this.hudConfig.quad === 0 || this.hudConfig.quad === 1) {
                playername.x = this.hudConfig.x + 20;
            }
            else {
                playername.x = this.hudConfig.x - 20;
            }
            playername.text = Ludo_Wild.cropName(this.hudConfig.name.toUpperCase());
            playername.stroke = "#000000";
            playername.strokeThickness = 1;
            playername.anchor.setTo(0.5, 0.5);
            if (this.hudConfig.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                    playername.angle = 180;
                }
            }

        }
        setProfilePictureAnchor() {
            this.avatarImage.anchor.setTo(0.5, 0.5);
        }
        createChatBubble() {

            let bubbleX;
            let bubbleY;
            let bubblComponentYOffset;
            if (this.hudConfig.quad === 0 || this.hudConfig.quad === 3) {
                bubbleX = this.hudConfig.x + 18;
                bubbleY = this.hudConfig.y - (113 / 2) - 12;
                bubblComponentYOffset = -30;
            }
            else {
                bubbleX = this.hudConfig.x + 18;
                bubbleY = this.hudConfig.y + (113 / 2) - 12;
                this.chatBubbleScaleY = -1;
                bubblComponentYOffset = -15;
            }
            if (this.hudConfig.quad === 2 || this.hudConfig.quad === 3) {
                this.chatBubbleScaleX = -1;
            }
            if (this.hudConfig.totalPlayers > 2) {
                this.chatBubble = Ludo_Wild.Main.GAME.add.image(bubbleX, bubbleY, Ludo_Wild.chatSheet, "chat_bubble");
            }
            else {
                this.chatBubble = Ludo_Wild.Main.GAME.add.image(bubbleX, bubbleY, Ludo_Wild.chatSheet, "chat_bubble_2");
            }
            this.chatBubble.anchor.setTo(0.5);
            this.chatBubble.scale.setTo(this.chatBubbleScaleX, this.chatBubbleScaleY);
            this.chatBubble.visible = false;
            let receiverNameX;
            if (this.hudConfig.quad === 2) {
                receiverNameX = 30;
            }
            else {
                receiverNameX = -30;
            }
            const receiverName = Ludo_Wild.Main.GAME.add.text(receiverNameX, 0 + bubblComponentYOffset + 25 + (Ludo_Wild.Home.textYgap * -10), "@PRABODH:", { font: "22px KG", fill: "#000000" });
            receiverName.anchor.setTo(0.5);
            if (this.hudConfig.totalPlayers === 2) {
                receiverName.visible = false;
            }
            let emojiX;
            if (this.hudConfig.totalPlayers === 2) {
                emojiX = 0;
            }
            else {
                if (this.hudConfig.quad === 2) {
                    emojiX = this.chatBubble.width / 2 + 20;
                }
                else {
                    emojiX = Math.abs(this.chatBubble.width / 2) - 30;
                }
            }
            const emoji = Ludo_Wild.Main.GAME.add.image(emojiX, 0 + bubblComponentYOffset, Ludo_Wild.chatSheet, "c5");
            emoji.scale.setTo(0.75, 0.75);
            emoji.anchor.setTo(0.5);
            this.chatBubbleComponent = Ludo_Wild.Main.GAME.add.group();
            this.chatBubbleComponent.position.setTo(this.chatBubble.x, this.chatBubble.y);
            this.chatBubbleComponent.addChild(receiverName);
            this.chatBubbleComponent.addChild(emoji);
            this.chatBubbleComponent.visible = false;
        }
        ;
        hideChatBubble() {
            Ludo_Wild.Main.GAME.add.tween(this.chatBubble.scale).to({ x: 0, y: 0 }, 300, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    this.chatBubble.visible = false;
                });
            Ludo_Wild.Main.GAME.add.tween(this.chatBubbleComponent.scale).to({ x: 0, y: 0 }, 300, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    this.chatBubbleComponent.visible = false;
                });
        }
        createVoiceStatusGroup(x, y) {
            this.voiceActiveStatusGroup = Ludo_Wild.Main.GAME.add.group();
            this.voiceActiveStatusGroup.position.set(x, y);
            let xOffset = 0;
            const waveYScale = [1, 0.65, 0.85, 0.45];
            for (let i = 0; i < 4; i++) {
                const wave = Ludo_Wild.Main.GAME.add.image(-20 + xOffset, 0, Ludo_Wild.arenaSheet, "single_wave");
                wave.anchor.setTo(0.5);
                wave.scale.set(1, waveYScale[i]);
                xOffset += 15;
                this.voiceActiveStatusGroup.addChild(wave);
            }
            this.voiceActiveStatusGroup.visible = false;
        }
        ;
        createWaveAnimation() {
            const waveYScale = [1, 0.65, 0.85, 0.45];
            for (let i = 0; i < 4; i++) {
                this.voiceWaveAnimationTween[i] = Ludo_Wild.Main.GAME.add.tween(this.voiceActiveStatusGroup.getChildAt(i).scale).to({
                    x: 1,
                    y: waveYScale[i] - 0.2
                }, 200, Phaser.Easing.Sinusoidal.InOut, false, i * 150, -1, true);
            }
        }
        anyGeneralOnlineMode(gamemode) {
            if (gamemode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || gamemode === Ludo_Wild.gameMode.RANDOM_ONLINE
                || gamemode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return true;
            }
            return false;
        }
    }
    Ludo_Wild.PlayerHUD = PlayerHUD;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class PlayerHUDBlitz {
        constructor(_hudConfig) {
            this.hudConfig = { x: 0, y: 0, quad: 0, mode: 0, color: 0, name: "Guest", avatar: 1 };
            this.chatBubbleScaleX = 1;
            this.chatBubbleScaleY = 1;
            this.voiceWaveAnimationTween = [];
            this.isVoiceActiveAnimationStarted = false;
            this.isVoiceAnimationPaused = false;
            this.points = 0;

            this.createHUD(_hudConfig);
        }
        ;
        updatePointsLabel(totalPoints) {

            let pointTween = Ludo_Wild.Main.GAME.add.tween(this).to({ points: totalPoints }, 200, Phaser.Easing.Linear.In);
            pointTween.start().onUpdateCallback((data) => {
                if (this.points < 10 || totalPoints < 10) {
                    this.pointsLabel.text = "0" + Math.floor(this.points).toString();
                }
                else {
                    if (this.points >= 100) {
                        this.pointsLabel.fontSize = "38px";
                    }
                    else {
                        this.pointsLabel.fontSize = "48px";
                    }
                    this.pointsLabel.text = Math.floor(this.points).toString();
                }
            });
            pointTween.onComplete.add(() => {
                if (totalPoints < 10) {
                    this.pointsLabel.text = "0" + totalPoints.toString();
                }
                else {
                    if (this.points >= 100) {
                        this.pointsLabel.fontSize = "38px";
                    }
                    else {
                        this.pointsLabel.fontSize = "48px";
                    }
                    this.pointsLabel.text = totalPoints.toString();
                }
                this.points = totalPoints;
            });
        }
        showChatBubble(receiverName, emojiIndex) {
            clearTimeout(this.chatBubbleTimerRef);
            this.chatBubble.scale.setTo(0, 0);
            this.chatBubbleComponent.scale.setTo(0, 0);
            this.chatBubble.visible = true;
            const trimmedReceiverName = receiverName.substr(0, 8);
            if (this.hudConfig.quad === 2) {

                this.chatBubbleComponent.getChildAt(0).text = ": @" + trimmedReceiverName;
            }
            else {

                this.chatBubbleComponent.getChildAt(0).text = "@" + trimmedReceiverName + ": ";
            }

            if (emojiIndex > 27) {
                emojiIndex = 27;
            }

            this.chatBubbleComponent.getChildAt(1).loadTexture(Ludo_Wild.chatSheet, "c" + emojiIndex);
            this.chatBubbleComponent.visible = true;
            Ludo_Wild.Main.GAME.add.tween(this.chatBubble.scale).to({ x: this.chatBubbleScaleX, y: this.chatBubbleScaleY }, 500, Phaser.Easing.Bounce.Out, true);
            Ludo_Wild.Main.GAME.add.tween(this.chatBubbleComponent.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out, true);
            this.chatBubbleTimerRef = window.setTimeout(this.hideChatBubble.bind(this), 5000);
        }
        manageWaveAnimation(status) {
            if (this.voiceChatMuteStatus.visible) {
                return;
            }
            if (this.voiceActiveStatusGroup.visible === status) {
                return;
            }
            this.voiceChatBg.visible = status;
            this.voiceChatMuteStatus.visible = false;
            if (status) {
                this.runWaveAnimation();
            }
            else {
                this.stopWaveAniamtion();
            }
        }
        ;

        resetCallUI() {
            if (Ludo_Wild.isClientVoiceChatAuthorized() && this.anyGeneralOnlineMode(this.hudConfig.mode)) {
                this.voiceChatBg.visible = true;
                this.voiceChatMuteStatus.visible = true;
                this.stopWaveAniamtion(true);
            }
        }
        ;
        muteMic(isMute) {
            this.voiceChatBg.visible = isMute;
            this.stopWaveAniamtion(isMute);
            this.voiceChatMuteStatus.visible = isMute;

        }
        ;
        runWaveAnimation() {
            if (!this.isVoiceActiveAnimationStarted) {
                for (let i = 0; i < 4; i++) {
                    this.voiceWaveAnimationTween[i].start();
                }
                this.isVoiceActiveAnimationStarted = true;
            }
            else if (this.isVoiceAnimationPaused) {
                for (let i = 0; i < 4; i++) {
                    this.voiceWaveAnimationTween[i].resume();
                }
                this.isVoiceAnimationPaused = false;
            }
            this.voiceActiveStatusGroup.visible = true;
        }
        ;
        stopWaveAniamtion(isMute = false) {
            this.voiceActiveStatusGroup.visible = false;
            if (isMute) {
                for (let i = 0; i < 4; i++) {
                    if (this.voiceWaveAnimationTween[i].isRunning) {
                        this.voiceWaveAnimationTween[i].pause();
                    }
                }
                this.isVoiceAnimationPaused = true;
            }
        }
        ;
        createHUD(_hudConfig) {
            this.hudConfig = _hudConfig;
            let _scaleX = 1;
            let textureString = "HUD";
            let xOffsetName = 40;
            let xOffsetAvatar = -84;
            let yOffsetAvatar = 25 + 5;
            if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                yOffsetAvatar = -25 - 15;
            }
            if (this.hudConfig.quad > 1) {
                _scaleX = -1;
                xOffsetName = -40;
                xOffsetAvatar = 84;
            }
            textureString = "HUD" + this.hudConfig.color.toString();
            this.createNamePlate(_hudConfig, xOffsetName, textureString, _scaleX);
            this.loadPlayerProfile(xOffsetAvatar, yOffsetAvatar);
            this.createChatBubble();
        }
        ;

        loadPlayerProfile(xOffsetAvatar, yOffsetAvatar) {

            const profileFrame = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar, Ludo_Wild.arenaSheet, "profile_pic_hud");
            profileFrame.anchor.setTo(0.5);
            this.avatarImage = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "profile_pic_hud");

            const profileMask = Ludo_Wild.Main.GAME.add.graphics(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2);
            profileMask.clear();
            profileMask.lineStyle(0);
            profileMask.beginFill(0xff0000);
            profileMask.drawCircle(0, 0, 100);
            profileMask.endFill();
            profileMask.visible = true;
            this.avatarImage.mask = profileMask;

            if (this.hudConfig.avatar === undefined) {
                this.avatarImage.loadTexture(Ludo_Wild.generalSheet, "avatar_" + Phaser.Math.between(1, 5).toString());
            }
            else if (this.hudConfig.userId.match("play_anon_") !== null) {
                this.avatarImage.loadTexture(Ludo_Wild.generalSheet, this.hudConfig.avatar);
            }
            else {

                const loader = new Phaser.Loader(Ludo_Wild.Main.GAME);
                loader.image('havatar' + this.hudConfig.userId, this.hudConfig.avatar);
                loader.onLoadComplete.addOnce(this.onImageLoadComplete.bind(this), this);
                loader.start();
            }
            this.avatarImage.width = 104;
            this.avatarImage.height = 109;
            if (this.hudConfig.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                    this.avatarImage.angle = 180;
                }
            }

            if (Ludo_Wild.isClientVoiceChatAuthorized() && this.anyGeneralOnlineMode(this.hudConfig.mode)) {
                this.createVoiceChatComponents(xOffsetAvatar, yOffsetAvatar);
            }
            this.setProfilePictureAnchor();
        }
        createVoiceChatComponents(xOffsetAvatar, yOffsetAvatar) {

            this.voiceChatBg = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "wave_bg");
            this.voiceChatBg.anchor.setTo(0.5);
            this.voiceChatBg.visible = true;

            this.voiceChatMuteStatus = Ludo_Wild.Main.GAME.add.image(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2, Ludo_Wild.arenaSheet, "mute_icon");
            this.voiceChatMuteStatus.anchor.setTo(0.5);
            this.voiceChatMuteStatus.visible = true;

            this.createVoiceStatusGroup(this.hudConfig.x + xOffsetAvatar, this.hudConfig.y + yOffsetAvatar - 2);
            this.createWaveAnimation();
        }
        ;
        onImageLoadComplete() {
            if (Ludo_Wild.Main.GAME.cache.checkKey(Phaser.Cache.IMAGE, 'havatar' + this.hudConfig.userId)) {
                this.avatarImage.loadTexture('havatar' + this.hudConfig.userId);
                this.avatarImage.width = 104;
                this.avatarImage.height = 109;
                this.setProfilePictureAnchor();
            }
        }
        createNamePlate(_hudConfig, xOffsetName, textureString, _scaleX) {

            const playername = Ludo_Wild.Main.GAME.add.text(this.hudConfig.x, this.hudConfig.y + 140 + (Ludo_Wild.Home.textYgap * -10), this.hudConfig.name.toUpperCase(), {
                font: "26px KG",
                fill: "#ffffff"
            });
            playername.anchor.setTo(0, 0.5);
            playername.text = Ludo_Wild.cropName(this.hudConfig.name.toUpperCase());
            playername.stroke = "#000000";
            playername.strokeThickness = 1;
            playername.anchor.setTo(0.5, 0.5);
            if (this.hudConfig.mode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                    playername.angle = 180;
                }
            }
            this.pointsLabel = Ludo_Wild.Main.GAME.add.text(this.hudConfig.x, this.hudConfig.y + (Ludo_Wild.Home.textYgap * -20), "00", {
                font: "48px KG",
                fill: "#ffffff"
            });
            let scoreLabel = Ludo_Wild.Main.GAME.add.text(this.hudConfig.x, this.hudConfig.y + (Ludo_Wild.Home.textYgap * -20), "SCORE", {
                font: "15px KG",
                fill: "#ffffff"
            });
            scoreLabel.anchor.setTo(0.5, 0.5);
            this.pointsLabel.anchor.setTo(0.5, 0.5);
            if (this.hudConfig.quad === 0 || this.hudConfig.quad === 1) {
                playername.x = this.hudConfig.x - 50;
                this.pointsLabel.x = this.hudConfig.x + 12;
                scoreLabel.x = this.hudConfig.x + 12;
            }
            else {
                playername.x = this.hudConfig.x + 120;
                this.pointsLabel.x = this.hudConfig.x + 182;
                scoreLabel.x = this.hudConfig.x + 182;
            }
            if (this.hudConfig.quad === 1 || this.hudConfig.quad === 2) {
                playername.y -= 75;
                this.pointsLabel.y -= 50;
                scoreLabel.y = this.pointsLabel.y + 40 + (Ludo_Wild.Home.textYgap * 20);
            }
            else {
                playername.y -= 0;
                this.pointsLabel.y += 25;
                scoreLabel.y = this.pointsLabel.y + 40 + (Ludo_Wild.Home.textYgap * 20);
            }
        }
        setProfilePictureAnchor() {
            this.avatarImage.anchor.setTo(0.5, 0.5);
        }
        createChatBubble() {

            let bubbleX;
            let bubbleY;
            let bubblComponentYOffset;
            if (this.hudConfig.quad === 0 || this.hudConfig.quad === 3) {
                bubbleX = this.hudConfig.x + 18;
                bubbleY = this.hudConfig.y - (113 / 2) - 12;
                bubblComponentYOffset = -30;
            }
            else {
                bubbleX = this.hudConfig.x + 18;
                bubbleY = this.hudConfig.y + (113 / 2) - 12;
                this.chatBubbleScaleY = -1;
                bubblComponentYOffset = -15;
            }
            if (this.hudConfig.quad === 2 || this.hudConfig.quad === 3) {
                this.chatBubbleScaleX = -1;
            }
            if (this.hudConfig.totalPlayers > 2) {
                this.chatBubble = Ludo_Wild.Main.GAME.add.image(bubbleX, bubbleY, Ludo_Wild.chatSheet, "chat_bubble");
            }
            else {
                this.chatBubble = Ludo_Wild.Main.GAME.add.image(bubbleX, bubbleY, Ludo_Wild.chatSheet, "chat_bubble_2");
            }
            this.chatBubble.anchor.setTo(0.5);
            this.chatBubble.scale.setTo(this.chatBubbleScaleX, this.chatBubbleScaleY);
            this.chatBubble.visible = false;
            let receiverNameX;
            if (this.hudConfig.quad === 2) {
                receiverNameX = 30;
            }
            else {
                receiverNameX = -30;
            }
            const receiverName = Ludo_Wild.Main.GAME.add.text(receiverNameX, 0 + bubblComponentYOffset + 25 + (Ludo_Wild.Home.textYgap * -10), "@PRABODH:", { font: "22px KG", fill: "#000000" });
            receiverName.anchor.setTo(0.5);
            if (this.hudConfig.totalPlayers === 2) {
                receiverName.visible = false;
            }
            let emojiX;
            if (this.hudConfig.totalPlayers === 2) {
                emojiX = 0;
            }
            else {
                if (this.hudConfig.quad === 2) {
                    emojiX = this.chatBubble.width / 2 + 20;
                }
                else {
                    emojiX = Math.abs(this.chatBubble.width / 2) - 30;
                }
            }
            const emoji = Ludo_Wild.Main.GAME.add.image(emojiX, 0 + bubblComponentYOffset, Ludo_Wild.chatSheet, "c5");
            emoji.scale.setTo(0.75, 0.75);
            emoji.anchor.setTo(0.5);
            this.chatBubbleComponent = Ludo_Wild.Main.GAME.add.group();
            this.chatBubbleComponent.position.setTo(this.chatBubble.x, this.chatBubble.y);
            this.chatBubbleComponent.addChild(receiverName);
            this.chatBubbleComponent.addChild(emoji);
            this.chatBubbleComponent.visible = false;
        }
        ;
        hideChatBubble() {
            Ludo_Wild.Main.GAME.add.tween(this.chatBubble.scale).to({ x: 0, y: 0 }, 300, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    this.chatBubble.visible = false;
                });
            Ludo_Wild.Main.GAME.add.tween(this.chatBubbleComponent.scale).to({ x: 0, y: 0 }, 300, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    this.chatBubbleComponent.visible = false;
                });
        }
        createVoiceStatusGroup(x, y) {
            this.voiceActiveStatusGroup = Ludo_Wild.Main.GAME.add.group();
            this.voiceActiveStatusGroup.position.set(x, y);
            let xOffset = 0;
            const waveYScale = [1, 0.65, 0.85, 0.45];
            for (let i = 0; i < 4; i++) {
                const wave = Ludo_Wild.Main.GAME.add.image(-20 + xOffset, 0, Ludo_Wild.arenaSheet, "single_wave");
                wave.anchor.setTo(0.5);
                wave.scale.set(1, waveYScale[i]);
                xOffset += 15;
                this.voiceActiveStatusGroup.addChild(wave);
            }
            this.voiceActiveStatusGroup.visible = false;
        }
        ;
        createWaveAnimation() {
            const waveYScale = [1, 0.65, 0.85, 0.45];
            for (let i = 0; i < 4; i++) {
                this.voiceWaveAnimationTween[i] = Ludo_Wild.Main.GAME.add.tween(this.voiceActiveStatusGroup.getChildAt(i).scale).to({
                    x: 1,
                    y: waveYScale[i] - 0.2
                }, 200, Phaser.Easing.Sinusoidal.InOut, false, i * 150, -1, true);
            }
        }
        anyGeneralOnlineMode(gamemode) {
            if (gamemode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE || gamemode === Ludo_Wild.gameMode.RANDOM_ONLINE
                || gamemode === Ludo_Wild.gameMode.ONLINE_BATTLE) {
                return true;
            }
            return false;
        }
    }
    Ludo_Wild.PlayerHUDBlitz = PlayerHUDBlitz;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Toast {
        constructor(_toastConfig) {
            this.effectBeginY = Ludo_Wild.Main.GAME.world.height;
            this.active = false;
            this.scaleX = 1;
            this.toastConfigs = _toastConfig;
            this.create();
        }
        isActive() {
            return this.active;
        }
        ;
        create() {
            this.toastImage = Ludo_Wild.Main.GAME.add.image(this.toastConfigs.x, this.toastConfigs.y, Ludo_Wild.generalSheet, this.toastConfigs.texture);
            this.textureString = this.toastConfigs.texture;
            this.originalTextureString = this.toastConfigs.texture;
            const labelFontSize = this.toastConfigs.fontSize || 18;
            this.toastImage.anchor.setTo(0.5, 0.5);
            this.toastText = Ludo_Wild.Main.GAME.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), "", {
                font: (labelFontSize + Ludo_Wild.Main.FONTSIZE).toString() + "px",
                fill: "#52433c"
            });
            this.toastText.font = Ludo_Wild.Main.FONT;
            this.toastText.anchor.setTo(0.5, 0.5);
            this.toastImage.addChild(this.toastText);
            this.toastImage.reset(this.toastConfigs.x, this.toastConfigs.y);
            this.toastImage.scale.setTo(0, 0);
            this.toastImage.visible = false;
        }
        ;
        setText(_text, size) {
            if (Ludo_Wild.Main.LANGUAGE === Ludo_Wild.LANGUAGES.EN_US) {
                this.toastText.text = _text.toUpperCase();
            }
            else {
                this.toastText.text = _text;
            }
            if (size !== undefined) {
                this.toastText.fontSize = (size + Ludo_Wild.Main.FONTSIZE).toString() + "px";
            }
        }
        ;
        show(_isInverted = false, fade = true, _customTexture) {
            if (_customTexture !== undefined) {
                this.toastImage.loadTexture(Ludo_Wild.generalSheet, _customTexture);
                this.textureString = _customTexture;
            }
            else {
                if (this.textureString !== this.originalTextureString) {
                    this.toastImage.loadTexture(Ludo_Wild.generalSheet, this.originalTextureString);
                }
            }
            this.active = true;
            Manager.AudioManager.getAudioInstance().playToast();
            if (_isInverted) {
                this.toastText.angle = 180;
            }
            else {
                this.toastText.angle = 0;
            }
            this.toastImage.visible = true;
            this.toastImage.alpha = 1;
            Ludo_Wild.Main.GAME.world.bringToTop(this.toastImage);
            Ludo_Wild.Main.GAME.add.tween(this.toastImage.scale).to({ x: 1, y: 1 }, 500, Phaser.Easing.Bounce.Out, true);
        }
        fade() {
            Ludo_Wild.Main.GAME.add.tween(this.toastImage.scale).to({ x: 0, y: 0 }, 250, Phaser.Easing.Bounce.In, true)
                .onComplete.add(() => {
                    this.toastImage.visible = false;
                });
        }
        ;
        fadeToOblivion() {
            Ludo_Wild.Main.GAME.add.tween(this.toastImage).to({ alpha: 0 }, 800).start().onComplete.add(() => {
                this.toastImage.visible = false;
                this.toastImage.y = this.effectBeginY;
                this.onFadeOblivion();
                this.active = false;
            });
        }
        onFadeOblivion() {
        }
    }
    Ludo_Wild.Toast = Toast;
})(Ludo_Wild || (Ludo_Wild = {}));

var Ludo_Wild;
(function (Ludo_Wild) {
    class PopUp extends Ludo_Wild.Toast {
        constructor(_popupConfig) {
            super(_popupConfig);
            this.effectScale = 0;
            this.customizeToast();
        }
        customizeToast() {
            this.toastImage.reset(this.toastConfigs.x, this.toastConfigs.y);
            this.effectBeginY = this.toastConfigs.y;
            this.toastImage.scale.setTo(this.effectScale);
        }
        show() {
            Manager.AudioManager.getAudioInstance().playPopAppears();
            Ludo_Wild.Main.GAME.world.bringToTop(this.toastImage);
            this.toastImage.visible = true;
            this.toastImage.alpha = 1;
            let _tobeScaled = 1;
            Ludo_Wild.Main.GAME.add.tween(this.toastImage.scale).to({
                x: _tobeScaled,
                y: _tobeScaled
            }, 300).start().onComplete.add(() => {
                Ludo_Wild.Main.GAME.time.events.add(500, () => {
                    this.fadeToOblivion();
                });
            });
        }
        onFadeOblivion() {
            this.toastImage.scale.setTo(this.effectScale);
        }
    }
    Ludo_Wild.PopUp = PopUp;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class RankMedal {
        constructor(_config) {
            this.config = _config;
            this.createRankMedal();
        }
        reset(x, y) {
            this.rankMedalImg.reset(x, y);
        }
        ;
        createRankMedal() {
            this.rankMedalImg = Ludo_Wild.Main.GAME.add.sprite(this.config.x, this.config.y, "rank_medal_spritesheet");
            this.rankMedalImg.scale.setTo(0, 0);
            this.rankMedalImg.anchor.setTo(0.5, 0.5);
            this.rankMedalImg.animations.add("show_rank");

            this.rankTxt = Ludo_Wild.Main.GAME.add.text(0, 10 + (Ludo_Wild.Home.textYgap * -20), this.config.rank.toString(), { font: "32px KG", fill: "#fd5d00" });
            this.rankTxt.setShadow(1, 1, "#000000", 3);
            this.rankTxt.anchor.setTo(0.5, 0.5);
            this.rankMedalImg.addChild(this.rankTxt);
        }
        setAngle(angle = 0) {
            this.rankMedalImg.angle = angle;
        }
        ;
        setVisible(_isVisible) {
            this.rankMedalImg.visible = _isVisible;

            if (_isVisible) {
                this.runAnimation();
            }
        }
        setRank(_rank) {

            this.rankMedalImg.getChildAt(0).text = _rank.toString();
        }
        destroy() {
            this.rankMedalImg.destroy();
        }
        runAnimation() {
            Manager.AudioManager.getAudioInstance().playRankReveal();
            Ludo_Wild.Main.GAME.add.tween(this.rankMedalImg.scale).to({ x: 1.2, y: 1.2 }, 100).to({ x: 0.6, y: 0.6 }, 100)
                .to({ x: 1, y: 1 }, 100, Phaser.Easing.Quadratic.In, true).onComplete.add(() => {
                    this.rankMedalImg.play("show_rank", 12);
                });
        }
        ;
    }
    Ludo_Wild.RankMedal = RankMedal;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    ;
    ;
    Ludo_Wild.UISheet = "UISpriteSheet";
    Ludo_Wild.chatSheet = "chatSheet";
    Ludo_Wild.arenaSheet = "arenaSheet";
    Ludo_Wild.popupSheet = "popupSheet";
    Ludo_Wild.generalSheet = "generalSheet";
    Ludo_Wild.friendsLobbySheet = "friendsLobbySheet";
    Ludo_Wild.blitzSheet = "blitz";
    Ludo_Wild.Padding = 10;
    let buttonToggleState;
    (function (buttonToggleState) {
        buttonToggleState[buttonToggleState["DEFAULT"] = 0] = "DEFAULT";
        buttonToggleState[buttonToggleState["PRESSED"] = 1] = "PRESSED";
    })(buttonToggleState = Ludo_Wild.buttonToggleState || (Ludo_Wild.buttonToggleState = {}));
    ;
    ;
    let leaderboardType;
    (function (leaderboardType) {
        leaderboardType[leaderboardType["SINGLEPLAYER_WINS"] = 0] = "SINGLEPLAYER_WINS";
        leaderboardType[leaderboardType["MULTIPLAYER_WINS"] = 1] = "MULTIPLAYER_WINS";
        leaderboardType[leaderboardType["TOTAL_WINS"] = 2] = "TOTAL_WINS";
        leaderboardType[leaderboardType["LEVELS"] = 3] = "LEVELS";
    })(leaderboardType = Ludo_Wild.leaderboardType || (Ludo_Wild.leaderboardType = {}));
    ;
    let leaderboardKind;
    (function (leaderboardKind) {
        leaderboardKind[leaderboardKind["NONE"] = 1] = "NONE";
        leaderboardKind[leaderboardKind["GLOBAL"] = 2] = "GLOBAL";
        leaderboardKind[leaderboardKind["SOCIAL"] = 3] = "SOCIAL";
    })(leaderboardKind = Ludo_Wild.leaderboardKind || (Ludo_Wild.leaderboardKind = {}));
    let bootThemes;
    (function (bootThemes) {
        bootThemes[bootThemes["BRONZE"] = 0] = "BRONZE";
        bootThemes[bootThemes["SILVER"] = 1] = "SILVER";
        bootThemes[bootThemes["GOLD"] = 2] = "GOLD";
        bootThemes[bootThemes["PLATINUM"] = 3] = "PLATINUM";
        bootThemes[bootThemes["DIAMOND"] = 4] = "DIAMOND";
        bootThemes[bootThemes["DEFAULT"] = 5] = "DEFAULT";
    })(bootThemes = Ludo_Wild.bootThemes || (Ludo_Wild.bootThemes = {}));
    let tabType;
    (function (tabType) {
        tabType[tabType["TABLE"] = 0] = "TABLE";
        tabType[tabType["RANK"] = 1] = "RANK";
    })(tabType = Ludo_Wild.tabType || (Ludo_Wild.tabType = {}));
    let MessageType;
    (function (MessageType) {
        MessageType[MessageType["IN_LOBBY"] = 0] = "IN_LOBBY";
        MessageType[MessageType["IN_GAME"] = 1] = "IN_GAME";
    })(MessageType = Ludo_Wild.MessageType || (Ludo_Wild.MessageType = {}));
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    let BattleReplayScene;
    (function (BattleReplayScene) {
        BattleReplayScene[BattleReplayScene["Init"] = 1] = "Init";
        BattleReplayScene[BattleReplayScene["Gameover"] = 2] = "Gameover";
        BattleReplayScene[BattleReplayScene["MatchNotFound"] = 3] = "MatchNotFound";
    })(BattleReplayScene = Ludo_Wild.BattleReplayScene || (Ludo_Wild.BattleReplayScene = {}));
    ;
    let Rules;
    (function (Rules) {
        Rules[Rules["NORMAL"] = 1] = "NORMAL";
        Rules[Rules["BLITZ"] = 2] = "BLITZ";
    })(Rules = Ludo_Wild.Rules || (Ludo_Wild.Rules = {}));
    class BattleManager {
    }
    BattleManager.replayScene = BattleReplayScene.Init;
    BattleManager.playersList = [];
    Ludo_Wild.BattleManager = BattleManager;

    class Config {
    }
    Config.dynTokenCount = 4;
    Config.bgTheme = 0;
    Config.bgBlitzTheme = 1;
    Config.rule = Rules.NORMAL;
    Ludo_Wild.Config = Config;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    let nameList = [
        "Prem",
        "Pande",
        "Daksha",
        "Sirasikar",
        "Dhani",
        "Ashtikar",
        "Sandracottos",
        "Malviya",
        "Yogarasa",
        "Raj",
        "Asha",
        "Gandhi",
        "Viswamitra",
        "Mukhtar",
        "Arpit",
        "Heravdakar",
        "Chunder",
        "Ranganekary",
        "Ruldu",
        "Mahalanabis",
        "Dhule",
        "Lata",
        "Mahadaji",
        "Khamavant",
        "Santosh",
        "Nan",
        "Dharya",
        "Bajpeyi",
        "Savyaschin",
        "Haradas",
        "Vinod",
        "Mudaliyar",
        "Amitodana",
        "Pandey",
        "Rahul",
        "Mudaliyar",
        "Yogarasa",
        "Kamath",
        "Zalim",
        "Phadanis",
        "Nagini",
        "Dhavale",
        "Saryu",
        "Singh",
        "Durga",
        "Ojha",
        "Anushka",
        "Mahalanabis",
        "Phoolan",
        "Patvardhan",
        "Neha",
        "Harish",
        "Nutan",
        "Ashtikar",
        "Neha",
        "Shevade",
        "Archita",
        "Upasani",
        "Versha",
        "Satavelekar",
        "Navneet",
        "Mehrotra",
        "Dayananda",
        "Bhagat",
        "Nasatya",
        "Holkar",
        "Ashtavakra",
        "Bhaumik",
        "Amish",
        "Bhave",
        "Din",
        "Dhavale",
        "Asha",
        "Singh",
        "Shudraka",
        "Devarukhkar",
        "Acarya",
        "Choraghad",
        "Amar",
        "Punja",
        "Chandika",
        "Sirasikar",
        "Rushpa",
        "Kamal",
        "Bhairavi",
        "Vaikar",
        "Bhadrakali",
        "Shrivastav",
        "Kareena",
        "Dhavale",
        "Chamunda",
        "Gazdar",
        "Kalpana",
        "Vaknis",
        "Chambeli",
        "Ayyar",
        "Kavuri",
        "Hegadi",
        "Arya",
        "Patel",
        "Zalim",
        "Nambisan",
        "Narayana",
        "Raj",
        "Pandu",
        "Malhotra",
        "Chunder",
        "Thacker",
        "Daya",
        "Shree",
        "Ruldu",
        "Bhavalakar",
        "Navneet",
        "Dongerkerry",
        "Arun",
        "Chitanis",
        "Benegal",
        "Heravdakar",
        "Aryabhatta",
        "Padhi",
        "Kareena",
        "Munshif",
        "Gauri",
        "Heravdakar",
        "Alia",
        "Haradas",
        "Samarj",
        "Khamavant",
        "Jyoti",
        "Gandhi",
        "Minakshi",
        "Phadanis",
        "Jyoti",
        "Bhatta",
        "Amandara",
        "Patel",
        "Kanwal",
        "Kanungo",
        "Bumati",
        "Ashtikar",
    ];

    Ludo_Wild.getName = () => {
        return nameList[Math.floor(Math.random() * 140)];
    };
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    Ludo_Wild.playerData = { photo: "", firstName: "", playId: "" };
    Ludo_Wild.prizeList = [];
    Ludo_Wild.setPrizeDistribution = function (prize) {
        Ludo_Wild.prizeList = prize;
        console.warn("SETTIGN PRIZE LIST !!", JSON.stringify(Ludo_Wild.prizeList));
    };
    Ludo_Wild.setPlayerData = function () {
        return __awaiter(this, void 0, void 0, function* () {
            let sdkData;
            try {
                sdkData = yield segadroid.isLoggedIn();
            }
            catch (e) {
                console.log("Error occured due to", e);
            }
            let preferedLanguage = "en";
            if (sdkData && sdkData.userData) {

                if (sdkData.userData.firstName.length > 0) {
                    Ludo_Wild.playerData.firstName = sdkData.userData.firstName;
                }
                else {
                    Ludo_Wild.playerData.firstName = Ludo_Wild.getNameFromPhone(sdkData.userData.phone);
                }
                Ludo_Wild.playerData.photo = sdkData.userData.photo;
                Ludo_Wild.playerData.playId = sdkData.userData.playId;
                if (sdkData.userData.preferences) {
                    preferedLanguage = sdkData.userData.preferences.lang;
                }
                console.warn("Logged in as ", Ludo_Wild.playerData);
            }
            else {
                Ludo_Wild.playerData.firstName = Ludo_Wild.getRandomFirstName();
                Ludo_Wild.playerData.photo = "avatar_" + Phaser.Math.between(1, 5).toString();
                Ludo_Wild.playerData.playId = Ludo_Wild.getRandomplayId();
                console.warn("Not logged In as ", Ludo_Wild.playerData);
            }
            if (preferedLanguage === "hi") {
                Ludo_Wild.Main.LANGUAGE = Ludo_Wild.LANGUAGES.HINDI;
            }
            else {
                Ludo_Wild.Main.LANGUAGE = Ludo_Wild.LANGUAGES.EN_US;
            }
            Ludo_Wild.LanguageManager.getLangInstance();
            return;
        });
    };
    Ludo_Wild.setPlayerDataOnDeepLink = function (entryPointData) {
        return __awaiter(this, void 0, void 0, function* () {
            Ludo_Wild.playerData.firstName = entryPointData.name || Ludo_Wild.playerData.firstName;
            Ludo_Wild.playerData.photo = entryPointData.photo || Ludo_Wild.playerData.photo;
            let deepplayId = Ludo_Wild.playerData.playId;

            if (entryPointData.photo) {
                if (Ludo_Wild.playerData.playId.match("play_anon_") !== null) {
                    deepplayId = Ludo_Wild.getRandomplayId2();
                }
            }
            Ludo_Wild.playerData.playId = deepplayId;
            console.log("playerData after deeplink", Ludo_Wild.playerData);
        });
    };

    Ludo_Wild.getRandomplayId2 = () => {
        const rndCode = Math.random().toFixed(5).split(".")[1];
        return "play_deep_" + rndCode;
    };
    Ludo_Wild.getNameFromPhone = function (phoneNumber) {
        return "xxxx" + phoneNumber.substr(phoneNumber.length - 4, 4);
    };
    Ludo_Wild.trimName = function (name) {
        return name.substr(0, 8);
    };
    Ludo_Wild.setCurrentMatchId = (matchId) => {
        console.log("Current matchId", matchId);
        Ludo_Wild.currentMatchId = matchId;
    };
    Ludo_Wild.getMatchCredentials = () => {
        return { matchId: Ludo_Wild.currentMatchId };
    };
    let FriendsLobbyTabState;
    (function (FriendsLobbyTabState) {
        FriendsLobbyTabState[FriendsLobbyTabState["INVITE"] = 0] = "INVITE";
        FriendsLobbyTabState[FriendsLobbyTabState["JOIN"] = 1] = "JOIN";
    })(FriendsLobbyTabState = Ludo_Wild.FriendsLobbyTabState || (Ludo_Wild.FriendsLobbyTabState = {}));
    ;
    Ludo_Wild.updateName = (newName) => {
        Ludo_Wild.playerData.firstName = newName;
    };
})(Ludo_Wild || (Ludo_Wild = {}));

var Ludo_Wild;
(function (Ludo_Wild) {
    let onVolumeChangeReferenece;
    let onMuteStatusChangeReference;
    let onIncomingCallReference;
    let onConnectionConnected;
    let onCallDisconnectedReference;
    let onConnectionStatusChangeReference;
    Ludo_Wild.isClientVoiceChatAuthorized = () => {

        return false;
    };
    Ludo_Wild.joinVoiceRoom = (roomId = "jojo", userId = "Pw") => __awaiter(this, void 0, void 0, function* () {
        yield babbleSdk.joinRoom(roomId, userId);
    });
    Ludo_Wild.connectCallToRoom = () => __awaiter(this, void 0, void 0, function* () {
        yield babbleSdk.connectCall();
    });
    Ludo_Wild.endCall = () => {
        babbleSdk.leaveCall();
    };
    Ludo_Wild.leaveRoom = () => {
        babbleSdk.leaveRoom();
    };
    Ludo_Wild.addVoiceChatListeners = (volumeChangeRef, muteStatusChangeRef, incomingCallRef, connectionConnectedRef, callDisconnectedRef, connectionStatusChangeRef) => {
        onVolumeChangeReferenece = volumeChangeRef;
        onMuteStatusChangeReference = muteStatusChangeRef;
        onIncomingCallReference = incomingCallRef;
        onConnectionConnected = connectionConnectedRef;
        onCallDisconnectedReference = callDisconnectedRef;
        onConnectionStatusChangeReference = connectionStatusChangeRef;
        window.addEventListener("onVolumeChange", onVolumeChangeReferenece);
        window.addEventListener("onMicStatusChange", onMuteStatusChangeReference);
        window.addEventListener("onIncomingCall", onIncomingCallReference);
        window.addEventListener("onConnectionConnected", onConnectionConnected);
        window.addEventListener("onConnectionDisconnected", onCallDisconnectedReference);
        window.addEventListener("onConnectionStatusChange", onConnectionStatusChangeReference);
        Ludo_Wild.Main.isVoiceChatListenersActive = false;
    };
    Ludo_Wild.removeVoiceChatListeners = () => {
        window.removeEventListener("onVolumeChange", onVolumeChangeReferenece);
        window.removeEventListener("onMicStatusChange", onMuteStatusChangeReference);
        window.removeEventListener("onIncomingCall", onIncomingCallReference);
        window.removeEventListener("onConnectionConnected", onConnectionConnected);
        window.removeEventListener("onConnectionDisconnected", onCallDisconnectedReference);
        window.removeEventListener("onConnectionStatusChange", onConnectionStatusChangeReference);
        Ludo_Wild.Main.isVoiceChatListenersActive = false;
    };
})(Ludo_Wild || (Ludo_Wild = {}));
;
var Ludo_Wild;
(function (Ludo_Wild) {
    var _a;
    class BattleModeState extends Phaser.State {
        constructor() {
            super(...arguments);
            this.isMatchFound = false;
            this.botPlayerList = [];
        }
        init(info, isReplay = false) {
            console.log("Welcome to battleMode", info);
            console.log("TCL: BattleModeState -> init -> isReplay", isReplay);
            this.battleInfo = info;
            BattleModeState.myID = this.battleInfo.battleDetails.playId;
            this.isMatchFound = false;
            if (isReplay) {
                console.log("Calling battle Replay");

            }
        }
        create() {
            console.log("Battle Mode Create before Is Brave Fn of home");
            Ludo_Wild.Home.isBrave();
            console.log("Battle Mode Create after Is Brave Fn of home");
            Analytics.Gama.send(Analytics.MESSAGE.BATTLE_STARTED);
            this.initializeCommunicationComponents();
            this.createUIComponents();
        }
        shutdown() {
            this.gameplayManager.dispose(this.isMatchFound);
            this.gameplayManager = null;
            try {
                if (radio.$.channels['onBattleInit'] !== undefined && radio.$.channels['onBattleInit'].length > 0) {
                    radio.$.channels['onBattleInit'].pop();
                }
                if (radio.$.channels['onGameReady'] !== undefined && radio.$.channels['onGameReady'].length > 0) {
                    radio.$.channels['onGameReady'].pop();
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        initializeCommunicationComponents() {
            this.clientInstance = new Ludo_Wild.ClientOnline();
            if (BattleModeState.doesBattleHasBots) {
                console.log("Offline started -----");
                this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.SINGLE_PLAYER, this.clientInstance);
            }
            else {
                console.log("Online started -----");
                this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.ONLINE_BATTLE, this.clientInstance);
            }
            this.gameplayManager.configureBattleCallback({
                context: this,
                callback: this.eventHandler.bind(this)
            });
        }
        createUIComponents() {
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEPLAY_SCREEN;
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.GAMEPLAY_SCREEN }, "", "#Gameplay");
            radio("onBattleInit").subscribe([this.onBattleInit, this]);

            radio("onGameReady").subscribe([this.onGameReady, this]);

            this.renderMainLayout();
            GZLOADER.unload();
            Analytics.Gama.send(Analytics.MESSAGE.LOADING_DONE);
        }
        renderMainLayout() {
            this.createBackGround();
            this.matchMakingUI = new Ludo_Wild.MatchMakingBattleUI(this.battleInfo);
        }
        createBackGround() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.bg = this.add.image(0, 0, Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
            }
            else {
                this.bg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
                this.bg.tint = 0.15 * 0xffffff;
            }
        }
        refreshBackground() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                this.bg.loadTexture(Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
            }
        }
        eventHandler(context, events, data) {
            switch (events) {
                case "battlemodestarted":
                    this.onBattleModeStarted(data);
                    break;
                case "lobbyTimeout":
                    this.onLobbyTimeout();
                    break;
            }
        }

        onBattleModeStarted(data) {
            const intervalTimerRef = window.setInterval(() => {
                if (this.matchMakingUI.isAnimationCompleted()) {
                    clearInterval(intervalTimerRef);
                    this.matchMakingUI.destroy();
                    this.matchMakingUI = null;
                    console.log("matchmaking ui disposed");
                    this.bg.tint = 1 * 0xffffff;
                    console.log("start_game data => ", data);
                    Ludo_Wild.Config.dynTokenCount = data.dynTokenCount;
                    if (data.rule === "BLITZ") {
                        Ludo_Wild.Config.rule = Ludo_Wild.Rules.BLITZ;
                    }
                    else {
                        Ludo_Wild.Config.rule = Ludo_Wild.Rules.NORMAL;
                    }
                    this.refreshBackground();
                    this.gameplayManager.startBattle(data);
                }
                else {
                    console.warn("Animation not finished");
                }
            }, 500);
        }
        onLobbyTimeout() {
            Ludo_Wild.BattleManager.replayScene = Ludo_Wild.BattleReplayScene.MatchNotFound;
            this.matchMakingUI.onLobbyTimeout();

            this.isMatchFound = false;

            return;
        }
        ;
        onBattleInit(initDetails) {
            console.log("initDetails", initDetails);
            this.prepareBattle(initDetails);
        }
        onBattlePreInit(preInitdetails) {
            this.matchMakingUI.onMatchPreInit(preInitdetails);
        }
        ;
        prepareBattle(initDetails) {
            if (initDetails.matchId === "") {
                this.onMatchNotFound();
            }
            else {
                this.onMatchFound(initDetails);
            }
        }
        ;
        onexitLobbyToHome() {
            if (this.clientInstance) {
                this.clientInstance.disconnectSocketConnection();

                this.clientInstance.removeAllReceivers();
                this.clientInstance = undefined;
            }
            if (this.gameplayManager) {
                this.gameplayManager = undefined;
            }
        }
        ;
        onMatchNotFound() {

            if (!BattleModeState.doesBattleHasBots) {
                console.warn("We Got This");
                Ludo_Wild.BattleManager.replayScene = Ludo_Wild.BattleReplayScene.MatchNotFound;
                this.matchMakingUI.onMatchNotFound();

                this.isMatchFound = false;
                Analytics.Gama.send(Analytics.MESSAGE.BATTLE_MATCH_NOT_FOUND);
                return;
            }
            console.warn("Match not found :*(");
            this.onexitLobbyToHome();
            Ludo_Wild.setCurrentMatchId("jojo_" + Math.floor(Math.random() * 1000));
            Ludo_Wild.Main.IS_FAKE_RANDOM = true;
            const clientInstanceOffline = new Ludo_Wild.ClientOffline();
            this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.SINGLE_PLAYER, clientInstanceOffline);
            this.gameplayManager.configureRandomModeCallback({
                context: this,
                callback: this.startBotMatch.bind(this)
            });

            this.gameplayManager.getGameServer().createMatch({ peers: 2 });
            this.gameplayManager.getGameServer().onTokenSelect({ color: { color: 1 } });
            let playerToken = 1;
            for (let i = 0; i < 2 - 1; i++) {
                ++playerToken;
                this.gameplayManager.getGameServer().onTokenSelect({ color: { color: playerToken % 4 } });
            }

        }
        startBotMatch(vents, data) {
            //alert('ok')
            this.matchMakingUI.onMatchMakingCompleted(this.botPlayerList);
            const intervalTimerRef = window.setInterval(() => {
                if (this.matchMakingUI.isAnimationCompleted()) {
                    clearInterval(intervalTimerRef);
                    this.matchMakingUI.destroy();
                    this.matchMakingUI = null;
                    let data = { names: [], avatars: [], playIds: [], c_data: [1, 2, 0, 0], totalPeers: 2 };
                    let playerNames = [];
                    let avatars = [];
                    let playIds = [];

                    playerNames.push(this.battleInfo.battleDetails.firstName);
                    avatars.push(this.battleInfo.battleDetails.photo);
                    playIds.push(this.battleInfo.battleDetails.playId);

                    playerNames.push(this.botPlayerList[0].firstName);
                    avatars.push(this.botPlayerList[0].photo);
                    playIds.push(this.botPlayerList[0].playId);
                    data.names = playerNames;
                    data.avatars = avatars;
                    data.playIds = playIds;

                    this.game.state.start('SinglePlayer', true, false, this.gameplayManager, data);
                }
                else {
                    console.warn("Animation not finished");
                }
            }, 1000);
        }
        onMatchFound(initDetails) {
            Analytics.Gama.send(Analytics.MESSAGE.BATTLE_MATCH_FOUND);
            console.log("Battle initDetails", initDetails);
            this.isMatchFound = true;
            let dynTokenCount;
            let rule;

            if (initDetails.gameConfig) {
                let configList = initDetails.gameConfig.split("-");
                if (configList.length === 1) {

                    dynTokenCount = JSON.parse(initDetails.gameConfig).token;
                    rule = Ludo_Wild.Rules.NORMAL;
                }
                else {
                    dynTokenCount = parseInt(configList[0].split(":")[1]);
                    let config_rule = configList[1].split(":")[1];
                    if (config_rule === "blitz") {
                        rule = Ludo_Wild.Rules.BLITZ;
                    }
                    else {
                        rule = Ludo_Wild.Rules.NORMAL;
                    }
                }
            }
            else {
                dynTokenCount = 4;
                rule = Ludo_Wild.Rules.NORMAL;
            }

            const joinBattleInfo = {
                matchId: initDetails.matchId,
                totalPlayers: initDetails.players.length,
                client: {
                    userId: this.battleInfo.battleDetails.playId,
                    name: this.battleInfo.battleDetails.firstName,
                    photo: this.battleInfo.battleDetails.photo,
                    contextId: initDetails.contextId
                },
                now: this.battleInfo.battleDetails.numberOfWinners, battleHash: Ludo_Wild.battleHash,
                tokens: dynTokenCount,
                rule: rule === Ludo_Wild.Rules.BLITZ ? "BLITZ" : "NORMAL"
            };
            const joinBotBattleInfo = {
                matchId: initDetails.matchId,
                totalPlayers: initDetails.players.length,
                client: {
                    userId: this.battleInfo.battleDetails.playId,
                    name: this.battleInfo.battleDetails.firstName,
                    photo: this.battleInfo.battleDetails.photo,
                    contextId: initDetails.contextId
                },
                players: initDetails.players,
                now: this.battleInfo.battleDetails.numberOfWinners,
                battleHash: Ludo_Wild.battleHash,
                tokens: dynTokenCount,
                rule: rule === Ludo_Wild.Rules.BLITZ ? "BLITZ" : "NORMAL"
            };
            BattleModeState.matchid = initDetails.matchId;

            Ludo_Wild.BattleManager.playersList = initDetails.players.slice(0);
            console.log("onMatchFound ~ BattleManager.playersList", Ludo_Wild.BattleManager.playersList);
            Ludo_Wild.setCurrentMatchId(initDetails.matchId);
            Ludo_Wild.setPrizeDistribution(initDetails.prizes);
            let matchedPlayerList = [];
            for (let i = 0; i < initDetails.players.length; i++) {
                if (initDetails.players[i].playId && initDetails.players[i].playId !== this.battleInfo.battleDetails.playId) {
                    if (!BattleModeState.doesBattleHasBots && initDetails.players[i].isBot) {
                        BattleModeState.doesBattleHasBots = true;

                    }
                    matchedPlayerList.push(initDetails.players[i]);
                }
                else {
                    if (!initDetails.players[i].playId) {
                        let tempPlayer = {
                            isBot: true,
                            firstName: "Opponent",
                            photo: undefined,
                            playId: undefined,
                        };
                        matchedPlayerList.push(tempPlayer);
                    }
                }
            }
            this.matchMakingUI.onMatchMakingCompleted(matchedPlayerList);

            window.setTimeout(() => {
                if (BattleModeState.doesBattleHasBots) {
                    this.gameplayManager.joinBotBattle(joinBotBattleInfo);
                }
                else {
                    this.gameplayManager.joinBattle(joinBattleInfo);
                }
            }, 2000);
        }
        ;

        createSplashScreen() {
            this.splashScreenContainer = Ludo_Wild.Main.GAME.add.image(Ludo_Wild.Main.GAME_WIDTH / 2, Ludo_Wild.Main.GAME_HEIGHT / 2, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            this.splashScreenContainer.anchor.set(0.5, 0.5);
            this.splashScreenContainer.tint = 0.15 * 0xffffff;
            const newTitle = Ludo_Wild.Main.GAME.add.image(0, -280, Ludo_Wild.generalSheet, "title_new2");
            newTitle.anchor.set(0.5, 0.5);
            const findingPlayersText = Ludo_Wild.Main.GAME.add.text(0, 435 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.FIND_PLAYER_SPLASH), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            findingPlayersText.anchor.set(0.5);
            findingPlayersText.align = "center";
            findingPlayersText.font = Ludo_Wild.Main.FONT;
            this.splashScreenContainer.addChild(newTitle);
            this.splashScreenContainer.addChild(findingPlayersText);
            this.createWaitingBuffer();
        }
        fadeSplashScreen() {
            this.findingPlayerBuffer.destroy();
            this.splashScreenContainer.visible = false;
            this.splashScreenContainer.destroy();
            this.renderMainLayout();
        }
        createWaitingBuffer() {
            this.findingPlayerBuffer = new Ludo_Wild.Buffer(Ludo_Wild.BufferType.EMPTY, Ludo_Wild.Main.GAME.world.centerX, 1150, Ludo_Wild.tintType.NORMAL, true);
        }
        onGameReady() {

            console.log("On Game Ready");
            if (Ludo_Wild.BattleManager.replayScene === Ludo_Wild.BattleReplayScene.Gameover) {
                radio("gameReadyGameover").broadcast();
            }
            else if (Ludo_Wild.BattleManager.replayScene === Ludo_Wild.BattleReplayScene.MatchNotFound) {
                this.matchMakingUI.onClickContinue();
                this.matchMakingUI = null;
            }
        }
    }
    _a = BattleModeState;
    BattleModeState.doesBattleHasBots = false;
    BattleModeState.sendBotBattleOverState = (playerScore) => __awaiter(_a, void 0, void 0, function* () {
        let restEndpoint = "";
        let botscore = 4;
        let botId = Ludo_Wild.BattleModeState.botID;
        let playerId = Ludo_Wild.BattleModeState.myID;
        let contestId = Ludo_Wild.BattleModeState.matchid;
        if (5 - playerScore >= 4) {
            botscore = 3;
        }
        const scoreObj = {
            scores: [
                { playId: playerId, score: (5 - playerScore), isBot: false },
                { playId: botId, score: botscore, isBot: true }
            ],
            contestId: contestId
        };
        console.log('ScoreObj => ', scoreObj);
        fetch(restEndpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scoreObj)
        })
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    Ludo_Wild.BattleModeState = BattleModeState;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {

    class Boot extends Phaser.State {
        init() {
            this.setupCanvasStyle();
            this.setupStage();

            this.segadroidInit();
            this.loadFont();
            this.input.maxPointers = 1;

            this.game.add.plugin(PhaserInput.Plugin);
            this.settingPageVisibility();
            this.addBackButtonEventListener();
            this.addHistoryStateListeners();
        }
        initSentry() {
            if (segadroid.isBattleGame()) {
                console.log("Initing sentry");
                Sentry.init({
                    dsn: "",
                    release: "",
                    integrations: [new Sentry.Integrations.BrowserTracing()]
                });
            }
        }
        addHistoryStateListeners() {
            window.addEventListener('load', () => {
                window.parent.history.pushState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
            });
            window.parent.addEventListener('popstate', (e) => {
                switch (Ludo_Wild.Main.SCENE) {
                    case Ludo_Wild.gameScenes.LOBBY:
                        radio('onBackLobby').broadcast();
                        break;
                    case Ludo_Wild.gameScenes.GAMEPLAY_SCREEN:
                        radio('onBackGameplay').broadcast();
                        break;
                }
            });
        }
        ;
        addBackButtonEventListener() {
            document.addEventListener(this.visibilityChange, () => {
                this.handleVisibilityChange();
            }, false);
            document.addEventListener("focusin", () => {
                this.onFocus();
            });
            document.addEventListener("focusout", () => {
                this.onBlur();
            });
        }
        ;
        handleVisibilityChange() {
            if (document[this.hidden]) {
                this.game.sound.mute = true;
            }
            else {
                if (oMetaManager.localGetItem('soundMute') === undefined) {
                    this.game.sound.mute = false;
                }
                else if (oMetaManager.localGetItem('soundMute') !== 1) {
                    this.game.sound.mute = false;
                }
            }
        }
        ;
        settingPageVisibility() {
            if (typeof document.hidden !== "undefined") {
                this.hidden = "hidden";
                this.visibilityChange = "visibilitychange";

            }
            else if (typeof document.msHidden !== "undefined") {
                this.hidden = "msHidden";
                this.visibilityChange = "msvisibilitychange";

            }
            else if (typeof document.webkitHidden !== "undefined") {
                this.hidden = "webkitHidden";
                this.visibilityChange = "webkitvisibilitychange";
            }
        }
        loadFont() {
            this.game.add.text(0, 0, '', { font: "1px KG", fill: "#ffffff" });
        }
        ;
        segadroidInit() {
            return __awaiter(this, void 0, void 0, function* () {
                const _this = this;
                try {
                    const data = yield segadroid.Initialize({
                        apiKey: '57d370d9-d604-4b6b-8628-95ee800b2386',
                        gameCode: 'SkhljT2fdgb',
                        debug: true,
                        play: () => {
                            Ludo_Wild.Main.SDK_PAUSE = false;
                            _this.game.paused = false;
                        },
                        gameInit: (initDetails) => {
                            radio("onBattleInit").broadcast(initDetails);
                        },

                        gamePreInit: (preInitDetails) => {

                        },

                        gameReady: () => {
                            radio("onGameReady").broadcast();
                        },
                        pause: () => {
                            Ludo_Wild.Main.SDK_PAUSE = true;
                            _this.game.paused = true;
                        },
                        mute: () => {
                            Ludo_Wild.Main.SDK_MUTE = true;
                            _this.game.sound.mute = true;
                        },
                        unmute: () => {
                            if (oMetaManager.localGetItem('soundMute') === undefined) {
                                this.game.sound.mute = false;
                            }
                            else if (oMetaManager.localGetItem('soundMute') !== 1) {
                                this.game.sound.mute = false;
                            }
                        }
                    });
                    const sdkData = yield Ludo_Wild.prototypingGame(data);
                    if (sdkData) {
                        oMetaManager.sync();
                        yield Ludo_Wild.setPlayerData();
                        return _this.state.start('Preload');
                    }
                }
                catch (e) {
                    console.warn("Error on sdk init function", e);
                }
            });
        }
        onBlur() {
            console.log("keyboard blur");
            Ludo_Wild.Main.KEYBOARD_OPEN = false;
        }
        onFocus() {
            Ludo_Wild.Main.KEYBOARD_OPEN = true;
            console.log("keyboard focus");
        }
        pauseGame() {
            this.game.paused = true;
        }
        unPauseGame() {
            this.game.paused = false;
        }
        muteGame() {
            this.sound.mute = true;
        }
        unMuteGame() {
            this.sound.mute = false;
        }
        goToLoadScreen() {
            this.game.state.start('Preload');
        }
        setupCanvasStyle() {
            if (this.game.device.desktop) {
                this.game.canvas.parentElement.style.backgroundColor = "black";
            }
            else {
                this.game.canvas.parentElement.style.backgroundColor = "black";
            }
        }
        ;
        setupStage() {
            let scale = this.game.scale;
            let clHeight = window.screen.height;
            let clWidth = window.screen.width;
            scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            scale.pageAlignHorizontally = true;
            scale.pageAlignVertically = true;
            window.addEventListener("resize", this.onOrientationChange.bind(this));
            this.onOrientationChange();
            this.stage.disableVisibilityChange = true;
            this.stage.setBackgroundColor(0x000000);
            if (this.game.device.touch) {
                this.game.input.mspointer.stop();
                this.game.input.touch.start();
            }
            this.scale.setResizeCallback(this.resizeCall, this);
        }
        resizeCall() {
            if (Ludo_Wild.Main.KEYBOARD_OPEN)
                return;
            document.body.style.backgroundColor = '#000000';
            document.body.style.width = window.innerWidth + 'px';
            document.body.style.height = window.innerHeight + 'px';
            let divGame = document.getElementById('gameBody');

            let newWidth = '100%';
            let newHeight = '100%';
            divGame.style.display = 'flex';
            divGame.style.alignItems = 'center';
            divGame.style.justifyContent = 'center';
            divGame.style.width = newWidth;
            divGame.style.height = newHeight;
        }
        onOrientationChange() {
            if (Ludo_Wild.Main.KEYBOARD_OPEN)
                return;
            let width, height;
            if (/iPhone/.test(navigator.userAgent)) {
                width = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
            }
            else {
                width = window.innerWidth;
                height = window.innerHeight;
            }
            if (height > width) {
                document.getElementById('rotate').style.display = "none";
                segadroid.unmute();
            }
            else {
                if (!/Mobile/i.test(navigator.userAgent))
                    return;
                document.getElementById('rotate').style.display = "block";
                segadroid.mute();
            }
        }
    }
    Ludo_Wild.Boot = Boot;
})(Ludo_Wild || (Ludo_Wild = {}));

var Ludo_Wild;
(function (Ludo_Wild) {
    class FriendsLobbyState extends Phaser.State {
        constructor() {
            super(...arguments);
            this.tabState = Ludo_Wild.FriendsLobbyTabState.INVITE;
            this.playersInLobby = 0;
            this.matchId = "";
            this.isJoined = false;
            this.lobbyFriendsObject = {};
            this.canOpenJoinPanel = true;
            this.canOpenCreatePanel = true;
            this.inputField = undefined;
            this.isFromInvite = false;
            this.lastInputText = "";
            this.joiningMatchId = "";
        }

        init(haveInvite = false) {
            this.isFromInvite = haveInvite;
        }
        ;
        create() {
            Ludo_Wild.Config.rule = Ludo_Wild.Rules.NORMAL;
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.FRIENDS_LOBBY;
            this.initializeCommunicationComponents();
            this.initVars();
            this.createBackground();
            this.createBackButton();
            this.createBaseUI();
            if (!this.isFromInvite) {
                this.setTint(true);
                this.createLobbyCreationWaitBuffer();
            }
        }
        ;
        update() {

        }
        ;
        shutdown() {
        }
        ;
        initVars() {
            this.tabState = Ludo_Wild.FriendsLobbyTabState.INVITE;
            this.playersInLobby = 0;
            this.matchId = "";
            this.lobbyFriendsObject = {};

            this.canOpenJoinPanel = !this.isFromInvite;
            this.canOpenCreatePanel = true;
            this.invitePanelUIElementsGroup = undefined;
            this.joinPanelUIElementsGroup = undefined;
            this.lobbyNotificationText = undefined;
            this.waitingBuffer = undefined;
            this.bgTintImage = undefined;
            this.isJoined = false;
            this.inputField = undefined;
            this.lastInputText = "";
            this.joiningMatchId = "";
        }
        ;
        initializeCommunicationComponents() {

            this.clientInstance = new Ludo_Wild.ClientOnline();

            this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.MULTIPLAYER_ONLINE, this.clientInstance);

            this.gameplayManager.configureFriendsCallback({
                context: this,
                callback: this.gameplayEventHandler.bind(this)
            });

            if (!this.isFromInvite) {
                window.setTimeout(() => {
                    this.gameplayManager.createFriendsLobby(Ludo_Wild.playerData);
                }, 1000);
            }
            else {

                window.setTimeout(() => {
                    this.matchId = "ludo::friends::";
                    const roomId = oMetaManager.localGetItem("roomId");
                    this.joiningMatchId = "ludo::friends::" + roomId;
                    this.lobbyFriendsObject[Ludo_Wild.playerData.playId] = Ludo_Wild.playerData;
                    this.sendJoinRequest(roomId);
                }, 1000);
            }
        }
        ;

        createBackground() {
            const _bgImg = this.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            const tintImageEffect = this.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');

        }
        ;
        createBackButton() {
            const backButton = this.add.image(65, 65, Ludo_Wild.generalSheet, "btn_back");
            backButton.inputEnabled = true;
            backButton.anchor.setTo(0.5, 0.5);
            backButton.events.onInputUp.add(this.onBackButtonClick.bind(this, backButton), this);
        }
        ;
        onBackButtonClick(backButton) {
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(backButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)

                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Linear.In, true).onComplete.add(() => {
                    this.onBackClickLobby();
                });
        }
        ;
        onBackClickLobby(deleteRoomId = true) {
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");

            if (deleteRoomId) {
                try {
                    this.gameplayManager.onFriendsLobbyExit(this.matchId.split("::")[2]);
                }
                catch (e) {
                    console.log(e);
                }
            }
            this.onExitLobbyToHome();
            this.state.start('Home');
        }
        ;
        onExitLobbyToHome() {
            if (this.clientInstance) {
                this.clientInstance.disconnectSocketConnection();

                this.clientInstance.removeAllReceivers();
                this.clientInstance = undefined;
            }
            if (this.gameplayManager) {
                this.gameplayManager = undefined;
            }
        }
        ;
        createBaseUI() {
            this.baseUIGroup = this.add.group();
            this.baseUIGroup.position.setTo(this.world.centerX, this.world.centerY);
            this.createBaseTray();
            this.createTabPanel();
        }
        ;
        setTint(isVisible = false) {
            if (!this.bgTintImage) {
                this.bgTintImage = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
            }
            this.bgTintImage.visible = isVisible;
        }
        ;

        createLobbyCreationWaitBuffer() {
            this.waitingBuffer = new Ludo_Wild.Buffer(Ludo_Wild.BufferType.WAITING, this.world.centerX, this.world.centerY);
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.BUFFER;
        }
        ;
        createBaseTray() {
            const baseTray = this.add.image(0, 0, Ludo_Wild.friendsLobbySheet, "friends_lobby_popup");
            baseTray.anchor.setTo(0.5);
            this.baseUIGroup.addChild(baseTray);
        }
        ;
        createTabPanel() {
            const tabBackground = this.add.image(0, -50, Ludo_Wild.friendsLobbySheet, "tab_bg");
            tabBackground.anchor.setTo(0.5);
            this.baseUIGroup.addChild(tabBackground);
            this.createInviteTabUIGroup();
            this.createJoinTabUIGroup();
            this.manageTabSwitching(this.tabState);
            this.createFriendsProfileGroup();
        }
        ;
        createInviteTabUIGroup() {

            const x = (-640 / 2) + (325 / 2) - 2;

            const y = (-634 / 2) - (70 / 4);
            this.inviteTabUIGroup = this.add.group();
            this.inviteTabUIGroup.position.setTo(x, y);
            this.inviteTabUIGroup.inputEnableChildren = true;
            const unselectedTab = this.add.image(0, 0, Ludo_Wild.friendsLobbySheet, "unselected_tab");
            unselectedTab.anchor.setTo(0.5);
            unselectedTab.inputEnabled = true;
            unselectedTab.events.onInputUp.add(this.onTabClick.bind(this, Ludo_Wild.FriendsLobbyTabState.INVITE));
            const inviteText = this.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.INVITE), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            inviteText.font = Ludo_Wild.Main.FONT;
            inviteText.anchor.setTo(0.5);
            this.inviteTabUIGroup.addChild(unselectedTab);
            this.inviteTabUIGroup.addChild(inviteText);
            this.baseUIGroup.addChild(this.inviteTabUIGroup);
        }
        ;
        createJoinTabUIGroup() {

            const x = (640 / 2) - (325 / 2) + 2;

            const y = (-634 / 2) - (70 / 4);
            this.joinTabUIGroup = this.add.group();
            this.joinTabUIGroup.position.setTo(x, y);
            const unselectedTab = this.add.image(0, 0, Ludo_Wild.friendsLobbySheet, "unselected_tab");
            unselectedTab.anchor.setTo(0.5);
            unselectedTab.inputEnabled = true;
            unselectedTab.events.onInputUp.add(this.onTabClick.bind(this, Ludo_Wild.FriendsLobbyTabState.JOIN));
            const joinText = this.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.JOIN), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            joinText.font = Ludo_Wild.Main.FONT;
            joinText.anchor.setTo(0.5);
            this.joinTabUIGroup.addChild(unselectedTab);
            this.joinTabUIGroup.addChild(joinText);
            this.baseUIGroup.addChild(this.joinTabUIGroup);
        }
        ;

        manageTabSwitching(tabState) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.FRIENDS_LOBBY) {
                return;
            }
            if (tabState === Ludo_Wild.FriendsLobbyTabState.INVITE) {
                this.switchToInvitePanel();
            }
            else {
                this.switchToJoinPanel();
            }
        }
        ;
        onTabClick(tabState) {
            this.manageTabSwitching(tabState);
        }
        ;
        switchToInvitePanel() {

            if (!this.canOpenCreatePanel) {
                return;
            }
            if (!this.inviteTabUIGroup.getChildAt(0).visible) {
                return;
            }
            Manager.AudioManager.getAudioInstance().playClick();
            this.inviteTabUIGroup.getChildAt(0).visible = false;
            const inviteText = this.inviteTabUIGroup.getChildAt(1);
            inviteText.fill = "#ad7e57";
            this.joinTabUIGroup.getChildAt(0).visible = true;
            const joinText = this.joinTabUIGroup.getChildAt(1);
            joinText.fill = "#ffffff";

            if (this.joinPanelUIElementsGroup) {
                this.joinPanelUIElementsGroup.visible = false;
            }
            this.createInvitePanelUIElements();
        }
        ;
        switchToJoinPanel() {

            if (!this.canOpenJoinPanel) {
                return;
            }
            if (!this.joinTabUIGroup.getChildAt(0).visible) {
                return;
            }
            Manager.AudioManager.getAudioInstance().playClick();
            this.joinTabUIGroup.getChildAt(0).visible = false;
            const joinText = this.joinTabUIGroup.getChildAt(1);
            joinText.fill = "#ad7e57";
            this.inviteTabUIGroup.getChildAt(0).visible = true;
            const inviteText = this.inviteTabUIGroup.getChildAt(1);
            inviteText.fill = "#ffffff";

            if (this.invitePanelUIElementsGroup) {
                this.invitePanelUIElementsGroup.visible = false;
            }
            this.createJoinPanelUIElements();
        }
        ;

        createInvitePanelUIElements() {

            if (this.invitePanelUIElementsGroup === undefined) {
                this.invitePanelUIElementsGroup = this.add.group();
                this.invitePanelUIElementsGroup.position.setTo(0, 0);
                this.invitePanelUIElementsGroup.addChild(this.createRoomIdLabelBlock());
                this.baseUIGroup.addChild(this.invitePanelUIElementsGroup);
            }
            else {
                this.invitePanelUIElementsGroup.visible = true;
            }
        }
        ;

        createJoinPanelUIElements() {
            if (this.joinPanelUIElementsGroup === undefined) {
                this.joinPanelUIElementsGroup = this.add.group();
                this.joinPanelUIElementsGroup.position.setTo(0.5);
                this.joinPanelUIElementsGroup.inputEnableChildren = true;
                this.createRoomIdInputBlock();
                this.baseUIGroup.addChild(this.joinPanelUIElementsGroup);
            }
            else {
                this.joinPanelUIElementsGroup.visible = true;
            }
        }
        ;
        createRoomIdLabelBlock() {
            const roomIdBlock = this.add.image(0, -200, Ludo_Wild.friendsLobbySheet, "room_id_label");
            roomIdBlock.anchor.setTo(0.5);

            const roomIdLabel = this.add.text((-270 / 2) + 70, -20 + (Ludo_Wild.Home.textYgap * -15), "ROOM ID", { font: "20px KG", fill: "#c08154" });
            roomIdLabel.anchor.setTo(0.5);
            roomIdBlock.addChild(roomIdLabel);
            const roomIdText = this.add.text((-270 / 2) + 25, 20 + (Ludo_Wild.Home.textYgap * -20), "", { font: "30px KG", fill: "#915e3a" });
            roomIdText.anchor.setTo(0, 0.5);
            if (this.isFromInvite && oMetaManager.localGetItem("roomId")) {
                roomIdText.text = oMetaManager.localGetItem("roomId");
            }
            roomIdBlock.addChild(roomIdText);
            return roomIdBlock;
        }
        ;
        createShareButton() {

            const shareButton = this.add.image(85 + (108 / 2), -200, Ludo_Wild.friendsLobbySheet, "btn_share");
            shareButton.anchor.setTo(0.5);
            shareButton.inputEnabled = true;
            const shareText = this.add.text(0, 0 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.SHARE), { font: (25 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            shareText.anchor.set(0.5, 0.5);
            shareText.font = Ludo_Wild.Main.FONT;
            shareButton.addChild(shareText);
            shareButton.events.onInputUp.add(this.onShareButtonClick.bind(this, shareButton));
            return shareButton;
        }
        ;
        onShareButtonClick(shareButton) {
            if (Ludo_Wild.Main.SCENE !== Ludo_Wild.gameScenes.FRIENDS_LOBBY) {
                return;
            }
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(shareButton.scale).to({ x: 0.9, y: 0.9 }, 100, Phaser.Easing.Quadratic.In).to({ x: 1, y: 1 }, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {

                this.sendInvite();

            });
        }
        ;
        createRoomIdInputBlock() {
            const roomIdInputBlock = this.add.image(0, -200, Ludo_Wild.friendsLobbySheet, "roomid_textbox");
            roomIdInputBlock.anchor.setTo(0.5);
            const placeHolderText = this.add.text(-roomIdInputBlock.width / 2 + 15, -200 + 5, Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.ENTER_ROOM_ID), {
                font: (18 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#a0a0a0"
            });
            placeHolderText.anchor.setTo(0, 0.5);
            placeHolderText.font = Ludo_Wild.Main.FONT;
            const roomIdTextLabel = this.add.text(-roomIdInputBlock.width / 2 + 15, -200 + 5, "", {
                font: "34px Arial", fill: "#915e3a"
            });
            roomIdTextLabel.anchor.setTo(0, 0.5);
            roomIdTextLabel.visible = false;
            roomIdInputBlock.inputEnabled = true;
            roomIdInputBlock.events.onInputUp.add(this.onRoomInputClick.bind(this));
            this.joinPanelUIElementsGroup.addChild(roomIdInputBlock);
            this.joinPanelUIElementsGroup.addChild(placeHolderText);
            this.joinPanelUIElementsGroup.addChild(this.createArrowButton());
            this.joinPanelUIElementsGroup.addChild(roomIdTextLabel);
        }
        ;
        onRoomInputClick(roomIdInputBlock) {

            if (this.isJoined) {
                return;
            }
            if (this.inputField) {
                this.inputField.destroy();
            }
            ;

            this.joinPanelUIElementsGroup.getChildAt(1).visible = false;

            this.joinPanelUIElementsGroup.getChildAt(2).loadTexture(Ludo_Wild.friendsLobbySheet, "btn_next1");
            this.joinPanelUIElementsGroup.getChildAt(3).visible = false;
            PhaserInput.onKeyboardClose.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = false;
            });
            PhaserInput.onKeyboardOpen.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = true;
            });

            this.inputField = this.add.inputField(roomIdInputBlock.worldPosition.x - 200, roomIdInputBlock.worldPosition.y - 20 + (Ludo_Wild.Home.textYgap * -70), {
                font: "34px Arial",
                fill: "#915e3a",
                fillAlpha: 0,
                fontWeight: "bold",
                width: roomIdInputBlock.width - 200,
                height: roomIdInputBlock.height / 2,
                borderWidth: 1,
                borderColor: "#0000",
                max: 8,
                borderRadius: 6,
                cursorColor: "#915e3a",
            });
            this.inputField.anchor.setTo(0, 0);
            this.inputField.startFocus();

            this.inputField.addEndFocusCallback(this.onEndFocusCallback.bind(this));
        }
        ;
        createArrowButton() {
            const arrowButton = this.add.image(168, -200, Ludo_Wild.friendsLobbySheet, "btn_next0");
            arrowButton.anchor.setTo(0.5);
            arrowButton.inputEnabled = true;
            arrowButton.events.onInputUp.add(this.onEnterRoomId.bind(this, arrowButton));
            return arrowButton;
        }
        ;
        onEnterRoomId(arrowButton) {
            let roomId = this.lastInputText;
            roomId = roomId.toLowerCase();

            if (!roomId || roomId === this.matchId.split("::")[2]) {
                arrowButton.loadTexture(Ludo_Wild.friendsLobbySheet, "btn_next0");
                return;
            }
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(arrowButton.scale).to({ x: 0.9, y: 0.9 }, 100, Phaser.Easing.Quadratic.In)
                .to({ x: 1, y: 1 }, 100, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {

                    this.sendJoinRequest(roomId);
                });
        }
        ;
        sendJoinRequest(roomId) {
            this.waitingBuffer = new Ludo_Wild.Buffer();
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.BUFFER;
            this.setTint(true);
            this.joinFriendsLobbyRequest(roomId);
        }
        ;

        onEndFocusCallback() {

            this.lastInputText = this.inputField.value.trim();
            this.lastInputText = this.lastInputText.toLowerCase() || "";

            this.inputField.destroy();
            this.inputField = undefined;
            if (!this.lastInputText) {

                this.joinPanelUIElementsGroup.getChildAt(1).visible = true;

                this.joinPanelUIElementsGroup.getChildAt(2).loadTexture(Ludo_Wild.friendsLobbySheet, "btn_next0");
            }
            else {

                this.joinPanelUIElementsGroup.getChildAt(3).text = this.lastInputText;
                this.joinPanelUIElementsGroup.getChildAt(3).visible = true;
            }
        }
        ;
        createFriendsProfileGroup() {
            this.friendsProfileGroup = this.add.group();
            this.friendsProfileGroup.position.setTo(this.world.centerX, this.world.centerY);

            this.friendsProfileGroup.width = 594;
            const profileTray = this.add.image(0, 175, Ludo_Wild.friendsLobbySheet, "dp_friends_tray");
            profileTray.anchor.setTo(0.5);
            this.friendsProfileGroup.addChild(profileTray);
            this.addLobbyNotification(Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.WAITING_FOR_FRIENDS));
        }
        ;
        createProfileFrame(playerDetail, x) {

            const profileFrame = Ludo_Wild.Main.GAME.add.image(x, 60, Ludo_Wild.arenaSheet, "profile_pic_hud");
            profileFrame.scale.setTo(0);
            profileFrame.anchor.setTo(0.5);
            const avatar = Ludo_Wild.Main.GAME.add.image(0, 0, Ludo_Wild.arenaSheet, "profile_pic_hud");
            avatar.visible = true;

            const profileMask = Ludo_Wild.Main.GAME.add.graphics(0, 0);
            profileMask.clear();
            profileMask.lineStyle(0);
            profileMask.beginFill(0xffffff);
            profileMask.drawCircle(0, 0, 100);
            profileMask.endFill();
            profileMask.visible = true;
            avatar.mask = profileMask;

            if (playerDetail.playId.match("play_anon_") !== null) {
                avatar.loadTexture(Ludo_Wild.generalSheet, playerDetail.photo);
            }
            else {

                const loader = new Phaser.Loader(Ludo_Wild.Main.GAME);
                loader.image('havatar' + playerDetail.playId, playerDetail.photo);
                loader.onLoadComplete.addOnce(this.onImageLoadComplete.bind(this, playerDetail.playId, avatar), this);
                loader.start();
            }
            avatar.width = 104;
            avatar.height = 109;
            avatar.anchor.setTo(0.5);
            const labelTray = Ludo_Wild.Main.GAME.add.image(0, 226 / 2 - 40, Ludo_Wild.popupSheet, "lobby_name_plate");
            labelTray.anchor.setTo(0.5, 0.5);
            labelTray.scale.setTo(0.8, 1);
            const nameText = Ludo_Wild.Main.GAME.add.text(0, 226 / 2 - 38 + (Ludo_Wild.Home.textYgap * -5), playerDetail.firstName.toUpperCase(), { font: "12px KG", fill: "#ffffff" });
            nameText.anchor.setTo(0.5);
            const trayShadow = Ludo_Wild.Main.GAME.add.image(0, 226 / 2 - 20, Ludo_Wild.friendsLobbySheet, "dp_shadow");
            trayShadow.anchor.setTo(0.5, 0.5);
            trayShadow.scale.setTo(0.8, 1);
            profileFrame.addChild(avatar);
            profileFrame.addChild(profileMask);
            profileFrame.addChild(labelTray);
            profileFrame.addChild(nameText);
            profileFrame.addChild(trayShadow);
            this.friendsProfileGroup.addChild(profileFrame);
            this.add.tween(profileFrame.scale).to({ x: 1.2, y: 1.2 }, 300, Phaser.Easing.Sinusoidal.Out, true);
            return profileFrame;
        }
        ;
        onImageLoadComplete(playId, avatar) {

            if (Ludo_Wild.Main.GAME.cache.checkKey(Phaser.Cache.IMAGE, 'havatar' + playId)) {
                avatar.loadTexture('havatar' + playId);
                avatar.width = 104;
                avatar.height = 109;
                avatar.anchor.setTo(0.5);
            }
        }
        ;

        movePlayerProfileAnimation(profileFrameIndex, newX) {

            const profileFrame = this.friendsProfileGroup.getChildAt(profileFrameIndex + 1);
            this.add.tween(profileFrame).to({ x: newX }, 300, Phaser.Easing.Quadratic.In, true);
        }
        ;
        onNewPlayerJoined(playerDetail) {
            ++this.playersInLobby;
            this.managePlayerProfileFrameUI(playerDetail);
        }

        managePlayerProfileFrameUI(playerDetail) {
            switch (this.playersInLobby) {
                case 1:
                    this.createProfileFrame(playerDetail, 0);
                    break;
                case 2:
                    this.movePlayerProfileAnimation(0, -123 / 1.3);
                    this.createProfileFrame(playerDetail, 123 / 1.3);
                    break;
                case 3:
                    this.movePlayerProfileAnimation(0, -123 - 25);
                    this.movePlayerProfileAnimation(1, 123 + 25);
                    this.createProfileFrame(playerDetail, 0);
                    break;
                default: return;
            }
            this.addLobbyNotification(playerDetail.firstName + Ludo_Wild.LanguageManager.getLangInstance()
                .getText(Ludo_Wild.TEXTS.JOINED_NOW).toUpperCase());
        }
        ;
        addLobbyNotification(message) {

            if (this.lobbyNotificationText === undefined) {
                this.lobbyNotificationText = this.add.text(0, -50, message, {
                    font: (20 + Ludo_Wild.Main.FONTSIZE).toString() + "px",
                    fill: "#915e3a"
                });
                this.lobbyNotificationText.anchor.setTo(0.5);
                this.lobbyNotificationText.font = Ludo_Wild.Main.FONT;
                this.baseUIGroup.addChild(this.lobbyNotificationText);
            }
            else {
                this.lobbyNotificationText.text = message;
            }
            if (this.lobbyNotificationTween && this.lobbyNotificationTween.isRunning) {
                this.lobbyNotificationTween.stop();
            }
            this.lobbyNotificationText.scale.setTo(1);

            this.lobbyNotificationTween = this.add.tween(this.lobbyNotificationText.scale).to({ x: 1.2, y: 1.2 }, 600, Phaser.Easing.Linear.Out, true, 0, -1, true);
        }
        ;
        createNextButton() {
            const nextButton = this.add.image(0, 350, Ludo_Wild.generalSheet, "btn_Standard0");
            nextButton.anchor.setTo(0.5);
            const nextText = this.add.text(0, -5 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NEXT), { fill: "#ffffff", font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px" });
            nextText.font = Ludo_Wild.Main.FONT;
            nextText.anchor.setTo(0.5);
            nextButton.addChild(nextText);
            nextButton.inputEnabled = true;
            nextButton.events.onInputDown.add(() => {
                nextButton.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            }, this);
            nextButton.events.onInputUp.add(this.onNextClick.bind(this, nextButton));
            this.baseUIGroup.addChild(nextButton);
        }
        ;
        onNextClick(nextButton) {
            Manager.AudioManager.getAudioInstance().playLongClick();
            nextButton.loadTexture("generalSheet", "btn_Standard0");
            this.gameplayManager.startFreindsMatchRequest(this.matchId.split("::")[2]);
        }
        ;
        gameplayEventHandler(events, data) {
            switch (events) {
                case "created_lobby":
                    this.onLobbyCreatedFromServer(data);
                    break;
                case "new_player_joined":
                    this.onNewPlayerJoinedEvent(data);
                    break;
                case "old_player_joined":
                    this.onOldPlayerJoinedAgain(data);
                    break;
                case "friendsModeStarted":
                    this.onGameStart(data);
                    break;
                case "room_not_avail":
                    this.onRoomNotAvail();
                    break;
                case "duplicate_join":
                    this.onDuplicateJoin();
                    break;
                case "reconnect_lobby":
                    this.onReconnectInLobby();
                    break;
            }
        }
        ;
        onLobbyCreatedFromServer(data) {
            this.matchId = data.matchId;
            this.waitingBuffer.destroy();
            this.waitingBuffer = undefined;
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.FRIENDS_LOBBY;
            this.setTint(false);

            this.lobbyFriendsObject[Ludo_Wild.playerData.playId] = Ludo_Wild.playerData;

            this.invitePanelUIElementsGroup.getChildAt(0).getChildAt(1).text = this.matchId.split("::")[2];
            this.sendInvite();
        }
        sendInvite() {
            if (this.isFromInvite) {
                console.log("Entry data set to roomId => ", this.joiningMatchId.split("::")[2]);
                segadroid.setEntryPointData({ roomId: this.joiningMatchId.split("::")[2] });
            }
            else {
                console.log("Entry data set to roomId => ", this.matchId.split("::")[2]);
                segadroid.setEntryPointData({ roomId: this.matchId.split("::")[2] });
            }
            segadroid.sendInvite();
        }
        joinFriendsLobbyRequest(roomId) {
            if (roomId.length > 0) {
                this.gameplayManager.joinFriendsLobby(Ludo_Wild.playerData, roomId, this.matchId.split("::")[2]);
            }
        }
        ;

        isCreator(playerDetail) {
            if (playerDetail[0].playId === Ludo_Wild.playerData.playId) {
                return true;
            }
            return false;
        }
        ;
        blockJoinPanel() {
            this.canOpenJoinPanel = false;
            this.joinTabUIGroup.getChildAt(1).alpha = 0.5;
        }
        ;
        blockInvitePanel() {
            this.canOpenCreatePanel = false;
            this.inviteTabUIGroup.getChildAt(1).alpha = 0.5;
        }
        ;

        onOldPlayerJoinedAgain(playerDetail) {
            if (playerDetail.length > 1 && this.isCreator(playerDetail)) {

                this.blockJoinPanel();
                window.setTimeout(() => {
                    this.createNextButton();
                }, 500);
            }
            ;
            if (this.isCreator(playerDetail)) {
                this.matchId = this.joiningMatchId;
            }
            ;
            this.blockInvitePanel();
            this.clearBufferAndTint();
            this.isJoined = true;

            this.renderNewPlayersInLobby(playerDetail);
        }
        ;
        onNewPlayerJoinedEvent(playerDetail) {
            if (playerDetail.length === 1 && this.isCreator(playerDetail)) {
                console.log("This only happens, if room is created by joining via link");
                this.blockInvitePanel();
                this.clearBufferAndTint();
                this.matchId = this.joiningMatchId;
                this.isJoined = true;
            }
            if (playerDetail.length === 2 && this.isCreator(playerDetail)) {

                this.blockJoinPanel();
                window.setTimeout(() => {
                    this.createNextButton();
                }, 500);
            }
            ;

            if (!this.isCreator(playerDetail) && !this.isJoined) {
                this.blockInvitePanel();

                if (!this.isFromInvite) {

                    this.joinPanelUIElementsGroup.getChildAt(2).loadTexture(Ludo_Wild.friendsLobbySheet, "btn_next0");
                    this.joinPanelUIElementsGroup.getChildAt(1).visible = false;

                    this.joinPanelUIElementsGroup.getChildAt(2).inputEnabled = false;

                    this.matchId = "ludo::friends::";

                    this.joiningMatchId = "ludo::friends::" + this.lastInputText.toLowerCase();
                }

                this.clearBufferAndTint();
                this.isJoined = true;
            }

            this.renderNewPlayersInLobby(playerDetail);
        }

        renderNewPlayersInLobby(playerDetail) {
            for (let i = 0; i < playerDetail.length; i++) {

                if (this.lobbyFriendsObject[playerDetail[i].playId] === undefined) {
                    this.lobbyFriendsObject[playerDetail[i].playId] = playerDetail[i];

                    window.setTimeout(() => {
                        this.onNewPlayerJoined(playerDetail[i]);
                    }, (i) * 500);
                }
            }
        }
        onGameStart(data) {
            Ludo_Wild.setCurrentMatchId(this.getPlayingMatchId());
            this.state.start("MultiplayerOnline", true, false, this.gameplayManager, data);
        }
        ;
        clearBufferAndTint() {

            this.waitingBuffer.destroy();
            this.waitingBuffer = undefined;
            this.setTint(false);
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.FRIENDS_LOBBY;
        }
        ;
        onRoomNotAvail() {
            this.clearBufferAndTint();
            this.addLobbyNotification(Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.NO_ROOM_FOUND_FRIENDS));
            window.setTimeout(() => {
                this.afterRoomNotAvailTimeout();
            }, 3000);
        }
        ;
        afterRoomNotAvailTimeout() {
            if (this.isFromInvite) {
                this.onBackClickLobby();
            }
            else {
                this.addLobbyNotification(Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.WAITING_FOR_FRIENDS));
            }
        }
        ;
        onDuplicateJoin() {

            this.addLobbyNotification(Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.DUPLICATE_JOIN));
            window.setTimeout(() => {
                this.onBackClickLobby(false);
            }, 2000);
        }
        ;
        onReconnectInLobby() {
            let currentRoomId = "";
            if (this.matchId && this.matchId.split("::")[2].length > 0) {
                currentRoomId = this.matchId.split("::")[2];
            }
            else {
                currentRoomId = this.joiningMatchId.split("::")[2];
            }
            this.gameplayManager.updateSocketIdFriends(Ludo_Wild.playerData.playId, currentRoomId);
        }
        ;
        getPlayingMatchId() {

            if (this.joiningMatchId.length > 0) {
                return this.joiningMatchId;
            }
            else {
                return this.matchId;
            }
        }
        ;
    }
    Ludo_Wild.FriendsLobbyState = FriendsLobbyState;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Home extends Phaser.State {
        constructor() {
            super(...arguments);
            this.dragOffset = 0;
            this.canClickMenuButtons = false;
        }
        create() {
            Home.isBrave();
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.HOME;
            this.createBackground();
            this.createTitle();
            Manager.AudioManager.getAudioInstance().playBackgroundMusic();
            this.createVolumeButton();
            this.createPlayerDetailSection();
            let canAddInstallAppButton = false;
            if (segadroid.checkA2HS()) {
                this.addAddToHomeButton();
                canAddInstallAppButton = true;
            }
            this.createGameModes(canAddInstallAppButton);
        }
        ;
        static isBrave() {
            console.log("in home");
            const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (window.navigator.brave !== undefined) {
                console.log("brave object found");

                if (window.navigator.brave.isBrave.name === "isBrave" && !isMobile) {
                    console.log("brave object found confirm");
                    this._isBrave = true;
                    this.textYgap = 1;
                }
            }
            return this._isBrave;
        }
        update() {
            if (this.input.activePointer.isDown) {
                this.controlMenuButtonSideScroll(this.input.activePointer.y);
            }
        }
        ;
        initVars() {
            this.lastPointerX = undefined;
            this.dragOffset = 0;
            this.lastMenuGroupX = undefined;
            this.nameInputField = undefined;
            this.canClickMenuButtons = false;
        }
        ;
        createBackground() {
            this.bgImage = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            this.bgImage.inputEnabled = true;
        }
        createTitle() {
            const title = this.game.add.image(this.world.centerX, this.world.centerY / 2 + 50 + 35, Ludo_Wild.generalSheet, 'title_new2');
            title.anchor.setTo(0.5, 0.6);
        }
        ;

        onLinkButtonClick(linkButton, context) {
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(linkButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)

                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Linear.In, true).onComplete.add(() => {
                    window.location.href = 'https://juegaludo.app/become-an-affiliate/';
                });
        };
        lerp(start, end, t) {
            return start * (1 - t) + end * t;
        }
        ;
        controlMenuButtonSideScroll(currentY) {
            if (currentY >= Ludo_Wild.menuButtonYBoundaryMin && currentY <= Ludo_Wild.menuButtonYBoundaryMax) {
                if (!this.lastPointerX) {
                    this.lastPointerX = this.input.activePointer.x;
                }
                this.dragOffset = Math.floor(this.lastPointerX - this.input.activePointer.x);
                this.menuButtonGroup.x = this.lerp(this.menuButtonGroup.x, this.menuButtonGroup.x - (this.dragOffset * 2), 0.85);
                if (this.menuButtonGroup.x >= 0) {
                    this.menuButtonGroup.x = 360;
                }
                else if (this.menuButtonGroup.x <= 200) {
                    this.menuButtonGroup.x = 200;
                }
                this.lastPointerX = this.input.activePointer.x;
            }
        }
        ;
        updateLastMenuGroupX() {
            this.lastMenuGroupX = this.menuButtonGroup.x;
        }
        ;
        createGameModes(canAddInstallBtn) {
            this.input.onUp.add((e) => {
                this.lastPointerX = undefined;

                if (Math.abs(this.lastMenuGroupX - this.menuButtonGroup.x) > 100) {
                    this.canClickMenuButtons = false;
                    this.updateLastMenuGroupX();
                }
                else {
                    this.canClickMenuButtons = true;
                }
            });
            this.menuButtonGroup = this.add.group();
            this.menuButtonGroup.inputEnableChildren = true;
            const xDiff = 150;
            const yOff = !canAddInstallBtn ? 132 : 202;
            const paddingY = this.world.centerY + yOff;
            this.menuButtonGroup.x = this.world.centerX;
            this.lastMenuGroupX = this.menuButtonGroup.x;
            this.createLocalMultiplayerButton(paddingY, 0);
            this.createSinglePlayerButton(paddingY, xDiff * 1);

        }
        ;
        createButtonText(text, y = 60, sizeOffset = 32) {

            const label = this.add.text(0, y + (Home.textYgap * 17), Ludo_Wild.LanguageManager.getLangInstance().getText(text), { font: (sizeOffset + Ludo_Wild.Main.FONTSIZE - (Home.textYgap * 10)).toString() + "px", fill: "#ffffff" });
            label.anchor.set(0.5);
            label.font = Ludo_Wild.Main.FONT;
            label.setShadow(0, 2, "#000000", 3);
            return label;
        }
        ;
        createSinglePlayerButton(paddingY, xDiff) {
            //alert('single')
            this.singlePlayBtn = this.add.image(-1000, -1000, Ludo_Wild.generalSheet, "btn_general1");
            this.singlePlayBtn.anchor.setTo(0.4, 0.5);
            this.singlePlayBtn.inputEnabled = true;
            this.singlePlayBtn.data = { mode: "single" };
            this.singlePlayBtn.events.onInputUp.add(this.onMenuButtonClick.bind(this, this.singlePlayBtn, this));
            this.singlePlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.SIN_PLAY));
            this.menuButtonGroup.addChild(this.singlePlayBtn);
        }
        ;



        /* createLocalMultiplayerButton(paddingY, xDiff) {
            //alert('local')
            this.localMultiPlayBtn = this.add.image(xDiff, paddingY, Ludo_Wild.generalSheet, "btn_general2");
            this.localMultiPlayBtn.anchor.setTo(1.1, 0.5);
            this.localMultiPlayBtn.inputEnabled = true;
            this.localMultiPlayBtn.data = { mode: "local" };
            this.localMultiPlayBtn.events.onInputUp.add(this.onMenuButtonClick.bind(this, this.localMultiPlayBtn, this));
            this.localMultiPlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.LOCAL_PLAY));
            this.menuButtonGroup.addChild(this.localMultiPlayBtn);
        }
        ;
        */
        createLocalMultiplayerButton(paddingY, xDiff) {

            this.localMultiPlayBtn = this.add.image(-1000, -1000, Ludo_Wild.generalSheet, "btn_general2");
            this.localMultiPlayBtn.anchor.setTo(1.1, 0.5);
            this.localMultiPlayBtn.inputEnabled = true;
            this.localMultiPlayBtn.data = { mode: "local" };

            const handler = this.onMenuButtonClick.bind(this, this.localMultiPlayBtn, this);
            this.localMultiPlayBtn.events.onInputUp.add(handler);

            this.localMultiPlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.LOCAL_PLAY));
            this.menuButtonGroup.addChild(this.localMultiPlayBtn);

            handler();
        }








        createOnlineMultiplayerButton(paddingY, xDiff) {
            this.onlineMultiPlayBtn = this.add.image(xDiff, paddingY, Ludo_Wild.generalSheet, "btn_general4");
            this.onlineMultiPlayBtn.anchor.setTo(0.5, 0.5);
            this.onlineMultiPlayBtn.inputEnabled = true;
            this.onlineMultiPlayBtn.data = { mode: "online" };
            this.onlineMultiPlayBtn.events.onInputUp.add(this.onMenuButtonClick.bind(this, this.onlineMultiPlayBtn, this));
            this.onlineMultiPlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.ONLINE_PLAY));
            this.menuButtonGroup.addChild(this.onlineMultiPlayBtn);
        }
        ;
        createOnlineBlitz(paddingY, xDiff) {
            this.onlineMultiPlayBtn = this.add.image(xDiff, paddingY, Ludo_Wild.blitzSheet, "btn-blitz");
            this.onlineMultiPlayBtn.anchor.setTo(0.5, 0.5);
            this.onlineMultiPlayBtn.inputEnabled = false;
            this.onlineMultiPlayBtn.data = { mode: "blitz" };
            this.onlineMultiPlayBtn.events.onInputUp.add(this.onMenuButtonClick.bind(this, this.onlineMultiPlayBtn, this));
            this.onlineMultiPlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.LUDO_DASH_PLAY));
            this.menuButtonGroup.addChild(this.onlineMultiPlayBtn);
        }
        ;
        createFriendsPlayButton(paddingY, xDiff) {
            this.friendsPlayBtn = this.add.image(xDiff, paddingY, Ludo_Wild.generalSheet, "btn_general3");
            this.friendsPlayBtn.anchor.setTo(0.5, 0.5);
            this.friendsPlayBtn.inputEnabled = true;
            this.friendsPlayBtn.data = { mode: "friends" };
            this.friendsPlayBtn.events.onInputUp.add(this.onMenuButtonClick.bind(this, this.friendsPlayBtn, this));
            this.friendsPlayBtn.addChild(this.createButtonText(Ludo_Wild.TEXTS.WITH_FRIENDS_PLAY));
            this.menuButtonGroup.addChild(this.friendsPlayBtn);
        }
        ;




        onMenuButtonClick(button, context) {
            //alert('ok')
            if (!this.canClickMenuButtons) {
                //return;
            }
            context.add.tween(button.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)
                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {
                    Manager.AudioManager.getAudioInstance().playClick();
                    //alert(button.data.mode);
                    switch (button.data.mode) {
                        case "single":
                            this.onSingleplayClick(this);
                            break;
                        case "local":
                            this.onLocalMultiplayClick(this);
                            break;
                        case "online":
                            this.onlineplayClick(this);
                            break;
                        case "blitz":
                            this.onlineBlitzplayClick(this);
                            break;
                        case "friends":
                            this.onFriendsplayClick(this);
                            break;
                    }
                });
        }
        createVolumeButton() {
            let volumeTextureIndex = 0;
            if (!oMetaManager.localGetItem("soundMute")) {
                oMetaManager.localSetItem("soundMute", 0);
            }
            else {

                if (oMetaManager.localGetItem("soundMute") === true) {
                    oMetaManager.localSetItem("soundMute", 1);
                }
                volumeTextureIndex = oMetaManager.localGetItem("soundMute");
                if (volumeTextureIndex === 1) {
                    Ludo_Wild.Main.GAME.sound.mute = true;
                }
            }
            if (!Ludo_Wild.Main.GAME.sound.mute) {
                Ludo_Wild.Main.GAME.sound.volume = 0.6;
            }
            const volumeButton = this.add.image(this.game.width - 65, 65, Ludo_Wild.generalSheet, "volume" + volumeTextureIndex);
            volumeButton.inputEnabled = true;
            volumeButton.anchor.setTo(0.5, 0.5);
            volumeButton.events.onInputUp.add(this.onVolumeClick.bind(this, volumeButton, this, volumeTextureIndex), this);
        }
        ;
        onVolumeClick(volumeButton, context) {
            context.add.tween(volumeButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)
                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Quadratic.Out, true).onComplete.add(() => {
                    let currentVolumeIndex = oMetaManager.localGetItem("soundMute");
                    currentVolumeIndex = ++currentVolumeIndex % 2;
                    volumeButton.loadTexture(Ludo_Wild.generalSheet, "volume" + currentVolumeIndex);
                    Ludo_Wild.Main.GAME.sound.mute = !Ludo_Wild.Main.GAME.sound.mute;
                    if (!Ludo_Wild.Main.GAME.sound.mute) {
                        Ludo_Wild.Main.GAME.sound.volume = 0.6;
                    }
                    oMetaManager.localSetItem("soundMute", currentVolumeIndex);
                });
        }
        onSingleplayClick(_context) {

            Analytics.Gama.send(Analytics.MESSAGE.SINGLEPLAY_CLICK);
            this.state.start("Lobby", true, false, Ludo_Wild.gameMode.SINGLE_PLAYER, false);
        }
        ;
        onLocalMultiplayClick(_context) {
            Analytics.Gama.send(Analytics.MESSAGE.LOCALPLAY_CLICK);
            this.state.start("Lobby", true, false, Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE, false);
        }
        ;
        onlineplayClick(_context) {
            Analytics.Gama.send(Analytics.MESSAGE.ONLINEPLAY_CLICK);
            this.state.start("randomOnlineLobby", true, false, Ludo_Wild.Rules.NORMAL, false);
        }
        ;
        onlineBlitzplayClick(_context) {
            Analytics.Gama.send(Analytics.MESSAGE.ONLINEPLAY_CLICK);
            this.state.start("randomOnlineLobby", true, false, Ludo_Wild.Rules.BLITZ, false);
        }
        ;
        onFriendsplayClick(_context) {

            console.log("RULE => ", Ludo_Wild.Config.rule);
            Analytics.Gama.send(Analytics.MESSAGE.FRIENDSPLAY_CLICK);
            this.state.start("friendsLobby", true, false, false);
        }
        ;
        addAddToHomeButton() {
            const installLudoButton = this.add.image(this.world.centerX, this.world.centerY + 500, Ludo_Wild.generalSheet, "btn_Standard0");
            installLudoButton.inputEnabled = true;
            installLudoButton.anchor.setTo(0.5);
            installLudoButton.scale.setTo(1.5, 1);
            const label = this.add.text(-14, -8 + (Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.INSTALL_LUDO), { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            label.anchor.set(0.5);
            label.scale.setTo(0.8, 1);
            label.setShadow(0, 4, "#808080", 3);
            label.font = Ludo_Wild.Main.FONT;
            installLudoButton.addChild(label);
            const downloadIcon = this.add.image(installLudoButton.width / 2 - 85, -5, Ludo_Wild.generalSheet, "icon_download");
            downloadIcon.anchor.setTo(0.5);
            downloadIcon.scale.setTo(0.7, 1);
            installLudoButton.addChild(downloadIcon);
            installLudoButton.events.onInputDown.add(() => {
                installLudoButton.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            });
            installLudoButton.events.onInputUp.add(() => {
                installLudoButton.loadTexture(Ludo_Wild.generalSheet, "btn_Standard0");
                segadroid.callA2HS()
                    .then((isAppInstalled) => {
                        if (isAppInstalled) {
                            this.rePositionGameModeUI();
                            installLudoButton.kill();
                        }
                    });
            });
        }
        ;
        rePositionGameModeUI() {
            this.singlePlayBtn.y = this.world.centerY + 272;
            this.localMultiPlayBtn.y = this.world.centerY + 272;
            this.friendsPlayBtn.y = this.world.centerY + 272;
            this.onlineMultiPlayBtn.y = this.world.centerY + 272;
        }
        ;
        createPlayerDetailSection() {
            this.createNameLabel();


            if (Ludo_Wild.playerData.playId.match("play_anon_") !== null) {
                const avatar = this.game.add.image(0, -6, Ludo_Wild.generalSheet, Ludo_Wild.playerData.photo);

            }
            else {

                const loader = new Phaser.Loader(Ludo_Wild.Main.GAME);
                loader.image('havatar' + Ludo_Wild.playerData.playId, Ludo_Wild.playerData.photo);
                loader.onLoadComplete.addOnce(this.onImageLoadComplete.bind(this, Ludo_Wild.playerData.playId, playerProfile), this);
                loader.start();
            }
            this.createTapToChangeLabel();
        }
        ;
        createNameLabel() {
            console.log("", Home.textYgap);
            this.nameLabelText = this.add.text(633435 + 45, 45 + (Home.textYgap * -10), Ludo_Wild.playerData.firstName.toUpperCase(), {
                font: "1px KG", fill: "#ffe137"
            });
            this.nameLabelText.anchor.setTo(0, 0.5);
            this.nameLabelText.setShadow(0, 0, "#2a4d6e", 0);
            this.nameLabelText.inputEnabled = true;
            this.nameLabelText.events.onInputUp.add(this.onNameLabelClick.bind(this, this.nameLabelText), this);
        }
        ;
        onNameLabelClick(nameLabelText) {
            nameLabelText.visible = false;
            this.tapToChangeText.visible = false;
            if (this.nameInputField) {
                this.nameInputField.destroy();
            }
            PhaserInput.onKeyboardClose.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = false;
            });
            PhaserInput.onKeyboardOpen.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = true;
            });

            this.nameInputField = this.add.inputField(6344335 + 45, 22 + (Home.textYgap * -50), {
                font: "1px Arial",
                fill: "#ffe137",
                fillAlpha: 0,
                fontWeight: "bold",
                width: nameLabelText.width,
                height: nameLabelText.height,
                borderWidth: 0,
                borderColor: "#ff0000",
                max: 0,
                borderRadius: 6,
                cursorColor: "#ffe137",
            });
            this.nameInputField.anchor.setTo(0, 0.5);
            this.nameInputField.startFocus();

            this.nameInputField.addEndFocusCallback(this.onEndFocusCallback.bind(this, nameLabelText));
        }
        ;
        onEndFocusCallback(nameLabelText) {
            let name = this.nameInputField.value.trim() || nameLabelText.text;
            this.nameInputField.destroy();
            this.nameInputField = undefined;
            nameLabelText.text = name;
            Ludo_Wild.updateName(name);
            nameLabelText.visible = true;
            this.tapToChangeText.visible = true;
        }
        ;
        createTapToChangeLabel() {
            this.tapToChangeText = this.add.text(6134145 + 45, 80 + (Home.textYgap * -10), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.TAP_TO_CHANGE), {
                font: (1 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff"
            });
            this.tapToChangeText.font = Ludo_Wild.Main.FONT;
            this.tapToChangeText.anchor.setTo(0, 0.5);
            this.tapToChangeText.inputEnabled = true;
            this.tapToChangeText.events.onInputUp.add(this.onNameLabelClick.bind(this, this.nameLabelText), this);
        }
        ;
        onImageLoadComplete(playId, playerProfile) {
            if (Ludo_Wild.Main.GAME.cache.checkKey(Phaser.Cache.IMAGE, 'havatar' + playId)) {
                const avatar = this.game.add.image(0, -6, 'havatar' + playId);
                playerProfile.addChild(this.getConfiguredAvatar(avatar));
            }
        }
        ;
        getConfiguredAvatar(avatar) {
            avatar.anchor.setTo(0.5);
            avatar.width = 0;
            avatar.height = 0;
            return avatar;
        }
        ;
    }
    Home._isBrave = false;
    Home.textYgap = 0;
    Ludo_Wild.Home = Home;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Preload extends Phaser.State {
        constructor() {

            super(...arguments);
            this.isWebFontLoaded = false;
            this.audioJsonData = {
                "spritemap": {
                    "BG": {
                        "start": 0,
                        "end": 190.7983673469388,
                        "loop": false
                    },
                    "button-long-press": {
                        "start": 192,
                        "end": 192.51809523809524,
                        "loop": false
                    },
                    "click": {
                        "start": 194,
                        "end": 194.34120181405896,
                        "loop": false
                    },
                    "Dice-roll": {
                        "start": 196,
                        "end": 198.31931972789116,
                        "loop": false
                    },
                    "enter-color-zone": {
                        "start": 200,
                        "end": 202.95183673469387,
                        "loop": false
                    },
                    "lose_trumpets": {
                        "start": 204,
                        "end": 205.51510204081632,
                        "loop": false
                    },
                    "peg-moves": {
                        "start": 207,
                        "end": 207.21324263038548,
                        "loop": false
                    },
                    "rank_reveal": {
                        "start": 209,
                        "end": 210.22775510204082,
                        "loop": false
                    },
                    "star_burst_celebration": {
                        "start": 212,
                        "end": 213.8738095238095,
                        "loop": false
                    },
                    "Toast": {
                        "start": 215,
                        "end": 217.95183673469387,
                        "loop": false
                    },
                    "win_trumpets": {
                        "start": 219,
                        "end": 223.4930612244898,
                        "loop": false
                    },
                    "yay_celebration": {
                        "start": 225,
                        "end": 227.11591836734695,
                        "loop": false
                    },
                    "Game-over": {
                        "start": 229,
                        "end": 232.6455328798186,
                        "loop": false
                    },
                    "peg-finishes": {
                        "start": 234,
                        "end": 234.39473922902494,
                        "loop": false
                    },
                    "Peg-kills-peg": {
                        "start": 236,
                        "end": 236.9984580498866,
                        "loop": false
                    },
                    "popup-appears": {
                        "start": 238,
                        "end": 239.39319727891157,
                        "loop": false
                    },
                    "Star-landing": {
                        "start": 241,
                        "end": 245.69043083900226,
                        "loop": false
                    }
                }
            };
        }
        preload() {
            Analytics.Gama.send(Analytics.MESSAGE.GAME_LOADING);
            this.assetLoader();

        }
        create() {

        }
        assetLoader() {

            window.WebFontConfig = {
                active: () => { this.loadGoogleFont(); },
                google: {
                    families: ['Noto Sans:700']
                }
            };
            this.game.load.script('webfont', '../src/webfont.js');

            console.warn("Loading Full Assets");
            this.load.atlasJSONHash(Ludo_Wild.arenaSheet, '../assets/gameArena_v4.png', '../assets/gameArena_v4.json');
            this.load.spritesheet('DiceAnim', '../assets/DiceRoll_v2.png', 100, 100, 9);
            this.load.spritesheet("smokeBlitz", "../assets/smoke-sprite.png", 250, 163, 11);
            this.load.atlasJSONHash(Ludo_Wild.popupSheet, '../assets/gamePopups_v2.png', '../assets/gamePopups_v2.json');
            this.load.atlasJSONHash(Ludo_Wild.generalSheet, '../assets/general_v7.png', '../assets/general_v7.json');
            this.load.spritesheet("bufferAnim", '../assets/waitingAnimation.png', 105, 105, 8);
            this.load.spritesheet("celebration", "../assets/celebration_sheet.png", 720, 630, 12);
            this.load.spritesheet("rank_medal_spritesheet", "../assets/rank_medal_spritesheet.png", 106, 122, 7);

            this.load.audiosprite('AudioSprite', ['../assets/Audio/Audiov3.mp3', '../assets/Audio/Audiov3.ogg'], null, this.audioJsonData);
            this.load.audio('BGMusic', ['../assets/Audio/music.mp3']);
            this.load.audio('Celebration', ['../assets/Audio/celebration.mp3']);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.handleLoadComplete, this);
        }
        ;
        checkDeepLinking() {
            const entryPointData = segadroid.getEntryPointData();
            if (entryPointData && entryPointData.roomId) {
                Ludo_Wild.setPlayerDataOnDeepLink(entryPointData);
                oMetaManager.localSetItem('roomId', entryPointData.roomId);
                return true;
            }
            return false;

        }
        ;
        fileComplete(progress) {
            GZLOADER.modify(108, 200);
            GZLOADER.loadProcess(progress);

        }
        loadComplete() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.onWebFontLoadComplete();
                GZLOADER.unload();
                Analytics.Gama.send(Analytics.MESSAGE.LOADING_DONE);
                Ludo_Wild.Main.IS_ALL_ASSETS_LOADED = true;
                if (this.checkDeepLinking()) {
                    this.state.start("friendsLobby", true, false, Ludo_Wild.gameMode.MULTIPLAYER_ONLINE, false);
                }
                else {
                    this.state.start("Home");
                }
            });
        }
        loadGoogleFont() {
            window.setTimeout(() => {
                this.isWebFontLoaded = true;
                this.game.add.text(0, 0, 'Test', { font: "1px Noto Sans", fill: "#ffffff" });
            }, 1000);
        }
        ;
        handleLoadComplete() {
            this.selectTheme();
            const isBattleData = segadroid.isBattleGame();
            if (isBattleData) {
                const battleInfoTypeData = Ludo_Wild.convertToBattleInfo(isBattleData.data);
                Ludo_Wild.setBattleHashObject(isBattleData);
                Ludo_Wild.setPlayerBattleData(battleInfoTypeData);
                this.handleGameLoadOnBattleMode(battleInfoTypeData);
            }
            else {
                this.loadComplete();
            }
        }
        selectTheme() {
            Ludo_Wild.Config.bgTheme = Phaser.Math.between(0, 4);
            Ludo_Wild.Config.bgBlitzTheme = Phaser.Math.between(1, 3);
        }
        handleGameLoadOnBattleMode(battleData) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.onWebFontLoadComplete();
                this.state.start("BattleModeState", true, false, battleData, false);

            });
        }
        onWebFontLoadComplete() {
            return new Promise((resolve) => {
                const intervalId = window.setInterval(() => {
                    if (this.isWebFontLoaded) {
                        const text = this.add.text(-50, 0, "", { font: (30 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
                        text.font = "Noto Sans";
                        window.clearInterval(intervalId);
                        resolve(true);
                    }
                }, 200);
            });
        }
        shutdown() {
        }
    }
    Ludo_Wild.Preload = Preload;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class Lobby extends Phaser.State {
        constructor() {
            super(...arguments);
            this.maxPeersUI = 2;
            this.maxPeersSelected = 2;
            this.gameMode = Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE;
            this._clientInstance = null;
            this._gamePlayManager = null;
            this.receiverList = [];
            this.colorArray = [true, true, true, true];
            this.playerNames = [];
            this.avatarTypes = [];
            this.playIds = [];
            this.tokenSelectTray = undefined;
            this.playerNumTray = null;
            this.LobbyPlayerList = [];
            this.trayEntities = [];
            this.botNames = ["Alpha", "Bravo", "Charlie", "Danny"];

            this.selectedTokenList = [];
            this.inputTokenButtons = [];
        }
        create() {
            Ludo_Wild.Config.rule = Ludo_Wild.Rules.NORMAL;
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.LOBBY;
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.LOBBY }, "", "#Lobby");
            radio("onBackLobby").subscribe([this.onBackClickLobby, this]);
            this.initVars();
            this.langMgr = Ludo_Wild.LanguageManager.getLangInstance();
            this.createBackGround();
            this.createBackButton();
            this.createPlayerNumTray();
        }
        ;
        init(_gameMode) {
            this.gameMode = _gameMode;
        }
        ;
        initVars() {
            this.maxPeersUI = 2;
            this._clientInstance = null;
            this._gamePlayManager = null;
            this.colorArray = [true, true, true, true];
            this.maxPeersSelected = 2;
            this.playerNames = [];
            this.avatarTypes = [];
            this.playIds = [];
            this.tokenSelectTray = undefined;
            this.playerNumTray = null;
            this.LobbyPlayerList = [];
            this.messageBox = undefined;
            this.trayEntities = [];
            this.checkMode();
            this.langMgr = null;
            this.selectedTokenList = [];
            this.inputTokenButtons = [];
        }
        ;
        checkMode() {
            if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.maxPeersUI = 2;
                this._clientInstance = new Ludo_Wild.ClientOffline();
            }
            else if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                this.maxPeersUI = 1;
                this._clientInstance = new Ludo_Wild.ClientOffline();
            }
            this._clientInstance.addXender(this);
            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER || this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this._gamePlayManager = new Ludo_Wild.GamePlayManager(this.gameMode, this._clientInstance);
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST, data: { peers: this.maxPeersUI } });
            }
        }
        ;
        createBackGround() {
            const _bgImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            const tintImageEffect = this.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
        }
        ;
        /* createStartButton() {
        //alert('gggglll')
            let btn_text = this.game.add.text(0, -8 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.START), { font: (40 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.startButton = this.add.image(this.world.centerX, this.world.height - 80, Ludo_Wild.generalSheet, "btn_Standard0");
            this.startButton.anchor.setTo(0.5);
            this.startButton.events.onInputDown.add(() => {
                this.startButton.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            });
            this.startButton.events.onInputUp.add(this.onClickStartButton.bind(this));
            btn_text.font = Ludo_Wild.Main.FONT;
            btn_text.anchor.set(0.5);
            this.startButton.addChild(btn_text);
            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                this.startButton.alpha = 0.6;
                this.startButton.inputEnabled = false;
            }
            else if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.startButton.alpha = 1;
                this.startButton.inputEnabled = true;
            }
        }
        ;
        */
        createStartButton() {
            let btn_text = this.game.add.text(
                0,
                -8 + (Ludo_Wild.Home.textYgap * -20),
                this.langMgr.getText(Ludo_Wild.TEXTS.START),
                { font: (40 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" }
            );

            this.startButton = this.add.image(
                -1000,
                -1000,
                Ludo_Wild.generalSheet,
                "btn_Standard0"
            );
            this.startButton.anchor.setTo(0.5);


            this.startButton.events.onInputDown.add(() => {
                this.startButton.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            });


            this.startButton.events.onInputUp.add(this.onClickStartButton.bind(this));

            btn_text.font = Ludo_Wild.Main.FONT;
            btn_text.anchor.set(0.5);
            this.startButton.addChild(btn_text);

            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                this.startButton.alpha = 0.6;
                this.startButton.inputEnabled = false;
            } else if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.startButton.alpha = 1;
                this.startButton.inputEnabled = true;


                this.time.events.add(0, () => {
                    if (this.startButton.inputEnabled) {

                        this.onClickStartButton(this.startButton);
                    }
                });


            }
        }

        onStartGameOffline(_data) {

            _data.names = this.playerNames;
            _data.avatars = this.avatarTypes;
            _data.playIds = this.playIds;
            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                this.game.state.start('SinglePlayer', true, false, this._gamePlayManager, _data);
            }
            else if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.game.state.start('MultiplayerOffline', true, false, this._gamePlayManager, _data);
            }
            ;
        }
        ;
        moveUpTokenTrayOnKeyBoardActive(_active) {
            if (_active) {
                this.tokenSelectTray.y = this.game.world.centerY - 170;
            }
            else {
                this.tokenSelectTray.y = this.game.world.centerY + 210;
            }
        }
        ;
        update() {
            for (let i = 0; i < 4; i++) {
                if (this.inputTokenButtons[i] !== undefined) {
                    this.inputTokenButtons[i].update();
                }
            }
        }
        ;
        addXender(_xender) {
            this.receiverList.push(_xender);
        }
        removeXender(_xender) {
            throw new Error("Method not implemented.");
        }
        send(message) {
            this.receiverList.forEach((Xobj) => {
                Xobj.onReceive(message);
            });
        }
        onReceive(message) {
            if (message.eventType !== Engine.EventType.GAME_EVENT) {
                return;
            }
            switch (message.event) {
                case Ludo_Wild.GameEvents.CHOOSE_TOKEN:
                    this.colorArray = message.data._data.tokens;
                    break;
                case Ludo_Wild.GameEvents.START_GAME_OFFLINE:
                    this.onStartGameOffline(message.data);
                    break;
            }
        }
        shutdown() {
            if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_ONLINE ||
                this.gameMode === Ludo_Wild.gameMode.RANDOM_ONLINE) {
                if (this._clientInstance !== null) {
                    this._clientInstance.removeXender(this.messageBox);
                }
            }
            try {
                if (radio.$.channels['onBackLobby'].length > 0) {
                    radio.$.channels['onBackLobby'].pop();
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        onexitLobbyToHome() {
            if (this.receiverList !== undefined && this.receiverList !== null) {
                this.receiverList.pop();
            }
            if (this._clientInstance !== undefined && this._clientInstance !== null) {

                this._clientInstance.removeAllReceivers();
                this._clientInstance = null;
            }
            if (this._gamePlayManager !== undefined && this._gamePlayManager !== null) {
                this._gamePlayManager = null;
            }
        }
        /* createPlayerNumTray() {
            this.playerNumTray = this.game.add.image(this.game.world.centerX, this.game.world.centerY, Ludo_Wild.generalSheet, "lobby_playernumtray");
            this.playerNumTray.anchor.setTo(0.5, 0.5);
            const labelBackground = this.game.add.image(0, -this.playerNumTray.height / 5 - 10, Ludo_Wild.generalSheet, "lobby_name_plate");
            labelBackground.anchor.setTo(0.5, 0.5);
            labelBackground.scale.setTo(1.1, 1.1);
            const headerText = this.game.add.text(0, -this.playerNumTray.height / 5 - 10 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.CHOOSE_PLAYERS), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#322c22" });
            headerText.font = Ludo_Wild.Main.FONT;
            headerText.anchor.set(0.5);
            this.playerNumTray.addChild(labelBackground);
            this.playerNumTray.addChild(headerText);
            this.createPlayernumTabs();
            this.trayEntities.push(headerText);
        }
        ;
        */
        createPlayerNumTray() {
            this.playerNumTray = this.game.add.image(-1000, -1000, Ludo_Wild.generalSheet, "lobby_playernumtray");
            this.playerNumTray.anchor.setTo(0.5, 0.5);

            const labelBackground = this.game.add.image(-1000, -1000, Ludo_Wild.generalSheet, "lobby_name_plate");
            labelBackground.anchor.setTo(0.5, 0.5);
            labelBackground.scale.setTo(1.1, 1.1);

            const headerText = this.game.add.text(
                0,
                -this.playerNumTray.height / 5 - 10 + (Ludo_Wild.Home.textYgap * -20),
                this.langMgr.getText(Ludo_Wild.TEXTS.CHOOSE_PLAYERS),
                { font: (34 + Ludo_Wild.Main.FONTSIZE) + "px", fill: "#322c22" }
            );
            headerText.font = Ludo_Wild.Main.FONT;
            headerText.anchor.set(0.5);

            this.playerNumTray.addChild(labelBackground);
            this.playerNumTray.addChild(headerText);

            // Create the actual player selection buttons
            this.createPlayernumTabs();
            //alert(Phaser.Timer.SECOND)
                        this.time.events.add(0, () => {
                            if (this.playerNum2Btn) {
                                // Auto call the same handler used in onInputUp
                                this.onPlayerNumSelect(this.playerNum2Btn);
                            } else {
                                console.warn("playerNum2Btn not found for auto-click");
                            }
                        });
        }

/* createPlayerNumTray() {
    // Add the tray image
    this.playerNumTray = this.game.add.image(-1000, -1000, Ludo_Wild.generalSheet, "lobby_playernumtray");
    this.playerNumTray.anchor.setTo(0.5, 0.5);

    // Add background label
    const labelBackground = this.game.add.image(0, -this.playerNumTray.height / 5 - 10, Ludo_Wild.generalSheet, "lobby_name_plate");
    labelBackground.anchor.setTo(0.5, 0.5);
    labelBackground.scale.setTo(1.1, 1.1);

    // Add header text
    const headerText = this.game.add.text(
        0,
        -this.playerNumTray.height / 5 - 10 + (Ludo_Wild.Home.textYgap * -20),
        this.langMgr.getText(Ludo_Wild.TEXTS.CHOOSE_PLAYERS),
        { font: (34 + Ludo_Wild.Main.FONTSIZE) + "px", fill: "#322c22" }
    );
    headerText.font = Ludo_Wild.Main.FONT;
    headerText.anchor.set(0.5);

    this.playerNumTray.addChild(labelBackground);
    this.playerNumTray.addChild(headerText);

    // ✅ Show Loader Before Tabs Load
    this.loaderOverlay = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'loader_spinner');
    this.loaderOverlay.anchor.setTo(0.5);
    this.loaderOverlay.scale.setTo(0.6);
    this.loaderOverlay.angle = 0;

    // Rotate loader
    this.game.add.tween(this.loaderOverlay).to({ angle: 360 }, 1000, Phaser.Easing.Linear.None, true, 0, -1);

    // ✅ Delay before creating player tabs
    this.time.events.add(Phaser.Timer.SECOND * 0.3, () => {
        this.createPlayernumTabs();

        // ✅ Short delay to auto-select after tabs created
        this.time.events.add(Phaser.Timer.SECOND * 0.1, () => {
            if (this.playerNum2Btn) {
                this.onPlayerNumSelect(this.playerNum2Btn);
            } else {
                console.warn("playerNum2Btn not found for auto-click");
            }

            // ✅ Hide loader after everything is done
            if (this.loaderOverlay) this.loaderOverlay.destroy();
        });
    });
}
*/


        /* createPlayernumTabs() {
            //alert('okk')
            const k = 0;
            const startX = -200;
            for (let i = 0; i < 3; i++) {

                if(i == 0){
                const playerString = (i + 2 + k).toString();


                const numButton = this.add.image(startX + (i * 150), -35, Ludo_Wild.generalSheet, "lobby_playernum1");


                const numLabel = Ludo_Wild.Main.GAME.add.text(numButton.width / 2, numButton.height / 2 - 5 + (Ludo_Wild.Home.textYgap * -20), playerString + "P", { font: "36px KG", fill: "#ffffff" });
                numLabel.anchor.setTo(0.5);
                numLabel.setShadow(3, 3, "#808080", 2);
                numButton.addChild(numLabel);
                numButton.inputEnabled = true;
                numButton.data = { num: i + 2 + k, isSelected: false };

                numButton.events.onInputUp.add(this.onPlayerNumSelect.bind(this));
                numButton.events.onInputDown.add(() => {

                    numButton.loadTexture(Ludo_Wild.generalSheet, "lobby_playernum2");

                });


                //numButton.tint = 0x808080;


                this.playerNumTray.addChild(numButton);
                }
            }



        }
        ;
        */

        createPlayernumTabs() {
            const k = 0;
            const startX = -200;

            for (let i = 0; i < 3; i++) {
                if (i === 0) {
                    const playerString = (i + 2 + k).toString();

                    const numButton = this.add.image(startX + (i * 150), -35, Ludo_Wild.generalSheet, "lobby_playernum1");

                    const numLabel = this.game.add.text(
                        numButton.width / 2,
                        numButton.height / 2 - 5 + (Ludo_Wild.Home.textYgap * -20),
                        playerString + "P",
                        { font: "36px KG", fill: "#ffffff" }
                    );
                    numLabel.anchor.setTo(0.5);
                    numLabel.setShadow(3, 3, "#808080", 2);

                    numButton.addChild(numLabel);
                    numButton.inputEnabled = true;
                    numButton.data = { num: i + 2 + k, isSelected: false };

                    numButton.events.onInputUp.add(this.onPlayerNumSelect.bind(this));

                    numButton.events.onInputDown.add(() => {
                        numButton.loadTexture(Ludo_Wild.generalSheet, "lobby_playernum2");
                    });

                    this.playerNumTray.addChild(numButton);

                    this.playerNum2Btn = numButton;

                }
            }
        }


        onPlayerNumSelect(e) {
            //alert(e.data.num)
            Manager.AudioManager.getAudioInstance().playLongClick();
            const numLabel = e.getChildAt(0);
            //alert(JSON.stringify(numLabel))
            for (let i = 2; i < 5; i++) {

                if(i == 2){
                const numButton = this.playerNumTray.getChildAt(i);
                if (numButton.data.isSelected) {
                    numButton.loadTexture(Ludo_Wild.generalSheet, "lobby_playernum1");
                    numButton.data.isSelected = false;

                    numButton.getChildAt(0).fill = "#ffffff";
                    break;
                }

                }


            }

            numLabel.fill = "#ffffff";
            e.loadTexture(Ludo_Wild.generalSheet, "lobby_playernum0");
            e.data.isSelected = true;
            this.manageTokenSelection(e.data.num);

            this.time.events.add(0, () => {
                if (this.playerNum2Btn) {

                    this.onPlayerNumSelect(this.playerNum2Btn);

                }
            });

        }
        ;
        /* createStartButton() {
            // Create the Play/Start button
            this.startBtn = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 200, Ludo_Wild.generalSheet, "start_button");
            this.startBtn.anchor.setTo(0.5);
            this.startBtn.inputEnabled = true;

            // Attach the button click handler
            this.startBtn.events.onInputUp.add(this.onStartGameClick, this);

            // Add to the token tray
            this.tokenSelectTray.addChild(this.startBtn);

            // ✅ Auto-click after a small delay (300ms)
            this.time.events.add(Phaser.Timer.SECOND * 0.3, () => {
                if (this.startBtn) {
                    console.log("✅ Auto-clicking Play button");
                    this.onStartGameClick(this.startBtn);
                }
            });
        }
        */
        onStartGameClick(button) {
            //console.log("▶ Play button clicked");

            // Your logic to start the game
            // Example:
            this.send({
                eventType: Engine.EventType.GAME_EVENT,
                event: Ludo_Wild.GameEvents.GAME_START
            });
        }


        manageTokenSelection(numOfPlayers) {
        //alert(numOfPlayers)
            if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.maxPeersUI = numOfPlayers;
            }
            else {
                this.maxPeersUI = 1;
            }
            this.createTokenSelectTray();
            this.maxPeersSelected = numOfPlayers;
            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER || this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.send({ eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.CREATE_MATCH_REQUEST, data: { peers: this.maxPeersSelected } });
            }
        }
        ;
        createTokenSelectTray() {

            if (!this.tokenSelectTray) {
                this.moveUpPlayernumTray();
            }
            else if (this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE) {
                this.onPlayerChoseChange();
            }
        }
        ;
        moveUpPlayernumTray() {
            if (this.gameMode !== Ludo_Wild.gameMode.MULTIPLAYER_ONLINE) {
                this.game.add.tween(this.playerNumTray).to({ y: this.game.world.centerY - 320 }, 500, Phaser.Easing.Bounce.Out).start().onComplete.add(this.renderTokenSelectTray.bind(this));
            }
            else {
                this.tokenSelectTray = this.game.add.image(this.game.world.centerX, this.game.world.centerY + 20, Ludo_Wild.generalSheet, "lobby_tokenTray");
                this.tokenSelectTray.anchor.setTo(0.5, 0.5);
                const chooseTokenText = this.game.add.text(0, -this.tokenSelectTray.height / 2.5 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.CHOOSE_COLOR), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
                chooseTokenText.anchor.set(0.5);
                chooseTokenText.font = Ludo_Wild.Main.FONT;
                this.tokenSelectTray.addChild(chooseTokenText);
                this.createStartButton();
            }
        }
        ;
        renderTokenSelectTray() {
            this.tokenSelectTray = this.game.add.image(-1000, -1000, Ludo_Wild.generalSheet, "lobby_tokenTray");
            this.tokenSelectTray.anchor.setTo(0.5, 0.5);
            const labelBackground = this.game.add.image(0, -this.tokenSelectTray.height / 2 + 120, Ludo_Wild.generalSheet, "lobby_name_plate");
            labelBackground.anchor.setTo(0.5, 0.5);
            labelBackground.scale.setTo(1.1, 1.1);
            const headerText = this.game.add.text(0, -this.tokenSelectTray.height / 2 + 120 + (Ludo_Wild.Home.textYgap * -20), this.langMgr.getText(Ludo_Wild.TEXTS.CHOOSE_COLOR), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#322c22" });
            headerText.font = Ludo_Wild.Main.FONT;
            headerText.anchor.set(0.5);
            this.tokenSelectTray.addChild(labelBackground);
            this.tokenSelectTray.addChild(headerText);

            this.createStartButton();
            //alert(this.gameMode)
            if (this.gameMode === Ludo_Wild.gameMode.SINGLE_PLAYER) {
                this.createTokenSelectButtons();
            }
            else {
                this.createInputButtons2();
            }
        }
        ;
        createTokenSelectButtons() {
            const startX = -110;
            const startY = -80;
            for (let i = 0; i < 4; i++) {
                const iOffsetX = i % 2;
                const iOffsetY = i < 2 ? 0 : 1;
                const inputButton = this.add.image(startX + (iOffsetX * 220), startY + (iOffsetY * 220), Ludo_Wild.generalSheet, "lobby_nametray0");
                inputButton.anchor.setTo(0.5);
                inputButton.inputEnabled = true;
                inputButton.data = { token: i, isSelected: false };
                const tokenImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "lobby_token" + (i + 1));
                tokenImg.anchor.setTo(0.5);
                inputButton.addChild(tokenImg);
                const nameLabel = this.game.add.text(0, 45 + (Ludo_Wild.Home.textYgap * -10), Ludo_Wild.trimName("YOU"), { font: "24px KG", fill: "#ffffff" });
                nameLabel.anchor.setTo(0.5);
                nameLabel.visible = false;
                inputButton.addChild(nameLabel);
                inputButton.events.onInputDown.add(() => {
                    inputButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray2");
                });
                inputButton.events.onInputUp.add(this.onTokenButtonSelect.bind(this));
                this.tokenSelectTray.addChild(inputButton);
            }
        }
        ;
        createInputButtons2() {
            const startX = -110;
            const startY = -80;
            for (let i = 0; i < 4; i++) {
                const iOffsetX = i % 2;
                const iOffsetY = i < 2 ? 0 : 1;
                const inputButton = this.add.image(startX + (iOffsetX * 220), startY + (iOffsetY * 220), Ludo_Wild.generalSheet, "lobby_nametray0");
                inputButton.anchor.setTo(0.5);

                inputButton.inputEnabled = false;
                inputButton.data = { token: i, isSelected: false };
                const tokenImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "lobby_token" + (i + 1));
                tokenImg.anchor.setTo(0.5);
                inputButton.addChild(tokenImg);
                let nameLabel;
                if (i === 0) {
                    nameLabel = this.game.add.text(0, 45 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.trimName(Ludo_Wild.playerData.firstName.toUpperCase()), { font: "24px KG", fill: "#ffffff" });
                }
                else {
                    nameLabel = this.game.add.text(0, 45 + (Ludo_Wild.Home.textYgap * -20), "PLAYER " + (i + 1), { font: "24px KG", fill: "#ffffff" });
                }

                nameLabel.anchor.setTo(0.5);
                nameLabel.visible = true;
                inputButton.addChild(nameLabel);
                inputButton.events.onInputDown.add(() => {
                    inputButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray2");
                });
                if (i >= this.maxPeersUI) {
                    inputButton.inputEnabled = false;
                    inputButton.alpha = 0.4;
                }
                inputButton.events.onInputUp.add(this.onInputTokenButtonSelect.bind(this, inputButton));
                this.tokenSelectTray.addChild(inputButton);
            }
        }
        ;
        onPlayerChoseChange() {

            for (let i = 2; i < 6; i++) {
                if ((i - 2) < this.maxPeersUI) {

                    this.tokenSelectTray.getChildAt(i).alpha = 1;

                    this.tokenSelectTray.getChildAt(i).inputEnabled = false;
                }
                else {

                    this.tokenSelectTray.getChildAt(i).alpha = 0.4;

                    this.tokenSelectTray.getChildAt(i).inputEnabled = false;

                    this.tokenSelectTray.getChildAt(i).getChildAt(1).text = "PLAYER " + (i - 1);
                }
            }
        }
        ;
        onInputTokenButtonSelect(parentButton) {

            Manager.AudioManager.getAudioInstance().playLongClick();

            parentButton.getChildAt(1).text = "";
            this.addInputField(parentButton);
        }
        ;
        addInputField(parentButton) {
            PhaserInput.onKeyboardClose.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = false;
                this.moveUpTokenTrayOnKeyBoardActive(false);
            });
            PhaserInput.onKeyboardOpen.add(() => {
                Ludo_Wild.Main.KEYBOARD_OPEN = true;
                this.moveUpTokenTrayOnKeyBoardActive(true);
            });
            if (this.inputTokenButtons[parentButton.data.token]) {

                parentButton.getChildAt(1).text = "";
                this.inputTokenButtons[parentButton.data.token] = undefined;
            }
            let btnYOffset = 0;
            if (!this.game.device.desktop) {
                btnYOffset = -370;
            }

            const inputField = this.add.inputField(parentButton.worldPosition.x - 60, parentButton.worldPosition.y + 30 + btnYOffset + (Ludo_Wild.Home.textYgap * -60), {
                font: "28px Arial",
                fill: "#ffffff",
                fillAlpha: 0,
                fontWeight: "bold",
                width: parentButton.width,
                height: 40,
                borderWidth: 1,
                borderColor: "#000",
                max: 8,
                borderRadius: 6,
                cursorColor: "#ffffff",

            });
            inputField.anchor.setTo(0, 0);
            inputField.startFocus();

            inputField.addEndFocusCallback(this.onEndFocusCallback.bind(this, inputField, parentButton), this);
            this.inputTokenButtons[parentButton.data.token] = inputField;
        }
        ;
        onEndFocusCallback(inputField, parentButton) {
            let inputText = "";
            inputText = inputField.value || "PLAYER " + (parentButton.data.token + 1);
            inputField.value = inputText.toUpperCase();
            inputField.visible = false;

            parentButton.getChildAt(1).text = inputText;
            parentButton.getChildAt(1).visible = true;
            parentButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray1");
        }
        ;
        onTokenButtonSelect(e) {

            Manager.AudioManager.getAudioInstance().playLongClick();
            const indexStart = this.gameMode === Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE ? 3 : 2;
            for (let i = indexStart; i < indexStart + 4; i++) {
                const tokenButton = this.tokenSelectTray.getChildAt(i);
                if (tokenButton.data.isSelected) {
                    tokenButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray0");
                    tokenButton.data.isSelected = false;

                    tokenButton.getChildAt(1).visible = false;
                    this.selectedTokenList.pop();
                    break;
                }
            }
            e.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray1");
            e.data.isSelected = true;
            this.selectedTokenList.push(e.data.token);

            e.getChildAt(1).visible = true;
            this.toggleStartButton();
        }
        ;
        toggleStartButton() {
            //alert('ok')
            if (this.selectedTokenList.length === this.maxPeersUI) {
                this.startButton.alpha = 1;
                this.startButton.inputEnabled = true;
                this.add.tween(this.startButton).to({ angle: 20 }, 80, Phaser.Easing.Quadratic.Out)
                    .to({ angle: -20 }, 80, Phaser.Easing.Quadratic.Out)
                    .to({ angle: 0 }, 80, Phaser.Easing.Quadratic.Out, true);
            }
        }
        ;
        onClickStartButton(button) {
            Manager.AudioManager.getAudioInstance().playLongClick();
            button.loadTexture(Ludo_Wild.generalSheet, "btn_Standard0");
            switch (this.gameMode) {
                case Ludo_Wild.gameMode.SINGLE_PLAYER:
                    this.onClickStartOnSinglePlayer();
                    break;
                case Ludo_Wild.gameMode.MULTIPLAYER_OFFLINE: this.onClickStartOnMultiOffline();
            }
        }
        ;
        onClickStartOnSinglePlayer() {
            this.playerNames.push(Ludo_Wild.playerData.firstName);
            this.avatarTypes.push(Ludo_Wild.playerData.photo);
            this.playIds.push(Ludo_Wild.playerData.playId);

            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_SELECT,
                data: { color: this.selectedTokenList[0] }
            });
            for (let i = 1; i <= this.maxPeersSelected - 1; i++) {
                this.setupBotForSinglePlayer(i, this.selectedTokenList[0]);
            }
        }
        ;
        onClickStartOnMultiOffline() {
            for (let i = 0; i < this.maxPeersUI; i++) {
                const tokenButton = this.tokenSelectTray.getChildAt(i + 2);

                this.playerNames.push(tokenButton.getChildAt(1).text);
                if (i === 0) {
                    this.playIds.push(Ludo_Wild.playerData.playId);
                    this.avatarTypes.push(Ludo_Wild.playerData.photo);
                }
                else {
                    this.playIds.push(undefined);
                    this.avatarTypes.push(undefined);
                }
                this.send({
                    eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_SELECT,
                    data: { color: tokenButton.data.token }
                });
            }
        }
        ;
        setupBotForSinglePlayer(index, selectedToken) {
            const botIndex = (index + selectedToken) % 4;
            this.playerNames.push(this.botNames[index]);
            this.avatarTypes.push(undefined);
            this.playIds.push(undefined);
            this.send({
                eventType: Engine.EventType.GAME_EVENT, event: Ludo_Wild.GameEvents.ON_TOKEN_SELECT,
                data: { color: botIndex }
            });
        }
        createBackButton() {
            const backButton = this.add.image(65, 65, Ludo_Wild.generalSheet, "btn_back");
            backButton.inputEnabled = true;
            backButton.anchor.setTo(0.5, 0.5);
            backButton.events.onInputUp.add(this.onBackButtonClick.bind(this, backButton), this);
        }
        ;
        onBackButtonClick(backButton, context) {
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(backButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)

                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Linear.In, true).onComplete.add(() => {
                    this.onBackClickLobby();
                });
        }
        onBackClickLobby() {
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
            this.onexitLobbyToHome();
            this.state.start('Home');
        }
    }
    Ludo_Wild.Lobby = Lobby;
    ;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class MultiplayerOffline extends Phaser.State {
        constructor() {
            super(...arguments);
            this.gameplayInst = null;
        }
        init(_gamePlayManager, _data) {
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.GAMEPLAY_SCREEN }, "", "#Gameplay");
            radio("onBackGameplay").subscribe([this.onBackGameplay, this]);
            this.initVars();
            this.gameplayInst = _gamePlayManager;
            this.gameData = _data;
        }
        create() {
            Analytics.Gama.send(Analytics.MESSAGE.START_LOCAL_OFFLINEGAME);
            this.createBackGround();
            this.gameplayInst.Main();
            this.gameplayInst.onStartGameOffline(this.gameData);
        }
        onBackGameplay() {
        }
        ;
        createBackGround() {
            let _bgImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
        }
        ;
        initVars() {
            this.gameData = null;
            this.gameplayInst = null;
        }
        ;
        shutdown() {
            this.gameplayInst.dispose();
            this.gameplayInst = null;
            try {
                radio.$.channels['onBackGameplay'].pop();
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    Ludo_Wild.MultiplayerOffline = MultiplayerOffline;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class MultiplayerOnline extends Phaser.State {
        init(_gamePlayManager, _data, selectedToken) {
            this.gameData = _data;

            if (selectedToken) {
                this.manipulateColorArray(selectedToken);
            }
            this.gameplayInst = _gamePlayManager;
        }
        create() {
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.GAMEPLAY_SCREEN;
            window.parent.history.pushState({ "state": Ludo_Wild.gameScenes.GAMEPLAY_SCREEN }, "", "#Gameplay");
            this.createBackGround();
            this.gameplayInst.Main();

            this.gameplayInst.onAllJoinedFriends(this.gameData);
        }
        createBackGround() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                let _bgImg = this.game.add.image(0, 0, Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
            }
            else {
                let _bgImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            }
        }
        ;
        manipulateColorArray(token) {
            let colorList = this.gameData.c_data;
            let playerId = this.gameData.pid;
            let selectedToken = token;
            for (let i = 0; i < colorList.length; i++) {
                colorList[playerId] = selectedToken;
                playerId = (playerId + 1) % 4;
                selectedToken = (selectedToken + 1) % 4;
            }
            this.gameData.c_data = colorList;
        }
        ;
        shutdown() {
            this.gameplayInst.dispose();
            this.gameplayInst = null;
        }
    }
    Ludo_Wild.MultiplayerOnline = MultiplayerOnline;
})(Ludo_Wild || (Ludo_Wild = {}));
var Ludo_Wild;
(function (Ludo_Wild) {
    class SinglePlayerState extends Phaser.State {
        init(_gamePlayManager, _data) {
            this.initVars();
            this.gameData = _data;
            this.gameplayInst = _gamePlayManager;
        }
        create() {
            Analytics.Gama.send(Analytics.MESSAGE.START_OFFLINEGAME);
            this.createBackGround();
            this.gameplayInst.Main();
            this.gameplayInst.onStartGameOffline(this.gameData);
        }
        initVars() {
            this.gameData = null;
            this.gameplayInst = null;
        }
        ;
        createBackGround() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                let _bgImg = this.game.add.image(0, 0, Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
            }
            else {
                let _bgImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
            }
        }
        ;
        shutdown() {

            Ludo_Wild.Main.IS_FAKE_RANDOM = false;
            this.gameplayInst.dispose();
            this.gameplayInst = null;
        }
    }
    Ludo_Wild.SinglePlayerState = SinglePlayerState;
})(Ludo_Wild || (Ludo_Wild = {}));

var maxPeerGlobal = 2;
var Ludo_Wild;
(function (Ludo_Wild) {
    class RandomOnlineLobbyState extends Phaser.State {
        constructor() {
            super(...arguments);
            this.maxPeersSelected = 2;
        }
        init(rule) {
            Ludo_Wild.Config.rule = rule;

        }
        ;
        create() {
            console.warn("RANDOM ONLINE RULE => ", Ludo_Wild.Config.rule);
            Ludo_Wild.Main.SCENE = Ludo_Wild.gameScenes.RANDOM_ONLINE_LOBBY;
            this.initializeCommunicationComponents();
            this.initVars();
            this.createBackground();
            this.createBackButton();
            this.createTokenSelectTray();
        }
        ;
        initVars() {
            this.maxPeersSelected = Phaser.Math.between(2, 4);
            this.selectedToken = undefined;
            this.tokenSelectTray = undefined;
        }
        ;
        initializeCommunicationComponents() {

            this.clientInstance = new Ludo_Wild.ClientOnline();

            this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.MULTIPLAYER_ONLINE, this.clientInstance);

            this.gameplayManager.configureRandomModeCallback({
                context: this,
                callback: this.gameplayEventHandler.bind(this)
            });
        }
        ;
        gameplayEventHandler(events, data) {
            switch (events) {
                case "no_match_found":

                    this.onMatchNotFound({});
                    break;
                case "randomModeStarted":

                    this.onMatchFound(data);
                    break;
                case "startFakeRandom":
                    this.onFakeRandomStart(data);
                    break;
            }
        }
        ;
        createBackground() {
            if (Ludo_Wild.Config.rule === Ludo_Wild.Rules.BLITZ) {
                const _bgImg = this.add.image(0, 0, Ludo_Wild.blitzSheet, "bg_" + Ludo_Wild.Config.bgBlitzTheme);
            }
            else {
                const _bgImg = this.add.image(0, 0, Ludo_Wild.generalSheet, "bg_" + Ludo_Wild.Config.bgTheme);
                const tintImageEffect = this.add.image(0, 0, Ludo_Wild.generalSheet, 'bgTint');
            }

        }
        ;
        createBackButton() {

            this.backButton = this.add.image(65, 65, Ludo_Wild.generalSheet, "btn_back");

            this.backButton.inputEnabled = true;

            this.backButton.anchor.setTo(0.5, 0.5);

            this.backButton.events.onInputUp.add(this.onBackButtonClick.bind(this, this.backButton), this);

            this.world.bringToTop(this.backButton);
        };
        onBackButtonClick(backButton) {
            Manager.AudioManager.getAudioInstance().playClick();
            this.add.tween(backButton.scale).to({ x: 0.9, y: 0.9 }, 75, Phaser.Easing.Quadratic.In)

                .to({ x: 1, y: 1 }, 75, Phaser.Easing.Linear.In, true).onComplete.add(() => {
                    this.onBackClickLobby();
                });
        }
        ;
        onBackClickLobby() {
            window.parent.history.replaceState({ state: Ludo_Wild.gameScenes.BOOT }, "", "#Boot");
            this.onexitLobbyToHome();
            this.state.start('Home');
        }
        onexitLobbyToHome() {
            if (this.clientInstance) {
                this.clientInstance.disconnectSocketConnection();

                this.clientInstance.removeAllReceivers();
                this.clientInstance = undefined;
            }
            if (this.gameplayManager) {
                this.gameplayManager = undefined;
            }
        }
        ;
        prepareForModeSwitch() {
            this.onexitLobbyToHome();
        }
        ;
        createTokenSelectTray() {
            this.renderTokenSelectTray();
        }
        renderTokenSelectTray() {
            this.tokenSelectTray = this.game.add.image(this.game.world.centerX, this.game.world.centerY, Ludo_Wild.generalSheet, "lobby_tokenTray");
            this.tokenSelectTray.anchor.setTo(0.5, 0.5);
            const labelBackground = this.game.add.image(0, -this.tokenSelectTray.height / 2 + 120, Ludo_Wild.generalSheet, "lobby_name_plate");
            labelBackground.anchor.setTo(0.5, 0.5);
            labelBackground.scale.setTo(1.1, 1.1);
            const headerText = this.game.add.text(0, -this.tokenSelectTray.height / 2 + 120 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.CHOOSE_COLOR), { font: (34 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            headerText.font = Ludo_Wild.Main.FONT;
            headerText.anchor.set(0.5);
            this.tokenSelectTray.addChild(labelBackground);
            this.tokenSelectTray.addChild(headerText);
            this.createStartButton();
            this.createTokenSelectButtons();
        }
        ;
        createTokenSelectButtons() {
            //alert('kkkk')
            const startX = -110;
            const startY = -80;
            for (let i = 0; i < 4; i++) {
                const iOffsetX = i % 2;
                const iOffsetY = i < 2 ? 0 : 1;
                const inputButton = this.add.image(startX + (iOffsetX * 220), startY + (iOffsetY * 220), Ludo_Wild.generalSheet, "lobby_nametray0");
                inputButton.anchor.setTo(0.5);
                inputButton.inputEnabled = true;
                inputButton.data = { token: i, isSelected: false };
                const tokenImg = this.game.add.image(0, 0, Ludo_Wild.generalSheet, "lobby_token" + (i + 1));
                tokenImg.anchor.setTo(0.5);
                inputButton.addChild(tokenImg);
                const nameLabel = this.game.add.text(0, 45 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.trimName(Ludo_Wild.playerData.firstName), { font: "24px KG", fill: "#ffffff" });
                nameLabel.anchor.setTo(0.5);
                nameLabel.visible = false;
                inputButton.addChild(nameLabel);
                inputButton.events.onInputDown.add(() => {
                    inputButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray2");
                });
                inputButton.events.onInputUp.add(this.onTokenButtonSelect.bind(this));
                this.tokenSelectTray.addChild(inputButton);
            }
        }
        ;
        onTokenButtonSelect(e) {
            //alert('kkk')
            Manager.AudioManager.getAudioInstance().playLongClick();

            const indexStart = 2;
            for (let i = indexStart; i < indexStart + 4; i++) {
                const tokenButton = this.tokenSelectTray.getChildAt(i);
                if (tokenButton.data.isSelected) {
                    tokenButton.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray0");
                    tokenButton.data.isSelected = false;

                    tokenButton.getChildAt(1).visible = false;
                    break;
                }
            }
            e.loadTexture(Ludo_Wild.generalSheet, "lobby_nametray1");
            e.data.isSelected = true;

            this.selectedToken = e.data.token;

            e.getChildAt(1).visible = true;
            this.toggleStartButton();
        }
        ;
        toggleStartButton() {
            if (this.selectedToken >= 0) {
                this.startButton.alpha = 1;
                this.startButton.inputEnabled = true;
                this.add.tween(this.startButton).to({ angle: 20 }, 80, Phaser.Easing.Quadratic.Out)
                    .to({ angle: -20 }, 80, Phaser.Easing.Quadratic.Out)
                    .to({ angle: 0 }, 80, Phaser.Easing.Quadratic.Out, true);
            }
        }
        ;
        createStartButton() {
            //alert('gggg')
            let btn_text = this.game.add.text(0, -8 + (Ludo_Wild.Home.textYgap * -20), Ludo_Wild.LanguageManager.getLangInstance().getText(Ludo_Wild.TEXTS.START), { font: (40 + Ludo_Wild.Main.FONTSIZE).toString() + "px", fill: "#ffffff" });
            this.startButton = this.add.image(this.world.centerX, this.world.height - 80, Ludo_Wild.generalSheet, "btn_Standard0");
            this.startButton.anchor.setTo(0.5);
            this.startButton.events.onInputDown.add(() => {
                this.startButton.loadTexture(Ludo_Wild.generalSheet, "btn_standard1");
            });
            this.startButton.events.onInputUp.add(this.onClickStartButton.bind(this));
            btn_text.font = Ludo_Wild.Main.FONT;
            btn_text.anchor.set(0.5);
            this.startButton.addChild(btn_text);
            this.startButton.alpha = 0.6;
            this.startButton.inputEnabled = false;
        }
        ;

        onClickStartButton(button) {
            //alert('kkk')
            Manager.AudioManager.getAudioInstance().playLongClick();
            button.loadTexture(Ludo_Wild.generalSheet, "btn_Standard0");
            this.startMatchMakingProcess();
        }
        ;
        startMatchMakingProcess() {
            this.makeAllLobbyElementsInvinsible();
            this.matchMakingUI = new Ludo_Wild.MatchMakingBattleUI(this.getMatchInfo());
            this.sendRandomMatchRequest();
        }
        ;
        makeAllLobbyElementsInvinsible() {

            this.tokenSelectTray.visible = false;
            this.startButton.visible = false;
            this.backButton.visible = true;
        }

        getMatchInfo() {
            const matchInfo = {
                battleDetails: {
                    minPlayersNeeded: 2,
                    numberOfWinners: 1,
                    battleId: "",
                    firstName: Ludo_Wild.playerData.firstName,
                    photo: Ludo_Wild.playerData.photo,
                    playId: Ludo_Wild.playerData.playId,
                }
            };
            return matchInfo;
        }
        sendRandomMatchRequest() {
            this.gameplayManager.sendRandomMatchRequest(this.maxPeersSelected);
        }
        ;
        onMatchNotFound(data) {

            this.prepareForModeSwitch();
            Ludo_Wild.Main.IS_FAKE_RANDOM = true;

            Ludo_Wild.setCurrentMatchId("jojo_" + Math.floor(Math.random() * 1000));
            this.initializeOfflineCommunicationComponents();
            this.gameplayManager.getGameServer().createMatch({ peers: this.maxPeersSelected });
            this.gameplayManager.getGameServer().onTokenSelect({ color: { color: this.selectedToken } });
            let playerToken = this.selectedToken;
            for (let i = 0; i < this.maxPeersSelected - 1; i++) {
                ++playerToken;
                this.gameplayManager.getGameServer().onTokenSelect({ color: { color: playerToken % 4 } });
            }
        }
        ;
        onMatchFound(data) {

            if (data.playerList.length === 1) {
                console.warn("match not found in match found function :((");
                this.onMatchNotFound();
                return;
            }
            ;
            let matchedPlayerList = [];
            for (let i = 0; i < data.playerList.length; i++) {
                if (data.playerList[i].playId !== Ludo_Wild.playerData.playId) {
                    matchedPlayerList.push(data.playerList[i]);
                }
            }
            Ludo_Wild.setCurrentMatchId(data.matchId);
            this.matchMakingUI.onMatchMakingCompleted(matchedPlayerList);
            const intervalTimerRef = window.setInterval(() => {
                if (this.matchMakingUI.isAnimationCompleted()) {
                    clearInterval(intervalTimerRef);
                    this.matchMakingUI.destroy();
                    this.matchMakingUI = null;

                    this.state.start("MultiplayerOnline", true, false, this.gameplayManager, data, this.selectedToken + 1);
                }
                else {
                    console.warn("Animation not finished");
                }
            }, 500);
        }
        ;
        initializeOfflineCommunicationComponents() {
            const clientInstanceOffline = new Ludo_Wild.ClientOffline();
            this.gameplayManager = new Ludo_Wild.GamePlayManager(Ludo_Wild.gameMode.SINGLE_PLAYER, clientInstanceOffline);

            this.gameplayManager.configureRandomModeCallback({
                context: this,
                callback: this.gameplayEventHandler.bind(this)
            });
        }
        ;
        onFakeRandomStart(data) {
            let playerNames = [];
            let avatars = [];
            let playIds = [];
            let matchedPlayerList = [];
            for (let i = 0; i < data.totalPeers; i++) {
                if (i === 0) {
                    playerNames.push(Ludo_Wild.playerData.firstName);
                    avatars.push(Ludo_Wild.playerData.photo);
                    playIds.push(Ludo_Wild.playerData.playId);
                }
                else {
                    const botName = Ludo_Wild.getName();
                    const botplayId = Ludo_Wild.getRandomplayId();
                    const botPhoto = "avatar_" + Phaser.Math.between(1, 5).toString();
                    matchedPlayerList.push({ firstName: botName, photo: botPhoto, playId: botplayId });
                    playerNames.push(botName);
                    playIds.push(botplayId);
                    avatars.push(botPhoto);
                }
            }
            data.names = playerNames;
            data.avatars = avatars;
            data.playIds = playIds;
            this.matchMakingUI.onMatchMakingCompleted(matchedPlayerList);
            const intervalTimerRef = window.setInterval(() => {
                if (this.matchMakingUI.isAnimationCompleted()) {
                    clearInterval(intervalTimerRef);
                    this.matchMakingUI.destroy();
                    this.matchMakingUI = null;

                    this.game.state.start('SinglePlayer', true, false, this.gameplayManager, data);
                }
                else {
                    console.warn("Animation not finished");
                }
            }, 1000);
        }
    }
    Ludo_Wild.RandomOnlineLobbyState = RandomOnlineLobbyState;
})(Ludo_Wild || (Ludo_Wild = {}));