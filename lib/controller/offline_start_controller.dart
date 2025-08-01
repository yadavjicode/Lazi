import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/api_service/api_service.dart';
import 'package:ludonew/model/offline_start_model.dart';
import 'package:ludonew/online_ludo/online_four_player/four_player_web_view.dart';
import 'package:ludonew/online_ludo/online_two_player/two_player_web_view.dart';
import 'package:ludonew/widgets/CustomSnackbar.dart';

class OfflineStartTwoController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  OfflineStartModel? _member;
  String? _error;
  OfflineStartModel? get member => _member;
  String? get error => _error;

  Future<void> offlineStartTwo(
      BuildContext context,
      String playerId,
      String playerCount,
      String tournamentId,
      String playerName,
      String profileImage) async {
    isLoading.value = true;
    _error = null;

    try {
      _member =
          await apiService.offlineStart(playerId, playerCount, tournamentId);

      print(
          "game id ${member?.offlineGameId ?? ""} tournament id ${member?.offlineTournamentId ?? ""}");
      if (member?.offlineGameId != null &&
          member?.offlineTournamentId != null) {
        Get.to(TwoPlayerWebView(
          userId: playerId,
          name: playerName,
          profileImage: profileImage,
          tournamentId: tournamentId,
          offlineGameId: "${member?.offlineGameId ?? ""}",
          offlineTournamentId: "${member?.offlineTournamentId ?? ""}",
        ));
      } else {
        print(
            "game id ${member?.offlineGameId ?? ""} tournament id ${member?.offlineTournamentId ?? ""}");
      }
    } catch (e) {
      _error = e.toString();
      print(_error);
      CustomSanckbar.showSnackbar(
          context,
          "Something went wrong while fetching data. Please try again later!",
          false);
    } finally {
      isLoading.value = false;
    }
  }
}

class OfflineStartFourController extends GetxController {
  final ApiService apiService = ApiService();
  var isLoading = false.obs;
  OfflineStartModel? _member;
  String? _error;
  OfflineStartModel? get member => _member;
  String? get error => _error;

  Future<void> offlineStartFour(
      BuildContext context,
      String playerId,
      String playerCount,
      String tournamentId,
      String playerName,
      String profileImage) async {
    isLoading.value = true;
    _error = null;

    try {
      _member =
          await apiService.offlineStart(playerId, playerCount, tournamentId);

      print(
          "game id ${member?.offlineGameId ?? ""} tournament id ${member?.offlineTournamentId ?? ""}");
      if (member?.offlineGameId != null &&
          member?.offlineTournamentId != null) {
        Get.to(FourPlayerWebView(
          userId: playerId,
          name: playerName,
          profileImage: profileImage,
          tournamentId: tournamentId,
          offlineGameId: "${member?.offlineGameId ?? ""}",
          offlineTournamentId: "${member?.offlineTournamentId ?? ""}",
        ));
      } else {
        print(
            "game id ${member?.offlineGameId ?? ""} tournament id ${member?.offlineTournamentId ?? ""}");
      }
    } catch (e) {
      _error = e.toString();
      print(_error);
      CustomSanckbar.showSnackbar(
          context,
          "Something went wrong while fetching data. Please try again later!",
          false);
    } finally {
      isLoading.value = false;
    }
  }
}
