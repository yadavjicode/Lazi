import 'package:flame/components.dart';
import 'package:flutter/material.dart';
import '../component/ui_components/token.dart';
import '../component/ui_components/spot.dart';
import 'package:firebase_database/firebase_database.dart';

class TokenManager {
  static final TokenManager _instance = TokenManager._internal();

  TokenManager._internal();

  factory TokenManager() {
    return _instance;
  }

  List<Token> allTokens = [];
  List<Token> miniTokens = [];

  // Cache for player-specific tokens
  final Map<String, List<Token>> _playerTokensCache = {};

  final blueTokensBase = {
    'BT1': 'B1',
    'BT2': 'B2',
    'BT3': 'B3',
    'BT4': 'B4',
  };

  final greenTokensBase = {
    'GT1': 'G1',
    'GT2': 'G2',
    'GT3': 'G3',
    'GT4': 'G4',
  };

  final redTokensBase = {
    'RT1': 'R1',
    'RT2': 'R2',
    'RT3': 'R3',
    'RT4': 'R4',
  };

  final yellowTokensBase = {
    'YT1': 'Y1',
    'YT2': 'Y2',
    'YT3': 'Y3',
    'YT4': 'Y4',
  };

  void initializeTokens(Map<String, String> tokenToHomeSpotMap) {
    for (var entry in tokenToHomeSpotMap.entries) {
      final token = Token(
          playerId: 'ID',
          enableToken: false,
          tokenId: entry.key,
          positionId: entry.value,
          position: Vector2(100, 100), // Adjust position
          size: Vector2(50, 50), // Adjust size
          topColor: Colors.transparent,
          sideColor: Colors.transparent);
      allTokens.add(token);
      SpotManager().addSpot(Spot(
          uniqueId: entry.value,
          position: Vector2(100, 100),
          size: Vector2(50, 50),
          paint: Paint()));
    }
    _cachePlayerTokens();
  }

  void _cachePlayerTokens() {
    _playerTokensCache.clear();
    for (var token in allTokens) {
      final player = token.tokenId[0];
      _playerTokensCache.putIfAbsent(player, () => []).add(token);
    }
  }

  List<Token> getAllTokens(String player) {
    print('Hit::::::::');
    // loadTokensFromFirebase("Prahant");
    return _playerTokensCache[player] ?? [];
  }

  List<Token> getOpenTokens(String player) {
    return getAllTokens(player)
        .where((token) => token.positionId.length == 3)
        .toList();
  }

  List<Token> getCloseTokens(String player) {
    return getAllTokens(player)
        .where((token) => token.positionId.length == 2)
        .toList();
  }

  List<Token> getBlueTokens() {
    return getAllTokens('B');
  }

  List<Token> getGreenTokens() {
    return getAllTokens('G');
  }

  List<Token> getYellowTokens() {
    return getAllTokens('Y');
  }

  List<Token> getRedTokens() {
    return getAllTokens('R');
  }

  Future<void> clearTokens() async {
    allTokens.clear();
    miniTokens.clear();
    _playerTokensCache.clear();
    return Future.value();
  }

  void debugPrintPlayerTokens() {
    _playerTokensCache.forEach((player, tokens) {
      print('Player "$player" has ${tokens.length} tokens:');
      for (var t in tokens) {
        print('  • ${t.tokenId} @ ${t.positionId}');
      }
    });
  }

  /// Writes the entire player‐token cache to:
  /// /games/{gameId}/state/tokens
  Future<void> saveTokensToFirebase(String gameId) async {
    final dbRef = FirebaseDatabase.instance.ref();
    // Build a JSON-friendly map:
    // { "B": { "BT1": "B1", … }, "G": { … }, … }
    final Map<String, dynamic> json = {};
    _playerTokensCache.forEach((playerKey, tokens) {
      json[playerKey] = {for (var t in tokens) t.tokenId: t.positionId};
    });
    await dbRef.child('games/$gameId/state/tokens').set(json);
  }

  /// Reads back /games/{gameId}/state/tokens and repopulates `_playerTokensCache`
  Future<void> loadTokensFromFirebase(String gameId) async {
    final dbRef = FirebaseDatabase.instance.ref();
    final snap = await dbRef.child('games/$gameId/state/tokens').get();
    final data = snap.value as Map<dynamic, dynamic>?;

    if (data == null) {
      _playerTokensCache.clear();
      return;
    }

    _playerTokensCache.clear();
    data.forEach((playerKey, tokensMap) {
      final List<Token> list = [];
      (tokensMap as Map).forEach((tokenId, positionId) {
        // find the matching Token in allTokens
        final token = allTokens.firstWhere((t) => t.tokenId == tokenId);
        // update its positionId (and optionally its Vector2 position)
        token.positionId = positionId as String;
        list.add(token);
      });
      _playerTokensCache[playerKey as String] = list;
    });
  }
}
